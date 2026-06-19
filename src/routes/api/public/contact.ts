import * as React from 'react'
import { render } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'AI Systems'
const SENDER_DOMAIN = 'notify.aisystems.company'
const FROM_DOMAIN = 'notify.aisystems.company'
const TEMPLATE_NAME = 'contact-lead'

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(3).max(60),
  messenger: z.string().trim().max(120).optional().default(''),
  industry: z.string().trim().max(160).optional().default(''),
  goal: z.string().trim().max(2000).optional().default(''),
})

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !serviceKey) {
          return Response.json({ error: 'Server misconfigured' }, { status: 500 })
        }

        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = schema.safeParse(body)
        if (!parsed.success) {
          return Response.json({ error: 'Invalid form data' }, { status: 400 })
        }
        const data = parsed.data

        const template = TEMPLATES[TEMPLATE_NAME]
        if (!template || !template.to) {
          return Response.json({ error: 'Template not configured' }, { status: 500 })
        }

        const supabase = createClient(supabaseUrl, serviceKey)
        const messageId = crypto.randomUUID()
        const recipient = template.to

        const element = React.createElement(template.component, data)
        const html = await render(element)
        const text = await render(element, { plainText: true })
        const subject =
          typeof template.subject === 'function'
            ? template.subject(data)
            : template.subject

        await supabase.from('email_send_log').insert({
          message_id: messageId,
          template_name: TEMPLATE_NAME,
          recipient_email: recipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabase.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: recipient,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            sender_domain: SENDER_DOMAIN,
            subject,
            html,
            text,
            purpose: 'transactional',
            label: TEMPLATE_NAME,
            idempotency_key: messageId,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('contact enqueue failed', enqueueError)
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: TEMPLATE_NAME,
            recipient_email: recipient,
            status: 'failed',
            error_message: 'enqueue failed',
          })
          return Response.json({ error: 'Send failed' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})

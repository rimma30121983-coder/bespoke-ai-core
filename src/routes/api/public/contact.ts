import * as React from 'react'
import { render } from '@react-email/components'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

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
        // Read SMTP config inside the handler — env is injected at request time
        const SMTP_HOST = process.env.SMTP_HOST ?? 'smtp.mail.ru'
        const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465)
        const SMTP_USER = process.env.SMTP_USER
        const SMTP_PASS = process.env.SMTP_PASS
        const MAIL_TO = process.env.MAIL_TO ?? 'aisystems@bk.ru'
        const MAIL_FROM = process.env.MAIL_FROM ?? SMTP_USER

        if (!SMTP_USER || !SMTP_PASS) {
          console.error('contact form: SMTP_USER / SMTP_PASS not configured')
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
        if (!template) {
          return Response.json({ error: 'Template missing' }, { status: 500 })
        }

        const element = React.createElement(template.component, data)
        const html = await render(element)
        const text = await render(element, { plainText: true })
        const subject =
          typeof template.subject === 'function'
            ? template.subject(data)
            : template.subject

        try {
          // Dynamic import — nodemailer is Node-only; keep it out of the client bundle
          const nodemailer = (await import('nodemailer')).default
          const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_PORT === 465,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
          })

          await transporter.sendMail({
            from: MAIL_FROM,
            to: MAIL_TO,
            replyTo: MAIL_FROM,
            subject,
            html,
            text,
          })
        } catch (error) {
          console.error('contact form: SMTP send failed', error)
          return Response.json({ error: 'Send failed' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})

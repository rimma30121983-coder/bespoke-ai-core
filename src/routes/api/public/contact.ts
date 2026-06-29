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

type Lead = z.infer<typeof schema>

function formatTelegramMessage(d: Lead) {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const line = (label: string, value?: string) =>
    value && value.trim() ? `<b>${label}:</b> ${esc(value)}` : null
  return [
    '🔔 <b>Новая заявка с сайта</b>',
    '',
    line('Имя', d.name),
    line('Телефон', d.phone),
    line('Telegram / WhatsApp', d.messenger),
    line('Сфера бизнеса', d.industry),
    line('Что хочет автоматизировать', d.goal),
    '',
    '<i>aisystems.company</i>',
  ]
    .filter(Boolean)
    .join('\n')
}

async function sendTelegram(d: Lead): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return false
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatTelegramMessage(d),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })
    if (!res.ok) {
      console.error('telegram send failed', res.status, await res.text())
      return false
    }
    return true
  } catch (e) {
    console.error('telegram send error', e)
    return false
  }
}

async function sendGoogleSheets(d: Lead): Promise<boolean> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  if (!url) return false
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...d,
      }),
    })
    if (!res.ok) {
      console.error('sheets send failed', res.status, await res.text())
      return false
    }
    return true
  } catch (e) {
    console.error('sheets send error', e)
    return false
  }
}

async function sendEmail(d: Lead): Promise<boolean> {
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS
  if (!SMTP_USER || !SMTP_PASS) return false
  try {
    const template = TEMPLATES[TEMPLATE_NAME]
    if (!template) return false
    const element = React.createElement(template.component, d)
    const html = await render(element)
    const text = await render(element, { plainText: true })
    const subject =
      typeof template.subject === 'function' ? template.subject(d) : template.subject

    const nodemailer = (await import('nodemailer')).default
    const SMTP_HOST = process.env.SMTP_HOST ?? 'smtp.mail.ru'
    const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465)
    const MAIL_TO = process.env.MAIL_TO ?? 'aisystems@bk.ru'
    const MAIL_FROM = process.env.MAIL_FROM ?? SMTP_USER

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
    return true
  } catch (e) {
    console.error('email send error', e)
    return false
  }
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
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

        // Send to all channels in parallel. Telegram & Sheets are primary; email is backup.
        const [telegramOk, sheetsOk, emailOk] = await Promise.all([
          sendTelegram(data),
          sendGoogleSheets(data),
          sendEmail(data),
        ])

        const anyOk = telegramOk || sheetsOk || emailOk
        if (!anyOk) {
          console.error('contact form: all delivery channels failed', {
            telegram: !!process.env.TELEGRAM_BOT_TOKEN,
            sheets: !!process.env.GOOGLE_SHEETS_WEBHOOK_URL,
            email: !!process.env.SMTP_USER,
          })
          return Response.json({ error: 'Send failed' }, { status: 500 })
        }

        return Response.json({
          success: true,
          channels: { telegram: telegramOk, sheets: sheetsOk, email: emailOk },
        })
      },
    },
  },
})

import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  phone?: string
  messenger?: string
  industry?: string
  goal?: string
}

const Email = ({ name, phone, messenger, industry, goal }: Props) => (
  <Html lang="ru" dir="ltr">
    <Head />
    <Preview>Новая заявка с сайта AI Systems</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Новая заявка с сайта</Heading>
        <Text style={lead}>Получена новая заявка с aisystems.company</Text>
        <Hr style={hr} />
        <Section>
          <Row label="Имя" value={name} />
          <Row label="Телефон" value={phone} />
          <Row label="Telegram / WhatsApp" value={messenger} />
          <Row label="Сфера бизнеса" value={industry} />
          <Row label="Что хочет автоматизировать" value={goal} multiline />
        </Section>
        <Hr style={hr} />
        <Text style={footer}>AI Systems · aisystems.company</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({
  label,
  value,
  multiline,
}: {
  label: string
  value?: string
  multiline?: boolean
}) => (
  <Section style={{ marginBottom: '14px' }}>
    <Text style={rowLabel}>{label}</Text>
    <Text style={multiline ? rowValueMulti : rowValue}>
      {value && value.trim() ? value : '—'}
    </Text>
  </Section>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) =>
    `Новая заявка с сайта${d?.name ? ` — ${d.name}` : ''}`,
  displayName: 'Заявка с сайта',
  to: 'aisystems@bk.ru',
  previewData: {
    name: 'Иван Иванов',
    phone: '+7 999 123 45 67',
    messenger: '@ivan',
    industry: 'Логистика',
    goal: 'Автоматизировать обработку заявок и отчётность.',
  },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  color: '#0b1020',
  margin: 0,
  padding: '24px 0',
}
const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '28px 28px',
  border: '1px solid #e6e8ef',
  borderRadius: '14px',
  backgroundColor: '#ffffff',
}
const h1: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 600,
  margin: '0 0 6px',
  color: '#0b1020',
}
const lead: React.CSSProperties = {
  fontSize: '14px',
  color: '#5b6478',
  margin: '0',
}
const hr: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #eef0f5',
  margin: '20px 0',
}
const rowLabel: React.CSSProperties = {
  fontSize: '11px',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#7a8298',
  margin: '0 0 4px',
}
const rowValue: React.CSSProperties = {
  fontSize: '15px',
  color: '#0b1020',
  margin: 0,
  fontWeight: 500,
}
const rowValueMulti: React.CSSProperties = {
  fontSize: '14px',
  color: '#0b1020',
  margin: 0,
  whiteSpace: 'pre-wrap',
  lineHeight: 1.5,
}
const footer: React.CSSProperties = {
  fontSize: '12px',
  color: '#9aa1b2',
  margin: 0,
}

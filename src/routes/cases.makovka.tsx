import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Store, Check, Sparkles } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/cases/makovka")({
  head: () => ({
    meta: [
      { title: "Кейс: CRM для сети пекарен «Маковка» — CRM AI Systems" },
      { name: "description", content: "Индивидуальная CRM для управления сетью пекарен: задачи, сотрудники, поставщики, аналитика и операционные процессы." },
      { property: "og:title", content: "Кейс: CRM для сети пекарен «Маковка»" },
      { property: "og:description", content: "Реальный кейс индивидуальной CRM-системы для сети пекарен." },
    ],
  }),
  component: CaseMakovka,
});

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 lg:py-16">
      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</div>
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5 text-foreground/85 leading-relaxed">{children}</div>
    </section>
  );
}

function CaseMakovka() {
  const problems = [
    "Процессы были разрознены",
    "Задачи могли теряться в переписках",
    "Поставщики и операционные вопросы требовали отдельного контроля",
    "Руководителю было сложно быстро видеть общую картину",
    "Часть работы выполнялась вручную",
  ];

  const modules = [
    "Дашборд руководителя", "Задачи", "Сотрудники", "Поставщики",
    "Операционные процессы", "Аналитика", "Уведомления", "Настройки", "Роли и доступы",
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <div className="pt-28 lg:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>

          {/* Hero */}
          <header className="mt-8 relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_30%_30%,color-mix(in_oklab,var(--brand-violet)_25%,transparent),transparent_70%)] blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-foreground/70">
                <Store className="w-3.5 h-3.5 text-brand-cyan" /> Реальный кейс
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-tight leading-[1.08]">
                CRM для сети пекарен <span className="gradient-text">«Маковка»</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Индивидуальная система управления операционными процессами, задачами, поставщиками,
                сотрудниками и аналитикой сети пекарен.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://makovkacrm.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-6 h-12 text-sm font-medium"
                >
                  Открыть кейс <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </header>

          <Section eyebrow="Задача" title="Единый центр управления сетью">
            Создать единую цифровую систему, которая помогает руководителю видеть состояние сети,
            контролировать задачи, сотрудников, поставщиков и ключевые показатели бизнеса.
          </Section>

          <Section eyebrow="Проблемы" title="Какие проблемы решала система">
            <ul className="grid sm:grid-cols-2 gap-3">
              {problems.map((p) => (
                <li key={p} className="premium-card p-4 flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet shrink-0" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section eyebrow="Решение" title="Индивидуальная CRM под процессы сети">
            Была создана индивидуальная CRM-система под процессы сети пекарен, где ключевые разделы
            объединены в одном интерфейсе.
          </Section>

          <Section eyebrow="Модули" title="Какие модули вошли в CRM">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {modules.map((m) => (
                <div key={m} className="premium-card p-4 flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue to-brand-violet">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm">{m}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section eyebrow="Для руководителя" title="Как система помогает управлять">
            Руководитель видит состояние сети в одном дашборде: задачи, ответственных, поставщиков,
            ключевые показатели и операционные процессы. Это сокращает время на контроль и
            ускоряет принятие управленческих решений.
          </Section>

          <Section eyebrow="Интерфейс" title="Визуальный mockup интерфейса">
            <div className="premium-card p-4 sm:p-6 rounded-[1.5rem]">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gradient-to-br from-brand-blue/15 via-brand-violet/10 to-transparent border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/70">
                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan" /> Bakery CRM Dashboard
                  </div>
                  <div className="mt-3 text-lg font-semibold">Единый интерфейс управления сетью</div>
                  <a
                    href="https://makovkacrm.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-brand-cyan hover:underline"
                  >
                    Открыть живой кейс <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Section>

          <Section eyebrow="Результат" title="Цифровой центр управления бизнесом">
            Система помогает управлять сетью пекарен из единого цифрового центра: контролировать задачи,
            видеть ответственных, отслеживать процессы, работать с поставщиками и быстрее принимать
            управленческие решения.
          </Section>

          {/* CTA */}
          <section className="my-16 relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-blue)_30%,transparent),transparent_70%)] blur-2xl pointer-events-none" />
            <div className="relative premium-card p-8 sm:p-12 rounded-[1.7rem] text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Хотите похожую CRM под <span className="gradient-text">вашу сферу</span>?
              </h3>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Оставьте заявку — обсудим ваши процессы и предложим структуру будущей системы.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  hash="contact"
                  className="btn-primary inline-flex items-center rounded-full px-7 h-12 text-sm font-medium"
                >
                  Обсудить проект
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, Bot, Bell } from "lucide-react";

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* background decorations */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand-blue/20 blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-brand-violet/20 blur-3xl animate-pulse-soft" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Custom CRM • AI Systems • Enterprise
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Индивидуальные{" "}
              <span className="gradient-text">CRM и AI-системы</span>{" "}
              под ваш бизнес
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Создаём цифровые системы, которые объединяют продажи, задачи, клиентов, поставщиков, сотрудников, аналитику и AI-рекомендации в одном удобном интерфейсе.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollTo("#contact")} className="btn-primary inline-flex items-center gap-2 rounded-full h-12 px-6 text-sm font-medium">
                Обсудить проект <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo("#features")} className="btn-ghost inline-flex items-center rounded-full h-12 px-6 text-sm font-medium">
                Посмотреть возможности
              </button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              От идеи и структуры до готовой рабочей системы под ваши процессы.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "CRM под вашу логику",
                "AI-анализ и рекомендации",
                "Разработка под ключ",
              ].map((t) => (
                <div key={t} className="glass rounded-xl px-4 py-3 flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="text-foreground/90">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="relative w-full max-w-full">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/30 via-brand-violet/20 to-transparent blur-2xl rounded-3xl" />
            <div className="relative glass-strong rounded-2xl p-3 sm:p-4 shadow-2xl">
              <div className="flex items-center gap-1.5 px-1 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="ml-3 text-[10px] text-muted-foreground tracking-wide">crm.aisystems.app / dashboard</div>
              </div>

              <div className="rounded-xl bg-background/60 border border-border p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Дашборд</div>
                    <div className="text-sm font-medium">Обзор бизнеса</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { l: "Клиенты", v: "1 284" },
                    { l: "Сделки", v: "327" },
                    { l: "Задачи", v: "58" },
                    { l: "Конверсия", v: "24%" },
                  ].map((m) => (
                    <div key={m.l} className="rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2.5">
                      <div className="text-[10px] text-muted-foreground">{m.l}</div>
                      <div className="text-sm font-semibold mt-0.5">{m.v}</div>
                    </div>
                  ))}
                </div>

                {/* Sales chart */}
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[11px] text-muted-foreground flex items-center gap-1.5"><TrendingUp className="w-3 h-3" />График продаж</div>
                    <div className="text-[10px] text-brand-cyan">+18.4%</div>
                  </div>
                  <svg viewBox="0 0 300 80" className="w-full h-16">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.65 0.21 265)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="oklch(0.65 0.21 265)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,60 L30,52 L60,55 L90,40 L120,45 L150,30 L180,35 L210,22 L240,28 L270,15 L300,20 L300,80 L0,80 Z" fill="url(#g1)" />
                    <path d="M0,60 L30,52 L60,55 L90,40 L120,45 L150,30 L180,35 L210,22 L240,28 L270,15 L300,20" fill="none" stroke="oklch(0.7 0.2 280)" strokeWidth="1.8" />
                  </svg>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <div className="text-[11px] text-muted-foreground mb-2">Задачи</div>
                    <ul className="space-y-1.5">
                      {["Согласовать смету", "Звонок с клиентом", "Подготовить отчёт"].map((t, i) => (
                        <li key={t} className="flex items-center gap-2 text-[11px]">
                          <span className={`h-3 w-3 rounded-sm border ${i === 0 ? "bg-brand-blue border-brand-blue" : "border-white/20"}`} />
                          <span className={i === 0 ? "line-through text-muted-foreground" : ""}>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-3 relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.65 0.21 265 / 0.18), oklch(0.6 0.24 295 / 0.18))", border: "1px solid oklch(1 0 0 / 0.08)" }}>
                    <div className="flex items-center gap-2 text-[11px]">
                      <Bot className="w-3.5 h-3.5 text-brand-cyan" />
                      <span className="font-medium">AI Assistant</span>
                    </div>
                    <p className="mt-2 text-[11px] text-foreground/85 leading-relaxed">
                      Конверсия на этапе переговоров снизилась на 12%. Рекомендуется проверить скорость ответа менеджеров и причины отказов.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* floating cards */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 glass rounded-xl p-3 items-center gap-2 animate-float">
              <Bell className="w-4 h-4 text-brand-cyan" />
              <div className="text-[11px]">
                <div className="font-medium">Новая сделка</div>
                <div className="text-muted-foreground">+ 240 000 ₽</div>
              </div>
            </div>
            <div className="hidden sm:flex absolute -top-5 -right-5 glass rounded-xl p-3 items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
              <Sparkles className="w-4 h-4 text-brand-violet" />
              <div className="text-[11px]">
                <div className="font-medium">AI Insight</div>
                <div className="text-muted-foreground">3 рекомендации</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

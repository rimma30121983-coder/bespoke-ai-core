import {
  AlertTriangle, EyeOff, ClipboardX, Hand,
  Gauge, Users, ListChecks, Brain, Plug, FileBarChart,
  Briefcase, Network, Factory, Truck, Wrench, Stethoscope,
  AlertOctagon, Lightbulb, ShieldAlert,
  Microscope, FileEdit, Code2, RefreshCw,
  TrendingDown, MapPin,
} from "lucide-react";

const SectionTitle = ({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; center?: boolean }) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-violet animate-pulse" />
        {eyebrow}
      </div>
    )}
    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.08]">
      {title}
    </h2>
    {subtitle && <p className="mt-5 text-base sm:text-[17px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`premium-card p-6 sm:p-7 ${className}`}>{children}</div>
);

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="icon-chip inline-flex h-11 w-11 items-center justify-center rounded-xl shrink-0">
    {children}
  </div>
);

/* ---------------- PROBLEMS ---------------- */
export function Problems() {
  const items = [
    { i: <AlertTriangle className="w-5 h-5" />, t: "Данные разбросаны по таблицам, чатам и сервисам" },
    { i: <ClipboardX className="w-5 h-5" />, t: "Задачи и договорённости теряются" },
    { i: <EyeOff className="w-5 h-5" />, t: "Руководитель не видит полную картину бизнеса" },
    { i: <Hand className="w-5 h-5" />, t: "Много ручного контроля и повторяющихся действий" },
  ];
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Проблема"
          title={<>Когда бизнес растёт, таблиц и чатов <span className="gradient-text">уже недостаточно</span></>}
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Card key={it.t}>
              <Icon>{it.i}</Icon>
              <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{it.t}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
export function Solution() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto premium-card ring-gradient p-8 sm:p-12 overflow-hidden"
             style={{ background: "linear-gradient(180deg, oklch(0.66 0.2 265 / 0.14), oklch(0.62 0.24 295 / 0.06))" }}>
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-brand-violet/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-brand-blue/25 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Решение
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.1]">
              Собираем процессы бизнеса в <span className="gradient-text">единую AI-систему</span>
            </h2>
            <p className="mt-5 text-base sm:text-[17px] text-foreground/85 leading-relaxed max-w-2xl">
              Проектируем систему под вашу логику: задачи, клиенты, сотрудники, аналитика, роли, уведомления и автоматизация — в одном рабочем интерфейсе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
export function Features() {
  const items = [
    { i: <Gauge className="w-5 h-5" />, t: "Управленческий дашборд", d: "Ключевые метрики, задачи и состояние бизнеса в одном экране." },
    { i: <ListChecks className="w-5 h-5" />, t: "Задачи и процессы", d: "Постановка, контроль сроков, ответственные и напоминания." },
    { i: <Users className="w-5 h-5" />, t: "Клиенты и заявки", d: "Единая база клиентов, лиды, сделки и история коммуникаций." },
    { i: <FileBarChart className="w-5 h-5" />, t: "Аналитика и отчёты", d: "Финансы, продажи, эффективность команды и прогнозы." },
    { i: <Brain className="w-5 h-5" />, t: "AI-рекомендации", d: "ИИ анализирует данные и подсказывает следующие действия." },
    { i: <Plug className="w-5 h-5" />, t: "Интеграции и доступы", d: "Подключение сервисов и гибкие роли для команды." },
  ];

  return (
    <section id="capabilities" className="relative py-16 lg:py-24">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-radial-fade opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Что входит"
          title={<>Единая <span className="gradient-text">AI-система</span> — а не набор разрозненных функций</>}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <Card key={it.t} className="group shine-overlay">
              <Icon>{it.i}</Icon>
              <h3 className="mt-4 text-base font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
          <span className="text-foreground/80 font-medium">Дополнительно:</span> поставщики, документы, финансы, база знаний, уведомления, роли и индивидуальные модули.
        </p>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
export function Industries() {
  const items = [
    { i: <Briefcase className="w-5 h-5" />, t: "Продажи и B2B" },
    { i: <Network className="w-5 h-5" />, t: "Франшизы и сети" },
    { i: <Factory className="w-5 h-5" />, t: "Производство и логистика" },
    { i: <Wrench className="w-5 h-5" />, t: "Услуги и сервис" },
    { i: <Stethoscope className="w-5 h-5" />, t: "Медицина, образование, недвижимость" },
  ];
  return (
    <section id="audience" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Для кого"
          title={<>Системы для <span className="gradient-text">разных сфер бизнеса</span></>}
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map((it) => (
            <div key={it.t} className="premium-card p-5 flex flex-col items-start gap-3">
              <Icon>{it.i}</Icon>
              <div className="text-sm font-medium leading-snug">{it.t}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <MapPin className="inline w-4 h-4 mr-1 text-brand-violet" />
          Если вашей сферы нет в списке — система всё равно проектируется под ваши реальные процессы.
        </p>
      </div>
    </section>
  );
}

/* ---------------- AI BLOCK ---------------- */
export function AIBlock() {
  const items = [
    { i: <AlertOctagon className="w-4 h-4" />, t: "Анализирует данные" },
    { i: <ShieldAlert className="w-4 h-4" />, t: "Находит слабые места" },
    { i: <Lightbulb className="w-4 h-4" />, t: "Подсказывает следующие действия" },
    { i: <TrendingDown className="w-4 h-4" />, t: "Помогает руководителю видеть риски" },
  ];
  return (
    <section id="ai" className="relative py-16 lg:py-24">
      <div className="absolute inset-0 bg-radial-fade opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="AI"
          title={<>AI <span className="gradient-text">внутри вашей системы</span></>}
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.t} className="premium-card p-4 flex items-start gap-3 shine-overlay">
                <div className="h-9 w-9 rounded-lg gradient-brand inline-flex items-center justify-center text-white shrink-0 shadow-[0_8px_20px_-6px_oklch(0.62_0.24_295_/_0.55)]">
                  {it.i}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">{it.t}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-violet/30 to-brand-blue/25 blur-3xl rounded-3xl" />
            <div className="relative premium-card ring-gradient p-6 overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/70 to-transparent animate-scan" />

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-xl gradient-brand inline-flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-brand-cyan ai-dot" />
                </div>
                <div>
                  <div className="text-sm font-semibold">AI Insights</div>
                  <div className="text-xs text-muted-foreground">Анализ за последние 14 дней</div>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 px-2.5 py-1 text-[10px] text-brand-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan ai-dot" /> AI active
                </span>
              </div>

              <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <div className="text-[10px] uppercase tracking-[0.14em] text-brand-violet mb-1.5">Next recommended action</div>
                <p className="text-sm leading-relaxed text-foreground/95">
                  AI обнаружил снижение конверсии на этапе переговоров. Проверьте скорость ответа, скрипты и причины отказов.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1"><TrendingDown className="w-3 h-3" />Риск</div>
                  <div className="text-sm font-semibold text-destructive mt-1">Высокий</div>
                </div>
                <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                  <div className="text-[10px] text-muted-foreground">Зона</div>
                  <div className="text-sm font-semibold mt-1">Продажи</div>
                </div>
                <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
                  <div className="text-[10px] text-muted-foreground">Действие</div>
                  <div className="text-sm font-semibold mt-1 leading-tight">Проверить переговоры</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
export function Process() {
  const steps = [
    { i: <Microscope className="w-5 h-5" />, t: "Диагностика", d: "Изучаем процессы, задачи и цели бизнеса." },
    { i: <FileEdit className="w-5 h-5" />, t: "Проектирование", d: "Создаём структуру системы, роли, модули и сценарии." },
    { i: <Code2 className="w-5 h-5" />, t: "Разработка", d: "Собираем интерфейс, логику, интеграции и AI-функции." },
    { i: <RefreshCw className="w-5 h-5" />, t: "Запуск и развитие", d: "Тестируем, внедряем и дорабатываем систему под рост бизнеса." },
  ];
  return (
    <section id="process" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Как работаем" title={<>Как мы <span className="gradient-text">создаём систему</span></>} />

        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px"
               style={{ background: "linear-gradient(180deg, transparent, oklch(0.78 0.14 210 / 0.6), oklch(0.66 0.2 265 / 0.7) 40%, oklch(0.62 0.24 295 / 0.7) 70%, transparent)" }} />

          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s.t} className="relative pl-14 sm:pl-16">
                <div className="absolute left-0 top-1">
                  <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-semibold shadow-[0_0_24px_-4px_oklch(0.66_0.2_265_/_0.7)]">
                    0{i + 1}
                    <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
                  </div>
                </div>
                <div className="premium-card p-5 sm:p-6 shine-overlay">
                  <div className="flex items-center gap-3">
                    <Icon>{s.i}</Icon>
                    <h3 className="text-base sm:text-lg font-semibold">{s.t}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import {
  AlertTriangle, EyeOff, ClipboardX, Hand,
  Gauge, Users, ListChecks, Brain, Plug, FileBarChart,
  Briefcase, Network, Factory, Truck, Wrench, Stethoscope, Building,
  AlertOctagon, Lightbulb, ShieldAlert,
  Microscope, FileEdit, Code2, RefreshCw,
  TrendingDown, MapPin, CheckCircle2, LayoutDashboard, Sparkles, ArrowRight,
  Database, BarChart3, ShoppingCart, Expand, Layers,
  Clock, Zap, ShoppingBag, UtensilsCrossed,
  Crown, TrendingUp, Settings2,
} from "lucide-react";
import { CountUp } from "./CountUp";


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

/* ---------------- PROBLEMS → SOLUTION ---------------- */
export function Problems() {
  const before = [
    { i: <AlertTriangle className="w-4 h-4" />, t: "Данные в таблицах, чатах и сервисах" },
    { i: <ClipboardX className="w-4 h-4" />, t: "Задачи теряются" },
    { i: <EyeOff className="w-4 h-4" />, t: "Нет единой картины" },
    { i: <Hand className="w-4 h-4" />, t: "Много ручного контроля" },
  ];
  const after = [
    { i: <LayoutDashboard className="w-4 h-4" />, t: "Единая система управления" },
    { i: <CheckCircle2 className="w-4 h-4" />, t: "Задачи и процессы под контролем" },
    { i: <Gauge className="w-4 h-4" />, t: "Дашборд для руководителя" },
    { i: <Sparkles className="w-4 h-4" />, t: "AI-рекомендации и автоматизация" },
  ];
  const pains = [
    { i: <Database className="w-4 h-4" />, t: "Разрозненные данные", d: "1С, таблицы и чаты собираются в единое ядро." },
    { i: <ClipboardX className="w-4 h-4" />, t: "Потерянные задачи", d: "Ответственные, сроки и статусы становятся прозрачными." },
    { i: <Hand className="w-4 h-4" />, t: "Ручной контроль", d: "Руководитель видит процессы без постоянных уточнений." },
    { i: <BarChart3 className="w-4 h-4" />, t: "Слабая аналитика", d: "AI подсвечивает риски, отклонения и следующие действия." },
    { i: <ShoppingCart className="w-4 h-4" />, t: "Потери в продажах", d: "Воронка, конверсия и причины отказов становятся видимыми." },
    { i: <Expand className="w-4 h-4" />, t: "Сложность масштабирования", d: "Роли, процессы и правила легче переносить на новые отделы и точки." },
  ];
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Проблема → Решение"
          title={<>От разрозненных процессов — к&nbsp;<span className="gradient-text">единой AI-системе</span></>}
          subtitle="AI-система собирает данные, задачи и аналитику в один центр управления, чтобы руководитель видел риски, просрочки и точки роста без ручного контроля."
        />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
          <div className="premium-card p-6 sm:p-7">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive/80" />
              Сейчас
            </div>
            <ul className="mt-5 space-y-3">
              {before.map((it) => (
                <li key={it.t} className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive shrink-0">
                    {it.i}
                  </span>
                  <span className="text-sm text-foreground/85 leading-relaxed">{it.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center justify-center px-2">
            <div className="h-10 w-10 rounded-full gradient-brand flex items-center justify-center shadow-[0_0_24px_-4px_oklch(0.66_0.2_265_/_0.7)]">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="premium-card ring-gradient p-6 sm:p-7 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-violet/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-brand-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                После внедрения
              </div>
              <ul className="mt-5 space-y-3">
                {after.map((it) => (
                  <li key={it.t} className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg gradient-brand text-white shrink-0">
                      {it.i}
                    </span>
                    <span className="text-sm text-foreground/90 leading-relaxed">{it.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Какие боли закрываем
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pains.map((p) => (
              <div key={p.t} className="premium-card p-4 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg gradient-brand text-white shrink-0">
                  {p.i}
                </span>
                <div>
                  <div className="text-sm font-semibold leading-tight">{p.t}</div>
                  <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Кто чаще всего приходит за AI-системой */}
        <div className="mt-16">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Целевая аудитория
            </div>
            <h3 className="mt-5 text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold tracking-tight leading-[1.1]">
              Кто чаще всего приходит <span className="gradient-text">за AI-системой</span>
            </h3>
            <p className="mt-4 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
              Собственники и руководители, которым уже сложно управлять бизнесом через таблицы, чаты и разрозненные сервисы.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {[
              {
                icon: <Crown className="w-7 h-7" />,
                role: "Собственник растущего бизнеса",
                pain: "контроль держится на личном участии",
                need: "видеть процессы, задачи, продажи и сотрудников в одной системе",
                result: "меньше ручного контроля, больше прозрачности",
                glow: "from-brand-blue/40 to-brand-violet/25",
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                role: "Руководитель отдела продаж",
                pain: "заявки теряются, менеджеры работают по-разному",
                need: "контролировать воронку, задачи, статусы и конверсию",
                result: "продажи становятся управляемыми",
                glow: "from-brand-cyan/40 to-brand-blue/25",
              },
              {
                icon: <Network className="w-7 h-7" />,
                role: "Франшиза / сеть / управляющая компания",
                pain: "сложно контролировать филиалы, стандарты и отчёты",
                need: "единый центр управления сетью",
                result: "прозрачность по точкам и процессам",
                glow: "from-brand-violet/40 to-brand-blue/25",
              },
              {
                icon: <Settings2 className="w-7 h-7" />,
                role: "Операционный руководитель",
                pain: "много ручных проверок, задач и согласований",
                need: "видеть просрочки, ответственных и узкие места",
                result: "меньше хаоса, быстрее управление",
                glow: "from-brand-blue/40 to-brand-cyan/25",
              },
            ].map((p) => (
              <article
                key={p.role}
                className="relative group premium-card lift-card rounded-2xl p-5 sm:p-6 overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 w-[220px] h-[220px] rounded-full bg-gradient-to-br ${p.glow} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="relative flex items-start gap-4">
                  {/* AI avatar / portrait */}
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/50 via-brand-violet/40 to-brand-cyan/30 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white ring-1 ring-white/20">
                      {p.icon}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-[15px] sm:text-base font-semibold leading-snug">
                      {p.role}
                    </h4>
                    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-foreground/60">
                      <span className="h-1 w-1 rounded-full bg-brand-cyan" />
                      Портрет клиента
                    </div>
                  </div>
                </div>

                <div className="relative mt-5 space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400/80 shrink-0" />
                    <div className="text-[13px] leading-relaxed">
                      <span className="text-muted-foreground">Боль: </span>
                      <span className="text-foreground/90">{p.pain}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                    <div className="text-[13px] leading-relaxed">
                      <span className="text-muted-foreground">Нужно: </span>
                      <span className="text-foreground/90">{p.need}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-cyan shrink-0" />
                    <div className="text-[13px] leading-relaxed">
                      <span className="text-muted-foreground">Результат: </span>
                      <span className="gradient-text font-medium">{p.result}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {/* Потенциальный эффект */}
          <div className="mt-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
                Эффект
              </div>
              <h3 className="mt-5 text-xl sm:text-2xl lg:text-[2rem] font-semibold tracking-tight leading-[1.1]">
                Потенциальный эффект для бизнеса
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                Точные показатели рассчитываются после аудита, но уже на этапе диагностики можно увидеть, где бизнес теряет время, деньги и управляемость.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: 25, prefix: "до ", suffix: "%", title: "экономия на процессах", desc: "за счёт прозрачности задач, сроков, ответственных и управленческой аналитики.", icon: <TrendingDown className="w-5 h-5" /> },
                { num: 50, prefix: "до ", suffix: "%", title: "экономия рабочего времени команды", desc: "за счёт сокращения ручных действий, повторяющихся операций и поиска информации.", icon: <Clock className="w-5 h-5" /> },
                { num: 35, prefix: "до ", suffix: "%", title: "сокращение рутинных операций", desc: "за счёт AI-автоматизации, уведомлений, подсказок и сценариев обработки данных.", icon: <Zap className="w-5 h-5" /> },
              ].map((c) => (
                <div key={c.title} className="premium-card lift-card ring-gradient p-6 sm:p-7 flex flex-col items-center text-center group">
                  <div className="lift-icon inline-flex h-11 w-11 items-center justify-center rounded-xl icon-chip shrink-0">
                    {c.icon}
                  </div>
                  <div className="mt-5 text-3xl sm:text-4xl font-bold gradient-text leading-none">
                    <CountUp end={c.num} prefix={c.prefix} suffix={c.suffix} />
                  </div>
                  <div className="mt-3 text-[15px] font-semibold leading-snug">{c.title}</div>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}

            </div>

            <div className="mt-8 text-center">
              <p className="inline-block text-[11px] text-muted-foreground bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 max-w-3xl leading-relaxed">
                Показатели являются рыночными ориентирами и не являются гарантией результата. Фактический эффект зависит от исходных процессов компании и рассчитывается после аудита.
              </p>
            </div>
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
          title={<>Готовая <span className="gradient-text">AI-система</span> с понятными алгоритмами</>}
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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          <span className="text-[13px] text-muted-foreground">Дополнительно:</span>
          {["Поставщики", "Документы", "Финансы", "База знаний", "Уведомления", "Роли", "Индивидуальные модули"].map((t) => (
            <span key={t} className="rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] text-foreground/75">
              {t}
            </span>
          ))}
        </div>
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
    { i: <ShoppingBag className="w-5 h-5" />, t: "Торговля" },
    { i: <UtensilsCrossed className="w-5 h-5" />, t: "Общепит" },
    { i: <Wrench className="w-5 h-5" />, t: "Услуги и сервис" },
    { i: <Stethoscope className="w-5 h-5" />, t: "Медицина и образование" },
    { i: <Building className="w-5 h-5" />, t: "Недвижимость" },
  ];
  return (
    <section id="audience" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Для кого"
          title={<>Системы для <span className="gradient-text">разных сфер бизнеса</span></>}
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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


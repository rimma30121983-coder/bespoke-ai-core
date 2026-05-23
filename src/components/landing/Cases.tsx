import {
  ArrowUpRight, Store, BarChart3, ListChecks,
  Sparkles, Network, Briefcase, ShoppingCart,
  Building2, CheckCircle2, MessageSquare, Activity,
} from "lucide-react";

const SectionTitle = ({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) => (
  <div className="max-w-3xl mx-auto text-center">
    <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-violet animate-pulse" />
      {eyebrow}
    </div>
    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.08]">
      {title}
    </h2>
    <p className="mt-5 text-base sm:text-[17px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

/* Compact decorative mini-mockups */
function MiniMockupBakery() {
  return (
    <div className="relative w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_20%,color-mix(in_oklab,var(--brand-violet)_18%,transparent),transparent_70%)] pointer-events-none" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.16em] text-foreground/55">Маковка</span>
      </div>
      <div className="relative mt-2.5 grid grid-cols-3 gap-1.5">
        {[
          { l: "Продажи", v: "₽1.84M" },
          { l: "Точки", v: "12" },
          { l: "Задачи", v: "27/34" },
        ].map((m) => (
          <div key={m.l} className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-1.5">
            <div className="text-[8.5px] uppercase tracking-wider text-muted-foreground truncate">{m.l}</div>
            <div className="text-[11px] font-semibold truncate">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="relative mt-2 rounded-md bg-white/[0.03] border border-white/10 p-2">
        <div className="flex items-center gap-1.5 text-[10px] font-medium"><BarChart3 className="w-3 h-3 text-brand-blue" /> Продажи по точкам</div>
        <svg viewBox="0 0 200 40" className="mt-1 w-full h-8">
          <defs>
            <linearGradient id="mb" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.7 0.21 265)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.55 0.22 290)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {[10, 18, 14, 24, 20, 30, 26, 36, 32, 40, 34, 38].map((h, i) => (
            <rect key={i} x={6 + i * 16} y={40 - h} width="10" height={h} rx="2" fill="url(#mb)" />
          ))}
        </svg>
      </div>
    </div>
  );
}

export function MiniMockupRasskazovka() {
  return (
    <div className="relative w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_20%,color-mix(in_oklab,var(--brand-blue)_18%,transparent),transparent_70%)] pointer-events-none" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.16em] text-foreground/55">Rasskazovka</span>
      </div>
      <div className="relative mt-2.5 grid grid-cols-3 gap-1.5">
        {[
          { l: "Задачи", v: "48/62" },
          { l: "Клиенты", v: "316" },
          { l: "Заявки", v: "27" },
        ].map((m) => (
          <div key={m.l} className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-1.5">
            <div className="text-[8.5px] uppercase tracking-wider text-muted-foreground truncate">{m.l}</div>
            <div className="text-[11px] font-semibold truncate">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="relative mt-2 rounded-md bg-white/[0.03] border border-white/10 p-2">
        <div className="flex items-center gap-1.5 text-[10px] font-medium"><Activity className="w-3 h-3 text-brand-blue" /> Операционная аналитика</div>
        <svg viewBox="0 0 200 40" className="mt-1 w-full h-8">
          <defs>
            <linearGradient id="mr" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="oklch(0.7 0.21 265)" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 200)" />
            </linearGradient>
          </defs>
          <polyline fill="none" stroke="url(#mr)" strokeWidth="2"
            points="5,32 25,28 45,30 65,20 85,24 105,14 125,18 145,8 165,12 185,4" />
          {[5,25,45,65,85,105,125,145,165,185].map((x, i) => (
            <circle key={i} cx={x} cy={[32,28,30,20,24,14,18,8,12,4][i]} r="1.6" fill="oklch(0.78 0.18 200)" />
          ))}
        </svg>
      </div>
    </div>
  );
}

type RealCase = {
  domainIcon: React.ReactNode;
  domain: string;
  title: React.ReactNode;
  description: string;
  tags: string[];
  result: string;
  liveUrl: string;
  mockup: React.ReactNode;
};

const realCases: RealCase[] = [
  {
    domainIcon: <Store className="w-3.5 h-3.5 text-brand-cyan" />,
    domain: "Сеть пекарен / общепит",
    title: <>CRM для сети пекарен <span className="gradient-text">«Маковка»</span></>,
    description: "Система управления задачами, поставщиками, сотрудниками и аналитикой сети.",
    tags: ["Дашборд", "Задачи", "Поставщики", "Сотрудники", "Аналитика"],
    result: "Единый центр управления сетью.",
    liveUrl: "https://makovkacrm.xyz/",
    mockup: <MiniMockupBakery />,
  },
  {
    domainIcon: <Building2 className="w-3.5 h-3.5 text-brand-cyan" />,
    domain: "Операционный контроль",
    title: <>Control Center для <span className="gradient-text">Rasskazovka</span></>,
    description: "Система управления задачами, клиентами, заявками, сотрудниками и аналитикой.",
    tags: ["Дашборд", "Задачи", "Клиенты", "Заявки", "Аналитика"],
    result: "Контроль ключевых процессов бизнеса.",
    liveUrl: "https://rasskazovka.xyz/",
    mockup: <MiniMockupRasskazovka />,
  },
];

function RealCaseCard({ c }: { c: RealCase }) {
  return (
    <div className="relative group h-full">
      <div className="absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-brand-blue/45 via-brand-violet/30 to-brand-cyan/20 opacity-40 group-hover:opacity-90 blur-[1px] transition-opacity pointer-events-none" />
      <article className="relative premium-card rounded-[1.35rem] p-5 sm:p-6 overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
        <div className="absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand-blue)_22%,transparent),transparent_65%)] blur-3xl pointer-events-none" />

        <div className="relative flex items-center justify-between gap-2 flex-wrap">
          <div className="inline-flex items-center gap-2 rounded-full glass px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em] text-foreground/75">
            {c.domainIcon}
            <span className="truncate max-w-[14rem]">{c.domain}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] font-medium bg-gradient-to-r from-brand-blue/25 to-brand-violet/25 border border-brand-blue/40 text-foreground">
            <CheckCircle2 className="w-3 h-3 text-brand-cyan" /> Реальный проект
          </span>
        </div>

        <h3 className="relative mt-3 text-xl sm:text-[1.4rem] font-semibold tracking-tight leading-snug break-words">
          {c.title}
        </h3>
        <p className="relative mt-2 text-[13.5px] text-foreground/75 leading-relaxed line-clamp-2">{c.description}</p>

        <div className="relative mt-3 flex flex-wrap gap-1.5">
          {c.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[11px] text-foreground/75">{t}</span>
          ))}
        </div>

        <div className="relative mt-4">{c.mockup}</div>

        <div className="relative mt-4 flex items-start gap-2 text-[12.5px] text-foreground/85">
          <Sparkles className="w-3.5 h-3.5 text-brand-cyan mt-0.5 shrink-0" />
          <p><span className="text-muted-foreground">Результат:</span> {c.result}</p>
        </div>

        <div className="relative mt-auto pt-5 flex items-center justify-between gap-3">
          <a
            href={c.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-4 h-10 text-[13px] font-medium"
          >
            Посмотреть проект <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span className="text-[11px] text-muted-foreground truncate">{new URL(c.liveUrl).hostname}</span>
        </div>
      </article>
    </div>
  );
}

type Format = {
  icon: React.ReactNode;
  title: string;
  description: string;
  modules: string[];
};

const formats: Format[] = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "AI-система для отдела продаж",
    description: "Помогает менеджерам работать с лидами, сделками, задачами и следующими действиями по клиентам.",
    modules: ["Воронка продаж", "Клиенты", "Задачи менеджеров", "AI-рекомендации", "Аналитика конверсии"],
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Система управления франшизой",
    description: "Единый центр контроля партнёров, заявок, обучения, стандартов, задач и развития сети.",
    modules: ["Партнёры", "Заявки", "База знаний", "Задачи", "Контроль стандартов", "Отчёты"],
  },
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "Панель контроля поставщиков и закупок",
    description: "Система для контроля поставщиков, заказов, условий, сроков, документов и операционных рисков.",
    modules: ["Поставщики", "Заказы", "Документы", "Сроки", "Статусы", "Уведомления"],
  },
];

function FormatCard({ f }: { f: Format }) {
  const goToForm = () => {
    const el = document.querySelector("#contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6 flex flex-col h-full hover:bg-white/[0.04] transition-colors">
      <div className="flex items-center justify-between gap-2">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-foreground/80">
          {f.icon}
        </div>
        <span className="text-[10px] uppercase tracking-[0.14em] text-foreground/55 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1">
          Формат системы
        </span>
      </div>
      <h4 className="mt-4 text-base sm:text-lg font-semibold leading-snug">{f.title}</h4>
      <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{f.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {f.modules.map((m) => (
          <span key={m} className="rounded-md bg-white/[0.03] border border-white/10 px-2 py-0.5 text-[10.5px] text-foreground/70">{m}</span>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <button
          onClick={goToForm}
          className="inline-flex items-center gap-1.5 text-sm text-foreground/85 hover:text-foreground border border-white/15 hover:bg-white/5 rounded-full px-4 h-10 transition-colors"
        >
          <MessageSquare className="w-4 h-4" /> Обсудить похожую систему
        </button>
      </div>
    </div>
  );
}

export function Cases() {
  const goToContact = () => {
    const el = document.querySelector("#contact");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="cases" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Кейсы"
          title={<>Реальные кейсы <span className="gradient-text">AI-систем и цифровых решений</span></>}
          subtitle="Примеры индивидуальных систем, созданных под конкретные бизнес-процессы, задачи руководителя и ежедневную работу команды."
        />

        {/* Real projects */}
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 border border-brand-blue/30 text-foreground/85">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Реальные проекты
            </span>
            <span className="text-xs text-muted-foreground hidden sm:inline">Запущены и работают</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
            {realCases.map((c, i) => (
              <RealCaseCard key={i} c={c} />
            ))}
          </div>
        </div>

        {/* Formats */}
        <div className="mt-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] bg-white/[0.04] border border-white/10 text-foreground/70">
                Возможные форматы
              </span>
              <h3 className="mt-3 text-2xl sm:text-[1.85rem] font-semibold tracking-tight leading-tight">
                Какие системы ещё <span className="gradient-text">можно разработать</span>
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                На основе похожей архитектуры можно создать AI-систему под разные задачи бизнеса —
                от продаж и франшиз до поставщиков и внутреннего контроля.
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
            {formats.map((f) => (
              <FormatCard key={f.title} f={f} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-blue)_28%,transparent),transparent_70%)] blur-2xl pointer-events-none" />
          <div className="relative premium-card rounded-[1.5rem] p-7 sm:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Хотите похожую AI-систему под <span className="gradient-text">вашу сферу</span>?
              </h3>
              <p className="mt-2 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                Разберём ваши процессы и предложим структуру цифровой системы под задачи руководителя,
                команды и бизнеса.
              </p>
            </div>
            <button
              onClick={goToContact}
              className="btn-primary inline-flex items-center justify-center rounded-full px-6 h-12 text-sm font-medium shrink-0"
            >
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  ArrowUpRight, Store, Users, Truck, BarChart3, ListChecks,
  Sparkles, Network, Briefcase, ShoppingCart,
  Building2, UserCircle2, Inbox, Activity, CheckCircle2, MessageSquare,
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

function MakovkaMockup() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 rounded-[1.6rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-violet)_30%,transparent),transparent_70%)] blur-2xl opacity-70 pointer-events-none" />
      <div className="relative premium-card p-3.5 sm:p-4 rounded-[1.3rem] overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
            <span className="ml-2 text-[10px] text-muted-foreground truncate">bakery.crm / dashboard</span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.18em] text-foreground/60 shrink-0">Маковка</span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] text-muted-foreground">Bakery CRM Dashboard</div>
            <div className="text-sm sm:text-base font-semibold truncate">Сеть пекарен «Маковка»</div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { l: "Продажи", v: "₽ 1.84M", d: "+12%" },
            { l: "Точки", v: "12", d: "сеть" },
            { l: "Задачи", v: "27 / 34", d: "контроль" },
            { l: "Поставщики", v: "18", d: "активны" },
          ].map((m) => (
            <div key={m.l} className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 min-w-0">
              <div className="text-[9px] uppercase tracking-wider text-muted-foreground truncate">{m.l}</div>
              <div className="mt-0.5 text-sm font-semibold truncate">{m.v}</div>
              <div className="text-[9px] text-brand-cyan truncate">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-medium"><ListChecks className="w-3 h-3 text-brand-cyan" /> Задачи на сегодня</div>
            <ul className="mt-1.5 space-y-1 text-[10.5px]">
              {[["Принять поставку", "ТТ №3"], ["Проверить кассу", "ТТ №7"], ["Инвентаризация", "ТТ №2"]].map(([t, p]) => (
                <li key={t} className="flex items-center justify-between rounded bg-white/[0.03] px-1.5 py-1 border border-white/5 gap-2">
                  <span className="text-foreground/85 truncate">{t}</span>
                  <span className="text-muted-foreground shrink-0">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-medium"><Truck className="w-3 h-3 text-brand-violet" /> Поставщики</div>
            <ul className="mt-1.5 space-y-1 text-[10.5px]">
              {[["Мука «Колос»", "ок"], ["Молоко", "ожидание"], ["Сахар «Юг»", "задержка"]].map(([n, s]) => (
                <li key={n} className="flex items-center justify-between rounded bg-white/[0.03] px-1.5 py-1 border border-white/5 gap-2">
                  <span className="text-foreground/85 truncate">{n}</span>
                  <span className={`shrink-0 ${s === "задержка" ? "text-red-300" : s === "ожидание" ? "text-yellow-300" : "text-emerald-300"}`}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5">
            <div className="flex items-center gap-1.5 text-[11px] font-medium"><BarChart3 className="w-3 h-3 text-brand-blue" /> Продажи по точкам</div>
            <svg viewBox="0 0 200 60" className="mt-1.5 w-full h-12">
              <defs>
                <linearGradient id="cb" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.21 265)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="oklch(0.55 0.22 290)" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {[14, 22, 18, 30, 26, 38, 34, 46, 40, 52, 48, 56].map((h, i) => (
                <rect key={i} x={6 + i * 16} y={60 - h} width="10" height={h} rx="2" fill="url(#cb)" />
              ))}
            </svg>
          </div>

          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-medium"><Users className="w-3 h-3 text-brand-cyan" /> Сотрудники</div>
              <span className="text-[9px] text-muted-foreground">42 / 48</span>
            </div>
            <div className="mt-1.5 flex -space-x-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-5 w-5 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet border border-background/80 text-[8px] flex items-center justify-center font-semibold">
                  {"АВКМОП"[i]}
                </div>
              ))}
              <div className="h-5 w-5 rounded-full bg-white/10 border border-background/80 text-[8px] flex items-center justify-center text-muted-foreground">+36</div>
            </div>
            <div className="mt-1.5 text-[9.5px] text-muted-foreground">На смене · 18 чел.</div>
          </div>
        </div>

        <div className="mt-2.5 relative rounded-lg border border-white/10 p-2.5 overflow-hidden bg-gradient-to-br from-brand-blue/15 via-brand-violet/10 to-transparent">
          <div className="flex items-center gap-1.5 text-[11px] font-medium">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue to-brand-violet">
              <Sparkles className="w-3 h-3" />
            </span>
            AI-рекомендация
          </div>
          <p className="mt-1 text-[10.5px] text-foreground/85 leading-relaxed">
            AI обнаружил рост просроченных задач по поставкам. Рекомендуется проверить график заказов и ответственных сотрудников.
          </p>
        </div>
      </div>
    </div>
  );
}

export function RasskazovkaMockup() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 rounded-[1.6rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-blue)_30%,transparent),transparent_70%)] blur-2xl opacity-70 pointer-events-none" />
      <div className="relative premium-card p-3.5 sm:p-4 rounded-[1.3rem] overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
            <span className="ml-2 text-[10px] text-muted-foreground truncate">rasskazovka / control-center</span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.18em] text-foreground/60 shrink-0">Rasskazovka</span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[10px] text-muted-foreground">Control Center Dashboard</div>
            <div className="text-sm sm:text-base font-semibold truncate">Управленческий центр</div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { l: "Задачи", v: "48 / 62", d: "в работе" },
            { l: "Клиенты", v: "316", d: "активные" },
            { l: "Заявки", v: "27", d: "новые" },
            { l: "Сотрудники", v: "24", d: "online" },
          ].map((m) => (
            <div key={m.l} className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 min-w-0">
              <div className="text-[9px] uppercase tracking-wider text-muted-foreground truncate">{m.l}</div>
              <div className="mt-0.5 text-sm font-semibold truncate">{m.v}</div>
              <div className="text-[9px] text-brand-cyan truncate">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-medium"><ListChecks className="w-3 h-3 text-brand-cyan" /> Задачи</div>
            <ul className="mt-1.5 space-y-1 text-[10.5px]">
              {[["Согласовать договор", "высокий"], ["Связаться с клиентом", "средний"], ["Отчёт по неделе", "высокий"]].map(([t, p]) => (
                <li key={t} className="flex items-center justify-between rounded bg-white/[0.03] px-1.5 py-1 border border-white/5 gap-2">
                  <span className="text-foreground/85 truncate">{t}</span>
                  <span className={`shrink-0 ${p === "высокий" ? "text-red-300" : p === "средний" ? "text-yellow-300" : "text-emerald-300"}`}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-medium"><Inbox className="w-3 h-3 text-brand-violet" /> Заявки</div>
            <ul className="mt-1.5 space-y-1 text-[10.5px]">
              {[["#2041", "новая"], ["#2040", "в работе"], ["#2039", "ожидание"]].map(([n, s]) => (
                <li key={n} className="flex items-center justify-between rounded bg-white/[0.03] px-1.5 py-1 border border-white/5 gap-2">
                  <span className="text-foreground/85 truncate">Заявка {n}</span>
                  <span className={`shrink-0 ${s === "закрыта" ? "text-emerald-300" : s === "ожидание" ? "text-yellow-300" : "text-brand-cyan"}`}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5">
            <div className="flex items-center gap-1.5 text-[11px] font-medium"><Activity className="w-3 h-3 text-brand-blue" /> Операционная аналитика</div>
            <svg viewBox="0 0 200 60" className="mt-1.5 w-full h-12">
              <defs>
                <linearGradient id="rk" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="oklch(0.7 0.21 265)" />
                  <stop offset="100%" stopColor="oklch(0.78 0.18 200)" />
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="url(#rk)"
                strokeWidth="2"
                points="5,48 25,42 45,46 65,32 85,36 105,24 125,28 145,16 165,20 185,10"
              />
              {[5,25,45,65,85,105,125,145,165,185].map((x, i) => (
                <circle key={i} cx={x} cy={[48,42,46,32,36,24,28,16,20,10][i]} r="2" fill="oklch(0.78 0.18 200)" />
              ))}
            </svg>
          </div>

          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 min-w-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-medium"><UserCircle2 className="w-3 h-3 text-brand-cyan" /> Клиенты</div>
              <span className="text-[9px] text-muted-foreground">316</span>
            </div>
            <ul className="mt-1.5 space-y-1 text-[10.5px]">
              {[["ООО «Север»", "активен"], ["ИП Иванов", "в работе"], ["ООО «Восход»", "новый"]].map(([n, s]) => (
                <li key={n} className="flex items-center justify-between rounded bg-white/[0.03] px-1.5 py-1 border border-white/5 gap-2">
                  <span className="text-foreground/85 truncate">{n}</span>
                  <span className="text-muted-foreground shrink-0">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-2.5 relative rounded-lg border border-white/10 p-2.5 overflow-hidden bg-gradient-to-br from-brand-blue/15 via-brand-violet/10 to-transparent">
          <div className="flex items-center gap-1.5 text-[11px] font-medium">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue to-brand-violet">
              <Sparkles className="w-3 h-3" />
            </span>
            AI-рекомендация
          </div>
          <p className="mt-1 text-[10.5px] text-foreground/85 leading-relaxed">
            AI обнаружил рост незавершённых задач. Рекомендуется проверить ответственных сотрудников и сроки выполнения.
          </p>
        </div>
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
  features: string[];
  result: string;
  liveUrl: string;
  mockup: React.ReactNode;
};

const realCases: RealCase[] = [
  {
    domainIcon: <Store className="w-3.5 h-3.5 text-brand-cyan" />,
    domain: "Сеть пекарен · общепит · розница",
    title: <>CRM для сети пекарен <span className="gradient-text">«Маковка»</span></>,
    description:
      "Индивидуальная система управления сетью пекарен: задачи, сотрудники, поставщики, операционные процессы, аналитика и контроль работы бизнеса в одном интерфейсе.",
    tags: ["Сеть пекарен", "Общепит", "Розница"],
    features: [
      "Управленческий дашборд",
      "Контроль задач и сотрудников",
      "Работа с поставщиками",
      "Операционные процессы",
      "Аналитика по ключевым показателям",
      "Единый центр управления сетью",
    ],
    result:
      "Бизнес получает единый цифровой центр управления вместо разрозненных таблиц, чатов и ручного контроля.",
    liveUrl: "https://makovkacrm.xyz/",
    mockup: <MakovkaMockup />,
  },
  {
    domainIcon: <Building2 className="w-3.5 h-3.5 text-brand-cyan" />,
    domain: "Внутренняя система · операционный контроль",
    title: <>Control Center для <span className="gradient-text">Rasskazovka</span></>,
    description:
      "Индивидуальная внутренняя система управления бизнес-процессами: задачи, клиенты, заявки, сотрудники, операционный контроль и управленческий дашборд в одном интерфейсе.",
    tags: ["Внутренняя система", "Операционный контроль", "Бизнес-процессы"],
    features: [
      "Управленческий дашборд",
      "Контроль задач и процессов",
      "Работа с клиентами и заявками",
      "Операционная аналитика",
      "Роли и доступы сотрудников",
      "Единый центр контроля бизнеса",
    ],
    result:
      "Руководитель и команда видят ключевые процессы, контролируют задачи, работают с клиентами и управляют операционной деятельностью из единого цифрового центра.",
    liveUrl: "https://rasskazovka.xyz/",
    mockup: <RasskazovkaMockup />,
  },
];

function RealCaseCard({ c }: { c: RealCase }) {
  return (
    <div className="relative group h-full">
      <div className="absolute -inset-px rounded-[1.6rem] bg-gradient-to-br from-brand-blue/55 via-brand-violet/35 to-brand-cyan/25 opacity-50 group-hover:opacity-100 blur-[1px] transition-opacity pointer-events-none" />
      <article className="relative premium-card rounded-[1.55rem] p-6 sm:p-7 lg:p-8 overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
        <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand-blue)_28%,transparent),transparent_65%)] blur-3xl pointer-events-none" />

        <div className="relative flex items-center justify-between gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-foreground/75">
            {c.domainIcon}
            <span className="truncate max-w-[18rem]">{c.domain}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] font-medium bg-gradient-to-r from-brand-blue/25 to-brand-violet/25 border border-brand-blue/40 text-foreground">
            <CheckCircle2 className="w-3 h-3 text-brand-cyan" /> Реальный проект
          </span>
        </div>

        <h3 className="relative mt-4 text-2xl sm:text-[1.7rem] lg:text-[1.85rem] font-semibold tracking-tight leading-tight break-words">
          {c.title}
        </h3>
        <p className="relative mt-3 text-[15px] text-foreground/80 leading-relaxed">{c.description}</p>

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {c.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] text-foreground/75">{t}</span>
          ))}
        </div>

        <div className="relative mt-6">
          <RasskazovkaMockupSlot mockup={c.mockup} />
        </div>

        <div className="relative mt-6">
          <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Что реализовано</div>
          <ul className="mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[13.5px] text-foreground/85">
            {c.features.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Результат</div>
          <p className="mt-1.5 text-[13.5px] text-foreground/90 leading-relaxed">{c.result}</p>
        </div>

        <div className="relative mt-6 flex flex-wrap items-center gap-3">
          <a
            href={c.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 h-11 text-sm font-medium"
          >
            Посмотреть проект <ArrowUpRight className="w-4 h-4" />
          </a>
          <span className="text-[11px] text-muted-foreground truncate">{new URL(c.liveUrl).hostname}</span>
        </div>
      </article>
    </div>
  );
}

function RasskazovkaMockupSlot({ mockup }: { mockup: React.ReactNode }) {
  return <div className="w-full min-w-0">{mockup}</div>;
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
    title: "AI-ассистент для отдела продаж",
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

          <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
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

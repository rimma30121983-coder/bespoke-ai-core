import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight, Store, Users, Truck, BarChart3, ListChecks,
  LayoutDashboard, Sparkles, Network, Briefcase, ShoppingCart,
  Building2, UserCircle2, Inbox, Activity, ShieldCheck,
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
      <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-violet)_35%,transparent),transparent_70%)] blur-2xl opacity-70 pointer-events-none" />
      <div className="relative premium-card p-4 sm:p-5 rounded-[1.6rem] overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-[11px] text-muted-foreground">bakery.crm / dashboard</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/60">Маковка</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Bakery CRM Dashboard</div>
            <div className="text-base sm:text-lg font-semibold">Сеть пекарен «Маковка»</div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-foreground/70">
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Сегодня</span>
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">7 дней</span>
            <span className="px-2 py-1 rounded-md bg-gradient-to-r from-brand-blue/30 to-brand-violet/30 border border-white/10">Месяц</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { l: "Продажи", v: "₽ 1.84M", d: "+12%" },
            { l: "Точки", v: "12", d: "сеть" },
            { l: "Задачи", v: "27 / 34", d: "контроль" },
            { l: "Поставщики", v: "18", d: "активны" },
          ].map((m) => (
            <div key={m.l} className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
              <div className="mt-1 text-base font-semibold">{m.v}</div>
              <div className="text-[10px] text-brand-cyan">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium"><ListChecks className="w-3.5 h-3.5 text-brand-cyan" /> Задачи на сегодня</div>
              <span className="text-[10px] text-muted-foreground">5</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[11px]">
              {[
                ["Принять поставку муки", "ТТ №3"],
                ["Проверить кассу", "ТТ №7"],
                ["Согласовать меню", "офис"],
                ["Инвентаризация", "ТТ №2"],
              ].map(([t, p]) => (
                <li key={t} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5 border border-white/5">
                  <span className="text-foreground/85">{t}</span>
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium"><Truck className="w-3.5 h-3.5 text-brand-violet" /> Поставщики</div>
              <span className="text-[10px] text-muted-foreground">18</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[11px]">
              {[
                ["Мука «Колос»", "ок"],
                ["Молоко «Ферма-А»", "ожидание"],
                ["Упаковка «PackPro»", "ок"],
                ["Сахар «Юг»", "задержка"],
              ].map(([n, s]) => (
                <li key={n} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5 border border-white/5">
                  <span className="text-foreground/85">{n}</span>
                  <span className={`${s === "задержка" ? "text-red-300" : s === "ожидание" ? "text-yellow-300" : "text-emerald-300"}`}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 md:col-span-1">
            <div className="flex items-center gap-2 text-xs font-medium"><BarChart3 className="w-3.5 h-3.5 text-brand-blue" /> Продажи по точкам</div>
            <svg viewBox="0 0 200 70" className="mt-2 w-full h-16">
              <defs>
                <linearGradient id="cb" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.21 265)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="oklch(0.55 0.22 290)" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {[14, 22, 18, 30, 26, 38, 34, 46, 40, 52, 48, 60].map((h, i) => (
                <rect key={i} x={6 + i * 16} y={70 - h} width="10" height={h} rx="2" fill="url(#cb)" />
              ))}
            </svg>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium"><Users className="w-3.5 h-3.5 text-brand-cyan" /> Сотрудники</div>
              <span className="text-[10px] text-muted-foreground">42 / 48</span>
            </div>
            <div className="mt-2 flex -space-x-1.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet border border-background/80 text-[9px] flex items-center justify-center font-semibold">
                  {"АВКМОПС"[i]}
                </div>
              ))}
              <div className="h-6 w-6 rounded-full bg-white/10 border border-background/80 text-[9px] flex items-center justify-center text-muted-foreground">+35</div>
            </div>
            <div className="mt-2 text-[10px] text-muted-foreground">На смене сейчас · 18 человек</div>
          </div>
        </div>

        <div className="mt-3 relative rounded-xl border border-white/10 p-3 overflow-hidden bg-gradient-to-br from-brand-blue/15 via-brand-violet/10 to-transparent">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue to-brand-violet">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            AI-рекомендация
          </div>
          <p className="mt-1.5 text-[11.5px] text-foreground/85 leading-relaxed">
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
      <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-blue)_35%,transparent),transparent_70%)] blur-2xl opacity-70 pointer-events-none" />
      <div className="relative premium-card p-4 sm:p-5 rounded-[1.6rem] overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-[11px] text-muted-foreground">rasskazovka / control-center</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/60">Rasskazovka</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Control Center Dashboard</div>
            <div className="text-base sm:text-lg font-semibold">Управленческий центр</div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-foreground/70">
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Команда</span>
            <span className="px-2 py-1 rounded-md bg-gradient-to-r from-brand-blue/30 to-brand-violet/30 border border-white/10">Сегодня</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { l: "Задачи", v: "48 / 62", d: "в работе" },
            { l: "Клиенты", v: "316", d: "активные" },
            { l: "Заявки", v: "27", d: "новые" },
            { l: "Сотрудники", v: "24", d: "online" },
          ].map((m) => (
            <div key={m.l} className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
              <div className="mt-1 text-base font-semibold">{m.v}</div>
              <div className="text-[10px] text-brand-cyan">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium"><ListChecks className="w-3.5 h-3.5 text-brand-cyan" /> Задачи</div>
              <span className="text-[10px] text-muted-foreground">приоритет</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[11px]">
              {[
                ["Согласовать договор", "высокий"],
                ["Связаться с клиентом", "средний"],
                ["Отчёт по неделе", "высокий"],
                ["Подготовить КП", "низкий"],
              ].map(([t, p]) => (
                <li key={t} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5 border border-white/5">
                  <span className="text-foreground/85">{t}</span>
                  <span className={`${p === "высокий" ? "text-red-300" : p === "средний" ? "text-yellow-300" : "text-emerald-300"}`}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium"><Inbox className="w-3.5 h-3.5 text-brand-violet" /> Заявки</div>
              <span className="text-[10px] text-muted-foreground">сегодня</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[11px]">
              {[
                ["Заявка #2041", "новая"],
                ["Заявка #2040", "в работе"],
                ["Заявка #2039", "ожидание"],
                ["Заявка #2038", "закрыта"],
              ].map(([n, s]) => (
                <li key={n} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5 border border-white/5">
                  <span className="text-foreground/85">{n}</span>
                  <span className={`${s === "закрыта" ? "text-emerald-300" : s === "ожидание" ? "text-yellow-300" : "text-brand-cyan"}`}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center gap-2 text-xs font-medium"><Activity className="w-3.5 h-3.5 text-brand-blue" /> Операционная аналитика</div>
            <svg viewBox="0 0 200 70" className="mt-2 w-full h-16">
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
                points="5,55 25,48 45,52 65,38 85,42 105,28 125,32 145,20 165,24 185,12"
              />
              {[5,25,45,65,85,105,125,145,165,185].map((x, i) => (
                <circle key={i} cx={x} cy={[55,48,52,38,42,28,32,20,24,12][i]} r="2.2" fill="oklch(0.78 0.18 200)" />
              ))}
            </svg>
          </div>

          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium"><UserCircle2 className="w-3.5 h-3.5 text-brand-cyan" /> Клиенты</div>
              <span className="text-[10px] text-muted-foreground">316</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-[11px]">
              {[
                ["ООО «Север»", "активен"],
                ["ИП Иванов", "в работе"],
                ["ООО «Восход»", "новый"],
                ["ООО «Линия»", "активен"],
              ].map(([n, s]) => (
                <li key={n} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5 border border-white/5">
                  <span className="text-foreground/85">{n}</span>
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-3 relative rounded-xl border border-white/10 p-3 overflow-hidden bg-gradient-to-br from-brand-blue/15 via-brand-violet/10 to-transparent">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand-blue to-brand-violet">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            AI-рекомендация
          </div>
          <p className="mt-1.5 text-[11.5px] text-foreground/85 leading-relaxed">
            AI обнаружил рост незавершённых задач. Рекомендуется проверить ответственных сотрудников и сроки выполнения.
          </p>
        </div>
      </div>
    </div>
  );
}

type RealCase = {
  eyebrow: string;
  eyebrowIcon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  tags: string[];
  features: string[];
  result: string;
  liveUrl: string;
  caseTo: "/cases/makovka" | "/cases/rasskazovka";
  mockup: React.ReactNode;
};

const realCases: RealCase[] = [
  {
    eyebrow: "Реальный кейс · Сеть пекарен",
    eyebrowIcon: <Store className="w-3.5 h-3.5 text-brand-cyan" />,
    title: <>CRM для сети пекарен <span className="gradient-text">«Маковка»</span></>,
    description:
      "Индивидуальная CRM-система для управления сетью пекарен: задачи, сотрудники, поставщики, операционные процессы, аналитика и контроль работы бизнеса в одном интерфейсе.",
    tags: ["Сеть пекарен", "Общепит", "Розница"],
    features: [
      "Управление операционными процессами",
      "Контроль задач и сотрудников",
      "Работа с поставщиками",
      "Аналитика по ключевым показателям",
      "Единая система управления сетью",
      "Удобный дашборд для руководителя",
    ],
    result:
      "Бизнес получает единый цифровой центр управления вместо разрозненных таблиц, чатов и ручного контроля.",
    liveUrl: "https://makovkacrm.xyz/",
    caseTo: "/cases/makovka",
    mockup: <MakovkaMockup />,
  },
  {
    eyebrow: "Реальный кейс · Внутренняя система",
    eyebrowIcon: <Building2 className="w-3.5 h-3.5 text-brand-cyan" />,
    title: <>CRM Control Center для <span className="gradient-text">Rasskazovka</span></>,
    description:
      "Индивидуальная внутренняя система управления бизнес-процессами: задачи, клиенты, операционный контроль, аналитика, сотрудники и управленческий дашборд в одном интерфейсе.",
    tags: ["Внутренняя система", "Операционный контроль", "Бизнес-процессы"],
    features: [
      "Управленческий дашборд",
      "Контроль задач и процессов",
      "Работа с клиентами и заявками",
      "Операционная аналитика",
      "Роли и доступы сотрудников",
      "Единый центр контроля бизнеса",
      "Интерфейс для ежедневной работы команды",
    ],
    result:
      "Система помогает руководителю и команде видеть ключевые процессы, контролировать задачи, работать с клиентами и управлять операционной деятельностью из единого цифрового центра.",
    liveUrl: "https://rasskazovka.xyz/",
    caseTo: "/cases/rasskazovka",
    mockup: <RasskazovkaMockup />,
  },
];

function CaseCard({ c }: { c: RealCase }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-brand-blue/60 via-brand-violet/40 to-brand-cyan/30 opacity-60 group-hover:opacity-100 blur-[1px] transition-opacity pointer-events-none" />
      <article className="relative premium-card rounded-[1.7rem] p-6 sm:p-8 lg:p-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand-blue)_35%,transparent),transparent_65%)] blur-3xl pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-foreground/70">
              {c.eyebrowIcon}
              {c.eyebrow}
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold tracking-tight leading-tight break-words">
              {c.title}
            </h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">{c.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-[11px] text-foreground/75">{t}</span>
              ))}
            </div>

            <div className="mt-6">
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Что реализовано</div>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/85">
                {c.features.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground flex items-center gap-2">
                <LayoutDashboard className="w-3.5 h-3.5 text-brand-cyan" /> Результат
              </div>
              <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">{c.result}</p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={c.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 h-12 text-sm font-medium"
              >
                Посмотреть кейс <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to={c.caseTo}
                className="inline-flex items-center gap-2 rounded-full px-5 h-12 text-sm text-foreground/85 border border-white/15 hover:bg-white/5 transition-colors"
              >
                Подробнее о кейсе
              </Link>
            </div>
          </div>

          <div className="min-w-0">{c.mockup}</div>
        </div>
      </article>
    </div>
  );
}

export function Cases() {
  const future = [
    { i: <Briefcase className="w-5 h-5" />, t: "AI-ассистент для отдела продаж", d: "Помощник менеджеров: подсказки по сделкам, анализ переписок, приоритеты, AI-рекомендации." },
    { i: <Network className="w-5 h-5" />, t: "Система управления франшизой", d: "Партнёры, заявки, обучение, контроль точек, отчётность и единая управленческая панель." },
    { i: <ShoppingCart className="w-5 h-5" />, t: "Панель контроля поставщиков и закупок", d: "Поставщики, заказы, условия, документы, статусы, аналитика и контроль сроков." },
  ];

  return (
    <section id="cases" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Кейсы"
          title={<>Кейсы <span className="gradient-text">индивидуальных систем</span></>}
          subtitle="Реальные примеры систем, созданных под конкретные бизнес-процессы, роли сотрудников и управленческие задачи."
        />

        {/* Real cases */}
        <div className="mt-14 space-y-10 lg:space-y-14">
          {realCases.map((c) => (
            <CaseCard key={c.caseTo} c={c} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <ShieldCheck className="w-3.5 h-3.5 inline mr-1.5 text-brand-cyan" />
            Возможные форматы
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {/* Future directions */}
        <div className="mt-8">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Направления разработки</div>
              <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight">
                Другие форматы систем, которые можно разработать
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Это форматы возможных проектов — мы проектируем такие системы под процессы вашей компании.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {future.map((f) => (
              <div key={f.t} className="premium-card p-6 group/card">
                <div className="flex items-center justify-between gap-2">
                  <div className="icon-chip inline-flex h-11 w-11 items-center justify-center rounded-xl">
                    {f.i}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-foreground/60 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                    Формат проекта
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold">{f.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

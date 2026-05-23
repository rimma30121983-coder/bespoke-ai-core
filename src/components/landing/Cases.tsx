import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight, Store, Users, Truck, BarChart3, ListChecks,
  LayoutDashboard, Sparkles, Network, Briefcase, ShoppingCart,
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
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-violet)_35%,transparent),transparent_70%)] blur-2xl opacity-70 pointer-events-none" />
      <div className="relative premium-card p-4 sm:p-5 rounded-[1.6rem] overflow-hidden">
        {/* topbar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-[11px] text-muted-foreground">bakery.crm / dashboard</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/60">Маковка</span>
        </div>

        {/* header */}
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

        {/* metrics */}
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

        {/* main grid */}
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {/* Tasks */}
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

          {/* Suppliers */}
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

          {/* Sales chart */}
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

          {/* Employees */}
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

        {/* AI rec */}
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

export function Cases() {
  const future = [
    { i: <Network className="w-5 h-5" />, t: "CRM для франшиз", d: "Система для управления партнёрами, заявками, задачами, обучением и контролем сети." },
    { i: <Briefcase className="w-5 h-5" />, t: "CRM для отдела продаж", d: "Воронки, клиенты, сделки, задачи менеджеров, аналитика и AI-рекомендации." },
    { i: <ShoppingCart className="w-5 h-5" />, t: "CRM для поставщиков и закупок", d: "Поставщики, заказы, условия, документы, статусы, аналитика и контроль сроков." },
  ];

  return (
    <section id="cases" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Кейсы"
          title={<>Кейсы <span className="gradient-text">индивидуальных CRM-систем</span></>}
          subtitle="Реальные примеры систем, созданных под конкретные бизнес-процессы, роли сотрудников и управленческие задачи."
        />

        {/* Main case */}
        <div className="mt-14 relative group">
          <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-brand-blue/60 via-brand-violet/40 to-brand-cyan/30 opacity-60 group-hover:opacity-100 blur-[1px] transition-opacity pointer-events-none" />
          <article className="relative premium-card rounded-[1.7rem] p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand-blue)_35%,transparent),transparent_65%)] blur-3xl pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-foreground/70">
                  <Store className="w-3.5 h-3.5 text-brand-cyan" />
                  Реальный кейс · Сеть пекарен
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl lg:text-[2.4rem] font-semibold tracking-tight leading-tight">
                  CRM для сети пекарен <span className="gradient-text">«Маковка»</span>
                </h3>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  Индивидуальная CRM-система для управления сетью пекарен: задачи, сотрудники, поставщики,
                  операционные процессы, аналитика и контроль работы бизнеса в одном интерфейсе.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Сеть пекарен", "Общепит", "Розница"].map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-[11px] text-foreground/75">{t}</span>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Что реализовано</div>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/85">
                    {[
                      "Управление операционными процессами",
                      "Контроль задач и сотрудников",
                      "Работа с поставщиками",
                      "Аналитика по ключевым показателям",
                      "Единая система управления сетью",
                      "Удобный дашборд для руководителя",
                    ].map((x) => (
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
                  <p className="mt-1.5 text-sm text-foreground/90 leading-relaxed">
                    Бизнес получает единый цифровой центр управления вместо разрозненных таблиц, чатов и ручного контроля.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="https://makovkacrm.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-6 h-12 text-sm font-medium"
                  >
                    Посмотреть кейс <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <Link
                    to="/cases/makovka"
                    className="inline-flex items-center gap-2 rounded-full px-5 h-12 text-sm text-foreground/85 border border-white/15 hover:bg-white/5 transition-colors"
                  >
                    Подробнее о кейсе
                  </Link>
                </div>
              </div>

              <div className="min-w-0">
                <MakovkaMockup />
              </div>
            </div>
          </article>
        </div>

        {/* Future directions */}
        <div className="mt-14">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Направления разработки</div>
              <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight">
                Форматы проектов, которые мы создаём под бизнес
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Это направления будущих CRM — мы проектируем такие системы под процессы вашей компании.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {future.map((f) => (
              <div key={f.t} className="premium-card p-6 group/card">
                <div className="flex items-center justify-between">
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

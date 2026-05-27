import { User, Briefcase, Cpu, ClipboardCheck, LineChart, Sparkles, Rocket } from "lucide-react";

const members = [
  {
    name: "Евгений Мамонтов",
    role: "CEO / Архитектор AI-систем",
    desc: "Отвечает за стратегию, бизнес-логику и итоговую ценность AI-системы для клиента.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    name: "Антон Борисенко",
    role: "Технический директор",
    desc: "Проектирует техническую архитектуру, интеграции и внутреннюю механику AI-системы.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    name: "Римма Сметанкина",
    role: "Руководитель внедрения",
    desc: "Ведёт проект от согласования структуры до запуска, контролирует задачи, сроки и коммуникацию.",
    icon: <ClipboardCheck className="w-5 h-5" />,
  },
  {
    name: "Надежда Гришакова",
    role: "Бизнес-аналитик / Project Manager",
    desc: "Помогает собрать требования, описать процессы и адаптировать систему под ежедневную работу команды.",
    icon: <LineChart className="w-5 h-5" />,
  },
];

const reasons = [
  "Понимаем бизнес-процессы, а не просто рисуем интерфейсы",
  "Проектируем систему под роли, задачи и реальные сценарии работы",
  "Думаем о внедрении, удобстве команды и развитии системы после запуска",
];

export function Team() {
  return (
    <section id="team" className="relative py-20 lg:py-28">
      <div className="absolute inset-x-0 top-1/3 h-[420px] bg-radial-fade opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet animate-pulse" />
            Команда
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.08]">
            Команда, которая создаёт <span className="gradient-text">AI-системы</span> под бизнес
          </h2>
          <p className="mt-5 text-base sm:text-[17px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Над проектами работают специалисты, которые соединяют бизнес-логику, интерфейс, автоматизацию и AI-инструменты в единую систему управления.
          </p>
        </div>

        {/* Общее фото команды */}
        <div className="mt-12 lg:mt-16 premium-card overflow-hidden p-2 sm:p-3">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-2 sm:gap-3">
            <div
              className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px] rounded-[20px] overflow-hidden border border-white/10"
              style={{
                background:
                  "radial-gradient(120% 80% at 20% 10%, oklch(0.66 0.2 265 / 0.35), transparent 60%), radial-gradient(120% 80% at 80% 90%, oklch(0.62 0.24 295 / 0.3), transparent 60%), linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.18 0.05 285))",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="h-14 w-14 rounded-2xl gradient-brand inline-flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-foreground/60">
                  Здесь будет общее фото команды
                </p>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                  Premium-снимок 16:9 — добавьте файл, чтобы заменить placeholder.
                </p>
              </div>
              <div className="pointer-events-none absolute -inset-px rounded-[20px] ring-1 ring-inset ring-white/10" />
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                О команде
              </div>
              <p className="mt-4 text-lg sm:text-xl leading-relaxed">
                Мы проектируем не просто интерфейсы, а <span className="gradient-text">рабочие системы</span>, которыми ежедневно пользуются руководители и команды.
              </p>
            </div>
          </div>
        </div>

        {/* Карточки сотрудников */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.map((m, i) => (
            <article key={i} className="premium-card p-5 group shine-overlay flex flex-col">
              <div
                className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10"
                style={{
                  background:
                    "radial-gradient(100% 70% at 50% 0%, oklch(0.66 0.2 265 / 0.3), transparent 60%), linear-gradient(160deg, oklch(0.22 0.04 260), oklch(0.16 0.04 285))",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full glass inline-flex items-center justify-center">
                    <User className="w-7 h-7 text-foreground/70" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="icon-chip inline-flex h-8 w-8 items-center justify-center rounded-lg">
                  {m.icon}
                </span>
                <div className="text-xs uppercase tracking-[0.12em] text-brand-cyan">{m.role}</div>
              </div>
              <h3 className="mt-2 text-base font-semibold">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </article>
          ))}
        </div>

        {/* Почему команда важна */}
        <div className="mt-10 premium-card p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
            Почему команда важна
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3 rounded-2xl bg-white/[0.035] border border-white/10 p-4">
                <span className="icon-chip inline-flex h-8 w-8 items-center justify-center rounded-lg shrink-0">
                  <Rocket className="w-4 h-4" />
                </span>
                <p className="text-sm text-foreground/90 leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

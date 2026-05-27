import { Briefcase, Cpu, ClipboardCheck, LineChart, Rocket } from "lucide-react";
import teamGroup from "@/assets/team-group.jpg";
import photoEvgeniy from "@/assets/team-evgeniy-mamontov.jpg";
import photoAnton from "@/assets/team-anton-borisenko.jpg";
import photoRimma from "@/assets/team-rimma-smetankina.jpg";
import photoNadezhda from "@/assets/team-nadezhda-grishakova.jpg";

const members = [
  {
    name: "Евгений Мамонтов",
    role: "CEO / Архитектор AI-систем",
    desc: "Отвечает за стратегию, бизнес-логику и итоговую ценность AI-системы для клиента.",
    icon: <Briefcase className="w-5 h-5" />,
    photo: photoEvgeniy,
    objectPosition: "50% 25%",
  },
  {
    name: "Антон Борисенко",
    role: "Технический директор",
    desc: "Проектирует техническую архитектуру, интеграции и внутреннюю механику AI-системы.",
    icon: <Cpu className="w-5 h-5" />,
    photo: photoAnton,
    objectPosition: "50% 20%",
  },
  {
    name: "Римма Сметанкина",
    role: "Project Manager",
    desc: "Координирует проектную работу, коммуникацию с клиентом, задачи команды и согласование этапов разработки.",
    icon: <ClipboardCheck className="w-5 h-5" />,
    photo: photoRimma,
    objectPosition: "50% 25%",
  },
  {
    name: "Надежда Гришакова",
    role: "Project Manager",
    desc: "Помогает структурировать требования, фиксировать бизнес-процессы, контролировать задачи и адаптировать систему под работу команды.",
    icon: <LineChart className="w-5 h-5" />,
    photo: photoNadezhda,
    objectPosition: "50% 25%",
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
            Мы объединяем бизнес-экспертизу, техническую архитектуру и проектное управление, чтобы AI-система была не просто красивой, а реально работала в бизнесе.
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
            4 специалиста закрывают весь цикл: от бизнес-логики и архитектуры до разработки, внедрения и сопровождения.
          </p>
        </div>

        {/* Общее фото команды */}
        <div className="mt-12 lg:mt-16 premium-card overflow-hidden p-2 sm:p-3">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-2 sm:gap-3">
            <div className="relative aspect-[16/11] lg:aspect-auto lg:min-h-[420px] rounded-[20px] overflow-hidden border border-white/10 bg-black/30">
              <img
                src={teamGroup}
                alt="Команда AI Systems"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "50% 38%" }}
              />
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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {members.map((m, i) => (
            <article key={i} className="premium-card p-5 group shine-overlay flex flex-col h-full">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: m.objectPosition }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <h3 className="mt-5 text-lg sm:text-xl font-semibold text-white leading-snug">{m.name}</h3>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="icon-chip inline-flex h-7 w-7 items-center justify-center rounded-lg shrink-0">
                  {m.icon}
                </span>
                <div className="text-[13px] font-medium gradient-text">{m.role}</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
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

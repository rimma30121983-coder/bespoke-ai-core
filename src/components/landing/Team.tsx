import { Briefcase, Cpu, ClipboardCheck, LineChart, Shield } from "lucide-react";
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
    role: "Project Manager / Руководитель внедрения",
    desc: "Ведёт проект от согласования структуры до запуска, контролирует задачи, сроки и коммуникацию между клиентом и командой.",
    icon: <ClipboardCheck className="w-5 h-5" />,
    photo: photoRimma,
    objectPosition: "50% 25%",
  },
  {
    name: "Надежда Гришакова",
    role: "Project Manager / Руководитель развития продаж",
    desc: "Отвечает за развитие продаж, выявляет точки роста, помогает структурировать требования клиента.",
    icon: <LineChart className="w-5 h-5" />,
    photo: photoNadezhda,
    objectPosition: "50% 25%",
  },
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
            Команда закрывает весь цикл:
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {["Бизнес-логика", "Архитектура", "Разработка", "Внедрение", "Сопровождение"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] text-foreground/75 hover:bg-white/[0.08] hover:border-white/20 transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Общее фото команды */}
        <div className="mt-10 lg:mt-12 premium-card overflow-hidden p-2 sm:p-3">
          <div
            className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[21/9] rounded-[20px] overflow-hidden border border-white/10"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 0%, hsl(var(--brand-cyan) / 0.10), transparent 60%), linear-gradient(180deg, #0b1220 0%, #060a14 100%)",
            }}
          >
            <img
              src={teamGroup}
              alt="Команда AI Systems"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ objectPosition: "50% 50%" }}
            />
            <div className="pointer-events-none absolute -inset-px rounded-[20px] ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        {/* Карточки сотрудников */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
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

        {/* Расширенная команда */}
        <div className="mt-6">
          <div className="premium-card p-5 sm:p-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                Расширенная команда
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "20+ специалистов",
                  "Frontend",
                  "Backend",
                  "AI-интеграции",
                  "Базы данных",
                  "QA-тестирование",
                  "UX/UI",
                  "Интеграции",
                  "Техническая поддержка",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full bg-white/[0.04] border border-white/10 px-2.5 py-1 text-[11px] text-foreground/75 hover:bg-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

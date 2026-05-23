import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Вы делаете AI-системы только для одной сферы?", a: "Нет. Мы проектируем систему под процессы конкретного бизнеса, поэтому можем работать с разными нишами." },
  { q: "Можно ли сделать систему, похожую на нашу текущую таблицу или CRM?", a: "Да. Мы можем взять вашу текущую структуру, улучшить её и перенести в полноценную AI-систему." },
  { q: "Сколько времени занимает разработка?", a: "Сроки зависят от объёма системы. После аудита мы озвучиваем точный план и этапы." },
  { q: "Что входит в стоимость?", a: "Анализ процессов, проектирование, дизайн, разработка, база данных, роли, дашборды и тестирование." },
  { q: "Это будет шаблонное решение?", a: "Нет. AI-система создаётся индивидуально под вашу бизнес-логику." },
  { q: "Можно ли добавить AI?", a: "Да. AI можно встроить в аналитику, отчёты, задачи, продажи, рекомендации и помощь руководителю." },
  { q: "Можно ли дорабатывать систему после запуска?", a: "Да. Система может развиваться вместе с бизнесом." },
  { q: "Подходит ли это малому бизнесу?", a: "Да. Мы создаём AI-системы под объём задач и бюджет — от компактной внутренней платформы до сложной операционной системы для бизнеса." },
  { q: "Можно ли подключить интеграции?", a: "Да. Можно подключать почту, телефонию, сайты, формы, мессенджеры, платежи и другие сервисы." },
  { q: "Будет ли система адаптивной?", a: "Да. Интерфейс должен корректно работать на ноутбуках, планшетах и мобильных устройствах." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
            FAQ
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="premium-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm sm:text-base font-medium pr-2">{f.q}</span>
                  <span className={`h-8 w-8 rounded-full inline-flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-gradient-to-br from-brand-blue to-brand-violet rotate-180" : "bg-white/[0.04] border border-white/10"}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-white" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

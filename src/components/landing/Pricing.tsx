import { Check, ArrowRight, Star } from "lucide-react";

const go = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

const tiers = [
  {
    name: "Аудит и проектирование",
    desc: "Для компаний, которым нужно сначала понять структуру будущей системы.",
    features: ["анализ процессов", "карта модулей", "логика ролей", "структура CRM", "техническое задание"],
    cta: "Обсудить аудит",
    featured: false,
  },
  {
    name: "Разработка CRM под ключ",
    desc: "Для бизнеса, которому нужна готовая рабочая система управления процессами.",
    features: ["проектирование", "дизайн", "разработка", "база данных", "роли", "дашборды", "задачи", "клиенты", "аналитика", "тестирование"],
    cta: "Заказать систему",
    featured: true,
  },
  {
    name: "CRM + AI-автоматизация",
    desc: "Для компаний, которым нужна система с AI-анализом, рекомендациями и автоматизацией.",
    features: ["всё из разработки CRM", "AI-анализ данных", "AI-помощник", "рекомендации", "автоматические выводы", "интеллектуальные сценарии", "расширенная аналитика"],
    cta: "Обсудить AI-систему",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-radial-fade opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            Тарифы
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Форматы <span className="gradient-text">работы</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col premium-card ${t.featured ? "ring-gradient lg:-translate-y-2 lg:scale-[1.02]" : ""}`}
              style={t.featured ? { background: "linear-gradient(180deg, oklch(0.66 0.2 265 / 0.14), oklch(0.62 0.24 295 / 0.06))" } : undefined}
            >
              {t.featured && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-semibold tracking-wide text-white uppercase" style={{ background: "linear-gradient(135deg, oklch(0.78 0.14 210), oklch(0.66 0.2 265) 50%, oklch(0.62 0.24 295))", boxShadow: "0 8px 24px -6px oklch(0.62 0.24 295 / 0.6)" }}>
                    <Star className="w-3 h-3" /> Популярный формат
                  </div>
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" />
                </>
              )}
              <h3 className="relative text-xl font-semibold tracking-tight">{t.name}</h3>
              <p className="relative mt-2.5 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>

              <ul className="relative mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <span className="mt-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, oklch(0.66 0.2 265 / 0.25), oklch(0.62 0.24 295 / 0.25))", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                      <Check className="w-2.5 h-2.5 text-brand-cyan" />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={go}
                className={`relative mt-8 inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-medium ${
                  t.featured ? "btn-primary" : "btn-ghost"
                }`}
              >
                {t.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

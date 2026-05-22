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

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col ${
                t.featured
                  ? "glass-strong glow"
                  : "glass"
              }`}
              style={t.featured ? { background: "linear-gradient(180deg, oklch(0.65 0.21 265 / 0.12), oklch(0.6 0.24 295 / 0.08))", border: "1px solid oklch(0.65 0.21 265 / 0.4)" } : undefined}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full gradient-brand px-3 py-1 text-[10px] font-medium text-white">
                  <Star className="w-3 h-3" /> Популярный
                </div>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={go}
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full h-11 px-5 text-sm font-medium ${
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

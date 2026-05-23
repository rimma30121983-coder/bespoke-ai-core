import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Search, Layers, Brain } from "lucide-react";
import { trackLeadSubmit } from "@/lib/analytics";

const go = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

export function FinalCTA() {
  const mini = [
    { i: <Search className="w-4 h-4" />, t: "Диагностика", d: "Изучим процессы и узкие места" },
    { i: <Layers className="w-4 h-4" />, t: "Структура", d: "Спроектируем архитектуру системы" },
    { i: <Brain className="w-4 h-4" />, t: "AI-возможности", d: "Покажем, где встроить AI" },
  ];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-14 text-center">
          <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[120px] animate-pulse-soft" />
          <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full bg-brand-violet/15 blur-[120px] animate-pulse-soft" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
              <Sparkles className="w-3 h-3 text-brand-violet" />
              Готовы начать?
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold tracking-tight leading-[1.08]">
              Хотите систему, которая работает <span className="gradient-text">под ваш бизнес</span>,
              <br className="hidden sm:block" /> а не наоборот?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Оставьте заявку — обсудим ваши процессы и предложим структуру будущей CRM / AI-системы.
            </p>

            <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
              {mini.map((m) => (
                <div key={m.t} className="premium-card p-4 flex items-start gap-3">
                  <div className="icon-chip h-9 w-9 rounded-lg inline-flex items-center justify-center shrink-0">{m.i}</div>
                  <div>
                    <div className="text-sm font-semibold">{m.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
              <button onClick={go} className="btn-primary inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 text-sm font-medium">
                Обсудить проект <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={go} className="btn-ghost inline-flex items-center justify-center rounded-full h-12 px-7 text-sm font-medium">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    trackLeadSubmit({ industry: String(fd.get("industry") ?? "") });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-radial-fade opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Оставьте <span className="gradient-text">заявку</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Свяжемся с вами, обсудим процессы и предложим структуру будущей системы.
          </p>
        </div>

        <div className="mt-10 glass-strong rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto h-14 w-14 rounded-full gradient-brand inline-flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Спасибо!</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                Мы свяжемся с вами и обсудим структуру будущей системы.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Имя" name="name" required />
              <Field label="Телефон" name="phone" type="tel" required />
              <Field label="Telegram / WhatsApp" name="messenger" />
              <Field label="Сфера бизнеса" name="industry" />
              <div className="sm:col-span-2">
                <label className="text-xs text-muted-foreground">Что хотите автоматизировать?</label>
                <textarea
                  name="goal"
                  rows={4}
                  className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-brand-blue/60 focus:bg-white/[0.05] transition resize-none"
                  placeholder="Коротко опишите задачу или текущие процессы"
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 text-sm font-medium">
                  Отправить заявку <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">
        {label}
        {required && <span className="text-brand-violet ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-brand-blue/60 focus:bg-white/[0.05] transition"
      />
    </div>
  );
}

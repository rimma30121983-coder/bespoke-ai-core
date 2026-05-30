import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Search, Layers, Brain } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { trackLeadSubmit } from "@/lib/analytics";

function ConsentNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[11px] leading-relaxed text-muted-foreground ${className}`}>
      Нажимая кнопку, вы соглашаетесь с{" "}
      <Link to="/privacy-policy" className="text-brand-cyan hover:text-brand-violet transition underline-offset-2 hover:underline">
        Политикой конфиденциальности
      </Link>{" "}
      и{" "}
      <Link to="/terms" className="text-brand-cyan hover:text-brand-violet transition underline-offset-2 hover:underline">
        Пользовательским соглашением
      </Link>.
    </p>
  );
}

// Kept for backward compatibility — merged into ContactForm
export function FinalCTA() {
  return null;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    trackLeadSubmit({ industry: String(fd.get("industry") ?? "") });
    setSubmitted(true);
  };

  const mini = [
    { i: <Search className="w-4 h-4" />, t: "Диагностика", d: "Изучим процессы и узкие места" },
    { i: <Layers className="w-4 h-4" />, t: "Структура", d: "Спроектируем архитектуру системы" },
    { i: <Brain className="w-4 h-4" />, t: "AI-возможности", d: "Покажем, где встроить AI" },
  ];

  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[120px] animate-pulse-soft" />
          <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full bg-brand-violet/15 blur-[120px] animate-pulse-soft" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <div className="glass rounded-2xl p-5 sm:p-7 h-full flex flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/70">
                <Sparkles className="w-3 h-3 text-brand-violet" />
                Готовы начать?
              </div>
              <h2 className="mt-5 text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-tight leading-[1.1]">
                Хотите <span className="gradient-text">AI-систему</span> под ваш бизнес?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Оставьте заявку — обсудим процессы и предложим структуру будущей системы.
              </p>

              <div className="mt-auto pt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                {mini.map((m) => (
                  <div key={m.t} className="premium-card p-3 flex items-start gap-2.5">
                    <div className="icon-chip h-8 w-8 rounded-lg inline-flex items-center justify-center shrink-0">{m.i}</div>
                    <div>
                      <div className="text-sm font-semibold leading-tight">{m.t}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{m.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5 sm:p-7 h-full flex flex-col">
              {submitted ? (
                <div className="m-auto w-full">
                </div>
              ) : null}
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
                    <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 text-sm font-medium">
                      Отправить заявку <ArrowRight className="w-4 h-4" />
                    </button>
                    <ConsentNote className="mt-3" />
                  </div>
                </form>
              )}
            </div>
          </div>
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

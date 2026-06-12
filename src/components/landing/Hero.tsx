import { ArrowRight, Sparkles, TrendingUp, Bot, Bell, Users, Briefcase, ListChecks, Percent, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { handleNavigateToSection } from "@/lib/section-navigation";
import { Particles } from "./Particles";

const scrollTo = (id: string) => handleNavigateToSection(id);

export function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mockupRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      tx = Math.max(-1, Math.min(1, px)) * 8;
      ty = Math.max(-1, Math.min(1, py)) * 6;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) rotateX(${-cy * 0.3}deg) rotateY(${cx * 0.3}deg)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* background decorations */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-blue/25 blur-[120px] animate-pulse-soft" />
      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-brand-violet/25 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-brand-violet/10 blur-[140px]" />
      <Particles className="opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="hero-rise hero-rise-1 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] sm:text-xs text-foreground/85 tracking-wide">

              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan ai-dot" />
              <span className="uppercase tracking-[0.14em]">AI-системы • Автоматизация • Управление бизнесом</span>
            </div>

            <h1 className="hero-rise hero-rise-2 mt-6 text-[2rem] sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight leading-[1.04]">
              Индивидуальные{" "}
              <span className="gradient-text whitespace-nowrap">AI-системы</span>,
              <br className="hidden sm:block" /> которые работают под ваш бизнес
            </h1>

            <p className="hero-rise hero-rise-3 mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">

              Проектируем и разрабатываем цифровые системы управления и внутренние бизнес-платформы: процессы, задачи, клиенты, сотрудники, аналитика и интеллектуальная автоматизация рутины в одном удобном интерфейсе.
            </p>

            <div className="hero-rise hero-rise-4 mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <button onClick={() => scrollTo("#contact")} className="btn-primary inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-medium">
                Обсудить проект <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo("capabilities")} className="btn-ghost inline-flex items-center justify-center rounded-full h-12 px-6 text-sm font-medium">
                Посмотреть возможности
              </button>
            </div>

            <p className="mt-4 text-xs sm:text-[13px] text-muted-foreground max-w-md leading-relaxed">
              Бесплатная консультация — разберём ваши процессы и предложим структуру будущей системы.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              {[
                "Индивидуальная адаптация под бизнес",
                "AI-анализ и рекомендации",
                "Разработка от структуры до внедрения",
              ].map((t) => (
                <div key={t} className="glass rounded-full px-3.5 py-2 flex items-center gap-2 text-[12px] sm:text-[13px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  <span className="text-foreground/85">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MOCKUP */}
          <div className="relative w-full max-w-full">
            <div className="absolute -inset-8 bg-gradient-to-br from-brand-blue/40 via-brand-violet/25 to-transparent blur-3xl rounded-[2rem]" />
            <div className="relative glass-strong rounded-2xl p-3 sm:p-4 shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-1 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="ml-3 text-[10px] text-muted-foreground tracking-wide truncate">core.aisystems.app / dashboard</div>
              </div>

              <div className="rounded-xl bg-background/70 border border-white/5 p-3.5 sm:p-4 space-y-3.5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Workspace</div>
                    <div className="text-sm font-semibold mt-0.5">Business Dashboard</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 text-[10px] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { l: "Клиенты", v: "1 284", d: "+4.2%", I: Users },
                    { l: "Активные сделки", v: "327", d: "+12", I: Briefcase },
                    { l: "Задачи", v: "58", d: "12 сегодня", I: ListChecks },
                    { l: "Конверсия", v: "24%", d: "+1.8%", I: Percent },
                  ].map(({ l, v, d, I }) => (
                    <div key={l} className="rounded-lg bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.06] px-3 py-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <I className="w-3 h-3" />
                        <span className="truncate">{l}</span>
                      </div>
                      <div className="text-sm font-semibold mt-1">{v}</div>
                      <div className="text-[9px] text-brand-cyan mt-0.5">{d}</div>
                    </div>
                  ))}
                </div>

                {/* Sales chart */}
                <div className="rounded-lg border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[11px] text-foreground/80 flex items-center gap-1.5 font-medium">
                      <TrendingUp className="w-3 h-3 text-brand-cyan" />Динамика продаж
                    </div>
                    <div className="text-[10px] text-emerald-300">+18.4%</div>
                  </div>
                  <svg viewBox="0 0 300 80" className="w-full h-14 sm:h-16" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.65 0.21 265)" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="oklch(0.65 0.21 265)" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="g2" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="oklch(0.75 0.14 210)" />
                        <stop offset="100%" stopColor="oklch(0.6 0.24 295)" />
                      </linearGradient>
                    </defs>
                    {[20, 35, 50, 65].map((y) => (
                      <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="oklch(1 0 0 / 0.04)" />
                    ))}
                    <path d="M0,60 L30,52 L60,55 L90,40 L120,45 L150,30 L180,35 L210,22 L240,28 L270,15 L300,20 L300,80 L0,80 Z" fill="url(#g1)" />
                    <path d="M0,60 L30,52 L60,55 L90,40 L120,45 L150,30 L180,35 L210,22 L240,28 L270,15 L300,20" fill="none" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Tasks + AI */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="text-[11px] text-foreground/80 font-medium mb-2">Задачи на сегодня</div>
                    <ul className="space-y-1.5">
                      {[
                        { t: "Проверить просроченные сделки", done: true },
                        { t: "Обновить статусы клиентов", done: false },
                        { t: "Согласовать поставщиков", done: false },
                      ].map(({ t, done }) => (
                        <li key={t} className="flex items-center gap-2 text-[11px]">
                          <span className={`h-3 w-3 rounded-[4px] border flex items-center justify-center ${done ? "bg-brand-blue border-brand-blue" : "border-white/25"}`}>
                            {done && <svg viewBox="0 0 10 10" className="w-2 h-2 text-white"><path d="M2 5 L4.5 7.5 L8.5 3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          </span>
                          <span className={done ? "line-through text-muted-foreground" : "text-foreground/85"}>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg p-3 relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.65 0.21 265 / 0.22), oklch(0.6 0.24 295 / 0.22))", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-brand-violet/30 blur-2xl" />
                    <div className="relative flex items-center gap-2 text-[11px]">
                      <div className="h-5 w-5 rounded-md bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-semibold">AI Insights</span>
                      <span className="ml-auto text-[9px] text-brand-cyan">insight</span>
                    </div>
                    <p className="relative mt-2 text-[10.5px] sm:text-[11px] text-foreground/90 leading-relaxed">
                      AI обнаружил снижение конверсии на этапе переговоров. Проверьте скорость ответа менеджеров и причины отказов за последние 14 дней.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* floating cards */}
            <div className="hidden md:flex absolute -bottom-5 -left-5 glass rounded-xl p-3 items-center gap-2 animate-float shadow-xl">
              <Bell className="w-4 h-4 text-brand-cyan" />
              <div className="text-[11px]">
                <div className="font-medium">Новая сделка</div>
                <div className="text-muted-foreground">+ 240 000 ₽</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-5 -right-5 glass rounded-xl p-3 items-center gap-2 animate-float shadow-xl" style={{ animationDelay: "1.5s" }}>
              <Sparkles className="w-4 h-4 text-brand-violet" />
              <div className="text-[11px]">
                <div className="font-medium">AI Insight</div>
                <div className="text-muted-foreground">3 рекомендации</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

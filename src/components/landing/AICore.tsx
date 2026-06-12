import { useEffect, useRef, useState } from "react";
import {
  Database, MessageCircle, Send, Mail, FileSpreadsheet, Globe,
  Boxes, Building2, Gauge, ListChecks, Users, BarChart3, Brain,
  ShieldCheck, FileBarChart, KeyRound,
} from "lucide-react";
import { handleNavigateToSection } from "@/lib/section-navigation";

type ItemDef = { id: string; label: string; icon: React.ReactNode };

const sources: ItemDef[] = [
  { id: "amo",     label: "amoCRM",      icon: <Database className="w-4 h-4" /> },
  { id: "bitrix",  label: "Bitrix24",    icon: <Boxes className="w-4 h-4" /> },
  { id: "1c",      label: "1С",          icon: <Building2 className="w-4 h-4" /> },
  { id: "erp",     label: "ERP",         icon: <Boxes className="w-4 h-4" /> },
  { id: "sheets",  label: "Excel / Sheets", icon: <FileSpreadsheet className="w-4 h-4" /> },
  { id: "tg",      label: "Telegram",    icon: <Send className="w-4 h-4" /> },
  { id: "wa",      label: "WhatsApp",    icon: <MessageCircle className="w-4 h-4" /> },
  { id: "mail",    label: "Email",       icon: <Mail className="w-4 h-4" /> },
  { id: "site",    label: "Сайт / формы", icon: <Globe className="w-4 h-4" /> },
  { id: "iiko",    label: "iiko",        icon: <Boxes className="w-4 h-4" /> },
  { id: "rkeeper", label: "r-keeper",    icon: <Database className="w-4 h-4" /> },
  { id: "wms",     label: "Склад / WMS", icon: <Boxes className="w-4 h-4" /> },
];

const outputs: ItemDef[] = [
  { id: "dash",    label: "Дашборд",         icon: <Gauge className="w-4 h-4" /> },
  { id: "tasks",   label: "Задачи",          icon: <ListChecks className="w-4 h-4" /> },
  { id: "clients", label: "Клиенты",         icon: <Users className="w-4 h-4" /> },
  { id: "analyt",  label: "Аналитика",       icon: <BarChart3 className="w-4 h-4" /> },
  { id: "ai",      label: "AI-рекомендации", icon: <Brain className="w-4 h-4" /> },
  { id: "ctrl",    label: "Контроль",        icon: <ShieldCheck className="w-4 h-4" /> },
  { id: "rep",     label: "Отчёты",          icon: <FileBarChart className="w-4 h-4" /> },
  { id: "roles",   label: "Роли и доступы",  icon: <KeyRound className="w-4 h-4" /> },
];

export function AICore() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [lines, setLines] = useState<
    Array<{ id: string; x1: number; y1: number; x2: number; y2: number; side: "in" | "out" }>
  >([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    const compute = () => {
      const wrap = wrapRef.current;
      const core = coreRef.current;
      if (!wrap || !core) return;
      const wb = wrap.getBoundingClientRect();
      const cb = core.getBoundingClientRect();
      const cx = cb.left + cb.width / 2 - wb.left;
      const cy = cb.top + cb.height / 2 - wb.top;
      const next: typeof lines = [];
      [...sources, ...outputs].forEach((it) => {
        const el = itemRefs.current[it.id];
        if (!el) return;
        const r = el.getBoundingClientRect();
        const side: "in" | "out" = sources.find((s) => s.id === it.id) ? "in" : "out";
        const x = side === "in" ? r.right - wb.left : r.left - wb.left;
        const y = r.top + r.height / 2 - wb.top;
        next.push({ id: it.id, x1: x, y1: y, x2: cx, y2: cy, side });
      });
      setSize({ w: wb.width, h: wb.height });
      setLines(next);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  // One-time entrance animation when the block becomes visible
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setEntering(true);
          window.setTimeout(() => setEntering(false), 2800);
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);


  const Chip = ({ it, refKey, index = 0, side = "in", active = false }: { it: ItemDef; refKey: string; index?: number; side?: "in" | "out"; active?: boolean }) => (
    <div
      ref={(el) => { itemRefs.current[refKey] = el; }}
      className={`chip-stagger group inline-flex items-center gap-2 rounded-full glass border border-white/10 px-3 py-1.5 text-xs text-foreground/85 backdrop-blur-md hover:border-brand-cyan/40 transition-colors ${active ? "chip-active" : ""}`}
      style={{
        animationDelay: `${index * 70}ms`,
        ...({ "--tx": side === "in" ? "-12px" : "12px" } as Record<string, string>),
      }}
    >
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/[0.04] text-brand-cyan">
        {it.icon}
      </span>
      <span className="whitespace-nowrap">{it.label}</span>
    </div>
  );


  return (
    <section id="ai-core" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-radial-fade opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-brand-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
            AI Core
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-tight leading-[1.08]">
            Собираем разрозненные процессы бизнеса в&nbsp;<span className="gradient-text">единое AI-ядро</span>
          </h2>
          <p className="mt-5 text-base sm:text-[17px] text-muted-foreground leading-relaxed">
            Интегрируем данные из таблиц, CRM, 1С, мессенджеров и внутренних процессов в единую систему управления
            с аналитикой, задачами и AI-рекомендациями.
          </p>
        </div>

        <div
          ref={wrapRef}
          className="relative mt-14 premium-card ring-gradient p-5 sm:p-8 lg:p-10 overflow-hidden"
          style={{ minHeight: 580 }}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-brand-violet/15 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-brand-blue/20 blur-3xl" />
          </div>

          {/* SVG connection lines (desktop only) */}
          <svg
            className="absolute inset-0 hidden lg:block pointer-events-none"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
          >
            <defs>
              <linearGradient id="lineGradIn" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"  stopColor="oklch(0.78 0.14 210)" stopOpacity="0.05" />
                <stop offset="100%" stopColor="oklch(0.78 0.14 210)" stopOpacity="0.65" />
              </linearGradient>
              <linearGradient id="lineGradOut" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"  stopColor="oklch(0.62 0.24 295)" stopOpacity="0.65" />
                <stop offset="100%" stopColor="oklch(0.62 0.24 295)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {lines.map((l) => (
              <path
                key={l.id}
                d={`M ${l.x1} ${l.y1} C ${(l.x1 + l.x2) / 2} ${l.y1}, ${(l.x1 + l.x2) / 2} ${l.y2}, ${l.x2} ${l.y2}`}
                stroke={l.side === "in" ? "url(#lineGradIn)" : "url(#lineGradOut)"}
                strokeWidth={1.2}
                fill="none"
                className="ai-core-line"
              />
            ))}
          </svg>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
            {/* Sources */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 lg:items-end justify-center order-2 lg:order-1">
              <div className="w-full text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:text-right mb-1">
                Источники данных
              </div>
              {sources.map((it, i) => (
                <Chip key={it.id} it={it} refKey={it.id} index={i} side="in" active={activeIn === it.id} />
              ))}

            </div>

            {/* Core */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div ref={coreRef} className="relative">
                <div className="absolute -inset-12 rounded-full bg-brand-violet/40 blur-3xl animate-pulse-slow" />
                <div className="absolute -inset-6 rounded-full bg-brand-blue/30 blur-2xl animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full gradient-brand core-halo flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full ring-1 ring-white/25" />
                  <span className="absolute inset-2 rounded-full border border-white/20 ai-core-ring" />
                  <span className="absolute -inset-2 rounded-full border border-brand-cyan/40 ai-core-ring-2" />
                  <span className="absolute -inset-6 rounded-full border border-brand-violet/25 ai-core-ring" style={{ animationDelay: "0.5s" }} />
                  <div className="relative text-center">
                    <Brain className="w-10 h-10 mx-auto text-white" />
                    <div className="mt-2 text-sm font-semibold tracking-wide text-white">AI Core</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-white/70">единое ядро</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 lg:items-start justify-center order-3">
              <div className="w-full text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:text-left mb-1">
                Что получает бизнес
              </div>
              {outputs.map((it, i) => (
                <Chip key={it.id} it={it} refKey={it.id} index={i} side="out" active={activeOut === it.id} />
              ))}

            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => handleNavigateToSection("#contact")}
            className="btn-primary inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-sm font-medium"
          >
            Обсудить архитектуру системы
          </button>
        </div>
      </div>
    </section>
  );
}

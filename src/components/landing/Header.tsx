import { useState, useEffect } from "react";
import { Menu, X, Phone, Shield } from "lucide-react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { handleNavigateToSection, normalizeSectionId } from "@/lib/section-navigation";

type NavItem =
  | { id: string; label: string; kind?: "section" }
  | { id: string; label: string; kind: "route"; to: string };

const nav: NavItem[] = [
  { id: "ai-core", label: "AI Core" },
  { id: "capabilities", label: "Возможности" },
  { id: "audience", label: "Для кого" },
  { id: "cases", label: "Кейсы" },
  { id: "team", label: "Команда" },
  { id: "process", label: "Этапы" },
  { id: "pricing", label: "Тарифы" },
  { id: "blog", label: "Блог", kind: "route", to: "/blog" },
  { id: "faq", label: "FAQ" },
];


export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveId("");
      return;
    }
    const ids = nav.filter((n) => n.kind !== "route").map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;


    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const go = (sectionId: string) => {
    setOpen(false);
    const id = normalizeSectionId(sectionId);
    if (location.pathname !== "/") {
      navigate({ to: "/", hash: id });
      return;
    }
    if (!handleNavigateToSection(id)) return;
    setActiveId(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 lg:h-[88px] flex items-center justify-between gap-4">
        <div className="flex flex-col items-start shrink-0 gap-1">
          <button onClick={() => go("#top")} className="group flex items-center shrink-0" aria-label="AI Systems">
            <Logo compact />
          </button>
          <div
            className="hidden sm:inline-flex items-center gap-1.5 pl-[46px] sm:pl-[56px] lg:pl-[60px] text-[11px] sm:text-xs tracking-[0.14em] uppercase"
            style={{
              backgroundImage: "linear-gradient(90deg, oklch(0.85 0.14 220), oklch(0.78 0.18 290))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 18px oklch(0.75 0.18 220 / 0.25)",
            }}
          >
            <Shield
              className="w-3.5 h-3.5 shrink-0"
              style={{
                color: "oklch(0.75 0.18 220)",
                filter: "drop-shadow(0 0 6px oklch(0.75 0.18 220 / 0.5))",
              }}
            />
            <span>Резидент IT-парка Сколково</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => {
            const isActive =
              n.kind === "route"
                ? location.pathname === n.to || location.pathname.startsWith(n.to + "/")
                : activeId === n.id;
            const className = `relative text-sm transition-colors ${
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`;
            const underline = (
              <span
                className={`pointer-events-none absolute left-0 right-0 -bottom-1.5 h-[2px] rounded-full transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.75 0.18 220), oklch(0.7 0.2 290), transparent)",
                }}
              />
            );
            if (n.kind === "route") {
              return (
                <Link key={n.id} to={n.to} onClick={() => setOpen(false)} className={className}>
                  {n.label}
                  {underline}
                </Link>
              );
            }
            return (
              <button key={n.id} onClick={() => go(n.id)} className={className}>
                {n.label}
                {underline}
              </button>
            );
          })}
        </nav>


        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => go("#contact")}
            className="btn-primary inline-flex items-center rounded-full px-5 h-10 text-sm font-medium"
          >
            Обсудить проект
          </button>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg btn-ghost"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
          <div className="mb-2 px-3 py-2 rounded-lg border border-brand-cyan/20 bg-white/[0.02] inline-flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-brand-cyan" />
            <span className="text-[11px] text-foreground/70 uppercase tracking-wide">Резидент IT-парка Сколково</span>
          </div>
            {nav.map((n) => {
              const isActive =
                n.kind === "route"
                  ? location.pathname === n.to || location.pathname.startsWith(n.to + "/")
                  : activeId === n.id;
              const cls = `text-left px-3 py-3 rounded-lg text-sm transition-colors ${
                isActive
                  ? "text-foreground bg-white/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`;
              if (n.kind === "route") {
                return (
                  <Link key={n.id} to={n.to} onClick={() => setOpen(false)} className={cls}>
                    {n.label}
                  </Link>
                );
              }
              return (
                <button key={n.id} onClick={() => go(n.id)} className={cls}>
                  {n.label}
                </button>
              );
            })}

            <div className="mt-2 px-3 py-3 rounded-lg border border-border/60 bg-white/[0.02]">
              <div className="text-xs text-muted-foreground mb-1.5">Позвонить:</div>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+79166685775"
                  className="inline-flex items-center gap-2 text-sm text-foreground/90 transition-colors hover:text-[oklch(0.75_0.18_220)]"
                >
                  <Phone className="w-4 h-4" />
                  +7 916 668 57 75
                </a>
                <a
                  href="tel:+79774386966"
                  className="inline-flex items-center gap-2 text-sm text-foreground/90 pl-6 transition-colors hover:text-[oklch(0.7_0.2_290)]"
                >
                  +7 977 438 69 66
                </a>
              </div>
            </div>
            <button
              onClick={() => go("#contact")}
              className="btn-primary mt-2 inline-flex items-center justify-center rounded-full h-11 text-sm font-medium"
            >
              Обсудить проект
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

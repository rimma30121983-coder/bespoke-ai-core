import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { Logo } from "./Logo";

const nav = [
  { href: "#features", label: "Возможности" },
  { href: "#industries", label: "Для кого" },
  { href: "#ai", label: "AI" },
  { href: "#cases", label: "Кейсы" },
  { href: "#process", label: "Этапы" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate({ to: "/", hash: href.replace("#", "") });
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 lg:h-[88px] flex items-center justify-between gap-4">
        <button onClick={() => go("#top")} className="group flex items-center shrink-0" aria-label="AI Systems">
          <Logo compact />
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <button
              key={n.href}
              onClick={() => go(n.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
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
            {nav.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="text-left px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {n.label}
              </button>
            ))}
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

import { Send, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./Logo";

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

export function Footer() {
  const nav = [
    { href: "#features", label: "Возможности" },
    { href: "#industries", label: "Для кого" },
    { href: "#ai", label: "AI" },
    { href: "#process", label: "Этапы" },
    { href: "#pricing", label: "Тарифы" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Logo height={56} />
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Индивидуальные CRM и AI-системы для управления бизнесом.
            </p>
            <button onClick={() => go("#contact")} className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full h-11 px-5 text-sm font-medium">
              Оставить заявку
            </button>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Навигация</div>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <button onClick={() => go(n.href)} className="text-sm text-foreground/80 hover:text-foreground transition">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Контакты</div>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-2"><Send className="w-4 h-4 text-brand-cyan" /> Telegram</a></li>
              <li><a href="#" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-2"><MessageCircle className="w-4 h-4 text-brand-cyan" /> WhatsApp</a></li>
              <li><a href="mailto:hello@crm-ai.systems" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-2"><Mail className="w-4 h-4 text-brand-cyan" /> Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} CRM AI Systems. Все права защищены.</p>
          <p className="text-xs text-muted-foreground">Premium dark • AI-powered</p>
        </div>
      </div>
    </footer>
  );
}

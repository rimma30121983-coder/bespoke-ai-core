import { Send, MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { LogoLockup } from "./Logo";
import { handleNavigateToSection } from "@/lib/section-navigation";

const go = (sectionId: string) => handleNavigateToSection(sectionId);

export function Footer() {
  const nav = [
    { id: "ai-core", label: "AI Core" },
    { id: "capabilities", label: "Возможности" },
    { id: "audience", label: "Для кого" },
    { id: "cases", label: "Кейсы" },
    { id: "team", label: "Команда" },
    { id: "process", label: "Этапы" },
    { id: "pricing", label: "Тарифы" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <LogoLockup markSize={54} textSize={25} tagline="AI-системы • автоматизация • цифровые решения для бизнеса" />
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Индивидуальные AI-системы для управления и автоматизации бизнеса.

            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">ai-assistens.company</p>
            <button onClick={() => go("contact")} className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full h-11 px-5 text-sm font-medium">
              Оставить заявку
            </button>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Навигация</div>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.id}>
                  <button onClick={() => go(n.id)} className="text-sm text-foreground/80 hover:text-foreground transition">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Контакты</div>
            <ul className="mt-4 space-y-2.5">
              <li><a href="mailto:aistrategiy@bk.ru" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-2"><Mail className="w-4 h-4 text-brand-cyan" /> aistrategiy@bk.ru</a></li>
              <li><a href="tel:+79871861200" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-2"><Phone className="w-4 h-4 text-brand-cyan" /> +7 (987) 186-12-00</a></li>
              <li><a href="#" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-2"><Send className="w-4 h-4 text-brand-cyan" /> Telegram</a></li>
              <li><a href="#" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-2"><MessageCircle className="w-4 h-4 text-brand-cyan" /> WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col gap-2 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI Systems. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="whitespace-nowrap">
              AI Systems by{" "}
              <a href="https://aistrategiya.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition">AI Strategiya</a>
            </span>
            <span className="mx-2 text-muted-foreground/50">·</span>
            <span className="whitespace-nowrap">ООО «ИИ Стратегия»</span>
            <span className="mx-2 text-muted-foreground/50">·</span>
            <span className="whitespace-nowrap">ИНН 1650437696</span>
            <span className="mx-2 text-muted-foreground/50">·</span>
            <span className="whitespace-nowrap">ОГРН 1241600041968</span>
          </p>
          <p className="text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-brand-cyan transition">Политика конфиденциальности</Link>
            <span className="mx-2 text-muted-foreground/50">·</span>
            <Link to="/terms" className="hover:text-brand-violet transition">Пользовательское соглашение</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { blogPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title:
          "Блог AI Systems — AI-системы, автоматизация бизнеса и цифровое управление",
      },
      {
        name: "description",
        content:
          "Статьи об AI-системах, автоматизации бизнес-процессов, CRM, управлении задачами, аналитике и цифровых системах для бизнеса.",
      },
      {
        property: "og:title",
        content:
          "Блог AI Systems — AI-системы, автоматизация бизнеса и цифровое управление",
      },
      {
        property: "og:description",
        content:
          "Материалы об AI-системах, автоматизации бизнеса, CRM, управлении процессами и цифровой трансформации.",
      },
      { property: "og:url", content: "https://aisystems.company/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://aisystems.company/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <div className="pt-28 lg:pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <header className="relative max-w-3xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_30%_30%,color-mix(in_oklab,var(--brand-violet)_25%,transparent),transparent_70%)] blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-foreground/70">
                <Tag className="w-3.5 h-3.5 text-brand-cyan" /> Блог
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-semibold tracking-tight leading-[1.08]">
                Блог <span className="gradient-text">AI Systems</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Материалы об AI-системах, автоматизации бизнеса, CRM, управлении
                процессами и цифровой трансформации.
              </p>
            </div>
          </header>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group premium-card p-6 rounded-2xl flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-foreground/70">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 border border-white/10 px-2.5 py-1 text-brand-cyan">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" /> {post.dateLabel}
                  </span>
                </div>

                <h2 className="mt-4 text-lg font-semibold tracking-tight leading-snug group-hover:text-brand-cyan transition-colors">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-brand-cyan group-hover:gap-2.5 transition-all">
                    Читать статью <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

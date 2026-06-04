import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { getPostBySlug, type BlogPost } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Статья — AI Systems" }] };
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `https://aisystems.company/blog/${params.slug}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://aisystems.company/blog/${params.slug}`,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.description,
            datePublished: loaderData.date,
            articleSection: loaderData.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-36 pb-20 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-2xl font-semibold">Статья не найдена</h1>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-brand-cyan hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Назад в блог
        </Link>
      </div>
      <Footer />
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-36 pb-20 mx-auto max-w-3xl px-4 text-center">
        <h1 className="text-2xl font-semibold">Не удалось загрузить статью</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-brand-cyan hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Назад в блог
        </Link>
      </div>
      <Footer />
    </main>
  ),
  component: BlogArticle,
});

function BlogArticle() {
  const post = Route.useLoaderData() as BlogPost;



  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <article className="pt-28 lg:pt-36 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="breadcrumbs"
            className="text-xs text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Главная
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Блог
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground/80 line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          <header className="mt-6 relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(60%_60%_at_30%_30%,color-mix(in_oklab,var(--brand-violet)_22%,transparent),transparent_70%)] blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em]">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue/20 to-brand-violet/20 border border-white/10 px-2.5 py-1 text-brand-cyan">
                  <Tag className="w-3.5 h-3.5" /> {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" /> {post.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                </span>
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
                {post.title}
              </h1>
            </div>
          </header>

          {/* Content */}
          <div className="mt-10 space-y-5 text-foreground/85 leading-relaxed">
            {post.content.map((block, i) => {
              if (block.type === "p")
                return (
                  <p key={i} className="text-base">
                    {block.text}
                  </p>
                );
              if (block.type === "h2")
                return (
                  <h2
                    key={i}
                    className="mt-10 text-2xl font-semibold tracking-tight text-foreground"
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === "h3")
                return (
                  <h3
                    key={i}
                    className="mt-6 text-xl font-semibold tracking-tight text-foreground"
                  >
                    {block.text}
                  </h3>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="space-y-2.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="premium-card p-3.5 flex items-start gap-3"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              return null;
            })}
          </div>

          {/* CTA */}
          <section className="my-14 relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,color-mix(in_oklab,var(--brand-blue)_30%,transparent),transparent_70%)] blur-2xl pointer-events-none" />
            <div className="relative premium-card p-8 sm:p-10 rounded-[1.7rem] text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Хотите внедрить <span className="gradient-text">AI-систему</span>{" "}
                под ваш бизнес?
              </h3>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Разберём ваши процессы и предложим структуру будущей системы.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  hash="contact"
                  className="btn-primary inline-flex items-center rounded-full px-7 h-12 text-sm font-medium"
                >
                  Обсудить проект
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Назад в блог
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

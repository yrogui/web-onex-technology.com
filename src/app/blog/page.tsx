import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { getPublishedArticles } from "@/lib/mdx";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: "Blog — Retours terrain & insights CCaaS",
  description:
    "Articles techniques, retours d'expérience et analyses sur les migrations CCaaS, l'expérience client et l'IA conversationnelle au Maroc.",
  alternates: { canonical: "https://onex-technology.com/blog" },
  openGraph: {
    title: "Blog — Retours terrain & insights CCaaS | One-X Technology",
    description:
      "Articles techniques, retours d'expérience et analyses sur les migrations CCaaS, l'expérience client et l'IA conversationnelle au Maroc.",
    url: "https://onex-technology.com/blog",
  },
};

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <main className="min-h-screen bg-paper dark:bg-primary pt-20">
      {/* Header */}
      <section className="py-20 border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            Pensées & Stratégies
          </p>
          <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-ink dark:text-paper mb-6 tracking-[-0.02em]">
            Retours terrain & insights
          </h1>
          <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke max-w-3xl">
            Articles techniques, retours d'expérience et analyses issus de nos
            missions réelles au Maroc et en Afrique. Précis, sourcés, applicables.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <article className="bg-paper dark:bg-charcoal/50 border border-smoke/30 dark:border-charcoal hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 rounded h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-graphite/10 dark:bg-paper/[0.03] overflow-hidden rounded-t">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-accent text-6xl opacity-20">✦</div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/90 text-paper text-[9px] font-semibold uppercase tracking-wider rounded-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-graphite dark:text-smoke">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-medium text-2xl text-ink dark:text-paper mb-3 group-hover:text-accent dark:group-hover:text-accent-light transition-colors tracking-[-0.01em]">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-charcoal dark:text-smoke leading-[1.65] mb-6 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center gap-2 text-accent dark:text-accent-light text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Lire l'article</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

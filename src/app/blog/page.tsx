import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { getPublishedArticles } from "@/lib/mdx";
import { Newsletter } from "@/components/sections/newsletter";

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <main className="min-h-screen bg-brand-cream dark:bg-[#0a0c10] pt-20">
      {/* Header */}
      <section className="py-20 border-b border-brand-noir/10 dark:border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            Pensées & Stratégies
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-6 tracking-tight">
            Retours Terrain & Insights
          </h1>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8] max-w-3xl">
            Articles techniques, retours d'expérience et analyses basés sur nos
            missions réelles au Maroc et en Afrique. Sans buzzwords, que du
            concret.
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
                <article className="bg-white dark:bg-[#11141a] border border-brand-noir/10 dark:border-white/[0.05] hover:border-brand-gold/30 dark:hover:border-brand-gold/30 transition-all duration-300 card-glow h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-brand-slate/10 dark:bg-white/[0.03] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-brand-gold text-6xl opacity-20">
                        ✦
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-gold/90 text-white text-[9px] font-bold uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-brand-slate dark:text-[#94a3b8]">
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
                    <h2 className="font-serif text-2xl text-brand-noir dark:text-white mb-3 group-hover:text-brand-gold dark:group-hover:text-brand-gold transition-colors">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-brand-slate dark:text-[#94a3b8] leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center gap-2 text-brand-gold text-sm font-medium group-hover:gap-3 transition-all">
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

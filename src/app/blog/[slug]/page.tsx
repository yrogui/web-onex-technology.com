import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { getArticleBySlug, getPublishedArticles, compileMDXContent } from "@/lib/mdx";
import { Newsletter } from "@/components/sections/newsletter";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article introuvable | ONEX Technology",
    };
  }

  return {
    title: `${article.title} | Blog ONEX Technology`,
    description: article.excerpt,
    keywords: [article.category, "CCaaS Maroc", "CX", "transformation digitale"],
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Compiler le contenu MDX
  const { content } = await compileMDXContent(article.content || "");

  return (
    <main className="min-h-screen bg-brand-cream dark:bg-[#0a0c10] pt-20">
      {/* Back button */}
      <div className="border-b border-brand-noir/10 dark:border-white/[0.05]">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-slate dark:text-[#94a3b8] hover:text-brand-gold dark:hover:text-brand-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour aux articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-16">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-[9px] font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-brand-slate dark:text-[#94a3b8]">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-8 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-brand-slate dark:text-[#94a3b8] mb-12 leading-relaxed font-light italic border-l-4 border-brand-gold pl-6">
            {article.excerpt}
          </p>

          {/* Featured Image Placeholder */}
          <div className="relative h-[400px] bg-brand-slate/10 dark:bg-white/[0.03] mb-12 flex items-center justify-center border border-brand-noir/10 dark:border-white/[0.05]">
            <div className="text-brand-gold text-8xl opacity-20">✦</div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-serif prose-headings:text-brand-noir dark:prose-headings:text-white
            prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:tracking-tight
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
            prose-p:text-brand-slate dark:prose-p:text-[#94a3b8] prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-brand-noir dark:prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-brand-slate dark:prose-ul:text-[#94a3b8]
            prose-li:mb-2
            prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline
            prose-code:text-brand-gold prose-code:bg-brand-noir/5 dark:prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-brand-noir dark:prose-pre:bg-[#1a1c20] prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg
            prose-blockquote:border-l-4 prose-blockquote:border-brand-gold prose-blockquote:pl-4 prose-blockquote:italic
            prose-table:border prose-table:border-brand-noir/10 dark:prose-table:border-white/10
            prose-th:bg-brand-slate/5 dark:prose-th:bg-white/5 prose-th:p-2
            prose-td:p-2 prose-td:border prose-td:border-brand-noir/10 dark:prose-td:border-white/10"
          >
            {content}
          </div>

          {/* Author info */}
          <div className="mt-16 pt-8 border-t border-brand-noir/10 dark:border-white/[0.05]">
            <p className="text-sm text-brand-slate dark:text-[#94a3b8]">
              Publié par{" "}
              <span className="font-semibold text-brand-noir dark:text-white">
                {article.author}
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-brand-gold/5 border border-brand-gold/20 dark:bg-brand-gold/5">
            <h3 className="font-serif text-2xl text-brand-noir dark:text-white mb-4">
              Besoin d'accompagnement sur ce sujet ?
            </h3>
            <p className="text-brand-slate dark:text-[#94a3b8] mb-6">
              Nos experts sont disponibles pour échanger sur votre projet de
              transformation digitale.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-brand-gold text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-dark transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </article>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

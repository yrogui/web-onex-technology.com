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
      title: "Article introuvable | One-X Technology",
    };
  }

  return {
    title: `${article.title} | Blog One-X Technology`,
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

  const { content } = await compileMDXContent(article.content || "");

  return (
    <main className="min-h-screen bg-paper dark:bg-primary pt-20">
      {/* Back button */}
      <div className="border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-graphite dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
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
            <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent dark:text-accent-light text-[9px] font-semibold uppercase tracking-wider rounded-sm">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-graphite dark:text-smoke">
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
          <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-ink dark:text-paper mb-8 tracking-[-0.02em] leading-[1.05]">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-charcoal dark:text-smoke mb-12 leading-[1.65] italic border-l-4 border-accent pl-6">
            {article.excerpt}
          </p>

          {/* Featured Image Placeholder */}
          <div className="relative h-[400px] bg-graphite/10 dark:bg-paper/[0.03] mb-12 flex items-center justify-center border border-smoke/30 dark:border-charcoal rounded">
            <div className="text-accent text-8xl opacity-20">✦</div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-display prose-headings:text-ink dark:prose-headings:text-paper
            prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:tracking-[-0.015em]
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
            prose-p:text-charcoal dark:prose-p:text-smoke prose-p:leading-[1.65] prose-p:mb-6
            prose-strong:text-ink dark:prose-strong:text-paper prose-strong:font-medium
            prose-ul:text-charcoal dark:prose-ul:text-smoke
            prose-li:mb-2
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-code:text-accent prose-code:bg-ink/5 dark:prose-code:bg-paper/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm
            prose-pre:bg-ink dark:prose-pre:bg-charcoal prose-pre:text-paper prose-pre:p-4 prose-pre:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic
            prose-table:border prose-table:border-smoke/30 dark:prose-table:border-charcoal
            prose-th:bg-graphite/5 dark:prose-th:bg-paper/5 prose-th:p-2
            prose-td:p-2 prose-td:border prose-td:border-smoke/30 dark:prose-td:border-charcoal"
          >
            {content}
          </div>

          {/* Author info */}
          <div className="mt-16 pt-8 border-t border-smoke/30 dark:border-charcoal">
            <p className="text-sm text-graphite dark:text-smoke">
              Publié par{" "}
              <span className="font-medium text-ink dark:text-paper">
                {article.author}
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-accent/5 border border-accent/20 dark:bg-accent/5 rounded">
            <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-4 tracking-[-0.01em]">
              Besoin d'accompagnement sur ce sujet ?
            </h3>
            <p className="text-charcoal dark:text-smoke mb-6 text-[15px] leading-[1.65]">
              Nos experts sont disponibles pour échanger sur votre projet de
              transformation digitale.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-primary dark:bg-accent text-paper text-sm font-medium tracking-wide rounded-sm hover:opacity-90 transition-all duration-300"
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

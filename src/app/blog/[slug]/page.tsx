import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
      title: "Article introuvable",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.category, "CCaaS Maroc", "CX", "transformation digitale"],
    alternates: {
      canonical: `https://onex-technology.com/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://onex-technology.com/blog/${slug}`,
      type: "article",
      images: [
        {
          url: article.ogImage || "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { content } = await compileMDXContent(article.content || "");

  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-paper dark:bg-primary pt-20">
      {/* Back button */}
      <div className="border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 py-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-graphite dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux articles
          </Link>
        </div>
      </div>

      <article className="max-w-[900px] mx-auto px-8 lg:px-16 py-16">
        {/* Eyebrow : catégorie */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke mb-4">
          {article.category}
        </p>

        {/* H1 */}
        <h1 className="font-display font-semibold text-5xl md:text-[48px] leading-[1.1] tracking-[-0.02em] text-ink dark:text-paper mb-6 max-md:text-[32px] break-words">
          {article.title}
        </h1>

        {/* Meta : date · temps de lecture */}
        <p className="text-sm text-graphite dark:text-smoke mb-0">
          <time dateTime={article.date}>{formattedDate}</time>
          {" · "}
          {article.readTime} de lecture
          {" · "}
          {article.author}
        </p>

        {/* Chapeau */}
        <blockquote className="font-display italic font-medium text-xl text-charcoal dark:text-smoke leading-[1.65] border-l-[3px] border-accent pl-5 my-10 max-w-[680px]">
          {article.excerpt}
        </blockquote>

        {/* Corps de l'article — composants charte via articleComponents */}
        <div>
          {content}
        </div>

        {/* Auteur + badge partenaire */}
        <div className="mt-16 pt-8 border-t border-smoke/30 dark:border-charcoal flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-graphite dark:text-smoke">
            Rédigé par{" "}
            <span className="font-medium text-ink dark:text-paper">{article.author}</span>
          </p>
          <div className="flex items-center gap-2 px-3 py-1.5 border border-smoke/40 dark:border-charcoal rounded-sm">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-graphite dark:text-smoke">
              Partenaire officiel
            </span>
            <span className="text-[10px] font-bold text-accent dark:text-accent-light tracking-wider">
              ExpertiaX
            </span>
          </div>
        </div>

        {/* CTA block */}
        <div className="bg-mist dark:bg-charcoal/30 p-10 mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke mb-3">
            Prochaine étape
          </p>
          <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-4 tracking-[-0.01em]">
            Prêt à sécuriser votre projet CCaaS ?
          </h3>
          <p className="text-[15px] text-charcoal dark:text-smoke leading-[1.65] mb-6 max-w-[520px]">
            Diagnostic gratuit (30 min) — nos architectes analysent votre infrastructure et vous donnent une évaluation honnête des risques.
          </p>
          <a
            href="https://calendly.com/yrogui/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-paper text-sm font-medium tracking-wide rounded-sm hover:bg-accent transition-colors duration-300"
          >
            Réserver un diagnostic gratuit
          </a>
        </div>
      </article>

      <Newsletter />
    </main>
  );
}

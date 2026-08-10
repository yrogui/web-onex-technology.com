import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { perspectives } from "@/data/perspectives";

type Locale = "fr" | "en" | "ar";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const published = perspectives.filter((p) => p.status === "published");
  const slugs = [...new Set(published.map((p) => p.slug))];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const targetLang = locale === "en" ? "en" : locale === "ar" ? "ar" : "fr";

  const post =
    perspectives.find(
      (p) => p.slug === slug && p.status === "published" && p.lang === targetLang
    ) ??
    perspectives.find(
      (p) => p.slug === slug && p.status === "published" && p.lang === "fr"
    );

  if (!post) return { title: "Perspective introuvable" };

  const baseUrl = "https://onex-technology.com";
  const isDefault = locale === "fr";
  const canonicalBase = isDefault ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${canonicalBase}/perspectives/${slug}`,
      languages: {
        fr: `${baseUrl}/perspectives/${slug}`,
        en: `${baseUrl}/en/perspectives/${slug}`,
        ar: `${baseUrl}/ar/perspectives/${slug}`,
        "x-default": `${baseUrl}/perspectives/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${canonicalBase}/perspectives/${slug}`,
      type: "article",
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
  };
}

const STRINGS: Record<Locale, {
  back: string;
  by: string;
  read: string;
  bioTitle: string;
  bioDesc: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  partnerLabel: string;
  partnerName: string;
}> = {
  fr: {
    back: "Retour aux perspectives",
    by: "par",
    read: "de lecture",
    bioTitle: "YASSINE ROGUI",
    bioDesc: "Practice Leader & Partenaire technique One-X Technology. 18 ans d'expertise CX et CCaaS en France et au Maroc.",
    ctaEyebrow: "PROCHAINE ÉTAPE",
    ctaTitle: "Prêt à sécuriser votre programme CCaaS ?",
    ctaDesc: "Diagnostic gratuit (30 min) — nos architectes analysent votre infrastructure et vous donnent une évaluation honnête des risques et du plan de transformation.",
    ctaButton: "Réserver un diagnostic gratuit",
    partnerLabel: "Partenaire officiel",
    partnerName: "ExpertiaX",
  },
  en: {
    back: "Back to perspectives",
    by: "by",
    read: "read",
    bioTitle: "YASSINE ROGUI",
    bioDesc: "Practice Leader & Technical Partner at One-X Technology. 18 years of CX and CCaaS expertise in France and Morocco.",
    ctaEyebrow: "NEXT STEP",
    ctaTitle: "Ready to secure your CCaaS programme?",
    ctaDesc: "Free diagnostic (30 min) — our architects assess your infrastructure and give you an honest evaluation of risks and the transformation roadmap.",
    ctaButton: "Book a free diagnostic",
    partnerLabel: "Official partner",
    partnerName: "ExpertiaX",
  },
  ar: {
    back: "العودة إلى المنظورات",
    by: "بقلم",
    read: "دقيقة قراءة",
    bioTitle: "ياسين روڭي",
    bioDesc: "قائد الممارسة والشريك التقني في One-X Technology. خبرة 18 عاماً في CX وCCaaS في فرنسا والمغرب.",
    ctaEyebrow: "الخطوة التالية",
    ctaTitle: "هل أنت مستعد لتأمين برنامج CCaaS الخاص بك؟",
    ctaDesc: "تشخيص مجاني (30 دقيقة) — يحلّل خبراؤنا بنيتك التحتية ويقدّمون لك تقييماً صريحاً للمخاطر وخارطة طريق التحويل.",
    ctaButton: "احجز تشخيصاً مجانياً",
    partnerLabel: "شريك رسمي",
    partnerName: "ExpertiaX",
  },
};

export default async function PerspectivePage({ params }: Props) {
  const { locale, slug } = await params;
  const targetLang = (locale === "en" ? "en" : locale === "ar" ? "ar" : "fr") as Locale;

  const post =
    perspectives.find(
      (p) => p.slug === slug && p.status === "published" && p.lang === targetLang
    ) ??
    perspectives.find(
      (p) => p.slug === slug && p.status === "published" && p.lang === "fr"
    );

  if (!post) notFound();

  const s = STRINGS[targetLang];

  return (
    <div className="min-h-screen bg-paper dark:bg-primary pt-20">
      {/* Back link */}
      <div className="border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 py-5">
          <Link
            href="/perspectives"
            className="inline-flex items-center gap-2 text-sm text-graphite dark:text-smoke hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            {s.back}
          </Link>
        </div>
      </div>

      <article className="max-w-[900px] mx-auto px-8 lg:px-16 py-16">
        {/* Category eyebrow */}
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent mb-4">
          {post.category}
        </p>

        {/* Title */}
        <h1 className="font-display font-semibold text-4xl md:text-[48px] leading-[1.1] tracking-[-0.02em] text-ink dark:text-paper mb-6 max-md:text-[28px]">
          {post.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-graphite dark:text-smoke mb-0">
          {post.date}
          {" · "}
          {post.readTime} {s.read}
          {" · "}
          {s.by} {s.bioTitle}
        </p>

        {/* Excerpt */}
        <blockquote className="font-display italic font-medium text-xl text-charcoal dark:text-smoke leading-[1.65] border-l-[3px] border-accent pl-5 my-10 max-w-[680px]">
          {post.excerpt}
        </blockquote>

        {/* Body */}
        <div
          className="perspectives-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Author block */}
        <div className="mt-16 pt-8 border-t border-smoke/30 dark:border-charcoal flex items-start justify-between flex-wrap gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-graphite dark:text-smoke/70 mb-1">
              {s.by.toUpperCase()}
            </p>
            <p className="text-sm font-semibold text-ink dark:text-paper">
              {s.bioTitle}
            </p>
            <p className="text-sm text-graphite dark:text-smoke mt-1 max-w-sm">
              {s.bioDesc}
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-smoke/40 dark:border-charcoal rounded-sm self-start">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-graphite dark:text-smoke">
              {s.partnerLabel}
            </span>
            <span className="text-[10px] font-bold text-accent dark:text-accent-light tracking-wider">
              {s.partnerName}
            </span>
          </div>
        </div>

        {/* CTA block */}
        <div className="bg-mist dark:bg-charcoal/30 p-10 mt-16 rounded-sm">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-graphite dark:text-smoke mb-3">
            {s.ctaEyebrow}
          </p>
          <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-4 tracking-[-0.01em]">
            {s.ctaTitle}
          </h3>
          <p className="text-[15px] text-charcoal dark:text-smoke leading-[1.65] mb-6 max-w-[520px]">
            {s.ctaDesc}
          </p>
          <a
            href="https://calendly.com/yrogui/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-medium tracking-wide rounded-sm hover:bg-accent dark:hover:bg-mist transition-colors duration-300"
          >
            {s.ctaButton}
          </a>
        </div>
      </article>
    </div>
  );
}

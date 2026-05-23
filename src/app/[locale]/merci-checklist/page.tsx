import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Votre checklist CCaaS est en route",
  description:
    "Merci pour votre demande. Votre checklist migration CCaaS — 25 points avant go-live — vous a été envoyée par email.",
  robots: { index: false, follow: false },
};

const PDF_URL = process.env.NEXT_PUBLIC_CHECKLIST_PDF_URL ?? "#";

export default async function MerciChecklistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("merciChecklist");

  return (
    <section className="bg-paper dark:bg-primary flex items-center justify-center px-8 py-32">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">
        {/* Icône */}
        <div
          className="inline-flex items-center justify-center h-20 w-20 rounded-full mx-auto"
          style={{ background: "#3F7A5E18" }}
        >
          <CheckCircle className="h-10 w-10" style={{ color: "#3F7A5E" }} />
        </div>

        {/* Eyebrow */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-graphite dark:text-smoke">
          {t("eyebrow")}
        </p>

        {/* Titre */}
        <h1 className="font-display font-medium text-4xl md:text-5xl text-ink dark:text-paper tracking-tight">
          {t("title")}
        </h1>

        {/* Description */}
        <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-lg mx-auto">
          {t("desc")}
        </p>

        {/* Téléchargement direct */}
        {PDF_URL !== "#" && (
          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[15px] font-medium rounded-sm transition-all duration-200"
            style={{ background: "#0F0F14", color: "#F7F3EA" }}
          >
            <Download className="h-4 w-4" />
            {t("downloadBtn")}
          </a>
        )}

        {/* Séparateur */}
        <hr className="border-smoke/30 dark:border-charcoal max-w-sm mx-auto" />

        {/* CTA audit flash */}
        <div className="space-y-4">
          <p className="text-[14px] text-graphite dark:text-smoke">
            {t("ctaLabel")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[15px] font-medium border border-ink dark:border-paper text-ink dark:text-paper px-7 py-3.5 rounded-sm hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink transition-all duration-200"
          >
            {t("ctaButton")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations juridiques de One-X Technology, cabinet CCaaS & CX basé à Casablanca, Maroc. Partenaire officiel ExpertiaX.",
  alternates: { canonical: "https://onex-technology.com/mentions-legales" },
};

const tocAnchors = ["#editeur", "#hebergement", "#propriete", "#responsabilite", "#liens", "#droit", "/contact"];

export default async function MentionsLegalesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("mentionsLegales");
  const tc = await getTranslations("contact");
  const toc = t.raw("toc") as string[];

  return (
    <main className="min-h-screen bg-paper dark:bg-primary pt-20">
      {/* Back button */}
      <div className="border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-graphite dark:text-smoke hover:text-accent dark:hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t("backHome")}</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink dark:text-paper mb-8 tracking-tight">
            {t("title")}
          </h1>

          <p className="text-sm text-graphite dark:text-smoke mb-12">
            {t("lastUpdate")}
          </p>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-graphite/5 dark:bg-white/[0.03] border border-smoke/30 dark:border-charcoal">
            <h2 className="font-display text-xl text-ink dark:text-paper mb-4">
              {t("tocTitle")}
            </h2>
            <ol className="space-y-2 text-sm text-graphite dark:text-smoke">
              {toc.map((item, i) => (
                <li key={i}>
                  <a href={tocAnchors[i]} className="hover:text-accent transition-colors">
                    {i + 1}. {item}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Section 1 */}
            <section id="editeur" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s1Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-3">
                <p><strong className="text-ink dark:text-paper">{t("s1RaisonLabel")}</strong> {t("s1Raison")}</p>
                <p><strong className="text-ink dark:text-paper">{t("s1FormeLabel")}</strong> {t("s1Forme")}</p>
                <p><strong className="text-ink dark:text-paper">{t("s1TypeLabel")}</strong> {t("s1Type")}</p>
                <p><strong className="text-ink dark:text-paper">{t("s1SiegeLabel")}</strong> {t("s1Siege")}</p>
                <p>
                  <strong className="text-ink dark:text-paper">{t("s1EmailLabel")}</strong>{" "}
                  <a href={`mailto:${tc("email")}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {tc("email")}
                  </a>
                </p>
                <p><strong className="text-ink dark:text-paper">{t("s1DirLabel")}</strong> {t("s1Dir")}</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="hebergement" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s2Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-3">
                <p><strong className="text-ink dark:text-paper">{t("s2HebLabel")}</strong> {t("s2Heb")}</p>
                <p><strong className="text-ink dark:text-paper">{t("s2SocLabel")}</strong> {t("s2Soc")}</p>
                <p><strong className="text-ink dark:text-paper">{t("s2AddrLabel")}</strong> {t("s2Addr")}</p>
                <p><strong className="text-ink dark:text-paper">{t("s2LocLabel")}</strong> {t("s2Loc")}</p>
                <p className="mt-4">{t("s2P1")}</p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="propriete" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s3Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s3P1")}</p>
                <p>{t("s3P2")}</p>
                <p>{t("s3P3")}</p>
                <p>{t("s3P4")}</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="responsabilite" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s4Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s4P1")}</p>
                <p>{t("s4P2")}</p>
                <p>{t("s4P3")}</p>
                <p>{t("s4P4")}</p>
                <p>{t("s4P5")}</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="liens" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s5Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s5P1")}</p>
                <p>{t("s5P2")}</p>
                <p>{t("s5P3")}</p>
                <p>{t("s5P4")}</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="droit" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s6Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s6P1")}</p>
                <p>{t("s6P2")}</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="contact" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s7Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-3">
                <p>{t("s7P1")}</p>
                <p>
                  <strong className="text-ink dark:text-paper">{t("s7EmailLabel")}</strong>{" "}
                  <a href={`mailto:${tc("email")}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    {tc("email")}
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Back to top */}
          <div className="mt-12 pt-8 border-t border-smoke/30 dark:border-charcoal text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent-dark transition-all duration-300"
            >
              {t("backHome")}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "politiqueConfidentialite" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "https://onex-technology.com/politique-de-confidentialite" },
  };
}

export default async function PolitiqueConfidentialitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("politiqueConfidentialite");
  const tc = await getTranslations("common");
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
            <span>{tc("backHome")}</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-[900px] mx-auto px-8 lg:px-16">
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink dark:text-paper mb-8 tracking-tight">
            {t("pageTitle")}
          </h1>

          <p className="text-sm text-graphite dark:text-smoke mb-12">
            {t("lastUpdated")}
          </p>

          {/* Intro */}
          <div className="mb-12 p-6 bg-accent/5 border border-accent/20 dark:bg-accent/5">
            <p className="text-graphite dark:text-smoke leading-relaxed">
              {t("intro")}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-graphite/5 dark:bg-white/[0.03] border border-smoke/30 dark:border-charcoal">
            <h2 className="font-display text-xl text-ink dark:text-paper mb-4">
              {t("tocTitle")}
            </h2>
            <ol className="space-y-2 text-sm text-graphite dark:text-smoke">
              {toc.slice(0, 10).map((item, i) => (
                <li key={i}>
                  <a
                    href={["#responsable","#donnees","#finalites","#base-legale","#destinataires","#conservation","#securite","#droits","#cookies","#modifications"][i]}
                    className="hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  {toc[10]}
                </a>
              </li>
            </ol>
          </div>

          {/* Sections */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Section 1 */}
            <section id="responsable" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s1Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-3">
                <p>{t("s1P1")}</p>
                <p>
                  <strong className="text-ink dark:text-paper">One-X Technology</strong><br />
                  Casablanca, Maroc<br />
                  Email :{" "}
                  <a href="mailto:contact@onex-technology.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    contact@onex-technology.com
                  </a>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="donnees" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s2Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s2P1")}</p>
                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">{t("s2s1Title")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s2s1FormL")}</strong> {t("s2s1FormV")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s2s1NewsletterL")}</strong> {t("s2s1NewsletterV")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s2s1DevisL")}</strong> {t("s2s1DevisV")}</li>
                </ul>
                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">{t("s2s2Title")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s2s2NavL")}</strong> {t("s2s2NavV")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s2s2CookiesL")}</strong> {t("s2s2CookiesV")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s2s2PerfL")}</strong> {t("s2s2PerfV")}</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="finalites" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s3Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s3P1")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s3Item1L")}</strong> {t("s3Item1V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s3Item2L")}</strong> {t("s3Item2V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s3Item3L")}</strong> {t("s3Item3V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s3Item4L")}</strong> {t("s3Item4V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s3Item5L")}</strong> {t("s3Item5V")}</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="base-legale" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s4Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s4P1")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s4Item1L")}</strong> {t("s4Item1V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s4Item2L")}</strong> {t("s4Item2V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s4Item3L")}</strong> {t("s4Item3V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s4Item4L")}</strong> {t("s4Item4V")}</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="destinataires" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s5Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s5P1")}</p>
                <p>{t("s5P2")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s5Item1L")}</strong> {t("s5Item1V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s5Item2L")}</strong> {t("s5Item2V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s5Item3L")}</strong> {t("s5Item3V")}</li>
                </ul>
                <p>{t("s5P3")}</p>
                <p><strong className="text-ink dark:text-paper">{t("s5P4")}</strong></p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="conservation" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s6Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s6P1")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s6Item1L")}</strong> {t("s6Item1V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s6Item2L")}</strong> {t("s6Item2V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s6Item3L")}</strong> {t("s6Item3V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s6Item4L")}</strong> {t("s6Item4V")}</li>
                </ul>
                <p>{t("s6P2")}</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="securite" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s7Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s7P1")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("s7Threat1")}</li>
                  <li>{t("s7Threat2")}</li>
                  <li>{t("s7Threat3")}</li>
                </ul>
                <p><strong className="text-ink dark:text-paper">{t("s7MeasuresL")}</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("s7Measure1")}</li>
                  <li>{t("s7Measure2")}</li>
                  <li>{t("s7Measure3")}</li>
                  <li>{t("s7Measure4")}</li>
                  <li>{t("s7Measure5")}</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section id="droits" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s8Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s8P1")}</p>
                <ul className="space-y-3">
                  <li><strong className="text-ink dark:text-paper">{t("s8Right1L")}</strong> {t("s8Right1V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s8Right2L")}</strong> {t("s8Right2V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s8Right3L")}</strong> {t("s8Right3V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s8Right4L")}</strong> {t("s8Right4V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s8Right5L")}</strong> {t("s8Right5V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s8Right6L")}</strong> {t("s8Right6V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s8Right7L")}</strong> {t("s8Right7V")}</li>
                </ul>
                <p className="mt-6">
                  <strong className="text-ink dark:text-paper">{t("s8ExerciseTitle")}</strong>
                </p>
                <p>
                  {t("s8P2Before")}{" "}
                  <a href="mailto:contact@onex-technology.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    contact@onex-technology.com
                  </a>
                  {" "}{t("s8P2After")}
                </p>
                <p>{t("s8P3")}</p>
                <div className="mt-6 p-4 bg-graphite/5 dark:bg-white/[0.03] border border-smoke/30 dark:border-charcoal">
                  <p className="text-sm">
                    <strong className="text-ink dark:text-paper">{t("s8NewsletterL")}</strong>{" "}
                    {t("s8NewsletterV")}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="cookies" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s9Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s9P1")}</p>
                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">{t("s9s1Title")}</h3>
                <p>{t("s9s1P")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s9s1Item1L")}</strong> {t("s9s1Item1V")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s9s1Item2L")}</strong> {t("s9s1Item2V")}</li>
                </ul>
                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">{t("s9s2Title")}</h3>
                <p>{t("s9s2P")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("s9s2Item1")}</li>
                  <li>{t("s9s2Item2")}</li>
                  <li>{t("s9s2Item3")}</li>
                </ul>
                <p>{t("s9s2P2")}</p>
                <h3 className="font-display text-xl text-ink dark:text-paper mt-6 mb-3">{t("s9s3Title")}</h3>
                <p>{t("s9s3P")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-ink dark:text-paper">{t("s9s3ChromeL")}</strong> {t("s9s3ChromeV")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s9s3FirefoxL")}</strong> {t("s9s3FirefoxV")}</li>
                  <li><strong className="text-ink dark:text-paper">{t("s9s3SafariL")}</strong> {t("s9s3SafariV")}</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section id="modifications" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s10Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s10P1")}</p>
                <p>{t("s10P2")}</p>
                <p>{t("s10P3")}</p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="contact" className="mb-12">
              <h2 className="font-display text-3xl text-ink dark:text-paper mb-6 tracking-tight">
                {t("s11Title")}
              </h2>
              <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
                <p>{t("s11P1")}</p>
                <p>
                  <strong className="text-ink dark:text-paper">{t("s11EmailL")}</strong>{" "}
                  <a href="mailto:contact@onex-technology.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    contact@onex-technology.com
                  </a>
                </p>
                <p>
                  <strong className="text-ink dark:text-paper">{t("s11PhoneL")}</strong>{" "}
                  {t("s11Phone")}
                </p>
                <p className="mt-6">{t("s11P2")}</p>
              </div>
            </section>
          </div>

          {/* Back to top */}
          <div className="mt-12 pt-8 border-t border-smoke/30 dark:border-charcoal text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-accent/80 transition-all duration-300"
            >
              {tc("backHome")}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

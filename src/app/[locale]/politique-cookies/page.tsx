import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Cookie, Shield, FileText } from "lucide-react";
import { CookieSettingsButton } from "@/components/cookie-settings-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "politiqueCookies" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: "https://onex-technology.com/politique-cookies" },
  };
}

export default async function PolitiqueCookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("politiqueCookies");

  return (
    <div className="min-h-screen bg-paper dark:bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-accent/10 text-accent text-sm font-medium mb-6">
            <Cookie className="h-4 w-4" />
            {t("badge")}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink dark:text-paper mb-6">
            {t("pageTitle")}
          </h1>
          <p className="text-lg text-graphite dark:text-smoke leading-relaxed">
            {t("lastUpdated")}
          </p>
          <p className="text-lg text-graphite dark:text-smoke leading-relaxed mt-2">
            {t("intro")}
          </p>
        </div>

        {/* Summary */}
        <div className="bg-white dark:bg-[#1a1c20] rounded p-8 shadow-sm border border-smoke/30 dark:border-charcoal mb-12">
          <h2 className="text-2xl font-bold text-ink dark:text-paper mb-4 flex items-center gap-3">
            <Shield className="h-6 w-6 text-accent" />
            {t("summaryTitle")}
          </h2>
          <ul className="space-y-3 text-graphite dark:text-smoke">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>{t("summary1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>{t("summary2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>{t("summary3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span>{t("summary4")}</span>
            </li>
          </ul>
          <CookieSettingsButton />
        </div>

        {/* Main content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">01</span>
              {t("s1Title")}
            </h2>
            <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
              <p>
                <strong>{t("s1CookieL")}</strong>{" "}
                {t("s1P1")}
              </p>
              <p>
                {t("s1P2Before")}
                <strong>{t("s1FirstParty")}</strong>
                {t("s1P2Mid")}
                <strong>{t("s1ThirdParty")}</strong>
                {t("s1P2After")}
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">02</span>
              {t("s2Title")}
            </h2>

            {/* Essential */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal mb-6">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-green-600" />
                {t("s2EssTitle")}
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">{t("s2EssP")}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-paper/50 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colName")}</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colPurpose")}</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colDuration")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10 dark:divide-charcoal">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">onex-cookie-consent</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ess1Purpose")}</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ess1Duration")}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">onex-theme</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ess2Purpose")}</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ess2Duration")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Functional */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal mb-6">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-blue-600" />
                {t("s2FuncTitle")}
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">{t("s2FuncP")}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-paper/50 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colName")}</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colPurpose")}</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colDuration")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10 dark:divide-charcoal">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">Google Fonts</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("func1Purpose")}</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("func1Duration")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Statistical */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal mb-6">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-purple-600" />
                {t("s2StatTitle")}
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">{t("s2StatP")}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-paper/50 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colName")}</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colPurpose")}</th>
                      <th className="px-4 py-3 text-left font-semibold text-ink dark:text-paper">{t("colDuration")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10 dark:divide-charcoal">
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">_ga</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ga1Purpose")}</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ga1Duration")}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">_gid</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ga2Purpose")}</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ga2Duration")}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-ink dark:text-paper">_gat</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ga3Purpose")}</td>
                      <td className="px-4 py-3 text-graphite dark:text-smoke">{t("ga3Duration")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing */}
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal">
              <h3 className="text-xl font-bold text-ink dark:text-paper mb-3 flex items-center gap-2">
                <Cookie className="h-5 w-5 text-orange-600" />
                {t("s2MktTitle")}
              </h3>
              <p className="text-graphite dark:text-smoke mb-4">{t("s2MktP")}</p>
              <div className="bg-accent/10 rounded-sm p-4 text-sm text-ink dark:text-paper">
                <strong>{t("s2MktNoteL")}</strong> {t("s2MktNoteV")}
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">03</span>
              {t("s3Title")}
            </h2>
            <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
              <p>{t("s3P1")}</p>
              <CookieSettingsButton variant="large" />
              <p className="mt-6">{t("s3P2")}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Chrome :</strong>{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {t("s3ManageCookies")}
                  </a>
                </li>
                <li>
                  <strong>Firefox :</strong>{" "}
                  <a
                    href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {t("s3ManageCookies")}
                  </a>
                </li>
                <li>
                  <strong>Safari :</strong>{" "}
                  <a
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {t("s3ManageCookies")}
                  </a>
                </li>
                <li>
                  <strong>Edge :</strong>{" "}
                  <a
                    href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {t("s3ManageCookies")}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">04</span>
              {t("s4Title")}
            </h2>
            <div className="bg-white dark:bg-[#1a1c20] rounded-xl p-6 shadow-sm border border-smoke/30 dark:border-charcoal">
              <p className="text-graphite dark:text-smoke leading-relaxed mb-4">
                {t("s4P1Before")}{" "}
                <strong>{t("s4P1Rgpd")}</strong>{" "}
                {t("s4P1Mid")}{" "}
                <strong>{t("s4P1Eprivacy")}</strong>
                {t("s4P1After")}
              </p>
              <ul className="space-y-3 text-graphite dark:text-smoke">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>{t("s4Right1L")}</strong> {t("s4Right1V")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>{t("s4Right2L")}</strong> {t("s4Right2V")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>{t("s4Right3L")}</strong> {t("s4Right3V")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>{t("s4Right4L")}</strong> {t("s4Right4V")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong>{t("s4Right5L")}</strong> {t("s4Right5V")}</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-accent/10 rounded-sm">
                <p className="text-ink dark:text-paper font-medium mb-2">{t("s4ContactTitle")}</p>
                <p className="text-graphite dark:text-smoke">
                  {t("s4EmailL")}{" "}
                  <a
                    href="mailto:contact@onex-technology.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    contact@onex-technology.com
                  </a>
                </p>
                <p className="text-graphite dark:text-smoke text-sm mt-2">
                  {t("s4Delay")}
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-display text-3xl font-bold text-ink dark:text-paper mb-6 flex items-center gap-3">
              <span className="text-accent">05</span>
              {t("s5Title")}
            </h2>
            <div className="text-graphite dark:text-smoke leading-relaxed space-y-4">
              <p>{t("s5P1")}</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.cnil.fr/fr/cookies-et-autres-traceurs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    {t("s5Link1")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    {t("s5Link2")}
                  </a>
                </li>
                <li>
                  <Link
                    href="/politique-de-confidentialite"
                    className="text-accent hover:underline inline-flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    {t("s5Link3")}
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-accent/10 rounded p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-ink dark:text-paper mb-4">{t("ctaTitle")}</h3>
            <p className="text-graphite dark:text-smoke mb-6">{t("ctaP")}</p>
            <a
              href="mailto:contact@onex-technology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-accent hover:bg-accent/90 text-ink font-medium transition-all duration-200"
            >
              {t("ctaButton")}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

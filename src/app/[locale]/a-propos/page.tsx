import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { AProposContent } from "./_content";

const BASE_URL = "https://onex-technology.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "aPropos" });

  return {
    title: t("heroTitle"),
    description: t("heroDesc"),
    openGraph: {
      title: t("heroTitle"),
      description: t("heroDesc"),
      url: locale === "fr" ? `${BASE_URL}/a-propos` : `${BASE_URL}/${locale}/a-propos`,
    },
    alternates: {
      canonical: locale === "fr" ? `${BASE_URL}/a-propos` : `${BASE_URL}/${locale}/a-propos`,
    },
  };
}

export default function AProposPage() {
  return <AProposContent />;
}

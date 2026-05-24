import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { ServicesContent } from "./_content";

const BASE_URL = "https://onex-technology.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("title"),
    description: t("desc"),
    openGraph: {
      title: t("title"),
      description: t("desc"),
      url: locale === "fr" ? `${BASE_URL}/services` : `${BASE_URL}/${locale}/services`,
    },
    alternates: {
      canonical: locale === "fr" ? `${BASE_URL}/services` : `${BASE_URL}/${locale}/services`,
    },
  };
}

export default function ServicesPage() {
  return <ServicesContent />;
}

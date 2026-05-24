import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { ContactPageContent } from "./_content";

const BASE_URL = "https://onex-technology.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contactPage" });
  const tn = await getTranslations({ locale, namespace: "navbar" });

  return {
    title: tn("contact"),
    description: t("subtitle"),
    alternates: {
      canonical: locale === "fr" ? `${BASE_URL}/contact` : `${BASE_URL}/${locale}/contact`,
    },
  };
}

export default function ContactPage() {
  return <ContactPageContent />;
}

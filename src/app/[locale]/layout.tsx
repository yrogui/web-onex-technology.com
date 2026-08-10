import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/600.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "@fontsource/tajawal/300.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { SchemaOrg } from "@/components/seo/schema-org";
import { CookieConsent } from "@/components/cookie-consent";
import { ChatWidgetLoader } from "@/components/chat/ChatWidgetLoader";
import { ScrollToHash } from "@/components/layout/scroll-to-hash";

const BASE_URL = "https://onex-technology.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDefault = locale === "fr";
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("title"),
      template: `%s | One—X Technology`,
    },
    verification: {
      google: "Jf2GBTTeHKDGWJa-G_wu0Q88SvxzTAHZ9uueii96ZjA",
    },
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    authors: [{ name: "One-X Technology", url: BASE_URL }],
    creator: "One-X Technology",
    publisher: "One-X Technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: isDefault ? "/" : `/${locale}`,
      languages: {
        fr: "/",
        en: "/en",
        ar: "/ar",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_MA" : locale === "en" ? "en_US" : "fr_FR",
      url: isDefault ? BASE_URL : `${BASE_URL}/${locale}`,
      siteName: "One-X Technology",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/images/og-image.png"],
    },
    category: "technology",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  const isAr = locale === "ar";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className="scroll-smooth">
      {isAr && (
        <>
          <link rel="preload" as="font" type="font/woff2"
            href="/_next/static/media/tajawal-arabic-400-normal.912112bd.woff2"
            crossOrigin="anonymous" />
          <link rel="preload" as="font" type="font/woff2"
            href="/_next/static/media/tajawal-arabic-700-normal.1703e830.woff2"
            crossOrigin="anonymous" />
        </>
      )}
      <body className={`${locale === "ar" ? "font-arabic" : "font-sans"} antialiased`}>
        <SchemaOrg />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="onex-theme"
        >
          <NextIntlClientProvider>
            <SmoothScroll>
              <div className="flex flex-col min-h-screen bg-paper dark:bg-primary text-ink dark:text-paper transition-colors duration-700">
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
                >
                  {isAr ? "تخطَّ إلى المحتوى" : locale === "en" ? "Skip to content" : "Aller au contenu"}
                </a>
                <Navbar />
                <main id="main-content" className="flex-grow pb-24 sm:pb-0">{children}</main>
                <Footer />
                <CookieConsent />
                <ChatWidgetLoader />
                <ScrollToHash />
              </div>
            </SmoothScroll>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

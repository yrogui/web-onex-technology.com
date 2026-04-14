import type { Metadata } from "next";
import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/600.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { SchemaOrg } from "@/components/seo/schema-org";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  metadataBase: new URL("https://onex-technology.com"),
  title: {
    default: "Migration CCaaS Maroc | Genesys, AWS Connect, Avaya",
    template: "%s | ONEX Technology",
  },

  verification: {
  google: 'Jf2GBTTeHKDGWJa-G_wu0Q88SvxzTAHZ9uueii96ZjA',
  },
  
  description:
    "Spécialistes migration CCaaS au Maroc : Genesys Cloud, AWS Connect, Avaya. Zéro downtime, ROI 8 mois garanti. 15 centres migrés. Audit gratuit 30 min.",
  keywords: [
    "migration ccaas maroc",
    "genesys cloud maroc",
    "centre de contact cloud maroc",
    "aws connect maroc",
    "migration centre d'appels casablanca",
    "expert ccaas maroc",
    "optimisation expérience client maroc",
    "migration genesys cloud",
    "consultant centre de contact maroc",
    "plateforme ccaas sans downtime",
    "avaya cloud maroc",
    "architecte ccaas maroc",
    "migration telephonie cloud maroc",
    "integration crm genesys maroc",
  ],
  authors: [{ name: "ONEX Technology", url: "https://onex-technology.com" }],
  creator: "ONEX Technology",
  publisher: "ONEX Technology",
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
    canonical: "https://onex-technology.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://onex-technology.com",
    siteName: "ONEX Technology",
    title: "Migration CCaaS Maroc | Genesys Cloud, AWS Connect, Avaya",
    description:
      "Spécialistes migration CCaaS au Maroc : Genesys Cloud, AWS Connect, Avaya. Zéro downtime, ROI 8 mois garanti. 15 centres migrés. Audit gratuit 30 min.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ONEX Technology - Migration CCaaS Maroc : Genesys Cloud, AWS Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Migration CCaaS Maroc | Genesys, AWS Connect, Avaya",
    description:
      "Spécialistes migration CCaaS au Maroc : Genesys Cloud, AWS Connect, Avaya. Zéro downtime, ROI 8 mois garanti. 15 centres migrés.",
    images: ["/images/og-image.jpg"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased">
        <SchemaOrg />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="onex-theme"
        >
          <SmoothScroll>
            <div className="flex flex-col min-h-screen bg-paper dark:bg-primary text-ink dark:text-paper transition-colors duration-700">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <CookieConsent />
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

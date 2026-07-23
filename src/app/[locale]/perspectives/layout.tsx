import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perspectives — Analyses sur le CX et le CCaaS au Maroc",
  description:
    "Analyses de fond, prises de position et retours terrain sur les programmes CCaaS, l'expérience client et l'IA conversationnelle pour les grands comptes marocains.",
  alternates: {
    canonical: "https://onex-technology.com/perspectives",
    languages: {
      fr: "https://onex-technology.com/perspectives",
      en: "https://onex-technology.com/en/perspectives",
      ar: "https://onex-technology.com/ar/perspectives",
      "x-default": "https://onex-technology.com/perspectives",
    },
  },
  openGraph: {
    title: "Perspectives | One-X Technology",
    description:
      "Analyses de fond sur les programmes CX critiques et les migrations CCaaS au Maroc.",
    url: "https://onex-technology.com/perspectives",
    type: "website",
  },
};

export default function PerspectivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

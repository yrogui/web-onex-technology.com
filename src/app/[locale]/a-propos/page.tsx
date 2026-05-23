import type { Metadata } from "next";
import { AProposContent } from "./_content";

export const metadata: Metadata = {
  title: "À propos — Le partenaire CCaaS & CX du Maroc",
  description:
    "L'histoire de One-X Technology, cabinet spécialisé CCaaS & CX basé à Casablanca. Yassine Rogui, Practice Leader & partenaire technique. Partenaire officiel ExpertiaX.",
  openGraph: {
    title: "À propos | One-X Technology",
    description:
      "Cabinet CCaaS & CX au Maroc. Yassine Rogui. Partenaire ExpertiaX.",
    url: "https://onex-technology.com/a-propos",
  },
  alternates: { canonical: "https://onex-technology.com/a-propos" },
};

export default function AProposPage() {
  return <AProposContent />;
}

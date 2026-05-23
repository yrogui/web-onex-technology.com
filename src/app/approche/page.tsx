import type { Metadata } from "next";
import { ApprocheContent } from "./_content";

export const metadata: Metadata = {
  title: "Notre approche — Méthode de migration CCaaS en 4 phases",
  description:
    "De l'audit au go-live sécurisé en 8 à 12 semaines. Méthodologie One-X Technology : 4 phases, jalons clairs, zéro improvisation. Partenaire officiel ExpertiaX.",
  openGraph: {
    title: "Notre approche | One-X Technology",
    description:
      "Méthode migration CCaaS en 4 phases. Audit, architecture, déploiement progressif, optimisation. Zéro downtime garanti.",
    url: "https://onex-technology.com/approche",
  },
  alternates: { canonical: "https://onex-technology.com/approche" },
};

export default function ApprochePage() {
  return <ApprocheContent />;
}

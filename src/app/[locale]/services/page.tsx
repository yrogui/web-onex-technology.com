import type { Metadata } from "next";
import { ServicesContent } from "./_content";

export const metadata: Metadata = {
  title: "Services CCaaS & CX — Migration Genesys, AWS Connect, Avaya",
  description:
    "Migration CCaaS sans interruption, optimisation CX, automatisation IA et architecture cloud. Cabinet spécialisé au Maroc. Partenaire officiel ExpertiaX.",
  openGraph: {
    title: "Services CCaaS & CX | One-X Technology",
    description:
      "Migration CCaaS sans interruption, optimisation CX, automatisation IA et architecture cloud au Maroc.",
    url: "https://onex-technology.com/services",
  },
  alternates: { canonical: "https://onex-technology.com/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}

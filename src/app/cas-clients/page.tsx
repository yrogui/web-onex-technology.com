import type { Metadata } from "next";
import { CasClientsContent } from "./_content";

export const metadata: Metadata = {
  title: "Trajectoires éprouvées — Études de cas CCaaS & CX",
  description:
    "Banque, assurance, télécom : trois transformations CCaaS et CX réussies au Maroc. Chiffres réels, méthodes documentées.",
  openGraph: {
    title: "Études de cas CCaaS & CX | One-X Technology",
    description:
      "Banque, assurance, télécom : trois transformations réussies au Maroc.",
    url: "https://onex-technology.com/cas-clients",
  },
  alternates: { canonical: "https://onex-technology.com/cas-clients" },
};

export default function CasClientsPage() {
  return <CasClientsContent />;
}

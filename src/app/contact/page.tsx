import type { Metadata } from "next";
import { ContactPageContent } from "./_content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez One-X Technology pour votre projet CCaaS ou CX au Maroc. Premier échange 30 min avec un architecte senior. Sans engagement.",
  alternates: {
    canonical: "https://onex-technology.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}

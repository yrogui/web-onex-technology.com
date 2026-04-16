"use client";

import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { WhyOnex } from "@/components/sections/why-onex";
import { Testimonials } from "@/components/sections/testimonials";
import { Expertise } from "@/components/sections/expertise";
import { Team } from "@/components/sections/team";
import { Approach } from "@/components/sections/approach";
import { Offers } from "@/components/sections/offers";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero avec statistiques */}
      <Hero />

      {/* Partenaires Technologiques */}
      <Partners />

      {/* Pourquoi One-X */}
      <WhyOnex />

      {/* Témoignages Clients (Social Proof) */}
      <Testimonials />

      {/* Nos Expertises */}
      <Expertise />

      {/* Notre Approche */}
      <Approach />

      {/* Notre Équipe */}
      <Team />

      {/* Offres Packagées */}
      <Offers />

      {/* FAQ (SEO + Conversion) */}
      <FAQ />

      {/* Contact */}
      <Contact />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

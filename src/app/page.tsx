"use client";

import { Hero } from "@/components/sections/hero";
import { KPIs } from "@/components/sections/kpis";
import { Partners } from "@/components/sections/partners";
import { Manifesto } from "@/components/sections/manifesto";
import { WhyOnex } from "@/components/sections/why-onex";
import { TroisMissions } from "@/components/sections/trois-missions";
import { Testimonials } from "@/components/sections/testimonials";
import { CaseStudies } from "@/components/sections/case-studies";
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
      {/* Hero */}
      <Hero />

      {/* KPIs — bande Crème Pierre */}
      <KPIs />

      {/* Manifeste — Noir Encre */}
      <Manifesto />

      {/* Alliances technologiques — Crème Pierre */}
      <Partners />

      {/* Pourquoi One-X — Noir Encre */}
      <WhyOnex />

      {/* Trois missions — Crème Pierre */}
      <TroisMissions />

      {/* Témoignages Clients (Social Proof) */}
      <Testimonials />

      {/* Trajectoires éprouvées — Cas clients */}
      <CaseStudies />

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

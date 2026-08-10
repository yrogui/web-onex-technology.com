import { Hero } from "@/components/sections/hero";
import { SectorMarquee } from "@/components/sections/sector-marquee";
import { ExpertisesHome } from "@/components/sections/expertises-home";
import { CasClientsHome } from "@/components/sections/cas-clients-home";
import { Manifesto } from "@/components/sections/manifesto";
import { Offers } from "@/components/sections/offers";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1 — Hero (titre + sous-titre + 2 CTA + 4 KPIs + badge ExpertiaX) */}
      <Hero />

      {/* 2 — Marquee secteurs */}
      <SectorMarquee />

      {/* 3 — Expertises (1 carte large CCaaS + 4 compactes) */}
      <ExpertisesHome />

      {/* 4 — Cas clients (1 grand bancaire + 2 compacts) */}
      <CasClientsHome />

      {/* 5 — Manifeste (citation centrée + signature + WhyOnex) */}
      <Manifesto />

      {/* 6 — Offres & démarrer */}
      <Offers />

      {/* 7 — Lead magnet unique (checklist 25 points) */}
      <Newsletter />
    </div>
  );
}

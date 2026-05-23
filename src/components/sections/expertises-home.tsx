"use client";

import { motion } from "framer-motion";
import { wording } from "@/data/wording";

// 4 compact cards: indices 0-3 de wording.expertise.items
// Large card (CCaaS) = positionnement global + tags partenaires
const compactItems = [
  { idx: 0, href: "/services#migration" },
  { idx: 1, href: "/services#cx" },
  { idx: 2, href: "/services#automatisation" },
  { idx: 3, href: "/services#cloud" },
];

// 1 phrase extraite de chaque description existante
const oneLiners: Record<string, string> = {
  "ccaas-migration":
    "Nous migrons vers le cloud en 8 à 12 semaines, sans couper une seule ligne.",
  "cx-optimization":
    "Nous diagnostiquons les points de friction, refondons les parcours, mesurons l'impact.",
  "ai-conversational":
    "Nous déployons des voicebots/chatbots intelligents qui traitent le simple, libèrent les agents pour le complexe.",
  "cloud-infrastructure":
    "Nous concevons l'architecture complète : réseau, sécurité, résilience, disaster recovery.",
};

export function ExpertisesHome() {
  const { expertise, partners, header } = wording;

  return (
    <section id="expertises" className="py-16 md:py-24 bg-primary" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            {expertise.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-paper">
            Quatre expertises, une seule{" "}
            <em className="italic font-display">obsession</em>.
          </h2>
        </motion.div>

        {/* Carte large CCaaS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 bg-charcoal/30 border border-charcoal rounded p-10 md:p-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            {partners.subtitle}
          </p>
          <h3 className="font-display font-medium text-3xl md:text-4xl text-paper mb-4 tracking-[-0.015em]">
            {header.tagline}
          </h3>
          <p className="text-smoke leading-[1.65] text-[15px] max-w-2xl mb-8">
            {expertise.description}
          </p>

          {/* Tags partenaires — absorbe la section Partners */}
          <div className="flex flex-wrap gap-3 mb-8">
            {partners.items.map((p) => (
              <span
                key={p.name}
                className="px-4 py-2 bg-primary border border-charcoal rounded-sm text-sm font-medium text-smoke"
              >
                {p.name} · {p.certifications[0]}
              </span>
            ))}
          </div>

          <a
            href="/services"
            className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            Voir nos services →
          </a>
        </motion.div>

        {/* 4 cartes compactes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {compactItems.map(({ idx, href }, i) => {
            const item = expertise.items[idx];
            const phrase = oneLiners[item.id] ?? "";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col p-6 bg-charcoal/30 border border-charcoal rounded hover:border-accent/40 transition-all duration-300"
              >
                <h3 className="font-display font-medium text-xl text-paper mb-3 tracking-[-0.01em] flex-grow-0">
                  {item.title}
                </h3>
                <p className="text-smoke text-sm leading-[1.65] flex-grow mb-6">
                  {phrase}
                </p>
                <a
                  href={href}
                  className="text-sm font-medium text-accent hover:text-accent-light transition-colors mt-auto"
                >
                  Détail →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

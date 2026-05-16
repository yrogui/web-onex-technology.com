"use client";

import { motion } from "framer-motion";
import { wording } from "@/data/wording";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";

export function Team() {
  return (
    <section id="equipe" className="py-16 md:py-24 bg-primary" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
            {wording.team.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-paper mb-6">
            {wording.team.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-smoke max-w-3xl mb-8">
            {wording.team.description}
          </p>
          <p className="text-base text-smoke max-w-3xl italic border-l-4 border-accent pl-6 leading-[1.65]">
            {wording.team.philosophy}
          </p>
        </motion.div>

        {/* Profil fondateur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start gap-12 mb-20 p-12 bg-charcoal/30 border border-charcoal rounded"
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <img src="/images/team/yassine-rogui.jpg" alt="Yassine Rogui — Practice Leader One-X Technology" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Infos */}
          <div>
            <h3 className="font-display font-medium text-4xl text-paper mb-2 tracking-[-0.015em]">
              Yassine Rogui
            </h3>
            <p className="font-sans italic text-smoke text-lg mb-3">
              Practice Leader & Partenaire technique — One-X Technology
            </p>
            <div className="mb-4">
              <BadgePartenaire variant="dark" />
            </div>
            <p className="text-[15px] leading-[1.65] text-smoke max-w-2xl">
              18 ans d'expérience CX & Cloud, 400+ projets menés sur les plateformes Genesys, AWS Connect et Avaya. Architecte senior certifié, il pilote personnellement chaque migration critique pour garantir zéro downtime et un ROI mesurable en moins de 12 mois.
            </p>
          </div>
        </motion.div>

        {/* Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {wording.team.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 border border-charcoal hover:border-accent/40 transition-all duration-300 rounded bg-charcoal/30"
            >
              <h3 className="font-display font-medium text-xl text-paper mb-4 tracking-[-0.01em]">
                {value.title}
              </h3>
              <p className="text-smoke leading-[1.65] text-[15px]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Réseau */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal/30 p-12 border border-charcoal rounded"
        >
          <p className="text-smoke text-[15px] leading-[1.65]">
            {wording.team.network}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

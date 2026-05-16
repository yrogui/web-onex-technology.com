"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Partners() {
  const partners = [
    { name: "Genesys", description: "Cloud CX Leader", logo: "genesys" },
    { name: "AWS", description: "Cloud Computing", logo: "aws" },
    { name: "Avaya", description: "Cloud & On-Prem", logo: "avaya" },
  ];

  return (
    <section className="py-16 md:py-24 bg-paper border-y border-smoke/30" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Award className="h-4 w-4 text-accent text-accent" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite text-charcoal">
              Nos alliances technologiques
            </p>
          </div>
          <p className="text-sm text-charcoal text-charcoal max-w-2xl mx-auto">
            Partenaires certifiés des leaders mondiaux de la transformation digitale
          </p>
        </motion.div>

        {/* Grille de logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col items-center justify-center p-8 md:p-10 border border-smoke rounded-md bg-paper hover:border-accent/30 transition-all duration-500 min-h-[160px]">
                <h3 className="font-display font-medium italic text-3xl md:text-4xl text-primary text-center mb-3">
                  {partner.name}
                </h3>
                <p className="text-xs text-graphite text-center">
                  {partner.description}
                </p>

                {/* Badge certifié */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 px-2 py-1 bg-accent/10 rounded-sm">
                    <Award className="h-3 w-3 text-accent text-accent" />
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-accent text-accent">
                      Certifié
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-xs text-graphite text-charcoal italic">
            Certifications officielles • Formations continues • Accès aux programmes partenaires
          </p>
        </motion.div>
      </div>
    </section>
  );
}

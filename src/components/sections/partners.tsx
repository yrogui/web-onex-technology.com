"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Partners() {
  const partners = [
    { name: "Genesys", description: "Cloud CX Leader", logo: "genesys" },
    { name: "AWS", description: "Cloud Computing", logo: "aws" },
    { name: "Microsoft", description: "Azure & Solutions", logo: "microsoft" },
  ];

  return (
    <section className="py-20 bg-paper dark:bg-primary border-y border-smoke/30 dark:border-charcoal" suppressHydrationWarning>
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
            <Award className="h-4 w-4 text-accent dark:text-accent-light" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke">
              Nos alliances technologiques
            </p>
          </div>
          <p className="text-sm text-charcoal dark:text-smoke max-w-2xl mx-auto">
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
              <div className="flex flex-col items-center justify-center p-8 border border-smoke/30 dark:border-charcoal hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500 min-h-[160px] rounded bg-paper dark:bg-charcoal/50">
                <div className="relative w-full h-20 flex items-center justify-center mb-4">
                  <div className="text-4xl font-bold opacity-50 group-hover:opacity-100 transition-all duration-500">
                    {partner.logo === "genesys" && (
                      <div className="flex items-center justify-center">
                        <div className="w-32 h-16 bg-ink dark:bg-paper rounded flex items-center justify-center text-paper dark:text-ink text-xl font-bold">
                          GENESYS
                        </div>
                      </div>
                    )}
                    {partner.logo === "aws" && (
                      <div className="flex items-center justify-center">
                        <div className="w-32 h-16 bg-ink dark:bg-paper rounded flex items-center justify-center text-paper dark:text-ink text-2xl font-bold">
                          AWS
                        </div>
                      </div>
                    )}
                    {partner.logo === "microsoft" && (
                      <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-1 w-16 h-16">
                          <div className="bg-ink dark:bg-paper rounded-sm"></div>
                          <div className="bg-ink dark:bg-paper rounded-sm"></div>
                          <div className="bg-ink dark:bg-paper rounded-sm"></div>
                          <div className="bg-ink dark:bg-paper rounded-sm"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-medium text-ink dark:text-paper mb-1 text-center">
                  {partner.name}
                </h3>
                <p className="text-xs text-graphite dark:text-smoke text-center">
                  {partner.description}
                </p>

                {/* Badge certifié */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 px-2 py-1 bg-accent/10 rounded-sm">
                    <Award className="h-3 w-3 text-accent dark:text-accent-light" />
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
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
          <p className="text-xs text-graphite dark:text-smoke italic">
            Certifications officielles • Formations continues • Accès aux programmes partenaires
          </p>
        </motion.div>
      </div>
    </section>
  );
}

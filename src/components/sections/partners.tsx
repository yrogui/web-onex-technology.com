"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Partners() {
  const partners = [
    {
      name: "Genesys",
      description: "Cloud CX Leader",
      logo: "genesys",
    },
    {
      name: "AWS",
      description: "Cloud Computing",
      logo: "aws",
    },
    {
      name: "Microsoft",
      description: "Azure & Solutions",
      logo: "microsoft",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#11141a] border-y border-brand-noir/10 dark:border-white/[0.05]" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header discret */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Award className="h-4 w-4 text-brand-gold" />
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-slate dark:text-[#94a3b8]">
              Nos alliances technologiques
            </p>
          </div>
          <p className="text-sm text-brand-slate dark:text-[#94a3b8] max-w-2xl mx-auto">
            Partenaires certifiés des leaders mondiaux de la transformation digitale
          </p>
        </div>

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
              <div className="flex flex-col items-center justify-center p-8 border border-brand-noir/10 dark:border-white/[0.05] hover:border-brand-gold/30 dark:hover:border-brand-gold/30 transition-all duration-500 min-h-[160px] card-glow">
                {/* Logo en blanc avec opacité 50% par défaut */}
                <div className="relative w-full h-20 flex items-center justify-center mb-4">
                  <div className="text-4xl font-bold opacity-50 group-hover:opacity-100 transition-all duration-500">
                    {partner.logo === "genesys" && (
                      <div className="flex items-center justify-center">
                        <div className="w-32 h-16 bg-white dark:bg-white rounded-lg flex items-center justify-center text-[#11141a] text-xl font-bold">
                          GENESYS
                        </div>
                      </div>
                    )}
                    {partner.logo === "aws" && (
                      <div className="flex items-center justify-center">
                        <div className="w-32 h-16 bg-white dark:bg-white rounded-lg flex items-center justify-center text-[#11141a] text-2xl font-bold">
                          AWS
                        </div>
                      </div>
                    )}
                    {partner.logo === "microsoft" && (
                      <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-1 w-16 h-16">
                          <div className="bg-white dark:bg-white rounded-sm"></div>
                          <div className="bg-white dark:bg-white rounded-sm"></div>
                          <div className="bg-white dark:bg-white rounded-sm"></div>
                          <div className="bg-white dark:bg-white rounded-sm"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Nom et description */}
                <h3 className="text-lg font-semibold text-brand-noir dark:text-white mb-1 text-center">
                  {partner.name}
                </h3>
                <p className="text-xs text-brand-slate dark:text-[#94a3b8] text-center">
                  {partner.description}
                </p>

                {/* Badge certifié */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 px-2 py-1 bg-brand-gold/10 rounded-full">
                    <Award className="h-3 w-3 text-brand-gold" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-brand-gold">
                      Certifié
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message de confiance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-xs text-brand-slate dark:text-[#94a3b8] italic">
            Certifications officielles • Formations continues • Accès aux programmes partenaires
          </p>
        </motion.div>
      </div>
    </section>
  );
}

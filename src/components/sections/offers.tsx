"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { wording } from "@/data/wording";

export function Offers() {
  return (
    <section
      id="offres"
      className="py-32 bg-white dark:bg-[#11141a]"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {wording.offers.subtitle}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-noir dark:text-white mb-6 tracking-tight">
            {wording.offers.title}
          </h2>
          <p className="text-lg text-brand-slate dark:text-[#94a3b8] max-w-3xl mx-auto">
            {wording.offers.description}
          </p>
        </div>

        {/* Grille d'offres */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {wording.offers.items.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-brand-cream dark:bg-[#0a0c10] p-10 border-2 ${
                offer.recommended
                  ? "border-brand-gold dark:border-brand-gold"
                  : "border-brand-noir/10 dark:border-white/[0.05]"
              } hover:border-brand-gold/50 dark:hover:border-brand-gold/50 transition-all duration-300 card-glow`}
            >
              {/* Badge */}
              <div
                className={`inline-block px-4 py-1 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] ${
                  offer.recommended
                    ? "bg-brand-gold text-brand-noir"
                    : "bg-brand-noir/5 dark:bg-white/[0.05] text-brand-gold"
                }`}
              >
                {offer.badge}
              </div>

              {/* Titre */}
              <h3 className="font-serif text-2xl text-brand-noir dark:text-white mb-4">
                {offer.title}
              </h3>

              {/* Prix */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-brand-noir dark:text-white mb-2">
                  {offer.price}
                </div>
                <p className="text-sm text-brand-slate dark:text-[#94a3b8]">
                  {offer.priceDetail}
                </p>
              </div>

              {/* Durée */}
              <div className="mb-8 pb-8 border-b border-brand-noir/10 dark:border-white/[0.05]">
                <p className="text-sm font-medium text-brand-noir dark:text-white">
                  ⏱️ {offer.duration}
                </p>
              </div>

              {/* Pour qui */}
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
                  POUR QUI ?
                </p>
                <p className="text-sm text-brand-slate dark:text-[#94a3b8] leading-relaxed">
                  {offer.forWho}
                </p>
              </div>

              {/* Ce qui est inclus */}
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
                  CE QUI EST INCLUS
                </p>
                <ul className="space-y-3">
                  {offer.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-brand-slate dark:text-[#94a3b8] flex items-start gap-3"
                    >
                      <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Livrables */}
              <div className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
                  LIVRABLES
                </p>
                <ul className="space-y-3">
                  {offer.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-medium text-brand-noir dark:text-white flex items-start gap-3"
                    >
                      <ArrowRight className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={offer.ctaHref}
                className={`block w-full px-10 py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg transition-all duration-300 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black ${
                  offer.recommended
                    ? "bg-brand-gold text-white dark:text-white"
                    : "bg-brand-noir text-white dark:bg-brand-cream dark:text-brand-noir"
                }`}
              >
                {offer.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center p-8 bg-brand-gold/10 border border-brand-gold/20"
        >
          <p className="text-sm text-brand-noir dark:text-white font-medium leading-relaxed">
            {wording.offers.guarantee}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

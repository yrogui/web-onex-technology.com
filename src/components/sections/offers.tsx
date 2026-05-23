"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Clock } from "lucide-react";
import { wording } from "@/data/wording";

export function Offers() {
  return (
    <section
      id="offres"
      className="py-16 md:py-24 bg-mist dark:bg-charcoal/30"
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
            {wording.offers.subtitle}
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6">
            {wording.offers.title}
          </h2>
          <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke max-w-3xl mx-auto">
            {wording.offers.description}
          </p>
        </motion.div>

        {/* Grille d'offres */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {wording.offers.items.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-paper dark:bg-charcoal/50 p-10 border-2 rounded shadow-none ${
                offer.recommended
                  ? "border-accent dark:border-accent-light"
                  : "border-smoke/30 dark:border-charcoal"
              } hover:border-accent/50 dark:hover:border-accent-light/50 transition-all duration-300`}
            >
              {/* Badge */}
              <div
                className={`inline-block px-4 py-1 mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-sm ${
                  offer.recommended
                    ? "bg-accent text-paper"
                    : "bg-ink/5 dark:bg-paper/5 text-accent dark:text-accent-light"
                }`}
              >
                {offer.badge}
              </div>

              {/* Titre */}
              <h3 className="font-display font-medium text-2xl text-ink dark:text-paper mb-4 tracking-[-0.01em]">
                {offer.title}
              </h3>

              {/* Prix */}
              <div className="mb-6">
                <div className="font-display text-4xl font-medium text-ink dark:text-paper mb-2">
                  {offer.price}
                </div>
                {"priceEur" in offer && offer.priceEur && (
                  <p className="text-sm text-graphite mt-1">
                    {(offer as { priceEur: string }).priceEur}
                  </p>
                )}
                <p className="text-sm text-graphite dark:text-smoke">
                  {offer.priceDetail}
                </p>
              </div>

              {/* Durée */}
              <div className="mb-8 pb-8 border-b border-smoke/30 dark:border-charcoal">
                <p className="text-sm font-medium text-ink dark:text-paper flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-graphite dark:text-smoke flex-shrink-0" />
                  {offer.duration}
                </p>
              </div>

              {/* Pour qui */}
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-3">
                  POUR QUI ?
                </p>
                <p className="text-sm text-charcoal dark:text-smoke leading-[1.65]">
                  {offer.forWho}
                </p>
              </div>

              {/* Ce qui est inclus */}
              <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-4">
                  CE QUI EST INCLUS
                </p>
                <ul className="space-y-3">
                  {offer.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-charcoal dark:text-smoke flex items-start gap-3"
                    >
                      <Check className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Livrables */}
              <div className="mb-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-light mb-4">
                  LIVRABLES
                </p>
                <ul className="space-y-3">
                  {offer.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm font-medium text-ink dark:text-paper flex items-start gap-3"
                    >
                      <ArrowRight className="h-4 w-4 text-accent dark:text-accent-light flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={offer.ctaHref}
                {...(offer.ctaHref.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={`block w-full px-8 py-4 text-center text-sm font-medium tracking-wide rounded-sm transition-all duration-300 ${
                  offer.recommended
                    ? "bg-accent text-paper hover:bg-accent/90"
                    : "border border-primary dark:border-paper text-primary dark:text-paper hover:border-accent hover:text-accent dark:hover:border-accent-light dark:hover:text-accent-light"
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
          className="text-center p-8 bg-accent/10 border border-accent/20 rounded"
        >
          <p className="text-sm text-ink dark:text-paper font-medium leading-relaxed">
            {wording.offers.guarantee}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

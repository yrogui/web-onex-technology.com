"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData, faqSchema } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id="faq"
        className="py-16 md:py-24 bg-primary"
        suppressHydrationWarning
      >
        <div className="max-w-[1000px] mx-auto px-8 lg:px-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              QUESTIONS FRÉQUENTES
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl text-paper mb-6 tracking-[-0.015em]">
              Tout ce que vous devez savoir sur la migration CCaaS
            </h2>
            <p className="text-[15px] leading-[1.65] text-smoke">
              Prix, délais, risques : les réponses honnêtes aux 5 questions que
              tous nos clients posent avant de démarrer.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-charcoal/30 border border-charcoal overflow-hidden rounded"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-charcoal/50 transition-colors"
                >
                  <h3 className="font-medium text-lg text-paper pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2 text-smoke leading-[1.65] space-y-4">
                        {faq.answer.split("\n\n").map((paragraph, pIndex) => {
                          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={pIndex} className="text-[15px]">
                              {parts.map((part, i) => {
                                if (part.startsWith("**") && part.endsWith("**")) {
                                  return (
                                    <strong
                                      key={i}
                                      className="font-medium text-paper"
                                    >
                                      {part.slice(2, -2)}
                                    </strong>
                                  );
                                }
                                return <span key={i}>{part}</span>;
                              })}
                            </p>
                          );
                        })}

                        {(faq.category === "prix" || faq.category === "délais") && (
                          <div className="mt-6 pt-4 border-t border-charcoal">
                            <a
                              href="/contact"
                              className="inline-flex items-center text-sm font-medium text-accent hover:opacity-80 transition-opacity"
                            >
                              {faq.category === "prix"
                                ? "→ Demander un devis détaillé"
                                : "→ Réserver un diagnostic gratuit 30 min"}
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA après FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-smoke mb-6">
              Vous avez d'autres questions sur votre projet CCaaS ?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-paper text-primary text-sm font-medium tracking-wide rounded-sm transition-all duration-300 hover:bg-mist"
            >
              Parler à un architecte CCaaS
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

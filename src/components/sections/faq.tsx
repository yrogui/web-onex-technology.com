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
      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id="faq"
        className="py-32 bg-brand-cream dark:bg-[#0a0c10]"
        suppressHydrationWarning
      >
        <div className="max-w-[1000px] mx-auto px-8 lg:px-16">
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
              QUESTIONS FRÉQUENTES
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-noir dark:text-white mb-6 tracking-tight">
              Tout Ce Que Vous Devez Savoir Sur La Migration CCaaS
            </h2>
            <p className="text-lg text-brand-slate dark:text-[#94a3b8]">
              Prix, délais, risques : les réponses honnêtes aux 5 questions que
              tous nos clients posent avant de démarrer.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white dark:bg-[#11141a] border border-brand-noir/10 dark:border-white/[0.05] overflow-hidden"
              >
                {/* Question (Clickable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-gold/5 transition-colors"
                >
                  <h3 className="font-bold text-lg text-brand-noir dark:text-white pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer (Expandable) */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2 text-brand-slate dark:text-[#94a3b8] leading-relaxed space-y-4">
                        {faq.answer.split("\n\n").map((paragraph, pIndex) => {
                          // Handle bold text (**text**)
                          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={pIndex} className="text-sm">
                              {parts.map((part, i) => {
                                if (part.startsWith("**") && part.endsWith("**")) {
                                  return (
                                    <strong
                                      key={i}
                                      className="font-bold text-brand-noir dark:text-white"
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

                        {/* CTA si FAQ prix ou délais */}
                        {(faq.category === "prix" || faq.category === "délais") && (
                          <div className="mt-6 pt-4 border-t border-brand-noir/10 dark:border-white/[0.05]">
                            <a
                              href="#contact"
                              className="inline-flex items-center text-sm font-bold text-brand-gold hover:text-brand-gold/80 transition-colors"
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
            <p className="text-brand-slate dark:text-[#94a3b8] mb-6">
              Vous avez d'autres questions sur votre projet CCaaS ?
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-noir text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
            >
              Parler à un architecte CCaaS
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

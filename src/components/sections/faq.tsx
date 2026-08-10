"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("services");
  const tc = useTranslations("common");
  const tf = useTranslations("faq");

  const faqItems = tf.raw("items") as FAQItem[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\*\*/g, "").replace(/\n/g, " ").trim(),
      },
    })),
  };

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
        className="py-16 md:py-24 bg-paper dark:bg-primary"
        suppressHydrationWarning
      >
        <div className="max-w-[1000px] mx-auto px-8 lg:px-16">
          {/* Header */}
          <Reveal className="mb-16 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
              {t("faqEyebrow")}
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl text-ink dark:text-paper mb-6 tracking-[-0.015em]">
              {t("faqTitle")}
            </h2>
            <p className="text-[15px] leading-[1.65] text-charcoal dark:text-smoke">
              {t("faqDesc")}
            </p>
          </Reveal>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Reveal
                key={faq.id}
                delay={index * 50}
                className="bg-mist dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal overflow-hidden rounded"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${faq.id}`}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-smoke/20 dark:hover:bg-charcoal/50 transition-colors"
                >
                  <h3 className="font-medium text-lg text-ink dark:text-paper pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 text-graphite dark:text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2 text-charcoal dark:text-smoke leading-[1.65] space-y-4">
                        {faq.answer.split("\n\n").map((paragraph, pIndex) => {
                          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={pIndex} className="text-[15px]">
                              {parts.map((part, i) => {
                                if (part.startsWith("**") && part.endsWith("**")) {
                                  return (
                                    <strong
                                      key={i}
                                      className="font-medium text-ink dark:text-paper"
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
                          <div className="mt-6 pt-4 border-t border-smoke/30 dark:border-charcoal">
                            <a
                              href="/contact"
                              className="inline-flex items-center text-sm font-medium text-charcoal dark:text-accent hover:opacity-80 transition-opacity"
                            >
                              {faq.category === "prix"
                                ? t("faqCtaDevis")
                                : t("faqCtaDiagnostic")}
                            </a>
                          </div>
                        )}
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          {/* CTA après FAQ */}
          <Reveal delay={300} className="mt-12 text-center">
            <p className="text-charcoal dark:text-smoke mb-6">
              {t("faqCtaQuestion")}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-paper dark:bg-paper dark:text-primary text-sm font-medium tracking-wide rounded-sm transition-colors duration-300 hover:bg-charcoal dark:hover:bg-mist"
            >
              {tc("parlerArchitecte")}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

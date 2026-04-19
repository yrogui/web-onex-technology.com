"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { wording } from "@/data/wording";

const caseDeployments: Record<string, string> = {
  banque:
    "Nous avons démarré par un audit technique complet de l'infrastructure Avaya existante — cartographie des flux, identification des risques de migration et conception de l'architecture Genesys Cloud cible. La bascule s'est déroulée en vagues de 10% sur dix semaines, avec un dual-running maintenu jusqu'à validation complète de chaque lot. L'intégration Salesforce CRM a été déployée en parallèle, connectant en temps réel la fiche client dans Genesys. Le go-live final s'est effectué un dimanche soir sans aucune interruption visible pour les clients de la banque.",
  assurance:
    "Nous avons conduit un audit CX omnicanal sur six semaines : écoute de 400 appels, analyse des verbatims chats et emails, cartographie de 12 parcours clients distincts. La priorisation s'est basée sur l'impact ROI et la complexité d'implémentation — les quick wins ont été déployés dès la semaine 4 : réécriture du SVI, réduction des transferts internes, scripts agents optimisés. La deuxième phase a intégré un module de rappel automatique et un dashboard superviseurs temps réel, réduisant drastiquement le taux d'abandon.",
  telco:
    "Le projet a débuté par l'identification des 15 motifs d'appels les plus fréquents représentant 65% du volume. Nous avons conçu et déployé un voicebot NLU sur Genesys, capable de traiter les demandes en langage naturel sans arbre de décision rigide. Un module Agent Assist a été intégré dans l'interface agent, affichant en temps réel les suggestions de réponse basées sur la transcription de l'appel. Les agents ont été formés sur deux jours pour adopter la nouvelle dynamique humain/IA.",
};

export function CasClientsContent() {
  const { items } = wording.caseStudies;

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-primary pt-40 pb-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              ÉTUDES DE CAS
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-3xl">
              Trajectoires éprouvées
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl mb-6">
              {wording.caseStudies.description}
            </p>
            <p className="text-sm text-smoke/60 italic">
              Toutes les références sont anonymisées selon nos accords de
              confidentialité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cas clients ── */}
      {items.map((cs, index) => {
        const isDark = index % 2 !== 0;
        const bg = isDark ? "bg-primary" : "bg-paper dark:bg-primary";
        const headingColor = isDark ? "text-paper" : "text-ink dark:text-paper";
        const textColor = isDark ? "text-smoke" : "text-charcoal dark:text-smoke";
        const cardBg = isDark
          ? "bg-charcoal/30 border border-charcoal"
          : "bg-paper dark:bg-charcoal/50 border border-smoke/30 dark:border-charcoal";
        const deployment = caseDeployments[cs.id] ?? "";

        return (
          <section key={cs.id} className={`${bg} py-24`}>
            <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-12"
              >
                <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${isDark ? "text-accent" : "text-graphite dark:text-accent"} mb-4`}>
                  {cs.sector}
                </p>
                <h2
                  className={`font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] ${headingColor} mb-3 max-w-3xl`}
                >
                  {cs.label}
                </h2>
                <p className={`text-[15px] ${textColor}`}>{cs.agents}</p>
              </motion.div>

              {/* Enjeu / Mission / Durée */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: "Enjeu", value: cs.challenge },
                  { label: "Mission", value: cs.mission },
                  { label: "Durée", value: cs.duration },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${cardBg} rounded p-6`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-3">
                      {item.label}
                    </p>
                    <p
                      className={`text-sm leading-[1.6] ${textColor}`}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Déploiement */}
              <div className="mb-12 max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
                  DÉPLOIEMENT
                </p>
                <p className={`text-[15px] leading-[1.7] ${textColor}`}>
                  {deployment}
                </p>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {cs.results.map((r) => (
                  <div key={r.label} className={`${cardBg} rounded p-6`}>
                    <p className="font-display font-medium text-4xl text-accent mb-2">
                      {r.value}
                    </p>
                    <p className={`text-sm ${textColor}`}>{r.label}</p>
                  </div>
                ))}
              </div>

              {/* Citation */}
              <div className={`${cardBg} rounded p-8 max-w-3xl`}>
                <Quote
                  className="h-7 w-7 text-accent mb-5"
                  strokeWidth={1.5}
                />
                <blockquote
                  className={`font-display italic text-lg leading-[1.6] ${headingColor}`}
                >
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA finale ── */}
      <section className="bg-primary py-24">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper mb-6 max-w-2xl mx-auto">
              Votre situation ressemble à l&apos;une de ces trajectoires ?
            </h2>
            <p className="text-[16px] leading-[1.7] text-smoke max-w-xl mx-auto mb-10">
              Nous analysons votre contexte gratuitement en 30 minutes. Vous
              repartez avec une évaluation honnête et des pistes concrètes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@onex-technology.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3.5 bg-paper text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-mist transition-colors duration-300"
              >
                Demander un diagnostic gratuit
              </a>
              <BadgePartenaire variant="dark" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

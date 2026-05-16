"use client";

import { motion } from "framer-motion";

const missions = [
  {
    tag: "CCAAS · MULTI-CANAL",
    title: "Un leader bancaire marocain",
    pitch:
      "Réseau d'agences national, volumétrie élevée, exigence de conformité BAM. Audit d'infrastructure, design omnicanal, intégration core banking.",
    kpis: "NPS +12 pts · TMO −25% · Livré en 8 mois",
  },
  {
    tag: "OMNICANAL · LUXE",
    title: "Un groupe hôtelier cinq étoiles",
    pitch:
      "Chaîne premium multi-destinations (Marrakech, Casablanca, Agadir). Conciergerie digitale, routage VIP, intégration PMS.",
    kpis: "CSAT +18 pts · ROI 11 mois · Rétention +15%",
  },
  {
    tag: "IA · MIGRATION CLOUD",
    title: "Un opérateur télécom national",
    pitch:
      "Centre gérant plusieurs millions d'interactions/an. Bot vocal darija/français, automatisation des demandes récurrentes, architecture API temps réel.",
    kpis: "30% appels automatisés · Coût/interaction −35% · 24/7",
  },
];

export function TroisMissions() {
  return (
    <section className="py-16 md:py-24 bg-paper" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite mb-4">
            CAS CLIENTS
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display font-medium text-4xl md:text-5xl text-primary tracking-[-0.015em]">
              Trois missions <em className="not-italic italic">récentes.</em>
            </h2>
            <a
              href="/cas-clients"
              className="text-sm font-medium text-accent hover:text-accent-light transition-colors shrink-0"
            >
              Voir tous les cas →
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missions.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col p-6 md:p-8 bg-mist border border-smoke rounded-lg"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
                {m.tag}
              </p>
              <h3 className="font-display font-medium text-xl md:text-2xl text-primary mb-3 tracking-[-0.01em]">
                {m.title}
              </h3>
              <p className="text-sm text-charcoal leading-relaxed flex-grow">
                {m.pitch}
              </p>
              <p className="font-mono text-xs text-graphite mt-6 pt-4 border-t border-smoke">
                {m.kpis}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

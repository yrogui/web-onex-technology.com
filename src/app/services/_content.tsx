"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Mic,
  Headset,
  BarChart2,
  Quote,
} from "lucide-react";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { wording } from "@/data/wording";

const NAV_ITEMS = [
  { label: "Migration CCaaS", anchor: "#migration" },
  { label: "Optimisation CX", anchor: "#cx" },
  { label: "Automatisation IA", anchor: "#automatisation" },
  { label: "Architecture Cloud", anchor: "#cloud" },
];

export function ServicesContent() {
  const [activeSection, setActiveSection] = useState("migration");

  useEffect(() => {
    const sections = ["migration", "cx", "automatisation", "cloud"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchor: string
  ) => {
    e.preventDefault();
    const id = anchor.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const telcoCase = wording.caseStudies.items[2];

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-primary pt-40 pb-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              NOS SERVICES
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-4xl">
              Migration CCaaS, optimisation CX, automatisation IA
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl mb-10">
              Quatre domaines d&apos;expertise, une seule obsession : transformer
              votre centre de contacts en actif stratégique, sans risque et avec
              un ROI démontré.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#contact-cta"
                onClick={(e) => handleNavClick(e, "#contact-cta")}
                className="inline-block px-7 py-3.5 bg-paper text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-mist transition-colors duration-300"
              >
                Réserver un diagnostic gratuit
              </a>
              <BadgePartenaire variant="dark" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Navigation interne ── */}
      <nav className="sticky top-20 z-40 bg-paper dark:bg-charcoal/20 py-6 border-b border-smoke/30 dark:border-charcoal">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap gap-3">
            {NAV_ITEMS.map((item) => {
              const id = item.anchor.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  onClick={(e) => handleNavClick(e, item.anchor)}
                  className={`px-5 py-2 rounded-sm text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-accent text-paper"
                      : "text-charcoal dark:text-smoke hover:text-ink dark:hover:text-paper"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Migration CCaaS ── */}
      <section
        id="migration"
        className="py-24 bg-paper dark:bg-primary"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              MIGRATION CCAAS
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-3xl">
              Migration Genesys, AWS Connect, Avaya
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-2xl">
              Votre infrastructure on-premise coûte cher, vieillit et manque de
              flexibilité. La migration vers le cloud n&apos;est pas une question de
              si, mais de comment. Nous avons piloté des centaines de migrations
              sans interruption de service — avec une méthode éprouvée, une
              bascule progressive par vagues de 10%, et un plan de rollback à
              chaque étape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Points clés */}
            <div className="space-y-6">
              {[
                "Bascule progressive 10%/vague, plan rollback systématique",
                "Architecture omnicanale : voix, WhatsApp, chat, email unifiés",
                "Intégrations CRM natives (Salesforce, Dynamics, SAP C4C)",
              ].map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <Check
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="text-[15px] text-charcoal dark:text-smoke leading-[1.6]">
                    {point}
                  </span>
                </div>
              ))}

              {/* Plateformes certifiées */}
              <div className="pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-4">
                  PLATEFORMES CERTIFIÉES
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Genesys Cloud CX",
                    "AWS Connect",
                    "Avaya Cloud Elite",
                  ].map((p) => (
                    <span
                      key={p}
                      className="px-4 py-2 bg-mist dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal rounded-sm text-sm font-medium text-charcoal dark:text-smoke"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Métriques */}
            <div className="bg-primary dark:bg-charcoal/30 p-8 rounded border border-charcoal">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-8">
                RÉSULTATS OBSERVÉS
              </p>
              <div className="space-y-8">
                {[
                  {
                    value: "−20 à −40%",
                    label: "coûts télécoms",
                  },
                  { value: "99,95%", label: "SLA garanti" },
                  { value: "8-12 semaines", label: "délai go-live" },
                ].map((m) => (
                  <div key={m.label}>
                    <p className="font-display font-medium text-3xl text-accent mb-1">
                      {m.value}
                    </p>
                    <p className="text-sm text-smoke">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Optimisation CX ── */}
      <section id="cx" className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              OPTIMISATION CX
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper mb-6 max-w-3xl">
              Réduire la friction client, augmenter la valeur
            </h2>
            <p className="text-[16px] leading-[1.7] text-smoke max-w-2xl">
              Un NPS qui stagne, un taux d&apos;abandon à 30%, des agents surchargés
              sur du volume à faible valeur : ce ne sont pas des fatalités. Ce
              sont des problèmes de conception de parcours. Nous auditons,
              quantifions, priorisons et déployons des améliorations avec un ROI
              visible en moins de 90 jours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {[
              {
                title: "Audit omnicanal",
                desc: "Cartographie tous vos touchpoints clients",
              },
              {
                title: "Refonte parcours",
                desc: "Basée sur la data, pas les intuitions",
              },
              {
                title: "Quick wins < 2 semaines",
                desc: "Résultats immédiats pour crédibiliser le projet",
              },
              {
                title: "Pilotage KPIs CX",
                desc: "CSAT, NPS, FCR, AHT en temps réel",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-charcoal/30 border border-charcoal rounded p-6"
              >
                <h3 className="font-display font-medium text-xl text-paper mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-smoke leading-[1.6]">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats inline */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: "CSAT +15-20 pts", label: "" },
              { value: "FCR +25%", label: "" },
              { value: "Taux abandon −30%", label: "" },
            ].map((s) => (
              <div key={s.value}>
                <p className="font-display font-medium text-2xl text-accent">
                  {s.value}
                </p>
                <p className="text-xs text-smoke/70 uppercase tracking-wider mt-1">
                  résultats observés
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automatisation IA ── */}
      <section
        id="automatisation"
        className="py-24 bg-paper dark:bg-primary"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              AUTOMATISATION IA
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-3xl">
              Automatiser les 60% de requêtes simples
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-2xl">
              Vos agents passent 60% de leur temps sur des questions FAQ. Chaque
              interaction traitée par un voicebot ou chatbot intelligent libère
              un agent pour les demandes complexes — et réduit votre coût par
              contact d&apos;un facteur 3.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                Icon: Mic,
                title: "Voicebot NLU",
                desc: "Langage naturel, pas d'arbre de décision rigide",
              },
              {
                Icon: Headset,
                title: "Agent Assist",
                desc: "Suggestions temps réel pendant l'appel",
              },
              {
                Icon: BarChart2,
                title: "Analytics IA",
                desc: "Détection automatique des motifs d'appel",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <Icon
                  className="h-6 w-6 text-accent flex-shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-display font-medium text-lg text-ink dark:text-paper mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-charcoal dark:text-smoke leading-[1.6]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Témoignage */}
          <div className="bg-primary dark:bg-charcoal/30 border border-charcoal rounded p-8 max-w-3xl">
            <Quote
              className="h-8 w-8 text-accent mb-6"
              strokeWidth={1.5}
            />
            <blockquote className="font-display italic text-xl text-paper leading-[1.6] mb-6">
              &ldquo;{telcoCase.quote}&rdquo;
            </blockquote>
            <p className="text-sm text-smoke">
              {telcoCase.label} · {telcoCase.agents}
            </p>
          </div>
        </div>
      </section>

      {/* ── Architecture Cloud ── */}
      <section id="cloud" className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              ARCHITECTURE CLOUD
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper mb-6 max-w-3xl">
              L&apos;infrastructure qui supporte votre CCaaS
            </h2>
            <p className="text-[16px] leading-[1.7] text-smoke max-w-2xl">
              Un CCaaS performant repose sur une infra AWS/Azure solide,
              sécurisée et scalable. Nous concevons l&apos;architecture complète :
              réseau, sécurité RGPD/PCI-DSS, résilience multi-AZ, disaster
              recovery testé. Pas de mauvaise surprise technique post go-live.
            </p>
          </motion.div>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              "Architecture multi-AZ",
              "Sécurité RGPD & PCI-DSS",
              "RTO < 1 heure",
              "SLA 99,95%+",
            ].map((pill) => (
              <span
                key={pill}
                className="px-5 py-2.5 bg-charcoal/30 border border-charcoal rounded-sm text-sm font-medium text-paper"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Cas d'usage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Connect + Amazon Lex",
                desc: "Centre de contact natif cloud avec IA conversationnelle intégrée, routing intelligent et analytics temps réel.",
              },
              {
                title: "Genesys Cloud + AWS",
                desc: "Architecture hybride haute disponibilité avec failover automatique et résilience multi-région.",
              },
              {
                title: "Azure + Microsoft Teams",
                desc: "Intégration native Teams pour les organisations Microsoft, avec sécurité Azure AD et conformité M365.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-charcoal/30 border border-charcoal rounded p-6"
              >
                <h3 className="font-display font-medium text-lg text-paper mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-smoke leading-[1.6]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA finale ── */}
      <section
        id="contact-cta"
        className="py-24 bg-mist dark:bg-charcoal/20"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-2xl mx-auto">
              Quel service correspond à votre priorité ?
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-xl mx-auto mb-10">
              Un diagnostic gratuit de 30 min avec un architecte CCaaS senior.
              Sans engagement. Nous vous disons honnêtement si nous pouvons vous
              aider.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:contact@onex-technology.com"
                className="inline-block px-7 py-3.5 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-ink dark:hover:bg-mist transition-colors duration-300"
              >
                Réserver un diagnostic gratuit
              </a>
              <BadgePartenaire variant="light" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

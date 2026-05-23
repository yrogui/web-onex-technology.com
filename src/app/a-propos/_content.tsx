"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Linkedin } from "lucide-react";
import { BadgePartenaire } from "@/components/ui/BadgePartenaire";
import { Testimonials } from "@/components/sections/testimonials";

export function AProposContent() {
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
              À PROPOS
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl tracking-[-0.02em] text-paper mb-6 max-w-4xl">
              Le partenaire marocain des programmes CX critiques
            </h1>
            <p className="text-[17px] leading-[1.7] text-smoke max-w-2xl mb-10">
              One-X Technology est né d&apos;un constat simple : les grands comptes
              marocains avaient besoin d&apos;un partenaire CCaaS local, senior,
              ancré — pas d&apos;une filiale lointaine ou d&apos;un consultant de passage.
            </p>
            <BadgePartenaire variant="dark" />
          </motion.div>
        </div>
      </section>

      {/* ── Notre histoire ── */}
      <section className="py-24 bg-paper dark:bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
              NOTRE HISTOIRE
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-10 max-w-3xl">
              18 ans d&apos;expertise au service du Maroc
            </h2>
          </motion.div>

          <div className="max-w-3xl space-y-6">
            <p className="text-[16px] leading-[1.8] text-charcoal dark:text-smoke">
              Yassine Rogui a passé 18 ans à piloter des programmes CX et CCaaS
              pour des organisations de premier plan en France, en Europe et à
              l&apos;international — dans le luxe, la finance, les
              télécommunications et l&apos;assurance. 400 projets. Des équipes de 10
              à 600 agents. Des plateformes Genesys, Avaya, AWS Connect dans
              leurs versions les plus complexes.
            </p>
            <p className="text-[16px] leading-[1.8] text-charcoal dark:text-smoke">
              En 2024, il fonde One-X Technology à Casablanca avec une
              conviction : les grandes entreprises marocaines méritent le même
              niveau d&apos;expertise que leurs homologues européens, délivrée
              localement, en français et en arabe, au bon fuseau horaire.
            </p>
            <p className="text-[16px] leading-[1.8] text-charcoal dark:text-smoke">
              One-X Technology est partenaire commercial officiel d&apos;ExpertiaX,
              cabinet CX & CCaaS de référence en France et en Europe. Cette
              relation garantit un accès aux meilleurs standards européens tout
              en ancrant chaque intervention dans les réalités du marché
              marocain.
            </p>
          </div>

          {/* Encadré info */}
          <div className="mt-10 inline-flex items-center gap-3 px-6 py-4 bg-mist dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal rounded-sm">
            <p className="text-sm text-charcoal dark:text-smoke">
              Entité juridique marocaine indépendante · Casablanca ·{" "}
              <a
                href="mailto:contact@onex-technology.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                contact@onex-technology.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              NOS VALEURS
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper max-w-2xl">
              Rigueur · Hauteur · Ancrage
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rigueur",
                desc: "Nous documentons tout. Architecture HLD/LLD, tests de charge, plan de rollback. Rien n'est laissé au hasard. Notre réputation se construit sur la prévisibilité de nos livraisons.",
              },
              {
                title: "Hauteur",
                desc: "Nous prenons du recul là où d'autres proposent vite. Recommander Genesys quand AWS Connect correspond mieux à votre contexte : c'est notre valeur ajoutée. L'objectivité plutôt que la complaisance.",
              },
              {
                title: "Ancrage",
                desc: "Être à Casablanca n'est pas un détail logistique. C'est une conviction. Comprendre BAM, ACAPS, les dynamiques des grands comptes marocains — de l'intérieur, pas depuis Paris.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-charcoal/30 border border-charcoal rounded p-10"
              >
                <h3 className="font-display font-medium text-2xl text-paper mb-4">
                  {v.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-smoke">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & Stack ── */}
      <section className="py-24 bg-paper dark:bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-accent mb-4">
              CERTIFICATIONS & STACK
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper max-w-3xl">
              Expertise certifiée, plateformes maîtrisées
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-6">
                CERTIFICATIONS
              </p>
              <div className="space-y-4">
                {[
                  "Genesys Cloud CX Certified Professional",
                  "AWS Connect Deployment Specialist",
                  "Microsoft Certified Partner",
                  "PMP — Project Management Professional",
                  "AWS Cloud Practitioner (CCP)",
                  "Data Analyst Certification",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <Check
                      className="h-5 w-5 text-accent flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-[15px] text-charcoal dark:text-smoke">
                      {cert}
                    </span>
                    <span className="ml-auto px-2.5 py-1 bg-accent/10 text-accent text-[11px] font-semibold rounded-sm uppercase tracking-wider">
                      Certifié
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack technique */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-graphite dark:text-smoke/60 mb-6">
                STACK TECHNIQUE
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Genesys Cloud",
                  "AWS Connect",
                  "Amazon Lex",
                  "Avaya Aura",
                  "Avaya Cloud Elite",
                  "Salesforce CRM",
                  "Microsoft Dynamics",
                  "Azure",
                  "AWS",
                  "SAP C4C",
                  "Python",
                  "Genesys Architect",
                  "REST APIs",
                  "Webhooks n8n",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-mist dark:bg-charcoal/30 border border-smoke/30 dark:border-charcoal rounded-sm text-sm text-charcoal dark:text-smoke"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Yassine Rogui ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
              PRACTICE LEADER
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-paper max-w-2xl">
              Yassine Rogui
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Avatar */}
            <div className="flex flex-col items-start gap-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-charcoal">
                <Image
                  src="/images/team/yassine-rogui.jpg"
                  alt="Yassine Rogui — Practice Leader One-X Technology"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>

              {/* Stats */}
              <div className="flex gap-10">
                {[
                  { value: "18+", label: "ans" },
                  { value: "400+", label: "projets" },
                  { value: "3", label: "plateformes certifiées" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display font-medium text-3xl text-accent">
                      {s.value}
                    </p>
                    <p className="text-xs text-smoke/70 uppercase tracking-wider mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <BadgePartenaire variant="dark" />
                <a
                  href="https://www.linkedin.com/in/yrogui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smoke hover:text-paper transition-colors"
                  aria-label="LinkedIn Yassine Rogui"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Biographie */}
            <div className="space-y-6">
              <p className="text-[16px] leading-[1.8] text-smoke">
                Yassine Rogui est architecte CCaaS et Practice Leader
                d&apos;One-X Technology. Il intervient personnellement sur chaque
                mission critique — de la phase d&apos;audit jusqu&apos;au support post
                go-live.
              </p>
              <p className="text-[16px] leading-[1.8] text-smoke">
                Formé sur les plateformes les plus exigeantes (Genesys, Avaya,
                AWS Connect), il a piloté des déploiements pour des acteurs
                majeurs du luxe international, de la banque privée et des
                télécommunications en France, en Belgique, en Suisse et au
                Maroc.
              </p>
              <p className="text-[16px] leading-[1.8] text-smoke">
                Sa conviction : un projet CCaaS réussi n&apos;est pas une question
                de technologie, c&apos;est une question de méthode et d&apos;humain.
                L&apos;architecture est au service des agents, des superviseurs et
                du client final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Témoignages ── */}
      <Testimonials />

      {/* ── CTA finale ── */}
      <section className="py-24 bg-mist dark:bg-charcoal/20">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-[-0.015em] text-ink dark:text-paper mb-6 max-w-2xl mx-auto">
              Parlons de votre projet
            </h2>
            <p className="text-[16px] leading-[1.7] text-charcoal dark:text-smoke max-w-xl mx-auto mb-10">
              Un premier échange de 30 minutes avec Yassine. Sans engagement.
              Pour comprendre votre contexte et voir si nous pouvons vous aider.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="inline-block px-7 py-3.5 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-semibold tracking-wide rounded-sm hover:bg-ink dark:hover:bg-mist transition-colors duration-300"
              >
                Démarrer la conversation
              </a>
              <BadgePartenaire variant="light" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

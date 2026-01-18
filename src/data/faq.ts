// FAQ ORIENTÉE CONVERSION & SEO
// 5 questions intent d'achat + objections pré-achat

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "prix" | "délais" | "risques" | "choix" | "expertise";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-prix",
    question: "Combien coûte une migration CCaaS vers Genesys Cloud ou AWS Connect au Maroc ?",
    category: "prix",
    answer: `Le coût d'une migration CCaaS dépend de plusieurs facteurs : nombre d'agents (20-500+), complexité des intégrations CRM (Salesforce, Dynamics, custom), et plateforme cible (Genesys Cloud, AWS Connect, Avaya).

**Ordre de grandeur :**
- **Audit CCaaS complet** : 15 000 MAD HT (déduit si projet signé)
- **Migration 20-50 agents** : À partir de 150 000 MAD HT (forfait projet)
- **Migration 50-200 agents** : 300 000 à 800 000 MAD HT
- **Migration 200-500+ agents** : Sur devis (architecture complexe)

**Inclus :** Architecture cloud, configuration plateforme, intégrations CRM, migration progressive, formation agents, support post go-live 30 jours.

**💡 Bon à savoir :** Nous facturons au forfait projet (pas de régie), avec ROI positif dès le 8e mois en moyenne grâce aux économies télécoms (-20 à -40%).`,
  },
  {
    id: "faq-delais",
    question: "Combien de temps prend une migration de centre de contact vers le cloud ?",
    category: "délais",
    answer: `La durée de migration varie selon la taille de votre centre et la complexité technique :

**Timeline typique :**
- **Phase 1 - Audit & Architecture** : 2 semaines
- **Phase 2 - Configuration & Tests** : 3-4 semaines
- **Phase 3 - Migration Progressive** : 2-4 semaines (10% agents/vague)
- **Phase 4 - Optimisation & Support** : 1 mois post go-live

**Durée totale :** **8 à 12 semaines** (2-3 mois) de l'audit au go-live complet.

**Facteurs d'accélération :**
- Infrastructure cloud existante (AWS/Azure déjà en place)
- Intégrations CRM standardisées (Salesforce/Dynamics)
- Équipe IT disponible pour tests

**💡 Engagement ONEX :** Roadmap semaine par semaine dès l'audit. Pas de retard sauf demande de changement de votre part.`,
  },
  {
    id: "faq-downtime",
    question: "Peut-on migrer vers Genesys Cloud ou AWS Connect sans interrompre le service client ?",
    category: "risques",
    answer: `**Oui, c'est possible et c'est notre méthode standard.**

**Notre approche "Zero Downtime" :**
1. **Migration progressive par vagues** : 10% des agents par jour (pas de "big bang")
2. **Dual-running temporaire** : Ancienne et nouvelle plateforme en parallèle pendant la transition
3. **Tests de charge réels** : Simulation 120% du trafic habituel avant bascule
4. **Plan de rollback documenté** : Retour arrière possible en < 30 min si problème critique
5. **Support 24/7 première semaine** : Équipe dédiée post go-live

**Résultat :** Sur 15 migrations réalisées au Maroc, **0 incident majeur**, SLA 99,95%+ respecté.

**💡 Garantie ONEX :** Si downtime non planifié > 1h, pénalités contractuelles appliquées (remboursement partiel).`,
  },
  {
    id: "faq-choix-plateforme",
    question: "Genesys Cloud, AWS Connect ou Avaya Cloud : quelle plateforme CCaaS choisir ?",
    category: "choix",
    answer: `**Le "meilleur" CCaaS n'existe pas. Le bon choix dépend de VOS contraintes.**

**Comparaison rapide :**
- **Genesys Cloud** : Grandes entreprises (200+ agents), omnicanal avancé, IA puissante. Prix : 150-200€/agent/mois.
- **AWS Connect** : Startups tech, intégrations AWS natives, coût optimisé. Prix : 80-120€/agent/mois.
- **Avaya Cloud** : Migration depuis Avaya on-prem, transition douce. Prix : 100-150€/agent/mois.

**Notre recommandation selon profil :**
- **Vous avez 50-200 agents + besoin omnicanal fort** → **Genesys Cloud**
- **Vous êtes déjà sur AWS + équipe tech forte** → **AWS Connect**
- **Vous migrez depuis Avaya on-premise** → **Avaya Cloud**

**💡 Service ONEX :** Diagnostic gratuit 30 min pour comparer les 3 selon VOS critères (budget, nb agents, CRM, timeline). Recommandation objective, on ne touche pas de commission éditeur.`,
  },
  {
    id: "faq-local-maroc",
    question: "Pourquoi choisir un cabinet CCaaS local au Maroc plutôt qu'un intégrateur international ?",
    category: "expertise",
    answer: `**3 raisons concrètes :**

**1. Réactivité & Disponibilité**
- **Cabinet local (ONEX)** : Équipe à Casablanca, interventions sur site sous 48h, support en français/arabe, même fuseau horaire
- **Intégrateur international** : Consultants basés à Paris/Londres, déplacements coûteux, décalage horaire, disponibilité limitée

**2. Coûts Maîtrisés**
- **Cabinet local** : TJM 5 000 - 8 000 MAD (500-800€), pas de frais de déplacement
- **Intégrateur international** : TJM 1 500 - 2 500€, + frais mission (avion, hôtel) → **Coût total x2 à x3**

**3. Connaissance Contexte Maroc**
- Réglementation ANRT (télécom)
- Spécificités bancaires/assurances locales
- Pratiques RH centres de contact marocains
- Écosystème fournisseurs locaux (connectivité, SIP trunking)

**💡 Notre positionnement :** Expertise internationale (formés sur gros projets France/Europe) + delivery local Maroc = meilleur des deux mondes.`,
  },
];

// SEO: Schema.org FAQPage structured data
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.replace(/\*\*/g, "").replace(/\n/g, " ").trim(),
    },
  })),
};

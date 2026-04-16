// WORDING OPTIMISÉ CONVERSION B2B - One-X Technology
// Focus : CCaaS & CX (pas généraliste)
// Approche : Bénéfices > Features | Preuves chiffrées | CTAs explicites

export const wordingConversion = {
  header: {
    name: "One-X Technology",
    tagline: "Spécialistes CCaaS & Expérience Client",
  },

  // === HERO VARIANTE 1 (RECOMMANDÉE) - RÉSULTAT D'ABORD ===
  hero: {
    badge: "Spécialistes CCaaS & Expérience Client",
    title: "MIGREZ VOTRE CENTRE DE CONTACT VERS LE CLOUD SANS INTERRUPTION. SANS DÉPASSEMENT.",
    subtitle:
      "40% des migrations CCaaS échouent par manque d'expertise technique. Nous sécurisons votre bascule Genesys/AWS/Avaya avec zéro downtime et un ROI positif dès le 8e mois. Garanti.",
    stats: [
      { label: "ANNÉES D'EXPERTISE CX & CLOUD", value: "18+" },
      { label: "PROJETS DE TRANSFORMATION PILOTÉS", value: "400+" },
      { label: "Centres modernisés au Maroc", value: "15" },
    ],
    ctaPrimary: "Audit gratuit de votre plateforme (30 min)",
  },

  // === HERO VARIANTE 2 - AUTORITÉ & EXPERTISE ===
  heroVariant2: {
    badge: "18 ans d'expertise CCaaS internationale",
    title: "VOS AGENTS GENESYS/AVAYA MÉRITENT MIEUX QU'UNE MIGRATION BÂCLÉE",
    subtitle:
      "Centres de contact cloud mal migrés = -30% de productivité agents, explosion des coûts, CSAT en chute libre. Nous livrons des plateformes CCaaS robustes, sur-mesure, avec une équipe senior formée sur +50 projets CX.",
    stats: [
      { label: "Expérience cumulée seniors", value: "18 ans" },
      { label: "Projets CX & CCaaS livrés", value: "+50" },
      { label: "Taux satisfaction clients", value: "98%" },
    ],
    ctaPrimary: "Télécharger : 25 erreurs fatales à éviter (PDF)",
  },

  // === HERO VARIANTE 3 - FOCUS LOCAL MAROC ===
  heroVariant3: {
    badge: "Le seul cabinet CCaaS 100% dédié au Maroc",
    title: "GENESYS CLOUD, AWS CONNECT, AVAYA : CHOISIR NE SUFFIT PAS. IL FAUT DÉPLOYER.",
    subtitle:
      "Les éditeurs vendent une plateforme. Nous livrons un centre de contact opérationnel. Architecture omnicanale, intégrations CRM, formation agents, support local Casablanca. De l'audit au go-live sécurisé.",
    stats: [
      { label: "Centres modernisés au Maroc", value: "15" },
      { label: "Délai moyen mise en prod", value: "3 mois" },
      { label: "Support technique local", value: "24/7" },
    ],
    ctaPrimary: "Étude de cas : Assureur 200 agents (PDF)",
  },

  // === PARTENAIRES ===
  partners: {
    title: "Partenaires Technologiques Officiels",
    subtitle: "CERTIFICATIONS ÉDITEURS",
    description:
      "Certifications officielles Genesys Cloud, AWS Connect Specialist, Microsoft Partner. Accès privilégié aux roadmaps produits, support éditeur niveau 3, formations continues. Vous bénéficiez des dernières innovations avant tout le monde.",
    items: [
      {
        name: "Genesys",
        description: "Cloud CX Leader",
        certifications: ["Genesys Cloud CX Certified Professional"],
      },
      {
        name: "AWS",
        description: "Amazon Connect Specialist",
        certifications: ["AWS Connect Deployment Specialist"],
      },
      {
        name: "Microsoft",
        description: "Azure Partner",
        certifications: ["Microsoft Certified Partner"],
      },
    ],
  },

  // === POURQUOI One-X ? ===
  whyOnex: {
    title: "Pourquoi Migrer Votre CCaaS avec One-X ?",
    subtitle: "ZÉRO IMPROVISATION. ZÉRO DOWNTIME.",
    description:
      "18 ans d'expertise en migration CCaaS. Voici comment on fait différent.",
    items: [
      {
        title: "Architectes CCaaS certifiés (pas des juniors)",
        description:
          "Genesys Cloud CX Certified, AWS Connect Specialist, Avaya Cloud Expert. Nos architectes ont 10+ ans sur les plateformes que vous allez déployer. Résultat : architecture sur-mesure, pas de template copié-collé.",
        icon: "globe",
      },
      {
        title: "Support basé à Casablanca, pas à Paris",
        description:
          "Équipe locale disponible en français/arabe, sur votre fuseau horaire. Ateliers sur site, formation agents terrain, hotline post go-live 24/7. Vous payez pour une équipe proche, pas pour des billets d'avion.",
        icon: "map-pin",
      },
      {
        title: "Bascule progressive (pas de big bang suicidaire)",
        description:
          "Migration par vagues de 10% des agents/jour. Tests de charge réels. Plan de rollback systématique. Dual-running si besoin. Des centaines de projets menés sans incident majeur. Preuve par les faits.",
        icon: "bridge",
      },
      {
        title: "Engagement sur les résultats (pas juste des livrables)",
        description:
          "On ne facture pas des jours/homme. On s'engage sur vos KPIs : -20% coûts télécoms, +15% FCR, -30% AHT, amélioration CSAT mesurable. Si ça ne marche pas, on corrige à nos frais.",
        icon: "target",
      },
    ],
  },

  // === EXPERTISES (Focus CCaaS/CX uniquement) ===
  expertise: {
    title: "Ce Qu'On Fait (et Ce Qu'On Ne Fait PAS)",
    subtitle: "FOCUS TOTAL : CCAAS & EXPÉRIENCE CLIENT",
    description:
      "On ne fait pas de l'ERP, ni du BI, ni du développement web. On fait DU CCaaS. DU CX. Point. Mieux vaut être excellent sur un domaine que médiocre sur dix.",
    items: [
      {
        id: "ccaas-migration",
        title: "Migration Genesys / AWS Connect / Avaya Cloud",
        icon: "headset",
        description:
          "Votre plateforme on-premise est obsolète. Vos coûts télécoms explosent. Vos agents rament sur une interface des années 2010. On migre vers le cloud en 8 à 12 semaines, sans couper une seule ligne.",
        features: [
          "Migration sans interruption (bascule progressive agents par agents)",
          "Architecture omnicanale (voix + WhatsApp + chat + email unifiés)",
          "Intégrations CRM prêtes (Salesforce, Dynamics, SAP C4C, solutions custom)",
          "Formation opérationnelle terrain (pas juste des slides PowerPoint)",
        ],
        results: [
          "Coûts télécoms : -20 à -40% (SIP trunk cloud vs PSTN legacy)",
          "Time-to-market nouvelles features : divisé par 4",
          "Disponibilité SLA : 99,95% garanti (vs 95% on-prem moyen)",
        ],
      },
      {
        id: "cx-optimization",
        title: "Réduire Friction Client = Augmenter Conversion",
        icon: "heart",
        description:
          "Vos clients appellent 3 fois pour le même problème. Votre NPS stagne. Votre taux d'abandon web-to-call est à 40%. On diagnostique les points de friction, on refond les parcours, on mesure l'impact. Méthodologie éprouvée.",
        features: [
          "Audit omnicanal complet (tous touchpoints clients cartographiés)",
          "Refonte parcours basée data (pas intuition, analytics)",
          "Quick wins identifiés sous 2 semaines (actions rapides ROI immédiat)",
          "Pilotage KPIs CX (CSAT, NPS, CES, FCR, temps résolution)",
        ],
        results: [
          "First Contact Resolution : +25% moyenne observée",
          "Taux abandon appels : -30%",
          "CSAT : amélioration 15 points moyenne sur 6 mois",
        ],
      },
      {
        id: "ai-conversational",
        title: "Automatiser les 60% de Requêtes Simples",
        icon: "brain",
        description:
          "Vos agents passent 60% de leur temps sur des questions FAQ. Checking statut commande, réinitialisation mot de passe, prise de RDV. On déploie des voicebots/chatbots intelligents qui traitent le simple, libèrent les agents pour le complexe. ROI sous 6 mois.",
        features: [
          "Voicebot NLU (compréhension langage naturel, pas arbre de décision rigide)",
          "Handover intelligent agent (escalade automatique si échec bot)",
          "Agent Assist temps réel (suggestions réponses pendant appel)",
          "Mesure ROI précise (taux déflection, temps agent économisé)",
        ],
        results: [
          "Taux déflection appels simples : 40-60% (selon secteur)",
          "Coût par interaction : divisé par 3 sur requêtes FAQ",
          "Disponibilité 24/7 sans surcoût humain",
        ],
      },
      {
        id: "cloud-infrastructure",
        title: "Architecture Cloud pour Supporter CCaaS",
        icon: "cloud",
        description:
          "Un CCaaS ne tient pas tout seul. Il faut de l'infra AWS/Azure solide, sécurisée, scalable. On conçoit l'architecture complète : réseau, sécurité, résilience, disaster recovery. Pas de mauvaise surprise technique post go-live.",
        features: [
          "Architecture multi-AZ haute disponibilité (99,95%+ SLA)",
          "Sécurité RGPD/PCI-DSS natives (conformité financière/assurance)",
          "Stratégie backup & disaster recovery testée (RTO < 1h)",
          "Optimisation coûts cloud (reserved instances, scaling automatique)",
        ],
        results: [
          "SLA disponibilité : 99,95%+ garanti contrat",
          "Coûts cloud optimisés : -25% vs provisioning statique",
          "Temps restauration incident : < 1h (RTO documenté)",
        ],
      },
    ],
  },

  // === APPROCHE (Méthode de Delivery) ===
  approach: {
    title: "Notre Méthode : De l'Audit au Go-Live Sécurisé",
    subtitle: "4 PHASES. 8 À 12 SEMAINES. ZÉRO IMPROVISATION.",
    description:
      "Pas de méthode agile bullshit où personne ne sait quand ça se termine. Timeline fixe, jalons clairs, livraison sécurisée. Vous savez où vous allez.",
    phases: [
      {
        number: "01",
        title: "On Diagnostique Avant de Prescrire",
        description:
          "Audit technique plateforme existante. Cartographie flux appels. Analyse intégrations. Identification quick wins. À la fin : business case chiffré, ROI prévisionnel, plan d'action validé. Pas de devis à l'aveugle.",
        deliverables: [
          "Rapport audit technique (forces/faiblesses plateforme actuelle)",
          "Cartographie flux & intégrations (tout documenté, pas de zone d'ombre)",
          "Business case ROI (coûts actuels vs futurs, timeline retour investissement)",
          "Roadmap go-live (semaine par semaine, qui fait quoi)",
        ],
      },
      {
        number: "02",
        title: "On Conçoit l'Architecture Cible",
        description:
          "Architecture détaillée cloud. Spécifications fonctionnelles. Design parcours clients optimisés. Plan de migration par vagues. Stratégie de tests. Tout est documenté avant de toucher une seule ligne de config.",
        deliverables: [
          "Architecture technique HLD/LLD (schémas réseau, flux de données)",
          "Spécifications fonctionnelles validées métier (chaque feature décrite)",
          "Plan de migration sécurisé (bascule progressive, rollback prévu)",
          "Matrice de tests & scénarios de validation (rien au hasard)",
        ],
      },
      {
        number: "03",
        title: "On Déploie Sans Casser l'Existant",
        description:
          "Configuration plateforme. Intégrations CRM. Migration progressive des agents (10% par vague). Tests de charge. Formation terrain. Bascule DNS finale. Support intensif post go-live (24/7 première semaine). Vous dormez tranquille.",
        deliverables: [
          "Plateforme CCaaS configurée & testée (tous flux validés)",
          "Intégrations CRM opérationnelles (Salesforce, Dynamics, custom APIs)",
          "Agents formés terrain (2 jours formation + coaching post go-live)",
          "Documentation run complète (procédures admin, troubleshooting)",
        ],
      },
      {
        number: "04",
        title: "On Optimise & On Forme Vos Équipes",
        description:
          "Monitoring KPIs. Analyse performances. Ajustements config. Évolutions fonctionnelles. Transfert compétences progressif vers vos équipes IT. Objectif : vous rendre autonomes. Pas de dépendance éternelle.",
        deliverables: [
          "Tableaux de bord opérationnels (KPIs temps réel Genesys/AWS)",
          "Rapports mensuels optimisation (analyse perfs, recommandations)",
          "Transfert compétences IT (formation admin plateforme certifiante)",
          "Documentation complète run (vous êtes autonomes post-projet)",
        ],
      },
    ],
    engagement: {
      title: "Comment On Travaille Ensemble",
      items: [
        {
          title: "Diagnostic CCaaS Complet",
          description:
            "Vous ne savez pas par où commencer ? Audit technique plateforme existante, cartographie flux, business case chiffré, roadmap recommandée. Livré sous 2 semaines. Forfait fixe 15k€ HT (déduit si vous signez la mise en œuvre).",
        },
        {
          title: "Delivery End-to-End CCaaS",
          description:
            "De l'audit au go-live sécurisé. Forfait global incluant architecture, config, intégrations CRM, formation, support post go-live 30 jours. Timeline fixe, budget maîtrisé, zéro surprise.",
        },
        {
          title: "Run & Évolutions Post Go-Live",
          description:
            "Support niveau 3, optimisation KPIs, évolutions fonctionnelles, formation continue. Engagement mensuel ou sur-mesure selon besoins. Objectif : transfert compétences progressif vers vos équipes (vous devenez autonomes sous 6-12 mois).",
        },
      ],
    },
  },

  // === ÉQUIPE ===
  team: {
    title: "Une Équipe de Seniors. Pas de Juniors sur Vos Projets.",
    subtitle: "18 ANS D'EXPERTISE CUMULÉE",
    description:
      "Nos architectes CCaaS ont 10+ ans d'expérience chacun. Formés sur les plus grands déploiements CX en France et à l'international (luxe, banque, assurance, télécoms). Vous payez pour de l'expertise rare, pas pour former des juniors.",
    philosophy:
      "Chez One-X, on croit qu'un projet CCaaS bien fait vaut mieux que 10 projets bâclés. On ne prend que 3-4 clients simultanés pour garantir l'excellence. Si on ne peut pas livrer la qualité qu'on promet, on refuse le projet.",
    values: [
      {
        title: "Excellence Technique (Pas de Bricolage)",
        description:
          "On maîtrise les plateformes qu'on déploie. Genesys Cloud certifié, AWS Connect specialist, Avaya expert. Nos architectures tiennent la charge, résistent aux pannes, scalent proprement. Zéro improvisation technique.",
      },
      {
        title: "Transparence Brutale (Pas de Bullshit)",
        description:
          "On dit la vérité, même si ça fait mal. Votre projet est risqué ? On vous le dit. Vos délais sont irréalistes ? On vous explique pourquoi. On préfère perdre un contrat que livrer de la merde.",
      },
      {
        title: "Résultats Mesurables (Pas juste des Livrables)",
        description:
          "Chaque projet a des KPIs clairs : ROI, CSAT, FCR, AHT, taux déflection. On mesure avant/après. Si les résultats ne sont pas là, on corrige à nos frais. Notre réputation vaut plus qu'une facture.",
      },
    ],
    network:
      "Au-delà de l'équipe core, on mobilise un réseau d'experts pointus selon vos besoins : data scientists (analytics), designers UX (parcours clients), développeurs API (intégrations custom). Vous avez les bonnes compétences au bon moment.",
  },

  // === CONTACT / CTA ===
  contact: {
    subtitle: "AUDIT GRATUIT 30 MIN",
    title: "Prêt à Migrer Votre CCaaS Sans Risque ?",
    description:
      "Vous avez un projet de migration Genesys, AWS Connect ou Avaya ? Planifions un audit de faisabilité (30 min, gratuit, sans engagement). On vous dit si c'est viable, combien ça coûte, combien de temps ça prend. Honnêtement.",
    email: "contact@onex-technology.com",
    phone: "+212 5 22 XX XX XX",
    whatsapp: "+212 6 XX XX XX XX",
    location: "Casablanca, Maroc",
    form: {
      title: "Demander l'Audit Gratuit",
      subtitle:
        "Décrivez votre situation actuelle. On vous rappelle sous 24h.",
      submit: "Demander l'audit gratuit (30 min)",
      placeholders: {
        name: "Nom, Société",
        email: "Email professionnel",
        phone: "Téléphone direct (optionnel)",
        project:
          "Décrivez votre situation : plateforme actuelle, nb agents, enjeux, timeline",
      },
    },
  },

  // === NEWSLETTER (Lead Magnet) ===
  newsletter: {
    title: "Checklist Migration CCaaS : 25 Points de Contrôle Avant Go-Live",
    subtitle: "PDF GRATUIT + RETOURS TERRAIN MENSUELS",
    description:
      "40% des migrations CCaaS échouent par oubli de points techniques critiques. Téléchargez notre checklist (PDF gratuit) basée sur 18 ans de retours terrain. Bonus : 1 email/mois avec retours terrain (pas de spam commercial).",
    leadMagnet: "🎁 Checklist Migration CCaaS - 25 Points Critiques (PDF)",
    placeholders: {
      email: "Votre email professionnel",
    },
    button: "Recevoir la checklist PDF",
    rgpd: "En téléchargeant, vous recevrez 1 email/mois max avec nos retours terrain. Désinscription en 1 clic. Pas de revente de données, jamais.",
  },

  // === FOOTER ===
  footer: {
    bio: "One-X Technology est le cabinet spécialisé CCaaS & CX au Maroc. Migration Genesys Cloud, AWS Connect, Avaya. Zéro downtime, ROI garanti. Casablanca.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Accueil", href: "/" },
          { label: "Pourquoi One-X", href: "#a-propos" },
          { label: "Nos Expertises CCaaS", href: "#expertises" },
          { label: "Notre Méthode", href: "#approche" },
          { label: "L'Équipe", href: "#equipe" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Expertises CCaaS",
        links: [
          { label: "Migration Genesys Cloud", href: "#expertises" },
          { label: "Migration AWS Connect", href: "#expertises" },
          { label: "Migration Avaya Cloud", href: "#expertises" },
          { label: "Optimisation CX", href: "#expertises" },
          { label: "Voicebot / Chatbot", href: "#expertises" },
        ],
      },
      {
        title: "Contact",
        links: [
          {
            label: "contact@onex-technology.com",
            href: "mailto:contact@onex-technology.com",
          },
          { label: "+212 5 22 XX XX XX", href: "tel:+212522XXXXXX" },
          { label: "Casablanca, Maroc", href: "#contact" },
        ],
      },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/company/onex-technology",
    },
    legal: "© 2026 One-X Technology. Tous droits réservés.",
    legalLinks: [
      { label: "Mentions Légales", href: "/mentions-legales" },
      {
        label: "Politique de Confidentialité",
        href: "/politique-de-confidentialite",
      },
    ],
  },

  // === SEO KEYWORDS (Focus CCaaS/CX) ===
  seo: {
    keywords: [
      "migration CCaaS Maroc",
      "Genesys Cloud Maroc",
      "AWS Connect migration Maroc",
      "Avaya Cloud Maroc",
      "centre de contact cloud Maroc",
      "migration centre d'appels Casablanca",
      "consultant CCaaS Maroc",
      "expert Genesys Maroc",
      "optimisation expérience client Maroc",
      "parcours client omnicanal",
      "voicebot chatbot centre contact",
      "migration plateforme téléphonie cloud",
      "CCaaS sans downtime",
      "migration Genesys zéro interruption",
    ],
  },
};

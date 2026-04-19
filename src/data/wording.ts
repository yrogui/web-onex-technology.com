// WORDING OPTIMISÉ CONVERSION B2B - One-X Technology
// Focus : CCaaS & CX (pas généraliste)
// Approche : Bénéfices > Features | Preuves chiffrées | CTAs explicites

export const wording = {
  header: {
    name: "One-X Technology",
    tagline: "Spécialistes CCaaS & Expérience Client",
  },

  // === HERO — CHARTE ONE-X v1.0 ===
  hero: {
    eyebrow: "DESIGN AUTHORITY · CX & CLOUD · MAROC",
    title: "Votre centre de contact,",
    titleItalic: "repensé pour le cloud.",
    subtitle:
      "Création, migration ou transformation de votre plateforme CCaaS — Genesys Cloud, AWS Connect, Avaya. Une équipe senior, un ROI mesurable, zéro interruption de service.",
    baseline: "Le partenaire marocain des programmes CX critiques.",
    stats: [
      { label: "ANNÉES D'EXPERTISE CX & CLOUD", value: "18+" },
      { label: "PROJETS DE TRANSFORMATION PILOTÉS", value: "400+" },
      { label: "PLATEFORMES CERTIFIÉES", value: "3" },
    ],
    ctaPrimary: "Audit gratuit (30 min)",
    ctaSecondary: "Découvrir notre approche",
    // Ancienne structure conservée pour compatibilité
    badge: "DESIGN AUTHORITY · CX & CLOUD · MAROC",
  },

  /*
  // === HERO VARIANTE 2 - AUTORITÉ & EXPERTISE ===
  // Décommentez pour utiliser cette variante
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
  // Décommentez pour utiliser cette variante
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
  */

  // === PARTENAIRES ===
  partners: {
    title: "Partenaires technologiques officiels",
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
        name: "Avaya",
        description: "Cloud & On-Prem",
        certifications: ["Avaya Cloud Expert"],
      },
    ],
  },

  whyOnex: {
    title: "Pourquoi migrer votre CCaaS avec One—X ?",
    subtitle: "ZÉRO IMPROVISATION. ZÉRO DOWNTIME.",
    description:
      "18 ans d'expertise en migration CCaaS. Voici comment nous faisons différemment.",
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
        title: "Bascule progressive (pas de big bang risquée)",
        description:
          "Migration par vagues de 10% des agents/jour. Tests de charge réels. Plan de rollback systématique. Dual-running si besoin. Des centaines de projets menés sans incident majeur. Preuve par les faits.",
        icon: "bridge",
      },
      {
        title: "Engagement sur les résultats (pas juste des livrables)",
        description:
          "Nous ne facturons pas des jours/homme. Nous nous engageons sur vos KPIs : -20% coûts télécoms, +15% FCR, -30% AHT, amélioration CSAT mesurable. Si ça ne marche pas, nous corrigeons à nos frais.",
        icon: "target",
      },
    ],
  },

  // === EXPERTISES (Focus CCaaS/CX uniquement) ===
  expertise: {
    title: "Ce que nous faisons (et ce que nous ne faisons pas)",
    subtitle: "FOCUS TOTAL : CCAAS & EXPÉRIENCE CLIENT",
    description:
      "Nous ne faisons pas de l'ERP, ni du BI, ni du développement web. Nous faisons du CCaaS. Du CX. Point. Mieux vaut être excellent sur un domaine que médiocre sur dix.",
    items: [
      {
        id: "ccaas-migration",
        title: "Migration Genesys / AWS Connect / Avaya Cloud",
        icon: "headset",
        description:
          "Votre plateforme on-premise est obsolète. Vos coûts télécoms augmentent. Vos agents travaillent sur une interface des années 2010. Nous migrons vers le cloud en 8 à 12 semaines, sans couper une seule ligne.",
        features: [
          "Migration sans interruption",
          "Architecture omnicanale",
          "Intégrations CRM natives",
          "Formation terrain incluse",
        ],
        results: [
          "Coûts télécoms : -20 à -40% (SIP trunk cloud vs PSTN legacy)",
          "Time-to-market nouvelles features : divisé par 4",
          "Disponibilité SLA : 99,95% garanti (vs 95% on-prem moyen)",
        ],
      },
      {
        id: "cx-optimization",
        title: "Réduire la friction client = augmenter la conversion",
        icon: "heart",
        description:
          "Vos clients appellent 3 fois pour le même problème. Votre NPS stagne. Votre taux d'abandon web-to-call est à 40%. Nous diagnostiquons les points de friction, refondons les parcours, mesurons l'impact. Méthodologie éprouvée.",
        features: [
          "Audit omnicanal complet",
          "Refonte parcours basée data",
          "Quick wins sous 2 semaines",
          "Pilotage KPIs CX",
        ],
        results: [
          "First Contact Resolution : +25% moyenne observée",
          "Taux abandon appels : -30%",
          "CSAT : amélioration 15 points moyenne sur 6 mois",
        ],
      },
      {
        id: "ai-conversational",
        title: "Automatiser les 60% de requêtes simples",
        icon: "brain",
        description:
          "Vos agents passent 60% de leur temps sur des questions FAQ. Checking statut commande, réinitialisation mot de passe, prise de RDV. Nous déployons des voicebots/chatbots intelligents qui traitent le simple, libèrent les agents pour le complexe. ROI sous 6 mois.",
        features: [
          "Voicebot NLU natif",
          "Handover intelligent agent",
          "Agent Assist temps réel",
          "ROI mesuré précisément",
        ],
        results: [
          "Taux déflection appels simples : 40-60% (selon secteur)",
          "Coût par interaction : divisé par 3 sur requêtes FAQ",
          "Disponibilité 24/7 sans surcoût humain",
        ],
      },
      {
        id: "cloud-infrastructure",
        title: "Architecture cloud pour supporter le CCaaS",
        icon: "cloud",
        description:
          "Un CCaaS ne tient pas tout seul. Il faut de l'infra AWS/Azure solide, sécurisée, scalable. Nous concevons l'architecture complète : réseau, sécurité, résilience, disaster recovery. Pas de mauvaise surprise technique post go-live.",
        features: [
          "Architecture multi-AZ",
          "Sécurité RGPD/PCI-DSS",
          "Disaster recovery testé",
          "Optimisation coûts cloud",
        ],
        results: [
          "SLA disponibilité : 99,95%+ garanti contrat",
          "Coûts cloud optimisés : -25% vs provisioning statique",
          "Temps restauration incident : < 1h (RTO documenté)",
        ],
      },
      {
        id: "cx-strategy",
        title: "Conseil & stratégie CX",
        icon: "compass",
        description:
          "Cadrage stratégique, business case chiffré, benchmark concurrentiel et feuille de route CX alignée sur vos objectifs métier. Nous accompagnons vos comités de direction dans leurs décisions d'investissement CCaaS.",
        features: [
          "Benchmark plateformes CCaaS (Genesys vs AWS vs Avaya)",
          "Business case ROI avec analyse TCO sur 3 ans",
          "Feuille de route transformation CX priorisée",
          "Accompagnement COMEX et aide à la décision",
        ],
        results: [
          "Décision éclairée en moins de 4 semaines",
          "Budget validé dès le premier passage en comité",
          "Risques identifiés et mitigés avant lancement",
        ],
      },
      {
        id: "training-transfer",
        title: "Formation & transfert de compétences",
        icon: "graduationCap",
        description:
          "Vos équipes deviennent autonomes sur la plateforme CCaaS déployée. Formation certifiante pour administrateurs, superviseurs et agents. Objectif : zéro dépendance externe en 6 mois.",
        features: [
          "Formation admin plateforme (Genesys/AWS/Avaya)",
          "Formation superviseurs (reporting, workforce management)",
          "Coaching terrain agents (prise en main, bonnes pratiques)",
          "Documentation run complète et procédures opérationnelles",
        ],
        results: [
          "Autonomie équipes IT en 3 à 6 mois",
          "Réduction tickets support N3 de 60%",
          "Satisfaction agents : +20 points post-formation",
        ],
      },
    ],
  },

  // === APPROCHE (Méthode de Delivery) ===
  approach: {
    title: "Notre méthode : de l'audit au go-live sécurisé",
    subtitle: "4 PHASES. 8 À 12 SEMAINES. ZÉRO IMPROVISATION.",
    description:
      "Pas d'improvisation, pas de promesses vides. Timeline fixe, jalons clairs, livraison sécurisée. Vous savez exactement où vous allez.",
    phases: [
      {
        number: "01",
        title: "Nous diagnostiquons avant de prescrire",
        description:
          "Audit technique plateforme existante. Cartographie flux appels. Analyse intégrations. Identification quick wins. À la fin : business case chiffré, ROI prévisionnel, plan d'action validé. Pas de devis à l'aveugle.",
        deliverables: [
          "Rapport audit technique",
          "Cartographie flux & intégrations",
          "Business case ROI chiffré",
          "Roadmap go-live détaillée",
        ],
      },
      {
        number: "02",
        title: "Nous concevons l'architecture cible",
        description:
          "Architecture détaillée cloud. Spécifications fonctionnelles. Design parcours clients optimisés. Plan de migration par vagues. Stratégie de tests. Tout est documenté avant de toucher une seule ligne de config.",
        deliverables: [
          "Architecture HLD/LLD",
          "Spécifications fonctionnelles",
          "Plan migration sécurisé",
          "Matrice de tests complète",
        ],
      },
      {
        number: "03",
        title: "Nous déployons sans casser l'existant",
        description:
          "Configuration plateforme. Intégrations CRM. Migration progressive des agents (10% par vague). Tests de charge. Formation terrain. Bascule DNS finale. Support intensif post go-live (24/7 première semaine). Vous dormez tranquille.",
        deliverables: [
          "Plateforme configurée & testée",
          "Intégrations CRM opérationnelles",
          "Agents formés terrain",
          "Documentation run complète",
        ],
      },
      {
        number: "04",
        title: "Nous optimisons & formons vos équipes",
        description:
          "Monitoring KPIs. Analyse performances. Ajustements config. Évolutions fonctionnelles. Transfert compétences progressif vers vos équipes IT. Objectif : vous rendre autonomes. Pas de dépendance éternelle.",
        deliverables: [
          "Tableaux de bord KPIs temps réel",
          "Rapports mensuels optimisation",
          "Transfert compétences IT",
          "Autonomie complète post-projet",
        ],
      },
    ],
    engagement: {
      title: "Comment nous travaillons ensemble",
      items: [
        {
          title: "Diagnostic CCaaS complet",
          description:
            "Vous ne savez pas par où commencer ? Audit technique plateforme existante, cartographie flux, business case chiffré, roadmap recommandée. Livré sous 2 semaines. Forfait fixe 15 000 MAD HT (≈ 1 400 €), déduit si vous signez la mise en œuvre.",
        },
        {
          title: "Delivery end-to-end CCaaS",
          description:
            "De l'audit au go-live sécurisé. Forfait global incluant architecture, config, intégrations CRM, formation, support post go-live 30 jours. Timeline fixe, budget maîtrisé, zéro surprise.",
        },
        {
          title: "Run & évolutions post go-live",
          description:
            "Support niveau 3, optimisation KPIs, évolutions fonctionnelles, formation continue. Engagement mensuel ou sur-mesure selon besoins. Objectif : transfert compétences progressif vers vos équipes (vous devenez autonomes sous 6-12 mois).",
        },
      ],
    },
  },

  // === ÉQUIPE ===
  team: {
    title: "Une équipe de seniors. Pas de juniors sur vos projets.",
    subtitle: "18 ANS D'EXPERTISE CUMULÉE",
    description:
      "Nos architectes CCaaS ont 10+ ans d'expérience chacun. Formés sur les plus grands déploiements CX en France et à l'international (luxe, banque, assurance, télécoms). Vous payez pour de l'expertise rare, pas pour former des juniors.",
    philosophy:
      "Chez One-X, nous croyons qu'un projet CCaaS bien fait vaut mieux que 10 projets bâclés. Nous ne prenons que 3 à 4 clients simultanément pour garantir l'excellence. Si nous ne pouvons pas livrer la qualité que nous promettons, nous refusons le projet.",
    values: [
      {
        title: "Excellence technique (pas de bricolage)",
        description:
          "Nous maîtrisons les plateformes que nous déployons. Genesys Cloud certifié, AWS Connect specialist, Avaya expert. Nos architectures tiennent la charge, résistent aux pannes, scalent proprement. Zéro improvisation technique.",
      },
      {
        title: "Intégrité technique (zéro complaisance)",
        description:
          "Nous privilégions la vérité sur la complaisance commerciale. Projet à risque technique ? Nous vous alertons. Délais irréalistes ? Nous vous proposons un planning robuste. Nous refusons tout engagement que nous ne pouvons pas honorer avec l'excellence attendue.",
      },
      {
        title: "Résultats mesurables (pas juste des livrables)",
        description:
          "Chaque projet a des KPIs clairs : ROI, CSAT, FCR, AHT, taux déflection. Nous mesurons avant/après. Si les résultats ne sont pas là, nous corrigeons à nos frais. Notre réputation vaut plus qu'une facture.",
      },
    ],
    network:
      "Au-delà de l'équipe core, nous mobilisons un réseau d'experts pointus selon vos besoins : data scientists (analytics), designers UX (parcours clients), développeurs API (intégrations custom). Vous avez les bonnes compétences au bon moment.",
  },

  stats: {
    title: "Chiffres Clés",
    subtitle: "NOTRE IMPACT",
    items: [
      { label: "années d'expérience cumulées", value: "18+" },
      { label: "projets de transformation CX livrés", value: "50+" },
      { label: "centres de contact modernisés", value: "15+" },
      { label: "taux de satisfaction client", value: "98%" },
    ],
  },

  clients: {
    title: "Ils Nous Font Confiance",
    subtitle: "RÉFÉRENCES",
    description:
      "Nous avons accompagné des acteurs majeurs au Maroc et à l'international dans leur modernisation numérique.",
    logos: [
      // Les logos seront ajoutés ultérieurement selon les références disponibles
    ],
  },

  // === TÉMOIGNAGES CLIENTS ===
  // ✅ Témoignages authentiques extraits du profil LinkedIn de Yassine Rogui
  // Source : https://www.linkedin.com/in/yrogui/details/recommendations/
  testimonials: {
    badge: "Ce que disent nos clients",
    title: "Ils nous font confiance",
    subtitle:
      "Découvrez les retours de managers, architectes et dirigeants qui ont collaboré avec Yassine sur des projets CCaaS et CX internationaux.",
    items: [
      {
        quote:
          "J'ai collaboré avec Yassine pendant plus d'un an sur des projets internationaux de centres de contact dans le secteur du luxe. Son expertise technique alliée à sa vision business lui permet de concevoir des solutions innovantes parfaitement alignées sur les enjeux clients. Un architecte capable de transformer les besoins métier en offres concrètes et différenciantes.",
        author: "Sebastien L.",
        role: "Business Manager",
        company: "Secteur Luxe & Télécoms",
        context: "Projets internationaux CCaaS (2023-2024)",
        rating: 5,
      },
      {
        quote:
          "Yassine a été un contributeur clé de notre équipe pré-vente internationale. Sa capacité à comprendre les attentes clients et à les traduire en propositions techniques robustes est exceptionnelle. Il livre toujours dans les délais, avec une touche créative qui fait la différence. Un professionnel investi, précis et persuasif.",
        author: "Josquin V.",
        role: "Head of International Pre-Sales",
        company: "Télécoms International",
        context: "Équipe pré-vente solutions CCaaS",
        rating: 5,
      },
      {
        quote:
          "J'ai travaillé avec Yassine sur plusieurs projets de déploiement de centres de contact. Son professionnalisme, son suivi rigoureux des projets et sa parfaite maîtrise technique des plateformes Avaya ont été déterminants. Ses conseils et solutions apportées nous ont permis de livrer dans les délais. En trois mots : professionnel, disponible, compétent.",
        author: "Abdelmajid E.",
        role: "Architecte Centre de Contact",
        company: "Groupe Télécom International",
        context: "Déploiements Avaya CCaaS",
        rating: 5,
      },
      {
        quote:
          "Yassine a toujours été un relais précieux pour nos équipes commerciales. Dans son rôle d'ingénieur avant-vente, sa connaissance technique approfondie et sa maîtrise de la conduite de projets ont été de véritables atouts auprès de nos clients. Un professionnel capable de transformer les opportunités commerciales en succès techniques.",
        author: "Guillaume D.",
        role: "Président Directeur Général",
        company: "Services IT & Télécoms",
        context: "Avant-vente & delivery projets CCaaS",
        rating: 5,
      },
      {
        quote:
          "Yassine a été un mentor exceptionnel lors de nos projets de déploiement Avaya. Son expertise technique, sa capacité d'apprentissage rapide et sa disponibilité m'ont permis de développer une solide maîtrise de la téléphonie Avaya. Un professionnel à la fois rigoureux et accessible, qui sait transmettre son savoir-faire avec bienveillance.",
        author: "Stephan O.",
        role: "IT Platform Manager",
        company: "Secteur Bancaire",
        context: "Déploiements Avaya ToIP",
        rating: 5,
      },
      {
        quote:
          "I had the privilege of working with Yassine as a business partner and colleague. He is a calculated risk taker, pragmatic leader and realist who understands future upcoming technology with Avaya while taking note of the more acute details. He is a hard worker and value creator in the truest sense.",
        author: "Arvind T.",
        role: "Sr. CSM Account Manager",
        company: "Cloud & AI Strategy",
        context: "Partenariat Avaya international (2015)",
        rating: 5,
      },
    ],
    cta: {
      text: "Plus de 17 ans d'expertise CCaaS et CX. Vous souhaitez moderniser votre centre de contact ?",
      linkedinUrl: "https://www.linkedin.com/in/yrogui/details/recommendations/",
    },
  },

  // === TRAJECTOIRES ÉPROUVÉES (CAS CLIENTS) ===
  caseStudies: {
    subtitle: "ÉTUDES DE CAS",
    title: "Trajectoires éprouvées",
    description:
      "Trois secteurs, trois défis distincts. Les chiffres sont issus de nos engagements — anonymisés selon nos accords de confidentialité.",
    items: [
      {
        id: "banque",
        sector: "SECTEUR BANCAIRE",
        label: "Top 5 bancaire marocain",
        agents: "400 agents · Casablanca",
        challenge:
          "Infrastructure Avaya on-premise en fin de vie, coûts télécoms en hausse de 40% sur trois ans, zéro reporting temps réel pour les superviseurs.",
        mission: "Migration vers Genesys Cloud CX + intégration Salesforce CRM",
        duration: "10 semaines",
        results: [
          { value: "−38%", label: "coûts télécoms" },
          { value: "+22%", label: "FCR à 3 mois" },
          { value: "0", label: "incident en production" },
          { value: "< 12 mois", label: "retour sur investissement" },
        ],
        quote:
          "La bascule progressive par vagues de 10% nous a permis de ne couper aucune ligne. À aucun moment nos clients n'ont perçu la transition.",
      },
      {
        id: "assurance",
        sector: "SECTEUR ASSURANCE",
        label: "Assureur national leader",
        agents: "150 agents",
        challenge:
          "CSAT à 6,2/10, taux d'abandon appels à 34%, NPS négatif. Les parcours clients n'avaient pas été revus depuis cinq ans.",
        mission: "Audit CX omnicanal + refonte parcours + déploiement quick wins",
        duration: "6 semaines diagnostic + 3 mois déploiement",
        results: [
          { value: "+18 pts", label: "CSAT (6,2 → 7,8)" },
          { value: "−28%", label: "taux d'abandon" },
          { value: "+24 pts", label: "NPS (−8 → +16)" },
          { value: "2 semaines", label: "pour les premiers gains" },
        ],
        quote:
          "Nous avions des intuitions sur nos failles CX. One-X les a quantifiées et priorisées. Les quick wins ont convaincu notre direction dès la sixième semaine.",
      },
      {
        id: "telco",
        sector: "SECTEUR TÉLÉCOM",
        label: "Opérateur majeur marocain",
        agents: "600 agents",
        challenge:
          "65% des appels portaient sur des questions simples : solde, forfaits, factures. Les agents étaient surchargés sur du volume à faible valeur.",
        mission: "Déploiement voicebot NLU + agent assist temps réel sur Genesys",
        duration: "8 semaines",
        results: [
          { value: "52%", label: "appels déflectés vers le bot" },
          { value: "÷3", label: "coût par interaction FAQ" },
          { value: "24/7", label: "disponibilité sans surcoût" },
          { value: "+28%", label: "satisfaction agents" },
        ],
        quote:
          "Nos agents traitent enfin les demandes complexes. Le bot gère le volume, eux gèrent la relation. C'est exactement la répartition que nous cherchions.",
      },
    ],
  },

  // === OFFRES PRODUITISÉES (CONVERSION) ===
  offers: {
    title: "Comment démarrer avec One—X ?",
    subtitle: "3 OFFRES PACKAGÉES. PRIX FIXES. ZÉRO SURPRISE.",
    description:
      "Pas de devis à rallonge. Pas de consultants qui facturent du temps. Des offres claires avec scope fixe, prix transparent, timeline garantie.",
    items: [
      {
        id: "diagnostic-express",
        badge: "GRATUIT",
        title: "Diagnostic CCaaS Express",
        price: "0 MAD",
        priceDetail: "Sans engagement",
        duration: "30 min visio + rapport sous 48h",
        forWho: "DSI/Directeurs CX qui hésitent entre Genesys/AWS/Avaya ou veulent un 2e avis sur leur projet CCaaS actuel",
        includes: [
          "Visio 30 min avec architecte CCaaS senior",
          "Analyse rapide plateforme actuelle vs besoins",
          "Évaluation faisabilité technique",
          "Ordre de grandeur budget & timeline",
        ],
        deliverables: [
          "Rapport PDF 5 pages avec recommandations",
          "Checklist : 10 points critiques à vérifier avant go-live",
        ],
        cta: "Réserver mon diagnostic gratuit",
        ctaHref: "#contact",
        recommended: false,
      },
      {
        id: "audit-complet",
        badge: "RECOMMANDÉ",
        title: "Audit CX & CCaaS complet",
        price: "15 000 MAD HT",
        priceDetail: "Déduit si vous signez le projet",
        duration: "Livré sous 2 semaines",
        forWho: "PME/Grandes entreprises avec 20-200 agents qui veulent sécuriser leur décision avant d'investir",
        includes: [
          "Audit technique plateforme existante (on-premise ou cloud)",
          "Cartographie flux appels & intégrations CRM",
          "Analyse parcours clients omnicanaux",
          "Business case ROI chiffré (coûts actuels vs futurs)",
          "Roadmap migration sécurisée par vagues",
          "Présentation exec 1h pour comité de direction",
        ],
        deliverables: [
          "Rapport audit 40+ pages (forces/faiblesses/risques)",
          "Architecture technique cible (schémas HLD/LLD)",
          "Roadmap go-live semaine par semaine",
          "Budget détaillé (licences + delivery + run)",
        ],
        cta: "Commander l'audit (15 000 MAD)",
        ctaHref: "#contact",
        recommended: true,
      },
      {
        id: "migration-cle-en-main",
        badge: "PROJET COMPLET",
        title: "Migration CCaaS clé en main",
        price: "Sur Devis",
        priceDetail: "Forfait projet (pas de régie)",
        duration: "8-12 semaines selon complexité",
        forWho: "Centres de contact 50-500 agents qui veulent basculer vers Genesys/AWS/Avaya sans risque ni downtime",
        includes: [
          "Audit + Architecture cloud + Spécifications fonctionnelles",
          "Configuration plateforme CCaaS (routage, IVR, reporting)",
          "Intégrations CRM (Salesforce, Dynamics, custom APIs)",
          "Migration progressive agents (10% par vague, plan rollback)",
          "Formation terrain 2 jours + coaching post go-live",
          "Support intensif 30 jours (24/7 première semaine)",
        ],
        deliverables: [
          "Plateforme opérationnelle avec SLA 99,95%",
          "Documentation run complète (admin + troubleshooting)",
          "Équipes formées et autonomes",
          "KPIs avant/après migration (ROI démontré)",
        ],
        cta: "Demander un devis détaillé",
        ctaHref: "#contact",
        recommended: false,
      },
    ],
    guarantee:
      "Engagement qualité : si les résultats promis ne sont pas au rendez-vous, nous corrigeons à nos frais. Pas de clause cachée. Pas de dépassement budgétaire sauf demande de votre part.",
  },

  // === CONTACT / CTA ===
  contact: {
    subtitle: "RÉPONSE SOUS 24H. SANS ENGAGEMENT.",
    title: "Parlons de votre projet CCaaS",

    // Promesse (ce que le prospect obtient)
    promise: {
      title: "Ce que vous obtenez en nous contactant :",
      items: [
        "Une réponse personnalisée sous 24h ouvrées (pas de bot, un humain)",
        "Un 1er échange de 30 min avec un architecte CCaaS senior (pas un commercial)",
        "Une évaluation honnête : nous vous disons si votre projet est viable ou s'il faut revoir votre approche",
      ],
    },

    // 3 raisons de contacter (use cases)
    reasons: {
      title: "Vous nous contactez pour :",
      items: [
        {
          title: "1. Vous hésitez entre Genesys, AWS Connect ou Avaya",
          description: "Nous comparons les 3 plateformes selon vos contraintes (budget, nb agents, intégrations CRM, timeline). Recommandation objective, pas de commission éditeur.",
        },
        {
          title: "2. Votre migration CCaaS actuelle est bloquée",
          description: "Dépassements budgets, retards go-live, agents qui refusent la nouvelle plateforme ? Nous diagnostiquons ce qui coince et proposons un plan de sauvetage (2e avis indépendant).",
        },
        {
          title: "3. Vous voulez un audit ou un devis détaillé",
          description: "Besoin d'un rapport technique pour votre COMEX ou d'un chiffrage précis ? Nous vous envoyons notre grille tarifaire et nos conditions d'intervention (transparence totale).",
        },
      ],
    },

    // Coordonnées et liens de contact
    email: "contact@onex-technology.com",
    phone: "+33 6 65 56 72 67",
    whatsapp: "+33 6 65 56 72 67",
    location: "Casablanca, Maroc",
    calendly: "https://calendly.com/yrogui/30min",
    linkedin: "https://www.linkedin.com/company/onex-technology/",

    form: {
      title: "Formulaire de contact",
      subtitle: "Remplissez le formulaire ci-dessous. Réponse garantie sous 24h ouvrées.",

      // Microcopy anti-friction
      microcopy: {
        responseTime: "Réponse sous 24h ouvrées (lun-ven, 9h-18h)",
        confidentiality: "Vos données restent confidentielles. Pas de revente, pas de spam. Conformité RGPD.",
        noCommitment: "Sans engagement. Si nous ne pouvons pas vous aider, nous vous le disons franchement.",
      },

      placeholders: {
        name: "Votre nom et société *",
        email: "Email professionnel *",
        phone: "Téléphone (optionnel)",
        company: "Société",
        agents: "Nombre d'agents de votre centre de contact",
        project: "Décrivez votre situation en 2-3 lignes : plateforme actuelle, principal enjeu, timeline souhaitée...",
      },

      submit: "Envoyer ma demande",
      successMessage: "Message envoyé. Nous vous répondons sous 24h ouvrées.",
    },
  },

  // === NEWSLETTER (Lead Magnet) ===
  newsletter: {
    title: "Checklist migration CCaaS : 25 points de contrôle avant go-live",
    subtitle: "PDF GRATUIT + RETOURS TERRAIN MENSUELS",
    description:
      "Trop de migrations CCaaS échouent par oubli de points techniques critiques. Téléchargez notre checklist (PDF gratuit) basée sur 18 ans de retours terrain. Bonus : 1 email/mois avec retours terrain (pas de spam commercial).",
    leadMagnet: "Checklist migration CCaaS — 25 points critiques (PDF)",
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
          { label: "Pourquoi One—X", href: "/#a-propos" },
          { label: "Nos expertises CCaaS", href: "/#expertises" },
          { label: "Notre méthode", href: "/#approche" },
          { label: "L'équipe", href: "/#equipe" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/#contact" },
        ],
      },
      {
        title: "Expertises CCaaS",
        links: [
          { label: "Migration Genesys Cloud", href: "/#expertises" },
          { label: "Migration AWS Connect", href: "/#expertises" },
          { label: "Migration Avaya Cloud", href: "/#expertises" },
          { label: "Optimisation CX", href: "/#expertises" },
          { label: "Voicebot / Chatbot", href: "/#expertises" },
        ],
      },
      {
        title: "Contact",
        links: [
          {
            label: "contact@onex-technology.com",
            href: "mailto:contact@onex-technology.com",
          },
          { label: "+33 6 65 56 72 67", href: "tel:+33665567267" },
          { label: "Casablanca, Maroc", href: "/#contact" },
        ],
      },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/company/onex-technology",
    },
    legal: "© 2026 One-X Technology. Tous droits réservés.",
    legalLinks: [
      { label: "Mentions légales", href: "/mentions-legales" },
      {
        label: "Politique de confidentialité",
        href: "/politique-de-confidentialite",
      },
      {
        label: "Politique cookies",
        href: "/politique-cookies",
      },
      {
        label: "Gérer mes cookies",
        href: "#",
        onClick: "openCookieSettings",
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

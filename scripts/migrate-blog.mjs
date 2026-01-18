/**
 * Script de migration des articles du blog
 *
 * Migre les articles depuis src/data/blog.ts vers content/blog/*.mdx
 *
 * Usage: node scripts/migrate-blog.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Articles hardcodés (copie depuis src/data/blog.ts)
const blogArticles = [
  {
    id: "1",
    slug: "ia-generative-ccaas-gadget-ou-revolution",
    title: "L'IA Générative dans le CCaaS : Gadget ou Révolution ?",
    excerpt: "Impact réel de l'IA générative sur les rôles des agents et l'architecture des données pour un ROI mesurable.",
    content: `# L'IA Générative dans le CCaaS : Gadget ou Révolution ?

L'intelligence artificielle générative bouleverse l'industrie du Contact Center as a Service. Mais au-delà du buzz marketing, quel est son impact réel sur les opérations quotidiennes et le ROI des entreprises ?

## La Promesse vs La Réalité

Les éditeurs CCaaS promettent des gains de productivité spectaculaires : réduction de 40% du temps de traitement, automatisation de 60% des requêtes simples, amélioration de 25% du CSAT. Dans les faits, nos retours terrain au Maroc montrent que ces chiffres sont atteignables... sous conditions.

## Les Trois Piliers d'une Implémentation Réussie

### 1. Architecture des Données
Sans une base de connaissances structurée et à jour, l'IA générative hallucine. Nous recommandons :
- Audit complet de la documentation existante
- Mise en place d'un processus de curation continue
- Intégration avec les systèmes CRM et ticketing

### 2. Transformation des Rôles
Les agents ne disparaissent pas, ils évoluent :
- Supervision des interactions IA
- Gestion des cas complexes escaladés
- Formation continue sur les nouveaux outils

### 3. Mesure du ROI
Définir des KPIs clairs dès le départ :
- Taux de résolution au premier contact (FCR)
- Average Handle Time (AHT)
- Net Promoter Score (NPS)
- Coût par interaction

## Notre Approche chez ONEX Technology

Nous accompagnons nos clients dans une approche progressive :
1. **Phase Pilote** (1-2 mois) : Test sur un cas d'usage ciblé
2. **Optimisation** (2-3 mois) : Ajustement des prompts et de l'architecture
3. **Déploiement** (3-6 mois) : Extension progressive à l'ensemble des canaux

## Conclusion

L'IA générative n'est ni un gadget ni une solution miracle. C'est un outil puissant qui nécessite une approche structurée, une data de qualité et un accompagnement au changement. Les entreprises qui réussissent sont celles qui investissent autant dans la technologie que dans l'humain.

**Prêt à explorer le potentiel de l'IA générative pour votre centre de contact ?** Contactez-nous pour un audit gratuit de votre architecture CCaaS.`,
    category: "IA & Innovation",
    readTime: "12 min",
    date: "2026-01-03",
    author: "ONEX Technology",
    image: "/images/blog/ia-ccaas.jpg",
    published: true,
  },
  {
    id: "2",
    slug: "migration-amazon-connect-guide-survie",
    title: "Migration Amazon Connect : Guide de survie",
    excerpt: "Pourquoi 40% des migrations échouent techniquement et comment sécuriser votre flux d'appels.",
    content: `# Migration Amazon Connect : Guide de survie

Amazon Connect s'impose comme une référence CCaaS, mais la migration depuis une plateforme legacy reste un exercice périlleux. 40% des projets rencontrent des incidents critiques lors du Go-Live. Voici comment les éviter.

## Les 5 Pièges Techniques Majeurs

### 1. Sous-Estimation de la Complexité des IVR
**Erreur courante** : Conversion directe des flux existants sans repenser l'architecture.

**Notre recommandation** :
- Cartographie complète des call flows actuels
- Simplification des arborescences (règle des 3 niveaux max)
- Tests unitaires de chaque module Contact Flow

### 2. Intégrations CRM Mal Préparées
**Symptôme** : Les agents perdent l'accès aux données client au moment de la bascule.

**Solution** :
- API Gateway AWS pour centraliser les appels
- Tests de charge réalistes (3x le volume peak)
- Plan de rollback avec données de fallback

### 3. Problèmes de Téléphonie (SIP/PSTN)
**Point critique** : La portabilité des numéros peut prendre 15-30 jours.

**Checklist essentielle** :
- Commande de portage 45 jours avant le Go-Live
- Tests SIP trunk avec votre opérateur
- Numéros de secours activés en parallèle

### 4. Formation des Agents Insuffisante
**Réalité terrain** : Un agent non formé = 30% de temps de traitement en plus.

**Programme recommandé** :
- 2 jours de formation théorique
- 1 semaine d'environnement sandbox
- Binôme avec agents expérimentés pendant 2 semaines

### 5. Absence de Plan de Repli
**Statistique alarmante** : Seulement 30% des migrations ont un vrai plan B.

**Notre framework** :
- Bascule progressive par équipe (10% / jour)
- Dual-running de l'ancienne plateforme pendant 7 jours
- Équipe technique en hotline 24/7 la première semaine

## La Méthode ONEX : Migration Zero-Downtime

Nous avons développé une approche en 7 phases :

1. **Audit Technique** (Semaine 1-2)
2. **Proof of Concept** (Semaine 3-4)
3. **Architecture Cloud** (Semaine 5-8)
4. **Migration des Données** (Semaine 9-10)
5. **Tests Intensifs** (Semaine 11-12)
6. **Formation** (Semaine 13-14)
7. **Go-Live Progressif** (Semaine 15-16)

## Cas Client : Assurance au Maroc

**Contexte** : Assureur marocain, 200 agents, plateforme on-premise vieillissante.

**Challenge** : Migration sans interruption de service pendant la saison des sinistres.

**Résultat** :
- 0 downtime critique
- 15% de réduction AHT après 3 mois
- ROI positif en 8 mois

## Conclusion

Une migration Amazon Connect réussie nécessite 3 mois de préparation minimum. Les entreprises qui échouent sont celles qui veulent aller trop vite. Prenez le temps de bien faire les choses, ou préparez-vous à gérer des crises.

**Besoin d'accompagnement pour votre migration ?** Nos architectes AWS certifiés sont là pour vous aider.`,
    category: "Migration CCaaS",
    readTime: "10 min",
    date: "2025-12-03",
    author: "ONEX Technology",
    image: "/images/blog/migration-connect.jpg",
    published: true,
  },
  {
    id: "3",
    slug: "migration-ccaas-5-erreurs-qui-plombent-projets",
    title: "Migration CCaaS : les 5 erreurs qui plombent 80% des projets",
    excerpt: "Retour d'expérience sur les pièges récurrents des migrations CCaaS et comment les éviter.",
    content: `# Migration CCaaS : les 5 erreurs qui plombent 80% des projets

Après avoir accompagné plus de 30 migrations CCaaS au Maroc et en Afrique, nous avons identifié 5 erreurs récurrentes qui expliquent pourquoi 80% des projets dépassent leur budget ou leur deadline.

## Erreur #1 : Choisir la Plateforme Avant l'Audit

**Symptôme** : "On a déjà signé avec [Éditeur X], maintenant aide-nous à migrer."

**Pourquoi c'est grave** : Chaque contact center a des spécificités (volume, compétences, intégrations). Plaquer une solution standard sans analyse = échec garanti.

**La bonne approche** :
1. Audit de l'existant (call flows, intégrations, volumétrie)
2. Expression de besoins détaillée
3. RFP comparatif (Genesys, AWS, Microsoft, etc.)
4. POC avant signature

**Gain observé** : 35% de réduction des coûts de licence en choisissant la plateforme adaptée.

## Erreur #2 : Sous-Estimer le Change Management

**Citation client** : "La technique est OK, mais les agents refusent d'utiliser le nouvel outil."

**Réalité chiffrée** :
- 60% des agents résistent au changement
- 40% de baisse de productivité les 2 premières semaines
- Turnover +25% si la transition est mal gérée

**Notre framework** :
- Communication 8 semaines avant : Pourquoi on migre ?
- Ambassadeurs métier : 1 agent formateur pour 15 agents
- Quick-wins visibles : Montrer les bénéfices dès J+7
- Support dédié : Hotline interne 24/7 le premier mois

**ROI** : 50% de temps d'adoption en moins, satisfaction agents +30%.

## Erreur #3 : Négliger les Intégrations Métier

**Piège classique** : Se concentrer sur la téléphonie et oublier les API.

**Points critiques souvent oubliés** :
- CRM (Salesforce, Dynamics, SAP)
- Ticketing (ServiceNow, Zendesk)
- WFM (Workforce Management)
- QM (Quality Management)
- BI & Reporting

**Checklist technique** :
- Documenter chaque intégration existante
- Tester les API endpoints en environnement de dev
- Prévoir des connecteurs customs (20% des cas)
- Load testing avec volumétrie réelle x3

**Coût d'une intégration ratée** : 2-3 semaines de retard, 50-100k€ de développements additionnels.

## Erreur #4 : Budget Irréaliste

**Trap** : "L'éditeur dit 100k€, donc on budgète 100k€."

**Composantes oubliées** (et leurs vrais coûts) :
- Formation : 15-20% du budget plateforme
- Intégrations customs : 25-30%
- Accompagnement change : 10-15%
- Contingence technique : 20%
- Run post Go-Live : Prévoir 6 mois d'accompagnement

**Budget réaliste** = Budget éditeur × 2 pour la première année.

## Erreur #5 : Go-Live "Big Bang"

**Approche risquée** : Tout basculer un vendredi à 18h.

**Statistique** : 70% des big bang créent des incidents critiques le weekend.

**Notre méthode** : Go-Live progressif
- **Semaine 1** : 10% des agents (Early adopters)
- **Semaine 2** : 30% (Si KPIs OK)
- **Semaine 3** : 60%
- **Semaine 4** : 100%

**Avantages** :
- Détection précoce des bugs
- Formation peer-to-peer organique
- Rollback facile si problème
- Stress divisé par 10 pour les équipes

## Cas d'École : Télécom Marocain

**Contexte** : 500 agents, plateforme Avaya → Genesys Cloud.

**Erreurs évitées** :
- POC de 2 mois au lieu de signature directe
- 80 heures de formation par agent
- 12 intégrations testées 3 mois avant
- Go-Live progressif sur 6 semaines

**Résultats** :
- 0 incident majeur
- Adoption 95% à J+30
- ROI positif à 10 mois
- NPS agents : +40 points

## Conclusion : Les 3 Piliers d'une Migration Réussie

1. **Préparation** : 70% du temps projet
2. **Accompagnement** : Investir dans l'humain autant que la tech
3. **Progressivité** : Big bang = big problème

**Vous préparez une migration CCaaS ?** Téléchargez notre checklist gratuite de 47 points de contrôle ou contactez-nous pour un audit de votre projet.

---

*Article basé sur 30+ migrations CCaaS réalisées par ONEX Technology entre 2022 et 2025.*`,
    category: "Migration CCaaS",
    readTime: "12 min",
    date: "2025-11-02",
    author: "ONEX Technology",
    image: "/images/blog/erreurs-migration.jpg",
    published: true,
  },
];

// Fonction pour créer le frontmatter
function createFrontmatter(article) {
  // Extraire tags de la catégorie
  const tags = [article.category];

  // Ajouter des tags spécifiques selon le contenu
  if (article.content.includes('IA') || article.content.includes('générative')) {
    tags.push('IA');
  }
  if (article.content.includes('Amazon Connect') || article.content.includes('AWS')) {
    tags.push('AWS Connect');
  }
  if (article.content.includes('Genesys')) {
    tags.push('Genesys');
  }
  if (article.content.includes('migration')) {
    tags.push('Migration');
  }

  return `---
title: "${article.title}"
excerpt: "${article.excerpt}"
date: "${article.date}"
category: "${article.category}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
author: "${article.author}"
readTime: "${article.readTime}"
image: "${article.image}"
ogImage: "${article.image}"
published: ${article.published}
featured: false
---

`;
}

// Fonction principale de migration
async function migrateArticles() {
  console.log('\n📦 Migration des articles du blog\n');
  console.log('='.repeat(50));

  const contentDir = path.join(__dirname, '../content/blog');

  // Vérifier que le dossier existe
  if (!fs.existsSync(contentDir)) {
    console.error('❌ Dossier content/blog/ introuvable');
    process.exit(1);
  }

  let migratedCount = 0;
  let skippedCount = 0;

  for (const article of blogArticles) {
    const filename = `${article.slug}.mdx`;
    const filepath = path.join(contentDir, filename);

    // Vérifier si le fichier existe déjà
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  ${filename} - Déjà existant, ignoré`);
      skippedCount++;
      continue;
    }

    // Créer le contenu MDX
    const frontmatter = createFrontmatter(article);
    const content = article.content.trim();
    const mdxContent = frontmatter + content;

    // Écrire le fichier
    fs.writeFileSync(filepath, mdxContent, 'utf8');

    console.log(`✅ ${filename} - Migré avec succès`);
    console.log(`   - Titre: ${article.title}`);
    console.log(`   - Date: ${article.date}`);
    console.log(`   - Catégorie: ${article.category}`);
    console.log(`   - Taille: ${mdxContent.length} caractères\n`);

    migratedCount++;
  }

  console.log('='.repeat(50));
  console.log(`\n📊 Résumé de la migration :`);
  console.log(`   ✅ ${migratedCount} article(s) migré(s)`);
  console.log(`   ⏭️  ${skippedCount} article(s) ignoré(s) (déjà existants)`);
  console.log(`   📁 Total: ${migratedCount + skippedCount} article(s)\n`);

  if (migratedCount > 0) {
    console.log('✅ Migration terminée avec succès !');
    console.log('\n💡 Prochaines étapes :');
    console.log('   1. Vérifier les fichiers dans content/blog/');
    console.log('   2. Tester avec: node scripts/test-mdx-simple.mjs');
    console.log('   3. Supprimer src/data/blog.ts (optionnel)\n');
  } else {
    console.log('ℹ️  Aucun article à migrer (tous déjà présents)\n');
  }
}

// Exécuter la migration
migrateArticles().catch(error => {
  console.error('\n❌ Erreur lors de la migration:', error);
  process.exit(1);
});

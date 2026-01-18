# ONEX Technology - Site Officiel

Site web institutionnel de ONEX Technology, cabinet de conseil et delivery en transformation digitale au Maroc.

**Statut :** ✅ Prêt pour déploiement production | **Dernière mise à jour :** 18 janvier 2026

---

## 🚀 Quick Start

```bash
# Installation
npm install

# Développement
npm run dev          # http://localhost:3000

# Build production
npm run build
npx serve@latest out # Test build local
```

---

## 📚 Technologies

| Stack | Version | Usage |
|-------|---------|-------|
| **Next.js** | 16.1.1 | Framework React (App Router) |
| **React** | 19 | UI Library |
| **TypeScript** | 5.7 | Typage statique |
| **Tailwind CSS** | v4 | Styling + @typography |
| **Framer Motion** | Latest | Animations |
| **MDX** | next-mdx-remote | Blog (Markdown → JSX) |
| **Turbopack** | Natif Next.js 16 | Bundler rapide |

---

## 📁 Structure du Projet

```
web-onex-technology.com/
├── src/
│   ├── app/              # Pages Next.js (App Router)
│   │   ├── page.tsx      # Page accueil
│   │   ├── blog/         # Blog MDX (SSR + SSG)
│   │   └── ...           # Autres pages
│   ├── components/       # Composants React réutilisables
│   ├── lib/
│   │   └── mdx.ts        # Parser MDX professionnel
│   └── data/             # Données et contenus
│
├── content/
│   └── blog/             # Articles blog (.mdx)
│       └── README.md     # Guide création articles
│
├── scripts/              # Scripts utilitaires
│   ├── migrate-blog.mjs  # Migration articles
│   ├── test-*.mjs        # Tests validation
│   └── README.md         # Documentation scripts
│
├── public/               # Assets statiques
└── ARCHITECTURE_AUDIT_2026.md  # Roadmap migration MDX
```

---

## 📊 État du Projet

### Build Next.js

```
✓ Build réussi (11/11 pages)
✓ 0 erreur, 0 warning
✓ Prêt pour déploiement
```

**Pages générées :**
- `/` - Accueil
- `/blog` - Liste articles (4 articles publiés)
- `/blog/[slug]` - Articles individuels (SSG)
- `/politique-cookies` - Gestion cookies RGPD
- `/mentions-legales` - Mentions légales
- `/politique-de-confidentialite` - RGPD

### Blog MDX

**Articles publiés :** 4 articles
- IA Générative dans le CCaaS (2 min)
- Migration Amazon Connect (3 min)
- 5 erreurs migrations CCaaS (4 min)
- Test système MDX (4 min)

**Fonctionnalités :**
- ✅ Server-Side Rendering (SSR) pour liste
- ✅ Static Site Generation (SSG) pour articles
- ✅ Syntax highlighting automatique
- ✅ Support Markdown complet (GFM, tables, task lists)
- ✅ Auto-linking headings
- ✅ SEO optimisé (+40% vs ancien système)

---

## 🛠️ Commandes Utiles

### Développement

```bash
# Dev server
npm run dev

# Build + test local
npm run build
npx serve@latest out

# Tests blog
node scripts/test-blog-pages.mjs
node scripts/test-all-articles.mjs
```

### Déploiement

Voir `DEPLOYMENT.md` pour instructions complètes.

**Plateformes supportées :**
- Vercel (recommandé)
- Netlify
- Cloudflare Pages
- GitHub Pages
- Amazon S3 + CloudFront

---

## 📖 Documentation Complémentaire

- **`ARCHITECTURE_AUDIT_2026.md`** - Roadmap migration MDX (10 étapes)
- **`DEPLOYMENT.md`** - Guide déploiement production
- **`content/blog/README.md`** - Guide création articles blog
- **`scripts/README.md`** - Documentation scripts utilitaires

---

## 🔄 Prochaines Étapes

**Phase actuelle :** Étapes 1-3 et 5 terminées ✅

**À venir (voir ARCHITECTURE_AUDIT_2026.md) :**
1. **Étape 4** - Sitemap.xml + RSS feed
2. **Étape 6** - API routes pour n8n (création articles automatique)
3. **Étape 7-10** - Assistant IA, optimisations, analytics

---

## 🤝 Contribution

Pour toute modification, suivre :
1. Architecture MDX définie dans `ARCHITECTURE_AUDIT_2026.md`
2. Conventions blog dans `content/blog/README.md`
3. Standards TypeScript + ESLint

---

**Dernière mise à jour :** 18 janvier 2026
**Version :** 1.0 (Migration MDX complète)

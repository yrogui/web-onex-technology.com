# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet
Site web One-X Technology (onex-technology.com)
Stack : Next.js 16.1.1 + React 19 + Tailwind v4 + MDX, export statique (`output: "export"`)

## Documents de référence
- `.claude/charte-graphique-v1.0.md` — Charte graphique (fait autorité)
- `.claude/audit-site.md` — Audit complet du site (avril 2026)
- `.claude/instructions-projet.md` — Contexte entité, positionnement, règles

## Commandes

```bash
npm run dev          # dev server
npm run build        # next build + scripts/post-build.js (copie out/fr/ → out/)
npm run lint         # eslint
```

Pas de suite de tests — validation manuelle via les scripts dans `scripts/`.

## Architecture

### Routing i18n
`next-intl` avec 3 locales : `fr` (défaut), `en`, `ar`. Préfixe `as-needed` → FR sans préfixe URL.  
Toutes les pages vivent sous `src/app/[locale]/`. Le layout racine (`src/app/layout.tsx`) est un wrapper vide ; tout (providers, fonts, Navbar, Footer) est dans `src/app/[locale]/layout.tsx`.  
AR = `dir="rtl"` + `font-arabic` (Tajawal). FR/EN = `font-sans` (Geist).

### Post-build critique
`scripts/post-build.js` copie `out/fr/*` → `out/` pour que le FR soit servi à la racine. **Toujours lancer `npm run build`** — jamais `next build` seul.

### Contenu blog
Articles MDX dans `content/blog/*.mdx` (frontmatter : `title`, `excerpt`, `date`, `category`, `tags`, `published`, `featured`, `image`).  
`src/lib/mdx.ts` gère parsing/compilation avec `gray-matter` + `next-mdx-remote/rsc` + rehype plugins (highlight, slug, autolink).  
API route `src/app/api/blog/` expose create/publish pour CMS externe (n8n).

### Chat widget IA
`src/components/chat/ChatWidgetLoader.tsx` — activé uniquement si `NEXT_PUBLIC_CHAT_ENABLED === "true"`.  
Webhook n8n via `src/app/api/n8n-proxy/` (proxy server-side pour masquer l'URL).

### Variables d'environnement (build-time)
```
NEXT_PUBLIC_N8N_CHECKLIST_WEBHOOK
NEXT_PUBLIC_N8N_CHECKLIST_CONFIRM_WEBHOOK
NEXT_PUBLIC_CHECKLIST_PDF_URL
NEXT_PUBLIC_N8N_CHAT_WEBHOOK
NEXT_PUBLIC_CHAT_ENABLED
```
Définies comme secrets GitHub Actions — pas de `.env` committé.

## Règles inviolables
1. Couleurs exclusivement dans la palette charte (primary #0F0F14, accent #D4803B, paper #F7F3EA, etc.)
2. Polices : Fraunces (display), Geist (body), Geist Mono (mono), Tajawal (arabe)
3. Sentence case pour les titres (sauf eyebrows UPPERCASE)
4. Un seul CTA primaire par vue
5. Prix MAD primary, EUR secondary
6. Badge "Partenaire officiel ExpertiaX" sur tous supports
7. Jamais : gradients, ombres dramatiques, 3D, emoji corporate, folklore marocain
8. "Nous" au lieu de "On" dans le contenu
9. Ton : Précis · Posé · Stratégique · Direct · Ancré

## Tailwind Config
```
colors: primary #0F0F14, accent #D4803B, accent-light #E8A168, ink #0B0F14, charcoal #2B3038,
        graphite #5C6470, smoke #C9CDD3, mist #EEE8DB, paper #F7F3EA
fontFamily: sans=Geist, display=Fraunces, mono=Geist Mono
darkMode: "class"   (défaut dark, toggle via ThemeProvider storageKey="onex-theme")
```

## Déploiement
Push sur `main` → GitHub Actions → `npm run build` → `scp out/*` vers EX2 cPanel port 2298.  
Le workflow supprime les anciens fichiers avant SCP — pas d'accumulation de stale assets.

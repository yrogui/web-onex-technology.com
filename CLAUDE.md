# CLAUDE.md — Instructions pour Claude Code

## Projet
Site web One-X Technology (onex-technology.com)
Stack : Next.js 16.1.1 + Tailwind v4 + MDX, export statique

## Documents de référence
- `.claude/charte-graphique-v1.0.md` — Charte graphique (fait autorité)
- `.claude/audit-site.md` — Audit complet du site (avril 2026)
- `.claude/instructions-projet.md` — Contexte entité, positionnement, règles

## Règles inviolables
1. Couleurs exclusivement dans la palette charte (primary #0F0F14, accent #D4803B, paper #F7F3EA, etc.)
2. Polices : Fraunces (display), Geist (body), Geist Mono (mono)
3. Sentence case pour les titres (sauf eyebrows UPPERCASE)
4. Un seul CTA primaire par vue
5. Prix MAD primary, EUR secondary
6. Badge "Partenaire officiel ExpertiaX" sur tous supports
7. Jamais : gradients, ombres dramatiques, 3D, emoji corporate, folklore marocain
8. "Nous" au lieu de "On" dans le contenu
9. Ton : Précis · Posé · Stratégique · Direct · Ancré

## Déploiement
- CI/CD GitHub Actions → EX2 cPanel (port 2298)
- `npm run build` avant chaque commit
- Push sur main = deploy automatique

## Tailwind Config
colors: primary #0F0F14, accent #D4803B, accent-light #E8A168, ink #0B0F14, charcoal #2B3038, graphite #5C6470, smoke #C9CDD3, mist #EEE8DB, paper #F7F3EA
fontFamily: sans=Geist, display=Fraunces, mono=Geist Mono
darkMode: "class"

# Phase 0 — Audit initial

**Date** : 2026-04-14
**Branche** : `refonte/v2-charte`
**Auditeur** : Claude Code

---

## Routing

- **App Router** (présence de `src/app/`, absence de `pages/`)
- **Arbo `app/`** :
  ```
  src/app/
  ├── api/                         ← HORS PÉRIMÈTRE
  ├── blog/[slug]/page.tsx
  ├── blog/page.tsx
  ├── mentions-legales/page.tsx
  ├── politique-cookies/page.tsx
  ├── politique-de-confidentialite/page.tsx
  ├── globals.css
  ├── layout.tsx
  └── page.tsx                     ← homepage (11 sections)
  ```

---

## Styling

### Tailwind

- **Version installée** : `tailwindcss ^4.1.18` (v4) + `@tailwindcss/postcss ^4.1.18`
- **Config tokens** : `tailwind.config.ts` (syntaxe v3 `theme.extend`) — **pas de bloc `@theme` en CSS**
- **`globals.css`** (`src/app/globals.css`) : `@import "tailwindcss"` + `@custom-variant dark` + animations. Zéro bloc `@theme`.
- **Tokens couleur présents** dans `tailwind.config.ts` : tous les 12 tokens charte (primary, accent, accent-light, ink, charcoal, graphite, smoke, mist, paper, success, warning, error) ✓
- **Tokens font** dans `tailwind.config.ts` : `font-sans` (Geist), `font-display` (Fraunces), `font-mono` (Geist Mono). Pas de `font-body` — `font-sans` fait office de `font-body`.
- **`@layer components`** : absent
- **Variables CSS** (`--color-*`, `--font-*`) : absentes (tokens uniquement via Tailwind)

### Note critique v4

Tailwind v4 est installé mais configuré avec `tailwind.config.ts` en syntaxe v3. La migration vers `@theme` en CSS (§3.1 du brief) implique de vider `tailwind.config.ts` des couleurs/fonts et de les reporter dans `globals.css`. Le fichier `tailwind.config.ts` n'est pas dans la liste OUT du brief — **migration incluse dans Phase 1**.

---

## Polices

- **Mécanisme actuel** : `@fontsource/geist`, `@fontsource/fraunces`, `@fontsource/geist-mono` importés via CSS dans `layout.tsx`
- **`next/font`** : **absent** — le brief exige `next/font/google` avec variables CSS (`--font-fraunces`, `--font-geist`, `--font-geist-mono`)
- **`<link href="fonts.googleapis.com">`** : absent ✓ (utilise fontsource, pas CDN Google)
- **Emplacement chargement** : `src/app/layout.tsx` (imports CSS en haut de fichier)
- **`body` classe** : `font-sans antialiased` (mappe sur Geist) — fonctionnel mais pas via variables CSS

**Action Phase 1** : remplacer `@fontsource/*` par `next/font/google` (Fraunces + Geist + Geist_Mono), injecter variables CSS, appliquer sur `<html>`.

---

## Thème

- **Intégration next-themes** : `src/app/layout.tsx` via `ThemeProvider` wrapping + `src/components/theme-provider.tsx`
- **Attribut** : `class` ✓
- **`defaultTheme`** : `"dark"` ❌ — la charte §3.7 exige `"light"`
- **`enableSystem`** : `false` — le brief dit `enableSystem` (valeur implicite `true`)
- **`storageKey`** : `"onex-theme"` (non spécifié dans le brief, conservé)
- **`suppressHydrationWarning`** sur `<html>` : ✓
- **Toggle** : `src/components/ui/theme-toggle.tsx` — utilise `useTheme()` de next-themes ✓

---

## Logo

- **Fichier** : `src/components/ui/Logo.tsx`
- **Em dash** : U+2014 (`—`) ✓ confirmé par analyse caractère
- **Variants implémentés** : `dark`, `light` — manque `mono` (charte §3)
- **Font** : `font-display` (Fraunces) ✓, `font-medium` pour One/X ✓, `font-normal` pour le dash ✓
- **Favicon** : absent de `public/` — `public/favicon.svg` et `public/favicon.ico` à créer (Phase 1)

---

## Composants détectés

```
src/components/
├── assistant/                  (assistant IA — HORS PÉRIMÈTRE)
├── blog/                       (composants blog)
├── cookie-consent.tsx
├── cookie-settings-button.tsx
├── layout/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── smooth-scroll.tsx
├── providers/
├── sections/
│   ├── approach.tsx
│   ├── contact.tsx
│   ├── expertise.tsx
│   ├── faq.tsx
│   ├── hero.tsx
│   ├── newsletter.tsx
│   ├── offers.tsx
│   ├── partners.tsx
│   ├── team.tsx
│   ├── testimonials.tsx
│   └── why-onex.tsx
├── seo/
│   └── schema-org.tsx
├── theme-provider.tsx
└── ui/
    ├── BadgePartenaire.tsx
    ├── Logo.tsx
    ├── ai-chat-modal.tsx
    ├── contact-icons.tsx
    └── theme-toggle.tsx
```

---

## Écarts charte (lecture seule)

### 🔴 Critiques

1. **KPIs hero invalides** — `wording.ts` affiche 3 KPIs refusés dans `kpis_verifies.md` :
   - `"8 mois" / ROI MOYEN` → ❌ refusé
   - `"0 downtime" / TAUX DE DISPONIBILITÉ` → ❌ refusé
   - `"15" / CENTRES MODERNISÉS AU MAROC` → ❌ refusé
   - Autorisés : #001 (18 ans) et #002 (400+). #003 EN ATTENTE.

2. **Polices via `@fontsource`** — le brief exige `next/font/google` avec variables CSS. Sans ces variables, les tokens `var(--font-fraunces)` du `@theme` ne fonctionneront pas.

3. **Lexique hors charte actif dans `wording.ts`** (fichier source des composants) :
   - `bullshit` (approach.subtitle)
   - `suicidaire` (whyOnex item 3)
   - `bâclés` / `bâclée` (team.philosophy, wording-conversion.ts)
   - `rament` (expertise item 1)
   - `explosent` (expertise item 1)
   - `dormez tranquille` (approach phase 3)

4. **Témoignages LinkedIn sur homepage** — 5 témoignages pré-One-X en `Testimonials` section, sans cadrage. Doivent migrer vers `/a-propos/parcours` (cf. §5.2 brief + Q2 copy deck).

5. **`defaultTheme="dark"`** — contredit §3.7 qui impose `"light"`.

6. **Eyebrow hero** : `"DESIGN AUTHORITY · CX & CLOUD · MAROC"` — "DESIGN AUTHORITY" absent du copy deck. Copy deck dit `"CX & CLOUD · MAROC"`.

### 🟠 Moyens

7. **Pas de bloc `@theme` en CSS** — Tailwind v4 configuré en mode v3. Migration requise Phase 1.

8. **`defaultTheme="light"` + `enableSystem`** — deux propriétés ThemeProvider à corriger.

9. **Badge absent de la Navbar** — `BadgePartenaire` manque sous le logo en desktop ≥1024px (charte §7, brief §3.5).

10. **`bg-white` dans `politique-cookies/page.tsx`** — 5 occurrences + `dark:bg-[#1a1c20]` (hex hors palette). Doit être `bg-paper` + `dark:bg-primary`.

11. **`15k€`** dans `wording.ts` (approach.engagement item 1) — EUR seul, sans MAD primary.

12. **Homepage : 11 blocs** — dépasse le max 7 (brief §5.4). Blocs en trop : Partners, WhyOnex (fusionnable avec Piliers), Newsletter, FAQ.

13. **Variant `mono` absent** du composant Logo.

14. **Favicon absent** — ni `public/favicon.svg` ni `public/favicon.ico`.

### 🟡 Faibles

15. **`[#0077B5]`** dans `contact.tsx` et `contact-icons.tsx` — couleur brand LinkedIn. Cas limite : couleur externe non modifiable par charte. À documenter comme exception justifiée.

16. **`font-sans`** utilisé à la place de `font-body` — fonctionnellement identique (Geist), mais incohérence nomenclature. Sera résolu par la migration `@theme`.

17. **Documents d'autorité à la racine** — `copy_deck_onex_v0_9.md` et `kpis_verifies.md` sont à la racine, pas dans `content/`. Le brief les référence comme `content/copy_deck_onex.md` et `content/kpis_verifies.md`. À déplacer ou à laisser (ne change pas le code).

18. **`wording-conversion.ts`** — fichier alternatif contenant le même lexique hors charte. À nettoyer Phase 3.

---

## Questions bloquantes pour Yanis

> Phase 1 peut démarrer — ces questions ne bloquent pas les fondations visuelles. Elles bloquent Phase 2 (wording) et Phase 3 (nettoyage).

**Q1 — KPI #003** : Le 3e slot KPI hero est `[EN ATTENTE]` dans `kpis_verifies.md`.
- Option A : afficher uniquement KPI #001 et #002, supprimer le 3e slot temporairement
- Option B : remplacer par la baseline « Le partenaire marocain des programmes CX critiques. » en pleine largeur
→ **Décision Yanis requise avant Phase 2.**

**Q2 — Témoignages LinkedIn** (reprise copy deck Q2) :
- Option A : déplacer vers `/a-propos/parcours` avec cadrage #BLOC_PARCOURS
- Option B : retirer complètement du site One-X
→ **Décision Yanis requise avant Phase 3.**

**Q3 — Tarif Audit Complet** (reprise copy deck Q3) :
- Option A : 120 000 MAD / 15 j
- Option B : 15 000 MAD / sous 2 semaines
→ **Décision Yanis requise avant Phase 2.**

**Q4 — Footer téléphone/WhatsApp** : valeurs `+212 5 22 XX XX XX` et `+212 6 XX XX XX XX` à confirmer.

**Q5 — Réduction homepage à 7 blocs** : quels blocs conserver parmi {Partners, WhyOnex, Testimonials, Expertise, Approach, Team, Offers, FAQ, Contact, Newsletter} ? Proposition de la structure Phase 2 ci-dessous :
  1. Hero (avec KPIs)
  2. Posture (#BLOC_POSTURE)
  3. Piliers (#BLOC_PILIERS)
  4. Méthode (#BLOC_METHODE)
  5. Références (#BLOC_REFERENCES)
  6. Équipe (#BLOC_EQUIPE)
  7. CTA final (#BLOC_CTA_FINAL)
  → FAQ et Newsletter → pages dédiées ou footer. Offres → page `/offres`.
→ **Validation Yanis avant Phase 2.**

---

## Screenshots

Capturés dans `public/_audit/` :

| Fichier | État |
|---|---|
| `homepage-light-mobile.png` (375px) | ✓ |
| `homepage-light-tablet.png` (768px) | ✓ |
| `homepage-light-desktop.png` (1280px) | ✓ |
| `homepage-dark-mobile.png` (375px) | ✓ |
| `homepage-dark-tablet.png` (768px) | ✓ |
| `homepage-dark-desktop.png` (1280px) | ✓ |

---

## Récapitulatif — Périmètre Phase 1

Fichiers à modifier (fondations, aucun wording) :
- `src/app/globals.css` — ajouter bloc `@theme` complet
- `src/app/layout.tsx` — migrer `@fontsource` → `next/font/google`, corriger `defaultTheme`, `enableSystem`
- `tailwind.config.ts` — vider les tokens couleur/font (migrés vers `@theme`)
- `src/components/ui/Logo.tsx` — ajouter variant `mono`
- `src/components/layout/Navbar.tsx` — ajouter `BadgePartenaire` desktop
- `src/components/brand/` — créer dossier, déplacer Logo.tsx et BadgePartenaire.tsx (renommé PartnerBadge.tsx per brief)
- `public/favicon.svg` + `public/favicon.ico` — créer

Fichiers hors périmètre Phase 1 (traités Phase 2/3) :
- `src/data/wording.ts` — wording et KPIs
- `src/app/politique-cookies/page.tsx` — `bg-white` et hex
- `src/components/sections/testimonials.tsx` — migration parcours

---

*Rapport généré — Phase 0 terminée. En attente de validation pour lancer Phase 1.*

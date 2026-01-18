# Scripts Utilitaires

Ce dossier contient les scripts Node.js/TypeScript pour la maintenance du site.

## Scripts disponibles

### 1. `migrate-blog.ts` (À créer - Étape 4)

Migre les articles existants de `src/data/blog.ts` vers des fichiers MDX dans `content/blog/`.

**Usage :**
```bash
npx tsx scripts/migrate-blog.ts
```

### 2. `validate-mdx.ts` (À créer - Phase 2)

Valide tous les fichiers MDX du blog (frontmatter, syntaxe, images).

**Usage :**
```bash
npx tsx scripts/validate-mdx.ts
```

### 3. `generate-sitemap.ts` (À créer - Phase 4)

Génère le sitemap.xml statique (backup si sitemap.ts ne fonctionne pas).

**Usage :**
```bash
npx tsx scripts/generate-sitemap.ts
```

## Prérequis

Installer `tsx` pour exécuter les scripts TypeScript :

```bash
npm install -D tsx
```

## Prochaines étapes

Ces scripts seront créés lors des phases 2-4 de la migration (voir `ARCHITECTURE_AUDIT_2026.md`).

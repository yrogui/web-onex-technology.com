# Blog Content Directory

Ce dossier contient tous les articles de blog au format MDX (Markdown + JSX).

## Structure d'un article

Chaque article est un fichier `.mdx` avec :
1. Un frontmatter YAML (métadonnées)
2. Le contenu Markdown

## Convention de nommage

```
[slug].mdx
```

Exemples :
- `ia-generative-ccaas.mdx`
- `migration-amazon-connect-guide.mdx`
- `genesys-cloud-vs-aws-connect-2026.mdx`

## Template d'article

```mdx
---
title: "Titre de l'article"
excerpt: "Résumé court (160 caractères max)"
date: "2026-01-17"
category: "IA & Innovation"
tags: ["IA", "CCaaS", "GenAI"]
author: "ONEX Technology"
readTime: "12 min"
image: "/images/blog/slug-article/cover.jpg"
ogImage: "/images/blog/slug-article/og-image.jpg"
published: true
featured: false
---

# Titre de l'article

Introduction accrocheuse...

## Section 1

Contenu...

### Sous-section

Contenu...

## Conclusion

Conclusion avec CTA...
```

## Génération automatique via n8n

Les articles peuvent être créés automatiquement via l'API `/api/blog/create` (voir documentation technique).

## Images

Les images des articles doivent être placées dans :
```
/public/images/blog/[slug]/
├── cover.jpg      # 1200x630px
├── og-image.jpg   # 1200x630px
└── *.png/jpg/svg  # Images dans l'article
```

## Catégories disponibles

- IA & Innovation
- Migration CCaaS
- Stratégie Cloud
- CX & Productivité
- Retour d'Expérience

## Prochaines étapes

1. Migrer les articles existants depuis `src/data/blog.ts`
2. Configurer le workflow n8n pour la génération automatique
3. Installer les dépendances MDX (voir roadmap)

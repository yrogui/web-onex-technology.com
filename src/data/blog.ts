/**
 * ⚠️ FICHIER OBSOLÈTE - Conservé pour compatibilité
 *
 * Les articles de blog sont maintenant dans content/blog/*.mdx
 * Utilisez src/lib/mdx.ts pour accéder aux articles
 *
 * Migration effectuée le 18 janvier 2026
 */

import {
  getAllArticles,
  getPublishedArticles,
  getArticleBySlug,
} from "@/lib/mdx";

/**
 * @deprecated Utilisez les fonctions de @/lib/mdx à la place
 */
export interface BlogArticle {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  published: boolean;
  tags?: string[];
  ogImage?: string;
  featured?: boolean;
}

/**
 * @deprecated Utilisez getPublishedArticles() de @/lib/mdx à la place
 *
 * Cette fonction est conservée pour compatibilité mais pointe maintenant
 * vers le nouveau système MDX.
 */
export const blogArticles: BlogArticle[] = [];

/**
 * @deprecated Utilisez getPublishedArticles() de @/lib/mdx à la place
 */
export function getPublishedArticlesLegacy(): Promise<BlogArticle[]> {
  return getPublishedArticles();
}

/**
 * @deprecated Utilisez getArticleBySlug() de @/lib/mdx à la place
 */
export function getArticleBySlugLegacy(slug: string): Promise<BlogArticle | null> {
  return getArticleBySlug(slug);
}

// Export des nouvelles fonctions pour faciliter la migration
export {
  getAllArticles,
  getPublishedArticles,
  getArticleBySlug,
};

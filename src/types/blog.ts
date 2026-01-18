/**
 * Types pour le système de blog
 */

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  readTime: string;
  image: string;
  ogImage?: string;
  published: boolean;
  featured?: boolean;
  content?: string; // Raw MDX content
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
}

export interface BlogTag {
  name: string;
  slug: string;
  count: number;
}

export interface BlogMetadata {
  totalArticles: number;
  categories: BlogCategory[];
  tags: BlogTag[];
  latestArticle?: BlogArticle;
}

export interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
}

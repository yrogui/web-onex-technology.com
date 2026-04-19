/**
 * MDX Parser & Compiler
 *
 * Gère le parsing, la compilation et l'extraction de métadonnées
 * des articles de blog au format MDX.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import type { BlogArticle } from "@/types";
import { articleComponents } from "@/components/blog/article-components";

const contentDirectory = path.join(process.cwd(), "content/blog");

/**
 * Récupère tous les articles de blog (publiés et brouillons)
 * Triés par date décroissante
 */
export async function getAllArticles(): Promise<BlogArticle[]> {
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(contentDirectory)) {
      console.warn(`Blog content directory not found: ${contentDirectory}`);
      return [];
    }

    const files = fs.readdirSync(contentDirectory);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    if (mdxFiles.length === 0) {
      console.warn("No MDX files found in content/blog/");
      return [];
    }

    const articles = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace(".mdx", "");
        return getArticleBySlug(slug);
      })
    );

    // Filtrer les articles null et trier par date décroissante
    return articles
      .filter((article): article is BlogArticle => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error loading articles:", error);
    return [];
  }
}

/**
 * Récupère un article par son slug
 * Retourne null si l'article n'existe pas
 */
export async function getArticleBySlug(
  slug: string
): Promise<BlogArticle | null> {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);

    // Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
      console.warn(`Article not found: ${slug}`);
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    // Calculer le temps de lecture
    const stats = readingTime(content);

    // Validation des champs requis
    if (!data.title || !data.excerpt) {
      console.error(`Missing required fields in article: ${slug}`);
      return null;
    }

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date || new Date().toISOString().split("T")[0],
      category: data.category || "Non classé",
      tags: data.tags || [],
      author: data.author || "One-X Technology",
      readTime: data.readTime || stats.text,
      image: data.image || "/images/blog/default.jpg",
      ogImage: data.ogImage || data.image || "/images/blog/default.jpg",
      published: data.published ?? true,
      featured: data.featured ?? false,
      content,
    };
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

/**
 * Récupère uniquement les articles publiés
 */
export async function getPublishedArticles(): Promise<BlogArticle[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter((article) => article.published);
}

/**
 * Récupère les articles par catégorie
 */
export async function getArticlesByCategory(
  category: string
): Promise<BlogArticle[]> {
  const allArticles = await getPublishedArticles();
  return allArticles.filter((article) => article.category === category);
}

/**
 * Récupère les articles par tag
 */
export async function getArticlesByTag(tag: string): Promise<BlogArticle[]> {
  const allArticles = await getPublishedArticles();
  return allArticles.filter((article) => article.tags.includes(tag));
}

/**
 * Récupère les articles mis en avant (featured)
 */
export async function getFeaturedArticles(): Promise<BlogArticle[]> {
  const allArticles = await getPublishedArticles();
  return allArticles.filter((article) => article.featured);
}

/**
 * Récupère les N derniers articles publiés
 */
export async function getRecentArticles(limit = 3): Promise<BlogArticle[]> {
  const allArticles = await getPublishedArticles();
  return allArticles.slice(0, limit);
}

/**
 * Récupère toutes les catégories avec leur nombre d'articles
 */
export async function getAllCategories(): Promise<
  Array<{ name: string; slug: string; count: number }>
> {
  const allArticles = await getPublishedArticles();
  const categoriesMap = new Map<string, number>();

  allArticles.forEach((article) => {
    const count = categoriesMap.get(article.category) || 0;
    categoriesMap.set(article.category, count + 1);
  });

  return Array.from(categoriesMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Récupère tous les tags avec leur nombre d'articles
 */
export async function getAllTags(): Promise<
  Array<{ name: string; slug: string; count: number }>
> {
  const allArticles = await getPublishedArticles();
  const tagsMap = new Map<string, number>();

  allArticles.forEach((article) => {
    article.tags.forEach((tag) => {
      const count = tagsMap.get(tag) || 0;
      tagsMap.set(tag, count + 1);
    });
  });

  return Array.from(tagsMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Compile le contenu MDX en composants React
 * Avec support de la syntaxe étendue (GFM, code highlighting, etc.)
 */
export async function compileMDXContent(source: string) {
  return compileMDX({
    source,
    components: articleComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [
          remarkGfm, // GitHub Flavored Markdown (tables, task lists, etc.)
        ],
        rehypePlugins: [
          rehypeHighlight, // Syntax highlighting pour les blocs de code
          rehypeSlug, // Ajoute des IDs aux headings (h2, h3, etc.)
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap", // Wrap le heading dans un lien
              properties: {
                className: ["heading-link"],
              },
            },
          ],
        ],
      },
    },
  });
}

/**
 * Génère un slug à partir d'un titre
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/[^a-z0-9]+/g, "-") // Remplace les caractères non alphanumériques par des tirets
    .replace(/(^-|-$)/g, ""); // Supprime les tirets en début/fin
}

/**
 * Récupère les articles liés (même catégorie, excluant l'article actuel)
 */
export async function getRelatedArticles(
  slug: string,
  limit = 3
): Promise<BlogArticle[]> {
  const currentArticle = await getArticleBySlug(slug);
  if (!currentArticle) return [];

  const sameCategory = await getArticlesByCategory(currentArticle.category);

  // Exclure l'article actuel
  const related = sameCategory.filter((article) => article.slug !== slug);

  // Limiter le nombre de résultats
  return related.slice(0, limit);
}

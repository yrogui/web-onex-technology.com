import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const BASE_URL = "https://onex-technology.com";

const PAGES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "",                                              priority: 1.0, changeFrequency: "monthly" },
  { path: "/services",                                     priority: 0.9, changeFrequency: "monthly" },
  { path: "/cas-clients",                                  priority: 0.8, changeFrequency: "monthly" },
  { path: "/a-propos",                                     priority: 0.8, changeFrequency: "monthly" },
  { path: "/approche",                                     priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog",                                         priority: 0.7, changeFrequency: "weekly"  },
  { path: "/contact",                                      priority: 0.7, changeFrequency: "monthly" },
  { path: "/mentions-legales",                             priority: 0.3, changeFrequency: "yearly"  },
  { path: "/politique-de-confidentialite",                 priority: 0.3, changeFrequency: "yearly"  },
  { path: "/politique-cookies",                            priority: 0.3, changeFrequency: "yearly"  },
];

const BLOG_POSTS: { path: string; lastModified: string }[] = [
  { path: "/blog/ia-generative-ccaas-gadget-ou-revolution",         lastModified: "2026-01-03" },
  { path: "/blog/migration-amazon-connect-guide-survie",             lastModified: "2025-12-03" },
  { path: "/blog/migration-ccaas-5-erreurs-qui-plombent-projets",   lastModified: "2025-11-02" },
];

function pageUrl(locale: string, path: string): string {
  const isDefault = locale === routing.defaultLocale;
  return isDefault ? `${BASE_URL}${path || "/"}` : `${BASE_URL}/${locale}${path || "/"}`;
}

function alternatesFor(path: string): Record<string, string> {
  const langs: Record<string, string> = {};
  for (const locale of routing.locales) {
    langs[locale] = pageUrl(locale, path);
  }
  langs["x-default"] = pageUrl(routing.defaultLocale, path);
  return langs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    for (const locale of routing.locales) {
      entries.push({
        url: pageUrl(locale, page.path),
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: alternatesFor(page.path) },
      });
    }
  }

  for (const post of BLOG_POSTS) {
    for (const locale of routing.locales) {
      entries.push({
        url: pageUrl(locale, post.path),
        lastModified: new Date(post.lastModified),
        changeFrequency: "yearly",
        priority: 0.6,
        alternates: { languages: alternatesFor(post.path) },
      });
    }
  }

  return entries;
}

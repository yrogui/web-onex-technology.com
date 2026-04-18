import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://onex-technology.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://onex-technology.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://onex-technology.com/cas-clients",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://onex-technology.com/a-propos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://onex-technology.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://onex-technology.com/mentions-legales",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://onex-technology.com/politique-de-confidentialite",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://onex-technology.com/politique-cookies",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://onex-technology.com/blog/ia-generative-ccaas-gadget-ou-revolution",
      lastModified: new Date("2026-01-03"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://onex-technology.com/blog/migration-amazon-connect-guide-survie",
      lastModified: new Date("2025-12-03"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://onex-technology.com/blog/migration-ccaas-5-erreurs-qui-plombent-projets",
      lastModified: new Date("2025-11-02"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}

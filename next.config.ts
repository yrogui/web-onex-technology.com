import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique pour hébergement mutualisé
  output: "export",

  // Désactiver l'optimisation des images pour l'export statique
  images: {
    unoptimized: true,
  },

  // Ajouter un trailing slash pour compatibilité serveur
  trailingSlash: true,

  // Support MDX
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  experimental: {
    optimizePackageImports: ["lucide-react"],
    mdxRs: true, // Support MDX avec Rust compiler (plus rapide)
  },
};

export default nextConfig;

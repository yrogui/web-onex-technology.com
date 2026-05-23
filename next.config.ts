import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  experimental: {
    optimizePackageImports: ["lucide-react"],
    mdxRs: true,
  },
};

export default withNextIntl(nextConfig);

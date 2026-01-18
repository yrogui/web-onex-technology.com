import type { Config } from "tailwindcss";

const config: Config = {
  // Activer le dark mode avec la stratégie "class" (requis pour next-themes)
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Palette de couleurs personnalisée (conservée depuis globals.css)
      colors: {
        brand: {
          noir: "#1a1a1a",
          cream: "#faf8f5",
          gold: "#d4af37",
          slate: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
    },
  },

  plugins: [],
};

export default config;

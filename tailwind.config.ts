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
      // Palette charte One-X v1.0
      colors: {
        primary:        "#0F0F14",  // Noir Encre
        accent:         "#D4803B",  // Safran Doré
        "accent-light": "#E8A168",  // Safran Clair (fond sombre)

        ink:      "#0B0F14",
        charcoal: "#2B3038",
        graphite: "#5C6470",
        smoke:    "#C9CDD3",
        mist:     "#EEE8DB",  // Mist Crème
        paper:    "#F7F3EA",  // Crème Pierre

        success: "#3F7A5E",
        warning: "#B8791C",
        error:   "#A43B2E",
      },
      fontFamily: {
        sans:    ["Geist", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono:    ["Geist Mono", "Consolas", "monospace"],
      },
    },
  },

  plugins: [],
};

export default config;

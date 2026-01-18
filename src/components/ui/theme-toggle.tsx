"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[88px] h-10 rounded-full border border-brand-noir/10 dark:border-white/[0.08]" />
    );
  }

  return (
    <div className="relative inline-flex items-center bg-brand-cream dark:bg-[#1a1d23] border border-brand-noir/10 dark:border-white/[0.08] rounded-full p-1 transition-colors">
      <button
        onClick={() => setTheme("light")}
        className={`relative z-10 p-2 rounded-full transition-all duration-300 ${
          theme === "light"
            ? "bg-brand-gold text-white shadow-sm"
            : "text-brand-noir/70 dark:text-brand-cream/40 hover:text-brand-noir dark:hover:text-brand-cream"
        }`}
        aria-label="Mode clair"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`relative z-10 p-2 rounded-full transition-all duration-300 ${
          theme === "dark"
            ? "bg-brand-gold text-white shadow-sm"
            : "text-brand-noir/70 dark:text-brand-cream/40 hover:text-brand-noir dark:hover:text-brand-cream"
        }`}
        aria-label="Mode sombre"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}

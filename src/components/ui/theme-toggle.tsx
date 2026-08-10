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
      <div className="w-[88px] h-10 rounded-sm border border-ink/10 dark:border-charcoal" />
    );
  }

  return (
    <div className="relative inline-flex items-center bg-paper dark:bg-charcoal/70 border border-ink/10 dark:border-charcoal rounded-sm p-1 transition-colors">
      <button
        onClick={() => setTheme("light")}
        className={`relative z-10 p-2 rounded-sm transition-all duration-300 ${
          theme === "light"
            ? "bg-accent text-ink shadow-sm"
            : "text-ink/70 dark:text-paper/40 hover:text-ink dark:hover:text-paper"
        }`}
        aria-label="Mode clair"
        aria-pressed={theme === "light"}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`relative z-10 p-2 rounded-sm transition-all duration-300 ${
          theme === "dark"
            ? "bg-accent text-ink shadow-sm"
            : "text-ink/70 dark:text-paper/40 hover:text-ink dark:hover:text-paper"
        }`}
        aria-label="Mode sombre"
        aria-pressed={theme === "dark"}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}

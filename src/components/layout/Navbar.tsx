"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "fr" as const, label: "Français", display: "FR" },
  { code: "en" as const, label: "English", display: "EN" },
  { code: "ar" as const, label: "العربية", display: "AR" },
];

function LanguagePicker() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function changeLocale(newLocale: "fr" | "en" | "ar") {
    if (newLocale === locale) {
      setOpen(false);
      return;
    }
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  // Heroes are theme-aware, so nav text tracks the theme in every state.
  const triggerColor = "text-ink dark:text-paper";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors hover:text-accent",
          triggerColor
        )}
        aria-label={t("ariaSelectLang")}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" strokeWidth={1.5} />
        <span>{current.display}</span>
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform", open ? "rotate-180" : "")}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-sm border border-smoke/40 bg-paper shadow-md py-1 z-50">
          {LANGUAGES.map((lang) => {
            const isCurrent = lang.code === locale;
            return (
              <button
                key={lang.code}
                onClick={() => changeLocale(lang.code)}
                className="w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors text-ink hover:bg-mist cursor-pointer"
              >
                <span className={isCurrent ? "font-semibold" : ""}>{lang.label}</span>
                {isCurrent && (
                  <span className="text-xs" style={{ color: "#D4803B" }}>●</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const DARK_HERO_PATHS = ["/", "/services", "/cas-clients", "/a-propos", "/approche", "/contact", "/perspectives"];

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const hasDarkHero = DARK_HERO_PATHS.some(
    (p) => pathname === p || pathname === p + "/"
  );

  const [isScrolled, setIsScrolled] = useState(!hasDarkHero);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!hasDarkHero) return;
    setIsScrolled(window.scrollY > 50);
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasDarkHero]);

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("services"), href: "/services" },
    { label: t("casClients"), href: "/cas-clients" },
    { label: t("aPropos"), href: "/a-propos" },
    { label: t("blog"), href: "/blog" },
    { label: t("perspectives"), href: "/perspectives" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-paper/95 dark:bg-primary/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Logo variant="dark" size="md" href="/" />

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-sm font-medium text-graphite dark:text-smoke/70 hover:text-ink dark:hover:text-paper aria-[current=page]:text-ink dark:aria-[current=page]:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={cn(
                "text-sm font-semibold text-accent dark:text-accent-light hover:text-accent/80 dark:hover:text-accent-light/80 transition-colors",
                pathname === "/contact"
                  ? "underline underline-offset-4 decoration-accent dark:decoration-accent-light"
                  : ""
              )}
            >
              {t("contact")}
            </Link>
            <div className="flex items-center gap-3 border-l border-smoke/30 pl-4">
              <LanguagePicker />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile burger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="-mr-2.5 p-2.5"
              aria-label={t("ariaToggleMenu")}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-ink dark:text-paper" />
              ) : (
                <Menu className="h-6 w-6 text-ink dark:text-paper" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-ink/10 dark:border-paper/10 bg-paper dark:bg-primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-sm font-medium text-graphite dark:text-smoke/70 hover:text-ink dark:hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-sm font-semibold text-accent dark:text-accent-light"
            >
              {t("contact")}
            </Link>
            <div className="pt-3 border-t border-smoke/20 mt-2 flex items-center justify-between gap-4">
              <LanguagePicker />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

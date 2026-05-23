"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "FR", label: "Français", active: true },
  { code: "EN", label: "English", active: false },
  { code: "AR", label: "العربية", active: false },
];

function LanguagePicker({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("FR");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const triggerColor = scrolled ? "text-ink" : "text-paper";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors hover:text-accent",
          triggerColor
        )}
        aria-label="Sélectionner la langue"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" strokeWidth={1.5} />
        <span>{current}</span>
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform", open ? "rotate-180" : "")}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-sm border border-smoke/40 bg-paper shadow-md py-1 z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              disabled={!lang.active}
              onClick={() => {
                if (lang.active) {
                  setCurrent(lang.code);
                  setOpen(false);
                }
              }}
              className={cn(
                "w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors",
                lang.active
                  ? "text-ink hover:bg-mist cursor-pointer"
                  : "text-graphite/50 cursor-not-allowed"
              )}
              title={!lang.active ? "Bientôt disponible" : undefined}
            >
              <span className={current === lang.code ? "font-semibold" : ""}>{lang.label}</span>
              {!lang.active && (
                <span className="text-[10px] text-graphite/50 italic tracking-wide">bientôt</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Cas clients", href: "/cas-clients" },
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
  ];

  const lightHeroPages = ["/blog"];
  const hasLightHero = lightHeroPages.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  const notScrolledLogoVariant = hasLightHero ? "dark" : "light";

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
          <Logo variant={isScrolled ? "dark" : notScrolledLogoVariant} size="md" href="/" />

          {/* Desktop — ordre : liens · Contact · [sep] · LanguagePicker */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-graphite dark:text-smoke/70 hover:text-ink dark:hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                "text-sm font-semibold text-accent hover:text-accent/80 transition-colors",
                pathname === "/contact" || pathname === "/contact/"
                  ? "underline underline-offset-4 decoration-accent"
                  : ""
              )}
            >
              Contact
            </Link>
            <div className="border-l border-smoke/30 pl-4">
              <LanguagePicker scrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile — juste burger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-paper dark:text-paper" />
              ) : (
                <Menu className="h-6 w-6 text-paper dark:text-paper" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-ink/10 dark:border-paper/10 bg-paper dark:bg-primary">
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
              Contact
            </Link>
            <div className="pt-3 border-t border-smoke/20 mt-2">
              <LanguagePicker scrolled={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

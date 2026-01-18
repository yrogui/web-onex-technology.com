"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { wording } from "@/data/wording";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "#a-propos" },
    { label: "Expertises", href: "#expertises" },
    { label: "Équipe", href: "#equipe" },
    { label: "Approche", href: "#approche" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ];

  // Fonction pour construire le href correct selon la page actuelle
  const getHref = (originalHref: string) => {
    // Si le lien commence par # (ancre) et qu'on N'est PAS sur la home
    if (originalHref.startsWith("#") && pathname !== "/") {
      // Rediriger vers /#section pour revenir à la home
      return `/${originalHref}`;
    }
    // Sinon, garder le href original
    return originalHref;
  };

  // Fonction pour gérer le clic sur les ancres (smooth scroll si on est sur la home)
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Si c'est une ancre (#section) et qu'on EST sur la home
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      // Fermer le menu mobile si ouvert
      setIsMobileMenuOpen(false);
    }
    // Sinon, laisser le comportement par défaut (navigation Next.js)
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-cream/95 dark:bg-[#0a0c10]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="font-serif text-2xl font-bold text-brand-noir dark:text-brand-cream">
              {wording.header.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-medium text-brand-slate dark:text-brand-cream/70 hover:text-brand-noir dark:hover:text-brand-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-brand-noir dark:text-brand-cream" />
              ) : (
                <Menu className="h-6 w-6 text-brand-noir dark:text-brand-cream" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-noir/10 dark:border-brand-cream/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block py-3 text-sm font-medium text-brand-slate dark:text-brand-cream/70 hover:text-brand-noir dark:hover:text-brand-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/Logo";

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
    { label: "Services", href: "/services" },
    { label: "Cas clients", href: "/cas-clients" },
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ];

  const getHref = (originalHref: string) => {
    if (originalHref.startsWith("#") && pathname !== "/") {
      return `/${originalHref}`;
    }
    return originalHref;
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

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
          {/* Logo */}
          <Logo variant="dark" size="md" href="/" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-medium text-graphite dark:text-smoke/70 hover:text-ink dark:hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            {isScrolled && (
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className="inline-block px-5 py-2.5 bg-primary dark:bg-paper text-paper dark:text-primary text-sm font-medium tracking-wide rounded-sm hover:bg-ink dark:hover:bg-mist transition-colors duration-300"
              >
                Audit gratuit
              </a>
            )}
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
                <X className="h-6 w-6 text-ink dark:text-paper" />
              ) : (
                <Menu className="h-6 w-6 text-ink dark:text-paper" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-ink/10 dark:border-paper/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block py-3 text-sm font-medium text-graphite dark:text-smoke/70 hover:text-ink dark:hover:text-paper transition-colors"
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

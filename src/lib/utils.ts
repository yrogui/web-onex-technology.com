/**
 * Utilitaires génériques
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne les classes Tailwind de manière intelligente
 * Évite les conflits de classes (ex: "p-4 p-2" → "p-2")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formate une date en français
 */
export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateObj.toLocaleDateString("fr-FR", options || defaultOptions);
}

/**
 * Formate une date en format court (ex: "03 JAN 2026")
 */
export function formatDateShort(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = dateObj
    .toLocaleDateString("fr-FR", { month: "short" })
    .toUpperCase()
    .replace(".", "");
  const year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
}

/**
 * Tronque un texte à une longueur donnée
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Génère un ID unique (simple UUID v4)
 */
export function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Valide une adresse email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Nettoie une chaîne de caractères (supprime espaces multiples, trim)
 */
export function sanitizeString(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}

/**
 * Capitalise la première lettre d'une chaîne
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convertit une chaîne en slug (URL-friendly)
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Délai asynchrone (pour les tests ou animations)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Formatte un nombre avec séparateurs de milliers
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("fr-FR");
}

/**
 * Calcule un pourcentage
 */
export function percentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

/**
 * Clamp une valeur entre min et max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Vérifie si on est côté client
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Vérifie si on est côté serveur
 */
export function isServer(): boolean {
  return typeof window === "undefined";
}

/**
 * Récupère une valeur d'une variable d'environnement
 * Avec support du côté client et serveur
 */
export function getEnv(key: string): string | undefined {
  if (isServer()) {
    return process.env[key];
  }
  // Côté client, seules les variables NEXT_PUBLIC_* sont accessibles
  return process.env[`NEXT_PUBLIC_${key}`];
}

/**
 * Copie un texte dans le presse-papiers
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!isClient()) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    return false;
  }
}

/**
 * Génère une URL Open Graph image
 */
export function getOgImageUrl(title: string, category?: string): string {
  const params = new URLSearchParams({
    title,
    ...(category && { category }),
  });

  return `/api/og?${params.toString()}`;
}

/**
 * Extrait le domaine d'une URL
 */
export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
}

/**
 * Vérifie si une URL est externe
 */
export function isExternalUrl(url: string): boolean {
  if (url.startsWith("/") || url.startsWith("#")) return false;

  try {
    const urlObj = new URL(url);
    return urlObj.hostname !== window.location.hostname;
  } catch {
    return false;
  }
}

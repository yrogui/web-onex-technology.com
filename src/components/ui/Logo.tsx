"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const sizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export function Logo({ variant = "dark", size = "md", href = "/" }: LogoProps) {
  const baseColor =
    variant === "dark" ? "text-ink dark:text-paper" : "text-paper";
  const accentColor =
    variant === "dark"
      ? "text-accent dark:text-accent-light"
      : "text-accent-light";

  const content = (
    <span
      className={`font-display font-medium tracking-tight ${sizeMap[size]} inline-flex items-center`}
    >
      <span className={baseColor}>One</span>
      <span className={`${accentColor} font-normal px-1`}>—</span>
      <span className={baseColor}>X</span>
    </span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

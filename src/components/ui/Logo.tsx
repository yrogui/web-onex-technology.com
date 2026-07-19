"use client";

import { Link } from "@/i18n/routing";

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

const subSizeMap = {
  sm: "text-[7px] tracking-[0.22em]",
  md: "text-[9px] tracking-[0.18em]",
  lg: "text-[11px] tracking-[0.16em]",
};

export function Logo({ variant = "dark", size = "md", href = "/" }: LogoProps) {
  const baseColor =
    variant === "dark" ? "text-ink dark:text-paper" : "text-paper";
  const accentColor =
    variant === "dark"
      ? "text-accent"
      : "text-accent-light";
  const subColor =
    variant === "dark"
      ? "text-graphite dark:text-smoke/70"
      : "text-smoke/60";

  const content = (
    <span className="inline-flex flex-col items-start leading-none" dir="ltr">
      <span
        className={`font-display font-medium tracking-tight ${sizeMap[size]} inline-flex items-center`}
      >
        <span className={baseColor}>One</span>
        <span className={`${accentColor} font-normal px-1`}>—</span>
        <span className={baseColor}>X</span>
      </span>
      <span
        className={`hidden md:block font-sans font-semibold uppercase ${subSizeMap[size]} ${subColor} mt-0.5 pl-0.5`}
      >
        Technology
      </span>
    </span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

interface BadgePartenaireProps {
  variant?: "light" | "dark";
  href?: string;
}

export function BadgePartenaire({
  variant = "light",
  href,
}: BadgePartenaireProps) {
  const colorClass =
    variant === "light"
      ? "text-graphite dark:text-smoke"
      : "text-smoke";

  const badge = (
    <span
      className={`font-sans font-semibold uppercase tracking-[0.12em] text-[11px] ${colorClass}`}
    >
      Partenaire officiel ExpertiaX
    </span>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      {badge}
    </a>
  ) : (
    badge
  );
}

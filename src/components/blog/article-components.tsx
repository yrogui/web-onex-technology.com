/**
 * Composants MDX personnalisés — Charte One-X Technology v1.0
 *
 * Hiérarchie typographique stricte :
 *  H2  : Fraunces 500, 36px/24px mobile, mt-24 mb-6
 *  H3  : Fraunces 500, 28px/20px mobile, mt-16 mb-4
 *  Body: Geist 400, 17px/15px mobile, leading-[1.7], max-w-[680px]
 *  List: puces carrées 4×4 Safran Doré
 *  Table: header mist, cellules smoke, dernière colonne Geist Mono
 */

import type { ReactNode } from "react";

// ─── Headings ───────────────────────────────────────────────────────────────

function H2({ children }: { children?: ReactNode }) {
  return (
    <h2 className="font-display font-medium text-[36px] leading-[1.15] tracking-[-0.015em] text-ink dark:text-paper mt-24 mb-6 max-md:text-2xl max-md:mt-16">
      {children}
    </h2>
  );
}

function H3({ children }: { children?: ReactNode }) {
  return (
    <h3 className="font-display font-medium text-[28px] leading-[1.2] tracking-[-0.01em] text-ink dark:text-paper mt-16 mb-4 max-md:text-xl max-md:mt-10">
      {children}
    </h3>
  );
}

function H4({ children }: { children?: ReactNode }) {
  return (
    <h4 className="font-sans font-semibold text-[17px] leading-[1.5] text-ink dark:text-paper mt-10 mb-3 uppercase tracking-[0.05em] text-graphite dark:text-smoke">
      {children}
    </h4>
  );
}

// ─── Body text ───────────────────────────────────────────────────────────────

function P({ children }: { children?: ReactNode }) {
  return (
    <p className="text-[17px] leading-[1.7] text-charcoal dark:text-smoke mb-6 max-w-[680px] max-md:text-[15px]">
      {children}
    </p>
  );
}

function Strong({ children }: { children?: ReactNode }) {
  return (
    <strong className="font-semibold text-ink dark:text-paper">
      {children}
    </strong>
  );
}

function Em({ children }: { children?: ReactNode }) {
  return <em className="font-display italic">{children}</em>;
}

// ─── Links ───────────────────────────────────────────────────────────────────

function A({
  href,
  children,
  className,
  ...props
}: {
  href?: string;
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  // heading-link anchors (ajoutés par rehype-autolink-headings) → pas de style
  if (className === "heading-link") {
    return (
      <a
        href={href}
        className="text-inherit no-underline hover:text-inherit"
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className="text-accent hover:underline underline-offset-2 transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}

// ─── Lists ───────────────────────────────────────────────────────────────────

function Ul({ children }: { children?: ReactNode }) {
  return (
    <ul className="list-none pl-0 my-6 space-y-2 max-w-[680px]">
      {children}
    </ul>
  );
}

function Ol({ children }: { children?: ReactNode }) {
  return (
    <ol className="list-none pl-0 my-6 space-y-2 max-w-[680px] counter-reset-[item]">
      {children}
    </ol>
  );
}

function Li({ children }: { children?: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[17px] leading-[1.7] text-charcoal dark:text-smoke max-md:text-[15px]">
      {/* Puce carrée Safran Doré 4×4px */}
      <span
        className="flex-shrink-0 bg-accent mt-[0.55em]"
        style={{ width: "4px", height: "4px" }}
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

// ─── Blockquote ──────────────────────────────────────────────────────────────

function Blockquote({ children }: { children?: ReactNode }) {
  return (
    <blockquote className="border-l-[3px] border-accent pl-5 my-10 max-w-[680px]">
      <div className="font-display italic font-medium text-xl leading-[1.65] text-charcoal dark:text-smoke">
        {children}
      </div>
    </blockquote>
  );
}

// ─── Code ────────────────────────────────────────────────────────────────────

function Code({ children, className }: { children?: ReactNode; className?: string }) {
  // Bloc de code (fenced) — className contient "language-xxx"
  if (className) {
    return (
      <code className={`font-mono text-sm text-paper ${className}`}>
        {children}
      </code>
    );
  }
  // Code inline
  return (
    <code className="font-mono text-sm text-accent bg-ink/5 dark:bg-paper/5 px-1.5 py-0.5 rounded-sm">
      {children}
    </code>
  );
}

function Pre({ children }: { children?: ReactNode }) {
  return (
    <pre className="bg-ink dark:bg-charcoal/80 text-paper p-6 rounded overflow-x-auto my-8 max-w-[680px]">
      {children}
    </pre>
  );
}

// ─── Tables ──────────────────────────────────────────────────────────────────

function Table({ children }: { children?: ReactNode }) {
  return (
    /* Responsive scroll horizontal sur mobile */
    <div className="overflow-x-auto my-8 border border-smoke/30 dark:border-charcoal rounded [&_td:last-child]:font-mono [&_td:last-child]:text-sm">
      <table className="w-full text-left border-collapse">
        {children}
      </table>
    </div>
  );
}

function Thead({ children }: { children?: ReactNode }) {
  return (
    <thead className="bg-mist dark:bg-charcoal/50">
      {children}
    </thead>
  );
}

function Th({ children }: { children?: ReactNode }) {
  return (
    <th className="font-sans font-semibold text-[13px] text-ink dark:text-paper px-4 py-3 border-b border-smoke/40 dark:border-charcoal whitespace-nowrap">
      {children}
    </th>
  );
}

function Td({ children }: { children?: ReactNode }) {
  return (
    <td className="font-sans font-normal text-[14px] text-charcoal dark:text-smoke px-4 py-3 border-b border-smoke/30 dark:border-charcoal/80">
      {children}
    </td>
  );
}

function Tr({ children }: { children?: ReactNode }) {
  return (
    <tr className="hover:bg-mist/30 dark:hover:bg-paper/[0.02] transition-colors">
      {children}
    </tr>
  );
}

// ─── Horizontal rule ─────────────────────────────────────────────────────────

function Hr() {
  return (
    <hr className="border-0 border-t border-smoke/40 dark:border-charcoal my-12 max-w-[680px]" />
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────

export const articleComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  strong: Strong,
  em: Em,
  a: A,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  table: Table,
  thead: Thead,
  th: Th,
  td: Td,
  tr: Tr,
  hr: Hr,
};

"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  id?: string;
  style?: React.CSSProperties;
}

/**
 * Lightweight scroll-reveal wrapper — replaces framer-motion `whileInView` fade-ups
 * with an IntersectionObserver + CSS transition (see [data-reveal] in globals.css).
 * Honors prefers-reduced-motion via the CSS layer. Reveals once, then unobserves.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  id,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      data-shown={shown ? "true" : "false"}
      className={className}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}

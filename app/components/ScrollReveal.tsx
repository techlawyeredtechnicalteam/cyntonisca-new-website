"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  as?: "div" | "article";
  delay?: number;
  className?: string;
  children: ReactNode;
};

export default function ScrollReveal({
  as = "div",
  delay = 0,
  className = "",
  children,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          observer.unobserve(element);
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealStyle = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  if (as === "article") {
    return <article ref={(node) => { ref.current = node; }} className={`scroll-reveal ${className}`} style={revealStyle}>{children}</article>;
  }

  return <div ref={(node) => { ref.current = node; }} className={`scroll-reveal ${className}`} style={revealStyle}>{children}</div>;
}

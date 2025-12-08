"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapSectionProps {
  children: ReactNode;
  className?: string;
  fromY?: number;
  delayStagger?: number;
}

export default function GsapSection({
  children,
  className = "",
  fromY = 40,
  delayStagger = 0,
}: GsapSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: fromY },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: delayStagger,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [fromY, delayStagger]);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}

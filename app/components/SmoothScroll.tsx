"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let unsubscribe: (() => void) | undefined;

    const update = (time: number) => {
      lenis?.raf(time * 1000);
    };

    const stop = () => {
      unsubscribe?.();
      unsubscribe = undefined;
      gsap.ticker.remove(update);
      lenis?.destroy();
      lenis = null;
    };

    const start = () => {
      if (reducedMotion.matches || lenis) return;

      gsap.registerPlugin(ScrollTrigger);
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.08,
        touchInertiaExponent: 1.5,
        wheelMultiplier: 0.8,
        touchMultiplier: 0.85,
        anchors: { offset: -112 },
        autoRaf: false,
        prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
      });

      unsubscribe = lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();
    };

    const handleMotionPreference = () => {
      stop();
      start();
    };

    start();
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", handleMotionPreference);
      stop();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  return null;
}

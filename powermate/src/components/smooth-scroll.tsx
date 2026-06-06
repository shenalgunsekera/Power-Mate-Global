"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Premium inertial scrolling. Mounts once at the app root. Honours the OS
 * reduced-motion preference by skipping Lenis entirely (native scroll stays).
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch devices already scroll well; Lenis there can feel laggy.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // lerp-only (do NOT also pass duration/easing — together they fight and
    // make trackpad scrolling stall mid-gesture). lerp gives smooth, continuous
    // interpolation that suits free-scrolling wheels and trackpads.
    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: false,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Make in-page anchor links use Lenis (smooth, offset-aware)
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href*="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname) return;
      const hash = url.hash;
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -88, duration: 1.2 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}

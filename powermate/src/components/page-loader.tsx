"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Brand intro on every full page load: maroon curtain, logo settles in, a
 * hairline meter fills to 100, then the curtain lifts to reveal the page.
 * Plays only on hard loads (not client-side route changes, since the layout
 * persists). Reduced-motion users skip straight to the page.
 */
export function PageLoader() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [progress, setProgress] = useState(0);
  const [armed, setArmed] = useState(false);

  // Decide on mount whether to play at all (avoids SSR/markup mismatch).
  useEffect(() => {
    if (reduce) {
      setPhase("done");
      return;
    }
    setArmed(true);
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-out-expo on the counter so it surges then settles
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("done"), 220);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (phase === "done") document.documentElement.style.overflow = "";
  }, [phase]);

  if (!armed) return null;

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-(image:--grad-dark) text-white"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: EASE_EXPO }}
        >
          {/* crimson spotlight from the top */}
          <div aria-hidden className="glow-radial pointer-events-none absolute inset-x-0 top-0 h-1/2" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]"
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_EXPO }}
              className="relative"
            >
              {/* slow halo ring behind the mark */}
              <span
                aria-hidden
                className="absolute -inset-5 rounded-full border border-white/10 [animation:pm-ring-spin_8s_linear_infinite]"
                style={{ borderTopColor: "var(--brand-300)" }}
              />
              <Image
                src="/logo-powermate.png"
                alt="Power Mate Investment"
                width={160}
                height={160}
                priority
                className="size-16 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE_EXPO }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-display text-lg font-extrabold tracking-tight">POWER MATE</span>
              <span className="font-display text-[0.62rem] font-semibold tracking-[0.32em] text-brand-200">
                INVESTMENT
              </span>
            </motion.div>

            {/* hairline meter */}
            <div className="mt-2 flex w-52 flex-col gap-2">
              <div className="h-px w-full overflow-hidden bg-white/15">
                <div
                  className="h-full bg-brand-300 transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-center text-[0.62rem] font-semibold tracking-[0.3em] text-brand-200">
                <span className="tabular tabular-nums">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

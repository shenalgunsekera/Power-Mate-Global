"use client";

import { Quote } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("");
}

export function Stories({ dict }: { dict: Dictionary }) {
  const items = dict.stories.items;

  return (
    <section className="section-pad-loose bg-surface">
      <div className="container-pm">
        <Reveal kind="up" className="max-w-xl">
          <h2 className="font-display text-balance text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.025em] text-ink">
            {dict.stories.title}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            {dict.stories.subtitle}
          </p>
        </Reveal>

        {/* Featured quote spans two columns; supporting quotes stack beside it */}
        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-2" stagger={0.1}>
          {items.map((s, i) => {
            const featured = i === 0;
            return (
              <RevealItem
                as="figure"
                key={s.name}
                kind={featured ? "scale" : "up"}
                className={cn(
                  "flex flex-col justify-between gap-6 rounded-[1.5rem] p-7 sm:p-8",
                  featured
                    ? "relative overflow-hidden bg-(image:--grad-brand) text-white shadow-(--shadow-brand) lg:col-span-2"
                    : "border border-line bg-bg transition-shadow hover:shadow-(--shadow-md)",
                )}
              >
                {featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-3xl"
                  />
                )}
                <div className="relative flex flex-col gap-5">
                  <Quote
                    className={cn("size-8", featured ? "text-white/40" : "text-brand-200")}
                    aria-hidden
                  />
                  <blockquote
                    className={cn(
                      "text-pretty",
                      featured
                        ? "font-display text-[1.4rem] font-semibold leading-snug tracking-[-0.01em]"
                        : "text-[1rem] leading-[1.75] text-ink",
                    )}
                  >
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption
                  className={cn(
                    "relative flex items-center gap-3 border-t pt-5",
                    featured ? "border-white/20" : "border-line",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full font-display text-sm font-bold",
                      featured ? "bg-white/15 text-white ring-1 ring-white/25" : "bg-brand-700 text-white",
                    )}
                    aria-hidden
                  >
                    {initials(s.name)}
                  </span>
                  <span className="flex flex-col">
                    <span className={cn("font-semibold", featured ? "text-white" : "text-ink")}>
                      {s.name}
                    </span>
                    <span className={cn("text-sm", featured ? "text-brand-100" : "text-ink-soft")}>
                      {s.role}
                    </span>
                  </span>
                </figcaption>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

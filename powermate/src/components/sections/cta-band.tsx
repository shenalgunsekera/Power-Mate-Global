import { ArrowRight, Phone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localeHref } from "@/lib/utils";
import { company } from "@/data/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const c = dict.finalCta;
  return (
    <section className="py-12 bg-bg">
      <div className="container-pm">
        <div className="relative overflow-hidden rounded-[2rem] bg-(image:--grad-brand) px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-24 size-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-brand-900/30 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
          </div>
          <Reveal as="div" kind="up" className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-100">
              {c.eyebrow}
            </span>
            <h2 className="font-display text-balance text-[clamp(1.9rem,5vw,3rem)] font-extrabold">
              {c.title}
            </h2>
            <p className="max-w-xl text-pretty text-[1.075rem] leading-relaxed text-brand-100">
              {c.subtitle}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={localeHref(locale, "/contact?intent=apply")} variant="onDark" size="lg">
                {c.primary}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={company.phoneHref} variant="onDarkGhost" size="lg">
                <Phone className="size-4" aria-hidden />
                {c.secondary}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

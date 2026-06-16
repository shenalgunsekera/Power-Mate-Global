import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { productOrder } from "@/data/site";
import { ProductIcon } from "@/components/ui/product-icon";
import { CtaBand } from "@/components/sections/cta-band";
import { ButtonLink } from "@/components/ui/button";
import { localeHref } from "@/lib/utils";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.meta.products.title, description: dict.meta.products.description };
}

export default async function ProductsPage({ params }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const pp = dict.productsPage;

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-(image:--grad-dark) py-20 text-white lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-[26rem] w-[26rem] rounded-full bg-brand-500/20 blur-[130px]" />
        </div>
        <div className="container-pm relative max-w-3xl">
          <span className="kicker kicker--dark mb-4 block">{pp.hero.eyebrow}</span>
          <h1 className="font-display text-balance text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.03] tracking-[-0.025em]">
            {pp.hero.title}
          </h1>
          <p className="mt-6 max-w-[56ch] text-pretty text-[1.1rem] leading-relaxed text-brand-100">
            {pp.hero.subtitle}
          </p>
        </div>
        <div aria-hidden className="mt-14 h-10 bg-bg [clip-path:ellipse(120%_100%_at_50%_100%)]" />
      </section>

      {/* Universal promise strip */}
      <section className="border-b border-line bg-surface py-10">
        <div className="container-pm">
          <h2 className="font-display text-lg font-bold text-ink">{pp.everyProductTitle}</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {pp.everyProduct.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[0.95rem] text-ink-soft">
                <Check className="size-4 text-brand-600 shrink-0" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Full product cards — detail view */}
      <section className="section-pad bg-bg">
        <div className="container-pm flex flex-col gap-8">
          {productOrder.map((key, i) => {
            const p = dict.products.items[key];
            const isEven = i % 2 === 0;
            return (
              <article
                key={key}
                id={key}
                className="scroll-mt-24 grid items-start gap-8 rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-(--shadow-md) lg:grid-cols-[auto_1fr_auto]"
              >
                {/* Icon */}
                <div className={`flex size-14 items-center justify-center rounded-2xl text-white shadow-(--shadow-brand) ${isEven ? "bg-(image:--grad-brand)" : "bg-brand-800"}`}>
                  <ProductIcon product={key} className="size-7" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink">{p.name}</h2>
                  <p className="max-w-[60ch] text-[0.975rem] leading-[1.8] text-ink-soft">{p.description}</p>
                  <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-sm text-ink-soft">
                        <Check className="size-3.5 text-brand-600 shrink-0" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="shrink-0">
                  <ButtonLink
                    href={localeHref(locale, `/contact?intent=apply&product=${key}`)}
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    {dict.common.applyNow}
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

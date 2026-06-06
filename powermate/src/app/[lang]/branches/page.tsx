import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { BranchLocator } from "@/components/sections/branch-locator";
import { CtaBand } from "@/components/sections/cta-band";
import { company } from "@/data/site";
import { Phone, Clock } from "lucide-react";

export async function generateMetadata({ params }: PageProps<"/[lang]/branches">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.meta.branches.title, description: dict.meta.branches.description };
}

export default async function BranchesPage({ params }: PageProps<"/[lang]/branches">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      {/* Compact page header — not a full hero; branches are utility */}
      <section className="border-b border-line bg-surface py-14">
        <div className="container-pm grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="kicker mb-3 block">{dict.branchLocator.eyebrow}</span>
            <h1 className="font-display text-balance text-[clamp(2.2rem,4.8vw,3.4rem)] font-extrabold leading-tight tracking-[-0.025em] text-ink">
              {dict.meta.branches.title.split("—")[0].trim()}
            </h1>
            <p className="mt-3 max-w-[56ch] text-[1.05rem] leading-relaxed text-ink-soft">
              {dict.branchLocator.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-bg p-5">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="size-4 text-brand-600 shrink-0" aria-hidden />
              <span className="text-ink-soft">{dict.contact.phoneLabel}:</span>
              <a href={company.phoneHref} className="tabular font-semibold text-brand-800 hover:underline">
                {company.hotline}
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="mt-0.5 size-4 text-brand-600 shrink-0" aria-hidden />
              <div className="flex flex-col gap-0.5">
                <span className="text-ink-soft">{dict.contact.hoursWeekdayLabel}: <span className="font-medium text-ink">{company.hoursWeekday}</span></span>
                <span className="text-ink-soft">{dict.contact.hoursSaturdayLabel}: <span className="font-medium text-ink">{company.hoursSaturday}</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BranchLocator locale={locale} dict={dict} withHeading={false} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

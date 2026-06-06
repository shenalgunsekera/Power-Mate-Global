import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Hero } from "@/components/sections/hero";
import { ProductsGrid } from "@/components/sections/products-grid";
import { SriLankaPhotoStrip } from "@/components/sections/sl-photo-strip";
import { WhyChoose } from "@/components/sections/why-choose";
import { LoanCalculator } from "@/components/sections/loan-calculator";
import { Stories } from "@/components/sections/stories";
import { BranchLocator } from "@/components/sections/branch-locator";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.meta.home.title, description: dict.meta.home.description };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <ProductsGrid locale={locale} dict={dict} variant="home" />
      <SriLankaPhotoStrip dict={dict} />
      <WhyChoose dict={dict} />
      <LoanCalculator locale={locale} dict={dict} />
      <Stories dict={dict} />
      <BranchLocator locale={locale} dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

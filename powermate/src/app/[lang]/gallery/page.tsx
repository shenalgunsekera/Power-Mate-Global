import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/sections/cta-band";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: `${dict.nav.gallery} | Power Mate Investment`,
    description: dict.gallery.subtitle,
  };
}

/** Sections, each backed by a folder under public/media/gallery. */
const SECTIONS = [
  {
    dir: "community",
    title: "Our commitment to the communities we serve",
    subtitle:
      "Proud sponsors of the 2025 Annual Inter-Collegiate Cricket Tournament, organised by Dharmaraja College.",
  },
  {
    dir: "talent",
    title: "Developing and empowering our people",
    subtitle:
      "Corporate etiquette and professional-conduct training that helps our team grow.",
  },
  {
    dir: "bandarawela",
    title: "Our Bandarawela branch opening",
    subtitle: "Welcoming the Uva community as we opened our doors in Bandarawela.",
  },
  {
    dir: "mahiyanganaya",
    title: "Our Mahiyanganaya branch opening",
    subtitle: "Bringing our services closer to families and businesses in Mahiyanganaya.",
  },
];

function imagesFor(dir: string): string[] {
  try {
    const d = path.join(process.cwd(), "public", "media", "gallery", dir);
    return fs
      .readdirSync(d)
      .filter((f) => /\.(jpe?g|png)$/i.test(f))
      .sort()
      .map((f) => `/media/gallery/${dir}/${f}`);
  } catch {
    return [];
  }
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const g = dict.gallery;

  const sections = SECTIONS.map((s) => ({ ...s, images: imagesFor(s.dir) })).filter(
    (s) => s.images.length > 0,
  );

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-(image:--grad-dark) py-20 text-white lg:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 h-104 w-104 rounded-full bg-brand-500/20 blur-[130px]" />
        </div>
        <div className="container-pm relative max-w-3xl">
          <span className="kicker kicker--dark mb-4 block">{g.eyebrow}</span>
          <h1 className="font-display text-balance text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.03] tracking-[-0.025em]">
            {g.title}
          </h1>
          <p className="mt-6 max-w-[56ch] text-pretty text-[1.1rem] leading-relaxed text-brand-100">
            {g.subtitle}
          </p>
        </div>
        <div aria-hidden className="mt-14 h-10 bg-bg [clip-path:ellipse(120%_100%_at_50%_100%)]" />
      </section>

      {/* Sections */}
      {sections.map((section, si) => (
        <section
          key={section.dir}
          className={si % 2 === 1 ? "section-pad bg-surface" : "section-pad bg-bg"}
        >
          <div className="container-pm">
            <Reveal kind="up" className="max-w-2xl">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm font-bold tabular text-brand-400">
                  {String(si + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-balance text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-tight tracking-[-0.02em] text-ink">
                  {section.title}
                </h2>
              </div>
              <p className="mt-3 max-w-[60ch] text-[1.02rem] leading-relaxed text-ink-soft">
                {section.subtitle}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.images.map((src, i) => (
                <Reveal
                  key={src}
                  kind="up"
                  delay={(i % 3) * 0.05}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-100"
                >
                  <Image
                    src={src}
                    alt={`${section.title} — Power Mate Investment`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}

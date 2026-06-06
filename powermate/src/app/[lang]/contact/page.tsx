import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { company } from "@/data/site";
import { LeadForm } from "@/components/lead-form";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.meta.contact.title, description: dict.meta.contact.description };
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const c = dict.contact;

  return (
    <>
      {/* Hero — compact utility header */}
      <section className="relative overflow-hidden bg-(image:--grad-dark) py-16 text-white lg:py-22">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-[22rem] w-[22rem] rounded-full bg-brand-500/18 blur-[110px]" />
        </div>
        <div className="container-pm relative max-w-2xl">
          <span className="kicker kicker--dark mb-4 block">{c.hero.eyebrow}</span>
          <h1 className="font-display text-balance text-[clamp(2.2rem,4.8vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.025em]">
            {c.hero.title}
          </h1>
          <p className="mt-5 max-w-[54ch] text-pretty text-[1.05rem] leading-relaxed text-brand-100">
            {c.hero.subtitle}
          </p>
        </div>
        <div aria-hidden className="mt-12 h-10 bg-bg [clip-path:ellipse(120%_100%_at_50%_100%)]" />
      </section>

      {/* Main grid — contact details left, form right */}
      <section className="section-pad bg-bg">
        <div className="container-pm grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left: contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink">{c.detailsTitle}</h2>
              <p className="mt-2 text-sm text-ink-soft">
                {dict.hero.stat3Value} {dict.hero.stat3Label}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <ContactRow
                icon={<Phone className="size-5 text-brand-600" aria-hidden />}
                label={c.phoneLabel}
              >
                <a href={company.phoneHref} className="tabular text-lg font-bold text-brand-800 hover:underline">
                  {company.hotline}
                </a>
                <span className="block text-xs text-ink-faint">{company.phone}</span>
              </ContactRow>

              <ContactRow
                icon={<MessageCircle className="size-5 text-brand-600" aria-hidden />}
                label={c.whatsappLabel}
              >
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-800 hover:underline"
                >
                  {company.whatsapp}
                </a>
              </ContactRow>

              <ContactRow
                icon={<Mail className="size-5 text-brand-600" aria-hidden />}
                label={c.emailLabel}
              >
                <a href={`mailto:${company.email}`} className="font-semibold text-brand-800 hover:underline">
                  {company.email}
                </a>
              </ContactRow>

              <ContactRow
                icon={<MapPin className="size-5 text-brand-600" aria-hidden />}
                label={c.addressLabel}
              >
                <span className="text-ink-soft">{company.address}</span>
              </ContactRow>

              <ContactRow
                icon={<Clock className="size-5 text-brand-600" aria-hidden />}
                label={c.hoursLabel}
              >
                <div className="flex flex-col gap-1 text-sm">
                  <span><span className="font-medium text-ink">{c.hoursWeekdayLabel}:</span> <span className="text-ink-soft">{company.hoursWeekday}</span></span>
                  <span><span className="font-medium text-ink">{c.hoursSaturdayLabel}:</span> <span className="text-ink-soft">{company.hoursSaturday}</span></span>
                  <span><span className="font-medium text-ink">{c.hoursSundayLabel}:</span> <span className="text-ink-soft">{c.closed}</span></span>
                </div>
              </ContactRow>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink mb-1">{c.formTitle}</h2>
            <p className="mb-6 text-sm text-ink-soft">{c.formSubtitle}</p>
            <LeadForm locale={locale} dict={dict} mode="contact" />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-line bg-surface p-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">{label}</span>
        {children}
      </div>
    </div>
  );
}

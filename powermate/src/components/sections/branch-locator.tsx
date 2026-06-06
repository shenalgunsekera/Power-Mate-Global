"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Phone, Navigation } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { branches, provinces, type Branch } from "@/data/site";
import { cn } from "@/lib/utils";

function osmEmbed(b: Branch) {
  const d = 0.04;
  const bbox = [b.lng - d, b.lat - d, b.lng + d, b.lat + d].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${b.lat},${b.lng}`;
}

function directionsHref(b: Branch) {
  return `https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`;
}

export function BranchLocator({
  locale,
  dict,
  withHeading = true,
}: {
  locale: Locale;
  dict: Dictionary;
  withHeading?: boolean;
}) {
  const t = dict.branchLocator;
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>(branches[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return branches.filter((b) => {
      const matchesQuery =
        !q ||
        b.city.toLowerCase().includes(q) ||
        b.district.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q);
      const matchesProvince = !province || b.province === province;
      return matchesQuery && matchesProvince;
    });
  }, [query, province]);

  const selected = branches.find((b) => b.id === selectedId) ?? filtered[0] ?? branches[0];

  return (
    <section id="branches" className="section-pad-tight scroll-mt-20 bg-bg">
      <div className="container-pm">
        {withHeading && (
          <div className="flex flex-col gap-3">
            <span className="kicker">{t.eyebrow}</span>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-ink">
              {t.title}
            </h2>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">{t.subtitle}</p>
          </div>
        )}

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Search + list */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute start-3.5 top-1/2 size-4.5 -translate-y-1/2 text-ink-faint" aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  aria-label={t.searchPlaceholder}
                  className="h-12 w-full rounded-pill border border-line bg-white ps-11 pe-4 text-sm outline-none transition-colors placeholder:text-ink-faint focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
                />
              </div>
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                aria-label={t.province}
                className="h-12 rounded-pill border border-line bg-white px-4 text-sm outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
              >
                <option value="">{t.allProvinces}</option>
                {provinces.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-sm text-ink-soft tabular" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? t.resultsOne : t.resultsMany}
            </p>

            <ul className="flex max-h-[26rem] flex-col gap-2 overflow-y-auto pe-1">
              {filtered.length === 0 && (
                <li className="rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-soft">
                  {t.noResults}
                </li>
              )}
              {filtered.map((b) => {
                const active = b.id === selected.id;
                return (
                  <li key={b.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(b.id)}
                      aria-pressed={active}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-xl border p-4 text-start transition-all",
                        active
                          ? "border-brand-300 bg-brand-50 shadow-(--shadow-sm)"
                          : "border-line bg-white hover:border-brand-200 hover:bg-brand-50/50",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full",
                          active ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700",
                        )}
                      >
                        <MapPin className="size-4.5" aria-hidden />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="font-display font-semibold text-ink">{b.city}</span>
                        <span className="text-sm text-ink-soft">{b.address}</span>
                        <span className="mt-1 text-xs font-medium text-brand-700">
                          {b.province} {t.province} · {b.phone}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Map panel */}
          <div className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-(--shadow-md)">
            <div className="relative aspect-[4/3] w-full bg-brand-50 sm:aspect-auto sm:flex-1 sm:min-h-[24rem]">
              <iframe
                key={selected.id}
                title={`${selected.city} branch location map`}
                src={osmEmbed(selected)}
                className="absolute inset-0 size-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-3 border-t border-line p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{selected.city}</h3>
                  <p className="mt-1 flex items-start gap-2 text-sm text-ink-soft">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                    {selected.address}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={`tel:${selected.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-pill bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-brand-100"
                >
                  <Phone className="size-4" aria-hidden />
                  {t.callBranch}
                </a>
                <a
                  href={directionsHref(selected)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-pill bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <Navigation className="size-4" aria-hidden />
                  {t.getDirections}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

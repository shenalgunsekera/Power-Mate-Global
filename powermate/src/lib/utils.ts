import type { Locale } from "@/i18n/config";

/** Tiny className combiner (avoids a clsx dependency). */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Build a locale-prefixed internal href, e.g. localeHref("en", "/about") -> "/en/about". */
export function localeHref(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Format an amount as Sri Lankan Rupees (no decimals for whole rupees). */
export function formatLKR(amount: number, locale: Locale = "en"): string {
  const tag = locale === "si" ? "si-LK" : locale === "ta" ? "ta-LK" : "en-LK";
  return new Intl.NumberFormat(tag, {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(value: number, locale: Locale = "en"): string {
  const tag = locale === "si" ? "si-LK" : locale === "ta" ? "ta-LK" : "en-LK";
  return new Intl.NumberFormat(tag, { maximumFractionDigits: 0 }).format(value);
}

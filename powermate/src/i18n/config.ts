export const locales = ["en", "si", "ta"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};

// Short label shown in the compact language switcher.
export const localeShort: Record<Locale, string> = {
  en: "EN",
  si: "සිං",
  ta: "தமி",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  si: "ltr",
  ta: "ltr",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const locales = ["en", "si", "ta", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
  zh: "中文",
};

// Short label shown in the compact language switcher.
export const localeShort: Record<Locale, string> = {
  en: "EN",
  si: "සිං",
  ta: "தமி",
  zh: "中",
};

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  si: "ltr",
  ta: "ltr",
  zh: "ltr",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

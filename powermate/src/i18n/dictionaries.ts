import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  si: () => import("./dictionaries/si"),
  ta: () => import("./dictionaries/ta"),
  zh: () => import("./dictionaries/zh"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (await loaders[locale]()).default;
}

export type { Dictionary };

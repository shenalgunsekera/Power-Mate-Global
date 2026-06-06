"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Check, ChevronDown } from "lucide-react";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  label,
  tone = "light",
}: {
  locale: Locale;
  label: string;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function switchTo(next: Locale) {
    // Swap the leading locale segment in the current path.
    const segments = pathname.split("/");
    segments[1] = next;
    const target = segments.join("/") || `/${next}`;
    document.cookie = `pm_locale=${next}; path=/; max-age=31536000; samesite=lax`;
    setOpen(false);
    router.push(target);
    router.refresh();
  }

  const triggerTone =
    tone === "dark"
      ? "text-white/90 ring-white/25 hover:bg-white/10"
      : "text-ink-soft ring-line-strong hover:bg-brand-50 hover:text-brand-800";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className={cn(
          "inline-flex min-h-11 items-center gap-1.5 rounded-pill px-3.5 py-2.5 text-sm font-medium ring-1 transition-colors",
          triggerTone,
        )}
      >
        <Globe className="size-4" aria-hidden />
        <span>{localeNames[locale]}</span>
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute end-0 z-50 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-line bg-bg p-1 shadow-(--shadow-lg)"
        >
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                type="button"
                onClick={() => switchTo(l)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-start text-sm transition-colors",
                  l === locale
                    ? "bg-brand-50 font-semibold text-brand-800"
                    : "text-ink-soft hover:bg-brand-50 hover:text-brand-800",
                )}
              >
                {localeNames[l]}
                {l === locale && <Check className="size-4 text-brand-600" aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { company } from "@/data/site";

/**
 * Brand lockup. `mark` renders just the logo image; `wordmark` adds a text
 * name (used on dark surfaces where the black PNG wordmark would disappear).
 */
export function Logo({
  locale,
  variant = "mark",
  className,
}: {
  locale: Locale;
  variant?: "mark" | "wordmark";
  className?: string;
}) {
  return (
    <Link
      href={localeHref(locale, "/")}
      aria-label={company.name}
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <Image
        src="/logo-powermate.png"
        alt=""
        width={140}
        height={140}
        priority
        className="h-11 w-11 object-contain"
      />
      {variant === "wordmark" && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            POWER MATE
          </span>
          <span className="font-display text-[0.7rem] font-semibold tracking-[0.22em] text-brand-200">
            INVESTMENT
          </span>
        </span>
      )}
    </Link>
  );
}

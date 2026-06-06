import { cn } from "@/lib/utils";

/**
 * Section heading component.
 * kicker (eyebrow) is OPTIONAL — use sparingly, not on every section.
 * Impeccable ban: "tiny uppercase tracked eyebrow above every section" = AI grammar.
 */
export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className,
  tone = "light",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "mx-auto max-w-2xl items-center text-center",
        className,
      )}
    >
      {kicker && (
        <span className={cn("kicker", tone === "dark" && "kicker--dark")}>
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-balance text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-tight tracking-[-0.02em]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-[60ch] text-[1.05rem] leading-relaxed",
            tone === "dark" ? "text-brand-100" : "text-ink-soft",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

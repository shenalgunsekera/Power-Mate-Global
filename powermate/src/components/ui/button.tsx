import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkGhost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-[transform,background-color,box-shadow,color] duration-200 ease-(--ease-out-quint) focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-60 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-(image:--grad-brand) text-white shadow-(--shadow-brand) hover:brightness-110 hover:-translate-y-0.5 focus-visible:outline-brand-600",
  secondary:
    "bg-bg text-brand-800 ring-1 ring-line-strong hover:ring-brand-300 hover:bg-brand-50 focus-visible:outline-brand-600",
  ghost:
    "text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-600",
  onDark:
    "bg-white text-brand-900 hover:bg-brand-50 hover:-translate-y-0.5 shadow-(--shadow-md) focus-visible:outline-white",
  onDarkGhost:
    "text-white ring-1 ring-white/30 hover:bg-white/10 hover:ring-white/60 focus-visible:outline-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-13 px-7 text-base [--h:3.25rem] min-h-[3rem]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}

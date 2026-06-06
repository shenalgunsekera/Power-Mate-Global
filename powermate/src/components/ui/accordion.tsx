"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-line" role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} role="listitem" className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-start"
            >
              <span className={cn(
                "font-display text-[1.05rem] font-semibold leading-snug transition-colors",
                isOpen ? "text-brand-800" : "text-ink"
              )}>
                {item.q}
              </span>
              <span className={cn(
                "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                isOpen ? "border-brand-300 bg-brand-50 text-brand-700" : "border-line bg-surface text-ink-faint"
              )}>
                {isOpen
                  ? <Minus className="size-3.5" aria-hidden />
                  : <Plus className="size-3.5" aria-hidden />
                }
              </span>
            </button>

            {/* Height transition via grid rows */}
            <div className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}>
              <div className="overflow-hidden">
                <p className="max-w-[65ch] pb-6 text-[0.975rem] leading-[1.8] text-ink-soft">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

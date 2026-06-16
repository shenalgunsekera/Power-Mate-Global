import { SunMedium, Factory, Refrigerator, type LucideIcon } from "lucide-react";
import { productIcon, type ProductKey } from "@/data/site";

const map: Record<string, LucideIcon> = {
  SunMedium,
  Factory,
  Refrigerator,
};

export function ProductIcon({
  product,
  className,
}: {
  product: ProductKey;
  className?: string;
}) {
  const Icon = map[productIcon[product]] ?? SunMedium;
  return <Icon className={className} strokeWidth={1.6} aria-hidden />;
}

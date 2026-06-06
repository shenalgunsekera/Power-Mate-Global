import { Sprout, Store, Tractor, Gem, Car, ShieldCheck, type LucideIcon } from "lucide-react";
import { productIcon, type ProductKey } from "@/data/site";

const map: Record<string, LucideIcon> = {
  Sprout,
  Store,
  Tractor,
  Gem,
  Car,
  ShieldCheck,
};

export function ProductIcon({
  product,
  className,
}: {
  product: ProductKey;
  className?: string;
}) {
  const Icon = map[productIcon[product]] ?? Sprout;
  return <Icon className={className} strokeWidth={1.6} aria-hidden />;
}

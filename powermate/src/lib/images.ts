/**
 * Verified free Unsplash images.
 * All confirmed as standard Unsplash License (free, not Unsplash+).
 */

const BASE = "https://images.unsplash.com/photo-";

export const img = {
  // Rooftop / field solar panels against the sky — hero
  solarHero: `${BASE}1509391366360-2e959784a276`,
  // Solar panels close-up — household solar product
  solarPanels: `${BASE}1508514177221-188b1cf16e9d`,
  // Industrial machinery / engineering — SME machinery product
  machinery: `${BASE}1581092160562-40aa08e78837`,
  // Modern kitchen appliances — household equipment product
  appliances: `${BASE}1556911220-bff31c812dba`,
  // Sri Lanka — bustling local market: the businesses Power Mate Global supplies
  marketLife: `${BASE}1548285788-6b5c92110fee`,
  // Sri Lanka — Nine Arches Bridge, Ella (Gemma Fjam)
  nineArches: `${BASE}1574611122955-5baa61496637`,
  // Sri Lanka — tea plantation, Nuwara Eliya hill country (Central Province)
  teaCountry: `${BASE}1760533852055-724d3a50dcbd`,
  // Sri Lanka — misty highland hills (Uva)
  hillCountry: `${BASE}1585171353887-4a6caf1e852e`,
  // Sri Lanka — Blue train at Nine Arches Bridge (Hendrik Cornelissen)
  blueTrain: `${BASE}1566296314736-6eaac1ca0cb9`,
  // Sri Lanka — Mirissa beach, Coconut Tree Hill (Dinuka Lankaloka)
  mirisssaBeach: `${BASE}1580910527739-556eb89f9d65`,
  // Sri Lanka — Kandy temple community (Tharaka Jayasuriya)
  kandyCommunity: `${BASE}1558871624-7b507467240f`,
  // Sri Lanka — Elephants (Alex Azabache)
  elephants: `${BASE}1571406761758-9a3eed5338ef`,
  // Sri Lanka — Mirissa beach people (Daniel Klein)
  mirisssaPeople: `${BASE}1519566335946-e6f65f0f4fdf`,
  // Sri Lanka — Tuk-tuks with surfboards (Jura)
  tukTuks: `${BASE}1583155381750-1c5d2634bd3f`,
  // Sri Lanka — Tuk-tuk at Galle Fort (Matt Dany)
  galleTukTuk: `${BASE}1704797390325-b057758d8c3d`,
  // SE Asia — Rice planting (Eduardo Prim)
  ricePlanting: `${BASE}1505471768190-275e2ad7b3f9`,
  // Gold jewelry — rings & necklace (Segal Jewelry)
  goldJewelry: `${BASE}1633934542430-0905ccb5f050`,
} as const;

/** Build a sized Unsplash CDN URL. */
export function sized(
  id: string,
  opts: { w?: number; h?: number; q?: number; fit?: string } = {},
): string {
  const { w = 1600, q = 80, fit = "crop" } = opts;
  const params = new URLSearchParams({ auto: "format", fit, w: String(w), q: String(q) });
  if (opts.h) params.set("h", String(opts.h));
  return `${id}?${params}`;
}

/** Product card images — one per product, all free verified. */
import type { ProductKey } from "@/data/site";

export const productCardImages: Record<ProductKey, { src: string; alt: string }> = {
  solar: {
    src: sized(img.solarPanels, { w: 640, h: 380, q: 80 }),
    alt: "Solar panels under a clear sky — household solar power systems",
  },
  machinery: {
    src: sized(img.machinery, { w: 640, h: 380, q: 80 }),
    alt: "Industrial machinery — equipment imported for small and medium enterprises",
  },
  equipment: {
    src: sized(img.appliances, { w: 640, h: 380, q: 80 }),
    alt: "Modern home appliances — household equipment imported direct",
  },
};

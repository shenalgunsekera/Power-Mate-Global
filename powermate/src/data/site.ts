/**
 * Language-neutral site data.
 *
 * ⚠️ PLACEHOLDER DATA — replace phone numbers, addresses, email, and branch
 * coordinates with the real Power Mate Investment details (the Facebook page
 * could not be scraped automatically). Structure and types are production-ready.
 */

export const company = {
  name: "Power Mate Investment",
  tagline: "Strengthening Your Financial Power",
  // TODO: replace with real contact details
  phone: "+94 11 234 5678",
  phoneHref: "tel:+94112345678",
  hotline: "1234",
  email: "info@powermate.lk",
  whatsapp: "+94 77 123 4567",
  whatsappHref: "https://wa.me/94771234567",
  facebook: "https://www.facebook.com/powermateinvestments",
  address: "No. 123, Galle Road, Colombo 03, Sri Lanka",
  hoursWeekday: "8:30 AM – 5:00 PM",
  hoursSaturday: "8:30 AM – 1:00 PM",
  established: 2009,
  branchCount: 25,
  customersServed: "75,000+",
} as const;

export type ProductKey =
  | "micro"
  | "sme"
  | "agriculture"
  | "gold"
  | "leasing"
  | "insurance";

/** Stable ordering + icon mapping. Labels/descriptions live in the dictionaries. */
export const productOrder: ProductKey[] = [
  "micro",
  "sme",
  "agriculture",
  "gold",
  "leasing",
  "insurance",
];

export const productIcon: Record<ProductKey, string> = {
  micro: "Sprout",
  sme: "Store",
  agriculture: "Tractor",
  gold: "Gem",
  leasing: "Car",
  insurance: "ShieldCheck",
};

/** Indicative rates/terms shown by the loan calculator, per product. */
export const productTerms: Record<
  ProductKey,
  { minRate: number; maxAmount: number; maxMonths: number }
> = {
  micro: { minRate: 18, maxAmount: 500_000, maxMonths: 24 },
  sme: { minRate: 14, maxAmount: 10_000_000, maxMonths: 60 },
  agriculture: { minRate: 12, maxAmount: 2_000_000, maxMonths: 48 },
  gold: { minRate: 9, maxAmount: 5_000_000, maxMonths: 12 },
  leasing: { minRate: 13, maxAmount: 8_000_000, maxMonths: 60 },
  insurance: { minRate: 0, maxAmount: 0, maxMonths: 0 },
};

export interface Branch {
  id: string;
  city: string;
  district: string;
  province: string;
  /** TODO: replace with real street address */
  address: string;
  phone: string;
  /** lat,lng — TODO: replace with real coordinates (current = district centroids) */
  lat: number;
  lng: number;
}

/** ⚠️ PLACEHOLDER branch network — replace with the real list. */
export const branches: Branch[] = [
  { id: "colombo", city: "Colombo", district: "Colombo", province: "Western", address: "No. 123, Galle Road, Colombo 03", phone: "+94 11 234 5678", lat: 6.9271, lng: 79.8612 },
  { id: "kandy", city: "Kandy", district: "Kandy", province: "Central", address: "No. 45, Peradeniya Road, Kandy", phone: "+94 81 223 4567", lat: 7.2906, lng: 80.6337 },
  { id: "galle", city: "Galle", district: "Galle", province: "Southern", address: "No. 78, Wakwella Road, Galle", phone: "+94 91 224 5678", lat: 6.0535, lng: 80.221 },
  { id: "jaffna", city: "Jaffna", district: "Jaffna", province: "Northern", address: "No. 12, Hospital Road, Jaffna", phone: "+94 21 222 3456", lat: 9.6615, lng: 80.0255 },
  { id: "kurunegala", city: "Kurunegala", district: "Kurunegala", province: "North Western", address: "No. 56, Colombo Road, Kurunegala", phone: "+94 37 222 4567", lat: 7.4863, lng: 80.3623 },
  { id: "anuradhapura", city: "Anuradhapura", district: "Anuradhapura", province: "North Central", address: "No. 9, Maithripala Senanayake Mw, Anuradhapura", phone: "+94 25 222 5678", lat: 8.3114, lng: 80.4037 },
  { id: "batticaloa", city: "Batticaloa", district: "Batticaloa", province: "Eastern", address: "No. 34, Trinco Road, Batticaloa", phone: "+94 65 222 6789", lat: 7.7102, lng: 81.6924 },
  { id: "ratnapura", city: "Ratnapura", district: "Ratnapura", province: "Sabaragamuwa", address: "No. 21, Bandaranaike Mw, Ratnapura", phone: "+94 45 222 7890", lat: 6.6828, lng: 80.3992 },
  { id: "badulla", city: "Badulla", district: "Badulla", province: "Uva", address: "No. 67, Lower King Street, Badulla", phone: "+94 55 222 8901", lat: 6.9934, lng: 81.055 },
  { id: "matara", city: "Matara", district: "Matara", province: "Southern", address: "No. 88, Anagarika Dharmapala Mw, Matara", phone: "+94 41 222 9012", lat: 5.9485, lng: 80.5353 },
  { id: "negombo", city: "Negombo", district: "Gampaha", province: "Western", address: "No. 102, Main Street, Negombo", phone: "+94 31 222 0123", lat: 7.2083, lng: 79.8358 },
  { id: "trincomalee", city: "Trincomalee", district: "Trincomalee", province: "Eastern", address: "No. 14, Dockyard Road, Trincomalee", phone: "+94 26 222 1234", lat: 8.5874, lng: 81.2152 },
];

export const provinces = [
  "Western",
  "Central",
  "Southern",
  "Northern",
  "Eastern",
  "North Western",
  "North Central",
  "Uva",
  "Sabaragamuwa",
] as const;

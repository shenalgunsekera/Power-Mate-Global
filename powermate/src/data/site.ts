/**
 * Language-neutral site data.
 *
 * ⚠️ PLACEHOLDER DATA — replace phone numbers, addresses, email, and showroom
 * coordinates with the real Power Mate Global details. Structure and types are
 * production-ready.
 */

export const company = {
  name: "Power Mate Global",
  tagline: "Genuine Imports. Real Support.",
  phone: "011 2080 8888",
  phoneHref: "tel:+941120808888",
  hotline: "011 2080 8888",
  email: "info@powermateglobal.lk",
  whatsapp: "070 708 0033",
  whatsappHref: "https://wa.me/94707080033",
  facebook: "https://www.facebook.com/powermateglobal",
  address: "973/3A, Oruwala, Athurugiriya, Colombo",
  hoursWeekday: "8:30 AM – 5:00 PM",
  hoursSaturday: "8:30 AM – 1:00 PM",
  established: 2020,
  branchCount: 7,
  customersServed: "5,000+",
} as const;

export type ProductKey = "solar" | "machinery" | "equipment";

/** Stable ordering + icon mapping. Labels/descriptions live in the dictionaries. */
export const productOrder: ProductKey[] = ["solar", "machinery", "equipment"];

export const productIcon: Record<ProductKey, string> = {
  solar: "SunMedium",
  machinery: "Factory",
  equipment: "Refrigerator",
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

/** Branch network — currently Central and Uva provinces. (Coordinates are
 *  approximate town centroids; refine with exact branch locations when available.) */
export const branches: Branch[] = [
  { id: "nuwara-eliya", city: "Nuwara Eliya", district: "Nuwara Eliya", province: "Central", address: "126/6, Hawa Eliya, Nuwara Eliya", phone: "071 128 0033", lat: 6.9497, lng: 80.7891 },
  { id: "kandy", city: "Kandy", district: "Kandy", province: "Central", address: "No. 97, Sri Dhamma Dassi Mawatha, Kandy", phone: "071 411 0033", lat: 7.2906, lng: 80.6337 },
  { id: "matale", city: "Matale", district: "Matale", province: "Central", address: "92 F, Kandy Road, Matale", phone: "070 771 0033", lat: 7.4675, lng: 80.6234 },
  { id: "welimada", city: "Welimada", district: "Badulla", province: "Uva", address: "No. 04, Nuwara Eliya Road, Welimada", phone: "070 411 0033", lat: 6.9056, lng: 80.9136 },
  { id: "bandarawela", city: "Bandarawela", district: "Badulla", province: "Uva", address: "Badulla Road, Bindunuwewa, Bandarawela", phone: "057 212 1008", lat: 6.8329, lng: 80.987 },
  { id: "mahiyanganaya", city: "Mahiyanganaya", district: "Badulla", province: "Uva", address: "No. 38, Upper Floor, Public Market, Mahiyanganaya", phone: "055 225 7367", lat: 7.3281, lng: 81.001 },
  { id: "weligama", city: "Weligama", district: "Matara", province: "Southern", address: "No. 146, Main Street, Weligama", phone: "071 411 0033", lat: 5.973, lng: 80.429 },
];

export const provinces = ["Central", "Uva", "Southern"] as const;

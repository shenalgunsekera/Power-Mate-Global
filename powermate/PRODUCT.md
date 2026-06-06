# Power Mate Investment — Product Context

## What this is
A trust-building, lead-generating marketing website for **Power Mate Investment**, a Sri Lankan
finance company offering loans and financial services to individuals, farmers, and small businesses.
Tagline: **"Strengthening Your Financial Power."**

Stage 1 objective: **build trust and generate leads.** KPI: inquiries + credibility.

## Audience
- Sri Lankan individuals and SME owners seeking accessible credit (micro, SME, agriculture, gold, leasing).
- Often mobile-first, frequently more comfortable in **Sinhala or Tamil** than English.
- Trust and approachability matter more than fintech flash. People are deciding whether to hand this
  company their financial future.

## Register
**Brand** (design IS the product). This is a marketing surface whose job is the impression it leaves:
solid, established, warm, locally rooted — not a transactional app shell.

Brand-voice words: **grounded · trustworthy · aspirational.** Physical object: the weight of a brass
bank-vault handle wrapped in burgundy leather — heavy, reassuring, premium without being cold.

## Languages (trilingual, first-class)
English (`en`), Sinhala (`si`), Tamil (`ta`). None is a second-class afterthought. Every page,
nav item, CTA, and form is fully localized. Locale lives in the URL (`/en`, `/si`, `/ta`).

## Pages (Stage 1)
Home · About Us · Products · Branch Network · Careers · Contact Us · FAQs

## Key interactions
- **Loan calculator** (EMI estimate) — primary lead magnet on the hero + Products.
- **Apply Now / lead capture form** — posts to a Node route handler.
- **Branch locator** — searchable, filterable list with an interactive map panel.

## Constraints / honesty notes
- Real Facebook content could NOT be scraped (login wall). Copy, photos, phone numbers, addresses,
  and branch data are **professional placeholders** marked for replacement with real data.
- The logo (`/public/logo-powermate.png`) is the real brand asset.

## Stack
Next.js 16 (App Router, full-stack) · TypeScript · Tailwind v4 · native i18n · lucide-react icons.

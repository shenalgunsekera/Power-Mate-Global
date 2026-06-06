# Power-Mate-Investments

Trilingual (English / Sinhala / Tamil) marketing website for **Power Mate Investment**, a Sri Lankan finance company offering micro, SME, agriculture, gold loans, leasing and insurance.

Tagline: *Strengthening Your Financial Power.*

## Stack

- **Next.js 16** (App Router, full-stack) + **TypeScript**
- **Tailwind CSS v4** design tokens (committed-maroon brand system, OKLCH)
- **motion** + **Lenis** for animation and smooth scrolling
- Native URL-based i18n (`/en`, `/si`, `/ta`)
- `lucide-react` icons

## Develop

```bash
cd powermate
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Project layout

```
powermate/
  src/
    app/[lang]/        # localized routes (home, about, products, branches, careers, contact, faqs)
    components/        # header, footer, sections, UI primitives
    i18n/              # locale config + en/si/ta dictionaries
    data/              # site + branch data (placeholders pending real details)
    lib/               # utils, image helpers
```

> Contact details, branch data, and some imagery are professional placeholders pending the real company information.

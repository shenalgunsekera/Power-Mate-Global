# Power Mate Investment — Design System

Maroon-drenched, trust-first finance brand. Committed color strategy (maroon carries the page),
not a timid single-accent SaaS layout.

## Color (OKLCH)

Brand hue ≈ 18 (deep crimson-maroon). Neutrals tinted toward the same hue (no dead gray).

| Token | OKLCH | Use |
|-------|-------|-----|
| `--brand-900` | `oklch(26% 0.10 18)` | Deepest maroon, vault tone, dark sections |
| `--brand-700` | `oklch(35% 0.13 18)` | Primary maroon — CTAs, headings accents |
| `--brand-600` | `oklch(42% 0.16 20)` | Hover, gradient mid |
| `--brand-500` | `oklch(48% 0.19 22)` | Crimson highlight, gradient end |
| `--brand-300` | `oklch(72% 0.10 22)` | Soft accents on dark |
| `--brand-50`  | `oklch(96% 0.015 22)` | Maroon-tinted wash background |
| `--ink`       | `oklch(20% 0.015 18)` | Near-black text (tinted, never #000) |
| `--ink-soft`  | `oklch(38% 0.012 18)` | Secondary text |
| `--paper`     | `oklch(99% 0.004 60)` | Page background (barely-warm white) |
| `--line`      | `oklch(90% 0.008 18)` | Hairline borders |

Signature gradient: `linear-gradient(135deg, var(--brand-900), var(--brand-600))` — used on the
hero and dark CTA bands. Matches the logo mark's maroon→crimson fade.

Rules: never gray text on maroon (use `--brand-50` / white / tinted light). Never pure `#000`/`#gray`.
Hairline borders only — no side-stripe accents. WCAG AA minimum everywhere.

## Typography
- **Display / headings:** Bricolage Grotesque (characterful grotesque — confident, not corporate-bland).
- **Body / UI (Latin):** Hanken Grotesk (clean, tabular numbers for the calculator).
- **Sinhala:** Noto Sans Sinhala. **Tamil:** Noto Sans Tamil. Loaded per-locale via CSS variable.
- Fluid `clamp()` headings, ≥1.25 modular scale. Banned: Inter, DM, Jakarta, Geist defaults.

## Spacing / layout
- 4px base. Fluid section padding with `clamp()`; generous on desktop, tight groupings inside.
- Content max-width ~72rem; prose measure ~65ch.
- Cards used only where they're the right affordance — no cards-in-cards. `auto-fit minmax()` grids.

## Motion
- Calm, premium. Entrance reveals on the hero + section headers (respecting `prefers-reduced-motion`).
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint). **No bounce/elastic.**

## Iconography
lucide-react only. One set. No rounded-square icon tiles above every heading.

## Anti-patterns to avoid (Impeccable)
Inter everywhere · purple→blue gradients · gray-on-color text · nested cards · pure black ·
bounce easing · side-border accent stripes · uppercase-tracked label above every section.

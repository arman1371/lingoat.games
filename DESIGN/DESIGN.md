# Design System Inspired by Lingoat

> Category: Productivity & SaaS
> Language-learning platform. Bright lagoon teal, chunky shadows, gamified joy.

## 1. Visual Theme & Atmosphere

Lingoat is gamification rendered as visual language. The interface is unapologetically bright, with **lagoon teal** (`#0f766e`) as the brand primary and a chunky 4px bottom-shadow on every interactive element that reads like a 3D button waiting to be pressed. The page is white (`#ffffff`) with thick 2–3px borders in a deep gray (`#e5e5e5`) and the entire system reads like an iOS app from 2015 reborn with better hierarchy.

Typography uses **Fredoka** (a custom rounded sans) for chrome and **Plus Jakarta Sans** (or Inter) for body. Display sizes are big and confident — Lingoat never whispers. Headings often carry the teal underline-stroke or sit on a teal pill, and the mascot Goaty (a teal goat) appears as an active illustration character, not a static logo.

Shape language is friendly: 16–20px radii on cards, 12px on buttons, 9999px on chips and progress bars. Iconography is filled, rounded, and color-coded by skill — every lesson surface has an instantly identifiable color pairing.

**Key Characteristics:**
- lagoon teal (`#0f766e`) as the dominant brand color, used in 30%+ of the surface
- Chunky 4px bottom-shadow on every button (the "tactile press" affordance)
- 2–3px solid borders, never hairlines
- Fredoka (rounded display) + Plus Jakarta Sans (body)
- Big confident type — display sizes start at 48px and climb
- Mascot-as-character: Goaty the goat appears in onboarding, errors, streaks
- Streak orange (`#ff9600`) and gem pink (`#ce82ff`) as secondary brand colors
- A dark theme (§8) uses the same shapes, type and chunky edges with a teal-tinted ink canvas

## 2. Color Palette & Roles

### Primary
- **Lagoon** (`#0f766e`): Brand primary, primary CTA, correct answer.
- **Lagoon Deep** (`#134e4a`): Pressed/shadow color for teal buttons.
- **Lagoon Hover** (`#115e59`): Hover, soft fills.
- **Lagoon Pale** (`#ccfbf1`): Soft surface, success banner.

### Secondary Accents
- **Streak Orange** (`#ff9600`): Streak counter, fire icon, premium energy.
- **Streak Orange Deep** (`#cc7a00`): Pressed orange.
- **Gem Pink** (`#ce82ff`): Gem currency, Lingoat Plus.
- **Eel Blue** (`#1cb0f6`): Hint button, info link.
- **Cardinal Red** (`#ff4b4b`): Wrong answer, life lost.
- **Bee Yellow** (`#ffc800`): Pro badge, achievement.

### Surface
- **Snow** (`#ffffff`): Primary background.
- **Eel** (`#f7f7f7`): Section break, secondary surface.
- **Swan** (`#e5e5e5`): Disabled background, inset block.
- **Wolf** (`#777777`): Dark divider, secondary text.

### Ink & Text
- **Eel Black** (`#3c3c3c`): Primary text.
- **Wolf** (`#777777`): Secondary text, captions.
- **Hare** (`#afafaf`): Disabled, placeholder.

### Border
- **Swan** (`#e5e5e5`): Standard 2px border.
- **Hare** (`#afafaf`): Emphasized border on hover.

## 3. Typography Rules

### Font Family
- **Display / UI / Headings**: `Fredoka`, with fallback: `'Helvetica Neue', sans-serif`
- **Body / Long-form**: `Plus Jakarta Sans`, with fallback: `'Helvetica Neue', system-ui, sans-serif`
- **Code (rare, schools/admin)**: `JetBrains Mono`, with fallback: `ui-monospace, Menlo, monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Fredoka | 56px (3.5rem) | 800 | 1.05 | -0.01em | Onboarding hero |
| H1 | Fredoka | 32px (2rem) | 800 | 1.15 | -0.005em | Page title |
| H2 | Fredoka | 24px (1.5rem) | 800 | 1.2 | normal | Section heading |
| H3 | Fredoka | 18px (1.125rem) | 700 | 1.25 | normal | Card title, lesson row |
| Body Large | Plus Jakarta Sans | 17px (1.0625rem) | 500 | 1.5 | normal | Lesson prompt, instruction |
| Body | Plus Jakarta Sans | 15px (0.9375rem) | 400 | 1.5 | normal | Standard prose |
| Caption | Plus Jakarta Sans | 13px (0.8125rem) | 600 | 1.4 | 0.01em | XP counter, metadata |
| Button | Fredoka | 16px (1rem) | 800 | 1.2 | 0.02em | Standard button label |
| Streak | Fredoka | 14px (0.875rem) | 800 | 1.2 | normal | Streak number, on flame |

### Principles
- **800 is default**: Fredoka runs at 800 across headings and buttons. 700 feels weak in this system.
- **Big type**: heading sizes are 25–40% larger than typical product brands — confidence as identity.
- **Rounded letterforms**: every glyph has soft terminals; sharp serifs would break the friendliness contract.

## 4. Component Stylings

### Buttons

**Primary (Lagoon)**
- Background: `#0f766e`
- Text: `#ffffff`
- Padding: 14px 24px
- Radius: 16px
- Border-bottom: 4px solid `#134e4a` (the chunky shadow)
- Hover: background `#115e59`
- Active: translate-y 4px, border-bottom 0 (button "presses")
- Use: "Continue", "Check", main CTA.

**Secondary (White with Bottom-Shadow)**
- Background: `#ffffff`
- Text: `#777777`
- Border: 2px solid `#e5e5e5`
- Border-bottom: 4px solid `#e5e5e5`
- Radius: 16px
- Padding: 14px 24px
- Hover: text `#3c3c3c`, border `#afafaf`

**Streak Orange**
- Background: `#ff9600`
- Text: `#ffffff`
- Border-bottom: 4px solid `#cc7a00`
- Use: streak goal, "Start streak"

**Error (Cardinal Red)**
- Background: `#ff4b4b`
- Text: `#ffffff`
- Border-bottom: 4px solid `#cc3b3b`
- Use: wrong answer feedback.

### Cards / Lesson Tiles
- Background: `#ffffff`
- Border: 2px solid `#e5e5e5`
- Border-bottom: 4px solid `#e5e5e5`
- Radius: 16px
- Padding: 16px
- Hover: lift 2px, shadow `0 4px 0 #d7d7d7`

### Skill Tree Node (Lesson Bubble)
- Size: 80×72px
- Background: skill-color tinted (teal for active, gray for locked)
- Border-bottom: 6px solid darker variant
- Radius: 50% (circular)
- Active: pulses 1.0 → 1.05 every 1.6s

### Inputs
- Background: `#ffffff`
- Border: 2px solid `#e5e5e5`
- Radius: 12px
- Padding: 12px 16px
- Focus: border `#0f766e` (lagoon), ring `0 0 0 3px rgba(15, 118, 110, 0.25)`

### Progress Bar
- Track: `#e5e5e5`
- Fill: `#0f766e` (or `#ff9600` for streak)
- Radius: 9999px
- Height: 16px
- Animated fill: 320ms ease-out on increment.

## 5. Spacing & Layout

- **Base unit**: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64.
- **Container**: max 1080px, 24px gutter.
- **Lesson tree column**: 320px wide; centered on desktop.

## 6. Motion

- **Duration**: 180ms for button press; 320ms for skill-node unlock; 1.6s for active-node pulse.
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (back-out, slight overshoot) for unlocks.
- **Mascot**: Goaty blinks every 4–6s, jumps on streak milestones (480ms ease-out spring).

## 7. Usage Guardrails

- Keep the high-saturation lagoon teal, chunky bottom shadows, and rounded lesson geometry together; flat teal buttons alone do not read as Lingoat.
- Reserve oversized bold type for lesson, streak, and progress moments where the product needs encouragement or feedback.
- Use playful motion sparingly around progress state changes, avoiding generic bouncy animation on every control.

## 8. Dark Mode

Dark mode changes colour tokens only. Type, spacing, radii, motion and the chunky bottom-edge language are identical to light. The canvas is teal-tinted ink (never pure black) so the lagoon brand still reads.

### Palette

| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--bg` | `#ffffff` | `#0f1a1c` | Page canvas |
| `--surface` | `#f7f7f7` | `#172427` | Cards, section breaks |
| `--fg` | `#3c3c3c` | `#eef4f3` | Primary text |
| `--muted` | `#777777` | `#a3b3b1` | Secondary text |
| `--meta` | `#afafaf` | `#6b7f7c` | Placeholder, disabled |
| `--border` | `#e5e5e5` | `#2a3b3e` | 2px borders, progress track |
| `--accent` | `#0f766e` | `#14b8a6` | Primary CTA, links, correct answer |
| `--accent-on` | `#ffffff` | `#042f2e` | Text on accent, success, danger |
| `--accent-hover` | `#115e59` | `#2dd4bf` | Hover (lighter in dark) |
| `--accent-active` | `#134e4a` | `#0f766e` | Chunky underside / pressed |
| `--success` | `#237a37` | `#4ade80` | Correct state |
| `--warn` | `#ffc800` | `#ffc800` | Streak, achievement (text on it stays dark) |
| `--danger` | `#ff4b4b` | `#ff6b6b` | Wrong answer |
| `--elev-raised` | `0 4px 0 #d7d7d7` | `0 4px 0 #34474a` | Neutral chunky edge |
| `--focus-ring` | teal 25% | `rgba(20,184,166,0.4)` | Focus glow |

### Switching

- Default: follows the OS (`prefers-color-scheme`).
- Force a theme with `<html data-theme="light">` or `<html data-theme="dark">`. Remove the attribute to return to auto.
- Always paste the whole `tokens.css`, dark blocks included.

### Component deltas

- **Primary button**: `#14b8a6` fill, `#042f2e` label, `#0f766e` 4px underside; hover `#2dd4bf`.
- **Secondary button / cards**: `--bg`/`--surface` fill, 2px `--border`, neutral edge `#34474a`.
- **Inputs and progress track**: `--border`; focus border `--accent` plus the dark focus ring.
- **Streak / warn surfaces**: keep `#ffc800`; labels use a near-black mix of `--warn`, not `--fg`.
- **Links and eyebrows**: a mix of `--accent` and `--fg`, never `--accent-active` (too dark on dark).

### Guardrails

- Never pure black or pure white surfaces; keep the teal tint.
- Keep the chunky edges visible: edge vs canvas contrast ≥ 1.3:1.
- Text ≥ 4.5:1 on its background in both themes; `--accent-on` is dark in dark mode, so do not hard-code white on accent.
- Do not use raw hex in components; reference tokens so both themes work.

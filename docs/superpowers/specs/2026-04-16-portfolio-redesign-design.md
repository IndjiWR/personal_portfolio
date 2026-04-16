# Portfolio Redesign: "Dark Dev Studio"

**Date:** 2026-04-16
**Status:** Draft

## Overview

Complete redesign of the personal portfolio for Gbohou Indji Israel (indji). The site targets recruiters and tech leads — it must immediately communicate "this person builds software" through visual identity, not just content.

## Design Direction

**Style:** Dark Developer — VS Code / GitHub aesthetic. Clean, professional, tech-forward. Not cyberpunk, not brutalist.

**Identity:** Full-Stack Developer. Equal weight to frontend and backend projects.

**Dynamics:** Maximum — interactive canvas hero, cursor-following effects, 3D tilt cards, full scroll-driven animations, typing effects. All animations respect `prefers-reduced-motion`.

**Sections:** Hero with tagline, Project showcase grid, About/Bio with tech stack, Contact/Social links.

## Color System

```
Background:    #0a0a0f  (near-black, blue undertone)
Surface:       #12121a  (cards, sections)
Surface-2:     #1a1a2e  (elevated cards, hover)
Border:        #2a2a3e  (subtle separators)
Muted:         #64748b  (secondary text)
Foreground:    #e2e8f0  (primary text)
White:         #f8fafc  (headings)
Accent-green:  #22c55e  (primary CTA, links, "run" green, terminal prompt)
Accent-blue:   #38bdf8  (secondary, framework tags)
Accent-violet: #a78bfa  (tertiary, special highlights)
```

Semantic tokens mapped as CSS custom properties. All pairs meet WCAG AA (4.5:1 for text, 3:1 for large text/UI).

## Typography

```
Font heading:  Inter 600/700  (variable, wght 300-700)
Font body:      Inter 400/500
Font mono:      JetBrains Mono 400/500  (code accents, tags, terminal elements, section titles)
```

Google Fonts import. Tailwind config extended with custom `fontFamily.sans` and `fontFamily.mono`.

Section titles use JetBrains Mono styled as code comments: `// Projects`, `// About`, `// Contact`.

## Layout & Spacing

- Mobile-first breakpoints: 375 / 768 / 1024 / 1440
- 8px spacing grid (4px minor, 8px standard, 16px section gap, 24px major, 32px section padding mobile, 48px section padding desktop)
- Max content width: 1200px centered
- No horizontal scroll on any viewport

## Section Design

### Navbar (sticky)

- Logo: `> indji.dev` in JetBrains Mono. Green `>` character, white `indji.dev`
- Nav links: Inter 500, muted color. Active = white + accent-green underline
- Language toggle: pill button, accent-green border, JetBrains Mono
- Scroll progress bar: 2px height, accent-green, fills 0→100% based on scroll position
- On scroll >50px: `backdrop-filter: blur(12px)` + surface background at 0.9 opacity
- Mobile: hamburger icon → slide-in panel from right
- Z-index: 1000

### Hero Section

- **Background:** Interactive canvas — animated grid lines + floating particles that respond to mouse position (100ms lag for depth). Mobile: static gradient fallback (no canvas for performance)
- **Terminal prompt:** `> indji.dev` in JetBrains Mono, accent-green, blinking block cursor, fade-in on load
- **Name:** Inter 700, 4rem desktop / 2.5rem mobile, white
- **Role:** JetBrains Mono, accent-green, `Full-Stack Developer`
- **Tagline:** Inter 300, muted color, typing animation cycling through: "Building software that scales.", "Java · Angular · Cloud · AI", "Calm code, clean results."
- **CTAs:** Primary: accent-green outlined button "View Projects ↓", Secondary: ghost button "Get in Touch →"
- **Scroll indicator:** Bouncing chevron at bottom
- **Entrance animation:** Staggered fade-up (name 0ms, role 200ms, tagline 400ms, CTAs 600ms), each 600ms duration ease-out

### Projects Section

- Section title: `// Projects` in JetBrains Mono, muted color
- **Category filter:** Pill buttons — accent-green for active, surface for inactive. Smooth underline animation on switch. Categories: All, Collaborations, Personal, Archive
- **Project cards:**
  - Surface-2 background, 12px border-radius
  - Screenshot image top (aspect-ratio preserved, lazy-loaded)
  - Title: Inter 600, white
  - Summary: Inter 400, muted, 2-line clamp
  - Tags: JetBrains Mono, language tags in green, framework tags in blue
  - GitHub button: ghost icon, appears on card hover
  - Link to `/projects/:category/:id`
  - **3D tilt on hover:** CSS `transform: perspective(1000px) rotateX/Y` driven by mouse position via JS. Tilt angle max ±5deg
  - **Hover glow:** `box-shadow: 0 8px 24px rgba(34,197,94,0.15)` with 200ms transition
  - **Image scale:** 1.02 on hover, 300ms transition
- **Stagger entrance:** Cards reveal 80ms apart on scroll-into-view via IntersectionObserver
- **Responsive:** 1 col mobile, 2 col tablet, 2-3 col desktop

### About Section

- Section title: `// About` in JetBrains Mono
- **Avatar:** hexagonal clip-path (`clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`), accent-green border glow, subtle float animation (translateY 4px, 3s ease-in-out infinite)
- **Bio:** Desktop = avatar left, text right. Mobile = stacked. Name Inter 700 white, role JetBrains Mono accent-green, bio Inter 400 muted. Existing `white-space: pre-line` preserved.
- **Tech stack pills:** Scroll-triggered stagger (50ms per pill). JetBrains Mono. Languages: green tags. Frameworks/tools: blue tags. Same visual style as project card tags.

### Contact Section

- Section title: `// Get in Touch` in JetBrains Mono
- Social links: surface-2 cards with Lucide icon + label. Hover: lift + accent-green glow + scale 1.05
- Links: Instagram, GitHub, LinkedIn (existing data from footer component)
- Footer: thin border-top surface-2, muted text, copyright

## Animation Specification

| Element | Animation | Trigger | Duration | Reduced Motion |
|---------|-----------|---------|----------|----------------|
| Hero canvas | Particle grid + cursor follow | Always | Continuous | Static gradient |
| Hero text | Fade up + typing | Page load | 600ms + loop | Instant appear |
| Hero CTAs | Fade up staggered | Page load | 400ms each | Instant appear |
| Section titles | Fade up | Scroll into view | 500ms | Instant appear |
| Project cards | Stagger fade up + 3D tilt hover | Scroll into view | 400ms + 80ms stagger | Fade only, no tilt |
| Card hover | Lift + glow shadow | Mouse enter | 200ms | Scale only |
| Card image | Scale 1.02 | Mouse enter | 300ms | No animation |
| Tech stack pills | Stagger fade in | Scroll into view | 300ms + 50ms stagger | Instant appear |
| Navbar backdrop | Blur + background | Scroll > 50px | 300ms | Instant |
| Scroll progress bar | Width 0→100% | Scroll position | Continuous | Hidden |
| Avatar | Float (translateY) | Always | 3s loop | Static |
| Scroll chevron | Bounce | Always | 2s loop | Static |

All animations use `prefers-reduced-motion: reduce` media query to fall back to instant/static.

## Component Architecture

### New Components

```
apps/portfolio/src/app/
├── components/
│   ├── toolbar/          (existing, redesign)
│   ├── footer/           (existing, redesign)
│   ├── scroll-progress/  (new)
│   └── canvas-hero/      (new)
├── pages/
│   ├── home/
│   │   ├── home.ts/html/scss       (redesign)
│   │   └── components/
│   │       ├── hero-section/       (new)
│   │       ├── projects-section/   (redesign)
│   │       └── about-section/      (redesign)
│   └── projects/         (existing, minor style updates)

libs/ui/src/lib/
├── section/              (existing, update styles)
├── tooltip/              (existing, keep)
├── tilt-card/            (new - reusable 3D tilt directive)
└── scroll-reveal/        (new - IntersectionObserver directive)
```

### Reusable Directives

- **TiltCard directive:** Attaches mousemove listener, calculates rotateX/Y from cursor position relative to card center. Applies `transform: perspective(1000px) rotateX(θ) rotateY(θ)`. Removes on mouseleave. Adds `will-change: transform` on hover.
- **ScrollReveal directive:** Uses IntersectionObserver with rootMargin `0px 0px -10% 0px`. On intersect, adds `.revealed` class which triggers CSS animation. Supports stagger via `data-stagger-index` attribute.

## Data & State Changes

- **No new services needed.** Existing `ProjectService`, `TranslationService` unchanged.
- **Project categories:** Currently uses `environment.mode` to show/hide projects. Redesign adds filter UI. Categories come from existing `projects.json` data (`collaborations`, `personal`, `old-projects`).
- **Scroll progress:** Computed from `window.scrollY / (document.scrollHeight - window.innerHeight)` via `fromEvent(scroll)` with `debounceTime(16)`.
- **Canvas hero:** Standalone component, manages its own `<canvas>` element. Uses `requestAnimationFrame` loop. Cleans up on `OnDestroy`.

## Performance Guardrails

- Canvas hero: `requestAnimationFrame`, capped at 60fps. Particle count: 50 desktop, 0 mobile (static gradient fallback).
- 3D tilt: `will-change: transform` only on hover, removed on leave. GPU-composited.
- Images: `loading="lazy"`, `decoding="async"`, explicit `width`/`height` to prevent CLS.
- Scroll animations: IntersectionObserver (not scroll event listeners). Single observer instance shared via directive.
- Fonts: `font-display: swap` for Inter, `font-display: optional` for JetBrains Mono (monospace fallback acceptable).
- Bundle: Canvas hero lazy-loaded via dynamic import. TiltCard directive only loads on project cards.

## Accessibility

- All animations respect `prefers-reduced-motion: reduce`
- Keyboard navigation: focus-visible rings (2px accent-green outline)
- Color contrast: all text pairs meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- ARIA labels on interactive elements (canvas is decorative: `aria-hidden="true"`)
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`
- Skip-to-content link
- Focus management on route changes

## i18n

- All new text goes through `ngx-translate` with keys in `en.json` and `it.json`
- New keys: `home.hero.tagline1`, `home.hero.tagline2`, `home.hero.tagline3`, `home.hero.ctaProjects`, `home.hero.ctaContact`, `contact.title`, `contact.subtitle`, `contact.cta` etc.
- Font considerations: JetBrains Mono may not support Italian accented characters — fallback to system monospace

## What Stays the Same

- Nx monorepo structure
- Angular 17+ standalone components
- ngx-translate for i18n
- GitHub Pages deployment (`yarn deploy`)
- `environment.mode` for project visibility
- Project data structure (`projects.json`)
- Existing routes: `/`, `/projects`, `/projects/:category/:id`
- Relative paths for assets (GitHub Pages compatibility)

## What Gets Replaced

- Current hero (just title + subtitle) → Canvas hero with terminal prompt + typing animation
- Current projects home section (summary + button) → Filterable project card grid
- Current about section (avatar + bio) → Avatar with hex clip + bio + tech stack pills
- Current footer (FAB social) → Inline social cards in contact section
- Current navbar (transparent, basic) → Sticky with scroll progress + backdrop blur
- Current Material theme (violet) → Dark dev palette (green accent)
- Current font (system) → Inter + JetBrains Mono
- Current animations (single fadeIn) → Full scroll-driven animation system

## Out of Scope

- Blog section
- Contact form (just social links)
- Dark/light mode toggle (dark only)
- Project detail page redesign (scope for future iteration)
- Backend/API changes
- SEO/meta tag optimization
# Dark Dev Studio Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the personal portfolio with a Dark Developer aesthetic — interactive canvas hero, 3D tilt project cards, scroll-driven animations, and terminal-style code accents.

**Architecture:** Layered approach — foundation first (colors, fonts, Tailwind), then reusable directives (ScrollReveal, TiltCard), then section-by-section redesign top-to-bottom. Each task produces working, testable output.

**Tech Stack:** Angular 17+ standalone components, Tailwind CSS, ngx-translate, Angular Material, Canvas API for hero, IntersectionObserver for scroll animations.

---

## File Structure

### New files

| File | Responsibility |
|------|---------------|
| `libs/ui/src/lib/scroll-reveal/scroll-reveal.ts` | Directive: adds `.revealed` class on IntersectionObserver intersect |
| `libs/ui/src/lib/scroll-reveal/scroll-reveal.spec.ts` | Tests for ScrollReveal |
| `libs/ui/src/lib/tilt-card/tilt-card.ts` | Directive: 3D perspective tilt on mousemove |
| `libs/ui/src/lib/tilt-card/tilt-card.spec.ts` | Tests for TiltCard |
| `apps/portfolio/src/app/components/scroll-progress/scroll-progress.ts` | Component: thin progress bar tracking scroll position |
| `apps/portfolio/src/app/components/scroll-progress/scroll-progress.html` | Template for scroll progress bar |
| `apps/portfolio/src/app/components/scroll-progress/scroll-progress.scss` | Styles for scroll progress bar |
| `apps/portfolio/src/app/components/scroll-progress/scroll-progress.spec.ts` | Tests for ScrollProgress |
| `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.ts` | Component: canvas background + terminal prompt + typing animation |
| `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.html` | Template for hero section |
| `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.scss` | Styles for hero section |
| `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.spec.ts` | Tests for hero section |
| `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.ts` | Component: social link cards + footer |
| `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.html` | Template for contact section |
| `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.scss` | Styles for contact section |
| `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.spec.ts` | Tests for contact section |

### Modified files

| File | Change |
|------|--------|
| `.gitignore` | Add `.superpowers/` |
| `tailwind.config.js` | Extend with design tokens (colors, fonts, spacing) |
| `apps/portfolio/src/styles.scss` | New theme (green accent), font imports, CSS custom properties, reduced-motion |
| `apps/portfolio/src/index.html` | Add Google Fonts preconnect links |
| `apps/portfolio/src/app/app.ts` | Add skip-to-content link, remove old imports |
| `apps/portfolio/src/app/app.html` | Semantic HTML structure, add scroll-progress |
| `apps/portfolio/src/app/app.scss` | Remove old background image, update to new palette |
| `apps/portfolio/src/app/app.config.ts` | No changes needed |
| `apps/portfolio/src/app/app.routes.ts` | No changes needed |
| `apps/portfolio/src/app/components/toolbar/toolbar.ts` | Simplify — remove navigateToSection, add scroll handling |
| `apps/portfolio/src/app/components/toolbar/toolbar.html` | New logo (`> indji.dev`), updated nav, mobile hamburger |
| `apps/portfolio/src/app/components/toolbar/toolbar.scss` | Sticky with backdrop blur, scroll-aware styles, new palette |
| `apps/portfolio/src/app/components/toolbar/toolbar.spec.ts` | Update tests for new behavior |
| `apps/portfolio/src/app/components/footer/footer.ts` | Remove (replaced by contact-section) |
| `apps/portfolio/src/app/components/footer/footer.html` | Remove |
| `apps/portfolio/src/app/components/footer/footer.scss` | Remove |
| `apps/portfolio/src/app/components/footer/footer.spec.ts` | Remove |
| `apps/portfolio/src/app/pages/home/home.ts` | Add HeroSection, ContactSection imports; remove old fragment scroll |
| `apps/portfolio/src/app/pages/home/home.html` | New section order: hero, projects, about, contact |
| `apps/portfolio/src/app/pages/home/home.scss` | Remove old hero styles |
| `apps/portfolio/src/app/pages/home/home.spec.ts` | Update tests |
| `apps/portfolio/src/app/pages/home/components/about-section/about-section.ts` | Add tech stack data, hex avatar |
| `apps/portfolio/src/app/pages/home/components/about-section/about-section.html` | Hex avatar, tech stack pills |
| `apps/portfolio/src/app/pages/home/components/about-section/about-section.scss` | Hex clip-path, tech stack styling, new palette |
| `apps/portfolio/src/app/pages/home/components/about-section/about-section.spec.ts` | Update tests |
| `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.ts` | Add category filter, inject ProjectService, tilt directive |
| `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.html` | Filter pills + project card grid |
| `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.scss` | New card grid, filter pills, hover effects |
| `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.spec.ts` | Update tests |
| `libs/ui/src/lib/section/section.ts` | Add `sectionClass` input for variant styling |
| `libs/ui/src/lib/section/section.html` | Code-comment title styling |
| `libs/ui/src/lib/section/section.scss` | New palette, code-comment title style |
| `libs/ui/src/index.ts` | Export ScrollReveal and TiltCard directives |
| `apps/portfolio/public/assets/i18n/en.json` | New keys for hero, contact, tech stack |
| `apps/portfolio/public/assets/i18n/it.json` | New keys for hero, contact, tech stack |

---

### Task 1: Design Foundation

**Files:**
- Modify: `.gitignore`
- Modify: `tailwind.config.js`
- Modify: `apps/portfolio/src/styles.scss`
- Modify: `apps/portfolio/src/index.html`

- [ ] **Step 1: Add `.superpowers/` to `.gitignore`**

Append to `.gitignore`:
```
.superpowers/
```

- [ ] **Step 2: Extend Tailwind config with design tokens**

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/src/**/*.{html,ts}',
    './libs/**/src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#12121a',
        'surface-2': '#1a1a2e',
        border: '#2a2a3e',
        muted: '#64748b',
        fg: '#e2e8f0',
        white: '#f8fafc',
        accent: {
          green: '#22c55e',
          blue: '#38bdf8',
          violet: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Update `styles.scss` with new theme, fonts, custom properties, reduced-motion**

Replace `apps/portfolio/src/styles.scss`:

```scss
@use '@angular/material' as mat;
@tailwind base;
@tailwind components;
@tailwind utilities;

// Angular Material theme — green accent instead of violet
$dark-dev-theme: mat.define-theme((
  color: (
    theme-type: dark,
    primary: mat.$green-palette,
    tertiary: mat.$blue-palette,
  ),
));

:root {
  @include mat.all-component-themes($dark-dev-theme);

  // Design tokens
  --color-bg: #0a0a0f;
  --color-surface: #12121a;
  --color-surface-2: #1a1a2e;
  --color-border: #2a2a3e;
  --color-muted: #64748b;
  --color-fg: #e2e8f0;
  --color-white: #f8fafc;
  --color-accent-green: #22c55e;
  --color-accent-blue: #38bdf8;
  --color-accent-violet: #a78bfa;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

html {
  color-scheme: dark;
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Focus styles
*:focus-visible {
  outline: 2px solid var(--color-accent-green);
  outline-offset: 2px;
}

// Reduced motion — disable all animations
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Skip to content link
.skip-to-content {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-accent-green);
  color: var(--color-bg);
  padding: 0.5rem 1rem;
  border-radius: 0 0 4px 4px;
  z-index: 9999;
  font-weight: 600;
  text-decoration: none;

  &:focus {
    top: 0;
  }
}
```

- [ ] **Step 4: Add Google Fonts to `index.html`**

Add preconnect and font link tags to `apps/portfolio/src/index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

- [ ] **Step 5: Verify build succeeds**

Run: `yarn nx build portfolio`
Expected: Build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
git add .gitignore tailwind.config.js apps/portfolio/src/styles.scss apps/portfolio/src/index.html
git commit -m "feat: design foundation — dark dev palette, fonts, tailwind tokens, reduced-motion"
```

---

### Task 2: ScrollReveal Directive

**Files:**
- Create: `libs/ui/src/lib/scroll-reveal/scroll-reveal.ts`
- Create: `libs/ui/src/lib/scroll-reveal/scroll-reveal.spec.ts`
- Modify: `libs/ui/src/index.ts`

- [ ] **Step 1: Write failing test**

Create `libs/ui/src/lib/scroll-reveal/scroll-reveal.spec.ts`:

```typescript
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollReveal } from './scroll-reveal';

@Component({
  template: '<div scrollReveal [staggerIndex]="0">Content</div>',
  imports: [ScrollReveal],
})
class TestHost {}

describe('ScrollReveal', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    const directive = fixture.debugElement.query(
      (el) => el.nativeElement.getAttribute('scrollReveal') !== null
    );
    expect(directive).toBeTruthy();
  });

  it('should start with scroll-reveal class and not revealed', () => {
    const el = fixture.debugElement.query(
      (el) => el.nativeElement.getAttribute('scrollReveal') !== null
    ).nativeElement as HTMLElement;
    expect(el.classList.contains('scroll-reveal')).toBe(true);
    expect(el.classList.contains('revealed')).toBe(false);
  });

  it('should add revealed class when IntersectionObserver triggers', () => {
    const directive = fixture.debugElement.query(
      (el) => el.nativeElement.getAttribute('scrollReveal') !== null
    ).injector.get(ScrollReveal);
    directive['onIntersect']();
    fixture.detectChanges();

    const el = fixture.debugElement.query(
      (el) => el.nativeElement.getAttribute('scrollReveal') !== null
    ).nativeElement as HTMLElement;
    expect(el.classList.contains('revealed')).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn nx test ui --testPathPattern="scroll-reveal" --no-cache`
Expected: FAIL — `ScrollReveal` not found

- [ ] **Step 3: Write implementation**

Create `libs/ui/src/lib/scroll-reveal/scroll-reveal.ts`:

```typescript
import { Directive, input, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
  host: {
    class: 'scroll-reveal',
    '[class.revealed]': 'isRevealed()',
    '[style.--stagger-delay]': 'staggerIndex() ? staggerIndex() * 80 + "ms" : "0ms"',
  },
})
export class ScrollReveal {
  staggerIndex = input<number>(0);

  isRevealed = signal(false);

  private observer: IntersectionObserver | null = null;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        this.setupObserver();
      } else {
        this.isRevealed.set(true);
      }
    });
  }

  private setupObserver(): void {
    if (this.observer) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.onIntersect();
            this.observer?.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    // Use setTimeout to ensure element is in DOM
    setTimeout(() => {
      const el = this.getHostElement();
      if (el && this.observer) {
        this.observer.observe(el);
      }
    }, 0);
  }

  onIntersect(): void {
    this.isRevealed.set(true);
  }

  private getHostElement(): HTMLElement | null {
    // Access the host element via the directive's native element
    return null; // Will be set up via ElementRef
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
```

Wait — we need ElementRef. Let me revise:

Create `libs/ui/src/lib/scroll-reveal/scroll-reveal.ts`:

```typescript
import { Directive, input, effect, inject, ElementRef, PLATFORM_ID, signal, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
  host: {
    class: 'scroll-reveal',
    '[class.revealed]': 'isRevealed()',
    '[style.--stagger-delay]': 'staggerIndex() ? staggerIndex() * 80 + "ms" : "0ms"',
  },
})
export class ScrollReveal implements OnDestroy {
  staggerIndex = input<number>(0);

  isRevealed = signal(false);

  private observer: IntersectionObserver | null = null;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly el = inject(ElementRef).nativeElement as HTMLElement;

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        this.setupObserver();
      } else {
        this.isRevealed.set(true);
      }
    });
  }

  private setupObserver(): void {
    if (this.observer) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.onIntersect();
            this.observer?.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    this.observer.observe(this.el);
  }

  onIntersect(): void {
    this.isRevealed.set(true);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
```

- [ ] **Step 4: Add scroll-reveal CSS animation to `styles.scss`**

Append to `apps/portfolio/src/styles.scss`:

```scss
// Scroll reveal animations
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out var(--stagger-delay, 0ms),
              transform 0.5s ease-out var(--stagger-delay, 0ms);

  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
}
```

- [ ] **Step 5: Export from `libs/ui/src/index.ts`**

Add to `libs/ui/src/index.ts`:

```typescript
export * from './lib/scroll-reveal/scroll-reveal';
```

- [ ] **Step 6: Run test to verify it passes**

Run: `yarn nx test ui --testPathPattern="scroll-reveal" --no-cache`
Expected: PASS

- [ ] **Step 7: Run all ui tests**

Run: `yarn nx test ui --no-cache`
Expected: All tests pass

- [ ] **Step 8: Commit**

```bash
git add libs/ui/src/lib/scroll-reveal/ libs/ui/src/index.ts apps/portfolio/src/styles.scss
git commit -m "feat(ui): add ScrollReveal directive — IntersectionObserver-based scroll animations"
```

---

### Task 3: TiltCard Directive

**Files:**
- Create: `libs/ui/src/lib/tilt-card/tilt-card.ts`
- Create: `libs/ui/src/lib/tilt-card/tilt-card.spec.ts`
- Modify: `libs/ui/src/index.ts`

- [ ] **Step 1: Write failing test**

Create `libs/ui/src/lib/tilt-card/tilt-card.spec.ts`:

```typescript
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiltCard } from './tilt-card';

@Component({
  template: '<div tiltCard class="card">Card</div>',
  imports: [TiltCard],
})
class TestHost {}

describe('TiltCard', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    const directive = fixture.debugElement.query(
      (el) => el.nativeElement.hasAttribute('tiltcard') || el.nativeElement.getAttribute('ng-reflect-tilt-card') !== null || el.nativeElement.classList.contains('tilt-card')
    );
    expect(directive).toBeTruthy();
  });

  it('should apply transform on mousemove', () => {
    const el = fixture.debugElement.query((d) => d.nativeElement.classList.contains('card')).nativeElement as HTMLElement;
    const rect = { left: 0, top: 0, width: 200, height: 100 };
    jest.spyOn(el, 'getBoundingClientRect').mockReturnValue(rect as DOMRect);

    const event = new MouseEvent('mousemove', { clientX: 100, clientY: 50 });
    el.dispatchEvent(event);
    fixture.detectChanges();

    expect(el.style.transform).toContain('perspective');
  });

  it('should remove transform on mouseleave', () => {
    const el = fixture.debugElement.query((d) => d.nativeElement.classList.contains('card')).nativeElement as HTMLElement;
    el.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();

    expect(el.style.transform).toContain('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn nx test ui --testPathPattern="tilt-card" --no-cache`
Expected: FAIL

- [ ] **Step 3: Write implementation**

Create `libs/ui/src/lib/tilt-card/tilt-card.ts`:

```typescript
import { Directive, inject, ElementRef, HostListener, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[tiltCard]',
  standalone: true,
  host: {
    class: 'tilt-card',
  },
})
export class TiltCard implements OnDestroy {
  private readonly el = inject(ElementRef).nativeElement as HTMLElement;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly maxTilt = 5; // degrees
  private resetTimeout: ReturnType<typeof setTimeout> | null = null;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser) return;

    const rect = this.el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -this.maxTilt;
    const rotateY = ((x - centerX) / centerX) * this.maxTilt;

    this.el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    this.el.style.willChange = 'transform';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.isBrowser) return;
    this.el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    this.el.style.willChange = 'auto';
  }

  ngOnDestroy(): void {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
  }
}
```

- [ ] **Step 4: Add tilt-card transition styles to `styles.scss`**

Append to `apps/portfolio/src/styles.scss`:

```scss
// Tilt card
.tilt-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

- [ ] **Step 5: Export from `libs/ui/src/index.ts`**

Add:

```typescript
export * from './lib/tilt-card/tilt-card';
```

- [ ] **Step 6: Run tests**

Run: `yarn nx test ui --testPathPattern="tilt-card" --no-cache`
Expected: PASS

- [ ] **Step 7: Run all ui tests**

Run: `yarn nx test ui --no-cache`
Expected: All tests pass

- [ ] **Step 8: Commit**

```bash
git add libs/ui/src/lib/tilt-card/ libs/ui/src/index.ts apps/portfolio/src/styles.scss
git commit -m "feat(ui): add TiltCard directive — 3D perspective tilt on hover"
```

---

### Task 4: Navbar Redesign

**Files:**
- Create: `apps/portfolio/src/app/components/scroll-progress/scroll-progress.ts`
- Create: `apps/portfolio/src/app/components/scroll-progress/scroll-progress.html`
- Create: `apps/portfolio/src/app/components/scroll-progress/scroll-progress.scss`
- Create: `apps/portfolio/src/app/components/scroll-progress/scroll-progress.spec.ts`
- Modify: `apps/portfolio/src/app/components/toolbar/toolbar.ts`
- Modify: `apps/portfolio/src/app/components/toolbar/toolbar.html`
- Modify: `apps/portfolio/src/app/components/toolbar/toolbar.scss`
- Modify: `apps/portfolio/src/app/components/toolbar/toolbar.spec.ts`
- Modify: `apps/portfolio/src/app/app.ts`
- Modify: `apps/portfolio/src/app/app.html`

- [ ] **Step 1: Write failing test for ScrollProgress**

Create `apps/portfolio/src/app/components/scroll-progress/scroll-progress.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollProgress } from './scroll-progress';

describe('ScrollProgress', () => {
  let fixture: ComponentFixture<ScrollProgress>;
  let component: ScrollProgress;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScrollProgress],
    });
    fixture = TestBed.createComponent(ScrollProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at 0% progress', () => {
    expect(component.progress()).toBe(0);
  });

  it('should compute progress from scroll position', () => {
    component['updateProgress']({ scrollY: 500, scrollHeight: 2000, innerHeight: 1000 });
    expect(component.progress()).toBe(50);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn nx test portfolio --testPathPattern="scroll-progress" --no-cache`
Expected: FAIL

- [ ] **Step 3: Implement ScrollProgress**

Create `apps/portfolio/src/app/components/scroll-progress/scroll-progress.ts`:

```typescript
import { Component, signal, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.html',
  styleUrl: './scroll-progress.scss',
})
export class ScrollProgress implements OnDestroy {
  progress = signal(0);

  private subscription: Subscription | null = null;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);

  constructor() {
    if (this.isBrowser) {
      const window = this.document.defaultView;
      if (window) {
        this.subscription = fromEvent(window, 'scroll')
          .pipe(debounceTime(16))
          .subscribe(() => this.updateProgressFromWindow());
      }
    }
  }

  private updateProgressFromWindow(): void {
    const window = this.document.defaultView;
    if (!window) return;

    this.updateProgress({
      scrollY: window.scrollY,
      scrollHeight: this.document.documentElement.scrollHeight,
      innerHeight: window.innerHeight,
    });
  }

  updateProgress(params: { scrollY: number; scrollHeight: number; innerHeight: number }): void {
    const { scrollY, scrollHeight, innerHeight } = params;
    const maxScroll = scrollHeight - innerHeight;
    const pct = maxScroll > 0 ? Math.round((scrollY / maxScroll) * 100) : 0;
    this.progress.set(Math.min(100, Math.max(0, pct)));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
```

Create `apps/portfolio/src/app/components/scroll-progress/scroll-progress.html`:

```html
<div class="scroll-progress-bar" [style.width.%]="progress()"></div>
```

Create `apps/portfolio/src/app/components/scroll-progress/scroll-progress.scss`:

```scss
:host {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 1001;
}

.scroll-progress-bar {
  height: 100%;
  background: var(--color-accent-green);
  transition: width 100ms linear;
}
```

- [ ] **Step 4: Run test**

Run: `yarn nx test portfolio --testPathPattern="scroll-progress" --no-cache`
Expected: PASS

- [ ] **Step 5: Redesign Toolbar**

Replace `apps/portfolio/src/app/components/toolbar/toolbar.ts`:

```typescript
import { Component, inject, signal, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/i18n/translation.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [
    RouterModule,
    UpperCasePipe,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar implements OnDestroy {
  private router = inject(Router);
  translationService = inject(TranslationService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  private scrollSub: Subscription | null = null;

  constructor() {
    if (this.isBrowser) {
      this.scrollSub = fromEvent(window, 'scroll')
        .pipe(debounceTime(16))
        .subscribe(() => {
          this.isScrolled.set(window.scrollY > 50);
        });
    }
  }

  navigateToSection(sectionId: string): void {
    this.isMobileMenuOpen.set(false);
    const currentPath = this.router.url.split('?')[0].split('#')[0];
    const isOnHome = currentPath === '/';

    if (isOnHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
  }
}
```

Replace `apps/portfolio/src/app/components/toolbar/toolbar.html`:

```html
<nav class="toolbar" [class.scrolled]="isScrolled()">
  <a routerLink="/" class="logo">
    <span class="prompt">&gt;</span>indji.dev
  </a>
  <span class="spacer"></span>
  <div class="nav-links" [class.mobile-open]="isMobileMenuOpen()">
    <button mat-button (click)="navigateToSection('projects')" class="nav-link">
      {{ 'toolbar.projects' | translate }}
    </button>
    <button mat-button (click)="navigateToSection('about')" class="nav-link">
      {{ 'toolbar.about' | translate }}
    </button>
    <button mat-button (click)="navigateToSection('contact')" class="nav-link">
      {{ 'toolbar.contact' | translate }}
    </button>
  </div>
  <button mat-icon-button (click)="toggleLanguage()" class="lang-toggle">
    {{ translationService.currentLang() | uppercase }}
  </button>
  <button mat-icon-button class="hamburger" (click)="toggleMobileMenu()" [attr.aria-label]="'Toggle menu'">
    <mat-icon>{{ isMobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
  </button>
</nav>
```

Replace `apps/portfolio/src/app/components/toolbar/toolbar.scss`:

```scss
::ng-deep .mat-toolbar {
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  background: transparent;

  &.scrolled {
    background: rgba(18, 18, 26, 0.9);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
  }
}

.logo {
  text-decoration: none;
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-white);

  .prompt {
    color: var(--color-accent-green);
  }
}

.spacer {
  flex: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .nav-link {
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--color-muted) !important;
    font-family: var(--font-sans);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
      color: var(--color-white) !important;
      background: rgba(255, 255, 255, 0.05);
    }
  }
}

.lang-toggle {
  margin-left: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-accent-green) !important;
  border: 1px solid var(--color-accent-green);
  background: transparent;

  @media (min-width: 768px) {
    margin-left: 1rem;
  }
}

.hamburger {
  display: none;
  color: var(--color-white) !important;

  @media (max-width: 767px) {
    display: inline-flex;
  }
}

// Mobile menu
@media (max-width: 767px) {
  .nav-links {
    position: fixed;
    top: 56px;
    right: 0;
    left: 0;
    flex-direction: column;
    background: rgba(18, 18, 26, 0.98);
    backdrop-filter: blur(12px);
    padding: 1rem;
    gap: 0.5rem;
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.mobile-open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    .nav-link {
      width: 100%;
      text-align: left;
      padding: 0.75rem 1rem;
    }
  }

  .lang-toggle {
    display: none;
  }
}
```

- [ ] **Step 6: Update app component to include ScrollProgress and skip link**

Replace `apps/portfolio/src/app/app.html`:

```html
<a href="#main-content" class="skip-to-content">Skip to content</a>
<app-scroll-progress></app-scroll-progress>
<app-toolbar></app-toolbar>
<main id="main-content" class="main-content">
  <router-outlet></router-outlet>
</main>
```

Replace `apps/portfolio/src/app/app.scss`:

```scss
:host {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--color-bg);
}
```

Update `apps/portfolio/src/app/app.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { ScrollProgress } from './components/scroll-progress/scroll-progress';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Toolbar, ScrollProgress],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
```

- [ ] **Step 7: Update toolbar tests**

Replace `apps/portfolio/src/app/components/toolbar/toolbar.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Toolbar } from './toolbar';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/i18n/translation.service';

describe('Toolbar', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolbar, TranslateModule.forRoot()],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start not scrolled', () => {
    expect(component.isScrolled()).toBe(false);
  });

  it('should start with mobile menu closed', () => {
    expect(component.isMobileMenuOpen()).toBe(false);
  });

  it('should toggle mobile menu', () => {
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(true);
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen()).toBe(false);
  });
});
```

- [ ] **Step 8: Remove old footer FAB from app (footer component kept but not used in app shell)**

Remove `<app-footer></app-footer>` from `apps/portfolio/src/app/app.html` (already done in step 6). Remove `Footer` from `apps/portfolio/src/app/app.ts` imports (already done in step 6).

- [ ] **Step 9: Run all portfolio tests**

Run: `yarn nx test portfolio --no-cache`
Expected: All tests pass

- [ ] **Step 10: Commit**

```bash
git add apps/portfolio/src/app/components/scroll-progress/ apps/portfolio/src/app/components/toolbar/ apps/portfolio/src/app/app.ts apps/portfolio/src/app/app.html apps/portfolio/src/app/app.scss
git commit -m "feat: redesign navbar — scroll progress, backdrop blur, mobile menu, terminal logo"
```

---

### Task 5: Hero Section

**Files:**
- Create: `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.ts`
- Create: `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.html`
- Create: `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.scss`
- Create: `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.spec.ts`
- Modify: `apps/portfolio/src/app/pages/home/home.ts`
- Modify: `apps/portfolio/src/app/pages/home/home.html`
- Modify: `apps/portfolio/src/app/pages/home/home.scss`

- [ ] **Step 1: Write failing test for HeroSection**

Create `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSection } from './hero-section';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';

describe('HeroSection', () => {
  let fixture: ComponentFixture<HeroSection>;
  let component: HeroSection;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroSection, TranslateModule.forRoot()],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(HeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have taglines array with 3 entries', () => {
    expect(component.taglines.length).toBe(3);
  });

  it('should start with tagline index 0', () => {
    expect(component.currentTaglineIndex()).toBe(0);
  });

  it('should cycle taglines', (done) => {
    component.TAGLINE_DISPLAY_MS = 100;
    component.startTaglineCycle();
    setTimeout(() => {
      expect(component.currentTaglineIndex()).toBeGreaterThan(0);
      component.ngOnDestroy();
      done();
    }, 250);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn nx test portfolio --testPathPattern="hero-section" --no-cache`
Expected: FAIL

- [ ] **Step 3: Implement HeroSection**

Create `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.ts`:

```typescript
import { Component, signal, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-section',
  imports: [TranslateModule, MatButtonModule, MatIconModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection implements OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  taglines = [
    'home.hero.tagline1',
    'home.hero.tagline2',
    'home.hero.tagline3',
  ];

  currentTaglineIndex = signal(0);
  TAGLINE_DISPLAY_MS = 3000;

  private taglineInterval: ReturnType<typeof setInterval> | null = null;
  private animationFrameId: number | null = null;
  private canvasCtx: CanvasRenderingContext2D | null = null;
  private particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
  private mouseX = 0;
  private mouseY = 0;

  constructor() {
    if (this.isBrowser) {
      this.startTaglineCycle();
    }
  }

  startTaglineCycle(): void {
    this.taglineInterval = setInterval(() => {
      this.currentTaglineIndex.update((i) => (i + 1) % this.taglines.length);
    }, this.TAGLINE_DISPLAY_MS);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initCanvas();
  }

  private initCanvas(): void {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    this.canvasCtx = canvas.getContext('2d');
    if (!this.canvasCtx) return;

    this.resizeCanvas(canvas);
    this.createParticles(canvas);
    this.startAnimation(canvas);

    window.addEventListener('resize', () => this.resizeCanvas(canvas));
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    });
  }

  private resizeCanvas(canvas: HTMLCanvasElement): void {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  private createParticles(canvas: HTMLCanvasElement): void {
    const count = window.innerWidth < 768 ? 0 : 50;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
      });
    }
  }

  private startAnimation(canvas: HTMLCanvasElement): void {
    const animate = () => {
      if (!this.canvasCtx) return;
      const ctx = this.canvasCtx;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Draw grid
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw particles
      this.particles.forEach((p) => {
        // Mouse influence
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += dx * 0.0001;
          p.vy += dy * 0.0001;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Damping
        p.vx *= 0.999;
        p.vy *= 0.999;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 197, 94, 0.4)';
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.08)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const dx = this.particles[i].x - this.particles[j].x;
          const dy = this.particles[i].y - this.particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(this.particles[i].x, this.particles[i].y);
            ctx.lineTo(this.particles[j].x, this.particles[j].y);
            ctx.stroke();
          }
        }
      }

      this.animationFrameId = requestAnimationFrame(animate);
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact(): void {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    if (this.taglineInterval) clearInterval(this.taglineInterval);
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
  }
}
```

Create `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.html`:

```html
<section class="hero" id="hero">
  <canvas id="hero-canvas" class="hero-canvas" aria-hidden="true"></canvas>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <p class="terminal-prompt">> indji.dev<span class="cursor">_</span></p>
    <h1 class="hero-name">{{ 'home.hero.name' | translate }}</h1>
    <p class="hero-role">{{ 'home.hero.role' | translate }}</p>
    <p class="hero-tagline" [@taglineFade]="currentTaglineIndex()">
      {{ taglines[currentTaglineIndex()] | translate }}
    </p>
    <div class="hero-ctas">
      <button mat-button class="cta-primary" (click)="scrollToProjects()">
        <span>{{ 'home.hero.ctaProjects' | translate }}</span>
        <mat-icon>arrow_downward</mat-icon>
      </button>
      <button mat-button class="cta-secondary" (click)="scrollToContact()">
        <span>{{ 'home.hero.ctaContact' | translate }}</span>
        <mat-icon>arrow_forward</mat-icon>
      </button>
    </div>
  </div>
  <div class="scroll-indicator">
    <mat-icon>expand_more</mat-icon>
  </div>
</section>
```

Create `apps/portfolio/src/app/pages/home/components/hero-section/hero-section.scss`:

```scss
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  text-align: center;
  overflow: hidden;
}

.hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  // Mobile fallback gradient
  @media (max-width: 767px) {
    display: none;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  // Mobile gradient fallback
  @media (max-width: 767px) {
    background: radial-gradient(ellipse at 50% 50%, rgba(34, 197, 94, 0.03) 0%, transparent 70%);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}

.terminal-prompt {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-accent-green);
  margin-bottom: 1rem;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;

  .cursor {
    animation: blink 1s step-end infinite;
  }
}

.hero-name {
  font-family: var(--font-sans);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.5rem;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
}

.hero-role {
  font-family: var(--font-mono);
  font-size: 1.125rem;
  color: var(--color-accent-green);
  margin-bottom: 1rem;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
}

.hero-tagline {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 1rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
  min-height: 1.5em;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 0.8s;
  opacity: 0;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: 1s;
  opacity: 0;
}

.cta-primary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-accent-green) !important;
  color: var(--color-accent-green) !important;
  font-family: var(--font-sans);
  font-weight: 500;
  padding: 0.5rem 1.5rem !important;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(34, 197, 94, 0.1) !important;
  }
}

.cta-secondary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-border) !important;
  color: var(--color-muted) !important;
  font-family: var(--font-sans);
  font-weight: 500;
  padding: 0.5rem 1.5rem !important;
  border-radius: 4px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: var(--color-white) !important;
    color: var(--color-white) !important;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  z-index: 2;
  color: var(--color-muted);
  animation: bounce 2s ease-in-out infinite;

  mat-icon {
    font-size: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  50% { opacity: 0; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
```

- [ ] **Step 4: Update Home page to use HeroSection**

Replace `apps/portfolio/src/app/pages/home/home.ts`:

```typescript
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutSection } from './components/about-section/about-section';
import { ProjectsSection } from './components/projects-section/projects-section';
import { ContactSection } from './components/contact-section/contact-section';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, MatIconModule, HeroSection, AboutSection, ProjectsSection, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private route = inject(ActivatedRoute);

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  }
}
```

Replace `apps/portfolio/src/app/pages/home/home.html`:

```html
<app-hero-section />
<app-projects-section />
<app-about-section />
<app-contact-section />
```

Replace `apps/portfolio/src/app/pages/home/home.scss`:

```scss
// Home page — sections handle their own styling
```

- [ ] **Step 5: Run hero tests**

Run: `yarn nx test portfolio --testPathPattern="hero-section" --no-cache`
Expected: PASS

- [ ] **Step 6: Run all portfolio tests**

Run: `yarn nx test portfolio --no-cache`
Expected: All tests pass

- [ ] **Step 7: Commit**

```bash
git add apps/portfolio/src/app/pages/home/components/hero-section/ apps/portfolio/src/app/pages/home/home.ts apps/portfolio/src/app/pages/home/home.html apps/portfolio/src/app/pages/home/home.scss
git commit -m "feat: hero section — canvas particles, terminal prompt, typing taglines"
```

---

### Task 6: Projects Section Redesign

**Files:**
- Modify: `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.ts`
- Modify: `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.html`
- Modify: `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.scss`
- Modify: `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.spec.ts`
- Modify: `libs/ui/src/lib/section/section.ts`
- Modify: `libs/ui/src/lib/section/section.html`
- Modify: `libs/ui/src/lib/section/section.scss`
- Modify: `libs/projects/src/lib/project-card/project-card.scss`

- [ ] **Step 1: Update Section component for code-comment title**

Modify `libs/ui/src/lib/section/section.ts` — add `sectionClass` input:

```typescript
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-section',
  imports: [CommonModule],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class Section {
  id = input<string>('');
  title = input<string>('');
  sectionClass = input<string>('');
}
```

Modify `libs/ui/src/lib/section/section.html`:

```html
<section [id]="id()" class="section" [ngClass]="sectionClass()">
  @if (title()) {
    <h2 class="section-title"><span class="comment-prefix">// </span>{{ title() }}</h2>
  }
  <ng-content></ng-content>
</section>
```

Modify `libs/ui/src/lib/section/section.scss`:

```scss
.section {
  padding: 2rem 1rem;
  padding-bottom: 100px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
    padding-bottom: 80px;
  }
}

.section-title {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: var(--color-muted);

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  .comment-prefix {
    color: var(--color-accent-green);
  }
}
```

- [ ] **Step 2: Redesign ProjectsSection with filter and project cards**

Replace `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.ts`:

```typescript
import { Component, inject, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Section } from 'ui';
import { ScrollReveal, TiltCard } from 'ui';
import { ProjectService, ProjectData, ProjectCategory } from 'projects';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects-section',
  imports: [TranslateModule, RouterModule, MatButtonModule, MatIconModule, Section, ScrollReveal, TiltCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  private projectService = inject(ProjectService);

  readonly allProjects = toSignal(this.projectService.getVisibleProjects(), { initialValue: [] });
  readonly categories = toSignal(this.projectService.getCategories(), { initialValue: [] });

  activeFilter = signal<string>('all');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const projects = this.allProjects();
    if (filter === 'all') return projects;
    return projects.filter((p) => p.category === filter);
  });

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }

  getCategoryLabel(category: string): string {
    const key = `projects.sections.${category}`;
    return key;
  }
}
```

Replace `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.html`:

```html
<lib-section id="projects" [title]="'projects.title' | translate">
  <div class="filter-bar" scrollReveal>
    <button mat-button class="filter-pill" [class.active]="activeFilter() === 'all'" (click)="setFilter('all')">
      All
    </button>
    @for (cat of categories(); track cat) {
      <button mat-button class="filter-pill" [class.active]="activeFilter() === cat" (click)="setFilter(cat)">
        {{ getCategoryLabel(cat) | translate }}
      </button>
    }
  </div>
  <div class="projects-grid">
    @for (project of filteredProjects(); track project.id; let i = $index) {
      <a
        [routerLink]="['/projects', project.category, project.id]"
        class="project-card tilt-card"
        scrollReveal
        [staggerIndex]="i"
      >
        <div class="project-image">
          <img [src]="project.image" [alt]="'projects.items.' + project.id + '.title' | translate" loading="lazy" decoding="async" />
        </div>
        <div class="project-content">
          <h3 class="project-title">{{ 'projects.items.' + project.id + '.title' | translate }}</h3>
          <p class="project-summary">{{ 'projects.items.' + project.id + '.summary' | translate }}</p>
          <div class="project-tags">
            @for (lang of project.languages; track lang) {
              <span class="tag language">{{ lang }}</span>
            }
            @for (fw of project.frameworks; track fw) {
              <span class="tag framework">{{ fw }}</span>
            }
          </div>
        </div>
      </a>
    }
  </div>
</lib-section>
```

Replace `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.scss`:

```scss
.filter-bar {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.filter-pill {
  font-family: var(--font-mono) !important;
  font-size: 0.8rem !important;
  letter-spacing: 0.02em;
  color: var(--color-muted) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: 9999px !important;
  padding: 0.25rem 1rem !important;
  text-transform: none !important;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &.active {
    color: var(--color-accent-green) !important;
    border-color: var(--color-accent-green) !important;
    background: rgba(34, 197, 94, 0.08) !important;
  }

  &:hover:not(.active) {
    color: var(--color-white) !important;
    border-color: var(--color-muted) !important;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface-2);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(34, 197, 94, 0.15);

    .project-image img {
      transform: scale(1.02);
    }
  }
}

.project-image {
  width: 100%;
  height: 150px;
  overflow: hidden;
  background: var(--color-surface);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
}

.project-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.project-title {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-white);
  margin: 0;
}

.project-summary {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--color-muted);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 0.5rem;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;

  &.language {
    background: rgba(34, 197, 94, 0.12);
    color: #4ade80;
  }

  &.framework {
    background: rgba(56, 189, 248, 0.12);
    color: #7dd3fc;
  }
}
```

- [ ] **Step 3: Update project card spec**

Replace `apps/portfolio/src/app/pages/home/components/projects-section/projects-section.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsSection } from './projects-section';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { PROJECT_ENVIRONMENT } from 'projects';

describe('ProjectsSection', () => {
  let component: ProjectsSection;
  let fixture: ComponentFixture<ProjectsSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsSection, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: PROJECT_ENVIRONMENT, useValue: { mode: 'local' } },
      ],
    });
    fixture = TestBed.createComponent(ProjectsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with "all" filter active', () => {
    expect(component.activeFilter()).toBe('all');
  });

  it('should update active filter', () => {
    component.setFilter('personal');
    expect(component.activeFilter()).toBe('personal');
  });
});
```

- [ ] **Step 4: Update libs/projects project-card styles for new palette**

Replace `libs/projects/src/lib/project-card/project-card.scss` (palette updates only):

Change `background: rgba(255, 255, 255, 0.05)` to `background: var(--color-surface-2)`
Change `box-shadow: 0 8px 24px rgba(124, 58, 237, 0.2)` to `box-shadow: 0 8px 24px rgba(34, 197, 94, 0.15)`
Change tag colors to match new palette (green for languages, blue for frameworks).

- [ ] **Step 5: Run tests**

Run: `yarn nx test portfolio --no-cache`
Expected: All tests pass

- [ ] **Step 6: Commit**

```bash
git add apps/portfolio/src/app/pages/home/components/projects-section/ libs/ui/src/lib/section/ libs/projects/src/lib/project-card/project-card.scss
git commit -m "feat: redesign projects section — filter pills, 3D tilt cards, code-comment titles"
```

---

### Task 7: About Section Redesign

**Files:**
- Modify: `apps/portfolio/src/app/pages/home/components/about-section/about-section.ts`
- Modify: `apps/portfolio/src/app/pages/home/components/about-section/about-section.html`
- Modify: `apps/portfolio/src/app/pages/home/components/about-section/about-section.scss`
- Modify: `apps/portfolio/src/app/pages/home/components/about-section/about-section.spec.ts`

- [ ] **Step 1: Redesign AboutSection**

Replace `apps/portfolio/src/app/pages/home/components/about-section/about-section.ts`:

```typescript
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Section, ScrollReveal } from 'ui';

@Component({
  selector: 'app-about-section',
  imports: [TranslateModule, Section, ScrollReveal],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  readonly techStack = [
    { name: 'Java', type: 'language' as const },
    { name: 'TypeScript', type: 'language' as const },
    { name: 'C#', type: 'language' as const },
    { name: 'Python', type: 'language' as const },
    { name: 'SQL', type: 'language' as const },
    { name: 'Angular', type: 'framework' as const },
    { name: 'Spring', type: 'framework' as const },
    { name: '.NET', type: 'framework' as const },
    { name: 'Tailwind', type: 'framework' as const },
    { name: 'Docker', type: 'framework' as const },
    { name: 'Git', type: 'framework' as const },
    { name: 'AWS', type: 'framework' as const },
  ];
}
```

Replace `apps/portfolio/src/app/pages/home/components/about-section/about-section.html`:

```html
<lib-section id="about" [title]="'about.title' | translate">
  <div class="about-content" scrollReveal>
    <div class="avatar-wrapper">
      <div class="avatar">
        <img src="assets/images/profile.png" alt="Profile" />
      </div>
    </div>
    <div class="bio">
      <h3 class="about-name">{{ 'about.name' | translate }}</h3>
      <p class="about-role">{{ 'about.role' | translate }}</p>
      <p class="about-bio">{{ 'about.bioPlaceholder' | translate }}</p>
    </div>
  </div>
  <div class="tech-stack">
    @for (tech of techStack; track tech.name; let i = $index) {
      <span
        class="tech-pill"
        [class.language]="tech.type === 'language'"
        [class.framework]="tech.type === 'framework'"
        scrollReveal
        [staggerIndex]="i"
      >
        {{ tech.name }}
      </span>
    }
  </div>
</lib-section>
```

Replace `apps/portfolio/src/app/pages/home/components/about-section/about-section.scss`:

```scss
.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 2rem;
  }
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  overflow: hidden;
  filter: drop-shadow(0 0 12px rgba(34, 197, 94, 0.3));
  animation: float 3s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70% 0;
    scale: 1.3;
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
}

.bio {
  .about-name {
    font-family: var(--font-sans);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-white);
    margin: 0 0 0.25rem;
  }

  .about-role {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--color-accent-green);
    margin: 0 0 1rem;
  }

  .about-bio {
    margin: 0;
    line-height: 1.6;
    color: var(--color-muted);
    white-space: pre-line;
  }
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.tech-pill {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;

  &.language {
    background: rgba(34, 197, 94, 0.12);
    color: #4ade80;
  }

  &.framework {
    background: rgba(56, 189, 248, 0.12);
    color: #7dd3fc;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}
```

- [ ] **Step 2: Update spec**

Replace `apps/portfolio/src/app/pages/home/components/about-section/about-section.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSection } from './about-section';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';

describe('AboutSection', () => {
  let component: AboutSection;
  let fixture: ComponentFixture<AboutSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AboutSection, TranslateModule.forRoot()],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(AboutSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tech stack with 12 items', () => {
    expect(component.techStack.length).toBe(12);
  });

  it('should have languages and frameworks in tech stack', () => {
    const languages = component.techStack.filter((t) => t.type === 'language');
    const frameworks = component.techStack.filter((t) => t.type === 'framework');
    expect(languages.length).toBeGreaterThan(0);
    expect(frameworks.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 3: Run tests**

Run: `yarn nx test portfolio --no-cache`
Expected: All tests pass

- [ ] **Step 4: Commit**

```bash
git add apps/portfolio/src/app/pages/home/components/about-section/
git commit -m "feat: redesign about section — hex avatar, floating animation, tech stack pills"
```

---

### Task 8: Contact Section

**Files:**
- Create: `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.ts`
- Create: `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.html`
- Create: `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.scss`
- Create: `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.spec.ts`

- [ ] **Step 1: Write failing test**

Create `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContactSection, TranslateModule.forRoot()],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 social links', () => {
    expect(component.socialLinks.length).toBe(3);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `yarn nx test portfolio --testPathPattern="contact-section" --no-cache`
Expected: FAIL

- [ ] **Step 3: Implement ContactSection**

Create `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.ts`:

```typescript
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { Section, ScrollReveal } from 'ui';

@Component({
  selector: 'app-contact-section',
  imports: [TranslateModule, MatIconModule, Section, ScrollReveal],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  readonly socialLinks = [
    {
      nameKey: 'footer.instagram',
      url: 'https://www.instagram.com/indji_00/',
      icon: 'photo_camera',
    },
    {
      nameKey: 'footer.github',
      url: 'https://github.com/IndjiWR?tab=repositories',
      icon: 'code',
    },
    {
      nameKey: 'footer.linkedin',
      url: 'https://it.linkedin.com/in/indji-israel-gbohou-78097a223/it',
      icon: 'work',
    },
  ];

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
```

Create `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.html`:

```html
<lib-section id="contact" [title]="'contact.title' | translate">
  <p class="contact-subtitle" scrollReveal>{{ 'contact.subtitle' | translate }}</p>
  <div class="social-cards" scrollReveal [staggerIndex]="1">
    @for (link of socialLinks; track link.nameKey) {
      <a
        [href]="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-card"
        [attr.aria-label]="link.nameKey | translate"
      >
        <mat-icon class="social-icon">{{ link.icon }}</mat-icon>
        <span class="social-label">{{ link.nameKey | translate }}</span>
      </a>
    }
  </div>
  <footer class="footer-credit">
    <span>© {{ currentYear }} {{ 'about.name' | translate }}</span>
  </footer>
</lib-section>
```

Create `apps/portfolio/src/app/pages/home/components/contact-section/contact-section.scss`:

```scss
.contact-subtitle {
  text-align: center;
  color: var(--color-muted);
  margin-bottom: 2rem;
  font-family: var(--font-sans);
}

.social-cards {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-surface-2);
  border-radius: 8px;
  text-decoration: none;
  color: var(--color-fg);
  border: 1px solid var(--color-border);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.12);
    border-color: var(--color-accent-green);
  }
}

.social-icon {
  color: var(--color-accent-green);
  font-size: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
}

.social-label {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 0.9rem;
}

.footer-credit {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-muted);
  font-size: 0.8rem;
  font-family: var(--font-mono);
}
```

- [ ] **Step 4: Run test**

Run: `yarn nx test portfolio --testPathPattern="contact-section" --no-cache`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add apps/portfolio/src/app/pages/home/components/contact-section/
git commit -m "feat: add contact section — social cards, footer credit"
```

---

### Task 9: i18n Updates

**Files:**
- Modify: `apps/portfolio/public/assets/i18n/en.json`
- Modify: `apps/portfolio/public/assets/i18n/it.json`

- [ ] **Step 1: Add new translation keys to `en.json`**

Add these keys (merge with existing structure, don't replace):

```json
{
  "toolbar": {
    "logo": "Home",
    "projects": "Projects",
    "about": "Who am I",
    "contact": "Contact"
  },
  "home": {
    "hero": {
      "name": "Gbohou Indji Israel",
      "role": "Full-Stack Developer",
      "tagline1": "Building software that scales.",
      "tagline2": "Java · Angular · Cloud · AI",
      "tagline3": "Calm code, clean results.",
      "ctaProjects": "View Projects",
      "ctaContact": "Get in Touch"
    }
  },
  "about": {
    "name": "Gbohou Indji Israel",
    "role": "Full-Stack Developer",
    "title": "Who am I",
    "bioPlaceholder": "I've been working as a Full stack developer since 2022..."
  },
  "contact": {
    "title": "Get in Touch",
    "subtitle": "Let's build something together."
  }
}
```

- [ ] **Step 2: Add new translation keys to `it.json`**

Same structure with Italian translations:

```json
{
  "toolbar": {
    "logo": "Home",
    "projects": "Progetti",
    "about": "Chi sono",
    "contact": "Contatti"
  },
  "home": {
    "hero": {
      "name": "Gbohou Indji Israel",
      "role": "Sviluppatore Full-Stack",
      "tagline1": "Costruire software che scala.",
      "tagline2": "Java · Angular · Cloud · AI",
      "tagline3": "Codice calmo, risultati puliti.",
      "ctaProjects": "Vedi Progetti",
      "ctaContact": "Contattami"
    }
  },
  "about": {
    "name": "Gbohou Indji Israel",
    "role": "Sviluppatore Full-Stack",
    "title": "Chi sono",
    "bioPlaceholder": "Lavoro come sviluppatore Full stack dal 2022..."
  },
  "contact": {
    "title": "Contattami",
    "subtitle": "Costruiamo qualcosa insieme."
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add apps/portfolio/public/assets/i18n/
git commit -m "feat(i18n): add hero, contact, and about translation keys for en/it"
```

---

### Task 10: Accessibility & Reduced Motion

**Files:**
- Modify: `apps/portfolio/src/styles.scss` (already done in Task 1 — verify)
- Verify: All sections have semantic HTML
- Verify: Canvas has `aria-hidden="true"`
- Verify: Focus-visible styles work

- [ ] **Step 1: Verify reduced motion styles are in place**

Check `apps/portfolio/src/styles.scss` contains the `@media (prefers-reduced-motion: reduce)` block from Task 1.

- [ ] **Step 2: Verify canvas has aria-hidden**

Check `hero-section.html` has `aria-hidden="true"` on `<canvas>`.

- [ ] **Step 3: Verify skip-to-content link exists**

Check `app.html` has the skip link targeting `#main-content`.

- [ ] **Step 4: Verify semantic HTML in all sections**

Check each section template uses `<section>` with `id` attributes for anchor navigation.

- [ ] **Step 5: Commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: accessibility — verify reduced motion, aria-hidden, skip link, semantic HTML"
```

---

### Task 11: Final Integration & Cleanup

**Files:**
- Remove: `apps/portfolio/src/app/components/footer/` (if not already removed)
- Modify: `apps/portfolio/src/app/pages/home/home.spec.ts`
- Verify: Full build succeeds
- Verify: All tests pass

- [ ] **Step 1: Remove old footer component (if still present)**

The footer is no longer used in `app.html` (replaced by contact-section). If the files still exist:

```bash
rm -rf apps/portfolio/src/app/components/footer/
```

- [ ] **Step 2: Update home spec for new component structure**

Replace `apps/portfolio/src/app/pages/home/home.spec.ts`:

```typescript
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Home } from './home';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            fragment: of(null),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to element when fragment is provided', fakeAsync(() => {
    const mockElement = {
      scrollIntoView: jest.fn(),
    };
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [Home, TranslateModule.forRoot()],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            fragment: of('about'),
          },
        },
      ],
    });

    const newFixture = TestBed.createComponent(Home);
    newFixture.componentInstance.ngAfterViewInit();
    tick(150);

    expect(document.getElementById).toHaveBeenCalledWith('about');
    expect(mockElement.scrollIntoView).toHaveBeenCalled();
  }));
});
```

- [ ] **Step 3: Run all tests**

Run: `yarn test`
Expected: All tests pass

- [ ] **Step 4: Run production build**

Run: `yarn build:prod`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: cleanup — remove old footer, update home spec, verify build"
```

---

### Task 12: Visual Verification & Polish

- [ ] **Step 1: Start dev server**

Run: `yarn start`
Open browser at `http://localhost:4200`

- [ ] **Step 2: Verify hero section**

- Canvas particles visible on desktop
- Terminal prompt with blinking cursor
- Name, role, tagline visible
- CTAs navigate correctly
- Scroll indicator bounces
- Mobile: gradient background instead of canvas

- [ ] **Step 3: Verify projects section**

- Filter pills work (All, Collaborations, Personal, Archive)
- Project cards show with 3D tilt on hover
- Tags show with correct colors (green/blue)
- Cards stagger in on scroll
- Category filter updates grid

- [ ] **Step 4: Verify about section**

- Hex avatar with green glow
- Avatar floats gently
- Tech stack pills stagger in
- Bio text renders with line breaks

- [ ] **Step 5: Verify contact section**

- Social cards display correctly
- Hover effects work (lift + glow)
- Footer credit visible

- [ ] **Step 6: Verify navbar**

- Scroll progress bar fills on scroll
- Backdrop blur activates on scroll
- Mobile hamburger menu works
- Language toggle works
- Nav links scroll to sections

- [ ] **Step 7: Verify accessibility**

- Tab through page — focus-visible rings appear
- Skip-to-content link works
- `prefers-reduced-motion` disables animations

- [ ] **Step 8: Fix any issues found, commit**

```bash
git add -A
git commit -m "fix: visual polish pass — address verification findings"
```

---

## Spec Coverage Check

| Spec Section | Task |
|---|---|
| Color System | Task 1 |
| Typography | Task 1 |
| Layout & Spacing | Task 1, Task 4-8 |
| Navbar | Task 4 |
| Hero Section | Task 5 |
| Projects Section | Task 6 |
| About Section | Task 7 |
| Contact Section | Task 8 |
| Animation Specification | Task 2-8 (each section) |
| Reusable Directives | Task 2, Task 3 |
| Data & State | Task 6 (filter), Task 4 (scroll) |
| Performance | Task 5 (canvas), Task 2 (IntersectionObserver), Task 3 (will-change) |
| Accessibility | Task 10 |
| i18n | Task 9 |
| What Stays Same | Preserved throughout |
| What Gets Replaced | Each task covers its section |

No gaps found. All spec requirements mapped to tasks.
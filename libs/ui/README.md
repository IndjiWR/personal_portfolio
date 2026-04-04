# UI Library

This library contains reusable UI components for the portfolio application.

## Components

### Section

A container component that provides consistent spacing and optional title for content sections.

**Selector:** `lib-section`

**Inputs:**

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | `''` | HTML id attribute for the section (useful for anchor links) |
| `title` | `string` | `''` | Optional title displayed at the top of the section |

**Usage:**

```html
<lib-section id="projects" title="Projects">
  <!-- Section content here -->
</lib-section>
```

**Features:**
- Responsive padding (2rem/4rem on mobile/desktop)
- Centered title with proper typography
- Max-width container (1200px)
- Extra bottom padding for footer clearance on mobile

---

### Tooltip

A hover tooltip component that displays additional information.

**Selector:** `lib-tooltip`

**Inputs:**

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `text` | `string` | `''` | The text to display in the tooltip |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position of the tooltip relative to the trigger |

**Usage:**

```html
<lib-tooltip text="GitHub" position="top">
  <button mat-icon-button>
    <mat-icon>code</mat-icon>
  </button>
</lib-tooltip>
```

**Features:**
- Shows on hover, hides on mouse leave
- Fade-in animation
- Supports four positions: top, bottom, left, right
- Dark background with white text
- Centered positioning relative to trigger element

---

## Importing

Import components from the UI library:

```typescript
import { Section, Tooltip } from 'ui';

@Component({
  imports: [Section, Tooltip],
  // ...
})
```

## Styling

Components use minimal styling to allow customization:

- **Section:** Uses CSS custom properties for colors via the parent theme
- **Tooltip:** Fixed styling for consistent appearance

## Path Alias

The library is available via the `ui` path alias configured in `tsconfig.base.json`:

```json
{
  "paths": {
    "ui": ["libs/ui/src/index.ts"]
  }
}
```

## Running unit tests

Run `nx test ui` to execute the unit tests.
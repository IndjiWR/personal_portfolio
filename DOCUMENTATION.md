# Portfolio Documentation

## Project Structure

```
apps/
  portfolio/                    # Main Angular application
    src/
      app/
        app.config.ts           # App configuration (providers, i18n setup)
        app.routes.ts           # Route definitions
        app.ts / app.html       # Root component (toolbar + router-outlet + footer)
        components/
          toolbar/              # Top navigation bar
          footer/                # Social links footer
        core/
          i18n/
            translation.service.ts  # Language switching service
        pages/
          home/                  # Home page (landing)
            home.ts / home.html
            components/
              about-section/     # "Who am I" section
              projects-section/  # Projects preview section
      public/
        assets/
          i18n/
            en.json             # English translations
            it.json             # Italian translations
          images/               # Static images
          data/
            projects.json       # Project data

libs/
  ui/                           # Shared UI components
    src/
      section/                  # <lib-section> - Section wrapper with ID and title
      tooltip/                  # <lib-tooltip> - Tooltip wrapper
  projects/                     # Projects feature module
    src/
      lib/
        projects/               # <lib-projects> - Projects page component
        project-detail/         # <lib-project-detail> - Project detail view
        project-card/           # <lib-project-card> - Project card component
        project-section/        # <lib-project-section> - Category section
        models/
          project.model.ts      # ProjectData, ProjectCategory types
        services/
          project.service.ts    # Project data fetching
  domain/                       # Domain logic/models (placeholder)
  util/                         # Utility functions (placeholder)
  about/                        # About feature module (placeholder)
```

## Path Aliases

Import directly by name as configured in `tsconfig.json`:

| Alias | Path | Exports |
|-------|------|---------|
| `ui` | `libs/ui/src/index.ts` | `Section`, `Tooltip`, `UiComponent` |
| `util` | `libs/util/src/index.ts` | Utility functions |
| `domain` | `libs/domain/src/index.ts` | Domain models |
| `projects` | `libs/projects/src/index.ts` | `Projects`, `ProjectDetail`, `ProjectCard`, `ProjectSection`, `ProjectData`, `ProjectCategory`, `ProjectService` |
| `about` | `libs/about/src/index.ts` | About module exports |

---

## Navigation System

### Routes

Defined in `apps/portfolio/src/app/app.routes.ts`:

| Path | Component | Description |
|------|------------|-------------|
| `/` | `Home` | Landing page with hero + sections |
| `/projects` | `Projects` | Full projects page with categories |
| `/projects/:category/:id` | `ProjectDetail` | Individual project view |

### Toolbar Navigation

The toolbar (`apps/portfolio/src/app/components/toolbar/`) handles navigation to sections with intelligent routing:

**Configuration (`SECTION_ROUTES`):**
```typescript
const SECTION_ROUTES: Record<string, string> = {
  projects: '/projects',  // Has dedicated page
  // Sections NOT in this map are home-page only
};
```

**Navigation Behavior:**

| Section | On Home | On Dedicated Page | Elsewhere |
|---------|---------|-------------------|-----------|
| `projects` | Scroll to `#projects` | Scroll to top | Navigate to `/` → scroll |
| `about` | Scroll to `#about` | — | Navigate to `/` → scroll |

**Adding a new toolbar nav item:**
1. Add route to `SECTION_ROUTES` if it has a dedicated page
2. Add section ID to `home.html` or create dedicated page
3. Add button in `toolbar.html`:
   ```html
   <button mat-button (click)="navigateToSection('newSection')" class="nav-link">
     {{ 'toolbar.newSection' | translate }}
   </button>
   ```
4. Add translation keys to `en.json` and `it.json`

---

## Adding a New Section

### Option A: Home Page Section

1. **Create section component** in `apps/portfolio/src/app/pages/home/components/`:
   ```
   new-section/
     new-section.ts
     new-section.html
     new-section.scss
   ```

2. **Use `<lib-section>` wrapper** with an `id`:
   ```html
   <!-- new-section.html -->
   <lib-section id="newSection" [title]="'newSection.title' | translate">
     <!-- Your content here -->
   </lib-section>
   ```

3. **Add to home page** (`home.ts` and `home.html`):
   ```typescript
   // home.ts
   imports: [..., NewSection],
   ```
   ```html
   <!-- home.html -->
   <app-new-section />
   ```

4. **Add translations** to `en.json` and `it.json`:
   ```json
   {
     "newSection": {
       "title": "New Section",
       "content": "..."
     }
   }
   ```

5. **Add toolbar button** (if navigable from toolbar):
   ```html
   <button mat-button (click)="navigateToSection('newSection')" class="nav-link">
     {{ 'toolbar.newSection' | translate }}
   </button>
   ```

### Option B: Dedicated Page

1. **Create feature module** in `libs/newFeature/src/`:
   ```
   lib/
     new-feature.ts
     new-feature.html
     new-feature.scss
   index.ts
   ```

2. **Export from index.ts**:
   ```typescript
   export * from './lib/new-feature/new-feature';
   ```

3. **Add route** in `app.routes.ts`:
   ```typescript
   {
     path: 'new-feature',
     loadComponent: () => import('newFeature').then((m) => m.NewFeature),
   }
   ```

4. **Add to `SECTION_ROUTES`** in `toolbar.ts`:
   ```typescript
   const SECTION_ROUTES: Record<string, string> = {
     projects: '/projects',
     newFeature: '/new-feature',
   };
   ```

5. **Create preview section** on home page (optional) following Option A

---

## Internationalization (i18n)

### Translation Files

- `apps/portfolio/public/assets/i18n/en.json` - English
- `apps/portfolio/public/assets/i18n/it.json` - Italian

### Usage in Templates

```html
<h1>{{ 'section.title' | translate }}</h1>
<p>{{ 'section.description' | translate }}</p>
```

### Multi-line Text

Use `\n\n` for paragraph breaks, then apply `white-space: pre-line` in CSS:
```json
{
  "about": {
    "bio": "First paragraph.\n\nSecond paragraph."
  }
}
```

### Adding a New Language

1. Create `apps/portfolio/public/assets/i18n/<lang>.json`
2. Add language to `TranslationService.supportedLanguages`
3. Update toolbar language toggle logic if needed

---

## Styling

- **Tailwind CSS** is configured globally
- **Global styles**: `apps/portfolio/src/styles.scss`
- **Component styles**: Inline `scss` files with `styleUrl`

### Section Styling

The `<lib-section>` component provides consistent styling:
```html
<lib-section id="example" [title]="'Example Section'">
  <!-- Content gets consistent padding/margin -->
</lib-section>
```

---

## Testing

### Test File Location

Test files (`.spec.ts`) live alongside their source files:

```
toolbar/
  toolbar.ts
  toolbar.spec.ts
  toolbar.html
  toolbar.scss
```

### Running Tests

```bash
yarn test                      # Run all unit tests
yarn nx test portfolio        # Test portfolio app only
yarn nx test ui               # Test ui lib only
yarn test:coverage            # Run with coverage report
```

### Writing Tests

**Every `.ts` file must have a corresponding `.spec.ts` file.**

#### Component Tests

```typescript
// toolbar.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Toolbar } from './toolbar';

describe('Toolbar', () => {
  let component: Toolbar;
  let fixture: ComponentFixture<Toolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to section on home page', () => {
    // Test navigateToSection behavior
  });
});
```

#### Service Tests

```typescript
// translation.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle language between en and it', () => {
    expect(service.currentLang()).toBe('en');
    service.toggleLanguage();
    expect(service.currentLang()).toBe('it');
  });
});
```

### Test Coverage Requirements

- Aim for **80%+ coverage** on all projects
- Cover: components, services, pipes, guards, directives
- Test both happy paths and edge cases
- Mock external dependencies (HTTP, Router, etc.)

---

## Common Commands

```bash
# Development
yarn start                        # Serve portfolio app (dev mode)
yarn build                        # Build portfolio (development)
yarn build:prod                   # Build portfolio (production)

# Testing
yarn test                         # Run all unit tests
yarn nx test portfolio            # Test specific project
yarn test:coverage                # Run tests with coverage

# E2E
yarn nx e2e portfolio-e2e         # Run Playwright e2e tests

# Storybook
yarn storybook                    # Start Storybook for ui lib
yarn build-storybook              # Build static Storybook

# Deployment
yarn deploy                       # Build and deploy to GitHub Pages
```

---

## Data Files

### Projects Data

Location: `apps/portfolio/public/assets/data/projects.json`

Structure:
```json
[
  {
    "id": "project-slug",
    "image": "assets/images/projects/project.png",
    "languages": ["Java", "TypeScript"],
    "frameworks": ["Angular", "Spring"],
    "githubUrl": "https://github.com/...",
    "category": "collaborations" | "personal" | "old-projects",
    "production": true,
    "local": true
  }
]
```

**Field Reference:**
- `id` - Unique identifier (used in URLs)
- `image` - Path to project image
- `languages` - Array of programming languages
- `frameworks` - Array of frameworks/tools
- `githubUrl` - (optional) Link to GitHub repository
- `category` - One of: `collaborations`, `personal`, `old-projects`
- `production` - (optional) If `true`, shown when mode is 'production'
- `local` - (optional) If `true`, shown when mode is 'local'

**Visibility Rules:**

| `production` | `local` | Mode: `local` | Mode: `production` |
|--------------|---------|---------------|---------------------|
| `true` | - | ❌ Hidden | ✅ Shown |
| - | `true` | ✅ Shown | ❌ Hidden |
| `true` | `true` | ✅ Shown | ✅ Shown |
| - (not set) | - (not set) | ❌ Hidden | ❌ Hidden |

**Environment Toggle:**

Switch between modes in `apps/portfolio/src/environments/environment.ts`:

```typescript
export const environment = {
  mode: 'local',     // Shows projects with local: true
  // mode: 'production', // Shows projects with production: true
  isDevMode: true,
};
```

For production builds, `environment.prod.ts` is used automatically (mode: 'production').

**Examples:**

Production-ready project:
```json
{
  "id": "my-project",
  "production": true,
  ...
}
```

Work in progress (local only):
```json
{
  "id": "draft-project",
  "local": true,
  ...
}
```

Visible in both modes:
```json
{
  "id": "featured-project",
  "production": true,
  "local": true,
  ...
}
```

Categories are defined in `libs/projects/src/lib/models/project.model.ts`.

---

## GitHub Pages Deployment

- Base-href is set to `/personal_portfolio/` in deploy script
- Use **relative paths** for assets (no leading `/`)
- Deployment command: `yarn deploy`
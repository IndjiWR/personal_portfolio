<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax


<!-- nx configuration end-->

## Project Structure

```
apps/
  portfolio/          # Main Angular application
  portfolio-e2e/      # Playwright e2e tests
libs/
  ui/                 # Shared UI components (Storybook-enabled)
  domain/             # Domain logic/models
  util/               # Utility functions
  about/              # About feature module
  projects/           # Projects feature module
```

### Path Aliases

Import directly by name: `import { Section } from 'ui'`

| Alias | Path |
|-------|------|
| `ui` | libs/ui/src/index.ts |
| `util` | libs/util/src/index.ts |
| `domain` | libs/domain/src/index.ts |
| `about` | libs/about/src/index.ts |
| `projects` | libs/projects/src/index.ts |

## Common Commands

```bash
# Development
yarn start                      # Serve portfolio app (dev mode)
yarn build                      # Build portfolio (development)
yarn build:prod                 # Build portfolio (production)

# Testing
yarn test                       # Run all unit tests
yarn nx test portfolio          # Test specific project
yarn nx test ui                 # Test ui lib
yarn test:coverage              # Run tests with coverage

# E2E
yarn nx e2e portfolio-e2e      # Run Playwright e2e tests

# Linting
yarn nx lint portfolio          # Lint specific project
yarn nx run-many --target=lint --all  # Lint all projects

# Storybook
yarn storybook                  # Start Storybook for ui lib
yarn build-storybook            # Build static Storybook
```

## Project-Specific Notes

### Deploy Workflow

- Run `yarn deploy` to build and deploy to GitHub Pages
- This runs: `nx build portfolio --configuration=production --base-href=/personal_portfolio/ && npx angular-cli-ghpages --dir=dist/apps/portfolio/browser`
- The base-href must match the GitHub Pages repository name

### GitHub Pages Considerations

- Use **relative paths** for assets (e.g., `assets/images/profile.png` not `/assets/images/profile.png`)
- Absolute paths bypass the base-href and resolve to domain root instead of the subdirectory

### Styling

- Tailwind CSS is configured for the workspace
- Global styles: `apps/portfolio/src/styles.scss`
- Components use inline-style-language: `scss`

### Translation (i18n)

- Uses ngx-translate with HTTP loader
- Translation files: `apps/portfolio/public/assets/i18n/en.json` and `it.json`
- Use `\n\n` for paragraph breaks in text content
- CSS `white-space: pre-line` renders line breaks in HTML
- Default language: English (`en`)

## Testing & Storybook

### Unit Tests

- Write unit tests for all new components and services
- Test files: `*.spec.ts` alongside the component/service
- Run tests: `yarn nx test <project>` or `yarn test` (all projects)

### Storybook Stories

- Write stories for UI components in `libs/ui/src/lib/<component>/<component>.stories.ts`
- Run Storybook: `yarn storybook`
- Stories should demonstrate component variants and states
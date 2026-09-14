# Repository Guidelines

## Project Structure & Module Organization

This is a Bun-based TanStack Start documentation and component-registry application. Application entry points, routes, and shared UI live in `src/`: use `src/routes/` for pages and server routes, `src/components/` for site UI, and `src/lib/` for shared helpers. The distributable component catalog is organized under `src/registry/{atoms,molecules,organisms}/`, typically with `components/` and `examples/` folders. Keep matching documentation in `content/docs/` as `.mdx` files. Static images and icons belong in `public/`.

`src/routeTree.gen.ts` and `src/registry/lazy-components.ts` are generated artifacts; regenerate them through the relevant tooling instead of hand-editing them. `scripts/generate-lazy-components.ts` supports the latter.

## Build, Test, and Development Commands

- `bun install` installs dependencies and runs Fumadocs generation.
- `bun run dev` starts the Vite development server.
- `bun run build` produces a production build; the pre-commit hook runs it.
- `bun run types:check` regenerates Fumadocs types and runs TypeScript without emitting files.
- `bun run check` runs Ultracite/Oxlint quality checks; `bun run fix` formats and applies safe fixes.
- `bun run gen-lazy-components` regenerates the lazy component registry after catalog changes.

## Coding Style & Naming Conventions

Write TypeScript and TSX using the repository formatter: two-space indentation, single quotes (including JSX), and no semicolons. Let `bun run fix` order imports and Tailwind classes. Use lowercase kebab-case filenames such as `date-picker.tsx`; name React components in PascalCase and hooks with `use-` filenames and `useX` exports. Follow the existing atom/molecule/organism directory convention when adding catalog entries.

## Testing & Verification

There is no standalone test command or coverage threshold currently configured. For every change, run `bun run check`, `bun run types:check`, and `bun run build`; verify UI and documentation changes in `bun run dev`. Add focused tests beside new behavior if test infrastructure is introduced.

## Commits & Pull Requests

Use Conventional Commits, as enforced by Commitlint: `feat(data table): add example features`, `fix(native pdf viewer): remove iframe sandbox property`, or `docs(alert dialog): add doc mdx file`. Keep scopes lowercase and descriptive. PRs should explain the user-facing change, link relevant issues, list verification commands, and include screenshots for visual or documentation changes. Keep generated files synchronized with their sources.

## Agent skills

### Issue tracker

Issues live as Markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Uses the default five-role vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs

Uses the single-context layout. See `docs/agents/domain.md`.

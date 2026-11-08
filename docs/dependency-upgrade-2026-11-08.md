# Dependency upgrade — 2026-11-08

Checked all 76 direct dependency entries against the npm registry using Bun 1.4.3. Upgraded 39 entries; 37 were already current. `bun outdated` returned no outdated direct dependencies after installation.

Latest means the registry `latest` tag. Nitro already used a prerelease and its latest tag is now a release candidate. Existing caret/exact version policies and the `fumadocs-ui` alias to `@fumadocs/base-ui` are preserved. Transitive dependencies were refreshed within upstream constraints; incompatible transitive major versions were not forced.

## Upgraded packages

| Package | From | To | Category |
| --- | --- | --- | --- |
| `@fumadocs/base-ui` | 16.17.5 | 16.18.1 | Runtime |
| `@tanstack/react-query` | 5.104.4 | 5.107.1 | Runtime |
| `@tanstack/react-router` | 1.170.45 | 1.170.46 | Runtime |
| `@tanstack/react-router-devtools` | 1.167.2 | 1.167.3 | Runtime |
| `@tanstack/react-start` | 1.169.3 | 1.169.5 | Runtime |
| `@tanstack/start-static-server-functions` | 1.167.43 | 1.167.44 | Runtime |
| `@tiptap/extension-color` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-heading` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-highlight` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-image` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-list` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-table` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-text-align` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-text-style` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extension-youtube` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/extensions` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/react` | 3.32.0 | 3.33.0 | Runtime |
| `@tiptap/starter-kit` | 3.32.0 | 3.33.0 | Runtime |
| `axios` | 1.20.0 | 1.21.0 | Runtime |
| `fumadocs-core` | 16.17.5 | 16.18.1 | Runtime |
| `fumadocs-mdx` | 15.4.7 | 15.5.0 | Runtime |
| `fumadocs-ui` | 16.17.5 | 16.18.1 | Runtime |
| `html-react-parser` | 6.1.8 | 6.1.9 | Runtime |
| `lucide` | 1.59.0 | 1.70.0 | Runtime |
| `lucide-react` | 1.59.0 | 1.70.0 | Runtime |
| `morphicons` | 2.0.0 | 2.0.2 | Runtime |
| `oxfmt` | 0.73.0 | 0.77.0 | Runtime |
| `react-resizable-panels` | 4.14.5 | 4.19.1 | Runtime |
| `shadcn` | 4.22.0 | 4.23.0 | Runtime |
| `ultracite` | 8.0.1 | 8.1.1 | Runtime |
| `@commitlint/cli` | 21.2.3 | 21.2.4 | Development |
| `@commitlint/config-conventional` | 21.2.3 | 21.2.4 | Development |
| `@tailwindcss/vite` | 4.3.3 | 4.3.5 | Development |
| `@types/node` | 26.6.5 | 26.6.6 | Development |
| `@vitejs/plugin-react` | 6.1.2 | 6.2.1 | Development |
| `nitro` | 3.0.260903-beta | 3.0.261103-rc | Development |
| `oxlint` | 1.88.0 | 1.92.0 | Development |
| `tailwindcss` | 4.3.3 | 4.3.5 | Development |
| `vite` | 8.3.4 | 8.3.6 | Development |

## Already at latest

| Package                           | From   | To     |
| --------------------------------- | ------ | ------ |
| `@base-ui/react`                  | 1.9.0  | 1.9.0  |
| `@embedpdf/react-pdf-viewer`      | 2.15.1 | 2.15.1 |
| `@faker-js/faker`                 | 10.6.0 | 10.6.0 |
| `@fontsource-variable/geist`      | 5.3.0  | 5.3.0  |
| `@fontsource-variable/geist-mono` | 5.3.0  | 5.3.0  |
| `@fuma-translate/react`           | 1.0.2  | 1.0.2  |
| `@tanstack/react-form`            | 1.33.5 | 1.33.5 |
| `@tanstack/react-table`           | 9.3.1  | 9.3.1  |
| `@types/lodash.debounce`          | 4.0.9  | 4.0.9  |
| `@types/lodash.throttle`          | 4.1.9  | 4.1.9  |
| `@uidotdev/usehooks`              | 2.4.1  | 2.4.1  |
| `class-variance-authority`        | 0.7.1  | 0.7.1  |
| `cmdk`                            | 1.1.1  | 1.1.1  |
| `cn`                              | 0.5.2  | 0.5.2  |
| `cnfast`                          | 0.2.0  | 0.2.0  |
| `color`                           | 5.0.3  | 5.0.3  |
| `embla-carousel-autoplay`         | 8.6.0  | 8.6.0  |
| `embla-carousel-react`            | 8.6.0  | 8.6.0  |
| `input-otp`                       | 1.5.0  | 1.5.0  |
| `lodash.debounce`                 | 4.0.8  | 4.0.8  |
| `lodash.throttle`                 | 4.1.1  | 4.1.1  |
| `react`                           | 19.3.1 | 19.3.1 |
| `react-day-picker`                | 10.0.2 | 10.0.2 |
| `react-dom`                       | 19.3.1 | 19.3.1 |
| `react-dropzone`                  | 20.1.4 | 20.1.4 |
| `react-number-format`             | 5.4.5  | 5.4.5  |
| `react-phone-number-input`        | 3.4.18 | 3.4.18 |
| `sonner`                          | 2.0.8  | 2.0.8  |
| `tw-animate-css`                  | 1.4.0  | 1.4.0  |
| `zod`                             | 4.6.7  | 4.6.7  |
| `@commitlint/format`              | 21.2.3 | 21.2.3 |
| `@types/mdx`                      | 2.0.14 | 2.0.14 |
| `@types/react`                    | 19.3.0 | 19.3.0 |
| `@types/react-dom`                | 19.3.0 | 19.3.0 |
| `husky`                           | 9.1.7  | 9.1.7  |
| `lint-staged`                     | 17.6.0 | 17.6.0 |
| `typescript`                      | 7.0.2  | 7.0.2  |

## Overall changelog

- **Fumadocs**: documentation layout accessibility improvements (skip link, mobile drawer Escape/focus handling, keyboard-visible anchor controls), TOC fixes, smaller exported Flexsearch indexes, framework plugin APIs, and component type compatibility fixes. UI/core/alias are synchronized at 16.18.1; MDX moves to 15.5.0. Sources: [16.18.0](https://github.com/fuma-nama/fumadocs/releases/tag/fumadocs@16.18.0), [16.18.1](https://github.com/fuma-nama/fumadocs/releases/tag/fumadocs@16.18.1).
- **TanStack**: Query moves to 5.107.1 with the matching query-core update; Router, Start, devtools and static server functions receive patch updates. Their version numbers are independently published and were kept at their individual latest tags. [Query release](https://github.com/TanStack/query/releases/tag/@tanstack%2Freact-query@5.107.1), [Router/Start releases](https://github.com/TanStack/router/releases).
- **Tiptap**: all 12 declared editor packages move together to 3.33.0. The release highlights safer handling of invalid collaborative content: content checks pause editing rather than delete invalid shared content. This project does not declare the collaboration extension. [Release notes](https://github.com/ueberdosis/tiptap/releases/tag/v3.33.0).
- **Axios**: adds response duration and optional Unicode Basic-auth usernames, with request/stream/runtime fixes. Header defaults now recognize plain maps and compatible AxiosHeaders instances; custom class instances used as defaults need conversion. [Release notes](https://github.com/axios/axios/releases/tag/v1.21.0).
- **Nitro**: beta to release candidate; adds experimental Bun/Rspack/Rsbuild builders, shared services and fetchService, and build-time renderer template compilation. Vite integration improves base URL handling and missing hashed asset responses. Server routes beneath the client assets directory now return 404 in production. [Release notes](https://github.com/nitrojs/nitro/releases/tag/v3.0.261103-rc).
- **Vite**: fixes CSS dependency collection, chunk hash stability, development reload/resolution behavior, SSR and worker edge cases; improves CSS/build performance. React plugin also moves to 6.2.1. [Vite release](https://github.com/vitejs/vite/releases/tag/v8.3.6), [React plugin changelog](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/CHANGELOG.md).
- **Tailwind CSS and Vite integration**: patch updates improve canonicalization performance, color-mix handling, WASI source scanning/loading, CSS parsing and published type declarations. [Release notes](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.5).
- **Oxlint/Oxfmt/Ultracite**: updated lint and formatting tools/presets. Oxlint improves rule correctness and import graph performance; Oxfmt fixes Tailwind class formatting and worker startup. Oxfmt changes the Vue formatter, which does not affect this React project. [Oxlint](https://github.com/oxc-project/oxc/releases/tag/oxlint_v1.92.0), [Oxfmt](https://github.com/oxc-project/oxc/releases/tag/oxfmt_v0.77.0), [Ultracite releases](https://github.com/haydenbleasel/ultracite/releases).
- **shadcn CLI**: upgrades its MCP server to SDK v2 and adds per-connection createServer support. Existing integrations consuming its server export may need the new tool registration API. [Release notes](https://github.com/shadcn-ui/ui/releases/tag/shadcn@4.23.0).
- **Other updates**: Lucide and Lucide React move together to 1.70.0, Morphicons to 2.0.2, resizable panels to 4.19.1, HTML parser to 6.1.9, Commitlint CLI/config to 21.2.4, and Node types to 26.6.6. These versions are registry-verified; individual intervening release details were not exhaustively reviewed. [Lucide](https://github.com/lucide-icons/lucide/releases), [Resizable panels](https://github.com/bvaughn/react-resizable-panels/releases), [HTML parser](https://github.com/remarkablemark/html-react-parser/releases), [Commitlint](https://github.com/conventional-changelog/commitlint/releases).

## Project compatibility fixes

- Corrected six stale re-export paths for the data table and editor helper modules.
- Explicitly forwarded FieldLabel htmlFor so the lint rule can recognize the association passed by callers. Runtime behavior is preserved; association remains the caller responsibility.
- Regenerated the Bun lockfile. Generated route and lazy-component registries did not require changes.

## Verification

- `bun run fix` — passed.
- `bun run check` — passed with zero warnings and errors.
- `bun run types:check` — passed.
- `bun run build` — passed; 73 pages prerendered. Non-fatal large-chunk warnings and retries for `/components`, `/home` and `/docs` were logged; failOnError is disabled in the existing build configuration.
- `bun outdated` — no outdated direct dependencies.
- `bun run dev` — started successfully; HTTP smoke checks returned 200 for `/`, `/docs/atoms/field`, `/docs/organisms/editor` and `/docs/organisms/data-table`.
- Graphify local code graph updated; extractor reported 115 files with no modeled symbols, mostly wrappers/configuration. No graph evidence substitutes for the source and compiler checks above.
- Browser interaction and responsive visual checks were not performed (no browser runtime available in WSL).

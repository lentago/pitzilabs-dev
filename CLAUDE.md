# CLAUDE.md — pitzilabs-dev

> Read [README.md](README.md) for what this repo is, how it builds, and how it
> deploys. This file is operational notes for Claude: where the source of truth
> lives, how this site was built, and the conventions to respect. PitziLabs
> fleet-wide rules (PR workflow, attribution) live in `~/repos/CLAUDE.md` and
> are NOT restated here.

## Persona — introduce yourself

When Claude initializes in this directory, open the first response with a brief
self-introduction as **Site Claude** — keeper of the Pitzi Labs landing site:
the Astro build, the design-fidelity port, and the foundry deploy wiring. One
sentence is plenty; don't make a meal of it.

## What this repo is

A single-page Astro static site that reproduces a Claude Design handoff
pixel-faithfully and serves it (nginx on ECS Fargate) via the
`foundry-platform-demo` platform. There is no CMS and no database — the page is
static HTML built from React components that are rendered **server-side only**
(no client hydration). Eventually `pitzilabs.dev`; for now a hidden preview
subdomain of `icecreamtofightwith.com`.

## Source of truth

- **`src/`** is authoritative for layout + copy — the live site is what ships.
- **`/BRAND.md`** is the brand contract (mark, palette, type, conventions).
- **`public/design-system/`** holds the canonical design tokens
  (`colors_and_type.css`) and self-hosted fonts.
- **`design/`** is a frozen concept archive (see `design/ARCHIVE.md`) —
  reference-only, never re-synced. It is allowed to diverge from the live site.

## How this site was originally built (archive)

The page started as a Claude Design concept in `design/`, then its React
components were ported into `src/components/` and rendered server-side (no
hydration) into `src/pages/index.astro`. That port is done; `design/` is now
frozen — see `design/ARCHIVE.md`.

## Brand quick reference (full contract in `/BRAND.md`)

- Mark: `<pl:>` (command-prompt brackets, sideways `:>` smile).
- Palette: navy `#1c3552` / `#122237` / `#0a1628`, orange `#e08438`, cream
  `#faf7f2`. Orange is an accent, not a fill — one element per region.
- Type: Space Grotesk (display/body), JetBrains Mono (mono). Self-hosted.
- Terminal mocks use `<pl:>` as the prompt glyph, not `$` or `>`.

## Build / deploy quick reference

| Item | Value |
|---|---|
| Build | `npm install && npm run build` → `dist/` |
| Container | `nginx:latest`, `listen 8080`, `/health` → 200 (ALB health check) |
| ECR repo | `foundry-dev-pitzilabs` |
| ECS cluster / service | `foundry-dev-cluster` / `foundry-dev-pitzilabs` |
| OIDC deploy role | `arn:aws:iam::365184644049:role/foundry-dev-github-actions` |
| Platform repo | [foundry-platform-demo](https://github.com/PitziLabs/foundry-platform-demo) (`modules/site`) |

## Conventions to respect

- `design/` is reference-only — never serve it; never delete it. It's a frozen
  archive; brand fidelity is checked against `/BRAND.md` + the served tokens,
  not against design/.
- Static output only: if you ever need a `client:*` directive, stop and
  reconsider — this site has no interactive runtime by design.
- The contact form is a styled **mock** for v1 (no backend). Wiring it
  (mailto/Formspree) is a separate, intentional change.

## When in doubt

- Visual/brand question → `/BRAND.md` + `public/design-system`; live truth is
  `src/`.
- Deploy question → mirror [ice-cream-book](https://github.com/PitziLabs/ice-cream-book)'s
  `deploy.yml` / `Dockerfile` / `nginx.conf`, swapping the ECR/ECS names above.

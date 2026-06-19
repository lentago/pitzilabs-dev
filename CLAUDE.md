# CLAUDE.md — pitzilabs-dev

> Read [README.md](README.md) for what this repo is, how it builds, and how it
> deploys. This file is operational notes for Claude: where the design truth
> lives, the porting brief, and the conventions to respect. PitziLabs
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

## The design is the source of truth — `design/`

`design/` holds the exported Claude Design bundle. **It is canonical for the
visual design.** Before changing anything visual:

1. Read `design/README.md`, then the transcripts in `design/chats/` (intent).
2. The page is `design/project/Pitzi Labs Landing.html` (and its `-print`
   twin). The real design lives in `design/project/components/*.jsx` and the
   tokens in `design/project/design-system/colors_and_type.css`.

## Porting brief (how the prototype becomes the site)

- **Reuse the components' exact values.** Port each `design/project/components/
  *.jsx` into `src/components/` as an ES module (the prototype attaches them to
  `window`; convert to `import`/`export`). Keep the inline-style objects as-is
  to avoid visual drift.
- **Render server-side, no hydration.** Import the React components into
  `src/pages/index.astro` with NO `client:*` directive. No React ships to the
  browser. Compose in this order: `Nav · HeroDark · StatusStrip · ServicesGrid
  · CaseStudy · Principles · Experience · Contact · Footer`.
- **Drop the dev-only Tweaks panel** (`Tweaks.jsx`, `tweaks-panel.jsx`). Bake
  its defaults: hero variant `dark`, accent `#e08438`, status strip shown.
- **Hover → CSS.** The prototype's `onMouseEnter/onMouseLeave` handlers won't
  run without hydration; re-express the few that matter as CSS `:hover`. Keep
  the `pl-pulse` keyframe (the LIVE dot).
- **Don't ship the print harness** — no `@page`/auto-`window.print()` from the
  `-print.html` variant. Sensible `@media print` is fine, the auto-print is not.
- **Copy is load-bearing** — headline "Production that shows up when the
  need does.", "Queue's open.", the six principles, the timeline. Don't
  paraphrase.

## Brand quick reference (from `design/project/design-system/README.md`)

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

- `design/` is reference-only — never serve it; never delete it (it's the
  fidelity baseline a reviewer checks against).
- Static output only: if you ever need a `client:*` directive, stop and
  reconsider — this site has no interactive runtime by design.
- The contact form is a styled **mock** for v1 (no backend). Wiring it
  (mailto/Formspree) is a separate, intentional change.

## When in doubt

- Visual question → diff against `design/project/`.
- Deploy question → mirror [ice-cream-book](https://github.com/PitziLabs/ice-cream-book)'s
  `deploy.yml` / `Dockerfile` / `nginx.conf`, swapping the ECR/ECS names above.

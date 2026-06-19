# pitzilabs-dev — Pitzi Labs landing site

The landing site for **Pitzi Labs**, the infrastructure-operations consulting
practice — destined for [pitzilabs.dev](https://pitzilabs.dev). It's an Astro
static site served as a container on the
[foundry-platform-demo](https://github.com/PitziLabs/foundry-platform-demo)
AWS stack (GitHub OIDC → ECR → ECS Fargate → ALB), the same platform that runs
[icecreamtofightwith.com](https://icecreamtofightwith.com).

**Authorship:** The code and design in this repo are co-written with
[Claude](https://claude.ai) (Anthropic). I direct the work, supply the brand
and the copy, and review the output; Claude writes the code. I'm an
infrastructure operator, not a software engineer or a designer — please don't
read this repo as a portfolio of either.

## Why this exists

Pitzi Labs needed a front door. Rather than reach for a site builder, the page
was designed in [Claude Design](https://claude.ai/design) — a one-page
consulting landing with a deliberately infrastructure-engineer aesthetic
(terminal-adjacent, monospace-forward, a navy + orange brand pulled from the
`<pl:>` command-prompt mark) — and then handed off to be rebuilt as a real,
production static site on the same platform the practice itself showcases. The
case study on the page is that platform, running live.

## What's here

| Path | Purpose |
|---|---|
| `design/` | Frozen archive — the original Claude Design concept + transcripts (provenance). Not served, not authoritative; see `/BRAND.md` and `design/ARCHIVE.md`. |
| `BRAND.md` | The brand contract for the live site — mark, palette, type, conventions. Canonical token *values* live in `public/design-system/colors_and_type.css`. |
| `src/` | The Astro site (source of truth for layout + copy): `layouts/Layout.astro` (HTML shell + tokens), `pages/index.astro` (the page), `components/` (the ported sections). |
| `public/design-system/` | The served design tokens (`colors_and_type.css`) and self-hosted fonts (Space Grotesk, JetBrains Mono). |
| `public/favicon.svg` | The `<pl:>` brand-chip favicon. |
| `Dockerfile` / `nginx.conf` | Packages the built `dist/` into an `nginx` container on port `8080` with a `/health` endpoint for the ALB. |
| `.github/workflows/deploy.yml` | Build → ECR → ECS rollout via OIDC (added with the first real deploy). |

## How it's built & served

```bash
npm install
npm run build      # → dist/ (static HTML + CSS, no client JS)
npm run preview    # local preview
```

The design components are **rendered server-side at build time** (no client
hydration) — the output is plain HTML plus the design-system CSS. Docker copies
`dist/` into `nginx` (`:8080`, `/health`); GitHub Actions builds the image,
pushes it to ECR `foundry-dev-pitzilabs`, and rolls the ECS service
`foundry-dev-pitzilabs` on cluster `foundry-dev-cluster` — all via the
foundry-platform OIDC role, no long-lived credentials.

## Preview → promotion

While the design is iterated, the site is reachable only at a **hidden,
unguessable subdomain** of `icecreamtofightwith.com` (covered by that domain's
wildcard certificate, not linked anywhere). Once it's ready it gets **promoted
to the `pitzilabs.dev` FQDN** — see the `modules/site` notes in
foundry-platform-demo. The skeleton service and image are reused unchanged; the
hidden subdomain is then retired.

---

*Part of the [PitziLabs](https://github.com/PitziLabs) portfolio.*

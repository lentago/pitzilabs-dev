# lab/ — design dev/staging

The **active design workspace** for Pitzi Labs. Where pulled-down concepts and
in-flight explorations live *before* they're good enough to ship — or get parked
or dropped.

## The three tiers

This repo runs design like an environment pipeline:

| Tier | Path | Role | Mutable? |
|------|------|------|----------|
| **archive** | `design/` | The original Claude Design concept + transcripts. Provenance and the authorship story. Frozen 2026-06-19. | **No** — never edit (`design/ARCHIVE.md`). Allowed to diverge from live. |
| **dev / staging** | `lab/` (here) | Active exploration. New concepts pulled from [claude.ai/design](https://claude.ai/design), evaluated against the brand, then promoted or parked. | **Yes** — churn freely. Nothing here is shipped. |
| **prod** | `src/` | The live site (`src/` → `dist/` → ECS). | **Yes** — but only via deliberate promotion. |

Brand contract for all three: **`/BRAND.md`** + the canonical tokens in
**`public/design-system/colors_and_type.css`** (that CSS wins).

## The loop

```
pull → evaluate → promote │ park │ drop
```

1. **Pull** a concept from a Claude Design project into a folder under `lab/`
   (the [claude_design MCP / `/design-sync`] handoff). Record the source
   project id in that folder's `README.md` so it can be re-pulled.
2. **Evaluate** against `/BRAND.md` and the live site:
   - **Brand facts are not negotiable.** Live is authoritative. Reconcile
     palette, tagline, founding year, email, and voice to the live site —
     don't preserve a concept's stale facts as if they were truth.
   - Keep what's a *novel concept or good idea*; drop what merely restates
     what's already shipped or conflicts with the brand.
3. **Promote / park / drop:**
   - **Promote** → port into `src/` (server-rendered, no hydration — see
     `CLAUDE.md`) or, for non-site deliverables, into their real home (e.g. the
     org README → `pitzi-labs/.github`). Then delete or thin the `lab/` copy.
     Promotion to `src/` goes through a PR that must pass the required **`Build`**
     check (the Astro build) before it can merge — see `CLAUDE.md` → *CI & branch
     protection*.
   - **Park** → leave it here with a note in this file's *Parked ideas*.
   - **Drop** → delete it; record the lesson below if it's worth remembering.

### Lab conventions

- **No forked design systems.** Explorations reference the canonical live tokens
  (`../../public/design-system/colors_and_type.css`), never a private copy.
  A concept pulled with its own token file gets that file dropped on import.
- **Renderable.** HTML explorations should open and render locally
  (`python3 -m http.server` from the repo root, then browse to the file) so a
  reviewer can *see* the option, not just read it.
- **Brand facts live in one place.** When the live site changes a fact, fix it
  here too (or mark the exploration stale) — don't let `lab/` rot into a second,
  contradictory source of truth.

## What's in here now

| Folder | Concept | Status | Source |
|--------|---------|--------|--------|
| `org-readme/` | GitHub **org-profile** README — 6 variants across two chooser harnesses. **Different deliverable** (ships to `pitzi-labs/.github`, not this site). | Exploring; facts reconciled to live; **voice still needs a pass** (see its README). | Claude Design project `acecb24c-d3f5-4db2-9410-ff21008091f2` ("Pitzi Labs"). |

## Parked ideas

- **Visual token gallery** — a per-token preview-card gallery (colors, type
  scale, spacing, radii, shadows, components) to back `/BRAND.md`'s prose with a
  *visual* reference the way a real design system has. The concept came from a
  separate, now-superseded Claude Design project
  (`8dee3c9a-805b-4bda-8cc6-ffa91f733e29`, "Pitzi Labs Design System") that was
  built on an **industrial-orange `#c4533a` / warm-carbon palette** — that
  palette conflicts with the live navy + orange brand and was **discarded**.
  Keep the *gallery idea*; if built, theme it to the live tokens.
- **Business cards** — `/BRAND.md` lists the `<pl:>` chip as a business-card use;
  a card concept exists in the frozen `design/project/Pitzi Labs Business
  Cards.html`. Re-explore against live tokens if/when needed.

## Dropped (lessons)

- **The `8dee3c9a` "Pitzi Labs Design System" palette** (industrial-orange on
  carbon). Predates the navy + orange brand the site settled on. A design-system
  export is only useful if it's themed to the *current* brand — the gallery
  structure was worth keeping, the colors were not.

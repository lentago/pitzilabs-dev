# brand-assets — GitHub avatar candidates

Staging (`lab/` tier) for the **GitHub identity marks** — the org avatar
(`github.com/PitziLabs`) and the personal avatar (`github.com/cpitzi`). Churn
freely; nothing here ships from `src/`.

> **Different deliverable.** Avatars are *org/personal identity*, not the landing
> site. When a direction is chosen, the SVG sources promote to the **`.github`
> (dotgithub) org meta-repo** (fleet identity home), and the rendered PNGs get
> **hand-uploaded** to GitHub — there is no API/`gh` path to set an avatar.

## Source

Hand-authored vector, derived from [`../../public/favicon.svg`](../../public/favicon.svg)
and the chip spec in [`/BRAND.md`](../../BRAND.md) ("Chip — a small navy square
with the orange brackets inside. Use for nav, business cards, favicons"). **Not**
pulled from Claude Design — the mark is already vectorized, so reproducing it is a
parametric SVG edit, exact to the tokens and version-controlled. (Claude Design /
`/design-sync` is reserved for net-new visual systems like a profile banner or
og:image cards — see [`../org-readme/`](../org-readme/).)

## Chosen

| File | Glyph | Corners | For |
|------|-------|---------|-----|
| `pl-navy.svg`                  | `<pl:>`  | rounded (rx 112) | Org — matches favicon + site nav |
| `cjp-brackets-navy.svg`        | `<cjp:>` | rounded (rx 112) | Personal — honors the command-prompt motif |
| `pl-navy-square.svg`           | `<pl:>`  | square (sharp)   | Org — surfaces that show the full square |
| `cjp-brackets-navy-square.svg` | `<cjp:>` | square (sharp)   | Personal — surfaces that show the full square |

**Rounded vs square:** identical mark/tokens, only the corner radius differs.
GitHub **circle-crops** avatars, so the corners are invisible there — the square
variants are for surfaces that show the full square edge (favicons, slides,
og/social cards, print).

`contact-sheet.html` is the decision record — it shows all four originals (the two
above plus the dropped `pl-cream` / `cjp-plain` variants) on a GitHub-dark
backdrop, each as the **square chip + the circle crop GitHub actually applies**.

## Decisions (all resolved 2026-06-21)

- ✅ **Casing** — lowercase (`<pl:>`, per BRAND.md).
- ✅ **Org scheme** — navy-fill (`pl-navy`). Identical to favicon/nav; holds an
  edge on light and dark GitHub surfaces.
- ✅ **Personal brackets** — `<cjp:>` (lowercase, brackets) — consistent with the
  org mark and the command-prompt motif.

## Render

```bash
./render.sh   # needs google-chrome on PATH; writes contact-sheet.png + *-512.png
```

Headless Chrome (not rsvg/resvg) so the repo's self-hosted JetBrains Mono loads
via `@font-face` — the candidates use the real brand font, not a fallback.

## Promote — ✅ done (2026-06-21)

Canonical sources + 512px renders promoted to **`PitziLabs/.github` →
`brand/avatars/`** (the fleet identity home). This dir stays as the
**staging / decision record** — `contact-sheet.html` shows the four originals and
the two open calls Chris resolved.

Still a manual step (no GitHub avatar API): upload `pl-navy-512.png` → Org
Settings → Profile → avatar; `cjp-brackets-navy-512.png` → Settings → Profile →
Profile picture. Re-render either at any size with `./render.sh`.

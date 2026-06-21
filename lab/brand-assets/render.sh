#!/usr/bin/env bash
# Render the avatar candidates. Headless Chrome is used (not rsvg/resvg) because
# it loads the repo's self-hosted JetBrains Mono via @font-face for exact glyphs.
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-google-chrome}"

# Contact sheet (for review / surfacing)
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1280,900 --default-background-color=00000000 \
  --screenshot=contact-sheet.png "file://$PWD/contact-sheet.html"

# Per-candidate 512² PNGs (final deliverables — run once a direction is chosen).
# Each SVG is wrapped in a 512×512 page so the @font-face applies to <text>.
for svg in pl-navy cjp-brackets-navy pl-navy-square cjp-brackets-navy-square; do
  [ -f "$svg.svg" ] || continue
  cat > ".wrap-$svg.html" <<HTML
<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:'JetBrains Mono';src:url('../../public/design-system/assets/fonts/jetbrains-mono-latin.woff2') format('woff2');font-weight:100 800;font-display:block}
html,body{margin:0;width:512px;height:512px}svg{display:block}
</style>$(cat "$svg.svg")
HTML
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=512,512 --default-background-color=00000000 \
    --screenshot="$svg-512.png" "file://$PWD/.wrap-$svg.html"
  rm -f ".wrap-$svg.html"
done
echo "rendered: contact-sheet.png + *-512.png"

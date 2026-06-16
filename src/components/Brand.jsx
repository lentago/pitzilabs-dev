// Brand mark — reinterprets the <PL:> command-prompt+smile logo.
// Renders as: < pl :> where the ":>" is a subtle sideways smile.
export function BrandMark({ size = 28, inverted = false, monochrome = false }) {
  const navy   = inverted ? "#faf7f2" : "#1c3552";
  const orange = monochrome ? navy : "#e08438";
  const ink    = inverted ? "#1c3552" : "#faf7f2";
  const radius = Math.round(size * 0.21);
  const fontSize = Math.round(size * 0.42);
  return (
    <div style={{
      width: size, height: size, background: navy,
      borderRadius: radius,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-mono)", fontWeight: 700,
      color: ink, fontSize, letterSpacing: "-0.04em", lineHeight: 1,
      flexShrink: 0, gap: 1
    }}>
      <span style={{ color: orange }}>&lt;</span>
      <span>pl</span>
      <span style={{ color: orange }}>:&gt;</span>
    </div>
  );
}

// Wordmark — used inline next to the mark.
export function BrandWord({ size = 17, color = "var(--fg1)" }) {
  return (
    <span style={{
      fontFamily: "var(--font-display)", fontWeight: 700,
      fontSize: size, color, letterSpacing: "-0.02em", whiteSpace: "nowrap"
    }}>Pitzi Labs</span>
  );
}

// Standalone smile glyph — for use as a decorative accent.
export function PromptSmile({ size = 24, color = "var(--color-accent)" }) {
  return (
    <span style={{
      fontFamily: "var(--font-mono)", fontWeight: 700,
      fontSize: size, color, letterSpacing: "-0.05em", lineHeight: 1
    }}>:&gt;</span>
  );
}

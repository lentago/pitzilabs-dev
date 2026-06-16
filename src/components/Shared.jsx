// Shared primitives for the Pitzi Labs landing page.
import { BrandMark } from "./Brand.jsx";

export function Mark({ size = 28, inverted = false }) {
  // Re-routes the legacy Mark to the new BrandMark so existing call sites
  // pick up the <pl:> command-prompt motif and navy chip automatically.
  return <BrandMark size={size} inverted={inverted} />;
}

export function Eyebrow({ children, tone = "muted", style }) {
  const color = tone === "accent" ? "var(--color-accent)"
              : tone === "dark" ? "#b8aea4"
              : "var(--fg2)";
  return (
    <div style={{
      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 500,
      textTransform: "uppercase", letterSpacing: "0.08em",
      color, ...style
    }}>{children}</div>
  );
}

export function StatusDot({ status = "ok", size = 8 }) {
  const colors = { ok: "#4a9e82", warn: "#d4a12e", info: "#e08438", err: "#c54a2a" };
  return (
    <span style={{
      width: size, height: size, borderRadius: 999,
      background: colors[status], flexShrink: 0,
      boxShadow: `0 0 0 3px ${colors[status]}22`
    }} />
  );
}

// A small "prompt" element — used decoratively for runbook-flavored bits
export function Prompt({ children, style }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", ...style }}>
      <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>&lt;pl:&gt;</span>{" "}{children}
    </span>
  );
}

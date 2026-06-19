function Hero({ variant = "dark" }) {
  // variant: "dark" | "paper" | "split"
  if (variant === "paper") return <HeroPaper />;
  if (variant === "split") return <HeroSplit />;
  return <HeroDark />;
}

function HeroDark() {
  return (
    <header id="top" style={{
      background: "linear-gradient(145deg,#0a1628,#1c3552)",
      color: "var(--fg-on-dark)",
      padding: "112px 32px 120px",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(224,132,56,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(224,132,56,0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        pointerEvents: "none"
      }} />
      {/* Giant ghost smile glyph */}
      <div style={{
        position: "absolute", right: -40, bottom: -120,
        fontFamily: "var(--font-mono)", fontWeight: 700,
        fontSize: 480, color: "rgba(224,132,56,0.07)",
        lineHeight: 0.85, letterSpacing: "-0.05em",
        userSelect: "none", pointerEvents: "none"
      }}>:&gt;</div>

      <div style={{ maxWidth: 1024, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <StatusDot status="ok" size={8} />
          <Eyebrow tone="dark">
            Practice · EST. 1999 · Infrastructure ops
          </Eyebrow>
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(48px, 7vw, 88px)",
          lineHeight: 1.02, letterSpacing: "-0.035em",
          margin: "0 0 28px", maxWidth: 920
        }}>
          Production{" "}
          <span style={{ color: "var(--color-accent)" }}>that shows up</span>
          {" "}when the{" "}<span style={{ fontStyle: "italic", fontWeight: 500 }}>need</span>{" "}does.{" "}
          <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontWeight: 700, letterSpacing: "-0.05em" }}>:&gt;</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: 19, color: "#d8cec2",
          margin: "0 0 36px", maxWidth: 640, lineHeight: 1.55
        }}>
          Twenty-five years of bare-metal data centers, 24×7 ops, and single-homed
          environments — now bridging into cloud-native architecture by building
          it, breaking it, and operating it.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <a href="#contact" style={{
            background: "var(--color-accent)", color: "#fff", border: 0,
            padding: "13px 22px", borderRadius: 6, fontFamily: "var(--font-body)",
            fontWeight: 500, fontSize: 14.5, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 10,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)"
          }}>
            Book a consult
            <span style={{ opacity: 0.7 }}>→</span>
          </a>
          <a href="#work" style={{
            background: "transparent", color: "#faf7f2",
            border: "1px solid rgba(250,247,242,0.25)",
            padding: "13px 22px", borderRadius: 6, fontFamily: "var(--font-body)",
            fontWeight: 500, fontSize: 14.5, textDecoration: "none"
          }}>
            View runbook
          </a>

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10, color: "#b8aea4", fontFamily: "var(--font-mono)", fontSize: 12 }}>
            <span>→</span>
            <span>christopher@pitzilabs.com</span>
          </div>
        </div>
      </div>

      {/* Corner runbook snippet */}
      <div style={{
        position: "absolute", right: 40, bottom: 28,
        fontFamily: "var(--font-mono)", fontSize: 11,
        color: "rgba(250,247,242,0.35)",
        textAlign: "right", lineHeight: 1.7,
        display: "grid", gap: 2
      }}>
        <div>~/pitzi-labs/runbook.md</div>
        <div>build it · break it · operate it</div>
      </div>
    </header>);

}

function HeroPaper() {
  return (
    <header id="top" style={{
      background: "var(--color-bg)",
      padding: "96px 32px 72px",
      borderBottom: "1px solid var(--color-border)",
      position: "relative"
    }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <Eyebrow tone="accent" style={{ marginBottom: 20 }}>
          ◆ Practice · EST. 1999 · Infrastructure ops
        </Eyebrow>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(48px, 7vw, 88px)",
          lineHeight: 1.02, letterSpacing: "-0.035em",
          margin: "0 0 28px", maxWidth: 920, color: "var(--fg1)"
        }}>
          Production <span style={{ color: "var(--color-accent)" }}>that shows up</span> when the <span style={{ fontStyle: "italic", fontWeight: 500 }}>need</span> does.
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 19, color: "var(--fg2)", margin: "0 0 36px", maxWidth: 640, lineHeight: 1.55 }}>
          Twenty-five years of bare-metal data centers, 24×7 ops, and single-homed environments — now bridging into cloud-native architecture by building it, breaking it, and operating it.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="#contact" style={{ background: "var(--color-accent)", color: "#fff", padding: "13px 22px", borderRadius: 6, fontSize: 14.5, fontWeight: 500, textDecoration: "none" }}>Book a consult →</a>
          <a href="#work" style={{ background: "#fff", color: "var(--fg1)", padding: "13px 22px", borderRadius: 6, fontSize: 14.5, fontWeight: 500, textDecoration: "none", border: "1px solid var(--color-border-strong)" }}>View runbook</a>
        </div>
      </div>
    </header>);

}

function HeroSplit() {
  return (
    <header id="top" style={{
      background: "var(--color-bg)",
      borderBottom: "1px solid var(--color-border)"
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1.2fr 1fr",
        minHeight: 580
      }}>
        <div style={{ padding: "96px 48px 72px" }}>
          <Eyebrow tone="accent" style={{ marginBottom: 24 }}>
            Practice · EST. 1999 · Infrastructure ops
          </Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(44px, 5.5vw, 76px)",
            lineHeight: 1.02, letterSpacing: "-0.035em",
            margin: "0 0 24px", color: "var(--fg1)"
          }}>
            Production{" "}
            <span style={{ color: "var(--color-accent)" }}>that shows up</span>
            {" "}when the need does.
          </h1>
          <p style={{ fontSize: 18, color: "var(--fg2)", margin: "0 0 32px", maxWidth: 520, lineHeight: 1.55 }}>
            Twenty-five years of bare-metal data centers, 24×7 ops, and
            single-homed environments — now bridging into cloud-native
            architecture by building it, breaking it, and operating it.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#contact" style={{ background: "var(--color-accent)", color: "#fff", padding: "13px 22px", borderRadius: 6, fontSize: 14.5, fontWeight: 500, textDecoration: "none" }}>Book a consult →</a>
            <a href="#work" style={{ background: "#fff", color: "var(--fg1)", padding: "13px 22px", borderRadius: 6, fontSize: 14.5, fontWeight: 500, textDecoration: "none", border: "1px solid var(--color-border-strong)" }}>View runbook</a>
          </div>
        </div>

        {/* Right: terminal card */}
        <div style={{
          background: "#0a1628",
          padding: "48px 40px",
          display: "flex", alignItems: "center"
        }}>
          <pre style={{
            fontFamily: "var(--font-mono)", fontSize: 13,
            color: "#d8cec2", lineHeight: 1.75,
            background: "transparent", padding: 0, margin: 0, border: 0
          }}>
<span style={{ color: "#9a948c" }}>{"# "}~/pitzi-labs/runbook.md</span>{"\n\n"}
<span style={{ color: "#e08438" }}>&lt;pl:&gt;</span> terraform plan -out tfplan{"\n"}
<span style={{ color: "#9a948c" }}>  Plan: 3 to add, 1 to change, 0 to destroy.</span>{"\n"}
<span style={{ color: "#e08438" }}>&lt;pl:&gt;</span> aws sts get-caller-identity | jq .Arn{"\n"}
<span style={{ color: "#9a948c" }}>  "arn:aws:sts::...:oidc-plan-role/..."</span>{"\n"}
<span style={{ color: "#e08438" }}>&lt;pl:&gt;</span> ./scripts/pre-apply-guardrails.sh{"\n"}
<span style={{ color: "#4a9e82" }}>  ✓ least-privilege IAM</span>{"\n"}
<span style={{ color: "#4a9e82" }}>  ✓ multi-AZ RDS</span>{"\n"}
<span style={{ color: "#4a9e82" }}>  ✓ WAFv2 attached</span>{"\n"}
<span style={{ color: "#d4a12e" }}>  ! NAT gateway cost flag</span>{"\n"}
<span style={{ color: "#e08438" }}>&lt;pl:&gt;</span> <span style={{ color: "#faf7f2", background: "#e0843844", padding: "0 4px" }}>terraform apply tfplan</span>
          </pre>
        </div>
      </div>
    </header>);

}

Object.assign(window, { Hero });
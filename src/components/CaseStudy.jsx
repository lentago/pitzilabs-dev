import { Eyebrow } from "./Shared.jsx";

export function CaseStudy() {
  const stats = [
    { label: "Monthly run cost",   value: "$130",     note: "multi-env, managed" },
    { label: "Cold-start to prod", value: "< 9 min",  note: "terraform apply" },
    { label: "Uptime (90d)",       value: "99.98%",   note: "0 paged incidents" },
    { label: "IAM blast radius",   value: "scoped",   note: "OIDC-only, no keys" },
  ];

  return (
    <section id="work" style={{
      background: "var(--color-ink-strong)",
      color: "var(--fg-on-dark)",
      padding: "96px 40px",
      position: "relative", overflow: "hidden"
    }}>
      {/* graph-paper backing */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(250,247,242,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.02) 1px, transparent 1px)",
        backgroundSize: "48px 48px", pointerEvents: "none"
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: 72, alignItems: "start"
        }}>
          <div>
            <Eyebrow tone="dark" style={{ color: "var(--color-accent)", marginBottom: 16 }}>
              ◆ Selected work · 2025
            </Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1.05,
              letterSpacing: "-0.03em", margin: "0 0 24px"
            }}>
              Ice Cream to <span style={{ color: "var(--color-accent)" }}>Fight With.</span>
            </h2>
            <p style={{
              fontSize: 17, color: "#d8cec2", lineHeight: 1.6,
              margin: "0 0 20px", maxWidth: 540
            }}>
              A live production deployment — recipe site for home cooks, built
              on the Foundry Platform. Not a portfolio piece. A real app, under
              real load, paying real AWS bills.
            </p>
            <p style={{
              fontSize: 17, color: "#d8cec2", lineHeight: 1.6,
              margin: "0 0 28px", maxWidth: 540
            }}>
              Terraform-managed from the root module down. Plan-on-PR,
              apply-on-merge via OIDC. The blast radius of a compromised
              pipeline is limited to its scope. Runs on personal money.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#" style={{
                background: "var(--color-accent)", color: "#fff",
                padding: "11px 18px", borderRadius: 6, fontSize: 14, fontWeight: 500,
                textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8
              }}>
                icecreamtofightwith.com <span style={{ opacity: 0.7 }}>↗</span>
              </a>
              <a href="#" style={{
                background: "transparent", color: "#faf7f2",
                border: "1px solid rgba(250,247,242,0.25)",
                padding: "11px 18px", borderRadius: 6, fontSize: 14, fontWeight: 500,
                textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 8
              }}>
                github.com/PitziLabs <span style={{ opacity: 0.7 }}>↗</span>
              </a>
            </div>
          </div>

          {/* Browser chrome mock */}
          <div style={{
            background: "#1f1d1a",
            border: "1px solid #3a3530",
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}>
            <div style={{
              background: "#2a2724",
              padding: "10px 14px",
              display: "flex", alignItems: "center", gap: 10,
              borderBottom: "1px solid #3a3530"
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#5a524a" }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#5a524a" }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#5a524a" }} />
              </div>
              <div style={{
                flex: 1, background: "#1a1816",
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "#9a948c", padding: "5px 10px",
                borderRadius: 4
              }}>
                <span style={{ color: "#4a9e82" }}>●</span> icecreamtofightwith.com/brown-butter
              </div>
            </div>
            <div style={{ background: "#faf7f2", padding: "28px 28px 32px" }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--color-accent)", letterSpacing: "0.1em",
                textTransform: "uppercase", marginBottom: 10
              }}>A FUCKING ORDEAL · TIER 3</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 28, color: "var(--fg1)",
                margin: "0 0 10px", letterSpacing: "-0.02em"
              }}>Brown butter, bourbon, pecan.</h3>
              <p style={{
                fontSize: 13, color: "var(--fg2)",
                margin: "0 0 16px", lineHeight: 1.55
              }}>
                A high-wire act of cultural translation. You absolute lunatic.
                We love you for it.
              </p>
              <div style={{
                display: "flex", gap: 6, flexWrap: "wrap",
                paddingTop: 12, borderTop: "1px solid var(--color-border)"
              }}>
                {["45 MIN", "CHURN", "STOVE", "PATIENCE"].map(t => (
                  <span key={t} style={{
                    fontFamily: "var(--font-mono)", fontSize: 10,
                    color: "var(--fg2)", background: "var(--color-surface-sunk)",
                    border: "1px solid var(--color-border)",
                    padding: "3px 7px", borderRadius: 2, letterSpacing: "0.05em",
                    whiteSpace: "nowrap"
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          marginTop: 64, paddingTop: 32,
          borderTop: "1px solid rgba(250,247,242,0.1)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 32
        }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10.5,
                color: "#9a948c", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: 10
              }}>{s.label}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 38, color: "#faf7f2", letterSpacing: "-0.03em",
                lineHeight: 1, marginBottom: 6
              }}>{s.value}</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 12.5,
                color: "#b8aea4"
              }}>{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

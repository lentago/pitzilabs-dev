import { Eyebrow, Mark, StatusDot } from "./Shared.jsx";

export function Contact() {
  return (
    <section id="contact" style={{
      background: "var(--color-ink-strong)",
      color: "var(--fg-on-dark)",
      padding: "112px 40px 96px",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(250,247,242,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,242,0.025) 1px, transparent 1px)",
        backgroundSize: "48px 48px", pointerEvents: "none"
      }} />

      <div style={{
        maxWidth: 1080, margin: "0 auto", position: "relative",
        display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 72, alignItems: "start"
      }}>
        <div>
          <Eyebrow tone="dark" style={{ color: "var(--color-accent)", marginBottom: 16 }}>
            ◆ Contact · POST /consult
          </Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(44px, 5.5vw, 72px)", lineHeight: 1.02,
            letterSpacing: "-0.035em", margin: "0 0 24px"
          }}>
            Queue's <span style={{ color: "var(--color-accent)" }}>open.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#d8cec2", lineHeight: 1.55, margin: "0 0 40px", maxWidth: 480 }}>
            Short engagements, long ones, and one-off audits. If you know what
            you need, send the repo. If you don't, send the symptoms.
          </p>

          <div style={{ display: "grid", gap: 20, maxWidth: 480 }}>
            {[
              { k: "Email",    v: "christopher@pitzilabs.com" },
              { k: "GitHub",   v: "github.com/PitziLabs" },
              { k: "Signal",   v: "available on request" },
              { k: "Response", v: "< 24h on weekdays" },
            ].map(row => (
              <div key={row.k} style={{
                display: "grid", gridTemplateColumns: "120px 1fr",
                paddingBottom: 16,
                borderBottom: "1px solid rgba(250,247,242,0.1)",
                alignItems: "baseline"
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "#9a948c", letterSpacing: "0.08em",
                  textTransform: "uppercase"
                }}>{row.k}</span>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 15,
                  color: "#faf7f2"
                }}>{row.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal-style form — static styled MOCK for v1 (no backend). */}
        <div style={{
          background: "#1f1d1a",
          border: "1px solid #3a3530",
          borderRadius: 10,
          padding: "28px 28px 32px",
          fontFamily: "var(--font-mono)", fontSize: 13,
          boxShadow: "0 12px 32px rgba(0,0,0,0.25)"
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", marginBottom: 20,
            paddingBottom: 14, borderBottom: "1px solid #3a3530"
          }}>
            <span style={{ color: "#9a948c", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>~/consult.sh</span>
            <span style={{ display: "flex", gap: 5 }}>
              {[0,1,2].map(n => <span key={n} style={{ width: 8, height: 8, borderRadius: 999, background: "#4a4540" }} />)}
            </span>
          </div>

          <div style={{ color: "#d8cec2", lineHeight: 1.9 }}>
            <div><span style={{ color: "#e08438", fontWeight: 600 }}>&lt;pl:&gt;</span> <span style={{ color: "#9a948c" }}>./new-consult --your=</span></div>
            <input type="text" placeholder="name" defaultValue="" style={termInputStyle} />

            <div style={{ marginTop: 10 }}><span style={{ color: "#e08438", fontWeight: 600 }}>&lt;pl:&gt;</span> <span style={{ color: "#9a948c" }}>--email=</span></div>
            <input type="email" placeholder="you@company.com" style={termInputStyle} />

            <div style={{ marginTop: 10 }}><span style={{ color: "#e08438", fontWeight: 600 }}>&lt;pl:&gt;</span> <span style={{ color: "#9a948c" }}>--scope=</span></div>
            <select style={termInputStyle} defaultValue="audit">
              <option value="audit">cost-and-posture-audit</option>
              <option value="platform">platform-engineering</option>
              <option value="oncall">incident-oncall-setup</option>
              <option value="cicd">ci-cd-supply-chain</option>
              <option value="other">other</option>
            </select>

            <div style={{ marginTop: 10 }}><span style={{ color: "#e08438", fontWeight: 600 }}>&lt;pl:&gt;</span> <span style={{ color: "#9a948c" }}>--symptoms &lt;&lt;EOF</span></div>
            <textarea rows={4} placeholder="NAT gateway eating budget. IAM roles nobody owns." style={{ ...termInputStyle, resize: "vertical", minHeight: 80, fontFamily: "var(--font-mono)" }} />

            <button style={{
              marginTop: 20, width: "100%",
              background: "var(--color-accent)", color: "#fff",
              border: 0, padding: "12px 18px", borderRadius: 6,
              fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
              cursor: "pointer", letterSpacing: "0.02em",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              whiteSpace: "nowrap"
            }}>
              <span style={{ whiteSpace: "nowrap" }}>./send --priority=normal</span>
              <span>↵</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const termInputStyle = {
  width: "100%",
  background: "#14120f",
  border: "1px solid #3a3530",
  borderRadius: 4,
  color: "#faf7f2",
  padding: "9px 12px",
  fontFamily: "var(--font-mono)",
  fontSize: 13,
  marginTop: 6,
  outline: "none"
};

export function Footer() {
  return (
    <footer style={{
      background: "var(--color-bg)",
      borderTop: "1px solid var(--color-border)",
      padding: "40px",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 20
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Mark size={22} />
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 15, color: "var(--fg1)"
          }}>Pitzi Labs</span>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            color: "var(--fg3)", marginLeft: 12, letterSpacing: "0.05em"
          }}>v2026.04.18</span>
        </div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--fg3)"
        }}>
          Christopher Pitzi · christopher@pitzilabs.com · © 2026
        </div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--fg3)", display: "flex", alignItems: "center", gap: 8
        }}>
          <StatusDot status="ok" size={6} /> all systems operational
        </div>
      </div>
    </footer>
  );
}

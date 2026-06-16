import { Eyebrow } from "./Shared.jsx";

export function Experience() {
  const years = [
    { range: "2023 —", tag: "PRESENT", title: "Cloud-native bridge", desc: "AWS / Terraform / ECS Fargate. Foundry Platform. Moving the discipline without losing the rigor." },
    { range: "2015 — 2023", tag: "SR. OPS", title: "Production infrastructure lead", desc: "24×7 ops. On-call rotations. Incident command. Migrated a regulated workload through three datacenter transitions without a customer-visible outage." },
    { range: "2005 — 2015", tag: "OPS", title: "Datacenter operations", desc: "Bare-metal. Single-homed environments. Every change had physical consequences. Learned what 'production' actually means." },
    { range: "1997 — 2005", tag: "JR. OPS", title: "Started the pager", desc: "First rotation. First outage I caused. First runbook I wrote. Everything since is a refinement." },
  ];

  return (
    <section id="about" style={{
      background: "var(--color-bg-alt)",
      borderTop: "1px solid var(--color-border)",
      borderBottom: "1px solid var(--color-border)",
      padding: "96px 40px"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)",
          gap: 72, alignItems: "start"
        }}>
          <div style={{ position: "sticky", top: 100 }}>
            <Eyebrow tone="accent" style={{ marginBottom: 14 }}>◆ About</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1.05,
              letterSpacing: "-0.03em", margin: "0 0 20px", color: "var(--fg1)"
            }}>
              Twenty-five years <span style={{ color: "var(--color-accent)" }}>carrying the pager.</span>
            </h2>
            <p style={{ fontSize: 16.5, color: "var(--fg2)", lineHeight: 1.6, margin: "0 0 24px", maxWidth: 420 }}>
              Built by an infrastructure operations professional with 25+ years
              of production experience — bare-metal data centers, 24×7 ops,
              single-homed environments where every decision had physical
              consequences.
            </p>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 12,
              color: "var(--fg3)", lineHeight: 1.8
            }}>
              <div>Based: New England, US</div>
              <div>Working: remote · async-friendly</div>
              <div>Booking: Q2 2026 forward</div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", left: 7, top: 8, bottom: 8,
              width: 1, background: "var(--color-border-strong)"
            }} />
            {years.map((y, i) => (
              <div key={y.range} style={{
                position: "relative", paddingLeft: 44,
                paddingBottom: i === years.length - 1 ? 0 : 40
              }}>
                <div style={{
                  position: "absolute", left: 0, top: 6,
                  width: 15, height: 15, borderRadius: 999,
                  background: "var(--color-bg-alt)",
                  border: `2px solid ${i === 0 ? "var(--color-accent)" : "var(--color-border-strong)"}`,
                  boxShadow: i === 0 ? "0 0 0 4px rgba(224,132,56,0.18)" : "none"
                }} />
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 6 }}>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 12,
                    color: "var(--fg1)", fontWeight: 600, letterSpacing: "0.02em"
                  }}>{y.range}</span>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 10,
                    color: "#faf7f2", letterSpacing: "0.1em",
                    background: "var(--color-accent)",
                    padding: "2px 6px", borderRadius: 2
                  }}>{y.tag}</span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 22, color: "var(--fg1)",
                  margin: "0 0 8px", letterSpacing: "-0.02em"
                }}>{y.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 15,
                  color: "var(--fg2)", lineHeight: 1.6, margin: 0, maxWidth: 560
                }}>{y.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

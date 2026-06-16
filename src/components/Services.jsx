import { Eyebrow, StatusDot } from "./Shared.jsx";

export function ServicesGrid() {
  const services = [
    {
      num: "01",
      tag: "PLATFORM",
      title: "Platform engineering",
      desc: "Greenfield AWS / GCP / Azure builds. Terraform-managed, multi-AZ, least-privilege, observable from day one. Not a single-app deployment — a platform.",
      status: "ok",
      meta: ["Terraform", "ECS Fargate", "OIDC", "WAFv2"]
    },
    {
      num: "02",
      tag: "AUDIT",
      title: "Cost & posture audits",
      desc: "Find the NAT gateway eating your budget. Find the IAM role nobody owns. Find the S3 bucket with 40 TB of forgotten logs. One-page report, no theatre.",
      status: "warn",
      meta: ["AWS", "IAM", "CUR", "Trusted Advisor"]
    },
    {
      num: "03",
      tag: "ONCALL",
      title: "Incident & on-call",
      desc: "Runbooks, alarms, and rotations that humans can actually live with. Pager hygiene included. SLOs that reflect reality, not aspiration.",
      status: "info",
      meta: ["PagerDuty", "CloudWatch", "SLOs", "Runbooks"]
    },
    {
      num: "04",
      tag: "CI/CD",
      title: "CI/CD & supply chain",
      desc: "OIDC, signed images, plan-on-PR, apply-on-merge. No long-lived credentials anywhere. The blast radius of a compromised pipeline is limited to its scope.",
      status: "err",
      meta: ["GitHub Actions", "OIDC", "Cosign", "SBOM"]
    },
  ];

  const statusColors = { ok: "#4a9e82", warn: "#d4a12e", info: "#e08438", err: "#c54a2a" };

  return (
    <section id="practice" style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(220px, 340px) 1fr", gap: 64, marginBottom: 56, alignItems: "end" }}>
        <div>
          <Eyebrow tone="accent" style={{ marginBottom: 14 }}>◆ Services</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1.05,
            letterSpacing: "-0.03em", margin: 0, color: "var(--fg1)"
          }}>What I'll do for you.</h2>
        </div>
        <p style={{ fontSize: 16.5, color: "var(--fg2)", margin: 0, maxWidth: 520, lineHeight: 1.6, justifySelf: "end" }}>
          Four things, done well. No frameworks, no decks, no "digital transformation."
          Just infrastructure you can read, run, and hand off.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 1,
        background: "var(--color-border)",
        border: "1px solid var(--color-border)",
        borderRadius: 8, overflow: "hidden"
      }}>
        {services.map(s => (
          /* Hover background is re-expressed as CSS (.pl-service-card:hover) —
             the prototype's onMouseEnter/onMouseLeave won't run without
             hydration. Base background also lives in the class so :hover wins. */
          <div key={s.num} className="pl-service-card" style={{
            padding: "28px 28px 24px",
            position: "relative",
            minHeight: 280,
            display: "flex", flexDirection: "column",
            cursor: "pointer",
            transition: "background 180ms var(--ease-standard)"
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: 3, background: statusColors[s.status]
            }} />
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 18, marginTop: 4
            }}>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "var(--fg3)", letterSpacing: "0.08em"
              }}>{s.num} / {s.tag}</span>
              <StatusDot status={s.status} size={6} />
            </div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 22, color: "var(--fg1)",
              margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.15
            }}>{s.title}</h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14.5,
              color: "var(--fg2)", lineHeight: 1.6, margin: "0 0 20px",
              flex: 1
            }}>{s.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {s.meta.map(m => (
                <span key={m} style={{
                  fontFamily: "var(--font-mono)", fontSize: 10.5,
                  color: "var(--fg2)", background: "var(--color-surface-sunk)",
                  border: "1px solid var(--color-border)",
                  padding: "3px 7px", borderRadius: 2,
                  whiteSpace: "nowrap"
                }}>{m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

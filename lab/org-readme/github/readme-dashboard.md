# PitziLabs &nbsp;`:>`

**Production that shows up when the need does.** &nbsp;`build it · break it · operate it`

![Since](https://img.shields.io/badge/since-1997-e08438?style=flat-square)
![Ops](https://img.shields.io/badge/ops-24%C3%977-1c3552?style=flat-square)
![Outages](https://img.shields.io/badge/customer--visible%20outages-0-4a9e82?style=flat-square)
![Booking](https://img.shields.io/badge/booking-Q2%202026-1c3552?style=flat-square)

### ◆ Status board

| Service | Scope | Health |
| :------ | :---- | :----: |
| Platform engineering | AWS / GCP / Azure · Terraform · multi-AZ | 🟢 `operational` |
| Cost & posture audits | IAM · CUR · Trusted Advisor | 🟡 `on request` |
| Incident & on-call | PagerDuty · CloudWatch · SLOs | 🟢 `operational` |
| CI/CD & supply chain | OIDC · Cosign · SBOM | 🟢 `operational` |

### ◆ Toolchain

| Layer | Tools |
| :---- | :---- |
| **Cloud** | `AWS` `GCP` `Azure` `ECS Fargate` |
| **IaC** | `Terraform` `Ansible` `Docker` |
| **Pipeline** | `GitHub Actions` `OIDC` `Cosign` `SBOM` |
| **Observe** | `CloudWatch` `Grafana` `PagerDuty` |
| **Code** | `Python` `Go` `Bash` `HCL` `YAML` |

### ◆ Pre-apply guardrails

```bash
$ ./scripts/pre-apply-guardrails.sh
  ✓ least-privilege IAM
  ✓ multi-AZ RDS
  ✓ WAFv2 attached
  ! NAT gateway cost flag
$ terraform apply tfplan
```

---

<sub>`chris@pitzilabs.dev` · New England, US · remote · async-friendly · `~/pitzi-labs/runbook.md`</sub>

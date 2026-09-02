import type { Section } from '../types'

export const whenToUseDataVault: Section = {
  id: 'when-to-use-data-vault',
  title: 'When to reach for Data Vault',
  scene: 'when-to-vault',
  slide: `## When to reach for Data Vault

It is an investment that pays back on **integration, change and audit** — and on nothing else. For a small, stable, single-source mart, model a star directly.

### Reach for it when…

- **Many source systems** to integrate → hubs merge entities across sources
- **Sources & requirements change often** → absorb change by **adding** tables
- **Audit / compliance / lineage** required → source + time on every row
- **Scale needs parallel loading** → deterministic hash keys, MPP
- **Long-lived EDW** → future-proofing beats upfront effort

### Don't bother when…

- A **small, stable, single-source** mart
- A **quick** analytics deliverable, settled requirements
- **No audit or integration** burden → model a **star directly**
`,
  narration:
    "When to reach for Data Vault. Data Vault is powerful, but it isn't free — many small tables, more joins, more ETL, and a mart layer to build on top before anyone can query. So it's an architectural choice, not a default. You reach for it when its strengths pay for that complexity. So, reach for Data Vault when the following hold. When many source systems must be integrated into one enterprise view — this is the vault's core strength, because hubs merge the same entity across sources. When sources and requirements change often — agility means absorbing change by adding tables, never re-engineering, so you stop paying for constant redesign. When audit, compliance, or lineage is required — in finance, healthcare, regulated industries — because every row is stamped with its source and load time, and nothing is ever overwritten. When scale demands parallel loading — deterministic hash keys let hubs, links, and satellites load independently on massively-parallel platforms. And when the warehouse is long-lived — an enterprise data warehouse meant to last years and evolve, where future-proofing outweighs the upfront effort. Now, don't bother when the opposite holds. When the project is a small, stable, single-source data mart. When you need a quick analytics deliverable and the requirements are settled. Or when there's no audit or integration burden to justify the extra layer. In those cases, the vault is over-engineering — just model a star directly, and move on. So here's the rule of thumb: use Data Vault as the enterprise integration layer feeding many star marts — when you have many sources, constant change, and audit demands. But for a focused, stable mart, skip it, and go straight to a star. And that closes the whole modeling arc of this course: you normalize for OLTP in module two; you denormalize into stars in modules three through five; you version with slowly changing dimensions in module six; and then, when the enterprise demands it, you integrate underneath with a Data Vault in module seven — serving stars on top.",
}

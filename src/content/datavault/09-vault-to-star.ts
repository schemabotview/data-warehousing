import type { Section } from '../types'

export const vaultToStar: Section = {
  id: 'vault-to-star',
  title: 'From Data Vault to star — the information mart',
  scene: 'vault-to-star',
  slide: `## From Data Vault to star — the information mart

Hub + satellite becomes a dimension; link + measure satellite becomes a fact. The mapping is **mechanical** — and often just a set of views.

### The mapping is mechanical

- Satellite \`load_date\` history **is** your SCD-2 — versioned dims free
- Link grain = fact grain (product-on-order = order line)

### Virtual or materialized

- Often just **views** over the vault (virtual, always live)
- Or a **materialized** rebuild when volume demands

### Why it's the payoff

- **Rebuild** the mart anytime, no re-sourcing · **point-in-time** versions
- **Many** marts (Sales, Finance…) from **one** vault
`,
  narration:
    "From Data Vault to star — the information mart. The vault is superb for integrating and preserving data — and terrible to query. So the last step turns it into something people can actually use: an information mart, a star schema built on top of the vault, for consumption. This is where the two halves of the course finally meet. And the mapping is mechanical — vault structures map onto star structures almost one-to-one. A hub, plus its satellite or satellites, becomes a dimension: hub customer plus sat customer become dim customer. And the satellite's load-date history is your SCD-2 — so you get versioned dimensions for free, with no bolt-on needed. A link, plus its measure satellite, becomes a fact: link order-line plus sat sales-measures become fact sales. And notice the link's grain — product-on-order — is exactly the fact's grain — the order line. Finally, reference tables become small dimensions: ref date becomes dim date, ref channel becomes dim channel. Collapse the vault's many small tables back into a few wide star tables, and you have the Jabra star schema from modules three through six — the information mart the raw vault was built to feed. The mart can be virtual or materialized. Often it's just a set of views over the vault — a virtual mart, always live, nothing duplicated. And when query volume demands it, you materialize it instead — a physical rebuild, refreshed by ETL. Either way, the vault stays the source of truth. And here's why this is the payoff. Because the vault kept full history and stayed auditable, you can rebuild the mart any time — reshape a dimension, add a fact — without going back to the sources. You can generate point-in-time versions of the mart — the star as it looked last quarter. And you can serve many marts — Sales, Finance, Marketing — from one integrated vault. So: the information mart is a star built over the vault. Hubs plus satellites become dimensions; links plus measure-satellites become facts; all as views, or a materialized rebuild. The vault integrates and remembers; the mart presents — the promise of section one, realized.",
}

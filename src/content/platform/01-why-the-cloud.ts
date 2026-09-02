import type { Section } from '../types'

export const whyTheCloud: Section = {
  id: 'why-the-cloud',
  title: 'Why warehouses moved to the cloud',
  scene: 'to-the-cloud',
  slide: `## Why warehouses moved to the cloud

Picture the on-prem appliance first — sized for peak, idle the rest of the time. Every cloud property is an answer to one of its constraints.

### From a big fixed box…

- On-prem appliance, sized for **peak**, idle the rest, scaled by buying hardware

### What the cloud changed

- **Elasticity** — scale compute on demand, pay for what you use
- **Separation of compute & storage** — cheap storage, compute on demand (§03)
- **MPP under the hood** — billions of rows scanned in parallel (§02)
- **Fully managed** — no hardware, patching, or manual index tuning
- **Opex, not capex** — per-query billing, not an up-front appliance

### The modern shape

- **Cloud · MPP · columnar · compute/storage-separated**
- Tune with **distribution, clustering, pruning, caching** — **not** B-tree indexes
`,
  narration:
    "Why warehouses moved to the cloud. For decades, a data warehouse was a big fixed box — an on-premises appliance you sized for peak load, bought up front, and lived with. Capacity was provisioned for the busiest hour, and idle the rest of the time. Scaling meant buying more hardware. And a team tuned indexes and managed disks. The cloud data warehouse changed both the economics and the architecture. So what did the cloud change? Five things. Elasticity — you scale compute up and down on demand, and pay only for what you use; no more provisioning for peak and paying for idle. Separation of compute and storage — you store data cheaply and durably, and spin up compute only when a query runs; that's section three. MPP under the hood — massive parallelism across many nodes makes scanning billions of rows fast; section two. Fully managed — no hardware, no patching, no manual index tuning; the platform handles storage, distribution, and much of the optimization. And opex, not capex — per-second, per-query billing replaces a big up-front appliance purchase. That gives the modern warehouse its shape: a cloud, MPP, columnar, compute-and-storage-separated system. And that shape doesn't just change where it runs — it changes how you make it fast. The old lever, the B-tree index, is gone. You now tune with distribution, columnar storage, clustering, pruning, and caching instead. And this module is the course's landing. We'll cover the cloud and MPP foundations, in sections two through five. Then we'll fold the whole of physical and query tuning into that context — columnar storage, clustering and zone maps, materialized views and caching, and star-join pruning — closing with a before-and-after query case study. So: warehouses moved to the cloud for elasticity, cheap separated storage, MPP speed, and managed operations. The modern platform is cloud, plus MPP, plus columnar — and you tune it with distribution, clustering, pruning, and caching, not indexes.",
}

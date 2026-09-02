import type { Section } from '../types'

export const aggregateFacts: Section = {
  id: 'aggregate-facts',
  title: 'Aggregate (summary) fact tables',
  scene: 'aggregate-fact',
  slide: `## Aggregate (summary) fact tables

A pre-computed roll-up is a **derived copy** — often a hundred times faster to read, and only ever as true as its last refresh.

### Pre-computed roll-ups

- Atomic FACT_SALES → **coarser grain**, built by ETL
- Same **additive** measures, \`SUM\`-med up a level

### Monthly sales by product line

### Why — speed & cost

- Read **thousands** of rows, not hundreds of millions (often 100×)
- Cheaper scans on cloud / MPP

### The duty

- A **derived copy** — ETL must keep it **consistent** (stale = wrong)
- Answers only **at its grain** — keep the **atomic fact** as source of truth
`,
  narration:
    "Aggregate, or summary, fact tables. An atomic transactional fact is flexible, but it's big — hundreds of millions of order lines. When a dashboard asks the same coarse question again and again — monthly sales by product line — re-summing all those rows every single time is wasteful. An aggregate fact stores the answer pre-computed. An aggregate fact is a fact table rolled up from the atomic one to a coarser grain, built and maintained by ETL. From per-order-line FACT SALES you might derive monthly totals per product line — headsets, three hundred forty-five thousand; earbuds, two hundred ten thousand. The measures are the same additive measures, just summed up a level. It's a genuine fact table — keys plus measures — only at reduced detail. A periodic snapshot, in fact, is often a form of aggregate. Why build one? Speed and cost. A dashboard reads a few thousand pre-rolled rows instead of scanning hundreds of millions — often a hundred-fold win on a hot query — and fewer rows scanned is cheaper on cloud and MPP platforms. But an aggregate is a derived copy, and that carries a duty. It must stay consistent — rebuilt or incrementally refreshed by ETL whenever the base fact changes; a stale aggregate lies. And it only answers at its grain — a monthly aggregate can't answer a daily question. So keep the atomic fact as the source of truth, and treat aggregates as a performance layer on top, never a replacement. On modern cloud platforms the engine can even maintain these for you as materialized views — but the trade-off is the same: storage and ETL effort, in exchange for query speed. Build them for known, repeated, coarse queries — and always keep the atomic fact beneath them.",
}

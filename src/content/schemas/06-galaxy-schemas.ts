import type { Section } from '../types'

export const galaxySchemas: Section = {
  id: 'galaxy-schemas',
  title: 'Galaxy / fact-constellation schemas',
  scene: 'galaxy',
  slide: `## Galaxy / fact-constellation schemas

Several facts, one per business process, sharing the same **conformed** dimensions. This — not a single star — is what a real warehouse looks like.

### Many facts, shared dimensions

- Each fact: own **grain + measures** · **shared** conformed dims
- The Jabra warehouse *is* a galaxy

### Why it's the real-world shape

- Every enterprise is **multi-process** — a fact per process
- **Conformed dims** let you **drill across** processes (module 04)
- The **bus matrix** is the plan: processes → facts, shared cols → dims

### How it grows

- Build **one star**, add the next as another star **reusing** the dims
`,
  narration:
    "Galaxy, or fact-constellation, schemas. A single star models one business process. But a real enterprise runs many — Jabra doesn't just sell; it ships, it takes payments, and it tracks stock. Each of those is its own fact. Put several stars together, sharing dimensions, and you have a galaxy schema — also called a fact constellation. So a galaxy is two or more fact tables that share conformed dimensions. And the Jabra warehouse is exactly this. FACT SALES, FACT SHIPMENT, FACT PAYMENTS, and the inventory snapshot each have their own grain and their own measures — but they reuse the same dim date, dim customer, and dim product. Those shared dimensions are what stitch the separate stars into one connected model — a constellation of stars, linked at their shared points. Why is this the real-world shape? Three reasons. First, every enterprise is multi-process. One fact can't hold both selling and shipping — they have different grains and different measures — so you build a fact per process. Second, conformed dimensions integrate them, which is the lesson of module four. Because all the facts share the same region and the same product line, you can compare and drill across processes: revenue, units shipped, and cash collected, all by region, by month, side by side. And third, the bus matrix is the plan: its rows, the processes, become the facts; its shared columns, the dimensions, become the conformed dimensions every star reuses. And here's the reassuring part: you don't design a galaxy all at once, up front. You build one star. Then you add the next process as another star that reuses the dimensions you've already built. Conformed dimensions make each addition simply snap into the whole. So a galaxy is many stars sharing conformed dimensions — the natural shape of a whole-enterprise warehouse. Build stars one process at a time, and the shared dimensions make them one constellation.",
}

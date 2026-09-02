import type { Section } from '../types'

export const whyDenormalizedWins: Section = {
  id: 'why-denormalized-wins',
  title: 'Why denormalized dimensions win for BI',
  scene: 'flat-wins',
  slide: `## Why denormalized dimensions win for BI

"Sales by region" is four chained joins in a normalized model, and **one** in a flat one.

### Denormalized = flat

- Normalized: customer → city → province → region → country
- **Flat** \`DIM_CUSTOMER\`: all of it as **columns**, one table

### The four wins

- **Fewer joins → faster** — the big one; join cost dominates
- **Simpler SQL** — "sales by region" = **one** join, not four hops
- **All in one place** — browse, filter, expose easily
- **Self-documenting** — the table *is* the list of slices

### Why the redundancy is safe

- Dimensions are **load-once, read-many** — ETL controls writes
- No ad-hoc updates → **no anomalies**; cost is just **storage** (cheap)

> Normalize to protect writes · **denormalize to accelerate reads**
`,
  narration:
    "Why denormalized dimensions win for BI. The star's defining choice is that its dimensions are denormalized — flat. Back in module two we normalized hard to protect writes; here we deliberately reverse it. So why is flattening the right call for a warehouse? First, what denormalized means here. A normalized customer would split across tables: customer, to city, to province, to region, to country — each a lookup, joined by key. A denormalized dim customer collapses all of it into one wide table — city, province, region, and country are just columns, repeated on every row that shares them. That buys four wins. First, and biggest: fewer joins means faster queries. Join cost dominates analytic queries, and flat dimensions mean one join per dimension instead of a chain — the engine touches far fewer tables. Second, simpler SQL: sales by region is one join to dim customer, not four hops through a normalized geography tree. Analysts write it easily, and BI tools generate it reliably. Third, everything's in one place: all of a customer's attributes sit in one table — easy to browse, filter, and expose in a reporting tool, with no hunting across lookup tables. And fourth, the attributes are discoverable: one table is the list of ways you can slice — the dimension documents itself. But wait — isn't redundancy dangerous? In OLTP, yes. Normalization exists to prevent update anomalies from redundancy. But in a warehouse those barely bite, because dimensions are load-once, read-many: ETL writes them in a controlled batch, and the same job updates every affected row consistently. There are no ad-hoc user updates to leave copies out of sync. So you get redundancy's upside — no joins — without paying its usual price. The only cost is storage, and that's cheap, trivial next to the query speed and simplicity you gain. So: normalize to protect writes in OLTP; denormalize to accelerate reads in the warehouse.",
}

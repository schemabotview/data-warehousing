import type { Section } from '../types'

export const whySurrogateKeys: Section = {
  id: 'why-surrogate-keys',
  title: 'Why warehouses prefer surrogate keys',
  scene: 'surrogate-pattern',
  slide: `## Why DW prefer surrogate keys

Five reasons, one pattern: **surrogate-keyed dimensions joined to facts on an integer**. That two-table shape is the star schema.

### The five reasons

- **Stability** — key stays fixed even when source data changes
- **Performance** — small int → **smaller indexes, faster joins** at billions of rows
- **Flexibility** — merge clashing IDs across sources into one clean key
- **Simplicity** — uniform integer FKs, cheap to store & generate
- **Enables SCD-2** — multiple history rows per real entity — a natural key **can't**

### Costs — paid once, at load

- No meaning → keep the **natural key as an attribute**
- Extra lookup → the **ETL** resolves it once (Mod 09) · violates 3NF → already denormalized

### The pattern

- Surrogate-keyed dimensions + integer-joined facts = **the star schema**
`,
  narration:
    "Why warehouses prefer surrogate keys. The last section showed one reason a surrogate helps. In a warehouse, the case is overwhelming — nearly every dimension is keyed on a surrogate, with the natural key demoted to just an attribute. Here's the full argument, in five reasons. First, stability. The surrogate stays fixed even when source data changes. Emails change, product codes get reissued, companies merge and renumber — but the warehouse key doesn't budge, so nothing downstream breaks. Second, performance. A small integer means smaller indexes and faster joins. A fact table with millions of rows joins to its dimensions on narrow integer keys instead of long text keys — and over billions of key comparisons, that's a large, real saving. Third, flexibility — multi-source integration. When you merge data from many systems with clashing i-ds — two source systems that each have a customer number one — the surrogate gives every real entity one clean, conflict-free key. It insulates the warehouse from the source's key design entirely. Fourth, simplicity. Simple sequential integers are efficient to store, generate, and reason about. Every fact-row foreign key is a uniform integer. And fifth — the decisive one — it enables slowly-changing-dimension type two. To keep history, a dimension needs multiple rows for the same real-world entity: Anita before and after her address change. A natural key can't do that, because it has to stay unique. The surrogate lets each historical version be its own row, with its own key, all sharing one natural key. What about the costs? A surrogate has no business meaning — so we keep the natural key as an attribute for tracing. It needs an extra lookup to map back to the source — but the E-T-L does that once, at load. And it technically violates third normal form — but the warehouse is denormalized on purpose anyway. Every drawback is either paid once by the pipeline, or simply irrelevant here. So in the model, the customer dimension has a surrogate key as its primary key and keeps the natural key beside it, and the sales fact points at that surrogate — never at the email, never at the source i-d. That is the pattern the whole star schema is built on: surrogate-keyed dimensions, facts joining to them on integers. And that closes this module. We normalize to protect data, denormalize dimensions for speed, and key them on surrogates for stability, performance, and history. Next, the fact table those keys point back to.",
}

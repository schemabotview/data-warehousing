import type { Section } from '../types'

export const degenerateAndDerived: Section = {
  id: 'degenerate-and-derived',
  title: 'Degenerate & derived columns in the fact',
  scene: 'derived-columns',
  slide: `## Degenerate & derived columns in the fact

Two kinds of fact column that are neither a key nor a plain measure — and the store-it-or-compute-it decision that comes with the second.

### Degenerate dimensions — id, no table

- \`order_id\`, \`order_line_id\`, \`order_status\` on \`FACT_SALES\`
- Not measures, no table → **group** a transaction's lines · **audit** trail

### Derived columns — pre-computed & stored

- Also flags like \`is_returned\`

### Store it, or compute at query time?

- **Store** → instant, one agreed definition · costs space + ETL
- **Compute** → no storage, always in sync · repeated work, may diverge
- Warehouses usually **store** common derived measures

### One caution

- Store derived **amounts** (additive), **not ratios** — divide *after* aggregating
`,
  narration:
    "Degenerate and derived columns in the fact. A fact row is mostly foreign keys and plain measures — but two other kinds of column show up on it, and both are deliberate design decisions worth naming: degenerate dimensions, and derived columns. First, a recap in place: the degenerate dimension. It's a dimension value stored on the fact with no dimension table — an operational identifier whose every descriptive attribute has already become its own dimension. On FACT SALES, that's order i-d, order-line i-d, and order status. They aren't measures — you'd never sum them — and they don't deserve a table, because there's nothing left to describe. So they sit on the fact, earning their keep by grouping a transaction's lines — group by order i-d — and by providing an audit trail back to the source. Second, the derived, or computed, column. This is a value calculated during ETL and stored on the fact, rather than computed at query time. The Jabra fact's line total is the classic example: quantity times unit price, minus discount, plus tax. Flags like is-returned are derived too. And storing them is a genuine trade-off. If you store it — materialize it — every query gets the same number instantly, with one agreed definition: faster reads, guaranteed consistency, at the cost of a little space and ETL work. If instead you compute it at query time, you use no storage and it's always in sync with the inputs — but each query repeats the work, and, worse, different analysts might compute it differently. So warehouses usually store the common derived measures: speed and a single definition matter more than the space. One caution, though, and it comes straight from the additivity rule: store derived amounts, which are additive — not derived ratios. Don't pre-compute a discount percentage on the fact. Store discount amount and line total, and divide after aggregating. A stored ratio can't be summed, and it will mislead you. So beyond keys and measures, a fact carries degenerate dimensions — i-ds with no table, for grouping and audit — and derived columns — pre-computed measures like line total — materialized for speed and one definition, but always kept additive.",
}

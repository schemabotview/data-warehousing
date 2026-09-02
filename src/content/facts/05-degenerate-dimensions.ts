import type { Section } from '../types'

export const degenerateDimensions: Section = {
  id: 'degenerate-dimensions',
  title: 'Degenerate dimensions',
  scene: 'degenerate-dim',
  slide: `## Degenerate dimensions

Build the \`DIM_ORDER\` that would hold \`order_id\` and you find it **empty** — every attribute already lives in another dimension. What is left rides on the fact.

### A dimension value with **no table**

- Lives right on the fact row
- Jabra: \`order_id\`, \`order_line_id\`, \`order_status\`

### Why the order number degenerates

- FACT_SALES grain = one **order line**
- \`order_id\` is an order-**header** attribute — not a measure
- Everything a \`DIM_ORDER\` would hold is **already a dimension**
- What's left is just the **identifier**

### Why keep it

- **Groups the lines of one order** — market-basket analysis
- **Audit trail** back to the source system

### Spotting one

- An **operational id** (order / invoice / ticket #) with **no attributes** of its own
`,
  narration:
    "Degenerate dimensions. Sometimes an attribute belongs on the fact, but has no dimension table to live in. That's a degenerate dimension — a dimension value stored right on the fact row, with nowhere else to go. Take the order number. FACT SALES is at order-line grain: one row per product per order. But the order number — order i-d — is an order-header attribute. Where does it go? It's not a measure; you'd never sum order numbers. And it doesn't deserve its own DIM ORDER table — because an order has no interesting descriptive attributes of its own that aren't already dimensions. The customer, the date, the channel — those are all already their own dimensions. Everything a DIM ORDER would hold has already been pulled out into the real dimensions. What's left is just the identifier. So order i-d stays on the fact, dimension-less. In the Jabra model, order i-d, order-line i-d, and order status are all marked degenerate dimensions — carried on the fact with no table behind them. Why keep it at all? Because it's genuinely useful. It groups the lines of one order — group by order i-d reassembles a basket from its lines: how many items, what total, classic market-basket analysis. It ties back to the source system — the order number is your audit trail. And it's a real analytic handle: count distinct orders, average lines per order, order-status mix. How do you spot one? It's typically an operational identifier — an order number, invoice number, ticket number, transaction i-d — that is not numeric or additive, so it isn't a measure, and has no attributes of its own worth a table, so it isn't a normal dimension. Don't invent an empty DIM ORDER just to hold the order number. Leave it on the fact — a dimension key with no dimension.",
}

import type { Section } from '../types'

export const degenerateDimensionsRevisited: Section = {
  id: 'degenerate-dimensions-revisited',
  title: 'Degenerate dimensions revisited',
  scene: 'four-special-types',
  slide: `## Degenerate dimensions revisited

The same \`order_id\`, seen from the dimension side — and its place among the **four special dimension types**.

### Seen from the dimension side

- A dimension key in the **fact**, with **no table** of its own
- \`order_id\` — every attribute an "order dim" would hold is **already a dimension**
- What's left is a bare id → it **stays on the fact**

### Still real & useful

- **Groups a transaction's lines** — market-basket analysis
- **Audit trail** to the source · count distinct orders

### The four special types

\`\`\`
Conformed    shared table   rich attributes, reused
Role-playing one table      same dim, many roles
Junk         one small tbl  bundled flags
Degenerate   NO table       just an id, on the fact
\`\`\`
`,
  narration:
    "Degenerate dimensions, revisited. We met the degenerate dimension from the fact side in module 03. Seen from the dimension side, it completes the picture of the special dimension types — because it's the one type that has no table at all. So, the same idea, from the dimension's point of view. A degenerate dimension is a dimension key that lives in the fact table with no dimension table of its own — because there is nothing left to describe it. In the Jabra sales fact, order i-d is the classic case. It's a genuine dimension — you group and filter by it — but every attribute an order dimension might hold — the customer, the date, the channel — has already been pulled out into its own conformed dimension. What remains is a bare identifier. And if you gave a bare identifier its own one-column table, you'd have built an empty, join-for-nothing table. So it stays on the fact. But dimension-less doesn't mean useless — it earns its keep. It groups a transaction's lines: group by order i-d reassembles the basket — items per order, the order total, market-basket analysis. It's an audit trail: the operational i-d ties a fact row back to the source system. And it's an analytic handle: count distinct orders, average lines per order. It helps to place it among the four special dimension types. A conformed dimension is a shared table of rich attributes, reused across facts. A role-playing dimension is one table joined many times, in several roles. A junk dimension is one small table of bundled, low-cardinality flags. And a degenerate dimension has no table at all — just an i-d, sitting on the fact. It's the limiting case: a dimension whose every attribute has already become another dimension, leaving only the key — so it lives on the fact, table-less.",
}

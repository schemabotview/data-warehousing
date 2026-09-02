import type { Section } from '../types'

export const buildingTheFact: Section = {
  id: 'building-the-fact',
  title: 'Building the order fact',
  scene: 'build-fact',
  slide: `## Building the order fact

Two line items become **two fact rows** — same \`order_id\`, the header values repeated as foreign keys, and only the product and the measures differing.

### FACT_SALES — grain: one order line

- \`line_total\` = **derived** (qty×price − disc + tax, module 05)

### The surrogate-key lookup (ETL heart)

- Bill has only **natural** keys — \`C-4471\`, \`P-88\`
- Look up → \`customer_key 1101\`, \`product_key 204\`
- Wires the fact to the **correct version** of each dim (module 09)

### One bill → **two** fact rows

- Two line items = two rows · same \`order_id\` (degenerate), diff \`product_key\`
- Header values (customer, date) repeat as FKs on both lines
`,
  narration:
    "Building the order fact. With the dimensions built, assemble the centre: FACT SALES, at grain one order line. Its columns come straight from the four steps — foreign keys, measures, and degenerate dimensions. There are three column groups. First, the surrogate primary key, sales key. Then the foreign keys — one surrogate foreign key per dimension from step three: order-date key, customer key, product key, channel key, promotion key. Then the degenerate dimensions — order i-d, order-line i-d, order status — riding on the fact. And finally the measures, the M fields from step four — quantity, unit price, discount amount, tax amount, line total. And note line total is a derived measure: quantity times unit price, minus discount, plus tax — that's module five. Now, the surrogate-key lookup, which is the heart of the ETL. The bill carries only natural keys — C-four-four-seven-one, P-88. So the load must translate each one to its surrogate before writing the fact row. It looks C-four-four-seven-one up in dim customer to get customer key eleven-oh-one. It looks P-88 up in dim product to get product key two-oh-four. That key-lookup step is what wires a fact row to the correct version of each dimension — and it's the core of module nine's load. And here's grain discipline in action: one bill produces two fact rows. The bill has two line items, so it produces two FACT SALES rows — the same order i-d, which is a degenerate dimension grouping them, but different product keys and different measures. The header values — customer, date, channel — repeat on both lines, as their respective foreign keys. So: the order fact is foreign keys, one per dimension; plus measures, additive, with a derived line total; plus degenerate dimensions — at one row per order line, populated by looking each natural key up to its dimension's surrogate.",
}

import type { Section } from '../types'

export const additivity: Section = {
  id: 'additivity',
  title: 'Additive, semi-additive & non-additive measures',
  scene: 'additivity',
  slide: `## Additive · semi-additive · non-additive

Additivity is a property of a measure **against a dimension**. A balance sums perfectly across warehouses and is nonsense summed across days.

### Additive — sum across **everything**

- \`line_total\`, \`quantity\`, \`tax_amount\`
- Any \`GROUP BY\` works — what facts are *for*

### Semi-additive — sum across all **but time**

- Balances & snapshot levels: \`on_hand_quantity\`
- Across dates you **average** or take last — never sum

### Non-additive — **never** sum

- Ratios & rates: \`unit_price\`, margin %
- Store the **components**; compute the ratio *after* aggregating

### Rule of thumb

- Keep **raw amounts** on the fact; derive ratios last
`,
  narration:
    "Additive, semi-additive, and non-additive measures. The whole point of a measure is that you add it up across dimensions. But not every number behaves the same way under a sum — and knowing which is which is what keeps a report from lying. Measures fall into three classes. First, additive. An additive measure can be summed across all of the fact's dimensions and still make sense. Line total is the model citizen: total sales for a day, a product, a region, a customer — every one is just a sum of line total with a different group-by. Quantity, discount, tax — all additive. These are what fact tables exist for, and you want as many as you can get. Second, semi-additive. A semi-additive measure can be added across some dimensions, but not across time. The classic case is a balance or a snapshot level — on-hand quantity in an inventory snapshot. Add today's stock across all warehouses, fine, that's total stock on hand. But add the same warehouse's stock across every day of the month, and it's nonsense — you've counted the same units thirty times over. Across time you average, or take the last value; you never sum. Account balances, headcount, temperature all work this way. Third, non-additive. A non-additive measure can't be summed across any dimension — usually because it's a ratio or a rate. Unit price, a profit margin percentage, a conversion rate: adding two prices together is meaningless. So you don't store the ratio pre-computed and sum it. You store its additive components — the numerator and the denominator — and compute the ratio after aggregating. Keep discount amount and line total on the fact, and derive discount percent as sum of discount over sum of line total, at query time. So the rule of thumb: design for additivity. Keep the raw amounts on the fact, and compute ratios last. A measure you can't add is a measure you can barely report on.",
}

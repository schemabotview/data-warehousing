import type { Section } from '../types'

export const anatomyOfAStar: Section = {
  id: 'anatomy-of-a-star',
  title: 'Anatomy of a star — fact + dimensions',
  scene: 'star-anatomy',
  slide: `## Anatomy of a star — fact + dimensions

The centre and the points are opposite by design — and the arithmetic that follows is what makes every query the same shape.

### The centre — the fact

- \`FACT_SALES\`: **measures** + a **FK per dimension**
- Grain fixes the row · **long & narrow** (few cols, many rows)

### The points — the dimensions

- Descriptive **attributes** + a **surrogate PK**
- **Wide & shallow** (many cols, few rows)

### The wiring — one join per point

\`\`\`
FACT_SALES.customer_key ─► DIM_CUSTOMER.customer_key (PK)
FACT_SALES.product_key  ─► DIM_PRODUCT.product_key   (PK)
\`\`\`
- **One-to-many** · no join *between* dimensions
- **1 fact + N dims = N+1 tables, ≤ N joins**

### Built for the **star join**

- Measures from the **centre**, labels from the **points**
`,
  narration:
    "Anatomy of a star — fact and dimensions. Zoom into a star, and it has exactly two kinds of part, wired together in one way. Understanding those parts is understanding the whole schema. At the middle sits the fact table — FACT SALES. It holds the measures, like quantity and line total, and a foreign key to each dimension — customer key, product key, order-date key, and so on. Its grain — one order line — fixes what a row means. And it's long and narrow: few columns, but millions of rows. Around it sit the dimension tables, one per point of the star. Each holds descriptive attributes — name, category, region — and a surrogate primary key. And each is wide and shallow: many columns, relatively few rows. Dim customer, dim product, dim date, dim channel, dim promotion. Now the wiring, and every point connects the same way: a foreign key on the fact references the surrogate primary key of the dimension. The fact's customer key points at dim customer's customer key; the fact's product key points at dim product's product key. The relationship is one-to-many — one customer, many sales rows; one product, many sales rows. And count the tables, and you get the star's defining economy: one fact plus N dimensions is N-plus-one tables, and at most N joins to answer any question. There is never a join between dimensions — they meet only through the fact. And that structure makes every analytic query the same shape: the star join. Fact in the from clause, dimensions joined on the keys, attributes in the where and group-by, measures in the select aggregate. Measures from the centre, labels from the points. So a star is one fact — deep, narrow, measures and foreign keys — ringed by dimensions — wide, shallow, attributes and a surrogate primary key — each one join away. And every query joins the centre to the points it needs.",
}

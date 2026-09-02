import type { Section } from '../types'

export const attributesAndHierarchies: Section = {
  id: 'attributes-and-hierarchies',
  title: 'Attributes & hierarchies',
  scene: 'hierarchies-flat',
  slide: `## Attributes & hierarchies

Attributes are the levers you slice with, and hierarchies are the natural paths between them — stored **flat**, as columns on one row.

### Attributes — the columns you slice by

- \`category\`, \`brand\`, \`city\`, \`segment\` — each a lever
- **Filter · group · label** with them
- **More attributes = richer analysis** — be generous

### Hierarchies — natural roll-up paths

\`\`\`
product → category → product_line → brand
day → month → quarter → year
city → province → region → country
\`\`\`
- Let a user **drill down** and **roll up** inside one dimension

### Keep it flat (denormalized)

- Whole hierarchy = **flat columns on one table**
- Every drill path is **one hop** from the fact
- Splitting into sub-tables = the **snowflake** (module 05)
`,
  narration:
    "Attributes and hierarchies. A dimension earns its keep through its attributes — the descriptive columns — and the hierarchies they form. Together they decide how richly you can slice the data. Start with attributes. An attribute is one descriptive column of a dimension: category, brand, color, city, segment. Each one is a lever for analysis — a way to filter, only Headsets; to group, by segment; or to label, Madrid on the axis. And the rule of thumb is generosity: more attributes means richer analysis. A dimension with twenty good attributes answers twenty kinds of question; a thin one with three answers three. Storage is cheap; unanswerable questions are expensive. Now, many attributes nest into a hierarchy — a many-to-one drill path from fine to coarse. Dim product goes product, to category, to product line, to brand. Dim date has the universal one: day, to month, to quarter, to year. And dim customer carries a geography hierarchy: city, province, region, country. Hierarchies are what let a user drill down — year to quarter to month — and roll up — city to region — all inside a single dimension. A report starts at sales by year, the user clicks twenty twenty-six, and the same hierarchy expands it into quarters. Here's the key design choice: keep the hierarchy flat. In a star schema the whole hierarchy lives as flat columns in one dimension table — category, product line, and brand are all just columns on dim product, repeated on every row. You do not split them into separate category and brand tables. That repetition is deliberate: it keeps every drill path one hop from the fact, so a query never chains joins. Normalising the hierarchy into sub-tables is the snowflake — a different trade-off, and that's module 05. So: be generous with attributes, and store each hierarchy as flat columns on the one dimension. Rich, denormalized dimensions are what make BI both fast and expressive.",
}

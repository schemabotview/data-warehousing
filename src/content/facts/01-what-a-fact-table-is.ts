import type { Section } from '../types'

export const whatAFactTableIs: Section = {
  id: 'what-a-fact-table-is',
  title: 'What a fact table is — measures & grain',
  scene: 'fact-anatomy',
  slide: `## The fact table — the heart of the warehouse

Every column in a fact table is one of exactly two things: a **key** that supplies context, or a **measure** you aggregate.

### Two kinds of column

- **Foreign keys** — pointers to dimensions: *who, what, when, where*
- **Measures** — the numbers you aggregate: \`quantity\`, \`line_total\`

### FACT_SALES — one row = one order line

\`\`\`
date_key  customer_key product_key | quantity line_total
20260112    1101         204        |    2       1,200
20260112    1120         207        |    1         300
\`\`\`
- Keys = **context** · measures = **numbers**

### What defines it

- **Numeric & additive** measures
- Fixed **grain** — every row means the *same* thing
- A **foreign key to every dimension**
- **Long & narrow** — the biggest, fastest-growing table
`,
  narration:
    "What a fact table is — measures and grain. Every question you ask a warehouse — how much did we sell last quarter, which region is growing — comes down to adding up numbers. The table that holds those numbers is the fact table, and it sits at the dead centre of the schema. A fact table stores the measurements of a business process. For Jabra Spain, the process is selling, and the fact is FACT SALES. Each row is one order line — one product on one order — and it carries two very different kinds of column. First, foreign keys: slim integer pointers to the dimensions that give the row its context — the order date, the customer, the product, the channel, the promotion. They answer who, what, when, and where. Second, measures: the numeric facts you actually do arithmetic on — quantity, unit price, discount, tax, line total. The keys are the context; the measures are the numbers. And almost every report is the same shape — pick some measures, group them by some dimension attributes, and add them up. Sum of line total, by product line, by month, by region. So what makes a fact table a fact table? Its measures are numeric and additive. Every row means the same thing, at one fixed level of detail — that's the grain. It has a foreign key to every dimension that describes the event. And it's long and narrow — few columns, but a huge and ever-growing number of rows. This is the biggest table in the warehouse. One line to hold onto: dimensions are the nouns — customer, product, date. Facts are the verbs and the numbers — what happened, and how much. And the single most important choice about a fact table is its grain, what one row means, which is exactly where we go next.",
}

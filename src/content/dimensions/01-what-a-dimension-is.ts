import type { Section } from '../types'

export const whatADimensionIs: Section = {
  id: 'what-a-dimension-is',
  title: 'What a dimension is — the context you slice by',
  scene: 'slice-by',
  slide: `## The dimension — the context you slice by

Every report ever written has one shape: **measure by attribute**. The measure comes from the fact; the **"by …"** comes from a dimension.

### Every report is "measure **by** attribute"

- Sales **by product line** · revenue **by month, by region**
- The measure is the **fact**; the **"by …"** is a **dimension**

### DIM_PRODUCT — descriptive context

\`\`\`
product_key product_id name       category product_line
204         P-88       Evolve2 65 Headset  Headsets
207         P-91       Elite 8    Earbud   Earbuds
\`\`\`

### The signature of a dimension

- **Descriptive & textual** — human-readable labels, not codes
- **Wide & shallow** — many columns, few rows
- The things you **filter, group, and label** by
- **Surrogate primary key** the fact points at
`,
  narration:
    'What a dimension is — the context you slice by. A fact table holds the numbers. But a number on its own — twelve hundred — means nothing. Whose sale? Of what? When? The tables that answer those questions are the dimensions, and they supply the context you slice by. Look at any report and you\'ll see the pattern: sales by product line. Revenue by month, by region. The measure comes from the fact; the "by" is always a dimension attribute. Dimensions are how a business actually thinks about its numbers. So what does a dimension table look like? It\'s a table of descriptive context — the nouns and adjectives of the model. Take dim product in the Jabra warehouse: it holds the product key, the business i-d, the name, the category, the product line, the brand. The customer key, product key, and order-date key on the fact each point at one of these tables. A dimension has a clear signature. It\'s descriptive and textual — its attributes are human-readable labels, like Headsets, or Madrid, or B-two-B, not just codes. And verbose is good here — these labels become the row and column headers of every report. It\'s wide and shallow — many descriptive columns, but relatively few rows; the exact opposite shape to the long, narrow fact. Its attributes are the things you filter, group, and label by — every column is a potential slice or axis. And it has a surrogate primary key that the fact\'s foreign key references. So, once more: facts are what happened and how much; dimensions are who, what, when, where, and what kind. A dashboard is measures from the fact, sliced by attributes from the dimensions. This module is a tour of the dimension — its attributes, its keys, and the special shapes it takes.',
}

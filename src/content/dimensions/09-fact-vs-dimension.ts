import type { Section } from '../types'

export const factVsDimension: Section = {
  id: 'fact-vs-dimension',
  title: 'Fact vs dimension — the two building blocks',
  scene: 'sum-or-slice',
  slide: `## Fact vs dimension — the two building blocks

One question sorts every column you will ever model: do you **sum it**, or do you **slice by it**?

### Every star table is one or the other

\`\`\`
            Fact                Dimension
Holds       measures (numbers)  attributes (context)
Answers     what / how much     who, what, when, where
Shape       long & narrow       wide & shallow
Grows       fast, forever       slowly
Key         FKs to dimensions   surrogate PK
Used to     aggregate           filter, group, label
\`\`\`

### The test — sum it, or slice by it?

- **\`SUM\` it** → a measure → **fact**
- **\`GROUP BY\` it** → an attribute → **dimension**

### A number can be either

- \`line_total\` on the fact = **measure** (sum it)
- \`list_price\` on DIM_PRODUCT = **attribute** (group by it)
- The **role**, not the type, decides the table
`,
  narration:
    "Fact versus dimension — the two building blocks. Step back from all the special types, and the whole dimensional model reduces to just two kinds of table. Every table in a star is either a fact or a dimension, and telling them apart is the core skill of the discipline. Here are the two roles. A fact holds the measurements of a business process. It's numeric, additive, one row per event at a fixed grain. It's deep — many rows, growing forever — and narrow — few columns — and it's all foreign keys and measures. That's FACT SALES. A dimension holds the context for those measurements. It's textual, descriptive, one row per entity. It's wide — many attributes — and shallow — relatively few rows — with a surrogate primary key. That's dim customer, dim product, dim date. Line them up. A fact holds measures; a dimension holds attributes. A fact answers what happened and how much; a dimension answers who, what, when, and where. A fact is long and narrow; a dimension is wide and shallow. A fact grows fast and forever; a dimension grows slowly. A fact's keys are foreign keys to dimensions; a dimension's key is its surrogate primary key. And you use a fact to aggregate, a dimension to filter, group, and label. So here's the test. When you meet a column, ask one question: would you sum it, or group by it? A thing you add up is a measure — that's a fact. A thing you slice by is an attribute — that's a dimension. And watch this, because it trips people up: a number can fall on either side. Line total, on the fact, is a measure — you sum it. But list price, on dim product, is an attribute — you filter and group by it, products over two hundred euros; you'd never add prices together. Same data type, opposite role. The role, not the type, decides the table. Two tables build every star: facts you aggregate, dimensions you slice by. Get each column onto the right one, and the model designs itself.",
}

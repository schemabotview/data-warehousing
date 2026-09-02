import type { Section } from '../types'

export const dimensionPitfalls: Section = {
  id: 'dimension-pitfalls',
  title: 'Common dimension design pitfalls',
  scene: 'dimension-pitfalls',
  slide: `## Common dimension design pitfalls

Seven traps, and nearly all of them share one root: the dimension treated as an **afterthought** beside the fact.

### The traps, and the fixes

- **Too few attributes** → be generous; extra columns are cheap
- **Cryptic codes** → store **readable labels** (\`Returned\`, not \`RTN\`)
- **No surrogate key** → ties you to the source, **blocks SCD**
- **NULL foreign keys** → use an **"Unknown" member** (key \`0\`)
- **Premature snowflaking** → keep dimensions **flat** (module 05)
- **Ignoring change** → set an **SCD policy per attribute** (module 06)
- **Measures in a dimension** → sum it? → it's a **fact**

### The through-line

- Most share one root: the dimension as an **afterthought**
- Rich · labelled · surrogate-keyed · flat · history-aware
`,
  narration:
    "Common dimension design pitfalls. Dimensions are where a model most often goes quietly wrong — not with a crash, but with reports that are hard to build, or subtly untrustworthy. So here's a checklist of the usual traps, and the fix for each. First, too few attributes. A thin dimension can only answer a few questions. Be generous and descriptive — extra attributes are cheap storage, and future analysis you didn't have to predict. Second, cryptic codes instead of labels. Storing a two, or R-T-N, forces every single report to decode it. Store human-readable text — Returned, B-two-B — so the labels come straight off the dimension. Third, no surrogate key. Building on the source's natural key ties you to its numbering, and it blocks slowly-changing-dimension history. Give every dimension a surrogate key, with the natural key beside it. Fourth, null foreign keys. A missing lookup left as null silently drops rows from your joins. Use an unknown member — key zero — so every fact points at a real row. Fifth, premature snowflaking. Normalising a hierarchy into sub-tables — a separate category table, a separate brand table — to save space just adds joins and slows BI down. Keep dimensions flat and denormalized; the trade-off is module 05. Sixth, ignoring change over time. Pretending attributes never change loses history. Decide a slowly-changing-dimension policy per attribute — overwrite, or keep history — up front; that's module 06. And seventh, measures hiding in a dimension. A number you aggregate belongs on the fact, not as a dimension attribute. Apply the test: sum it, or slice by it? Most of these share one root cause: treating the dimension as an afterthought. The fact gets all the design attention; the dimension gets whatever the source happened to provide. So invest in your dimensions. Rich, labelled, surrogate-keyed, flat, and history-aware — that's what makes a warehouse pleasant to query, and trustworthy to report from.",
}

import type { Section } from '../types'

export const type6: Section = {
  id: 'type-6',
  title: 'Type 6 — the hybrid (1 + 2 + 3)',
  scene: 'type-6',
  slide: `## Type 6 — the hybrid (1 + 2 + 3)

1 + 2 + 3 = 6. Two columns holding different truths in the same row, so one table answers **as-was** and **as-is** at once.

### All three at once — 1 + 2 + 3 = 6

- **\`historical_region\`** — frozen per version (Type 2, **as-was**)
- **\`current_region\`** — latest, overwritten on **all** rows (Type 1+3, **as-is**)

### What it buys — two questions, one table

- **As-was** — group by \`historical_region\` → old sales credit **Madrid**
- **As-is** — group by \`current_region\` → *all* sales credit **Cataluña**

### The cost

- More columns · **heavier ETL** — each change also sweeps \`current_*\` across all prior rows
- The most capable, most complex common type
`,
  narration:
    'Type 6 — the hybrid, one plus two plus three. Type 6 is the combination type — one plus two plus three equals six; the number is literally the sum. It layers all three strategies onto one dimension, so you can report both "as it was" and "as it is" from the same table. Here\'s how all three work at once. A Type 6 row has the Type 2 structure — a new versioned row per change, with effective, expiry, and current columns — and it also carries an extra current-value column that behaves like Type 3, but is kept up to date Type-1-style on every historical row. So take Ana. Her first row: historical region Centro, for Madrid; current region Cataluña; effective June twenty twenty-one, expiring March twenty twenty-six, not current. Her second row: historical region Cataluña, current region Cataluña, effective April twenty twenty-six, high-date expiry, is current. Look at the two region columns. Historical region is frozen to what was true for that version — that\'s the Type 2, as-was value. Current region is the entity\'s latest region, overwritten on every row for that customer whenever it changes — that\'s the Type 1 plus Type 3, as-is value. And that\'s what it buys you: from one table, two questions, with no re-modelling. For as-was — "revenue by the region at the time of sale" — you group by historical region, and Ana\'s old sales credit Madrid\'s region. For as-is — "revenue by the customer\'s current region" — you group by current region, and all of Ana\'s sales, old and new, credit Cataluña. That flexibility — analyzing history under either the then-current or the now-current attribute — is Type 6\'s whole reason to exist. The cost is more columns and more ETL work: each change must insert the new Type 2 row and sweep the current column across all prior rows of that entity. It\'s the most capable, and the most complex, of the common types. So: Type 6 fuses one, two, and three — versioned rows for full history, plus an overwritten current column on every row — so one dimension answers both as-was and as-is, at the price of heavier ETL.',
}

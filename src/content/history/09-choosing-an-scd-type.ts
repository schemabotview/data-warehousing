import type { Section } from '../types'

export const choosingAnScdType: Section = {
  id: 'choosing-an-scd-type',
  title: 'Choosing an SCD type per attribute',
  scene: 'per-attribute',
  slide: `## Choosing an SCD type per attribute

SCD is not a setting on a table. It is chosen **column by column** — and one \`DIM_CUSTOMER\` routinely carries several policies at once.

### SCD is chosen **per column**, not per table

- One \`DIM_CUSTOMER\`, many policies:
- \`date_of_birth\` → **0** · \`name\` fix → **1** · \`city\`/\`segment\` → **2**
- \`region\` re-org → **3** · \`income_band\` → **4** mini-dim

### Ask per column: value needed **at the time of the fact**?

- **No, old value worthless** → **1** · **Never changes** → **0**
- **Yes, full timeline** → **2** · **current + one prior** → **3**
- **Yes, but changes too fast** → **4** · **as-was + as-is** → **6**

### Quick reference

`,
  narration:
    'Choosing an SCD type per attribute. The most common mistake is thinking SCD is a table setting — "dim customer is Type 2." It isn\'t. SCD is chosen per attribute. A single dimension routinely mixes types, column by column. Picture a realistic dim customer. Date of birth is Type 0 — immutable, it never changes. A name, when you\'re fixing a typo, is Type 1 — overwrite, because you don\'t want to keep the wrong old value. City and segment are Type 2 — full history, because sales analysis depends on where the customer was, and what they were, at the time. Region, during a re-org, might be Type 3 — dual old-and-new grouping for the transition. And income band is a Type 4 mini-dimension — it changes too often to version the whole customer. Each column is decided on its own merits, and the ETL applies the right rule to each. So here\'s the one question to ask, per column: do I need to know what this attribute was at the time of the fact? Walk the answers. No, and the old value is worthless — Type 1, overwrite. No, because it never changes — Type 0, retain original. Yes, and I need the full timeline — Type 2, add a row. Only current versus one prior, for dual reporting — Type 3. Yes, but it changes too fast for Type 2 — a Type 4 mini-dimension. And both as-was and as-is from one place — Type 6. Keep the quick reference in mind. Type 0 retains the original — original only. Type 1 overwrites — no history. Type 2 adds a row — full timeline. Type 3 adds a column — current plus one prior. Type 4 relocates to a history or mini-dimension table — full history, moved. And Type 6 is the hybrid — full history plus a current value on every row. Always weigh history value against cost: Type 2 is powerful, but it grows the table and complicates ETL; Type 1 is cheap, but it forgets. Match the type to how much the business will really ask "what was it back then" for that particular column. So: decide SCD per attribute, not per table. Ask "do I need this value as-of the fact?" for each column, and pick the lightest type that answers the questions that column will actually face.',
}

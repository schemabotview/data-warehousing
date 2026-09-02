import type { Section } from '../types'

export const type1: Section = {
  id: 'type-1',
  title: 'Type 1 — overwrite (no history)',
  scene: 'type-1',
  slide: `## Type 1 — overwrite (no history)

One row, updated in place. Simple, common — and it silently **rewrites the past**: every one of Ana's old sales now rolls up under Barcelona.

### One row, updated in place

- Same \`customer_key\`, new value · old value **gone**
- Mechanically an **UPSERT** — simplest, most common

### What it does to the facts

- All of Ana's **past** sales now roll up under **Barcelona**
- Reports the world **as it is now** — the **past is rewritten**
- Can't ask "her city *at the time* of that sale" — lost

### When it's right

- **No history needed** · **corrections** (never keep the wrong old value)
- **"As-is"** is the only question

### Limitation

- Lossy — can't report **as-it-was** → use Type 2 when history matters
`,
  narration:
    'Type 1 — overwrite, no history. Type 1 is the everyday strategy: when a value changes, you overwrite it in place. The new value replaces the old, the old value is gone, and no history is kept. Ana moves from Madrid to Barcelona. Her single dim customer row simply changes: same customer key, eleven-oh-one, same row — just a new city, Barcelona, where it used to say Madrid. Mechanically, it\'s an upsert: update the row if it exists, insert it if it\'s new. It\'s the simplest type to build, and the most common for attributes that don\'t need history. But watch what it does to the facts. Because every fact points at customer key eleven-oh-one, and that one row now says Barcelona, all of Ana\'s past sales instantly roll up under Barcelona — including the ones she made while she was still in Madrid. Type 1 rewrites the past: the world is reported entirely as it is now. And there\'s no way to ask "what was her city at the time of that sale" — that information has been overwritten and lost. So when is Type 1 the right call? Three cases. When you don\'t need history — the attribute isn\'t something you analyze over time, like a formatting tweak or a phone number. For corrections — fixing a misspelled name or a bad code; here overwrite is exactly what you want, because you never wish to preserve the wrong old value. And when "as-is" is the only question — you always want the current value applied across all history. The limitation is that Type 1 is lossy by design. The moment the business asks "revenue by region as it stood back then", Type 1 can\'t answer — it only knows the present. So when history matters, you reach for Type 2. But as a summary: Type 1 overwrites — one row, new value, no history. Simple, and perfect for corrections and non-historical attributes — but it rewrites the past into the present.',
}

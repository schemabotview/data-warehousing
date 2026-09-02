import type { Section } from '../types'

export const dimensionsBeforeFacts: Section = {
  id: 'dimensions-before-facts',
  title: 'Loading dimensions before facts',
  scene: 'dims-before-facts',
  slide: `## Loading dimensions before facts

A hard rule with a mechanical reason: a fact needs a surrogate foreign key, and that surrogate does not exist until its dimension row is loaded.

### The hard rule — dims first, then facts

- A fact needs a **surrogate FK** per dimension key
- That surrogate exists **only after** the dim row is loaded

### The sequence per run

1. **Load / merge dimensions** — new members + SCD changes (module 06)
2. **Load facts** — the lookups now **resolve**

- Facts first → lookups **miss** → rejected or silently → **Unknown**
- Dims first → **referential integrity**: every FK hits a real dim row

### Early-arriving facts (fact before its dim)

- Insert an **inferred placeholder** member — natural key known, attrs NULL
- Point the fact at its surrogate · **backfill** when the dim feed catches up
`,
  narration:
    "Loading dimensions before facts. There's a hard rule about the order of a load: load the dimensions first, then the facts. It follows directly from the surrogate-key lookup — and breaking it corrupts the star. Why is the order forced? Because a fact row needs a surrogate foreign key for every dimension key it carries. And that surrogate only exists once the dimension row has been loaded and its key generated. So the sequence per run is: first, load or merge the dimensions — insert new members, and apply SCD changes, from module six; now every needed surrogate key exists. Then, second, load the facts — and the lookups, from section seven, all resolve, because the dimension rows are already there. What happens if you load facts first? Every lookup misses. Rows get rejected — or worse, they're silently sent to the unknown member, and your star quietly loses its links. Loading dimensions before facts guarantees referential integrity: every fact foreign key points at a real dimension row. Now, there's an exception to handle: early-arriving facts. Sometimes a fact shows up before its dimension data — an order for a customer the customer feed hasn't delivered yet. That's an early-arriving fact. You don't drop it. Instead, you do three things. You insert an inferred, or placeholder, dimension member — the natural key is known from the fact itself, and the descriptive attributes are null, or unknown, for now. You point the fact at that placeholder's surrogate key. And you backfill the real attributes when the dimension feed catches up — which is just an SCD update on that row. This keeps the fact, and its foreign key, valid, while gracefully handling out-of-order arrival. So: always load dimensions before facts, so that every fact's surrogate-key lookup resolves and referential integrity holds. And for early-arriving facts, insert an inferred placeholder member, and backfill it later.",
}

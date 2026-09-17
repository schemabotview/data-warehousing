import type { Scene } from '@graphlearning/flow'

// §9 the choice — the section's real claim is that SCD is picked PER COLUMN, so the board shows one
// DIM_CUSTOMER with six columns each carrying a different policy. Seeing six types coexist in one
// table is the point; a reference list alone would let a learner keep thinking it is a table-level
// setting. The decision question is what turns the list into a procedure.
export const perAttribute: Scene = {
  id: 'per-attribute',
  title: 'One dimension, six policies',
  nodes: [
    {
      id: 'dim',
      label: 'DIM_CUSTOMER — a policy per column',
      kind: 'table',
      pattern: 'storage',
      headers: ['Column', 'Policy', 'Because'],
      values: [
        ['date_of_birth', 'Type 0', 'it never legitimately changes'],
        ['name (a typo fix)', 'Type 1', 'the old value was simply wrong'],
        ['city / segment', 'Type 2', 'the value at sale time matters'],
        ['region (a re-org)', 'Type 3', 'report both groupings at once'],
        ['income_band', 'Type 4', 'it changes too fast for Type 2'],
        ['region (both views)', 'Type 6', 'as-was and as-is together'],
      ],
    },
    {
      id: 'question',
      label: 'Ask this of every column',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'q-need', label: 'Needed at fact time?', sub: 'no → Type 1 · never changes → 0', pattern: 'user', icon: 'search' },
        { id: 'q-depth', label: 'How much history?', sub: 'full → 2 · one prior → 3 · fast → 4', pattern: 'user', icon: 'history' },
      ],
    },
  ],
  edges: [{ source: 'dim', target: 'question', label: 'SCD is not a setting on a table — it is a decision you take column by column, and one dimension routinely carries several' }],
}

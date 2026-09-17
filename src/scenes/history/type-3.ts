import type { Scene } from '@graphlearning/flow'

// §6 Type 3 — history in a COLUMN rather than a row, which sounds like a weaker Type 2 until you
// see its actual use: reporting the same facts under an old and a new grouping at once, after a
// re-org. The limits are drawn as hard stops because Type 3 is the type most often chosen by mistake.
export const type3: Scene = {
  id: 'type-3',
  title: 'Type 3 — one step of history, in a column',
  nodes: [
    {
      id: 'row',
      label: 'DIM_CUSTOMER',
      sub: 'same row, same key — the old value slides into previous_',
      kind: 'table',
      pattern: 'storage',
      headers: ['customer_key', 'name', 'current_city', 'previous_city'],
      values: [['1101', 'Ana Ruiz', 'Barcelona', 'Madrid']],
    },
    {
      id: 'use',
      label: 'The narrow, specific use — a re-org',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'us-old', label: 'Group by previous', sub: 'the regions as they were drawn', pattern: 'user', icon: 'globe' },
        { id: 'us-new', label: 'Group by current', sub: 'the regions as redrawn', pattern: 'user', icon: 'globe' },
      ],
    },
    {
      id: 'limits',
      label: 'Where it stops',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lm-one', label: 'One step only', sub: 'a second move drops the oldest', pattern: 'warn', icon: 'trash' },
        { id: 'lm-dates', label: 'No dates', sub: 'cannot tie a value to a fact', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [
    { source: 'row', target: 'use', label: 'report the same facts under both groupings, side by side' },
    { source: 'use', target: 'limits', label: 'not a cheaper Type 2 — it has no timeline, so it cannot answer "as of the date of that sale"' },
  ],
}

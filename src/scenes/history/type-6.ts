import type { Scene } from '../../render-engine'

// §8 Type 6 — the whole point is two columns holding different truths in the SAME row, so the rows
// must be on screen: historical_region frozen per version, current_region swept across every row.
// The ETL cost follows directly from that sweep, which is why it sits at the end rather than as an
// unexplained warning.
export const type6: Scene = {
  id: 'type-6',
  title: 'Type 6 — 1 + 2 + 3, in one table',
  nodes: [
    {
      id: 'rows',
      label: 'DIM_CUSTOMER',
      sub: 'historical_region is frozen per version · current_region is overwritten on EVERY row',
      kind: 'table',
      pattern: 'storage',
      headers: ['key', 'historical_region', 'current_region', 'effective', 'expiry', 'cur'],
      values: [
        ['1101', 'Centro', 'Cataluña', '2021-06-01', '2026-03-31', 'N'],
        ['1108', 'Cataluña', 'Cataluña', '2026-04-01', '9999-12-31', 'Y'],
      ],
    },
    {
      id: 'two',
      label: 'Two questions, one table',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tw-was', label: 'As-was', sub: 'group by historical_region', pattern: 'user', icon: 'history' },
        { id: 'tw-is', label: 'As-is', sub: 'group by current_region', pattern: 'user', icon: 'circlecheck' },
      ],
    },
    { id: 'cost', label: 'The cost', sub: 'every change sweeps current_* across all prior rows', pattern: 'warn', icon: 'repeat' },
  ],
  edges: [
    { source: 'rows', target: 'two', label: 'the same query, one column apart, answers the two questions §1 said were both correct' },
    { source: 'two', target: 'cost', label: 'the most capable common type, and the most complex to load' },
  ],
}

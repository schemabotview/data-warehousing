import type { Scene } from '../../render-engine'

// §7 the same degenerate dimension, from the OTHER side — the narration explicitly calls back to
// module 03, so this board is deliberately not a re-run of that one. There it was a column on the
// fact; here it takes its place as one of the four special dimension types, and the table is the
// comparison that puts it there.
export const fourSpecialTypes: Scene = {
  id: 'four-special-types',
  title: 'The four special dimension types',
  nodes: [
    {
      id: 'from-dim-side',
      label: 'order_id, seen from the dimension side',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'fd-key', label: 'A dimension key', sub: 'sitting on the fact row', pattern: 'storage', icon: 'key' },
        { id: 'fd-none', label: 'With no table', sub: 'its attributes are all elsewhere', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    {
      id: 'types',
      label: 'Where each one lives',
      kind: 'table',
      pattern: 'service',
      headers: ['Type', 'Its table', 'What it holds'],
      values: [
        ['Conformed', 'a shared table', 'rich attributes, reused across facts'],
        ['Role-playing', 'one table, many roles', 'the same dimension, joined repeatedly'],
        ['Junk', 'one small table', 'bundled low-cardinality flags'],
        ['Degenerate', 'NO table', 'just an id, carried on the fact'],
      ],
    },
    {
      id: 'still',
      label: 'Still real, still useful',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sr-group', label: 'Groups the lines', sub: 'of one transaction', pattern: 'user', icon: 'boxes' },
        { id: 'sr-audit', label: 'Audit trail', sub: 'and count distinct orders', pattern: 'user', icon: 'scroll' },
      ],
    },
  ],
  edges: [
    { source: 'from-dim-side', target: 'types', label: 'everything an order dimension would hold is already a dimension, so only the bare id is left' },
    { source: 'types', target: 'still' },
  ],
}

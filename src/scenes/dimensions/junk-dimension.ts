import type { Scene } from '../../render-engine'

// §6 junk dimensions — the before/after is the argument: four flag columns smeared across a huge
// fact, versus one junk_key pointing at a tiny table of the combinations that actually occur. The
// last band separates junk from its two cousins, which are constantly confused with it.
export const junkDimension: Scene = {
  id: 'junk-dimension',
  title: 'Bundling the flags',
  nodes: [
    {
      id: 'before',
      label: 'Flags smeared across the fact',
      sub: 'four low-cardinality columns on the biggest table you own',
      kind: 'table',
      pattern: 'warn',
      headers: ['order_status', 'payment', 'gift_wrap', 'priority'],
      values: [['Shipped', 'Paid', 'No', 'Standard']],
    },
    {
      id: 'after',
      label: 'DIM_JUNK — the combinations that occur',
      sub: 'the fact now carries ONE junk_key',
      kind: 'table',
      pattern: 'service',
      headers: ['junk_key', 'order_status', 'payment', 'gift_wrap', 'priority'],
      values: [
        ['1', 'Shipped', 'Paid', 'No', 'Standard'],
        ['2', 'Shipped', 'Paid', 'Yes', 'Express'],
        ['3', 'Returned', 'Refunded', 'No', 'Standard'],
      ],
    },
    {
      id: 'cousins',
      label: 'Junk and its two cousins',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cz-junk', label: 'Junk', sub: 'flags → one small table', pattern: 'service', icon: 'boxes' },
        { id: 'cz-degen', label: 'Degenerate', sub: 'an id, and no table at all', pattern: 'external', icon: 'fingerprint' },
        { id: 'cz-conf', label: 'Conformed', sub: 'one rich table, shared', pattern: 'user', icon: 'merge' },
      ],
    },
  ],
  edges: [
    { source: 'before', target: 'after', label: 'store only the combinations that actually happen — usually a few dozen rows' },
    { source: 'after', target: 'cousins', label: 'the fact stays narrow, and the flags gain a home you can group by' },
  ],
}

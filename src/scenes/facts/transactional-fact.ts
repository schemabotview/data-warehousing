import type { Scene } from '@graphlearning/flow'

// §6 transactional facts — the default type, and its defining property is what does NOT happen: no
// row is ever updated. Drawing the 1:1 correspondence with source events (240 orders, 240 rows) is
// what makes "insert-only" concrete, and it is the baseline the next two sections deviate from.
export const transactionalFact: Scene = {
  id: 'transactional-fact',
  title: 'One row per event',
  nodes: [
    {
      id: 'source',
      label: 'Source events',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sv-line', label: 'An order line', sub: 'the moment it happens', pattern: 'external', icon: 'receipt' },
        { id: 'sv-click', label: 'A click', pattern: 'external', icon: 'zap' },
        { id: 'sv-pay', label: 'A payment', pattern: 'external', icon: 'receipt' },
      ],
    },
    {
      id: 'fact',
      label: 'FACT_SALES',
      sub: '240 source order lines → 240 fact rows, exactly',
      kind: 'table',
      pattern: 'storage',
      headers: ['date_key', 'product_key', 'quantity', 'line_total'],
      values: [
        ['20260112', '204', '2', '1,200'],
        ['20260112', '207', '1', '300'],
      ],
    },
    {
      id: 'props',
      label: 'What follows from that',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'p-immutable', label: 'Never updated', sub: 'the event already happened', pattern: 'service', icon: 'lock' },
        { id: 'p-atomic', label: 'Finest grain', sub: 'the warehouse workhorse', pattern: 'service', icon: 'ruler' },
        { id: 'p-flex', label: 'Endlessly flexible', sub: 'answers questions not yet asked', pattern: 'service', icon: 'star' },
      ],
    },
  ],
  edges: [
    { source: 'source', target: 'fact', label: 'insert-only, one for one' },
    { source: 'fact', target: 'props', label: 'this is the DEFAULT — reach for another fact type only when a specific need appears' },
  ],
}

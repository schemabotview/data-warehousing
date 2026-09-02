import type { Scene } from '../../render-engine'

// §7 periodic snapshots — a row appears whether or not anything happened, which is exactly what a
// transactional fact will not do. The daily rows make "stock on 1-Feb is one lookup, not a re-sum"
// visible, and the semi-additive warning belongs beside them because summing that column down the
// date axis is the mistake this table invites.
export const periodicSnapshot: Scene = {
  id: 'periodic-snapshot',
  title: 'A photo of a level, every period',
  nodes: [
    {
      id: 'snap',
      label: 'FACT_INVENTORY_SNAPSHOT',
      sub: 'one row per product per warehouse per day — changed or not',
      kind: 'table',
      pattern: 'storage',
      headers: ['snapshot_date', 'product', 'warehouse', 'on_hand_qty'],
      values: [
        ['01-Feb', 'Headset', 'Madrid', '1,270'],
        ['02-Feb', 'Headset', 'Madrid', '1,180'],
        ['03-Feb', 'Headset', 'Madrid', '1,180'],
      ],
    },
    {
      id: 'sum',
      label: 'The measure is semi-additive',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sm-ok', label: 'Across warehouses', sub: 'sum — total stock on hand', pattern: 'service', icon: 'circlecheck' },
        { id: 'sm-no', label: 'Across dates', sub: 'average or last — never sum', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    { id: 'use', label: 'Use it for a LEVEL', sub: 'inventory · balances · headcount', pattern: 'user', icon: 'gauge' },
  ],
  edges: [
    { source: 'snap', target: 'sum', label: '"stock on 1-Feb" becomes one lookup instead of replaying every movement' },
    { source: 'sum', target: 'use' },
  ],
}

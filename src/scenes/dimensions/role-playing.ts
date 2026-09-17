import type { Scene } from '@graphlearning/flow'

// §5 role-playing — the mistake this section prevents is building three date tables, so the board
// shows three fact columns converging on ONE DIM_DATE, and the code card shows the aliasing that
// makes the roles readable. Without the SQL, "join it once per date column" stays abstract.
export const rolePlaying: Scene = {
  id: 'role-playing',
  title: 'One table, three roles',
  nodes: [
    {
      id: 'roles',
      label: 'Three date columns on the fact',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'rp-order', label: 'order_date_key', pattern: 'storage', icon: 'receipt' },
        { id: 'rp-ship', label: 'ship_date_key', pattern: 'storage', icon: 'workflow' },
        { id: 'rp-deliver', label: 'delivery_date', sub: '…_key — the third role', pattern: 'storage', icon: 'circlecheck' },
        { id: 'rp-dim', label: 'DIM_DATE', sub: 'ONE table — copies would drift', pattern: 'service', icon: 'calendar' },
      ],
      edges: [
        { source: 'rp-order', target: 'rp-dim' },
        { source: 'rp-ship', target: 'rp-dim' },
        { source: 'rp-deliver', target: 'rp-dim' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'alias each join to name the role',
      label: [
        'JOIN dim_date o ON f.order_date_key    = o.date_key',
        'JOIN dim_date s ON f.ship_date_key     = s.date_key',
        'JOIN dim_date d ON f.delivery_date_key = d.date_key',
      ].join('\n'),
    },
    {
      id: 'beyond',
      label: 'Not only dates',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'bd-emp', label: 'Employee', sub: 'seller_key and buyer_key', pattern: 'user', icon: 'users' },
        { id: 'bd-geo', label: 'Geography', sub: 'origin and destination', pattern: 'user', icon: 'globe' },
      ],
    },
  ],
  edges: [
    { source: 'roles', target: 'sql', label: 'one table, joined once per column — or expose a view per role' },
    { source: 'sql', target: 'beyond' },
  ],
}

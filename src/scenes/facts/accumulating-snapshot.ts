import type { Scene } from '../../render-engine'

// §8 accumulating snapshots — the only fact type whose rows are UPDATED, so the scene shows one row
// at two moments: born with NULL milestones, then filled in as the pipeline advances. The NULLs are
// the whole idea, which is why both states are drawn rather than described.
export const accumulatingSnapshot: Scene = {
  id: 'accumulating-snapshot',
  title: 'One row per lifecycle, updated in place',
  nodes: [
    {
      id: 'pipeline',
      label: 'A known, finite set of steps',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'st-order', label: 'Order', pattern: 'service', icon: 'receipt' },
        { id: 'st-pack', label: 'Packed', pattern: 'service', icon: 'package' },
        { id: 'st-ship', label: 'Shipped', pattern: 'service', icon: 'workflow' },
        { id: 'st-deliver', label: 'Delivered', pattern: 'service', icon: 'circlecheck' },
      ],
      edges: [
        { source: 'st-order', target: 'st-pack' },
        { source: 'st-pack', target: 'st-ship' },
        { source: 'st-ship', target: 'st-deliver' },
      ],
    },
    {
      id: 'rows',
      label: 'FACT_SHIPMENT — a column per milestone',
      sub: 'O002 is still in flight, so its later dates are still NULL',
      kind: 'table',
      pattern: 'storage',
      headers: ['order_id', 'order_dt', 'packed_dt', 'shipped_dt', 'delivered_dt'],
      values: [
        ['O001', '10-Jan', '11-Jan', '12-Jan', '14-Jan'],
        ['O002', '13-Jan', '13-Jan', 'NULL', 'NULL'],
      ],
    },
    {
      id: 'measures',
      label: 'The measures are the LAGS',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ms-lag', label: 'days_to_deliver', sub: 'and days to pack, days to ship', pattern: 'storage', icon: 'clock' },
        { id: 'ms-sla', label: 'SLA metrics', sub: 'where the pipeline stalls', pattern: 'user', icon: 'gauge' },
      ],
    },
  ],
  edges: [
    { source: 'pipeline', target: 'rows', label: 'the row is born at step one and each later step fills its own date' },
    { source: 'rows', target: 'measures', label: 'the ONLY fact type whose rows are updated — which is why the steps must be known and finite' },
  ],
}

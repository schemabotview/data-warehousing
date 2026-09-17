import type { Scene } from '@graphlearning/flow'

// §5 degenerate dimensions — the teaching move is to build the DIM_ORDER that ISN'T there and show
// it empty: every attribute an order header would carry has already gone to another dimension, so
// only the identifier is left, and an identifier with no attributes has nowhere to live but the fact.
export const degenerateDim: Scene = {
  id: 'degenerate-dim',
  title: 'The dimension with no table',
  nodes: [
    {
      id: 'fact',
      label: 'FACT_SALES row',
      sub: 'order_id sits right here, with the measures',
      kind: 'table',
      pattern: 'storage',
      headers: ['order_id', 'order_status', 'product_key', 'quantity'],
      values: [
        ['O-4471', 'SHIPPED', '204', '2'],
        ['O-4471', 'SHIPPED', '207', '1'],
      ],
    },
    {
      id: 'missing',
      label: 'The DIM_ORDER that would have held it',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mo-date', label: 'Order date?', sub: 'already in DIM_DATE', pattern: 'external', icon: 'calendar' },
        { id: 'mo-cust', label: 'Customer?', sub: 'already in DIM_CUSTOMER', pattern: 'external', icon: 'users' },
        { id: 'mo-left', label: 'What is left', sub: 'just the identifier', pattern: 'warn', icon: 'fingerprint' },
      ],
    },
    {
      id: 'keep',
      label: 'Why carry it at all',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'kp-basket', label: 'Groups one order', sub: 'market-basket analysis', pattern: 'service', icon: 'boxes' },
        { id: 'kp-audit', label: 'Audit trail', sub: 'back to the source system', pattern: 'service', icon: 'scroll' },
      ],
    },
  ],
  edges: [
    { source: 'fact', target: 'missing', label: 'the grain is one order LINE, and order_id is an order-HEADER attribute' },
    { source: 'missing', target: 'keep', label: 'spot one by its shape: an operational id — order, invoice, ticket — with no attributes of its own' },
  ],
}

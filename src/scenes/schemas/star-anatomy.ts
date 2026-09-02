import type { Scene } from '../../render-engine'

// §2 anatomy — the centre and the points are opposite in every dimension of shape, and the join
// arithmetic at the end (N+1 tables, at most N joins, never a join BETWEEN dimensions) is the
// property that makes a star predictable to query. That arithmetic is the section's real content.
export const starAnatomy: Scene = {
  id: 'star-anatomy',
  title: 'The centre and the points',
  nodes: [
    {
      id: 'contrast',
      label: 'Opposite shapes, on purpose',
      kind: 'table',
      pattern: 'external',
      headers: ['', 'The centre — fact', 'The points — dimensions'],
      values: [
        ['Holds', 'measures + an FK per dim', 'attributes + a surrogate PK'],
        ['Shape', 'long & narrow', 'wide & shallow'],
        ['Rows', 'many, growing fast', 'few, growing slowly'],
      ],
    },
    {
      id: 'wiring',
      label: 'The wiring — one join per point',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'wr-fact', label: 'FACT_SALES', sub: 'customer_key · product_key', pattern: 'storage', icon: 'sigma' },
        { id: 'wr-cust', label: 'DIM_CUSTOMER', sub: 'customer_key (PK)', pattern: 'service', icon: 'users' },
        { id: 'wr-prod', label: 'DIM_PRODUCT', sub: 'product_key (PK)', pattern: 'service', icon: 'package' },
      ],
      edges: [
        { source: 'wr-fact', target: 'wr-cust', label: 'one-to-many' },
        { source: 'wr-fact', target: 'wr-prod', label: 'one-to-many' },
      ],
    },
    { id: 'arith', label: 'The arithmetic', sub: '1 fact + N dims = N+1 tables, at most N joins', pattern: 'user', icon: 'hash' },
  ],
  edges: [
    { source: 'contrast', target: 'wiring' },
    { source: 'wiring', target: 'arith', label: 'and never a join BETWEEN two dimensions — that is what keeps every query the same shape' },
  ],
}

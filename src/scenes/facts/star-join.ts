import type { Scene } from '../../render-engine'

// §4 the star centre — the fact's FKs are the rays, so the scene is the star itself, and the code
// card is the query shape that falls out of it. Pairing the two is the point: every BI query takes
// measures from the centre and labels from a point, and the SQL makes that literal.
export const starJoin: Scene = {
  id: 'star-join',
  title: 'The fact at the centre of the star',
  nodes: [
    {
      id: 'star',
      label: 'One FK per dimension',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'sf-fact', label: 'FACT_SALES', sub: 'stores the KEY, never the text', pattern: 'storage', icon: 'sigma' },
        { id: 'sf-date', label: 'DIM_DATE', sub: 'order_date_key', pattern: 'service', icon: 'calendar' },
        { id: 'sf-cust', label: 'DIM_CUSTOMER', sub: 'customer_key', pattern: 'service', icon: 'users' },
        { id: 'sf-prod', label: 'DIM_PRODUCT', sub: 'product_key', pattern: 'service', icon: 'package' },
        { id: 'sf-chan', label: 'DIM_CHANNEL', sub: 'channel_key', pattern: 'service', icon: 'workflow' },
        { id: 'sf-promo', label: 'DIM_PROMOTION', sub: 'promotion_key', pattern: 'service', icon: 'tag' },
      ],
      edges: [
        { source: 'sf-fact', target: 'sf-date' },
        { source: 'sf-fact', target: 'sf-cust' },
        { source: 'sf-fact', target: 'sf-prod' },
        { source: 'sf-fact', target: 'sf-chan' },
        { source: 'sf-fact', target: 'sf-promo' },
      ],
    },
    {
      id: 'query',
      kind: 'code',
      filename: 'every BI query is this shape',
      label: [
        'SELECT p.product_line, SUM(f.line_total)',
        'FROM   fact_sales f',
        'JOIN   dim_product p ON f.product_key = p.product_key',
        'GROUP BY p.product_line',
      ].join('\n'),
    },
    {
      id: 'why',
      label: 'Why narrow integer keys',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wy-join', label: 'Fast joins', sub: 'at billions of rows', pattern: 'service', icon: 'zap' },
        { id: 'wy-small', label: 'Small storage', sub: 'the fact is the big table', pattern: 'service', icon: 'harddrive' },
        { id: 'wy-scd', label: 'Absorbs change', sub: 'SCD without touching the fact', pattern: 'service', icon: 'history' },
      ],
    },
  ],
  edges: [
    { source: 'star', target: 'query', label: 'measures from the centre, labels and filters from the points' },
    { source: 'query', target: 'why' },
  ],
}

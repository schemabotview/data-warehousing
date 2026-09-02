import type { Scene } from '../../render-engine'

// §9 the result — the four steps map one-for-one onto the four parts of the star, and that mapping
// is the course's whole argument in one board. The query is what PROVES it: a business question the
// business actually asks, answered with one fact and three joins.
export const resultingStar: Scene = {
  id: 'resulting-star',
  title: 'Four steps in, a star out',
  nodes: [
    {
      id: 'mapping',
      label: 'Each step became a part of the star',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'mp-process', label: 'The process', sub: '→ became the fact table', pattern: 'service', icon: 'workflow' },
        { id: 'mp-grain', label: 'The grain', sub: '→ became its rows', pattern: 'storage', icon: 'ruler' },
        { id: 'mp-dims', label: 'The dimensions', sub: '→ became the points', pattern: 'user', icon: 'layers' },
        { id: 'mp-facts', label: 'The facts', sub: '→ became the centre', pattern: 'storage', icon: 'sigma' },
      ],
    },
    {
      id: 'query',
      kind: 'code',
      filename: 'and it answers the business',
      label: [
        'SELECT d.month_name, p.product_line, c.region, SUM(f.line_total)',
        'FROM   fact_sales f',
        'JOIN   dim_date d      ON f.order_date_key = d.date_key',
        'JOIN   dim_product p   ON f.product_key    = p.product_key',
        'JOIN   dim_customer c  ON f.customer_key   = c.customer_key',
        'GROUP BY d.month_name, p.product_line, c.region',
      ].join('\n'),
    },
    { id: 'shape', label: 'One fact, three joins', sub: 'measures centre, slices points', pattern: 'user', icon: 'star' },
  ],
  edges: [
    { source: 'mapping', target: 'query', label: '"revenue by month, by product line, by region" — the question that started the whole design' },
    { source: 'query', target: 'shape' },
  ],
}

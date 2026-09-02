import type { Scene } from '../../render-engine'

// §4 links — again defined by an absence: no attributes, no measures, only the hubs it ties. The
// golden rule (model M:N even when today it is 1:N) is the section's real content, because it is
// the specific thing that lets cardinality change without a rebuild — the star's weakness from §1.
export const links: Scene = {
  id: 'links',
  title: 'Links — keys only',
  nodes: [
    {
      id: 'link',
      label: 'LinkOrderLine',
      sub: 'hash of the two parent keys · product-on-order, the sale-line grain',
      kind: 'table',
      pattern: 'service',
      columns: [
        { name: 'order_line_hk', type: 'hash', key: 'PK' },
        { name: 'order_hk', type: 'hash', key: 'FK' },
        { name: 'product_hk', type: 'hash', key: 'FK' },
        { name: 'load_date', type: 'timestamp' },
        { name: 'record_source', type: 'varchar' },
      ],
    },
    {
      id: 'rule',
      label: 'The golden rule — always many-to-many',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'r-today', label: 'Today it is 1:N', sub: 'model it M:N anyway', pattern: 'user', icon: 'scale' },
        { id: 'r-tomorrow', label: 'Tomorrow it is M:N', sub: 'and nothing has to be rebuilt', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    { id: 'measures', label: 'A sat ON the link', sub: 'quantity · unit_price · line_total', pattern: 'user', icon: 'sigma' },
  ],
  edges: [
    { source: 'link', target: 'rule' },
    { source: 'rule', target: 'measures', label: 'a star would rebuild the fact table to change that cardinality; here the link already allows it — and the numbers it carries live on a satellite' },
  ],
}

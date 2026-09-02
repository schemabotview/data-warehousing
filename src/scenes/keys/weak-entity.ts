import type { Scene } from '../../render-engine'

// §8 strong vs weak — identity is the difference, so the two tables are drawn with their keys
// showing: ORDER owns its id, ORDER_LINE has no key of its own and borrows its parent's. The band
// at the end is the warehouse consequence — the weak table usually becomes the fact's grain.
export const weakEntity: Scene = {
  id: 'weak-entity',
  title: 'Strong and weak entities',
  nodes: [
    {
      id: 'strong',
      label: 'ORDER — strong',
      sub: 'independent existence, its own key',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'order_id', type: 'int', key: 'PK' },
        { name: 'customer_id', type: 'int', key: 'FK' },
        { name: 'order_date', type: 'date' },
      ],
    },
    {
      id: 'weak',
      label: 'ORDER_LINE — weak',
      sub: 'PK = (order_id, line_no) — the parent key is part of its identity',
      kind: 'table',
      pattern: 'warn',
      columns: [
        { name: 'order_id', type: 'int', key: 'PK' },
        { name: 'line_no', type: 'int', key: 'PK' },
        { name: 'product_id', type: 'int', key: 'FK' },
        { name: 'qty', type: 'int' },
      ],
    },
    {
      id: 'consequences',
      label: 'What weakness implies',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'c-key', label: 'Composite PK', sub: 'parent key + local discriminator', pattern: 'service', icon: 'key' },
        { id: 'c-fk', label: 'Mandatory FK', sub: 'never nullable — identity needs it', pattern: 'service', icon: 'link' },
        { id: 'c-life', label: 'Cascading life', sub: 'delete the parent, children go', pattern: 'warn', icon: 'trash' },
      ],
    },
    { id: 'dwgrain', label: 'In a warehouse', sub: 'the weak table becomes the fact grain', pattern: 'storage', icon: 'ruler' },
  ],
  edges: [
    { source: 'strong', target: 'weak', label: 'an order line has no meaning without its order' },
    { source: 'weak', target: 'consequences' },
    { source: 'consequences', target: 'dwgrain', label: 'one row per order line is exactly what FactSales will measure' },
  ],
}

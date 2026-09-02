import type { Scene } from '../../render-engine'

// §3 the worked example — the before/after IS the lesson, so both states are real tables: the flat
// one with city repeated, and the two it splits into. The edge carries the diagnosis (city depends
// on the key only THROUGH cust), which is the step a learner actually has to perform.
export const splitTo3nf: Scene = {
  id: 'split-to-3nf',
  title: 'Splitting to 3NF',
  nodes: [
    {
      id: 'before',
      label: 'BEFORE — city repeated',
      sub: 'key is order, but city depends on cust',
      kind: 'table',
      pattern: 'warn',
      headers: ['order', 'cust', 'cust_city'],
      values: [
        ['1', 'Ann', 'Delhi'],
        ['2', 'Ann', 'Delhi'],
        ['3', 'Bob', 'Pune'],
      ],
    },
    {
      id: 'after',
      label: 'AFTER — two tables, one join',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'orders', label: 'orders', kind: 'table', pattern: 'storage',
          columns: [
            { name: 'order', type: 'int', key: 'PK' },
            { name: 'cust_id', type: 'int', key: 'FK' },
          ],
        },
        {
          id: 'customers', label: 'customers', kind: 'table', pattern: 'storage',
          columns: [
            { name: 'cust_id', type: 'int', key: 'PK' },
            { name: 'name', type: 'varchar' },
            { name: 'city', type: 'varchar' },
          ],
        },
      ],
    },
    { id: 'cost', label: 'The gain and the bill', sub: 'no anomalies · city written once · reads now join', pattern: 'user', icon: 'scale' },
  ],
  edges: [
    { source: 'before', target: 'after', label: 'city depends on the key only THROUGH cust — a transitive dependency, which 3NF forbids' },
    { source: 'after', target: 'cost' },
  ],
}

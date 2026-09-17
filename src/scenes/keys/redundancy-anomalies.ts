import type { Scene } from '@graphlearning/flow'

// §1 why we split — the argument is empirical, so show the actual rows. One wide table with
// "Ann · Delhi" repeated is the evidence; the three anomalies below are what that repetition costs.
// A card that merely says "redundancy is bad" would assert what this table proves.
export const redundancyAnomalies: Scene = {
  id: 'redundancy-anomalies',
  title: 'One fact, stored many times',
  nodes: [
    {
      id: 'flat',
      label: 'ORDERS — one wide table',
      sub: 'the same fact written on every row',
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
      id: 'anomalies',
      label: 'What the repetition costs',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'a-update', label: 'Update', sub: 'Ann moves — miss a row, she is in two cities', pattern: 'warn', icon: 'pencil' },
        { id: 'a-insert', label: 'Insertion', sub: 'no customer until they order', pattern: 'warn', icon: 'ban' },
        { id: 'a-delete', label: 'Deletion', sub: 'last order gone — she never existed', pattern: 'warn', icon: 'trash' },
      ],
    },
    {
      id: 'split',
      label: 'One fact, one place',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 's-orders', label: 'orders', sub: 'order, cust_id', pattern: 'storage', icon: 'table' },
        { id: 's-cust', label: 'customers', sub: 'cust_id, name, city — written once', pattern: 'storage', icon: 'table' },
      ],
    },
  ],
  edges: [
    { source: 'flat', target: 'anomalies', label: 'the copies can drift apart' },
    { source: 'anomalies', target: 'split', label: 'split into related tables linked by keys — the anomalies disappear, and the cost moves to a join on read' },
  ],
}

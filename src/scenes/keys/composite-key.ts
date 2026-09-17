import type { Scene } from '@graphlearning/flow'

// §6 composite keys — "unique only in COMBINATION" has to be seen: neither order_id nor line_no is
// unique down its own column, and the pair is. The three places composites appear are listed below,
// ending on the fact table, which is where this course is heading.
export const compositeKey: Scene = {
  id: 'composite-key',
  title: 'A key made of two columns',
  nodes: [
    {
      id: 'lines',
      label: 'ORDER_LINE',
      sub: 'order_id repeats · line_no repeats · together, unique',
      kind: 'table',
      pattern: 'storage',
      headers: ['order_id', 'line_no', 'product_id', 'qty'],
      values: [
        ['1001', '1', 'P-77', '2'],
        ['1001', '2', 'P-88', '1'],
        ['1002', '1', 'P-77', '5'],
      ],
    },
    {
      id: 'where',
      label: 'Where composites turn up',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'w-bridge', label: 'Bridge tables', sub: 'the pair of FKs IS the key', pattern: 'service', icon: 'link' },
        { id: 'w-weak', label: 'Weak entities', sub: 'parent key + a local counter', pattern: 'service', icon: 'gitbranch' },
        { id: 'w-fact', label: 'Fact tables', sub: 'the dimension FKs define the grain', pattern: 'storage', icon: 'sigma' },
      ],
    },
    { id: 'catch', label: 'Wide and awkward', sub: 'every reference carries all the columns', pattern: 'warn', icon: 'scale' },
  ],
  edges: [
    { source: 'lines', target: 'where', label: 'the same shape, three jobs' },
    { source: 'where', target: 'catch', label: 'which is why a warehouse swaps in one narrow surrogate and keeps the composite as plain attributes' },
  ],
}

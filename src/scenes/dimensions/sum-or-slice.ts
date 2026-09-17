import type { Scene } from '@graphlearning/flow'

// §9 fact vs dimension — six axes of contrast, which is a table's job. The board then lands on the
// one-question test, and on the case that proves the test is about ROLE and not data type: the same
// decimal is a measure on the fact and an attribute on the dimension.
export const sumOrSlice: Scene = {
  id: 'sum-or-slice',
  title: 'Sum it, or slice by it?',
  nodes: [
    {
      id: 'contrast',
      label: 'Every star table is one or the other',
      kind: 'table',
      pattern: 'external',
      headers: ['', 'Fact', 'Dimension'],
      values: [
        ['Holds', 'measures (numbers)', 'attributes (context)'],
        ['Answers', 'what / how much', 'who, what, when, where'],
        ['Shape', 'long & narrow', 'wide & shallow'],
        ['Grows', 'fast, forever', 'slowly'],
        ['Key', 'FKs to dimensions', 'a surrogate PK'],
        ['Used to', 'aggregate', 'filter, group, label'],
      ],
    },
    {
      id: 'test',
      label: 'The one-question test',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ts-sum', label: 'SUM it?', sub: 'then it is a measure — fact', pattern: 'storage', icon: 'sigma' },
        { id: 'ts-group', label: 'GROUP BY it?', sub: 'then it is an attribute — dimension', pattern: 'service', icon: 'layers' },
      ],
    },
    {
      id: 'proof',
      label: 'The same number, both ways',
      sub: 'the ROLE decides the table, not the data type',
      kind: 'table',
      pattern: 'user',
      headers: ['Column', 'Lives on', 'Because you'],
      values: [
        ['line_total', 'FACT_SALES', 'sum it'],
        ['list_price', 'DIM_PRODUCT', 'group by it'],
      ],
    },
  ],
  edges: [
    { source: 'contrast', target: 'test' },
    { source: 'test', target: 'proof', label: 'both are decimals — and they belong in different tables' },
  ],
}

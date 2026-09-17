import type { Scene } from '@graphlearning/flow'

// §1 what a fact table IS — every column is one of exactly two things, and seeing real FACT_SALES
// rows with the keys and the measures side by side makes that division obvious in a way a definition
// cannot. The four properties below are the test you apply to any candidate fact table.
export const factAnatomy: Scene = {
  id: 'fact-anatomy',
  title: 'FACT_SALES — two kinds of column',
  nodes: [
    {
      id: 'rows',
      label: 'FACT_SALES',
      sub: 'one row = one order line · keys on the left, numbers on the right',
      kind: 'table',
      pattern: 'storage',
      headers: ['date_key', 'customer_key', 'product_key', 'quantity', 'line_total'],
      values: [
        ['20260112', '1101', '204', '2', '1,200'],
        ['20260112', '1120', '207', '1', '300'],
      ],
    },
    {
      id: 'kinds',
      label: 'Only two kinds of column exist here',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'k-fk', label: 'Foreign keys', sub: 'the context — who, what, when, where', pattern: 'service', icon: 'key' },
        { id: 'k-m', label: 'Measures', sub: 'the numbers you aggregate', pattern: 'storage', icon: 'sigma' },
      ],
    },
    {
      id: 'tests',
      label: 'What makes a table a FACT table',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 't-num', label: 'Numeric', sub: 'and normally additive', pattern: 'service', icon: 'hash' },
        { id: 't-grain', label: 'Fixed grain', sub: 'every row means the same', pattern: 'service', icon: 'ruler' },
        { id: 't-fk', label: 'An FK per dim', sub: 'no descriptive text stored', pattern: 'service', icon: 'link' },
        { id: 't-shape', label: 'Long & narrow', sub: 'the fastest-growing table', pattern: 'service', icon: 'table' },
      ],
    },
  ],
  edges: [
    { source: 'rows', target: 'kinds', label: 'keys carry the context; measures carry the numbers' },
    { source: 'kinds', target: 'tests' },
  ],
}

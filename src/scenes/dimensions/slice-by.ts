import type { Scene } from '../../render-engine'

// §1 what a dimension IS — the section's hook is that every report has the shape "measure BY
// attribute", so the board puts a real report sentence at the top and shows which half comes from
// which table. DIM_PRODUCT's rows then show the signature: text, not codes; wide, not long.
export const sliceBy: Scene = {
  id: 'slice-by',
  title: 'The "by" in every report',
  nodes: [
    {
      id: 'report',
      label: 'Every report has one shape',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'r-measure', label: 'Sales', sub: 'the MEASURE — from the fact', pattern: 'storage', icon: 'sigma' },
        { id: 'r-by', label: 'by product line', sub: 'the ATTRIBUTE — from a dimension', pattern: 'service', icon: 'layers' },
      ],
      edges: [{ source: 'r-measure', target: 'r-by', label: 'revenue by month, by region — same shape every time' }],
    },
    {
      id: 'dim',
      label: 'DIM_PRODUCT',
      sub: 'descriptive context — human labels, not codes',
      kind: 'table',
      pattern: 'service',
      headers: ['product_key', 'product_id', 'name', 'category', 'product_line'],
      values: [
        ['204', 'P-88', 'Evolve2 65', 'Headset', 'Headsets'],
        ['207', 'P-91', 'Elite 8', 'Earbud', 'Earbuds'],
      ],
    },
    {
      id: 'signature',
      label: 'The signature of a dimension',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sg-text', label: 'Descriptive', sub: 'readable labels, not codes', pattern: 'service', icon: 'tag' },
        { id: 'sg-shape', label: 'Wide & shallow', sub: 'many columns, few rows', pattern: 'service', icon: 'table' },
        { id: 'sg-key', label: 'Surrogate PK', sub: 'the fact points at it', pattern: 'service', icon: 'key' },
      ],
    },
  ],
  edges: [
    { source: 'report', target: 'dim' },
    { source: 'dim', target: 'signature', label: 'the things you filter, group and label by' },
  ],
}

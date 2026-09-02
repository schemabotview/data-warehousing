import type { Scene } from '../../render-engine'

// §4 denormalization — the warehouse deliberately UNDOES §3. Showing the three normalized product
// tables collapsing into one flat dimension row makes the trade concrete: three joins become none.
// This is also the first sighting of the star dimension the rest of the spine is built on.
export const collapseHierarchy: Scene = {
  id: 'collapse-hierarchy',
  title: 'Denormalization — redundancy on purpose',
  nodes: [
    {
      id: 'normalized',
      label: 'Normalized — three tables',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'n-prod', label: 'product', sub: 'product_id, subcat_id', pattern: 'external', icon: 'table' },
        { id: 'n-sub', label: 'subcategory', sub: 'subcat_id, cat_id', pattern: 'external', icon: 'table' },
        { id: 'n-cat', label: 'category', sub: 'cat_id, name', pattern: 'external', icon: 'table' },
      ],
      edges: [
        { source: 'n-prod', target: 'n-sub' },
        { source: 'n-sub', target: 'n-cat' },
      ],
    },
    {
      id: 'flat',
      label: 'DimProduct — one flat row',
      sub: 'one join reaches every level',
      kind: 'table',
      pattern: 'storage',
      headers: ['product', 'subcategory', 'category'],
      values: [['Elite 8', 'Headsets', 'Audio']],
    },
    {
      id: 'trade',
      label: 'The trade',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 't-win', label: 'Fewer joins', sub: 'reads dominate a warehouse', pattern: 'service', icon: 'zap' },
        { id: 't-pay', label: 'More storage', sub: 'and values duplicated across rows', pattern: 'warn', icon: 'copy' },
      ],
    },
  ],
  edges: [
    { source: 'normalized', target: 'flat', label: 'collapse the hierarchy into the dimension' },
    { source: 'flat', target: 'trade', label: 'normalize for writes (OLTP) · denormalize for reads (OLAP) — and let a controlled ETL load pay the update cost' },
  ],
}

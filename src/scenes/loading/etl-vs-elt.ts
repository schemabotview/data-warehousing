import type { Scene } from '../../render-engine'

// §1 ETL vs ELT — the same three operations in two orders, so the board is the two orders stacked
// and the difference is visible as WHERE the transform box sits relative to the warehouse. The
// closing card is the consequence that matters: the order determines the architecture.
export const etlVsElt: Scene = {
  id: 'etl-vs-elt',
  title: 'Same three operations, two orders',
  nodes: [
    {
      id: 'etl',
      label: 'ETL — transform BEFORE you land',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'et-src', label: 'Sources', pattern: 'external', icon: 'database' },
        { id: 'et-t', label: 'Transform', sub: 'in an engine, off to the side', pattern: 'service', icon: 'gears' },
        { id: 'et-wh', label: 'Warehouse', sub: 'sees only finished data', pattern: 'storage', icon: 'warehouse' },
      ],
      edges: [
        { source: 'et-src', target: 'et-t', label: 'extract' },
        { source: 'et-t', target: 'et-wh', label: 'load' },
      ],
    },
    {
      id: 'elt',
      label: 'ELT — land first, transform IN PLACE',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'el-src', label: 'Sources', pattern: 'external', icon: 'database' },
        { id: 'el-wh', label: 'Warehouse', sub: 'raw lands first — audit + reprocessing', pattern: 'storage', icon: 'warehouse' },
        { id: 'el-t', label: 'Transform', sub: 'in-warehouse SQL', pattern: 'storage', icon: 'code' },
      ],
      edges: [
        { source: 'el-src', target: 'el-wh', label: 'extract, then load RAW' },
        { source: 'el-wh', target: 'el-t', label: 'transform in place' },
      ],
    },
    { id: 'why', label: 'ELT wins on cloud', sub: 'the work goes to the data', pattern: 'user', icon: 'cloud' },
  ],
  edges: [
    { source: 'etl', target: 'elt', label: 'ETL suits precious warehouse compute; ELT rides cheap elastic compute' },
    { source: 'elt', target: 'why', label: 'a different order is a different architecture — not a preference' },
  ],
}

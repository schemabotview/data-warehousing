import type { Scene } from '@graphlearning/flow'

// §6 warehouse vs lake — a four-axis comparison again, but deliberately NOT a table: §3 already
// spent the table on OLTP/OLAP, and the teaching point here is that the two stores sit at opposite
// ends of ONE axis (how processed the data is), with the choice hanging off whether you already know
// the question. Two columns facing each other, and the deciding question underneath.
export const warehouseVsLake: Scene = {
  id: 'warehouse-vs-lake',
  title: 'Warehouse vs data lake',
  nodes: [
    {
      id: 'wh',
      label: 'Warehouse — structured & processed',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'w-schema', label: 'Schema-on-write', sub: 'structure applied as you load', pattern: 'storage', icon: 'lock' },
        { id: 'w-proc', label: 'ETL', sub: 'transform, then load', pattern: 'storage', icon: 'funnel' },
        { id: 'w-users', label: 'Analysts & BI', sub: 'trusted, curated, costlier', pattern: 'storage', icon: 'barchart' },
      ],
    },
    {
      id: 'lake',
      label: 'Lake — raw & native',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'l-schema', label: 'Schema-on-read', sub: 'structure applied when you query', pattern: 'external', icon: 'waves' },
        { id: 'l-proc', label: 'ELT', sub: 'load, then transform later', pattern: 'external', icon: 'harddrive' },
        { id: 'l-users', label: 'Scientists & engineers', sub: 'cheap, raw, quality varies', pattern: 'external', icon: 'brain' },
      ],
    },
    { id: 'choose', label: 'Know the question?', sub: 'yes → warehouse · not yet → lake', pattern: 'user', icon: 'search' },
  ],
  edges: [
    { source: 'wh', target: 'lake', label: 'opposite ends of one axis: how processed the data is before it lands', bidirectional: true },
    { source: 'wh', target: 'choose' },
    { source: 'lake', target: 'choose', label: 'most organisations end up running both' },
  ],
}

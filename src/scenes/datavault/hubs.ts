import type { Scene } from '@graphlearning/flow'

// §3 hubs — the striking thing about a hub is what is NOT in it, so the table is drawn in full and
// it is four columns, none of them descriptive. The lower half is the job that shape enables: three
// sources naming the same customer collapse to ONE hub row, which is where integration happens.
export const hubs: Scene = {
  id: 'hubs',
  title: 'Hubs — identity, and nothing else',
  nodes: [
    {
      id: 'hub',
      label: 'HubCustomer',
      sub: 'one row per distinct business key · not one descriptive attribute in sight',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'customer_hk', type: 'hash', key: 'PK' },
        { name: 'customer_id', type: 'varchar' },
        { name: 'load_date', type: 'timestamp' },
        { name: 'record_source', type: 'varchar' },
      ],
    },
    {
      id: 'sources',
      label: 'Where hubs integrate the sources',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sr-web', label: 'web', sub: 'customer_id C-4471', pattern: 'external', icon: 'globe' },
        { id: 'sr-pos', label: 'POS', sub: 'customer_id C-4471', pattern: 'external', icon: 'receipt' },
        { id: 'sr-erp', label: 'ERP', sub: 'customer_id C-4471', pattern: 'external', icon: 'building' },
      ],
    },
    { id: 'one', label: 'ONE hub row', sub: 'the point where sources become one entity', pattern: 'storage', icon: 'merge' },
    { id: 'spine', label: 'A stable spine', sub: 'business keys rarely change', pattern: 'user', icon: 'lock' },
  ],
  edges: [
    { source: 'hub', target: 'sources' },
    { source: 'sources', target: 'one', label: 'same business key → same row, and record_source keeps the lineage of where it came from' },
    { source: 'one', target: 'spine', label: 'so every link and every satellite hangs off an anchor that does not move' },
  ],
}

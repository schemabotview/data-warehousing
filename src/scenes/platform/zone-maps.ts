import type { Scene } from '../../render-engine'

// §7 zone maps — the mechanism is min/max metadata per block, and it only pays if related values sit
// TOGETHER, which is the entire reason clustering exists. Drawing three blocks with their ranges and
// two of them skipped makes both halves land in one look.
export const zoneMaps: Scene = {
  id: 'zone-maps',
  title: 'Skip the blocks that cannot match',
  nodes: [
    {
      id: 'blocks',
      label: "WHERE order_date = '2026-04-12'",
      sub: 'every column block stores its own min and max — that is the zone map',
      kind: 'table',
      pattern: 'storage',
      headers: ['block', 'min', 'max', 'verdict'],
      values: [
        ['A', '2020', '2021', 'skip — cannot match'],
        ['B', '2026', '2026', 'READ'],
        ['C', '2027', '2027', 'skip — cannot match'],
      ],
    },
    {
      id: 'cluster',
      label: 'But it only works if related values sit together',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cl-scattered', label: 'Scattered dates', sub: 'every block spans 2020-2027', pattern: 'warn', icon: 'circleslash' },
        { id: 'cl-clustered', label: 'Clustered on date', sub: 'April 2026 sits in a few blocks', pattern: 'storage', icon: 'circlecheck' },
      ],
    },
    {
      id: 'names',
      label: 'The same idea, four names',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'nm-micro', label: 'Micro-partitions', sub: 'Snowflake', pattern: 'external', icon: 'boxes' },
        { id: 'nm-zone', label: 'Zone maps', sub: 'Redshift', pattern: 'external', icon: 'table' },
        { id: 'nm-sort', label: 'SORTKEY', sub: 'ordering, explicitly', pattern: 'external', icon: 'sortarrows' },
        { id: 'nm-cluster', label: 'CLUSTER BY', sub: 'BigQuery, and auto-clustering', pattern: 'external', icon: 'layers' },
      ],
    },
    { id: 'swap', label: 'The mental swap', sub: 'cluster well, let pruning work', pattern: 'user', icon: 'wrench' },
  ],
  edges: [
    { source: 'blocks', target: 'cluster', label: 'a zone map is free; a USEFUL zone map has to be earned by physically ordering the data' },
    { source: 'cluster', target: 'names' },
    { source: 'names', target: 'swap' },
  ],
}

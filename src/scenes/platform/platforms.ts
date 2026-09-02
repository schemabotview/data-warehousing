import type { Scene } from '../../render-engine'

// §4 the platforms — four products is a table, not four cards, and the useful reading is DOWN the
// last column: they differ mainly in how much tuning they expect from you. That axis is what the
// closing band names, because it is the thing that survives when the product details date.
export const platforms: Scene = {
  id: 'platforms',
  title: 'Four platforms, one axis',
  nodes: [
    {
      id: 'table',
      label: 'All MPP, all columnar — all run a star beautifully',
      kind: 'table',
      pattern: 'service',
      headers: ['Platform', 'Its shape', 'Tuning'],
      values: [
        ['Snowflake', 'multi-cloud, virtual warehouses', 'automatic — micro-partitions'],
        ['BigQuery', 'serverless, billed per byte scanned', 'automatic — partition + cluster'],
        ['Redshift', 'AWS, RA3 splits compute and storage', 'manual — DISTKEY and SORTKEY'],
        ['Synapse / Fabric', 'Azure', 'manual — explicit distribution'],
      ],
    },
    {
      id: 'axis',
      label: 'The axis that actually separates them',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ax-auto', label: 'Automatic', sub: 'Snowflake · BigQuery', pattern: 'storage', icon: 'zap' },
        { id: 'ax-manual', label: 'Explicit keys', sub: 'Redshift · Synapse', pattern: 'user', icon: 'wrench' },
      ],
    },
    {
      id: 'choose',
      label: 'So choose on',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ch-cloud', label: 'Your cloud', pattern: 'external', icon: 'cloud' },
        { id: 'ch-appetite', label: 'Tuning appetite', sub: 'how much control you want', pattern: 'external', icon: 'wrench' },
        { id: 'ch-price', label: 'Pricing model', sub: 'per second, or per byte scanned', pattern: 'external', icon: 'receipt' },
      ],
    },
  ],
  edges: [
    { source: 'table', target: 'axis', label: 'columnar + MPP + cloud is now the common thread — the star schema fits all four' },
    { source: 'axis', target: 'choose' },
  ],
}

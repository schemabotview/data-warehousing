import type { Scene } from '@graphlearning/flow'

// §5 distribution vs partitioning — two different questions that beginners fuse: WHICH NODE, and
// WHICH SEGMENT. So the board answers them separately and gives each its payoff — a co-located join
// with no shuffle, and pruning. Both payoffs are cashed again in §9.
export const distribution: Scene = {
  id: 'distribution',
  title: 'Which node? Which segment?',
  nodes: [
    {
      id: 'dist',
      label: 'Distribution key — WHICH NODE a row lands on',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ds-even', label: 'Spread evenly', sub: 'high cardinality, no skew', pattern: 'storage', icon: 'scale' },
        { id: 'ds-colocate', label: 'Co-locate the join', sub: 'fact + big dim on the same key', pattern: 'storage', icon: 'link' },
        { id: 'ds-broadcast', label: 'Broadcast small dims', sub: 'a copy on every node', pattern: 'storage', icon: 'copy' },
      ],
    },
    {
      id: 'part',
      label: 'Partition key — WHICH SEGMENT it is stored in',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'pt-split', label: 'Split by a column', sub: 'usually the date', pattern: 'service', icon: 'calendar' },
        { id: 'pt-prune', label: 'Filter → prune', sub: '"2026" reads one year, not ten', pattern: 'service', icon: 'funnel' },
      ],
    },
    { id: 'shuffle', label: 'The prize: no shuffle', sub: 'the join happens on each node', pattern: 'user', icon: 'zap' },
  ],
  edges: [
    { source: 'dist', target: 'part', label: 'two different questions — beginners fuse them' },
    { source: 'part', target: 'shuffle', label: 'FACT_SALES and DIM_PRODUCT distributed on product_key join locally — nothing crosses the network' },
  ],
}

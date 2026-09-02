import type { Scene } from '../../render-engine'

// §9 star-join optimisation — the payoff board for the whole course: the engine filters the huge
// fact BY the tiny dimension instead of the other way round. The three numbered steps are the
// mechanism (scan the small side, build a bloom filter, push it down), and they are worth showing in
// order because the surprise is that the small table is scanned FIRST.
export const starJoinOpt: Scene = {
  id: 'star-join-opt',
  title: 'Filter the fact BY the dimension',
  nodes: [
    {
      id: 'steps',
      label: "WHERE product_line = 'Headsets'",
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sj-1', label: '1 · Scan the small side', sub: 'DIM_PRODUCT → matching keys', pattern: 'service', icon: 'search' },
        { id: 'sj-2', label: '2 · Build a filter', sub: 'a bloom filter of those keys', pattern: 'service', icon: 'funnel' },
        { id: 'sj-3', label: '3 · Push it down', sub: 'read only fact rows in the set', pattern: 'storage', icon: 'zap' },
      ],
    },
    {
      id: 'prune',
      label: 'And partition pruning has already shrunk the fact',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'pr-part', label: 'Partitions', sub: 'WHERE year = 2026 skips nine years', pattern: 'storage', icon: 'calendar' },
        { id: 'pr-zone', label: 'Zone maps', sub: 'and skip blocks within the year', pattern: 'storage', icon: 'table' },
      ],
    },
    {
      id: 'joins',
      label: 'Then the join itself avoids the network',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'jn-broadcast', label: 'Broadcast', sub: 'small dims copied to every node', pattern: 'user', icon: 'copy' },
        { id: 'jn-colocate', label: 'Co-located', sub: 'a shared dist key means no shuffle', pattern: 'user', icon: 'link' },
      ],
    },
    { id: 'result', label: 'Never the whole fact', sub: 'only rows that can match', pattern: 'service', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'steps', target: 'prune', label: 'the surprise is the order: the tiny dimension is scanned FIRST, and its keys become a filter on the huge one' },
    { source: 'prune', target: 'joins' },
    { source: 'joins', target: 'result', label: 'a tenth of a ten-year table, and within that only the rows whose key is in the filter' },
  ],
}

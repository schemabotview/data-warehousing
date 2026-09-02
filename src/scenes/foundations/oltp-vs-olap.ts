import type { Scene } from '../../render-engine'

// §3 the two workloads — this section's claim IS a comparison across four axes, and a comparison is
// what a table renders better than any arrangement of cards. So the board is one real table node
// (data mode), with the two workloads named above it so the columns have owners.
export const oltpVsOlap: Scene = {
  id: 'oltp-vs-olap',
  title: 'OLTP vs OLAP',
  nodes: [
    {
      id: 'jobs',
      label: 'Two different jobs',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'j-oltp', label: 'OLTP', sub: 'RUNS the business', pattern: 'service', icon: 'receipt' },
        { id: 'j-olap', label: 'OLAP', sub: 'ANALYSES the business', pattern: 'user', icon: 'barchart' },
      ],
    },
    {
      id: 'compare',
      label: 'Opposite on every axis',
      kind: 'table',
      sub: 'which is why they need separate machines',
      pattern: 'external',
      headers: ['Aspect', 'OLTP', 'OLAP'],
      values: [
        ['Operations', 'single-record writes', 'large aggregate reads'],
        ['Data', 'current & detailed', 'historical & summarised'],
        ['Schema', 'normalised 3NF', 'denormalised star'],
        ['Users', 'many clerks / apps', 'few analysts'],
      ],
    },
  ],
  edges: [{ source: 'jobs', target: 'compare', label: 'each wants the opposite physical design' }],
}

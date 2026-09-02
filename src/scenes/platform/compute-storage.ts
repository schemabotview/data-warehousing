import type { Scene } from '../../render-engine'

// §3 separation — the before/after is structural: in the coupled design a resize MOVES DATA, and in
// the decoupled one it does not. Everything else on the board (concurrent clusters, separate
// billing, instant resize) falls out of that single change, so the edges say so.
export const computeStorage: Scene = {
  id: 'compute-storage',
  title: 'Compute and storage, pulled apart',
  nodes: [
    {
      id: 'coupled',
      label: 'Coupled — each node holds compute AND data',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cp-both', label: 'Both on one node', sub: 'storage tied to the cluster', pattern: 'warn', icon: 'server' },
        { id: 'cp-resize', label: 'Resizing moves data', sub: 'redistribute before you can grow', pattern: 'warn', icon: 'clock' },
      ],
    },
    {
      id: 'decoupled',
      label: 'Decoupled — data lives once, compute is ephemeral',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'dc-etl', label: 'ETL cluster', sub: 'stateless, on demand', pattern: 'service', icon: 'gears' },
        { id: 'dc-bi', label: 'BI cluster', sub: 'its own compute, no contention', pattern: 'service', icon: 'barchart' },
        { id: 'dc-store', label: 'Object storage', sub: 'S3 · GCS · Blob — cheap and durable', pattern: 'storage', icon: 'harddrive' },
      ],
    },
    {
      id: 'buys',
      label: 'What that one change buys',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'by-scale', label: 'Scale each alone', sub: 'compute or storage, not both', pattern: 'user', icon: 'scale' },
        { id: 'by-conc', label: 'Concurrent clusters', sub: 'over ONE copy of the data', pattern: 'user', icon: 'copy' },
        { id: 'by-pay', label: 'Pay separately', sub: 'storage always, compute while running', pattern: 'user', icon: 'receipt' },
        { id: 'by-resize', label: 'Instant resize', sub: 'nothing has to move', pattern: 'user', icon: 'zap' },
      ],
    },
    { id: 'platforms', label: 'In the platforms', sub: "Snowflake's virtual warehouses · BigQuery serverless, with no cluster at all", pattern: 'external', icon: 'cloud' },
  ],
  edges: [
    { source: 'coupled', target: 'decoupled', label: 'the data stops belonging to the cluster' },
    { source: 'decoupled', target: 'buys' },
    { source: 'buys', target: 'platforms' },
  ],
}

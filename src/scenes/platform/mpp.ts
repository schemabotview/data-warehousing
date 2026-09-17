import type { Scene } from '@graphlearning/flow'

// §2 MPP — the arithmetic IS the explanation, so the board carries it: a billion rows across a
// hundred nodes is ten million each. The last band is the honest limit — this design is superb for
// scan-and-aggregate and wrong for single-row OLTP, which is module 01's split, now physical.
export const mpp: Scene = {
  id: 'mpp',
  title: 'Shared-nothing parallelism',
  nodes: [
    {
      id: 'nodes',
      label: 'Each node owns a SLICE, and its own CPU, memory and disk',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'nd-1', label: 'Node 1', sub: 'a slice of FACT_SALES', pattern: 'storage', icon: 'server' },
        { id: 'nd-2', label: 'Node 2', sub: 'a slice of FACT_SALES', pattern: 'storage', icon: 'server' },
        { id: 'nd-3', label: 'Node 3', sub: 'a slice of FACT_SALES', pattern: 'storage', icon: 'server' },
      ],
    },
    {
      id: 'run',
      label: 'How one query runs',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rn-lead', label: 'The leader plans', sub: 'and splits it into fragments', pattern: 'service', icon: 'brain' },
        { id: 'rn-scan', label: 'Every node scans', sub: 'only its own slice', pattern: 'service', icon: 'search' },
        { id: 'rn-comb', label: 'Results combine', sub: 'into one answer', pattern: 'service', icon: 'merge' },
      ],
    },
    { id: 'maths', label: 'Ten million each', sub: 'a billion rows, a hundred nodes', pattern: 'user', icon: 'sigma' },
    {
      id: 'fit',
      label: 'Which is why it fits analytics and not OLTP',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ft-good', label: 'Scan & aggregate', sub: 'huge sets — parallelism wins', pattern: 'storage', icon: 'circlecheck' },
        { id: 'ft-bad', label: 'One row by id', sub: 'the coordination costs more', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [
    { source: 'nodes', target: 'run', label: 'no shared bottleneck, so adding nodes adds capacity almost linearly' },
    { source: 'run', target: 'maths', label: 'roughly a hundredfold speedup' },
    { source: 'maths', target: 'fit', label: 'scale OUT by adding nodes, rather than UP to a bigger box' },
  ],
}

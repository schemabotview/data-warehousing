import type { Scene } from '../../render-engine'

// §6 columnar — the layout has to be SEEN, so both are drawn as real rows. Everything else follows
// visually: if a column is contiguous you can read one and skip twenty, and values of one type
// compress hard. The closing card is the mental swap this whole course is teaching.
export const columnar: Scene = {
  id: 'columnar',
  title: 'Row layout vs column layout',
  nodes: [
    {
      id: 'row',
      label: 'Row layout — whole rows together',
      sub: 'perfect for "fetch order 4471" — the OLTP question',
      kind: 'table',
      pattern: 'external',
      headers: ['stored as'],
      values: [['[1, Ana, Madrid, 600]  [2, Leo, Sevilla, 300]  …']],
    },
    {
      id: 'col',
      label: 'Column layout — each column together',
      sub: 'perfect for "sum line_total over ten years" — the OLAP question',
      kind: 'table',
      pattern: 'storage',
      headers: ['stored as'],
      values: [['[1, 2, …]  [Ana, Leo, …]  [Madrid, Sevilla, …]  [600, 300, …]']],
    },
    {
      id: 'why',
      label: 'What that buys',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wy-skip', label: 'Read 1, skip 20', sub: 'which is why SELECT * is a sin', pattern: 'service', icon: 'funnel' },
        { id: 'wy-comp', label: 'Compresses hard', sub: 'one type, low variety', pattern: 'service', icon: 'boxes' },
        { id: 'wy-vector', label: 'Vectorised', sub: 'whole blocks processed at once', pattern: 'service', icon: 'zap' },
      ],
    },
    { id: 'swap', label: 'It replaces the index', sub: 'store columnar, cluster well', pattern: 'user', icon: 'wrench' },
  ],
  edges: [
    { source: 'row', target: 'col' },
    { source: 'col', target: 'why' },
    { source: 'why', target: 'swap', label: 'reading one compressed column across many nodes is already cheap, and data skipping does the index\'s old job' },
  ],
}

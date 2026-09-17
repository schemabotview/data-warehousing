import type { Scene } from '@graphlearning/flow'

// §10 the finale of the whole concept. The before/after is one code card because the two queries
// must be read against each other — same result, and the only differences are naming the columns and
// leaving the filter column bare. The last band recaps the ten-module arc, which is how the
// narration itself ends.
export const beforeAfter: Scene = {
  id: 'before-after',
  title: 'Same answer, a fraction of the scan',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'the same question, twice',
      label: [
        '-- slow: every column, and a function that blocks pruning → full scan',
        'SELECT * FROM fact_sales',
        'WHERE  YEAR(order_date) = 2026;',
        '',
        '-- fast: two columns, and a plain range that prunes to 2026',
        'SELECT product_key, line_total FROM fact_sales',
        "WHERE  order_date BETWEEN '2026-01-01' AND '2026-12-31';",
      ].join('\n'),
    },
    {
      id: 'habits',
      label: 'Four habits that let the machinery work',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'hb-cols', label: 'Name the columns', sub: 'columnar storage bills per column', pattern: 'service', icon: 'table' },
        { id: 'hb-keys', label: 'Filter on the keys', sub: 'partition and cluster columns', pattern: 'service', icon: 'funnel' },
        { id: 'hb-bare', label: 'Leave the column bare', sub: 'a function on it defeats pruning', pattern: 'warn', icon: 'ban' },
        { id: 'hb-early', label: 'Filter early', sub: 'aggregate late · UNION ALL when you can', pattern: 'service', icon: 'zap' },
      ],
    },
    {
      id: 'arc',
      label: 'And that is the whole arc',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'ar-model', label: 'Model', sub: 'a clean star — modules 3 to 8', pattern: 'user', icon: 'star' },
        { id: 'ar-load', label: 'Load', sub: 'reliably — module 9', pattern: 'user', icon: 'funnel' },
        { id: 'ar-run', label: 'Run', sub: 'on cloud MPP — module 10', pattern: 'user', icon: 'cloud' },
        { id: 'ar-query', label: 'Query', sub: 'so all of it can do its job', pattern: 'user', icon: 'code' },
      ],
    },
  ],
  edges: [
    { source: 'sql', target: 'habits', label: 'identical results — one reads the whole table, the other reads a fraction of one year' },
    { source: 'habits', target: 'arc', label: 'faster AND cheaper, because on this platform those are the same thing' },
  ],
}

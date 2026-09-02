import type { Scene } from '../../render-engine'

// §9 aggregates — a derived COPY, and the danger is exactly that word. So the board runs atomic →
// rolled-up and then lands on the duty: the copy is only ever as true as its last refresh, and the
// atomic table stays the source of truth. Drawing both tables makes the grain difference visible.
export const aggregateFact: Scene = {
  id: 'aggregate-fact',
  title: 'Pre-computed roll-ups',
  nodes: [
    {
      id: 'atomic',
      label: 'FACT_SALES — atomic',
      sub: 'hundreds of millions of rows',
      kind: 'table',
      pattern: 'storage',
      headers: ['date_key', 'product_key', 'line_total'],
      values: [
        ['20260112', '204', '1,200'],
        ['20260112', '207', '300'],
        ['20260113', '204', '900'],
      ],
    },
    {
      id: 'agg',
      label: 'AGG_SALES_MONTHLY',
      sub: 'thousands of rows — the same additive measure, summed up a level',
      kind: 'table',
      pattern: 'service',
      headers: ['month', 'product_line', 'total_sales'],
      values: [
        ['2026-01', 'Headsets', '345,000'],
        ['2026-01', 'Earbuds', '210,000'],
      ],
    },
    {
      id: 'terms',
      label: 'What you gain and what you owe',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'tg-fast', label: 'Often 100x faster', sub: 'and far cheaper to scan', pattern: 'service', icon: 'zap' },
        { id: 'tg-stale', label: 'A derived copy', sub: 'stale means wrong', pattern: 'warn', icon: 'repeat' },
        { id: 'tg-grain', label: 'Answers at its grain', sub: 'only — go atomic for the rest', pattern: 'warn', icon: 'ruler' },
      ],
    },
  ],
  edges: [
    { source: 'atomic', target: 'agg', label: 'built by ETL at a coarser grain' },
    { source: 'agg', target: 'terms', label: 'the atomic fact stays the source of truth; the aggregate is a cache with a maintenance duty' },
  ],
}

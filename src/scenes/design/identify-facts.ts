import type { Scene } from '@graphlearning/flow'

// §5 step four — two tests, and the second is the one people skip: a shipping charge is numeric and
// aggregatable and STILL wrong here, because it lives at the order header and would double-count
// across the lines. Drawing that specific failure is worth more than restating "true at the grain".
export const identifyFacts: Scene = {
  id: 'identify-facts',
  title: 'Step 4 — identify the facts',
  nodes: [
    {
      id: 'candidates',
      label: 'Every candidate faces two tests',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cd-num', label: 'Would you SUM it?', sub: 'numeric AND aggregated', pattern: 'service', icon: 'sigma' },
        { id: 'cd-grain', label: 'True at THIS grain?', sub: 'per order line, not per order', pattern: 'service', icon: 'ruler' },
      ],
    },
    {
      id: 'verdicts',
      label: 'The bill, judged',
      kind: 'table',
      pattern: 'storage',
      headers: ['Candidate', 'Verdict', 'Why'],
      values: [
        ['quantity', 'a measure', 'additive across everything'],
        ['line_total', 'a measure', 'additive — the workhorse'],
        ['unit_price', 'NOT a measure', 'a rate — average it after aggregating'],
        ['shipping charge', 'NOT a measure', 'order-level — it double-counts across lines'],
        ['order_id', 'degenerate dim', 'an id with no table of its own'],
      ],
    },
    { id: 'columns', label: "The fact's columns", sub: 'FKs from step 3 + measures from step 4 + the degenerate dims', pattern: 'storage', icon: 'table' },
  ],
  edges: [
    { source: 'candidates', target: 'verdicts' },
    { source: 'verdicts', target: 'columns' },
  ],
}

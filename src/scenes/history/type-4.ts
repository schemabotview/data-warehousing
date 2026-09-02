import type { Scene } from '../../render-engine'

// §7 Type 4 — two genuinely different techniques share one number, so the board is split in two and
// labelled A and B. The mini-dimension is the subtle one: the fact gains a SECOND key, and a change
// moves that key instead of creating a customer row. Drawing both fact FKs is what makes that clear.
export const type4: Scene = {
  id: 'type-4',
  title: 'Type 4 — move the changing part out',
  nodes: [
    {
      id: 'a',
      label: 'A · history table',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'a-cur', label: 'DIM_CUSTOMER', sub: 'the current row only — small and hot', pattern: 'storage', icon: 'users' },
        { id: 'a-hist', label: 'The history dim', sub: 'DIM_CUSTOMER_ HISTORY — every version', pattern: 'external', icon: 'history' },
      ],
      edges: [{ source: 'a-cur', target: 'a-hist', label: "Type 2's history, split off the hot record" }],
    },
    {
      id: 'b',
      label: 'B · mini-dimension',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'b-fact', label: 'FACT_SALES', sub: 'now carries TWO dimension keys', pattern: 'storage', icon: 'sigma' },
        { id: 'b-cust', label: 'DIM_CUSTOMER', sub: 'the stable attributes', pattern: 'service', icon: 'users' },
        { id: 'b-demo', label: 'The mini-dim', sub: 'DIM_DEMOGRAPHICS — volatile bands', pattern: 'user', icon: 'gauge' },
      ],
      edges: [
        { source: 'b-fact', target: 'b-cust', label: 'customer_key' },
        { source: 'b-fact', target: 'b-demo', label: 'demographics_key' },
      ],
    },
    {
      id: 'when',
      label: 'Which to reach for',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'wn-hist', label: 'History table', sub: 'a lean current dim, history aside', pattern: 'service', icon: 'layers' },
        { id: 'wn-mini', label: 'Mini-dimension', sub: 'a subset changes too fast for Type 2', pattern: 'service', icon: 'zap' },
      ],
    },
  ],
  edges: [
    { source: 'a', target: 'b' },
    { source: 'b', target: 'when', label: 'a change points the fact at a NEW demographics_key — and creates no new customer row at all' },
  ],
}

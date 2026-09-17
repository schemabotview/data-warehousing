import type { Scene } from '@graphlearning/flow'

// §1 the star — this board is deliberately the SHAPE and nothing else: one fact, a ring of
// dimensions, every one exactly one hop away. §2 dissects the parts and §7 shows the real columns,
// so anything more here would just be those boards drawn early and worse.
export const starShape: Scene = {
  id: 'star-shape',
  title: 'The star schema',
  nodes: [
    { id: 'fact', label: 'FACT_SALES', sub: 'the measures live here', pattern: 'storage', icon: 'sigma' },
    { id: 'd-date', label: 'DIM_DATE', pattern: 'service', icon: 'calendar', variant: 'tile' },
    { id: 'd-cust', label: 'DIM_CUSTOMER', pattern: 'service', icon: 'users', variant: 'tile' },
    { id: 'd-prod', label: 'DIM_PRODUCT', pattern: 'service', icon: 'package', variant: 'tile' },
    { id: 'd-chan', label: 'DIM_CHANNEL', pattern: 'service', icon: 'workflow', variant: 'tile' },
    { id: 'd-promo', label: 'DIM_PROMOTION', pattern: 'service', icon: 'tag', variant: 'tile' },
    {
      id: 'why',
      label: 'What the shape buys',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wh-fast', label: 'Fast', sub: 'one join away — never a chain', pattern: 'user', icon: 'zap' },
        { id: 'wh-simple', label: 'Simple', sub: 'BI tools generate the SQL', pattern: 'user', icon: 'circlecheck' },
        { id: 'wh-uniform', label: 'Uniform', sub: 'every query has the same shape', pattern: 'user', icon: 'repeat' },
      ],
    },
  ],
  edges: [
    { source: 'fact', target: 'd-date' },
    { source: 'fact', target: 'd-cust' },
    { source: 'fact', target: 'd-prod' },
    { source: 'fact', target: 'd-chan' },
    { source: 'fact', target: 'd-promo' },
    { source: 'd-promo', target: 'why', label: 'the trade it accepts: flat dimensions repeat data — safe here, because ETL controls the writes' },
  ],
}

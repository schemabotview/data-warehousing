import type { Scene } from '../../render-engine'

// §3 why flat wins — the argument is a COUNT of hops, so both versions of "sales by region" are
// drawn: four chained tables against one flat one. The safety argument closes it, because the
// obvious objection (redundancy causes anomalies — module 02 said so) needs an answer, and the
// answer is that ETL owns the writes.
export const flatWins: Scene = {
  id: 'flat-wins',
  title: '"Sales by region" — four hops, or one',
  nodes: [
    {
      id: 'chain',
      label: 'Normalized — four hops to a region',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'ch-cust', label: 'customer', pattern: 'external', icon: 'users' },
        { id: 'ch-city', label: 'city', pattern: 'external', icon: 'building' },
        { id: 'ch-prov', label: 'province', pattern: 'external', icon: 'globe' },
        { id: 'ch-region', label: 'region', pattern: 'external', icon: 'globe' },
      ],
      edges: [
        { source: 'ch-cust', target: 'ch-city' },
        { source: 'ch-city', target: 'ch-prov' },
        { source: 'ch-prov', target: 'ch-region' },
      ],
    },
    {
      id: 'flat',
      label: 'DIM_CUSTOMER — flat',
      sub: 'the same four levels, as columns on one row',
      kind: 'table',
      pattern: 'storage',
      headers: ['name', 'city', 'province', 'region', 'country'],
      values: [['Ana Ruiz', 'Madrid', 'Madrid', 'Centre', 'Spain']],
    },
    {
      id: 'wins',
      label: 'The four wins',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'wn-fast', label: 'Faster', sub: 'join cost dominates', pattern: 'service', icon: 'zap' },
        { id: 'wn-sql', label: 'Simpler SQL', sub: 'one join, not four', pattern: 'service', icon: 'code' },
        { id: 'wn-browse', label: 'One place', sub: 'browse and filter it all', pattern: 'service', icon: 'search' },
        { id: 'wn-doc', label: 'Self-documenting', sub: 'the table IS the slice list', pattern: 'service', icon: 'scroll' },
      ],
    },
    { id: 'safe', label: 'Why it is safe', sub: 'load-once, read-many — ETL owns every write', pattern: 'user', icon: 'shieldcheck' },
  ],
  edges: [
    { source: 'chain', target: 'flat', label: 'collapse the chain into columns' },
    { source: 'flat', target: 'wins' },
    { source: 'wins', target: 'safe', label: 'module 02 normalized to protect writes; there are no ad-hoc writes here, so the anomalies never arrive' },
  ],
}

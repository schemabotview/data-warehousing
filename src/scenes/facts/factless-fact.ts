import type { Scene } from '@graphlearning/flow'

// §10 factless facts — a fact table with no measures sounds like a contradiction, so the scene shows
// the two genuinely different jobs it does. The second one is the interesting one: coverage records
// what was POSSIBLE, and the promoted-but-never-sold question can only be answered by joining the
// two tables and looking for what is missing.
export const factlessFact: Scene = {
  id: 'factless-fact',
  title: 'All keys, no measures',
  nodes: [
    {
      id: 'events',
      label: 'Event tracking — what happened',
      sub: 'the row\'s EXISTENCE is the fact',
      kind: 'table',
      pattern: 'storage',
      headers: ['student_key', 'class_key', 'date_key'],
      values: [
        ['S27', 'C4', '01-Feb'],
        ['S31', 'C4', '01-Feb'],
      ],
    },
    {
      id: 'coverage',
      label: 'Coverage — what was POSSIBLE',
      sub: 'which products were on promotion, sold or not',
      kind: 'table',
      pattern: 'service',
      headers: ['product_key', 'promotion_key', 'date_key'],
      values: [
        ['204', 'DIWALI', '01-Nov'],
        ['209', 'DIWALI', '01-Nov'],
      ],
    },
    {
      id: 'uses',
      label: 'Where it earns its place',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'u-count', label: 'Counting events', sub: 'the metric is COUNT(*)', pattern: 'user', icon: 'hash' },
        { id: 'u-absence', label: 'Analysing absence', sub: 'promoted but never sold', pattern: 'user', icon: 'search' },
        { id: 'u-audit', label: 'Audit', sub: 'and compliance evidence', pattern: 'user', icon: 'scroll' },
      ],
    },
  ],
  edges: [
    { source: 'events', target: 'coverage', label: 'one records what occurred; the other records what could have' },
    { source: 'coverage', target: 'uses', label: 'join coverage against FACT_SALES and the gap IS the answer' },
  ],
}

import type { Scene } from '@graphlearning/flow'

// §1 the problem — the whole course exists because ONE question has two correct answers. So the
// board poses it as a fork with both branches labelled right, which is the honest picture: this is a
// modeling decision made up front, not a bug with a fix.
export const theDriftQuestion: Scene = {
  id: 'the-drift-question',
  title: 'Ana bought in Madrid. She lives in Barcelona.',
  nodes: [
    {
      id: 'setup',
      label: 'Facts are frozen; dimensions drift',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'su-fact', label: 'The sale', sub: 'happened once, never changes', pattern: 'storage', icon: 'lock' },
        { id: 'su-dim', label: 'The customer', sub: 'moved city, changed segment', pattern: 'warn', icon: 'history' },
      ],
    },
    {
      id: 'fork',
      label: '"Sales by region" — credit that sale to…',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'fk-now', label: 'Barcelona', sub: 'the world AS IT IS', pattern: 'user', icon: 'circlecheck' },
        { id: 'fk-then', label: 'Madrid', sub: 'the world AS IT WAS', pattern: 'user', icon: 'circlecheck' },
      ],
    },
    {
      id: 'framework',
      label: 'SCD — types differ by how much history you keep',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fw-none', label: 'Keep none', sub: 'type 1 — overwrite', pattern: 'service', icon: 'swap' },
        { id: 'fw-all', label: 'Keep all', sub: 'type 2 — a row per version', pattern: 'service', icon: 'history' },
        { id: 'fw-some', label: 'Keep some', sub: 'types 0, 3, 4, 6', pattern: 'service', icon: 'layers' },
      ],
    },
  ],
  edges: [
    { source: 'setup', target: 'fork' },
    { source: 'fork', target: 'framework', label: 'BOTH answers are correct — which is why this is a decision you make up front, and it all rides on the surrogate key: one customer_id, many customer_keys' },
  ],
}

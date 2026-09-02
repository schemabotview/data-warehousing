import type { Scene } from '../../render-engine'

// §9 natural vs surrogate — one incident decides it: Anita changes her email. Both outcomes are
// drawn as real rows, because "one customer" vs "two customers" is a fact about the data, not an
// opinion about key design. This is the moment the whole star schema's key choice is made.
export const anitaTwoRows: Scene = {
  id: 'anita-two-rows',
  title: 'Anita changes her email',
  nodes: [
    {
      id: 'natural',
      label: 'Natural key only',
      sub: 'the key IS the email — so it changed',
      kind: 'table',
      pattern: 'warn',
      headers: ['key = email', 'reads as'],
      values: [
        ['anita@old.com', 'customer #1'],
        ['anita@new.com', 'customer #2'],
      ],
    },
    {
      id: 'surrogate',
      label: 'Surrogate key',
      sub: 'the key is meaningless — so nothing changed',
      kind: 'table',
      pattern: 'storage',
      headers: ['cust_wid', 'email', 'reads as'],
      values: [
        ['1001', 'anita@old.com', 'customer 1001'],
        ['1001', 'anita@new.com', 'customer 1001'],
      ],
    },
    {
      id: 'why',
      label: 'What the stable key buys',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'y-link', label: 'Orders stay linked', sub: 'no rewiring when a value changes', pattern: 'service', icon: 'link' },
        { id: 'y-scd', label: 'History is possible', sub: 'several rows for one real person', pattern: 'service', icon: 'history' },
        { id: 'y-join', label: 'Small int joins', sub: 'and clean multi-source merging', pattern: 'service', icon: 'zap' },
      ],
    },
  ],
  edges: [
    { source: 'natural', target: 'surrogate', label: 'a natural key has meaning, so it can change — a surrogate has none, so it never does' },
    { source: 'surrogate', target: 'why', label: 'dimension PK = surrogate, and the natural key is kept as a plain attribute' },
  ],
}

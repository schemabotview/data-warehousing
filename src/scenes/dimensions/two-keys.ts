import type { Scene } from '../../render-engine'

// §3 surrogate keys in dimensions — the payoff is history, so the board ends on Ana moving city:
// two rows, one customer_id, two customer_keys. Drawing the two rows is what makes "the fact points
// at the version current at sale time" a fact about the data rather than a promise about module 06.
export const twoKeys: Scene = {
  id: 'two-keys',
  title: 'Two keys on every dimension',
  nodes: [
    {
      id: 'dim',
      label: 'DIM_CUSTOMER',
      sub: 'the surrogate the fact joins on, beside the natural key from the source',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'customer_key', type: 'int', key: 'PK' },
        { name: 'customer_id', type: 'varchar' },
        { name: 'name', type: 'varchar' },
        { name: 'city', type: 'varchar' },
      ],
    },
    {
      id: 'why',
      label: 'What the surrogate buys',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'w-decouple', label: 'Decoupled', sub: 'source renumbering cannot reach you', pattern: 'service', icon: 'lock' },
        { id: 'w-fast', label: 'Narrow joins', sub: 'a 4-byte integer', pattern: 'service', icon: 'zap' },
        { id: 'w-unknown', label: 'Key 0 = Unknown', sub: 'so a FK is never NULL', pattern: 'service', icon: 'circleslash' },
      ],
    },
    {
      id: 'history',
      label: 'The crucial one — Ana moves to Barcelona',
      sub: 'same customer_id, a NEW customer_key — so both versions can exist at once',
      kind: 'table',
      pattern: 'user',
      headers: ['customer_key', 'customer_id', 'city'],
      values: [
        ['1101', 'C-4471', 'Madrid'],
        ['1188', 'C-4471', 'Barcelona'],
      ],
    },
  ],
  edges: [
    { source: 'dim', target: 'why' },
    { source: 'why', target: 'history', label: 'each fact row keeps pointing at the version that was current when the sale happened — a slowly changing dimension, in full in module 06' },
  ],
}

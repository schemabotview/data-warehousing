import type { Scene } from '@graphlearning/flow'

// §7 the surrogate-key lookup — module 08 named this step in passing; here it is the whole board.
// The two halves are generation (the dimension mints) and lookup (the fact resolves), and the third
// band is the part that actually breaks in production: what to do when the lookup MISSES.
export const keyLookup: Scene = {
  id: 'key-lookup',
  title: 'The surrogate-key lookup',
  nodes: [
    {
      id: 'generate',
      label: 'Generation — the dimension owns its keys',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'gn-mint', label: 'Mint on arrival', sub: 'sequence, identity, or a hash', pattern: 'user', icon: 'key' },
        { id: 'gn-nk', label: 'The NK rides along', sub: 'as a plain attribute', pattern: 'user', icon: 'fingerprint' },
        { id: 'gn-zero', label: 'Reserve key 0', sub: 'the Unknown member', pattern: 'user', icon: 'circleslash' },
      ],
    },
    {
      id: 'lookup',
      label: 'Lookup — the fact resolves them at load',
      sub: 'the source fact arrives with natural keys and nothing else',
      kind: 'table',
      pattern: 'storage',
      headers: ['arrives as', 'looked up in', 'becomes'],
      values: [
        ['C-4471', 'DIM_CUSTOMER', 'customer_key 1101'],
        ['P-88', 'DIM_PRODUCT', 'product_key 204'],
      ],
    },
    {
      id: 'misses',
      label: 'And when the lookup MISSES',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ms-first', label: 'Load its dim first', sub: 'the ordinary answer — see §8', pattern: 'service', icon: 'workflow' },
        { id: 'ms-unknown', label: 'Or point at Unknown', sub: 'and backfill when it arrives', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    { id: 'scd', label: 'Use the EVENT date', sub: 'not simply is_current = Y', pattern: 'user', icon: 'history' },
  ],
  edges: [
    { source: 'generate', target: 'lookup' },
    { source: 'lookup', target: 'misses' },
    { source: 'misses', target: 'scd', label: 'with SCD-2 you must grab the version current at the event date — taking is_current would credit old sales to a new city. This step is the crux: it makes the star join correctly AND preserves the history' },
  ],
}

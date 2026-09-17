import type { Scene } from '@graphlearning/flow'

// §5 satellites — the payoff is that SCD-2 comes free, so Ana's move is drawn as two real rows with
// the same parent hash and two load_dates. This is deliberately the same incident module 06 spent
// ten sections on, and the point is that here it required no policy, no expiry column and no merge:
// the insert IS the history.
export const satellites: Scene = {
  id: 'satellites',
  title: 'Satellites — context, versioned',
  nodes: [
    {
      id: 'sat',
      label: 'SatCustomer',
      sub: 'PK is (customer_hk, load_date) — so many rows per parent, one per point in time',
      kind: 'table',
      pattern: 'user',
      headers: ['customer_hk', 'load_date', 'hash_diff', 'city'],
      values: [
        ['a3f…', '2021-06-01', '9c1…', 'Madrid'],
        ['a3f…', '2026-04-01', '4e8…', 'Barcelona'],
      ],
    },
    { id: 'free', label: 'SCD-2, for free', sub: 'the old row simply stays', pattern: 'storage', icon: 'history' },
    {
      id: 'kinds',
      label: 'Two kinds of satellite',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'k-hub', label: 'On a hub', sub: 'descriptive context — SatCustomer', pattern: 'user', icon: 'layers' },
        { id: 'k-link', label: 'On a link', sub: 'transaction measures', pattern: 'service', icon: 'sigma' },
      ],
    },
    { id: 'split', label: 'Split them up', sub: 'by source, or by rate of change', pattern: 'storage', icon: 'zap' },
  ],
  edges: [
    { source: 'sat', target: 'free', label: 'Ana moves to Barcelona: INSERT a row — load_date sequencing IS the version history' },
    { source: 'free', target: 'kinds', label: 'no expiry column, no active flag, no merge — module 06 needed all three to get here' },
    { source: 'kinds', target: 'split', label: 'so a fast-moving attribute never blocks a slow one, and both load in parallel' },
  ],
}

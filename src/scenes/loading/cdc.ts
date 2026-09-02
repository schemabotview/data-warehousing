import type { Scene } from '../../render-engine'

// §6 CDC — four methods that form a real ladder, so they are ordered weakest to strongest with the
// specific weakness attached to each. "Misses deletes" is the one worth burning into memory: the
// timestamp method is the one everybody reaches for first and it silently loses removals.
export const cdc: Scene = {
  id: 'cdc',
  title: 'Change data capture',
  nodes: [
    {
      id: 'methods',
      label: 'Four methods, weakest to strongest',
      kind: 'table',
      pattern: 'service',
      headers: ['Method', 'How', 'The catch'],
      values: [
        ['Timestamp', 'a last_modified column', 'MISSES DELETES — and clock skew'],
        ['Trigger-based', 'the source logs its own changes', 'accurate, but overhead on a live source'],
        ['Log-based', 'read the transaction log', 'the gold standard — every change, low impact'],
        ['Snapshot diff', 'compare two full snapshots', 'complete, and expensive'],
      ],
    },
    {
      id: 'why',
      label: 'What CDC feeds',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cw-inc', label: 'Incremental loads', sub: 'the delta IS what you write', pattern: 'storage', icon: 'zap' },
        { id: 'cw-scd', label: 'The SCD-2 merge', sub: 'a change → expire-and-insert', pattern: 'user', icon: 'history' },
        { id: 'cw-rt', label: 'Near-real-time', sub: 'small frequent deltas, not one batch', pattern: 'service', icon: 'clock' },
      ],
    },
  ],
  edges: [{ source: 'methods', target: 'why', label: 're-extracting a whole busy source does not scale, and hammers the system the business is running on' }],
}

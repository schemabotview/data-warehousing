import type { Scene } from '../../render-engine'

// §5 full vs incremental — a sizing decision, so the board pairs each strategy with what it is FOR
// rather than listing pros and cons in the abstract. The high-water mark gets its own card because
// "advance only on success" is the single detail that makes a re-run safe, and §9 depends on it.
export const fullVsIncremental: Scene = {
  id: 'full-vs-incremental',
  title: 'Full load or incremental?',
  nodes: [
    {
      id: 'full',
      label: 'Full — truncate and reload everything',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fl-simple', label: 'Simple', sub: 'and self-correcting — drift washes out', pattern: 'service', icon: 'circlecheck' },
        { id: 'fl-cost', label: 'Expensive at scale', sub: 'you cannot reload a billion rows', pattern: 'warn', icon: 'clock' },
        { id: 'fl-use', label: 'Use it for', sub: 'small dimensions, reference tables', pattern: 'user', icon: 'table' },
      ],
    },
    {
      id: 'inc',
      label: 'Incremental — only the new and changed rows',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'in-fast', label: 'Efficient', sub: 'touches only the delta', pattern: 'storage', icon: 'zap' },
        { id: 'in-hard', label: 'More complex', sub: 'you must know what changed', pattern: 'warn', icon: 'search' },
        { id: 'in-use', label: 'Use it for', sub: 'big facts, large dimensions', pattern: 'user', icon: 'sigma' },
      ],
    },
    { id: 'hwm', label: 'High-water mark', sub: 'the last-loaded timestamp', pattern: 'storage', icon: 'ruler' },
    {
      id: 'shapes',
      label: 'And the two table types load differently',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sh-fact', label: 'Facts append', sub: 'insert the new events', pattern: 'storage', icon: 'sigma' },
        { id: 'sh-dim', label: 'Dimensions merge', sub: 'upsert — the SCD-2 merge of module 06', pattern: 'user', icon: 'merge' },
      ],
    },
  ],
  edges: [
    { source: 'full', target: 'inc' },
    { source: 'inc', target: 'hwm', label: 'advance it ONLY on success — a failed run must not move the bookmark, so the next run re-pulls exactly the un-loaded delta' },
    { source: 'hwm', target: 'shapes' },
  ],
}

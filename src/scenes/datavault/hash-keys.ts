import type { Scene } from '../../render-engine'

// §6 hash keys — the mechanism behind the "parallel loading" claim made back in §1, so the board has
// to make the causal link explicit: deterministic hash → no lookup → no ordering dependency between
// tables → every table loads at once. A code card carries the two formulas because they are the
// whole idea, and hash_diff closes the loop back to module 06's merge.
export const hashKeys: Scene = {
  id: 'hash-keys',
  title: 'Hash keys & load metadata',
  nodes: [
    {
      id: 'formula',
      kind: 'code',
      filename: 'the key is computed, never looked up',
      label: [
        'customer_hk   = hash(customer_id)',
        'order_line_hk = hash(order_hk + product_hk)',
      ].join('\n'),
    },
    {
      id: 'why',
      label: 'Why that matters',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wy-det', label: 'Deterministic', sub: 'same key → same hash, anywhere', pattern: 'service', icon: 'hash' },
        { id: 'wy-nolookup', label: 'No lookup', sub: 'so no waiting on a parent table', pattern: 'service', icon: 'zap' },
        { id: 'wy-par', label: 'Everything at once', sub: 'hubs, links and sats in parallel', pattern: 'storage', icon: 'boxes' },
      ],
    },
    {
      id: 'metadata',
      label: 'Load metadata, on every single row',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'md-date', label: 'load_date', sub: 'sequencing satellites IS the history', pattern: 'user', icon: 'clock' },
        { id: 'md-src', label: 'record_source', sub: 'web · pos · erp — the audit lineage', pattern: 'user', icon: 'scroll' },
      ],
    },
    { id: 'diff', label: 'hash_diff', sub: 'hash all the attributes: differs → insert a version · matches → skip', pattern: 'storage', icon: 'merge' },
  ],
  edges: [
    { source: 'formula', target: 'why' },
    { source: 'why', target: 'metadata', label: 'this is the property that lets a vault scale onto MPP — nothing has to wait for anything else' },
    { source: 'metadata', target: 'diff', label: 'the same hash trick the SCD-2 merge used in module 06' },
  ],
}

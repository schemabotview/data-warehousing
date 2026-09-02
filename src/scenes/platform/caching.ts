import type { Scene } from '../../render-engine'

// §8 caching and MVs — one idea in two strengths, so the board ranks them by what they avoid: an MV
// avoids recomputing the aggregate, and the result cache avoids running anything at all. The tie
// back to module 03 is the point worth making — an MV is the aggregate fact table, automated.
export const caching: Scene = {
  id: 'caching',
  title: "The fastest query is one you don't recompute",
  nodes: [
    {
      id: 'ladder',
      label: 'Two strengths of the same idea',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'What it avoids', 'What it costs'],
      values: [
        ['Materialized view', 'recomputing the aggregate', 'storage + a refresh'],
        ['Result cache', 'running the query at all', 'nothing — it is free'],
      ],
    },
    {
      id: 'mv',
      label: 'The materialized view',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mv-what', label: 'A stored aggregate', sub: 'maintained by the engine', pattern: 'storage', icon: 'sigma' },
        { id: 'mv-same', label: 'Module 03, automated', sub: 'this IS the aggregate fact table', pattern: 'storage', icon: 'layers' },
        { id: 'mv-rewrite', label: 'Auto-rewritten', sub: 'the optimizer redirects your query', pattern: 'storage', icon: 'brain' },
      ],
    },
    {
      id: 'cache',
      label: 'The result cache',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ca-instant', label: 'Instant on repeat', sub: 'the identical query, no rescan', pattern: 'user', icon: 'zap' },
        { id: 'ca-fresh', label: 'Auto-invalidated', sub: 'data changes, cache drops — never stale', pattern: 'user', icon: 'circlecheck' },
      ],
    },
    { id: 'keep', label: 'Keep the atomic fact', sub: 'a derived copy is not the truth', pattern: 'warn', icon: 'ruler' },
  ],
  edges: [
    { source: 'ladder', target: 'mv' },
    { source: 'mv', target: 'cache', label: 'an MV cuts the compute; the cache cuts it to zero' },
    { source: 'cache', target: 'keep', label: 'the same layering module 03 argued for — the aggregate is a cache with a maintenance duty, never the source of truth' },
  ],
}

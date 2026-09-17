import type { Scene } from '@graphlearning/flow'

// §7 schema-on-write vs schema-on-read — the whole section turns on WHEN one step happens, so the
// scene is the same three steps in two orders, drawn as two lanes. Reading them against each other
// is the lesson: the transform either happens before the data lands, or after every reader asks.
export const schemaWhen: Scene = {
  id: 'schema-when',
  title: 'When does structure get imposed?',
  nodes: [
    {
      id: 'on-write',
      label: 'Schema-on-WRITE — the warehouse',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'ow-src', label: 'Source data', pattern: 'external', icon: 'file' },
        { id: 'ow-t', label: 'Transform', sub: 'conform it FIRST', pattern: 'service', icon: 'funnel' },
        { id: 'ow-load', label: 'Load', sub: 'it arrives already shaped', pattern: 'storage', icon: 'warehouse' },
        { id: 'ow-q', label: 'Query', sub: 'trusted, fast reads', pattern: 'user', icon: 'barchart' },
      ],
      edges: [
        { source: 'ow-src', target: 'ow-t' },
        { source: 'ow-t', target: 'ow-load' },
        { source: 'ow-load', target: 'ow-q' },
      ],
    },
    {
      id: 'on-read',
      label: 'Schema-on-READ — the lake',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'or-src', label: 'Source data', pattern: 'external', icon: 'file' },
        { id: 'or-load', label: 'Load as-is', sub: 'cheap, flexible ingest', pattern: 'external', icon: 'waves' },
        { id: 'or-q', label: 'Query', sub: 'structure applied HERE', pattern: 'user', icon: 'braces' },
        { id: 'or-cost', label: 'Every reader parses', sub: 'and quality varies', pattern: 'warn', icon: 'repeat' },
      ],
      edges: [
        { source: 'or-src', target: 'or-load' },
        { source: 'or-load', target: 'or-q' },
        { source: 'or-q', target: 'or-cost' },
      ],
    },
    { id: 'pair', label: 'ETL vs ELT', sub: 'the same trade, named twice', pattern: 'service', icon: 'swap' },
  ],
  edges: [
    { source: 'on-write', target: 'on-read', label: 'model up front and stay rigid — or stay flexible and pay at every read' },
    { source: 'on-read', target: 'pair', label: 'ETL is schema-on-write; ELT is schema-on-read' },
  ],
}

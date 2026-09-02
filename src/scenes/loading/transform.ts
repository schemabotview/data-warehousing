import type { Scene } from '../../render-engine'

// §4 transform — five operations, and the section's real claim is that data quality is won or lost
// HERE. Conform gets the concrete example ('M' / 'Male' / '1' → Male) because it is the one that
// sounds abstract until you see three source systems disagreeing about the same field.
export const transform: Scene = {
  id: 'transform',
  title: 'Transform — raw into warehouse-ready',
  nodes: [
    {
      id: 'ops',
      label: 'Five operations',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'op-clean', label: 'Clean', sub: 'nulls, bad types, casing, dates', pattern: 'service', icon: 'funnel' },
        { id: 'op-conform', label: 'Conform', sub: 'map source codes to shared values', pattern: 'service', icon: 'merge' },
        { id: 'op-dedupe', label: 'Deduplicate', sub: 'one customer from three systems', pattern: 'service', icon: 'copy' },
        { id: 'op-derive', label: 'Derive', sub: 'line_total, and the business rules', pattern: 'service', icon: 'sigma' },
        { id: 'op-integrate', label: 'Integrate', sub: 'join the cleaned sources into rows', pattern: 'service', icon: 'link' },
      ],
    },
    {
      id: 'conform-eg',
      label: "Conform, concretely — three systems, one field",
      kind: 'table',
      pattern: 'storage',
      headers: ['web', 'POS', 'ERP', 'becomes'],
      values: [["'M'", "'Male'", "'1'", 'Male']],
    },
    { id: 'truth', label: 'Won or lost here', sub: 'one trustworthy picture', pattern: 'user', icon: 'shieldcheck' },
  ],
  edges: [
    { source: 'ops', target: 'conform-eg' },
    { source: 'conform-eg', target: 'truth', label: 'in ETL this runs in the engine before load; in ELT it is SQL inside the warehouse — dbt lives here' },
  ],
}

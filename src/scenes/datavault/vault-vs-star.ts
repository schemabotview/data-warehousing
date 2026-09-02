import type { Scene } from '../../render-engine'

// §8 vault vs dimensional — seven axes of contrast, which is a table's job, but the resolution is
// the point: they are not rivals to choose between, they are LAYERS. The stack underneath is the
// answer to the whole comparison, and it dissolves the star's rigidity — you can always rebuild it.
export const vaultVsStar: Scene = {
  id: 'vault-vs-star',
  title: 'Not rivals — different jobs',
  nodes: [
    {
      id: 'compare',
      label: 'Opposite by design',
      kind: 'table',
      pattern: 'external',
      headers: ['', 'Dimensional (star)', 'Data Vault'],
      values: [
        ['Optimised for', 'query & reporting', 'integration & loading'],
        ['Structure', 'denormalised, few tables', 'normalised, many tables'],
        ['History', 'SCD, bolted on', 'native, in satellites'],
        ['Agility', 'low', 'high'],
        ['Query performance', 'fast and simple', 'slow, many joins'],
        ['Audience', 'analysts and BI', 'ETL and engineering'],
        ['Auditability', 'limited', 'full — source and time'],
      ],
    },
    {
      id: 'stack',
      label: 'The resolution — layer them',
      pattern: 'group',
      children: [
        { id: 'st-src', label: 'Sources', pattern: 'external', icon: 'database' },
        { id: 'st-vault', label: 'Data Vault', sub: 'integrate & preserve', pattern: 'storage', icon: 'boxes' },
        { id: 'st-star', label: 'Star marts', sub: 'present & query', pattern: 'service', icon: 'star' },
        { id: 'st-bi', label: 'BI', pattern: 'user', icon: 'barchart' },
      ],
      edges: [
        { source: 'st-src', target: 'st-vault' },
        { source: 'st-vault', target: 'st-star' },
        { source: 'st-star', target: 'st-bi' },
      ],
    },
  ],
  edges: [{ source: 'compare', target: 'stack', label: "layered this way the star's rigidity stops mattering — you can always rebuild it from the vault" }],
}

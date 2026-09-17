import type { Scene } from '@graphlearning/flow'

// §1 why it exists — the argument only lands if you first grant that the star is GOOD. So the board
// states the star's strength and its one weakness (change costs a re-engineer), then the vault's
// answer (change costs an INSERT), and closes on the framing that stops the whole course being read
// as a rivalry: the two are layered, not opposed.
export const whyVault: Scene = {
  id: 'why-vault',
  title: 'Why Data Vault exists',
  nodes: [
    {
      id: 'star-side',
      label: 'The star — superb, and rigid',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ss-good', label: 'Great to query', sub: 'denormalized, few joins', pattern: 'service', icon: 'star' },
        { id: 'ss-change', label: 'Change is costly', sub: 'a new source re-engineers facts', pattern: 'warn', icon: 'wrench' },
        { id: 'ss-hist', label: 'History bolted on', sub: 'via SCD, per attribute', pattern: 'warn', icon: 'history' },
      ],
    },
    {
      id: 'vault-side',
      label: "The vault's answer — absorb change by ADDING",
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'vs-agile', label: 'Agility', sub: 'add a table, never restructure', pattern: 'storage', icon: 'boxes' },
        { id: 'vs-audit', label: 'Auditability', sub: 'source + load time on every row', pattern: 'storage', icon: 'scroll' },
        { id: 'vs-parallel', label: 'Parallel loading', sub: 'hubs, links, sats load alone', pattern: 'storage', icon: 'zap' },
      ],
    },
    { id: 'layer', label: 'A layer, not a rival', sub: 'integrate below, query above', pattern: 'user', icon: 'layers' },
  ],
  edges: [
    { source: 'star-side', target: 'vault-side', label: 'separate the three things a star fuses: business KEYS, RELATIONSHIPS, and CONTEXT — then each can change on its own' },
    { source: 'vault-side', target: 'layer', label: 'the vault integrates and preserves; a star mart sits on top to be queried' },
  ],
}

import type { Scene } from '../../render-engine'

// §10 when to reach for it — a decision board, and the honest half is the right-hand side. A course
// that only argues FOR its subject teaches a learner to over-apply it, and Data Vault over-applied
// to a small single-source mart is a well-known way to waste months.
export const whenToVault: Scene = {
  id: 'when-to-vault',
  title: 'When to reach for it — and when not to',
  nodes: [
    {
      id: 'yes',
      label: 'Reach for it when…',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'y-many', label: 'Many sources', sub: 'hubs merge entities across them', pattern: 'storage', icon: 'merge' },
        { id: 'y-change', label: 'Change is constant', sub: 'absorb it by adding tables', pattern: 'storage', icon: 'boxes' },
        { id: 'y-audit', label: 'Audit required', sub: 'source and time on every row', pattern: 'storage', icon: 'shieldcheck' },
        { id: 'y-scale', label: 'Scale needs parallel', sub: 'deterministic keys, MPP loads', pattern: 'storage', icon: 'zap' },
        { id: 'y-long', label: 'A long-lived EDW', sub: 'future-proofing beats the effort', pattern: 'storage', icon: 'clock' },
      ],
    },
    {
      id: 'no',
      label: "Don't bother when…",
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'n-small', label: 'Small and stable', sub: 'a single-source mart', pattern: 'warn', icon: 'ban' },
        { id: 'n-quick', label: 'A quick deliverable', sub: 'requirements already settled', pattern: 'warn', icon: 'clock' },
        { id: 'n-noaudit', label: 'No audit burden', sub: 'and nothing to integrate', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    { id: 'then', label: 'Model a star', sub: 'directly, and skip the vault', pattern: 'service', icon: 'star' },
  ],
  edges: [
    { source: 'yes', target: 'no' },
    { source: 'no', target: 'then', label: 'the vault is an investment: it pays back on integration, change and audit — and on nothing else' },
  ],
}

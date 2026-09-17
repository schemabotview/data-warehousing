import type { Scene } from '@graphlearning/flow'

// §3 staging — a landing zone is easy to dismiss as a temp table, so the board is built entirely
// around the four jobs it does. The restart-checkpoint one is the load-bearing claim, because it is
// what §9's restartable pipeline will depend on.
export const staging: Scene = {
  id: 'staging',
  title: 'Staging — the landing zone',
  nodes: [
    {
      id: 'where',
      label: 'Between the source and the warehouse',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'wh-src', label: 'Source', pattern: 'external', icon: 'database' },
        { id: 'wh-stage', label: 'Staging', sub: 'the raw output of extract', pattern: 'service', icon: 'harddrive' },
        { id: 'wh-wh', label: 'Warehouse', pattern: 'storage', icon: 'warehouse' },
      ],
      edges: [{ source: 'wh-src', target: 'wh-stage' }, { source: 'wh-stage', target: 'wh-wh' }],
    },
    {
      id: 'jobs',
      label: 'Four jobs it does',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'jb-decouple', label: 'Decouples', sub: 'the source is released fast', pattern: 'service', icon: 'scissors' },
        { id: 'jb-safe', label: 'A safe workspace', sub: 'clean without touching either end', pattern: 'service', icon: 'shieldcheck' },
        { id: 'jb-restart', label: 'A restart point', sub: 're-transform without re-extracting', pattern: 'storage', icon: 'repeat' },
        { id: 'jb-audit', label: 'A raw audit copy', sub: 'prove what actually arrived', pattern: 'storage', icon: 'scroll' },
      ],
    },
    {
      id: 'life',
      label: 'How long you keep it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lf-trans', label: 'Transient', sub: 'truncate and reload each run', pattern: 'external', icon: 'trash' },
        { id: 'lf-persist', label: 'Persistent', sub: 'keep every extract — a raw archive', pattern: 'user', icon: 'boxes' },
      ],
    },
  ],
  edges: [
    { source: 'where', target: 'jobs', label: 'schema-light and uninterpreted — it mirrors the source rather than the warehouse' },
    { source: 'jobs', target: 'life', label: 'a persistent staging area is essentially the raw layer of a Data Vault' },
  ],
}

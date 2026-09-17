import type { Scene } from '@graphlearning/flow'

// §2 extract — the governing constraint is that the source is LIVE and belongs to someone else, so
// the board leads with the four real sources and then the three rules that follow from not being
// allowed to hurt them. Full vs incremental is the decision those rules force.
export const extract: Scene = {
  id: 'extract',
  title: 'Extract — pulling from live systems',
  nodes: [
    {
      id: 'sources',
      label: 'Where the business actually runs',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'ex-web', label: 'Web store', pattern: 'external', icon: 'globe' },
        { id: 'ex-pos', label: 'POS', pattern: 'external', icon: 'receipt' },
        { id: 'ex-erp', label: 'ERP', pattern: 'external', icon: 'building' },
        { id: 'ex-pay', label: 'Payments', pattern: 'external', icon: 'receipt' },
      ],
    },
    {
      id: 'rules',
      label: 'Three rules, because the source is LIVE',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rl-hetero', label: 'Each speaks differently', sub: 'DBs, APIs, files, logs', pattern: 'warn', icon: 'braces' },
        { id: 'rl-gentle', label: 'Do not overload it', sub: 'off-hours, throttled, or a replica', pattern: 'warn', icon: 'gauge' },
        { id: 'rl-readonly', label: 'Read-only', sub: 'take a copy, leave it untouched', pattern: 'warn', icon: 'lock' },
      ],
    },
    {
      id: 'how-much',
      label: 'How much to pull',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'hm-full', label: 'Full', sub: 'the whole dataset, every run', pattern: 'service', icon: 'copy' },
        { id: 'hm-inc', label: 'Incremental', sub: 'only what changed — essential at scale', pattern: 'storage', icon: 'zap' },
      ],
    },
    { id: 'fidelity', label: 'Land it as-is', sub: 'fidelity buys audit + reprocessing', pattern: 'user', icon: 'shieldcheck' },
  ],
  edges: [
    { source: 'sources', target: 'rules' },
    { source: 'rules', target: 'how-much' },
    { source: 'how-much', target: 'fidelity', label: 'cleaning and conforming come later, in transform' },
  ],
}

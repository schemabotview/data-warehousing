import type { Scene } from '@graphlearning/flow'

// §8 ordering — a hard rule with a mechanical reason (the surrogate does not exist until the dim row
// does), so the board shows both orders and what each produces. The early-arriving-fact case is the
// exception that proves it, and the inferred placeholder is the standard escape hatch.
export const dimsBeforeFacts: Scene = {
  id: 'dims-before-facts',
  title: 'Dimensions first. Always.',
  nodes: [
    {
      id: 'right',
      label: 'Dimensions first',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'rt-dims', label: 'Load / merge dims', sub: 'new members + SCD changes', pattern: 'user', icon: 'layers' },
        { id: 'rt-facts', label: 'Then load facts', sub: 'every lookup resolves', pattern: 'storage', icon: 'sigma' },
        { id: 'rt-ok', label: 'Referential integrity', sub: 'every FK hits a real row', pattern: 'service', icon: 'circlecheck' },
      ],
      edges: [{ source: 'rt-dims', target: 'rt-facts' }, { source: 'rt-facts', target: 'rt-ok' }],
    },
    {
      id: 'wrong',
      label: 'Facts first',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'wr-facts', label: 'Load facts', sub: 'the dim row is not there yet', pattern: 'warn', icon: 'sigma' },
        { id: 'wr-miss', label: 'Lookups miss', pattern: 'warn', icon: 'search' },
        { id: 'wr-bad', label: 'Rejected — or worse', sub: 'silently filed under Unknown', pattern: 'warn', icon: 'skull' },
      ],
      edges: [{ source: 'wr-facts', target: 'wr-miss' }, { source: 'wr-miss', target: 'wr-bad' }],
    },
    { id: 'early', label: 'Early-arriving facts', sub: 'insert an inferred member', pattern: 'user', icon: 'clock' },
  ],
  edges: [
    { source: 'right', target: 'wrong', label: 'the reason is mechanical: a fact needs a surrogate FK, and that surrogate exists only after its dimension row is loaded' },
    { source: 'wrong', target: 'early', label: 'the exception: natural key known, attributes NULL — then backfill when the dimension feed catches up' },
  ],
}

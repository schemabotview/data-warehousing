import type { Scene } from '../../render-engine'

// §2 Type 0 — the distinction that matters is against Type 1: overwrite ACCEPTS the update and
// replaces, Type 0 REFUSES it. Drawing the incoming update being rejected is the difference; a card
// reading "retain original" would leave a learner unable to tell the two apart.
export const type0: Scene = {
  id: 'type-0',
  title: 'Type 0 — write once, then refuse',
  nodes: [
    {
      id: 'row',
      label: 'DIM_CUSTOMER',
      sub: 'set at first load',
      kind: 'table',
      pattern: 'storage',
      headers: ['customer_key', 'date_of_birth', 'original_signup_date'],
      values: [['1101', '1990-03-12', '2021-06-01']],
    },
    { id: 'update', label: 'An update arrives', sub: 'date_of_birth = 1990-03-21', pattern: 'external', icon: 'file' },
    { id: 'refuse', label: 'Ignored', sub: 'the column is write-once', pattern: 'warn', icon: 'ban' },
    {
      id: 'when',
      label: 'When "original" IS the point',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'wn-immutable', label: 'Immutable facts', sub: 'date of birth · launch date', pattern: 'service', icon: 'lock' },
        { id: 'wn-original', label: '"Original" values', sub: 'signup date · opening score', pattern: 'service', icon: 'history' },
      ],
    },
  ],
  edges: [
    { source: 'row', target: 'update' },
    { source: 'update', target: 'refuse', label: 'Type 1 overwrites; Type 0 refuses — a bad feed cannot reach this column' },
    { source: 'refuse', target: 'when', label: 'it keeps no current value and no history — only the first. If the present value matters, this is the wrong type' },
  ],
}

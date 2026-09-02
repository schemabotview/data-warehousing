import type { Scene } from '../../render-engine'

// §2 the normal forms — a LADDER, because each form assumes the one below it. Each rung carries the
// single rule it adds rather than a restatement of the form's name. The two dependency kinds sit
// underneath because 2NF and 3NF are defined entirely in terms of them.
export const normalFormsLadder: Scene = {
  id: 'normal-forms-ladder',
  title: 'The normal forms',
  flow: 'BT',
  nodes: [
    { id: 'nf1', label: '1NF', sub: 'atomic cells, unique rows', pattern: 'service', icon: 'box' },
    { id: 'nf2', label: '2NF', sub: 'no partial dependency', pattern: 'service', icon: 'boxes' },
    { id: 'nf3', label: '3NF', sub: 'no transitive dependency', pattern: 'service', icon: 'layers' },
    { id: 'bcnf', label: 'BCNF', sub: 'every determinant is a candidate key', pattern: 'external', icon: 'scale' },
    {
      id: 'deps',
      label: 'The two dependencies the rules are made of',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'd-partial', label: 'Partial', sub: 'depends on PART of a composite key', pattern: 'warn', icon: 'scissors' },
        { id: 'd-trans', label: 'Transitive', sub: 'depends on another non-key column', pattern: 'warn', icon: 'link' },
      ],
    },
  ],
  edges: [
    { source: 'deps', target: 'nf1', label: 'name these two and the ladder defines itself' },
    { source: 'nf1', target: 'nf2', label: 'every column needs the WHOLE key' },
    { source: 'nf2', target: 'nf3', label: 'and nothing but the key' },
    { source: 'nf3', target: 'bcnf', label: 'edge cases only — designers stop at 3NF, where the value is' },
  ],
}

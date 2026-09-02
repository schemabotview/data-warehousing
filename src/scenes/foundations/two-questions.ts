import type { Scene } from '../../render-engine'

// §1 why — the claim is that a business asks TWO kinds of question, and one machine cannot be good
// at both. So the scene is the two questions side by side with the system each one needs, and the
// cost of asking the right-hand question of the left-hand machine is drawn as the edge between them.
export const twoQuestions: Scene = {
  id: 'two-questions',
  title: 'Two kinds of question',
  nodes: [
    {
      id: 'now',
      label: 'Questions about NOW',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'q-now', label: '"What is this order?"', sub: 'one row, this instant', pattern: 'service', icon: 'receipt' },
        { id: 'oltp', label: 'Operational DB', sub: 'tiny constant reads & writes', pattern: 'storage', icon: 'database' },
      ],
      edges: [{ source: 'q-now', target: 'oltp', label: 'answered in milliseconds' }],
    },
    {
      id: 'over-time',
      label: 'Questions about OVER TIME',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'q-hist', label: '"Sales by region?"', sub: 'years of history, millions of rows', pattern: 'service', icon: 'barchart' },
        { id: 'dw', label: 'Data warehouse', sub: 'central · cleaned once · history kept', pattern: 'storage', icon: 'warehouse' },
      ],
      edges: [{ source: 'q-hist', target: 'dw', label: 'answered without touching production' }],
    },
  ],
  edges: [{ source: 'now', target: 'over-time', label: 'ask the second question of the first machine and you slow the business down — and still cannot reach the data in every other system' }],
}

import type { Scene } from '@graphlearning/flow'

// §3 step two — the section says "say it as a sentence", so the board shows the sentence and the two
// wrong sentences beside it, since the error is always a grain that is too COARSE. The lower half is
// why this step must come before 3 and 4: the grain is the contract the next two steps are held to.
export const declareGrain: Scene = {
  id: 'declare-grain',
  title: 'Step 2 — declare the grain',
  nodes: [
    {
      id: 'sentences',
      label: 'Say it as a sentence',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sn-day', label: '"per day"', sub: 'an aggregate — detail already lost', pattern: 'warn', icon: 'ban' },
        { id: 'sn-order', label: '"per order"', sub: 'hides the products on it', pattern: 'warn', icon: 'ban' },
        { id: 'sn-line', label: '"per product per order"', sub: 'one ORDER LINE — atomic', pattern: 'storage', icon: 'ruler' },
      ],
    },
    {
      id: 'contract',
      label: 'The grain is the contract steps 3 and 4 are held to',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ct-dims', label: 'Dimensions', sub: 'only things true at THIS level', pattern: 'user', icon: 'layers' },
        { id: 'ct-facts', label: 'Facts', sub: 'only measures meaningful per line', pattern: 'storage', icon: 'sigma' },
      ],
    },
    { id: 'finest', label: 'Take the finest grain', sub: 'roll up to any summary later — you can never roll down', pattern: 'service', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'sentences', target: 'contract', label: 'one grain per fact table — never mix lines and totals' },
    { source: 'contract', target: 'finest' },
  ],
}

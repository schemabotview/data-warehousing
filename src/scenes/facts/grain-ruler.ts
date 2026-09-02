import type { Scene } from '../../render-engine'

// §2 grain — the section calls this the most important decision, so the scene is the decision
// itself: three candidate grains for the same sales data, and what each one can still answer. The
// asymmetry at the bottom (roll up always works, roll down never does) is the reason to pick the
// finest, and it is a claim about information loss, not about taste.
export const grainRuler: Scene = {
  id: 'grain-ruler',
  title: 'What does one row mean?',
  nodes: [
    {
      id: 'candidates',
      label: 'Three grains for the same sales data',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'g-day', label: 'One row per day', sub: 'coarsest — the day total', pattern: 'external', icon: 'calendar' },
        { id: 'g-order', label: 'One row per order', sub: 'the order total', pattern: 'external', icon: 'receipt' },
        { id: 'g-line', label: 'One row per line', sub: 'one product on one order', pattern: 'storage', icon: 'ruler' },
      ],
      edges: [
        { source: 'g-day', target: 'g-order', label: 'finer' },
        { source: 'g-order', target: 'g-line', label: 'finer still — atomic' },
      ],
    },
    {
      id: 'asymmetry',
      label: 'The asymmetry that decides it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'a-up', label: 'Roll UP', sub: 'atomic rows sum to any summary', pattern: 'service', icon: 'circlecheck' },
        { id: 'a-down', label: 'Roll DOWN', sub: 'impossible — lost detail is gone', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    { id: 'sin', label: 'Never mix grain', sub: 'a different level is a different fact table', pattern: 'warn', icon: 'ban' },
  ],
  edges: [
    { source: 'candidates', target: 'asymmetry', label: 'declare it in business terms FIRST — the dimensions and measures that may attach follow from it' },
    { source: 'asymmetry', target: 'sin' },
  ],
}

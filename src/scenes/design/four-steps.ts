import type { Scene } from '@graphlearning/flow'

// §1 the recipe — four steps laid out as one row, because the sequence is the content and a vertical
// chain of four cards would render as a thin column. The band underneath is the part that actually
// matters: each step CONSTRAINS the next, which is why reordering them produces specific, nameable
// defects rather than just untidiness.
export const fourSteps: Scene = {
  id: 'four-steps',
  title: "Kimball's four steps",
  nodes: [
    {
      id: 'steps',
      label: 'Always in this order',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 's1', label: '1 · The process', sub: 'the activity you model', pattern: 'service', icon: 'workflow' },
        { id: 's2', label: '2 · The grain', sub: 'what one fact row means', pattern: 'storage', icon: 'ruler' },
        { id: 's3', label: '3 · Dimensions', sub: 'how you slice it', pattern: 'user', icon: 'layers' },
        { id: 's4', label: '4 · Facts', sub: 'the measures you aggregate', pattern: 'storage', icon: 'sigma' },
      ],
    },
    {
      id: 'why-order',
      label: 'Reorder them and here is what breaks',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wo-mixed', label: 'Mixed grain', sub: 'rows that mean different things', pattern: 'warn', icon: 'ban' },
        { id: 'wo-orphan', label: 'Orphaned measures', sub: 'numbers untrue at the grain', pattern: 'warn', icon: 'circleslash' },
        { id: 'wo-misfit', label: 'Mis-fit dimensions', sub: 'attributes that cannot attach', pattern: 'warn', icon: 'bug' },
      ],
    },
    { id: 'from-business', label: 'Model the BUSINESS', sub: 'not the source system', pattern: 'user', icon: 'building' },
  ],
  edges: [
    { source: 'steps', target: 'why-order', label: 'you cannot list dimensions or facts until the grain is fixed — the grain is what makes them valid or invalid' },
    { source: 'why-order', target: 'from-business', label: 'model a process the organisation measures — never a copy of the source tables' },
  ],
}

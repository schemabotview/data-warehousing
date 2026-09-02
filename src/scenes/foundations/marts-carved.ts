import type { Scene } from '../../render-engine'

// §5 marts — the claim is not "a mart is small", it is that the SAME slice can arrive two ways, and
// only one of them is safe by construction. So the board is the two build paths racing to the same
// three marts: carved from the warehouse (dependent) vs built straight from sources (independent).
export const martsCarved: Scene = {
  id: 'marts-carved',
  title: 'Two ways to build a mart',
  nodes: [
    {
      id: 'paths',
      label: 'Same mart, two routes',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'p-dep', label: 'Dependent', sub: 'carved from the warehouse (top-down)', pattern: 'service', icon: 'warehouse' },
        { id: 'p-ind', label: 'Independent', sub: 'built straight from sources (bottom-up)', pattern: 'warn', icon: 'boxes' },
      ],
    },
    {
      id: 'marts',
      label: 'The departmental subsets',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mm-sales', label: 'Sales mart', sub: "the team's own vocabulary", pattern: 'user', icon: 'chartpie' },
        { id: 'mm-fin', label: 'Finance mart', sub: 'smaller · faster', pattern: 'user', icon: 'chartpie' },
        { id: 'mm-mkt', label: 'Marketing mart', sub: 'focus · security', pattern: 'user', icon: 'chartpie' },
      ],
    },
    { id: 'risk', label: 'Conform the dims', sub: 'or you have built silos', pattern: 'warn', icon: 'merge' },
  ],
  edges: [
    { source: 'paths', target: 'marts', label: 'both arrive at a subject-specific subset' },
    { source: 'marts', target: 'risk', label: 'the independent route is where this bites: the same customer must mean the same customer in all three' },
  ],
}

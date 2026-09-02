import type { Scene } from '../../render-engine'

// §3 additivity — a property of a MEASURE against the dimensions you sum it over, so each of the
// three classes carries the operation that is legal for it. The trap is the middle one: a balance
// sums perfectly across warehouses and is nonsense summed across days, and only naming the
// dimension makes that visible.
export const additivity: Scene = {
  id: 'additivity',
  title: 'Which measures may you sum?',
  nodes: [
    {
      id: 'classes',
      label: 'Three classes of measure',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'm-add', label: 'Additive', sub: 'line_total · quantity · tax', pattern: 'storage', icon: 'sigma' },
        { id: 'm-semi', label: 'Semi-additive', sub: 'on_hand_quantity · balances', pattern: 'warn', icon: 'history' },
        { id: 'm-non', label: 'Non-additive', sub: 'unit_price · margin %', pattern: 'warn', icon: 'scale' },
      ],
    },
    {
      id: 'legal',
      label: 'What is legal for each',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'l-add', label: 'Any GROUP BY', sub: 'sum across every dimension', pattern: 'service', icon: 'circlecheck' },
        { id: 'l-semi', label: 'All but time', sub: 'across dates: average, or last', pattern: 'warn', icon: 'clock' },
        { id: 'l-non', label: 'Never sum', sub: 'store the parts, divide after', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    { id: 'rule', label: 'Keep raw amounts', sub: 'and derive every ratio last', pattern: 'service', icon: 'ruler' },
  ],
  edges: [
    { source: 'classes', target: 'legal', label: 'additivity is a property of the measure AGAINST a dimension — a balance sums across warehouses and is nonsense summed across days' },
    { source: 'legal', target: 'rule' },
  ],
}

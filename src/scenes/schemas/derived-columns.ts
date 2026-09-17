import type { Scene } from '@graphlearning/flow'

// §9 the fact's other columns — two things that are neither key nor plain measure. The store-vs-
// compute decision is the section's real content, so it gets a table of consequences, and the
// closing caution repeats the §3 additivity rule where it actually bites: store amounts, not ratios.
export const derivedColumns: Scene = {
  id: 'derived-columns',
  title: 'Degenerate and derived columns',
  nodes: [
    {
      id: 'two-kinds',
      label: 'Two kinds of column that are neither key nor measure',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tk-degen', label: 'Degenerate', sub: 'order_id · order_status — no table', pattern: 'external', icon: 'fingerprint' },
        { id: 'tk-derived', label: 'Derived', sub: 'computed once, then stored', pattern: 'service', icon: 'sigma' },
      ],
    },
    {
      id: 'formula',
      kind: 'code',
      filename: 'the derived measure, computed at load',
      label: 'line_total = quantity * unit_price - discount_amount + tax_amount',
    },
    {
      id: 'decision',
      label: 'Store it, or compute it at query time?',
      kind: 'table',
      pattern: 'external',
      headers: ['', 'Store it', 'Compute it'],
      values: [
        ['Speed', 'instant', 'repeated work'],
        ['Meaning', 'one agreed definition', 'may diverge per query'],
        ['Costs', 'space + ETL work', 'nothing, always in sync'],
      ],
    },
    { id: 'caution', label: 'Amounts, not ratios', sub: 'a stored ratio cannot be aggregated', pattern: 'warn', icon: 'scale' },
  ],
  edges: [
    { source: 'two-kinds', target: 'formula' },
    { source: 'formula', target: 'decision', label: 'warehouses usually store the common ones' },
    { source: 'decision', target: 'caution', label: 'store the additive amounts and divide AFTER aggregating — the module 03 rule, at its most tempting moment' },
  ],
}

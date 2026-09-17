import type { Scene } from '@graphlearning/flow'

// §10 why warehouses insist — five reasons is a list, and a list of five cards teaches nothing on
// its own, so the board ENDS on the pattern the reasons produce: a surrogate-keyed dimension joined
// to a fact on an integer. That two-table shape is the star schema, arrived at rather than declared.
export const surrogatePattern: Scene = {
  id: 'surrogate-pattern',
  title: 'Why warehouses insist on surrogates',
  nodes: [
    {
      id: 'reasons',
      label: 'Five reasons',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'r-stable', label: 'Stability', sub: 'fixed while sources change', pattern: 'service', icon: 'lock' },
        { id: 'r-perf', label: 'Performance', sub: 'small int, smaller indexes', pattern: 'service', icon: 'zap' },
        { id: 'r-flex', label: 'Flexibility', sub: 'merge clashing source ids', pattern: 'service', icon: 'merge' },
        { id: 'r-simple', label: 'Simplicity', sub: 'uniform integer FKs', pattern: 'service', icon: 'hash' },
        { id: 'r-scd', label: 'Enables SCD-2', sub: 'many history rows per entity', pattern: 'service', icon: 'history' },
      ],
    },
    {
      id: 'pattern',
      label: 'The pattern they produce',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'dimc', label: 'DimCustomer', kind: 'table', pattern: 'storage',
          columns: [
            { name: 'CustomerSK', type: 'int', key: 'PK' },
            { name: 'CustomerNK', type: 'varchar' },
            { name: 'name', type: 'varchar' },
          ],
        },
        {
          id: 'factd', label: 'FactSales', kind: 'table', pattern: 'storage',
          columns: [
            { name: 'CustomerSK', type: 'int', key: 'FK' },
            { name: 'quantity', type: 'int' },
            { name: 'line_total', type: 'decimal' },
          ],
        },
      ],
    },
    { id: 'cost', label: 'Paid once, at load', sub: 'an ETL lookup resolves the key', pattern: 'user', icon: 'funnel' },
  ],
  edges: [
    { source: 'reasons', target: 'pattern', label: 'surrogate-keyed dimensions joined to facts on an integer — this IS the star schema' },
    { source: 'pattern', target: 'cost', label: 'the key carries no meaning, so the natural key stays on as an attribute' },
  ],
}

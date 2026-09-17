import type { Scene } from '@graphlearning/flow'

// §8 the four key roles — students confuse PK and SK because in a dimension they are the SAME
// COLUMN wearing two hats, so the dimension table here is drawn with that column tagged once and
// explained twice. The NK sits beside it, deliberately NOT a join key, which is the other confusion.
export const fourKeyRoles: Scene = {
  id: 'four-key-roles',
  title: 'PK · SK · FK · NK',
  nodes: [
    {
      id: 'fact',
      label: 'FACT_SALES',
      sub: 'carries the FK',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'customer_key', type: 'int', key: 'FK' },
        { name: 'quantity', type: 'int' },
      ],
    },
    {
      id: 'dim',
      label: 'DIM_CUSTOMER',
      sub: 'customer_key is the PK and the SK — one column, two roles',
      kind: 'table',
      pattern: 'service',
      columns: [
        { name: 'customer_key', type: 'int', key: 'PK' },
        { name: 'customer_id', type: 'varchar' },
        { name: 'name', type: 'varchar' },
      ],
    },
    {
      id: 'roles',
      label: 'The four roles',
      kind: 'table',
      pattern: 'external',
      headers: ['Role', 'What it is', 'Where'],
      values: [
        ['SK', 'a minted integer, 1101', 'every dimension row'],
        ['PK', 'in a dimension it IS the SK', 'tagged PK|SK'],
        ['FK', 'a reference to that PK', 'on the fact'],
        ['NK', 'the source key, C-4471', 'a plain attribute'],
      ],
    },
  ],
  edges: [
    { source: 'fact', target: 'dim', label: 'FK → PK|SK — this join IS the star' },
    { source: 'dim', target: 'roles', label: 'the natural key is never a join key: joining on the surrogate is what carries SCD history and keeps you free of the source system' },
  ],
}

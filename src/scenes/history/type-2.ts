import type { Scene } from '@graphlearning/flow'

// §4 Type 2 — the most important board in the course. The two dimension rows and the two fact rows
// must be on screen TOGETHER, because the claim is that a sale's date decides which surrogate key it
// carries, and therefore which city it rolls up under. That linkage is the payoff of every surrogate
// -key argument made since module 02.
export const type2: Scene = {
  id: 'type-2',
  title: 'Type 2 — expire the old, insert the new',
  nodes: [
    {
      id: 'dim',
      label: 'DIM_CUSTOMER — one row per version',
      sub: 'same natural key C-4471, a new surrogate key each time',
      kind: 'table',
      pattern: 'storage',
      headers: ['customer_key', 'customer_id', 'city', 'effective', 'expiry', 'current'],
      values: [
        ['1101', 'C-4471', 'Madrid', '2021-06-01', '2026-03-31', 'N'],
        ['1108', 'C-4471', 'Barcelona', '2026-04-01', '9999-12-31', 'Y'],
      ],
    },
    {
      id: 'facts',
      label: 'FACT_SALES — each sale keeps the key that was current',
      kind: 'table',
      pattern: 'service',
      headers: ['order_date', 'customer_key', 'rolls up under'],
      values: [
        ['2025-11-04', '1101', 'Madrid'],
        ['2026-07-19', '1108', 'Barcelona'],
      ],
    },
    {
      id: 'cost',
      label: 'What it costs',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ct-grow', label: 'The dim grows', sub: 'a row per version, forever', pattern: 'warn', icon: 'layers' },
        { id: 'ct-etl', label: 'Heavier ETL', sub: 'expire-and-insert, plus control columns', pattern: 'warn', icon: 'funnel' },
      ],
    },
  ],
  edges: [
    { source: 'dim', target: 'facts', label: 'the sale date picks the version' },
    { source: 'facts', target: 'cost', label: '"sales by region" now credits each sale to the region that was true THEN — and this is simply impossible with a natural-key join' },
  ],
}

import type { Scene } from '../../render-engine'

// §8 building the fact — the claim to make concrete is "one bill becomes TWO rows", so both rows are
// drawn: same order_id, same customer and date repeated as FKs, different product_key. Seeing the
// header values repeat down the lines is what makes the grain decision from step 2 feel inevitable.
export const buildFact: Scene = {
  id: 'build-fact',
  title: 'One bill → two fact rows',
  nodes: [
    {
      id: 'rows',
      label: 'FACT_SALES — grain: one order line',
      sub: 'the header values repeat on every line; only product_key and the measures differ',
      kind: 'table',
      pattern: 'storage',
      headers: ['sales_key', 'order_date_key', 'customer_key', 'product_key', 'order_id', 'quantity', 'line_total'],
      values: [
        ['9001', '20260412', '1101', '204', 'O-4471', '2', '1452.00'],
        ['9002', '20260412', '1101', '207', 'O-4471', '1', '363.00'],
      ],
    },
    {
      id: 'anatomy',
      label: 'Where each column came from',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'an-pk', label: 'sales_key', sub: 'a surrogate PK for the row', pattern: 'service', icon: 'key' },
        { id: 'an-fk', label: 'The FKs', sub: 'step 3 — one per dimension', pattern: 'user', icon: 'link' },
        { id: 'an-dd', label: 'order_id', sub: 'step 4 — a degenerate dim', pattern: 'external', icon: 'fingerprint' },
        { id: 'an-m', label: 'The measures', sub: 'step 4 — line_total is derived', pattern: 'storage', icon: 'sigma' },
      ],
    },
    { id: 'lookup', label: 'The key lookup', sub: 'C-4471 → 1101 · P-88 → 204', pattern: 'service', icon: 'funnel' },
  ],
  edges: [
    { source: 'rows', target: 'anatomy', label: 'two line items, two rows, one shared order_id' },
    { source: 'anatomy', target: 'lookup', label: 'this is the heart of dimensional loading — it wires each fact row to the correct VERSION of each dimension, and module 09 builds it' },
  ],
}

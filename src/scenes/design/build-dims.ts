import type { Scene } from '@graphlearning/flow'

// §7 building the dimensions — the moment the surrogate key stops being theory: the bill knows only
// C-4471, and the dimension mints 1101. Drawing that substitution is the point, because everything
// modules 02 and 04 argued for is realised in that one arrow.
export const buildDims: Scene = {
  id: 'build-dims',
  title: 'Group the attributes, then mint the keys',
  nodes: [
    {
      id: 'grouping',
      label: "The bill's attributes, grouped by entity",
      kind: 'table',
      pattern: 'user',
      headers: ['From the bill', 'Becomes'],
      values: [
        ['customer id, name, address', 'DIM_CUSTOMER'],
        ['product id, name, price', 'DIM_PRODUCT'],
        ['order date', 'DIM_DATE'],
        ['channel', 'DIM_CHANNEL'],
        ['promo code', 'DIM_PROMOTION'],
      ],
    },
    {
      id: 'mint',
      label: 'The bill knows a natural key · the dimension mints a surrogate',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'mn-nk', label: 'C-4471', sub: 'all the bill has', pattern: 'external', icon: 'receipt' },
        { id: 'mn-sk', label: '1101', sub: 'customer_key — what the fact stores', pattern: 'storage', icon: 'key' },
      ],
      edges: [{ source: 'mn-nk', target: 'mn-sk', label: 'looked up at load time' }],
    },
    {
      id: 'fitout',
      label: 'Fit each one out — the module-04 checklist',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'fo-sk', label: 'Surrogate key', sub: 'the integer the fact points at', pattern: 'service', icon: 'key' },
        { id: 'fo-nk', label: 'Keep the NK', sub: 'as an attribute, for tracing', pattern: 'service', icon: 'fingerprint' },
        { id: 'fo-scd', label: 'SCD per attribute', sub: 'address Type 2 · name fix Type 1', pattern: 'service', icon: 'history' },
        { id: 'fo-reuse', label: 'Reuse conformed', sub: 'where the dim already exists', pattern: 'service', icon: 'merge' },
      ],
    },
  ],
  edges: [
    { source: 'grouping', target: 'mint' },
    { source: 'mint', target: 'fitout', label: 'a fast integer join AND history: when Ana moves, the move is a new customer_key row' },
  ],
}

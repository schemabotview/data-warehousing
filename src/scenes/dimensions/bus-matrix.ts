import type { Scene } from '../../render-engine'

// §4 conformed dimensions — the claim is that sharing ONE dimension is what turns separate marts
// into a warehouse, so three facts are drawn pointing at the same DIM_CUSTOMER. The bus matrix
// underneath is the same claim as a plan: a shared column is a dimension you are obliged to conform.
export const busMatrix: Scene = {
  id: 'bus-matrix',
  title: 'Conformed dimensions & the bus matrix',
  nodes: [
    {
      id: 'shared',
      label: 'Three processes, one customer',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'b-sales', label: 'FACT_SALES', pattern: 'storage', icon: 'sigma' },
        { id: 'b-ship', label: 'FACT_SHIPMENT', pattern: 'storage', icon: 'workflow' },
        { id: 'b-pay', label: 'FACT_PAYMENTS', pattern: 'storage', icon: 'receipt' },
        { id: 'b-dim', label: 'DIM_CUSTOMER', sub: 'conformed — one meaning', pattern: 'service', icon: 'users' },
      ],
      edges: [
        { source: 'b-sales', target: 'b-dim' },
        { source: 'b-ship', target: 'b-dim' },
        { source: 'b-pay', target: 'b-dim' },
      ],
    },
    {
      id: 'matrix',
      label: 'The bus matrix — the whole plan on one page',
      sub: 'rows are processes (facts) · columns are dimensions · a shared column must be conformed',
      kind: 'table',
      pattern: 'user',
      headers: ['Process', 'Date', 'Customer', 'Product', 'Warehouse', 'Carrier'],
      values: [
        ['Sales', 'x', 'x', 'x', '', ''],
        ['Shipment', 'x', 'x', 'x', 'x', 'x'],
        ['Payments', 'x', 'x', '', '', ''],
      ],
    },
  ],
  edges: [{ source: 'shared', target: 'matrix', label: 'same region, same product_line everywhere — so you can drill ACROSS processes, and the separate marts become one warehouse' }],
}

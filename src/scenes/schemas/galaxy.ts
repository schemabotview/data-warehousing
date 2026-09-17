import type { Scene } from '@graphlearning/flow'

// §6 the galaxy — the real-world shape, and the reason it works is the conformed dimension from
// module 04, so the three facts genuinely share the three dimension boxes rather than each owning a
// copy. The growth rule underneath is what makes a galaxy a plan instead of an accident.
export const galaxy: Scene = {
  id: 'galaxy',
  title: 'Many facts, shared dimensions',
  nodes: [
    {
      id: 'facts',
      label: 'One fact per business process',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'gf-sales', label: 'FACT_SALES', sub: 'grain: one order line', pattern: 'storage', icon: 'sigma' },
        { id: 'gf-ship', label: 'FACT_SHIPMENT', sub: 'grain: one shipment', pattern: 'storage', icon: 'workflow' },
        { id: 'gf-pay', label: 'FACT_PAYMENTS', sub: 'grain: one payment', pattern: 'storage', icon: 'receipt' },
      ],
    },
    {
      id: 'dims',
      label: 'Conformed dimensions — one copy, shared',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'gd-date', label: 'DIM_DATE', pattern: 'service', icon: 'calendar' },
        { id: 'gd-prod', label: 'DIM_PRODUCT', pattern: 'service', icon: 'package' },
        { id: 'gd-cust', label: 'DIM_CUSTOMER', pattern: 'service', icon: 'users' },
      ],
    },
    { id: 'grow', label: 'How it grows', sub: 'build one star, then add the next REUSING the dimensions', pattern: 'user', icon: 'boxes' },
  ],
  edges: [
    { source: 'facts', target: 'dims', label: 'each fact keeps its own grain and measures, and shares the context' },
    { source: 'dims', target: 'grow', label: 'sharing them is what lets you drill ACROSS processes — the bus matrix is the plan, and the Jabra warehouse is exactly this shape' },
  ],
}

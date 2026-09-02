import type { Scene } from '../../render-engine'

// §2 step one — the useful teaching here is the NEGATIVE space: beginners pick a department or a
// dashboard, so the board puts the three common wrong answers beside the right one. The choice rule
// (value × readiness) is what turns "pick a process" from advice into a method.
export const pickProcess: Scene = {
  id: 'pick-process',
  title: 'Step 1 — pick the business process',
  nodes: [
    {
      id: 'is',
      label: 'A process is a measurable ACTIVITY',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'is-order', label: 'Taking an order', pattern: 'service', icon: 'receipt' },
        { id: 'is-ship', label: 'Shipping a parcel', pattern: 'service', icon: 'workflow' },
        { id: 'is-pay', label: 'Settling a payment', pattern: 'service', icon: 'receipt' },
      ],
    },
    {
      id: 'isnt',
      label: 'It is NOT any of these',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'no-dept', label: 'A department', sub: '"Marketing"', pattern: 'warn', icon: 'building' },
        { id: 'no-report', label: 'A report', sub: '"the Monday numbers"', pattern: 'warn', icon: 'scroll' },
        { id: 'no-dash', label: 'A dashboard', sub: 'a consumer, not a process', pattern: 'warn', icon: 'barchart' },
      ],
    },
    {
      id: 'choose',
      label: 'How to choose — value × data readiness',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ch-value', label: 'Value', sub: 'the most pressing questions', pattern: 'user', icon: 'gauge' },
        { id: 'ch-ready', label: 'Readiness', sub: 'available, clean, understood', pattern: 'user', icon: 'circlecheck' },
      ],
    },
    { id: 'ours', label: 'Our worked process', sub: '"a customer places a sales order" → FACT_SALES', pattern: 'storage', icon: 'sigma' },
  ],
  edges: [
    { source: 'is', target: 'isnt', label: 'one process becomes one fact table — modelling "everything" at once is how designs collapse' },
    { source: 'isnt', target: 'choose' },
    { source: 'choose', target: 'ours' },
  ],
}

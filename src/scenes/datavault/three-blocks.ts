import type { Scene } from '../../render-engine'

// §2 the three building blocks — the core board of the course, and the one that has to be a real
// GRAPH: hubs anchored, links between them, satellites hanging off both. Everything in §3-§6 is a
// zoom into one node type here, so the ids are stable and the shape is worth getting right.
export const threeBlocks: Scene = {
  id: 'three-blocks',
  title: 'Hubs · links · satellites',
  nodes: [
    {
      id: 'concerns',
      label: 'One concern each',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'c-hub', label: 'Hub = identity', sub: '"this customer exists"', pattern: 'storage', icon: 'fingerprint' },
        { id: 'c-link', label: 'Link = relationship', sub: '"…placed this order"', pattern: 'service', icon: 'link' },
        { id: 'c-sat', label: 'Satellite = context', sub: 'attributes, measures, history', pattern: 'user', icon: 'layers' },
      ],
    },
    {
      id: 'graph',
      label: 'The Jabra vault, wired up',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'g-satcust', label: 'SatCustomer', sub: 'name · segment · city', pattern: 'user', icon: 'layers' },
        { id: 'g-hubcust', label: 'HubCustomer', sub: 'customer_id', pattern: 'storage', icon: 'fingerprint' },
        { id: 'g-linkoc', label: 'Link', sub: 'LinkOrderCustomer', pattern: 'service', icon: 'link' },
        { id: 'g-huborder', label: 'HubOrder', sub: 'order_id', pattern: 'storage', icon: 'fingerprint' },
        { id: 'g-linkline', label: 'LinkOrderLine', sub: 'the sale-line grain', pattern: 'service', icon: 'link' },
        { id: 'g-hubprod', label: 'HubProduct', sub: 'product_id', pattern: 'storage', icon: 'fingerprint' },
        { id: 'g-satmeas', label: 'Sat measures', sub: 'SatSalesMeasures', pattern: 'user', icon: 'sigma' },
      ],
      edges: [
        { source: 'g-hubcust', target: 'g-satcust' },
        { source: 'g-hubcust', target: 'g-linkoc' },
        { source: 'g-linkoc', target: 'g-huborder' },
        { source: 'g-huborder', target: 'g-linkline' },
        { source: 'g-linkline', target: 'g-hubprod' },
        { source: 'g-linkline', target: 'g-satmeas' },
      ],
    },
    {
      id: 'evolve',
      label: 'Why split it three ways — each changes ALONE',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'e-attr', label: 'New attribute', sub: 'a new satellite', pattern: 'user', icon: 'layers' },
        { id: 'e-rel', label: 'New relationship', sub: 'a new link', pattern: 'service', icon: 'link' },
        { id: 'e-ent', label: 'New entity', sub: 'a new hub', pattern: 'storage', icon: 'fingerprint' },
      ],
    },
  ],
  edges: [
    { source: 'concerns', target: 'graph' },
    { source: 'graph', target: 'evolve', label: 'ADD, never restructure — that single property is where all the agility comes from' },
  ],
}

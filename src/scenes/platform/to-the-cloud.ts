import type { Scene } from '../../render-engine'

// §1 why the cloud — the on-prem appliance is the thing to picture first, because every cloud
// property is an answer to one of its constraints. The closing card is the course's thesis: the
// tuning vocabulary changes completely, and the B-tree index stops being the tool you reach for.
export const toTheCloud: Scene = {
  id: 'to-the-cloud',
  title: 'From a big fixed box',
  nodes: [
    {
      id: 'oldbox',
      label: 'The on-prem appliance',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ob-peak', label: 'Sized for peak', sub: 'and idle the rest of the time', pattern: 'warn', icon: 'gauge' },
        { id: 'ob-buy', label: 'Scaled by buying', sub: 'more hardware, months ahead', pattern: 'warn', icon: 'harddrive' },
        { id: 'ob-capex', label: 'Capex', sub: 'paid up front, whatever you use', pattern: 'warn', icon: 'receipt' },
      ],
    },
    {
      id: 'cloud',
      label: 'What the cloud changed',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cl-elastic', label: 'Elasticity', sub: 'scale on demand, pay for use', pattern: 'storage', icon: 'zap' },
        { id: 'cl-sep', label: 'Compute ≠ storage', sub: 'cheap storage, compute on demand', pattern: 'storage', icon: 'scissors' },
        { id: 'cl-mpp', label: 'MPP underneath', sub: 'billions of rows, in parallel', pattern: 'storage', icon: 'boxes' },
        { id: 'cl-managed', label: 'Fully managed', sub: 'no patching, no index tuning', pattern: 'storage', icon: 'shieldcheck' },
        { id: 'cl-opex', label: 'Opex', sub: 'billed per query, or per second', pattern: 'storage', icon: 'receipt' },
      ],
    },
    { id: 'shape', label: 'The modern shape', sub: 'cloud · MPP · columnar', pattern: 'user', icon: 'cloud' },
    { id: 'swap', label: 'The tuning changes', sub: 'no more B-tree indexes', pattern: 'service', icon: 'wrench' },
  ],
  edges: [
    { source: 'oldbox', target: 'cloud', label: 'every one of these is an answer to a constraint of the box above' },
    { source: 'cloud', target: 'shape', label: 'compute separated from storage' },
    { source: 'shape', target: 'swap', label: 'you tune with distribution, clustering, pruning and caching instead' },
  ],
}

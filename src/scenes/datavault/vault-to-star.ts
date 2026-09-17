import type { Scene } from '@graphlearning/flow'

// §9 the information mart — the claim is that the mapping is MECHANICAL, so the board is the mapping
// itself, table-shaped. It is also the moment this course reconnects to the previous five: the thing
// on the right of every row is something the learner already built by hand in modules 03-05.
export const vaultToStar: Scene = {
  id: 'vault-to-star',
  title: 'From vault to star',
  nodes: [
    {
      id: 'mapping',
      label: 'The mapping is mechanical',
      kind: 'table',
      pattern: 'service',
      headers: ['In the vault', 'Becomes', 'Example'],
      values: [
        ['Hub + satellite(s)', 'a Dimension', 'HubCustomer + SatCustomer → DIM_CUSTOMER'],
        ['Link + measure satellite', 'a Fact', 'LinkOrderLine + SatSalesMeasures → FACT_SALES'],
        ['Reference table', 'a small Dimension', 'RefDate → DIM_DATE'],
      ],
    },
    {
      id: 'free',
      label: 'What falls out of it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'fr-scd', label: 'SCD-2 for free', sub: "the satellite's load_date IS the history", pattern: 'storage', icon: 'history' },
        { id: 'fr-grain', label: 'Grain is settled', sub: 'the link grain IS the fact grain', pattern: 'storage', icon: 'ruler' },
      ],
    },
    {
      id: 'how',
      label: 'Virtual or materialised',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'hw-views', label: 'Often just views', sub: 'virtual, and always live', pattern: 'service', icon: 'code' },
        { id: 'hw-mat', label: 'Or materialised', sub: 'a rebuild, when volume demands', pattern: 'service', icon: 'harddrive' },
      ],
    },
    { id: 'payoff', label: 'The payoff', sub: 'many marts from ONE vault', pattern: 'user', icon: 'star' },
  ],
  edges: [
    { source: 'mapping', target: 'free' },
    { source: 'free', target: 'how' },
    { source: 'how', target: 'payoff', label: 'rebuild any mart at any time, as of any point in time — and never re-source a thing to do it' },
  ],
}

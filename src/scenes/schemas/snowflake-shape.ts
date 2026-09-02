import type { Scene } from '../../render-engine'

// §4 the snowflake — literally §3 run backwards, so the chain reappears, this time as the SCHEMA
// rather than as the thing being avoided. The outrigger is drawn separately because it is the one
// snowflake that is usually a good idea: a shared sub-dimension maintained in one place.
export const snowflakeShape: Scene = {
  id: 'snowflake-shape',
  title: 'The snowflake schema',
  nodes: [
    {
      id: 'chain',
      label: 'A star whose dimensions are normalized',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'sn-fact', label: 'FACT_SALES', pattern: 'storage', icon: 'sigma' },
        { id: 'sn-prod', label: 'DIM_PRODUCT', pattern: 'service', icon: 'package' },
        { id: 'sn-cat', label: 'DIM_CATEGORY', pattern: 'external', icon: 'boxes' },
        { id: 'sn-line', label: 'DIM_PRODUCT_LINE', pattern: 'external', icon: 'layers' },
      ],
      edges: [
        { source: 'sn-fact', target: 'sn-prod' },
        { source: 'sn-prod', target: 'sn-cat' },
        { source: 'sn-cat', target: 'sn-line' },
      ],
    },
    {
      id: 'outrigger',
      label: 'The outrigger — the good snowflake',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'og-ship', label: 'FACT_SHIPMENT', pattern: 'storage', icon: 'workflow' },
        { id: 'og-wh', label: 'DIM_WAREHOUSE', pattern: 'service', icon: 'warehouse' },
        { id: 'og-geo', label: 'DIM_GEOGRAPHY', sub: 'shared — maintained once', pattern: 'user', icon: 'globe' },
      ],
      edges: [
        { source: 'og-ship', target: 'og-wh' },
        { source: 'og-wh', target: 'og-geo' },
      ],
    },
    {
      id: 'ledger',
      label: 'What it saves, what it costs',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lg-save', label: 'Saves', sub: 'less redundancy, less storage', pattern: 'service', icon: 'harddrive' },
        { id: 'lg-cost', label: 'Costs', sub: 'more joins, complex SQL, slower', pattern: 'warn', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'chain', target: 'outrigger', label: 'dimensions sprout sub-dimensions until the diagram looks like a snowflake' },
    { source: 'outrigger', target: 'ledger' },
  ],
}

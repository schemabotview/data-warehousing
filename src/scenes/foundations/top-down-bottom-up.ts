import type { Scene } from '../../render-engine'

// §9 Inmon vs Kimball — the disagreement is about WHERE YOU START, so the two lanes run the same
// three boxes in opposite directions. Each lane ends on its own risk, and the band underneath is the
// modern answer, which is neither lane pure.
export const topDownBottomUp: Scene = {
  id: 'top-down-bottom-up',
  title: 'Top-down vs bottom-up',
  nodes: [
    {
      id: 'inmon',
      label: 'Inmon — top-down',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'i-src', label: 'Sources', pattern: 'external', icon: 'database' },
        { id: 'i-edw', label: 'Enterprise DW FIRST', sub: 'normalised, integrated core', pattern: 'service', icon: 'warehouse' },
        { id: 'i-marts', label: 'Marts derived', sub: 'consistent by construction', pattern: 'user', icon: 'chartpie' },
        { id: 'i-cost', label: 'Slower up front', sub: 'heavier to start', pattern: 'warn', icon: 'clock' },
      ],
      edges: [
        { source: 'i-src', target: 'i-edw' },
        { source: 'i-edw', target: 'i-marts' },
        { source: 'i-marts', target: 'i-cost' },
      ],
    },
    {
      id: 'kimball',
      label: 'Kimball — bottom-up',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'k-src', label: 'Sources', pattern: 'external', icon: 'database' },
        { id: 'k-marts', label: 'Dimensional marts FIRST', sub: 'a star per business process', pattern: 'service', icon: 'star' },
        { id: 'k-edw', label: 'Warehouse EMERGES', sub: 'the union of the stars', pattern: 'storage', icon: 'warehouse' },
        { id: 'k-cost', label: 'Needs conformed dims', sub: 'or you get silos', pattern: 'warn', icon: 'merge' },
      ],
      edges: [
        { source: 'k-src', target: 'k-marts' },
        { source: 'k-marts', target: 'k-edw' },
        { source: 'k-edw', target: 'k-cost' },
      ],
    },
    { id: 'hybrid', label: 'Usually hybrid', sub: 'an integrated core feeding stars', pattern: 'service', icon: 'workflow' },
  ],
  edges: [
    { source: 'inmon', target: 'kimball', label: 'same three boxes — opposite starting end' },
    { source: 'kimball', target: 'hybrid', label: 'most real builds take both: an Inmon or Data Vault core feeding Kimball stars for BI' },
  ],
}

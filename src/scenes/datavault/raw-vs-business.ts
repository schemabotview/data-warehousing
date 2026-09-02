import type { Scene } from '../../render-engine'

// §7 raw vs business vault — one question splits them ("has a business rule been applied?"), and the
// consequence is the part worth drawing: because rules live in a separate layer, changing a rule
// rebuilds that layer and the raw vault never moves. That is what keeps the audit claim true.
export const rawVsBusiness: Scene = {
  id: 'raw-vs-business',
  title: 'Raw vault vs business vault',
  nodes: [
    { id: 'question', label: 'One question splits them', sub: 'has a business rule been applied?', pattern: 'user', icon: 'search' },
    {
      id: 'layers',
      label: 'Two layers, same hub / link / satellite shapes',
      pattern: 'group',
      children: [
    {
      id: 'raw',
      label: 'Raw vault — data as it ARRIVED',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rw-verbatim', label: 'Verbatim', sub: 'no rules, no cleansing', pattern: 'storage', icon: 'lock' },
        { id: 'rw-immutable', label: 'Never overwritten', sub: 'the system of record', pattern: 'storage', icon: 'shieldcheck' },
        { id: 'rw-proof', label: 'Proof', sub: 'what a source said, and when', pattern: 'storage', icon: 'scroll' },
      ],
    },
    {
      id: 'business',
      label: 'Business vault — where the RULES live',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'bv-sat', label: 'Computed sats', sub: 'cleansed address · margin', pattern: 'service', icon: 'funnel' },
        { id: 'bv-link', label: 'Derived links', sub: 'relationships a rule infers', pattern: 'service', icon: 'link' },
        { id: 'bv-kpi', label: 'KPIs', sub: 'agreed business measures', pattern: 'service', icon: 'gauge' },
      ],
    },
      ],
    },
    { id: 'payoff', label: 'Rules change', sub: 'the raw vault never moves', pattern: 'user', icon: 'repeat' },
  ],
  edges: [
    { source: 'question', target: 'layers', label: 'no → it belongs in the raw vault · yes → it belongs in the business vault' },
    { source: 'layers', target: 'payoff', label: 'rebuild the business layer when a rule changes — which is exactly why the audit trail survives' },
  ],
}

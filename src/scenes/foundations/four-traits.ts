import type { Scene } from '@graphlearning/flow'

// §2 what it IS — Inmon's four traits are a DEFINITION, so the scene is the definition itself: one
// warehouse box holding the four properties as tiles. Each tile carries the consequence, not just
// the adjective, because the adjective alone teaches nothing.
export const fourTraits: Scene = {
  id: 'four-traits',
  title: "Inmon's four traits",
  nodes: [
    {
      id: 'dw-def',
      label: 'A data warehouse is…',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 't-subject', label: 'Subject-oriented', sub: 'around sales, customers — not apps', pattern: 'service', icon: 'package' },
        { id: 't-integrated', label: 'Integrated', sub: 'one currency, date & definition', pattern: 'service', icon: 'merge' },
        { id: 't-time', label: 'Time-variant', sub: 'keeps history — quarter vs last year', pattern: 'service', icon: 'history' },
        { id: 't-nonvol', label: 'Non-volatile', sub: 'loads add; they do not overwrite', pattern: 'service', icon: 'lock' },
      ],
    },
    {
      id: 'kinds',
      label: 'The three shapes it ships in',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'k-edw', label: 'Enterprise DW', sub: 'the whole organisation', pattern: 'storage', icon: 'warehouse' },
        { id: 'k-mart', label: 'Data mart', sub: 'one department', pattern: 'storage', icon: 'chartpie' },
        { id: 'k-cloud', label: 'Cloud DW', sub: 'BigQuery · Redshift · Snowflake', pattern: 'storage', icon: 'cloud' },
      ],
    },
  ],
  edges: [{ source: 'dw-def', target: 'kinds', label: 'the same four traits, at three scales' }],
}

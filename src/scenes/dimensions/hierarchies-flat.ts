import type { Scene } from '../../render-engine'

// §2 attributes & hierarchies — a hierarchy is a natural roll-up PATH, so the three real paths are
// drawn as chains. The teaching point is the last band: the path is real, but it is stored FLAT, as
// columns on one row, so every drill level stays one hop from the fact.
export const hierarchiesFlat: Scene = {
  id: 'hierarchies-flat',
  title: 'Hierarchies, stored flat',
  nodes: [
    {
      id: 'paths',
      label: 'Natural roll-up paths',
      pattern: 'group',
      children: [
        {
          id: 'h-product', label: 'Product', pattern: 'group', flow: 'LR',
          children: [
            { id: 'hp-1', label: 'product', pattern: 'external', icon: 'package' },
            { id: 'hp-2', label: 'category', pattern: 'external', icon: 'boxes' },
            { id: 'hp-3', label: 'product_line', pattern: 'external', icon: 'layers' },
          ],
          edges: [{ source: 'hp-1', target: 'hp-2' }, { source: 'hp-2', target: 'hp-3' }],
        },
        {
          id: 'h-date', label: 'Date', pattern: 'group', flow: 'LR',
          children: [
            { id: 'hd-1', label: 'day', pattern: 'external', icon: 'calendar' },
            { id: 'hd-2', label: 'month', pattern: 'external', icon: 'calendar' },
            { id: 'hd-3', label: 'quarter', pattern: 'external', icon: 'calendar' },
            { id: 'hd-4', label: 'year', pattern: 'external', icon: 'calendar' },
          ],
          edges: [{ source: 'hd-1', target: 'hd-2' }, { source: 'hd-2', target: 'hd-3' }, { source: 'hd-3', target: 'hd-4' }],
        },
      ],
    },
    {
      id: 'flat',
      label: 'DIM_PRODUCT — the whole path on ONE row',
      sub: 'drill down and roll up without leaving the table',
      kind: 'table',
      pattern: 'storage',
      headers: ['product', 'category', 'product_line', 'brand'],
      values: [['Evolve2 65', 'Headset', 'Headsets', 'Jabra']],
    },
    { id: 'snow', label: 'Split it up', sub: 'and you have snowflaked — module 05', pattern: 'warn', icon: 'snowflake' },
  ],
  edges: [
    { source: 'paths', target: 'flat', label: 'the hierarchy is real, but it is STORED as flat columns — every level stays one hop from the fact' },
    { source: 'flat', target: 'snow' },
  ],
}

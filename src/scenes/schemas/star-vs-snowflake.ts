import type { Scene } from '../../render-engine'

// §5 the trade-off — seven axes that all move together when you turn ONE dial (how normalized the
// dimensions are), which is why the table is the right form and why the dial is drawn above it. The
// verdict is not neutral, and the board says so: the star wins by default, the snowflake by reason.
export const starVsSnowflake: Scene = {
  id: 'star-vs-snowflake',
  title: 'One dial, seven consequences',
  nodes: [
    {
      id: 'dial',
      label: 'The dial: how normalized are the dimensions?',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'dl-star', label: 'Star', sub: 'flat dimensions', pattern: 'service', icon: 'star' },
        { id: 'dl-snow', label: 'Snowflake', sub: 'multi-level dimensions', pattern: 'external', icon: 'snowflake' },
      ],
      edges: [{ source: 'dl-star', target: 'dl-snow', label: 'turn it', bidirectional: true }],
    },
    {
      id: 'table',
      label: 'Everything else follows',
      kind: 'table',
      pattern: 'external',
      headers: ['Aspect', 'Star', 'Snowflake'],
      values: [
        ['Joins', 'fewer', 'more'],
        ['Query speed', 'faster', 'slower'],
        ['Complexity', 'low', 'high'],
        ['Redundancy', 'more', 'less'],
        ['Storage', 'more', 'less'],
        ['Design', 'top-down', 'bottom-up'],
      ],
    },
    {
      id: 'verdict',
      label: 'Which usually wins',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'vd-star', label: 'The star', sub: 'storage is cheap; analyst time is not', pattern: 'service', icon: 'star' },
        { id: 'vd-snow', label: 'Snowflake by reason', sub: 'a huge sub-tree · a shared outrigger', pattern: 'warn', icon: 'snowflake' },
      ],
    },
  ],
  edges: [
    { source: 'dial', target: 'table' },
    { source: 'table', target: 'verdict', label: 'simplicity compounds — easy SQL, easy BI modelling, one shape to learn' },
  ],
}

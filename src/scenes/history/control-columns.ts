import type { Scene } from '../../render-engine'

// §5 the control columns — §4 showed them in passing; this board is about the INVARIANT they encode
// (a contiguous timeline, exactly one current row) and the two queries that invariant enables. The
// 9999-12-31 trick gets its own card because it is the detail that makes one BETWEEN work for every
// row, including the live one.
export const controlColumns: Scene = {
  id: 'control-columns',
  title: 'Three columns that make a timeline',
  nodes: [
    {
      id: 'cols',
      label: 'The three control columns',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cc-eff', label: 'effective_date', sub: 'the day this version began', pattern: 'service', icon: 'calendar' },
        { id: 'cc-exp', label: 'expiry_date', sub: 'the day it stopped', pattern: 'service', icon: 'calendar' },
        { id: 'cc-cur', label: 'is_current', sub: 'Y/N — marks the one live row', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'timeline',
      label: 'A contiguous timeline — no gaps, no overlaps',
      sub: 'the live row expires at 9999-12-31 rather than NULL, so one BETWEEN fits every row',
      kind: 'table',
      pattern: 'storage',
      headers: ['customer_key', 'city', 'effective', 'expiry', 'current'],
      values: [
        ['1101', 'Madrid', '2021-06-01', '2026-03-31', 'N'],
        ['1108', 'Barcelona', '2026-04-01', '9999-12-31', 'Y'],
      ],
    },
    {
      id: 'queries',
      kind: 'code',
      filename: 'the two questions it answers',
      label: [
        '-- the current version',
        "WHERE is_current = 'Y'",
        '',
        '-- the version as of any date D',
        'WHERE D BETWEEN effective_date AND expiry_date',
      ].join('\n'),
    },
  ],
  edges: [
    { source: 'cols', target: 'timeline' },
    { source: 'timeline', target: 'queries', label: 'the ETL invariant: exactly one current row per natural key, and a timeline with no hole in it' },
  ],
}

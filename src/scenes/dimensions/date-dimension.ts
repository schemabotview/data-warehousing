import type { Scene } from '@graphlearning/flow'

// §8 the date dimension — the argument to win is "why a table instead of MONTH()", and it is won by
// showing the columns a date FUNCTION cannot give you: is_holiday, fiscal_year, is_weekend. The row
// makes the YYYYMMDD surrogate concrete at the same time.
export const dateDimension: Scene = {
  id: 'date-dimension',
  title: 'DIM_DATE — the universal dimension',
  nodes: [
    {
      id: 'row',
      label: 'DIM_DATE',
      sub: 'grain: one calendar day · surrogate key is a YYYYMMDD integer, populated years ahead',
      kind: 'table',
      pattern: 'service',
      headers: ['date_key', 'full_date', 'month_name', 'quarter', 'year', 'is_holiday'],
      values: [['20260724', '2026-07-24', 'July', '3', '2026', 'false']],
    },
    {
      id: 'why',
      label: 'Why a table, and not MONTH()',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'wd-cal', label: 'Business calendar', sub: 'is_holiday · fiscal_year', pattern: 'service', icon: 'calendar' },
        { id: 'wd-label', label: 'Agreed labels', sub: 'every report says "July"', pattern: 'service', icon: 'tag' },
        { id: 'wd-ready', label: 'Ready attributes', sub: 'no date logic in the query', pattern: 'service', icon: 'circlecheck' },
        { id: 'wd-join', label: 'Integer joins', sub: 'on a 4-byte key', pattern: 'service', icon: 'zap' },
      ],
    },
    { id: 'both', label: 'Both at once', sub: 'conformed AND role-playing', pattern: 'user', icon: 'merge' },
  ],
  edges: [
    { source: 'row', target: 'why', label: 'a function knows the calendar; only a table knows YOUR calendar' },
    { source: 'why', target: 'both', label: 'shared by every fact, and joined three times over as order, ship and delivery date' },
  ],
}

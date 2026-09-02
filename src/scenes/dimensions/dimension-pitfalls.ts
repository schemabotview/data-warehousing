import type { Scene } from '../../render-engine'

// §10 pitfalls — a list of seven traps is the least interesting possible board, so the through-line
// carries it: nearly all of them are the same mistake (the dimension treated as an afterthought),
// and the fix band restates the course as five adjectives a good dimension has to earn.
export const dimensionPitfalls: Scene = {
  id: 'dimension-pitfalls',
  title: 'The traps, and the one root',
  nodes: [
    {
      id: 'traps',
      label: 'Seven ways to get a dimension wrong',
      kind: 'table',
      pattern: 'warn',
      headers: ['The trap', 'The fix'],
      values: [
        ['Too few attributes', 'be generous — columns are cheap'],
        ['Cryptic codes', 'store Returned, not RTN'],
        ['No surrogate key', 'ties you to the source, blocks SCD'],
        ['NULL foreign keys', 'use an Unknown member, key 0'],
        ['Premature snowflaking', 'keep it flat (module 05)'],
        ['Ignoring change', 'set an SCD policy per attribute'],
        ['Measures in a dimension', 'sum it? then it is a fact'],
      ],
    },
    { id: 'root', label: 'One root cause', sub: 'the dimension designed as an afterthought', pattern: 'warn', icon: 'bug' },
    {
      id: 'good',
      label: 'What a good dimension is',
      pattern: 'group',
      cols: 5,
      children: [
        { id: 'gd-rich', label: 'Rich', pattern: 'service', icon: 'layers' },
        { id: 'gd-label', label: 'Labelled', pattern: 'service', icon: 'tag' },
        { id: 'gd-key', label: 'Surrogate', pattern: 'service', icon: 'key' },
        { id: 'gd-flat', label: 'Flat', pattern: 'service', icon: 'table' },
        { id: 'gd-hist', label: 'History-aware', pattern: 'service', icon: 'history' },
      ],
    },
  ],
  edges: [
    { source: 'traps', target: 'root' },
    { source: 'root', target: 'good', label: 'the fact gets the attention because it holds the numbers — but the dimension is what the report is actually about' },
  ],
}

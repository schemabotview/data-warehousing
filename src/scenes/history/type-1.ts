import type { Scene } from '../../render-engine'

// §3 Type 1 — the mechanics are trivial (an UPSERT) and the CONSEQUENCE is the lesson: Ana's past
// sales silently move to Barcelona. So the board spends its space on the fact rows re-rolling up,
// not on the update statement. "The past is rewritten" has to be shown to land.
export const type1: Scene = {
  id: 'type-1',
  title: 'Type 1 — overwrite, and rewrite the past',
  nodes: [
    {
      id: 'before',
      label: 'Before',
      kind: 'table',
      pattern: 'external',
      headers: ['customer_key', 'customer_id', 'name', 'city'],
      values: [['1101', 'C-4471', 'Ana', 'Madrid']],
    },
    {
      id: 'after',
      label: 'After — same key, new value, old value gone',
      kind: 'table',
      pattern: 'storage',
      headers: ['customer_key', 'customer_id', 'name', 'city'],
      values: [['1101', 'C-4471', 'Ana', 'Barcelona']],
    },
    {
      id: 'consequence',
      label: 'What it does to every past fact',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cq-roll', label: 'Past sales move', sub: "all of Ana's history now says Barcelona", pattern: 'warn', icon: 'swap' },
        { id: 'cq-lost', label: 'A question you lose', sub: 'her city AT THE TIME of that sale', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    {
      id: 'right',
      label: 'When that is exactly right',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'rt-fix', label: 'Corrections', sub: 'never keep a wrong old value', pattern: 'service', icon: 'pencil' },
        { id: 'rt-asis', label: '"As-is" only', sub: 'nobody asks how it used to be', pattern: 'service', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [
    { source: 'before', target: 'after', label: 'mechanically just an UPSERT — the simplest and most common type' },
    { source: 'after', target: 'consequence' },
    { source: 'consequence', target: 'right' },
  ],
}

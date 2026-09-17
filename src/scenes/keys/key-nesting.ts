import type { Scene } from '@graphlearning/flow'

// §5 the four key terms — they are NESTED, not parallel, and that nesting is the whole lesson. So a
// real STUDENT table supplies the candidates, and the chain underneath walks the narrowing: any
// unique set → a minimal one → the one you choose → the ones you did not.
export const keyNesting: Scene = {
  id: 'key-nesting',
  title: 'Super → candidate → primary',
  nodes: [
    {
      id: 'student',
      label: 'STUDENT',
      sub: 'three columns each identify a student on their own',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'student_id', type: 'int', key: 'PK' },
        { name: 'email', type: 'varchar' },
        { name: 'roll_no', type: 'varchar' },
        { name: 'dept_id', type: 'int', key: 'FK' },
        { name: 'name', type: 'varchar' },
      ],
    },
    {
      id: 'narrowing',
      label: 'The same set, narrowed four times',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'k-super', label: 'Super key', sub: 'ANY unique set — extras allowed', pattern: 'external', icon: 'boxes' },
        { id: 'k-cand', label: 'Candidate key', sub: 'minimal — drop one and it breaks', pattern: 'service', icon: 'fingerprint' },
        { id: 'k-prim', label: 'Primary key', sub: 'the one you choose · NOT NULL', pattern: 'service', icon: 'key' },
        { id: 'k-alt', label: 'Alternate keys', sub: 'the candidates you did not pick', pattern: 'user', icon: 'tag' },
      ],
      edges: [
        { source: 'k-super', target: 'k-cand', label: 'remove every column you do not need' },
        { source: 'k-cand', target: 'k-prim', label: 'pick one' },
        { source: 'k-prim', target: 'k-alt', label: 'the rest' },
      ],
    },
    { id: 'applied', label: 'For STUDENT', sub: 'PK student_id · alternates email, roll_no', pattern: 'user', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'student', target: 'narrowing', label: 'candidates: student_id · email · roll_no' },
    { source: 'narrowing', target: 'applied' },
  ],
}

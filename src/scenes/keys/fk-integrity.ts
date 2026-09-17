import type { Scene } from '@graphlearning/flow'

// §7 foreign keys — a claim about a POINTER BETWEEN TABLES, so both tables are real and the edge is
// the FK itself. (Edges anchor to the node, never to a row, so the referenced columns are named in
// the edge label instead of drawn column-to-column.) The two rules below are what the pointer buys.
export const fkIntegrity: Scene = {
  id: 'fk-integrity',
  title: 'Foreign keys & referential integrity',
  nodes: [
    {
      id: 'student',
      label: 'STUDENT',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'id', type: 'int', key: 'PK' },
        { name: 'name', type: 'varchar' },
        { name: 'dept_id', type: 'int', key: 'FK' },
      ],
    },
    {
      id: 'dept',
      label: 'DEPARTMENT',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'dept_id', type: 'int', key: 'PK' },
        { name: 'dept_name', type: 'varchar' },
      ],
    },
    {
      id: 'rules',
      label: 'What the database then guarantees',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'r-orphan', label: 'No orphan insert', sub: 'the parent must exist first', pattern: 'service', icon: 'shieldcheck' },
        { id: 'r-dangle', label: 'No dangling delete', sub: 'you cannot strand a child row', pattern: 'service', icon: 'ban' },
        { id: 'r-trust', label: 'Joins can be trusted', sub: 'every FK value resolves', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    { id: 'dw', label: 'In the warehouse', sub: 'FKs often unenforced — the ETL guarantees it', pattern: 'user', icon: 'funnel' },
  ],
  edges: [
    { source: 'student', target: 'dept', label: 'STUDENT.dept_id REFERENCES DEPARTMENT.dept_id' },
    { source: 'dept', target: 'rules' },
    { source: 'rules', target: 'dw', label: 'a star is fact FKs → dimension PKs, resolved by lookup at load time rather than enforced per row' },
  ],
}

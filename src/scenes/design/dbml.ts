import type { Scene } from '@graphlearning/flow'

// §10 DBML — the course ends by writing the model down, so the board is the notation itself and then
// how to read it. The argument for text over a drawing tool is the one that matters to an engineer:
// it diffs, it reviews, and it still renders an ERD.
export const dbml: Scene = {
  id: 'dbml',
  title: 'Writing the model down',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'jabra-spain-dw-model.dbml',
      label: [
        'Table FactSales {',
        '  sales_key      integer [primary key]',
        '  customer_key   integer [not null]',
        "  order_id       integer [note: 'degenerate dimension']",
        '  quantity       integer',
        '  line_total     decimal(12,2)',
        '}',
        '',
        'Ref: FactSales.customer_key > DimCustomer.customer_key',
      ].join('\n'),
    },
    {
      id: 'read',
      label: 'How to read it',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'rd-table', label: 'Table { }', sub: 'a table — one line per column', pattern: 'service', icon: 'table' },
        { id: 'rd-pk', label: '[primary key]', sub: 'the surrogate PK', pattern: 'service', icon: 'key' },
        { id: 'rd-note', label: '[note]', sub: 'intent, recorded in the model', pattern: 'service', icon: 'scroll' },
        { id: 'rd-ref', label: 'Ref: … > …', sub: 'one edge of the star, FK → PK', pattern: 'user', icon: 'link' },
      ],
    },
    {
      id: 'why',
      label: 'Why text, and not a drawing tool',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wy-diff', label: 'It diffs', sub: 'reviewed like code', pattern: 'storage', icon: 'gitbranch' },
        { id: 'wy-single', label: 'One source', sub: 'of the physical model', pattern: 'storage', icon: 'lock' },
        { id: 'wy-render', label: 'It still draws', sub: 'renders an ERD on dbdiagram.io', pattern: 'storage', icon: 'star' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'read' },
    { source: 'read', target: 'why' },
  ],
}

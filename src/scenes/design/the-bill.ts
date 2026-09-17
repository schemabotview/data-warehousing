import type { Scene } from '@graphlearning/flow'

// §6 the worked example — the centrepiece of the course. The bill is drawn as the real document,
// because the whole method reduces to one pass over it tagging each field A or M, and that pass IS
// steps 3 and 4. The trap gets its own card: price is numeric and is still an attribute.
export const theBill: Scene = {
  id: 'the-bill',
  title: 'One pass over a bill',
  nodes: [
    {
      id: 'bill',
      label: 'Order #4471 · 2026-04-12 · Web · SPRING10 · Ana Ruiz (C-4471)',
      sub: 'a Jabra order invoice, exactly as it arrives',
      kind: 'table',
      pattern: 'external',
      headers: ['Product', 'Price', 'Qty', 'Subtotal', 'Tax'],
      values: [
        ['Evolve2 65 (P-88)', '600.00', '2', '1,200.00', '252.00'],
        ['Elite 8 (P-91)', '300.00', '1', '300.00', '63.00'],
      ],
    },
    {
      id: 'tag',
      label: 'Tag every field — Attribute or Measure',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tg-a', label: 'A — attributes', sub: 'date · customer · product · price', pattern: 'user', icon: 'tag' },
        { id: 'tg-m', label: 'M — measures', sub: 'quantity · subtotal · tax', pattern: 'storage', icon: 'sigma' },
      ],
    },
    { id: 'trap', label: 'The trap', sub: 'price is a number you never sum', pattern: 'warn', icon: 'scale' },
    {
      id: 'becomes',
      label: 'And that one pass IS steps 3 and 4',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'bc-dims', label: 'Attributes → dimensions', pattern: 'user', icon: 'layers' },
        { id: 'bc-fact', label: 'Measures → the fact', pattern: 'storage', icon: 'sigma' },
      ],
    },
  ],
  edges: [
    { source: 'bill', target: 'tag' },
    { source: 'tag', target: 'trap', label: 'the test is "do you AGGREGATE it?", never "is it numeric?"' },
    { source: 'trap', target: 'becomes' },
  ],
}

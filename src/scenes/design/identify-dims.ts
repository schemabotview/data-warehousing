import type { Scene } from '@graphlearning/flow'

// §4 step three — the method is five plain questions, so the board IS the five questions with their
// answers, which is more useful than a list of dimension names. The habits band is the part that
// carries modules 02, 04 and 06 forward into the design process.
export const identifyDims: Scene = {
  id: 'identify-dims',
  title: 'Step 3 — how do we describe an order line?',
  nodes: [
    {
      id: 'questions',
      label: 'Five questions, five dimensions',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'q-when', label: 'When?', sub: 'DIM_DATE', pattern: 'user', icon: 'calendar' },
        { id: 'q-who', label: 'Who bought?', sub: 'DIM_CUSTOMER', pattern: 'user', icon: 'users' },
        { id: 'q-what', label: 'What sold?', sub: 'DIM_PRODUCT', pattern: 'user', icon: 'package' },
        { id: 'q-where', label: 'How sold?', sub: 'DIM_CHANNEL — web, app, retail', pattern: 'user', icon: 'workflow' },
        { id: 'q-why', label: 'What deal?', sub: 'DIM_PROMOTION', pattern: 'user', icon: 'tag' },
      ],
    },
    {
      id: 'habits',
      label: 'Four habits, carried from the earlier courses',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'hb-sk', label: 'Surrogate-key it', sub: 'the fact will reference it', pattern: 'service', icon: 'key' },
        { id: 'hb-reuse', label: 'Reuse conformed', sub: 'never rebuild DIM_DATE', pattern: 'service', icon: 'merge' },
        { id: 'hb-generous', label: 'Be generous', sub: 'more attributes, more questions', pattern: 'service', icon: 'layers' },
        { id: 'hb-scd', label: 'Note SCD intent', sub: 'address → Type 2', pattern: 'service', icon: 'history' },
      ],
    },
  ],
  edges: [{ source: 'questions', target: 'habits', label: 'anything true at the order-line level can be a dimension — and the grain from step 2 is what decides that' }],
}

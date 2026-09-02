import type { Section } from '../types'

export const strongVsWeakEntities: Section = {
  id: 'strong-vs-weak-entities',
  title: 'Strong vs weak entities',
  scene: 'weak-entity',
  slide: `## Strong vs weak entities

Some tables stand on their own; others **borrow their parent's identity**. Which one you have tells you where composite keys belong.

### Strong entity — stands on its own

- **Independent existence** + its own primary key
- \`CUSTOMER\`, \`PRODUCT\`, \`DEPARTMENT\` — meaningful by itself

### Weak entity — can't exist alone

- **Depends on a parent** — an **order line** has no meaning without its **order**
- No key of its own — **parent key + local discriminator** (a *partial key*)
- Linked to the owner by a **foreign key** that's part of its identity

### Why it matters

- Tells you where a **composite key** + **mandatory FK** belong
- **Lifecycle coupling** — delete the parent, cascade to the children
- In a warehouse the weak table often **collapses into the fact's grain**
`,
  narration:
    "Strong versus weak entities. Foreign keys reveal that some tables depend on others just to make sense. That dependency splits real-world things into two kinds of entity. A strong entity has an independent existence and its own identifying key. A customer, a product, a department — each is meaningful all by itself, identified by its own primary key. Delete everything around it, and the entity still makes sense. A weak entity is the opposite: it depends on another entity for its existence, and often can't be uniquely identified without it. An order line has no meaning without its order. A payment installment has no meaning without its loan. A weak entity depends on a parent — its owner — and if you remove the parent, the child should go too. It usually lacks a key of its own, so it's identified by the parent's key plus a local discriminator — a partial key — which together form a composite key, like order i-d plus line number. And it's linked to its owner through a foreign key that is itself part of what identifies it. So picture an order table — strong, keyed by order i-d — and beneath it an order-line table — weak. The order line borrows the order i-d from its parent and adds a line number to tell its siblings apart. That's the signature of a weak entity: partial key plus parent key equals identity. Why does this matter for modeling? It tells you exactly where a composite key and a mandatory foreign key belong. And it signals lifecycle coupling — deleting a parent should cascade to its weak children. An order's lines die with the order. In the warehouse, this distinction softens. A weak entity's parent relationship often gets collapsed into the fact or a dimension, rather than kept as a separate dependent table. Order-line detail becomes the grain of the sales fact, with the order i-d riding along as a degenerate dimension — an identifier kept on the fact with no dimension table of its own. So the modeling instinct carries over, even when the literal weak-entity table does not — and we'll pick that thread up in the fact-table module.",
}

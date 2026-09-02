import type { Section } from '../types'

export const modelingFromABill: Section = {
  id: 'modeling-from-a-bill',
  title: 'Worked example — modeling from a bill',
  scene: 'the-bill',
  slide: `## Worked example — modeling from a bill

Take a real invoice and tag every field **A** or **M**. That single pass *is* steps 3 and 4 — attributes become dimensions, measures become the fact.

### The bill (a Jabra order invoice)

### Tag each field — **A**ttribute or **M**easure

- **A** — order id/date, customer, address, product, **price**, channel, promo
- **M** — **quantity**, **subtotal** (line_total), **tax**

### This one pass *is* steps 3 & 4

- **Attributes → dimensions** · **Measures → the fact**

### The trap it avoids

- **Price is an A** — a number, but you **don't sum** it (a rate)
- Test = "do you **aggregate** it?", not "is it numeric?"
`,
  narration:
    'Worked example — modeling from a bill. Now let\'s run all four steps on a real source document — a Jabra customer bill, an order invoice. A bill is perfect input: it\'s exactly what the business hands a customer, so it contains every field the sales process actually produces. So what\'s on the bill? At the top, the header: order number four-four-seven-one, dated the twelfth of April twenty twenty-six, channel Web, promo code SPRING-ten. The customer, Ana Ruiz, C-four-four-seven-one, shipping and billing to Barcelona. And then the lines: an Evolve2 65 headset, product P-88, at six hundred euros, quantity two, subtotal twelve hundred, tax two hundred fifty-two. And an Elite 8, product P-91, at three hundred, quantity one, subtotal three hundred, tax sixty-three. Now the technique: classify each field as either an Attribute or a Measure. Walk every field and tag it. A, for attribute — descriptive context you slice by. Or M, for measure — a number you sum. So: order i-d, attribute. Order date, attribute. Customer i-d and name, attribute. Shipping and billing address, attribute. Product i-d and name, attribute. Channel, attribute. Promo code, attribute. Price — attribute. And then the measures: quantity is an M. Subtotal — the line total — is an M. And tax is an M. Why does this single pass do the design? Because the A-versus-M split is steps three and four. The attributes become dimensions: you group the A fields by entity — the customer fields into dim customer, the product fields into dim product, and so on; section seven builds these. And the measures become the fact: the M fields are the fact\'s measures; section eight builds it. And notice the trap this test avoids. Price is an attribute, even though it\'s a number — because you don\'t sum prices; it\'s a rate. The test is "do you aggregate it?", not "is it numeric?" — the very same "sum it or slice by it" test from module four. Get that right, and the fact stays additive. So: classify every field on a real bill as Attribute or Measure. Attributes become dimensions; measures become the fact. One A-M pass turns a source document into a star — and flags rates like price as attributes, not measures.',
}

import type { Section } from '../types'

export const identifyTheDimensions: Section = {
  id: 'identify-the-dimensions',
  title: 'Step 3 — identify the dimensions',
  scene: 'identify-dims',
  slide: `## Step 3 — identify the dimensions

Ask how you would **describe** an order line — when, who, what, how, and on what deal. Five plain questions, five dimensions.

### Ask: how do we **describe** an order line?

- **When** sold? → **Date**
- **Who** bought? → **Customer**
- **What** sold? → **Product**
- **Where / how** sold? → **Channel** (Web, App, Amazon, Retail)
- **Why / what deal?** → **Promotion**

- Anything true **at the order-line level** can be a dimension

### Design habits

- **Surrogate key** each one (the fact will reference it)
- **Reuse conformed** dims — don't rebuild \`DIM_DATE\`
- **Be generous** — more dims & attributes = more questions answered
- Note **SCD intent** (customer address → Type 2, module 06)

`,
  narration:
    "Step three — identify the dimensions. With the grain fixed at one order line, step three asks a single question, and answers it many times: how do we describe an order line? Every distinct way to describe or slice it is a dimension. So run the mnemonic — who, what, when, where, why — against the grain, and for each one ask: does this make sense for one order line? When was it sold? That's the Date dimension. Who bought it? The Customer dimension. What was sold? The Product dimension. Where, or how, was it sold? The Channel dimension — Web, App, Amazon, Retail. And why, or under what deal? The Promotion dimension. Each answer is a dimension that attaches to the fact. And the grain guides the whole exercise: anything true at the order-line level can be a dimension; anything that isn't, can't. A few design habits ride along with this. Surrogate-key each one — every dimension gets its own key, from module four, which the fact will reference. Reuse conformed dimensions — don't build a brand-new dim date; point at the one the enterprise already shares. That's how this new star joins the galaxy. Be generous — more dimensions, and richer attributes within them, mean more questions you can answer; a thin set of dimensions is a thin warehouse. And decide SCD intent — note which attributes need history, like a customer address going Type 2, for later, in module six. So the result of step three, for the Jabra sales star, is five dimensions: Date, Customer, Product, Channel, and Promotion — each a table with a surrogate key, ready to be described, and, in step four, joined by the fact. So: step three describes the grain — ask who, what, when, where, and why of one order line, and each answer is a surrogate-keyed dimension. Reuse the conformed ones, and be generous — because dimensions are what you slice by.",
}

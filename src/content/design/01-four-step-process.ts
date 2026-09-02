import type { Section } from '../types'

export const fourStepProcess: Section = {
  id: 'four-step-process',
  title: "Kimball's 4-step design process",
  scene: 'four-steps',
  slide: `## Kimball's 4-step design process

You've met the parts. This is the disciplined, repeatable recipe that puts them together — four steps, **always in this order**, because each one constrains the next.

### The recipe — always in this order

1. **Pick the business process** — the activity to model
2. **Declare the grain** — what one fact row means
3. **Identify the dimensions** — how you slice it
4. **Identify the facts** — the measures you aggregate

### The order is not optional

- Each step **constrains the next**
- Can't list dims or facts until the **grain** is fixed
- Reorder → mixed grain, orphaned measures, mis-fit dims

### Design from the **business**, not the source

- Model a **process** the org measures (sales, shipments)
- Not a copy of the source system's tables

### This module

- Walk each step → work a real **bill** → build the star → read the **DBML**
`,
  narration:
    "Kimball's four-step design process. You've met the parts — facts, dimensions, grain, keys, slowly changing dimensions. This module puts them together. Faced with a blank page and a business, how do you actually design the model? Kimball's answer is a disciplined, repeatable recipe — four steps, always in this order. One: pick the business process — the operational activity you'll model. Two: declare the grain — what one fact row represents. Three: identify the dimensions — how you describe and slice it. And four: identify the facts — the measures you'll aggregate. And the order is not optional. Each step constrains the next, so they only work in sequence. You can't list dimensions or facts until the grain is fixed — because the grain is what tells you which attributes and measures are even valid at that level of detail. Skip or reorder a step, and the model wobbles: mixed grain, orphaned measures, dimensions that don't fit. Here's a subtle but central point: you design from the business, not the source. You model a business process the organisation cares about measuring — sales, shipments — not a copy of the source system's tables. The source is where the data comes from; the process is what you design around. That's exactly why step one is a business question, not a database question. So here's what this module does. We'll walk each of the four steps. Then we'll apply all four to a real source document — a customer bill — classifying its fields, building the dimensions and the fact, assembling the finished star, and finally reading it as D-B-M-L. It's the whole course made practical: modules three through six, turned into a checklist you can run on any process. So: Kimball's four steps — process, grain, dimensions, facts — turn modeling from art into a repeatable procedure. Run them in order, from the business process down, and a sound star falls out.",
}

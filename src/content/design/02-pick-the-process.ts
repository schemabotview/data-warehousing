import type { Section } from '../types'

export const pickTheProcess: Section = {
  id: 'pick-the-process',
  title: 'Step 1 — pick the business process',
  scene: 'pick-process',
  slide: `## Step 1 — pick the business process

A process is a measurable **activity** — not a department, a report, or a dashboard. One process becomes one fact table.

### A process = a measurable **activity**

- Taking a sales order · shipping a parcel · settling a payment
- **Not** a department, a report, or a dashboard

### One process → one fact table

- Build the warehouse **process by process**
- Conformed dims stitch the stars into a galaxy (module 05)
- Modeling "everything" at once = how designs collapse

### How to choose — **value × data readiness**

- **Value** — the most pressing questions (usually **sales**)
- **Readiness** — data available, clean, understood → an early win

### Our worked process

- **"A customer places a sales order"** → becomes \`FACT_SALES\`
`,
  narration:
    'Step one — pick the business process. The first step is to choose one business process to model. A business process is a real operational activity that produces measurable events — taking a sales order, shipping a parcel, settling a payment, counting stock. It is emphatically not a department, a report, or a dashboard; it\'s the activity that those things sit on top of. Why just one? Because each business process becomes one fact table — one star. That\'s the reason you pick one at a time: you build the warehouse process by process, and the shared conformed dimensions stitch the stars together into a galaxy, as we saw in module five. Trying to model "everything" at once is how designs collapse; modeling one clean process is how they succeed. So how do you choose which process? Pick by business value times data readiness. On value: start with the process that answers the organisation\'s most pressing questions — and for a retailer, that\'s almost always sales. On readiness: favour a process whose source data is available, clean, and well understood, so you get a win on the board early. And the classic first pick is sales orders — high value, familiar, and rich in dimensions. So for Jabra Spain, we\'ll model this: "a customer places a sales order." That process throws off an event every time a product is bought, and those events become the rows of what will be FACT SALES. Fixing the process now sets up everything downstream — the events we capture, and, next, the grain at which we capture them. So: step one picks a single operational process — sales orders — chosen for business value and clean data. One process becomes one fact table, and the warehouse grows one star at a time.',
}

import type { Section } from '../types'

export const whyADataWarehouseExists: Section = {
  id: 'why-a-data-warehouse-exists',
  title: 'Why a data warehouse exists',
  scene: 'two-questions',
  slide: `## Why a data warehouse exists

Your operational database answers one kind of question fast: **what is true right now**. The business needs the other kind — **what happened, over time, across everything**.

### Operational systems answer "now"

- Tuned for **tiny, constant reads & writes** — one order, one customer
- Heavy analytical scans **slow the business down**; data sits **siloed** across systems

### The warehouse answers "over time"

- A **central store** collecting from every source — cleaned **once**, **history kept**
- Built for **reading & analysis** (OLAP) — fast, and never touches production

### Why it pays off

- **Better decisions** · **efficiency** · **data quality** · **customer insight**
`,
  narration:
    "Why a data warehouse exists. Your operational databases are built to answer one kind of question, fast: what is true right now — for this order, this customer, this account. They are tuned for tiny, constant reads and writes, not for scanning years of history across millions of rows. But the business needs the other kind of question. What happened across everything, over time? Total sales by region last quarter. Which products sell together. How a customer's value changed year over year. Run a question like that on the live operational system, and you slow the business down — and even then, you still can't reach the data sitting in all the other systems beside it. A data warehouse exists to solve exactly this. It is a separate, central store. It collects data from every source system into one place, cleans and organizes it once, and keeps its history. And because it is built for reading and analysis instead of transactions, those heavy questions run fast — and they never touch production. And that is what it buys you: better decisions from one consistent, historical view; more efficient analysts who can self-serve; higher data quality, because everything is cleaned and reconciled on the way in; and deeper customer insight that no single application could reveal on its own.",
}

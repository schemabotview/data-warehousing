import type { Section } from '../types'

export const splittingTo3nf: Section = {
  id: 'splitting-to-3nf',
  title: 'Splitting to 3NF — a worked example',
  scene: 'split-to-3nf',
  slide: `## Splitting to 3NF — a worked example

One flat table, one transitive dependency, one split. Watch the anomalies disappear — and the **join** appear.

### Start — one flat table

### Spot the transitive dependency

- Key is **order** → \`cust_city\` depends on \`cust\`, and \`cust\` on \`order\`
- So city depends on the key only **through** \`cust\` — **3NF forbids this**

### Split it out

- **orders** — \`order, cust_id\` — keeps a **foreign key** link
- **customers** — \`cust_id, name, city\` — city written **once**

### What we gained

- **No update / insertion / deletion anomaly**
- Cost: reading "orders with city" now needs a **join** on \`cust_id\`
`,
  narration:
    "Splitting to third normal form — a worked example. Rules are easier to trust once you've applied them. So let's take one redundant table all the way to third normal form. We start with a flat order sheet. Each row is an order — but the customer's details ride along on every row. Order one, Ann, Delhi. Order two, Ann, Delhi again. Order three, Bob, Pune. The city gets repeated for every order a customer places. That's the redundancy that breeds our anomalies. Now spot the problem. The primary key is the order. Ask what each column really depends on. The customer depends on the order — fine, each order has one customer. But the city depends on the customer, and the customer depends on the order. So the city depends on the key only through the customer. That's a transitive dependency — exactly what third normal form forbids. So we split it. Move the customer facts into their own table, keyed by the customer, and leave a link behind in orders. The orders table now holds just the order and a customer i-d. The customers table holds the customer i-d, name, and city — and the city is written once per customer. Each order now stores a foreign key pointing at the one customer row. And look what we gained. No update anomaly — change Ann's city in a single row and every order sees it. No insertion anomaly — you can add a customer who hasn't ordered yet. No deletion anomaly — deleting an order no longer erases the customer. The catch is that one last point: to read orders together with their city, you now have to join the two tables back together. The normalized model is safe to write, but it needs joins to read. And for a warehouse running heavy analytical queries, those joins are exactly the cost we push back against — which is where denormalization comes in next.",
}

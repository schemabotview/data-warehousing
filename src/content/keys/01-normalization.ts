import type { Section } from '../types'

export const normalization: Section = {
  id: 'normalization',
  title: 'Normalization — why we split tables',
  scene: 'redundancy-anomalies',
  slide: `## Normalization — why we split tables

Store one fact in many places and the copies **drift apart**. Normalization is the discipline of writing each fact exactly **once**.

### The problem — redundancy

- One wide table repeats **Ann · Delhi** on every order row
- The same **fact stored in many places** — the copies can drift apart

### Three anomalies

- **Update** — Ann moves; miss one row and she's in two cities
- **Insertion** — can't add a customer until they place an order
- **Deletion** — remove her last order, erase that she existed

### The fix — one fact, one place

- **Split** into related tables linked by keys: **orders** + **customers**
- City lives in **one row** — the anomalies disappear
- Natural design for **OLTP** — safe writes; cost is **joins on read**
`,
  narration:
    "Normalization — why we split tables. Picture one wide table that records every order — and on each order row, it repeats the customer's name and city. Ann, Delhi. Ann, Delhi. Ann, Delhi. Her city is written three times over. That single choice creates three kinds of trouble. First, the update anomaly. Ann moves to Mumbai. Now you have to find and change every row that mentions her. Miss just one, and the table says she lives in two cities at once. The data contradicts itself. Second, the insertion anomaly. You can't even record a new customer until they place an order — because customer facts only exist on order rows. And third, the deletion anomaly. Delete Ann's last order, and you erase the only record that she ever existed. The root cause of all three is redundancy — the same fact stored in more than one place. When a fact lives in many places, the copies can drift apart, and the table can no longer be trusted. The fix is normalization: organizing tables to reduce redundancy and improve integrity, by splitting the data into related tables linked by keys. So each fact gets stored exactly once. An orders table records which customer placed each order. A separate customers table records each customer's city — one time. Now change Ann's city in that single row, and every order sees the new value automatically. The anomalies simply disappear. This is the natural design for transactional systems — banking, ordering, booking — where writes are constant and correctness is everything. The trade-off is that answering a question now means joining the tables back together, which costs read performance. Safe writes versus fast reads — that tension is the whole story of this module. We normalize to protect the data, and then, for the warehouse, we deliberately un-do it to make analysis fast.",
}

import type { Section } from '../types'

export const oltpVsOlap: Section = {
  id: 'oltp-vs-olap',
  title: 'OLTP vs OLAP — the two workloads',
  scene: 'oltp-vs-olap',
  slide: `## OLTP vs OLAP

One system **runs** the business, the other **analyses** it. They are opposite on every axis — which is why they cannot share a machine.

### Two different jobs

- **OLTP** — *runs* the business: tiny, constant transactions on **current** data
- **OLAP** — *analyzes* the business: big aggregate scans over **history**

### The four axes

- **Operations** — single-record writes · **large aggregate reads**
- **Data** — current & detailed · **historical & summarized**
- **Schema** — normalized 3NF · **denormalized star**

### Why separate

- Heavy analytics **competes with production** — one machine cannot be tuned both ways
- Each workload wants the **opposite physical design**, so each gets its own system
`,
  narration:
    "OLTP versus OLAP — the two workloads. Databases do two fundamentally different jobs, and a data warehouse exists because one database can't do both of them well. The first is O-L-T-P, online transaction processing. This is the system that runs the business, moment to moment. It records transactions: you place an order, update an account, book a seat. The work is many tiny, concurrent reads and writes, each touching just a few rows, and it has to be fast and correct right now. The second is O-L-A-P, online analytical processing. This is the system that analyzes the business. It answers big questions over lots of history — total revenue by region and quarter, year-over-year growth, which products sell together. The work is a few large, read-heavy queries that scan and aggregate millions of rows. Put them side by side and almost everything differs. O-L-T-P handles single-record writes on current, detailed data, in a highly normalized schema, for many app users. O-L-A-P runs large aggregate reads over historical, summarized data, in a denormalized star schema, for a handful of analysts. And that's why we keep them apart. Running heavy analytical scans on the transaction system competes for the same resources and slows the live application — and the two access patterns want opposite physical designs, normalized versus denormalized. So we copy data out of the O-L-T-P systems into a warehouse built for O-L-A-P, and let each do what it does best.",
}

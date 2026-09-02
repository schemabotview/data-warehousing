import type { Section } from '../types'

export const theLakehouse: Section = {
  id: 'the-lakehouse',
  title: 'The lakehouse — where the two converge',
  scene: 'lakehouse-stack',
  slide: `## The lakehouse

Warehouse-style **structure and management**, placed on top of cheap **lake storage** — so you stop keeping two copies of everything.

### One system, not two

- Warehouse-style **structure & management** placed **on cheap lake storage**
- Ends the copy-twice split between a separate lake and warehouse

### How

- Open columnar files (Parquet) + a **transactional table layer** — Delta · Iceberg · Hudi
- Brings **ACID**, **schema enforcement / evolution**, **time travel** to the lake

### Why it matters

- **BI + ML on one copy**; land raw then curate in place (ELT) — no separate warehouse
`,
  narration:
    "The lakehouse — where the two converge. A lakehouse is an architecture that puts warehouse-style structure and management directly on top of cheap lake storage — one system, instead of a separate lake and a separate warehouse. Start with the problem it solves. The classic split has real costs: you copy the data twice, once into the lake and again into the warehouse; the two copies drift apart; and you pay to store and move it more than once. What teams actually want is the lake's cheap, open, all-format storage and the warehouse's reliability, performance, and S-Q-L, at the same time. Here's how a lakehouse gets there. It keeps the data in open columnar files — like Parquet — on object storage, and it adds a transactional table layer on top: Delta Lake, Apache Iceberg, or Apache Hudi. That layer brings warehouse guarantees to the lake. You get ACID transactions, so concurrent reads and writes are reliable. You get schema enforcement and evolution — structure when you want it, changeable when you need it. You get time travel — query the table as it looked at an earlier version. And you get B-I and machine learning reading the same single copy of the data. Why does this matter? The lakehouse collapses schema-on-read versus schema-on-write into a spectrum on one store. You land raw data and then curate it in place with E-L-T, without ever copying it into a separate warehouse. It's the model behind platforms like Databricks and the open table formats.",
}

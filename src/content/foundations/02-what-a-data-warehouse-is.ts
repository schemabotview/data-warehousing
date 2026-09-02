import type { Section } from '../types'

export const whatADataWarehouseIs: Section = {
  id: 'what-a-data-warehouse-is',
  title: 'What a data warehouse is',
  scene: 'four-traits',
  slide: `## What a data warehouse is

Inmon's definition is four adjectives, and each one is a **design consequence** rather than a description.

### A central store for analysis

- Collects data from **many source systems** into **one place** — to **access, analyze & report**
- Built for **reading** (OLAP), not day-to-day transactions

### Inmon's four traits

- **Subject-oriented** — around sales, customers, products (not the apps)
- **Integrated** — one currency, date & definition, so figures reconcile
- **Time-variant** — keeps **history**; compare this quarter to last year
- **Non-volatile** — loaded then read; loads add, they don't overwrite

### At a glance

- **Built from** — sources → ETL → storage → metadata → marts → BI *(§04)*
- **Types** — Enterprise DW (whole org) · Data mart (one dept, §05) · Cloud DW — BigQuery · Redshift · Snowflake *(Mod 10)*
`,
  narration:
    "What a data warehouse is. A data warehouse is a central system that collects data from various source systems into a single location — making it easier to access, analyze, and report on the data. It is built for analysis and reporting rather than day-to-day transactions. The classic definition, from Bill Inmon, names four traits that set it apart from an operational database. First, it is subject-oriented. It is organized around the things the business analyzes — sales, customers, products — not around the individual applications that happened to produce the data. Second, it is integrated. Data arriving from many systems is cleaned and made consistent on the way in: one currency, one date format, one definition of a customer. So the numbers reconcile no matter which source they came from. Third, it is time-variant. It keeps history. Where an operational system simply overwrites the current value, the warehouse keeps the whole series — so you can compare this quarter against the same quarter last year. And fourth, it is non-volatile. Data is loaded and then read, not continuously changed in place. A load adds new data; it does not overwrite what is already there. So a report you run twice gives you the same answer both times. A warehouse is really a pipeline, not just a database. Data flows from the source systems, through E-T-L, into storage, described by metadata, and out to data marts and B-I tools. And warehouses come in a few shapes: an enterprise data warehouse serving the whole organization, a data mart scoped to a single department, and cloud data warehouses — like BigQuery, Redshift, and Snowflake — that scale elastically. We'll open up the components next.",
}

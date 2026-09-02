import type { Section } from '../types'

export const warehouseVsDataLake: Section = {
  id: 'warehouse-vs-data-lake',
  title: 'Warehouse vs data lake',
  scene: 'warehouse-vs-lake',
  slide: `## Warehouse vs data lake

Both store data at scale. They differ on **how processed it is when it lands** — and everything else follows from that one choice.

### Two ways to store at scale

- **Warehouse** — **structured, processed** data, modeled for analysis & BI
- **Lake** — **raw data**, native format (structured → unstructured), kept cheaply

### Side by side (warehouse · lake)

- **Schema** — schema-on-write · schema-on-read
- **Processing** — ETL (transform → load) · ELT (load → transform)
- **Users** — analysts & BI · data scientists & engineers
- **Cost / quality** — higher, curated · lower, raw

### When

- Warehouse when you **know the questions**; lake when you **don't yet** — many run both
`,
  narration:
    "Warehouse versus data lake. A data warehouse stores structured, processed data — cleaned, transformed, and modeled for analysis and business intelligence. A data lake stores raw data in its native format — structured, semi-structured, and unstructured — kept cheaply until someone needs it. Line them up and the differences are systematic. The warehouse uses schema-on-write: you define the structure up front, when you load. The lake uses schema-on-read: you define the structure later, when you query. The warehouse is loaded by E-T-L — transform, then load. The lake is loaded by E-L-T — load first, transform later. The warehouse serves business analysts and B-I; the lake serves data scientists and engineers. The warehouse costs more, because storage is curated and compute is bundled; the lake costs less, because it sits on cheap object storage. And the warehouse's data is high-quality and consistent, while the lake's is raw and variable. So when do you use which? Use a warehouse when you already know the questions — recurring reports, dashboards, trusted metrics. Use a lake when you don't yet — exploratory analytics, machine learning, or raw data you just want to keep now and shape later. In practice many organizations run both: raw data lands in the lake, and curated subsets flow into the warehouse.",
}

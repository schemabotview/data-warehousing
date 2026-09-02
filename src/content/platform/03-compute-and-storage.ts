import type { Section } from '../types'

export const computeAndStorage: Section = {
  id: 'compute-and-storage',
  title: 'Separation of compute & storage',
  scene: 'compute-storage',
  slide: `## Separation of compute & storage

One structural change — the data stops belonging to the cluster — and independent scaling, concurrent clusters and instant resize all fall out of it.

### Old: coupled · New: decoupled

- Traditional MPP — each node holds **both** → resize = redistribute data
- Data lives **once** in cheap storage; compute is **ephemeral**

### What it buys you

- **Scale independently** — compute or storage, not both
- **Concurrent clusters** over **one** dataset — ETL vs BI, no contention
- **Pay separately** — storage always; compute only while running
- **Instant resize** — no data movement

### In the platforms

- Snowflake **virtual warehouses** · BigQuery **serverless** (no clusters)
`,
  narration:
    "Separation of compute and storage. The defining cloud-native breakthrough is separating compute from storage. It sounds like plumbing — but it's what makes cloud warehouse economics and elasticity actually work. Consider the old coupling, and the new split. Traditional MPP coupled the two: each node held both the data — that's storage — and the processing — that's compute. So scaling one forced scaling the other. And resizing the cluster meant physically redistributing data across the nodes — which was slow and disruptive. Cloud warehouses decouple them. The data lives once, in cheap object storage — S3, Google Cloud Storage, Azure Blob — which is cheap and durable. And stateless compute clusters spin up on demand and read from that storage. Storage persists; compute is ephemeral. What does that buy you? Four things. First, scale independently — throw more compute at a heavy query without touching storage, and grow storage without paying for compute. Second, elastic, concurrent compute — run multiple independent clusters, often called virtual warehouses, over the same data; so you isolate workloads — ETL on one cluster, BI on another — with no contention between them. Third, pay separately — cheap storage is always on, but compute is billed only while it's running, and can even auto-suspend when idle. And fourth, instant resize — add or remove compute with no data movement, because the data never lived on the compute nodes in the first place. In the platforms: Snowflake popularised this model, with virtual warehouses over shared storage. And BigQuery goes even further, to serverless — there are no clusters to manage at all; compute is just allocated per query. This decoupling is exactly why you can give the ETL job and the dashboards their own separate compute, over one single copy of the Jabra warehouse. So: separating compute from storage puts data in cheap object storage and runs stateless compute on demand — so you scale each independently, run isolated concurrent clusters over one dataset, pay only for the compute you use, and resize instantly.",
}

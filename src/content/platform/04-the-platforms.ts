import type { Section } from '../types'

export const thePlatforms: Section = {
  id: 'the-platforms',
  title: 'The platforms — Snowflake, BigQuery, Redshift, Synapse',
  scene: 'platforms',
  slide: `## The platforms

All four are columnar, MPP and cloud, and all four run a star beautifully. What separates them is **how much tuning they expect from you**.

### All MPP + columnar · run stars beautifully

- **Snowflake** — multi-cloud · **virtual warehouses** · micro-partitions + auto-clustering · minimal tuning
- **BigQuery** — **serverless** (per-query slots) · partition + cluster cols · billed **per bytes scanned**
- **Redshift** — AWS · most **manual** — **DISTKEY + SORTKEY** · RA3 = compute/storage split
- **Synapse / Fabric** — Azure · explicit **distribution** (hash / round-robin / replicated)

### The common thread

- Columnar · MPP · cloud → a **star schema fits all**
- Axis of difference = **automatic vs manual** tuning
  - auto: Snowflake, BigQuery · explicit keys: Redshift, Synapse
- **Choose by** cloud · tuning appetite · pricing (per-second vs per-byte)
`,
  narration:
    'The platforms — Snowflake, BigQuery, Redshift, and Synapse. Four cloud warehouses dominate. All of them are MPP plus columnar, and all run star schemas beautifully. They differ mainly in how compute and storage are handled, and how much tuning you do. First, Snowflake. It\'s multi-cloud — it runs on AWS, Azure, and GCP. It has true compute-storage separation, with virtual warehouses — independent compute clusters over shared storage. Its data sits in micro-partitions, with automatic clustering, so there\'s minimal manual tuning. It\'s known for ease of use and workload isolation. Second, BigQuery, from Google. It\'s serverless — there are no clusters to size or manage; compute is allocated per query, in units called slots. It uses columnar storage, with partitioning and clustering columns that you declare. And its billing is per bytes scanned — which makes "scan less" a direct cost lever. Third, Redshift, from AWS. It\'s the most manually tuned of the four: you choose distribution keys and sort keys to control the data layout. Its RA3 nodes added compute-storage separation. And it integrates deeply with AWS. Fourth, Synapse, from Azure — formerly SQL Data Warehouse. It has explicit distribution strategies — hash, round-robin, and replicated. And it integrates with the Azure and Microsoft Fabric analytics stack. So what\'s the common thread? All of them are columnar, MPP, and cloud — which means a star schema is the right model on every one. The real axis of difference is automatic versus manual tuning: Snowflake and BigQuery automate the distribution and layout; Redshift and Synapse expose distribution and sort keys for hands-on control. And you choose between them by your cloud, your tuning appetite, and the pricing model — per-second compute versus per-byte scanned. So: Snowflake, BigQuery, Redshift, and Synapse are all MPP plus columnar, and all run stars well. They differ in compute-storage handling, and in how much you tune — automatic, for Snowflake and BigQuery, versus explicit distribution and sort keys, for Redshift and Synapse.',
}

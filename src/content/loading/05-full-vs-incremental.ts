import type { Section } from '../types'

export const fullVsIncremental: Section = {
  id: 'full-vs-incremental',
  title: 'Load — full vs incremental',
  scene: 'full-vs-incremental',
  slide: `## Load — full vs incremental

Reload everything, or only what changed? A sizing decision — and the **high-water mark** is what makes the incremental answer safe to re-run.

### Full load — truncate & reload **everything**

- **Simple** & **self-correcting** — rebuild fresh, drift washes out
- **Expensive** at scale — can't reload a billion rows nightly
- Use for **small dims & reference tables**

### Incremental load — only **new/changed** rows

- **Efficient, scalable** — touches only the delta
- More complex — must **know what changed** (CDC) + handle updates
- Use for **big facts & large dims**

### The high-water mark

- Track the **last-loaded timestamp/id**; next run pulls **beyond** it
- Advance **only on success** → safe re-run

### Facts append · dimensions merge

- Facts = **insert** new events · dims = **upsert/merge** (SCD-2, module 06)
`,
  narration:
    "Load — full versus incremental. Load is the final move: writing the transformed data into the warehouse tables. And the key decision is how much to write each run — the whole table, or only what changed. A full load truncates the target and reloads it entirely, every run. The pros: it's dead simple, and it's self-correcting — whatever the last state was, you rebuild it fresh, so drift and past errors just wash out. The cons: it's expensive and slow at scale — you can't truncate and reload a billion-row fact table every night. So use it for small dimensions and reference tables, where reloading everything is cheap. An incremental load writes only the new or changed rows since the last run. The pros: it's efficient and scalable, because it only touches the delta — which is essential for large facts. The cons: it's more complex — you have to know what changed, using change data capture, section six, and you have to handle updates, not just inserts. So use it for big fact tables and large dimensions. Incremental loading needs a bookmark, and that's the high-water mark. You track the last-loaded timestamp or i-d, and next run you pull only the rows beyond it. Crucially, you advance the mark only on success — and that's what makes a re-run safe, which is section nine. One more distinction: facts append, but dimensions merge. The two table types load differently. Facts are usually append-only inserts — a new event is simply a new row. Dimensions are upsert, or merge, because an existing member may change — and that's the SCD-2 merge from module six. Most warehouses mix both strategies: full for the small stuff, incremental for the big stuff. So: load writes transformed data to the warehouse — full, meaning truncate-and-reload, simple, for small tables; or incremental, only the delta, scalable, for big ones — tracked by a high-water mark. Facts append; dimensions merge.",
}

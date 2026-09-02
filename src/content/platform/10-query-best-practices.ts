import type { Section } from '../types'

export const queryBestPractices: Section = {
  id: 'query-best-practices',
  title: 'Query best practices — before → after case study',
  scene: 'before-after',
  slide: `## Query best practices — before → after

Two queries, the same answer, and one reads a fraction of what the other does. Write queries that **cooperate with the platform**.

### Habits that let the machinery work

- **Name columns, never \`SELECT *\`** — columnar pays per column
- **Filter on partition/cluster keys** — triggers pruning + zone maps
- **No function on a filter column** — it **defeats** pruning
- **Filter early, aggregate late** · **\`UNION ALL\`** when no dedup needed

### Before → after

- Same result, a **fraction** scanned → faster **and** cheaper

### The whole arc

- **Model** (03–08) → **load** (09) → **run on cloud MPP** (10) → **query well**
`,
  narration:
    'Query best practices — a before-and-after case study. The platform does a lot automatically — but a badly written query defeats all of it. So a few habits let the machinery — columnar, pruning, zone maps, caching — actually work. And one before-and-after makes the difference concrete. Here are the habits that matter. Name your columns, never select-star — columnar means you pay per column read, so ask for the two you need, not all twenty. Filter on partition or cluster keys — especially dates; this is what triggers pruning and zone-map skipping. Don\'t wrap a filter column in a function — "where order date is greater than or equal to the first of January twenty twenty-six" prunes; but "where year-of order date equals twenty twenty-six" defeats pruning, because the engine can\'t use the zone maps. Filter early, aggregate late, and join on keys — shrink the row set before the expensive work. Use union-all instead of union when you don\'t need deduplication — it skips a sort. And let the platform help — clustering, materialized views, the result cache. Now the before-and-after. The slow version: select-star from fact sales, where year-of order date equals twenty twenty-six. That reads every column, and the function on order date blocks partition pruning — so it\'s a full-table scan. The fast version: select just product key and line total, from fact sales, where order date is between the first of January and the thirty-first of December twenty twenty-six. That reads two columns, and the plain range lets the engine prune to twenty twenty-six\'s partitions. Same result — but a fraction of the data scanned, which is faster and cheaper, because the cloud bills by bytes scanned. And that closes the course. That\'s the whole arc: model a clean star, in modules three through eight; load it reliably, in module nine; run it on cloud MPP — columnar, pruned, cached — in module ten; and write queries that let all of that machinery do its job. So: write queries that cooperate with the platform — name your columns, filter on partition and cluster keys, and keep filters function-free so pruning works. Same answer, a fraction of the scan — the payoff of everything this course has built.',
}

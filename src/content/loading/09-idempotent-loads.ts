import type { Section } from '../types'

export const idempotentLoads: Section = {
  id: 'idempotent-loads',
  title: 'Idempotent & restartable loads',
  scene: 'idempotent',
  slide: `## Idempotent & restartable loads

Pipelines fail. The only question that matters is what a **re-run** does — and the answer should be *exactly what the first run would have done*.

#### Idempotent — safe to run twice

- Twice = same result as once · **no duplicates, no double-counts**
- **MERGE/upsert** on natural key (+ effective date) — not blind \`INSERT\`
- **Delete-then-insert a partition** — replaces, never appends
- **Deterministic (hash) keys** — duplicates collapse (module 07)

### Restartable — resume after failure

- **Staging** as a checkpoint — re-transform without re-extract
- **Per-step state** — resume at the first incomplete step
- **High-water mark advances only on success** — re-pull exactly the delta

### The operational backbone

- Failure becomes a **re-run**, not a hand-repair · same guarantee as the SCD-2 merge
`,
  narration:
    "Idempotent and restartable loads. Pipelines fail mid-run — a network blip, a bad file, a crashed node. What matters is what happens next time you run it. And two properties make failure survivable: idempotency, and restartability. First, idempotent — safe to run twice. A load is idempotent if running it twice produces the same result as running it once — no duplicate rows, no double-counted measures. Without it, a retry after a partial failure double-loads, and quietly corrupts every total. So how do you get idempotency? A few techniques. Use a MERGE, or upsert, keyed on the natural key — plus effective date for SCD-2, module six — instead of a blind insert; re-running just re-matches, it doesn't re-add. Or delete-then-insert a partition — reload today's partition wholesale, so re-running replaces it, never appends. Or use deterministic keys — a hash key, from module seven, is the same on every run, so duplicates collapse instead of multiplying. Second, restartable — resume after failure. A load is restartable if it can pick up from where it stopped, rather than redo everything. Three things enable that. Staging as a checkpoint — you re-run transforms from staged data, with no re-extract; section three. Per-step state — each step records success, so orchestration resumes at the first incomplete one; section ten. And the high-water mark advancing only on success — a failed run doesn't move the bookmark, so the next run re-pulls exactly the un-loaded delta; section five. Why is this the operational backbone? Because together, these turn a failure from a crisis into a re-run. You don't hand-repair half-loaded tables; you just launch the job again, and trust it to converge. And it's the same idempotency the SCD-2 merge relied on, back in module six — now made the whole pipeline's guarantee. So: make loads idempotent — re-running never duplicates, via merge, partition reload, or deterministic keys — and restartable — resume from staging and checkpoints, and advance the high-water mark only on success. Then a failure is just a safe re-run.",
}

import type { Section } from '../types'

export const scd2MergePattern: Section = {
  id: 'scd2-merge-pattern',
  title: 'Loading an SCD-2 dimension — the merge pattern',
  scene: 'scd2-merge',
  slide: `## Loading an SCD-2 dimension

Match on the natural key, then do exactly one of four things. Detect the change with a **hash**, and make the whole load safe to re-run.

### Match source to dim on the **natural key**, then:

- **New key** → INSERT: new SK, \`effective=today\`, \`expiry=9999\`, \`current=Y\`
- **Changed tracked attr** → **expire-and-insert**:
- **No change** → do nothing
- **Missing from source** → per policy

### Detect change cheaply

- Compare a **hash** of tracked columns — differs = change

### One statement, or one tool

- A single SQL **\`MERGE\`** (matched → update, not matched → insert)
- Or a **dbt snapshot** / native change-tracking

### Must be **idempotent**

- Re-running the load makes **no** duplicate versions — safe to restart (module 09)
`,
  narration:
    'Loading an SCD-2 dimension — the merge pattern. Type 2 is only as good as the ETL that maintains it. Each load has to compare the incoming source against the current dimension, and apply the expire-and-insert dance correctly. That logic is called the merge pattern. Think of a daily load as four cases. You match each incoming source row to the dimension on the natural key — customer i-d — and then decide. Case one: a new natural key, a customer we\'ve never seen. You insert a new row — a fresh surrogate key, effective date today, expiry date the high date nine-nine-nine-nine, is-current Y. Case two: an existing key where a tracked attribute has changed. This is the expire-and-insert. You update the current row — setting its expiry date to today and is-current to N — and you insert a new version, with a new surrogate, effective today, expiry the high date, is-current Y. Case three: an existing key with no tracked change — you do nothing, though an untracked column might still get a Type 1 overwrite. And case four: an existing key that\'s missing from the source — which depends on your policy: leave it as-is, or close it out. How do you detect a change cheaply? You don\'t compare every column by hand — you compare a hash of the tracked attributes, old row versus incoming. If the hash differs, it\'s a change — case two. If it matches, no change — case three. Fast, and easy to extend. Most engines express cases one through three as a single SQL MERGE statement: when matched, update; when not matched, insert. And modern stacks often delegate the whole pattern to a tool — a dbt snapshot, or a warehouse\'s native change-tracking — so you just declare "track these columns, Type 2" and it emits the merge for you. One last, crucial property: the load must be idempotent. Re-running today\'s load must not create duplicate versions. Keyed on natural key plus effective date, and gated by the hash check, a correct merge is idempotent — safe to re-run after a failure. That\'s module nine\'s restartable-loads principle, which is exactly where we go next in the course. So the SCD-2 load is a merge: insert new keys, expire-and-insert the changed ones, skip the unchanged — detected by a hash, written as a MERGE or a snapshot tool, and idempotent, so it\'s always safe to re-run.',
}

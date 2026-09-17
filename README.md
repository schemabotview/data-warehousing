# data-warehousing — GraphL concept repo

The **Data Warehousing** concept app for [GraphL](https://graphl.in). One section = a left **scene**
(react-flow diagram or code snippet) + a right **slide** (markdown) + a **narration** script,
rendered responsively (4K capture · laptop web app · mobile) and captured to video.

> **Status: published, 2026-09-02.** All 10 courses — **100 sections, 100 scenes, 100 narration wavs
> (171.1 min)** — live at **[graphl.in/data-warehousing](https://graphl.in/data-warehousing/)**.
> `npm run build`, `tsc --noEmit` and `npm run check` are clean. All ten courses are recorded —
> 176.6 min of 4K masters.

Workspace-wide model, pipeline, and conventions: see the workspace [`README.md`](../README.md).
Authoring rules specific to this concept: [`CLAUDE.md`](./CLAUDE.md).

## The course arc (10 courses, 100 sections)

| # | Course | What it covers |
|--:|--------|----------------|
| 1 | **foundations** | Why a warehouse exists, OLTP vs OLAP, its components, marts, lake & lakehouse, Inmon vs Kimball. |
| 2 | **keys** | Normalization & the normal forms, denormalization, key types, and why warehouses prefer surrogates. |
| 3 | **facts** | Measures & grain, additivity, degenerate dimensions, the four fact-table types, factless facts. |
| 4 | **dimensions** | Attributes & hierarchies, surrogate keys, conformed & role-playing & junk dims, the date dimension. |
| 5 | **schemas** | The star, the snowflake, the galaxy — and a physical Sales-star walkthrough. |
| 6 | **history** | Slowly changing dimensions — types 0, 1, 2, 3, 4 and 6, and the SCD-2 merge. |
| 7 | **datavault** | Hubs, links and satellites; hash keys; and the mapping back to a star mart. |
| 8 | **design** | Kimball's four steps, worked end to end from a real bill — the close of the modeling block. |
| 9 | **loading** | ETL vs ELT, staging, CDC, the surrogate-key lookup, and idempotent restartable loads. |
| 10 | **platform** | Cloud MPP, columnar storage, distribution, pruning, caching — and how to query it well. |

Ten sections each. Narration for every one is **already generated** (Colab + Chatterbox, ported from
`~/Workspace/data-warehousing-ct`) and lives at `public/audio/<course>/<section-id>.wav`, so a
`Section.narration` is **frozen** — editing it desynchronises the audio.

## The course order is fixed

The frozen narration cross-references its neighbours **by module number** — 61 times across the 100
sections ("recall module two", "that's module six", "module nine's restartable loads"). Course N must
stay module N; never renumber or reorder. See [`CLAUDE.md`](./CLAUDE.md) for the full constraint.

## Layout

```
src/scenes/          hand-authored scenes + registry, one folder per course
src/content/         courses → sections (one file per section) + registry
src/section/         composited scene-left / slide-right view (responsive)
src/App.tsx          hash router: section (whole-scene) view · scene (individual) view
scripts/             record-course · record-reels · thumb · gen-descriptions · colab · audio-manifest
public/audio/<course>/   narration wavs
```

## Run

```bash
npm install
npm run dev            # http://localhost:5173 — #/<course> or #/<course>-<section>
npm run build          # must stay clean
npm run check          # five silent-breakage guards (cards, slides, icons, focus, missing wav)
```

There is no test runner. The bar for a change is **build clean + visually correct** in the browser at
the relevant route.

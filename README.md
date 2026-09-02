# data-warehousing — GraphL concept repo

The **Data Warehousing** concept app for [GraphL](https://graphl.in). One section = a left **scene**
(react-flow diagram or code snippet) + a right **slide** (markdown) + a **narration** script,
rendered responsively (4K capture · laptop web app · mobile) and captured to video.

> **Status: published, 2026-09-02.** All 6 courses — **60 sections, 60 scenes, 60 narration wavs
> (98.5 min)** — live at **[graphl.in/data-warehousing](https://graphl.in/data-warehousing/)**.
> `npm run build`, `tsc --noEmit` and `npm run check` are clean. Not yet recorded.

Workspace-wide model, pipeline, and conventions: see the workspace [`README.md`](../README.md).
Authoring rules specific to this concept: [`CLAUDE.md`](./CLAUDE.md).

## The course arc (6 courses, 60 sections)

| # | Course | What it covers |
|--:|--------|----------------|
| 1 | **foundations** | Why a warehouse exists, OLTP vs OLAP, its components, marts, lake & lakehouse, Inmon vs Kimball. |
| 2 | **keys** | Normalization & the normal forms, denormalization, key types, and why warehouses prefer surrogates. |
| 3 | **facts** | Measures & grain, additivity, degenerate dimensions, the four fact-table types, factless facts. |
| 4 | **dimensions** | Attributes & hierarchies, surrogate keys, conformed & role-playing & junk dims, the date dimension. |
| 5 | **schemas** | The star, the snowflake, the galaxy — and a physical Sales-star walkthrough. |
| 6 | **history** | Slowly changing dimensions — types 0, 1, 2, 3, 4 and 6, and the SCD-2 merge. |

Ten sections each. Narration for every one is **already generated** (Colab + Chatterbox, ported from
`~/Workspace/data-warehousing-ct`) and lives at `public/audio/<course>/<section-id>.wav`, so a
`Section.narration` is **frozen** — editing it desynchronises the audio.

## This arc is a prefix, and its order is fixed

The six courses are modules 1–6 of a ten-module spine. Four more get **appended in order** —
`datavault` (7) · `design` (8, the capstone) · `loading` (9, ETL/ELT) · `platform` (10, cloud & MPP) —
because the frozen narration cross-references its neighbours **by module number** ("recall module
two", "that's module six", "module nine's restartable loads"). Course N must stay module N. See
[`CLAUDE.md`](./CLAUDE.md) for the full constraint.

## Layout

```
src/render-engine/   layout + react-flow / code-snippet renderer (import from the barrel index)
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

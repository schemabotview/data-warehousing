# CLAUDE.md — data-warehousing (lean operational pointers)

The **Data Warehousing** concept app of GraphL. Workspace-wide invariants, content model, and working
agreement live in the workspace [`CLAUDE.md`](../CLAUDE.md) — read that first; this file is
Data-Warehousing-specific.

## Status

**ALL 6 COURSES BUILT + PUBLISHED 2026-09-02** — 60 sections · 60 scenes · 60 wavs (98.5 min, 271 MB).
`npm run build`, `tsc --noEmit` and `npm run check` are clean; `scripts/audio-manifest.json` is
regenerated (60/60 have a wav). Slides model 767–1096 px against the 1100 ceiling (median 913).

Live at **https://graphl.in/data-warehousing/** — pushed to `schemabotview/data-warehousing` and
deployed by `deploy.yml` (Pages build source = the workflow; the apex domain is inherited from
`schemabotview.github.io`'s CNAME, so no CNAME file here). Listed in the catalog's `concepts.json`.
NOT recorded — that is the next downstream step.

## What this is

A standalone concept app: its own scenes + courses + a bundled render-engine (`src/render-engine`).
Each **section** = `(scene, slide, narration)`; the left scene is a react-flow diagram or a code
snippet, the right slide is markdown. One section = one slide = one video segment.

## Course arc — a PREFIX of a ten-module spine (this is a hard constraint)

| # | id | Title | Secs | Audio |
|--:|----|-------|-----:|-------|
| 1 | `foundations` | Warehouse Foundations | 10 | 13.2 min |
| 2 | `keys` | Normalization & Keys | 10 | 17.8 |
| 3 | `facts` | Fact Tables | 10 | 15.3 |
| 4 | `dimensions` | Dimension Tables | 10 | 16.4 |
| 5 | `schemas` | Star & Snowflake Schemas | 10 | 17.5 |
| 6 | `history` | Slowly Changing Dimensions | 10 | 18.3 |

60 sections, 98.5 min. Appended later, **in this order**: `datavault` (07) · `design` (08, the
capstone) · `loading` (09, ETL/ELT) · `platform` (10, cloud & MPP).

**Why the order is not negotiable.** The narration ported from `~/Workspace/data-warehousing-ct` is
already generated — frozen — and it cross-references its neighbours **by module number**: 61 spoken
references across the 100 authored sections ("Recall module two: OLTP systems normalize", "that's
module 06", "the surrogate key from module four", "module nine's restartable-loads principle"), plus
section-number references *inside* a module ("loading it is section ten", `06-04`). So:

1. **Course N must stay module N** of the ten-module spine. Never renumber, never reorder, never drop
   a module from the middle — every reference after it would drift against audio that cannot change.
2. **Take modules whole.** Section positions are load-bearing too.
3. Shipping a prefix is safe: backward references land, and forward ones ("module nine") resolve when
   that course is appended. Four sections in the v1 set point forward this way — `01-10`, `05-10`,
   `06-01`, and `06-10`, which ends the shipped arc pointing at module 09. That is the argument for
   appending `loading` early.
4. The narration says **"module"** where this repo says "course". The UI never prints the word
   (the eyebrow is `DATA WAREHOUSING · <COURSE-ID>`), so spoken "module four" just means course four.

## Where the content comes from

`~/Workspace/data-warehousing-ct` — 10 modules × 10 sections of `.md` (source of truth) + `.slide` +
`.tts`, plus **67 already-generated wavs** (modules 01–06 complete). Per section: `.tts` →
`Section.narration` **verbatim**, `.slide` → `Section.slide` (converted `#`→`##`, `##`→`###`, and
enriched from the `.md` toward the ~850-char budget — enrichment may only ADD to what the wav says),
`audio/<NN-SS-slug>.wav` → `public/audio/<course>/<section-id>.wav`.

**Never edit a `Section.narration`** — the wav no longer matches it. Slides are a separate field and
may be edited freely.

**Scenes did not port** — all 60 were authored fresh. The `-ct` scenes are three shared
boards in `graphl-render-app` differentiated by a camera; this engine has no camera, so that sharing
collapses to roughly one solid scene per section. This is the real work of every slice.

**The narration is picture-neutral** — I scanned all 100 `.tts` for the language that bit the linux
port (`this diagram`, `on the left`, `lights up`, `the board`): one hit, idiomatic. So scenes may be
re-cut freely; unlike linux's `kernel`, no picture is a frozen requirement here.

**But the worked example IS fixed**: 24 sections name **Jabra Spain** out loud, and the facts /
dimensions / schemas courses speak its table and column names. Scenes must use
`~/Workspace/ITC-bigdata/data-modeling-markdown/jabra-spain-dw-model.dbml` as the running model.

## Scene SHAPE — the pane is near-square, so a horizontal chain reads as a band

A top-level `flow: 'LR'` turns a scene into a horizontal chain, and the section pane is roughly
square (~1160×1150 on a laptop). Thirteen scenes shipped that way and every one rendered as a thin
strip with dead space above and below, the elements shrunk by `fitView`. **The shape that fills this
pane is a VERTICAL spine of WIDE rows: top level TB (the default), and each container going wide via
`cols` or its OWN inner `flow: 'LR'`.** Reserve `flow: 'LR'` at the scene level for a board that is
genuinely a left-to-right fan, and check the number.

Measure rather than guess — `.tmp/aspect.ts` (gitignored) runs the engine's own `computeLayout` over
every registered scene and prints each board's real bounding box and aspect:

```
npx esbuild .tmp/aspect.ts --bundle --platform=node --format=esm --outfile=.tmp/aspect.mjs && node .tmp/aspect.mjs
```

Keep boards inside roughly **0.62–1.9**. The two directions are not equally bad: a WIDE board is
scaled down to fit the pane's width and its text gets small, while a TALL board scales to the height
and its elements come out LARGER, just with side margin. `normal-forms-ladder` sits at 0.54 on
purpose — it is a ladder.

## Two authoring rules this port established

**The card carries the claim; the EDGE LABEL carries the explanation.** Every leaf-card overflow in
this repo had one cause — a long `sub` on a standalone card. Moving the sentence to the edge fixes the
budget and reads better, since the explanation is usually about the relationship anyway. A label is
~24 chars over two wrapped lines, a `sub` ~40; an underscored table name is ONE unbreakable token and
the cap is 14 (`DIM_CUSTOMER_HISTORY` will not fit a label — put it in the `sub`, where the cap is 20).

**When a scene draws the rows, the slide must not repeat them.** The `-ct` slides carry fenced code
blocks that these scenes render as real `kind: 'table'` nodes; 30 of the 60 slides clipped the 1100 px
ceiling until that duplicated fence came out. The slide keeps the claim, the scene keeps the data — a
slide may say LESS than the wav, only never something different.

## Palette note

This concept **inverts** the aws / spark / python warm-brand pairing, the same way sql does:
`--brand` is DW blue `#5b8cff` (the one free hue in the catalog), so the slide `h3` counters it in
warm amber `#f0a35e`. `PATTERNS.service` is the same blue.

**Do not use the `network` pattern in DW scenes** — `#4f8ff7` is a near-twin of the brand blue and
the two are not distinguishable side by side. A warehouse map has no networking role anyway; sources,
pipelines, storage, marts and BI all map to `service` / `storage` / `user` / `external`.

## Layout

```
src/render-engine/   layout + renderer (import from the barrel index, never deep paths)
src/scenes/          scenes + registry, one folder per course
src/content/         courses → sections + registry
src/section/         scene-left / slide-right composited view (responsive)
src/App.tsx          hash router: section (whole-scene) view · scene (individual) view
scripts/             record-course · record-reels · thumb · gen-descriptions · colab · audio-manifest
public/audio/<course>/   narration wavs
```

## Build & verify

- `npm install` → `npm run dev`; `npm run build` must stay clean.
- `npm run check` gates FIVE silent failures — ones that build green and break only on screen:
  fixed 210×96 leaf cards · non-fitting slides · unregistered `icon:` keys · a `focus:` naming no
  node in its scene · **a section with no wav** (it narrates silence and records a silent segment).
  Run it with build + `tsc --noEmit` every slice; neither of those catches a broken frame.
- No test runner. Bar for a change: **build clean + visually correct** at the relevant route.
- Adding a scene: define in `src/scenes/<course>/`, register in that folder's `index.ts`.
- Adding content: add a `Section` under `src/content/<course>/`, list it in that folder's `index.ts`.

## Working agreement

Owner drives, **one reviewed slice at a time**: propose → approve → build → verify in-app → stop.
Before authoring a course/scene, deliver an **ASCII sketch** of the scene for approval first.

import type { Scene } from '@graphlearning/flow'
import { twoQuestions } from './two-questions'
import { fourTraits } from './four-traits'
import { oltpVsOlap } from './oltp-vs-olap'
import { warehousePipeline } from './warehouse-pipeline'
import { martsCarved } from './marts-carved'
import { warehouseVsLake } from './warehouse-vs-lake'
import { schemaWhen } from './schema-when'
import { lakehouseStack } from './lakehouse-stack'
import { topDownBottomUp } from './top-down-bottom-up'
import { threeLevels } from './three-levels'

// Scenes for the `foundations` course (module 01). One solid scene per section — the ported
// narration is picture-neutral, so nothing here is forced by the audio and each board is free to be
// about its own section's claim. §4's `warehouse-pipeline` is the course's system map: every later
// course is a zoom into its `store` box.
export const foundationsScenes: Scene[] = [
  twoQuestions,
  fourTraits,
  oltpVsOlap,
  warehousePipeline,
  martsCarved,
  warehouseVsLake,
  schemaWhen,
  lakehouseStack,
  topDownBottomUp,
  threeLevels,
]

import type { Course } from '../types'
import { fourStepProcess } from './01-four-step-process'
import { pickTheProcess } from './02-pick-the-process'
import { declareTheGrain } from './03-declare-the-grain'
import { identifyTheDimensions } from './04-identify-the-dimensions'
import { identifyTheFacts } from './05-identify-the-facts'
import { modelingFromABill } from './06-modeling-from-a-bill'
import { buildingTheDimensions } from './07-building-the-dimensions'
import { buildingTheFact } from './08-building-the-fact'
import { theResultingStar } from './09-the-resulting-star'
import { readingDbml } from './10-reading-dbml'

// design — module 08 of the ten-module spine, and the close of the MODELING block (modules 3-8), not
// of the concept: the narration of 10-10 says so out loud ("model a clean star, in modules three
// through eight; load it reliably, in module nine"). Kimball's four steps, then one continuous worked
// example — a Jabra bill tagged A/M, turned into dimensions, then two fact rows, then a star that
// answers the question the design started from. Ten sections, ten scenes, ten wavs (17.4 min).
// Narration + wav ported verbatim from ~/Workspace/data-warehousing-ct and FROZEN.
export const design: Course = {
  id: 'design',
  title: 'Designing a Warehouse Model',
  sections: [
    fourStepProcess,
    pickTheProcess,
    declareTheGrain,
    identifyTheDimensions,
    identifyTheFacts,
    modelingFromABill,
    buildingTheDimensions,
    buildingTheFact,
    theResultingStar,
    readingDbml,
  ],
}

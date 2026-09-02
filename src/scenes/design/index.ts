import type { Scene } from '../../render-engine'
import { fourSteps } from './four-steps'
import { pickProcess } from './pick-process'
import { declareGrain } from './declare-grain'
import { identifyDims } from './identify-dims'
import { identifyFacts } from './identify-facts'
import { theBill } from './the-bill'
import { buildDims } from './build-dims'
import { buildFact } from './build-fact'
import { resultingStar } from './resulting-star'
import { dbml } from './dbml'

// Scenes for the `design` course (module 08) — the METHOD course, and the close of the modeling block
// (modules 3-8), not the close of the concept. §6-§9 are one continuous worked example: a real Jabra
// bill, tagged A/M in a single pass, turned into dimensions with minted surrogate keys, then into two
// fact rows, then into a star that answers the question the design started from.
export const designScenes: Scene[] = [
  fourSteps,
  pickProcess,
  declareGrain,
  identifyDims,
  identifyFacts,
  theBill,
  buildDims,
  buildFact,
  resultingStar,
  dbml,
]

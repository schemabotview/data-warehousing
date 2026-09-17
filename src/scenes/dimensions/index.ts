import type { Scene } from '@graphlearning/flow'
import { sliceBy } from './slice-by'
import { hierarchiesFlat } from './hierarchies-flat'
import { twoKeys } from './two-keys'
import { busMatrix } from './bus-matrix'
import { rolePlaying } from './role-playing'
import { junkDimension } from './junk-dimension'
import { fourSpecialTypes } from './four-special-types'
import { dateDimension } from './date-dimension'
import { sumOrSlice } from './sum-or-slice'
import { dimensionPitfalls } from './dimension-pitfalls'

// Scenes for the `dimensions` course (module 04). §7 is a deliberate callback — its narration says
// "we met the degenerate dimension from the fact side in module 03" — so that board is built as the
// four-special-types comparison rather than a re-run of the module 03 scene. §3 plants Ana's move to
// Barcelona, which module 06 then spends ten sections on.
export const dimensionsScenes: Scene[] = [
  sliceBy,
  hierarchiesFlat,
  twoKeys,
  busMatrix,
  rolePlaying,
  junkDimension,
  fourSpecialTypes,
  dateDimension,
  sumOrSlice,
  dimensionPitfalls,
]

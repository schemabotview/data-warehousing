import type { Scene } from '../../render-engine'
import { theDriftQuestion } from './the-drift-question'
import { type0 } from './type-0'
import { type1 } from './type-1'
import { type2 } from './type-2'
import { controlColumns } from './control-columns'
import { type3 } from './type-3'
import { type4 } from './type-4'
import { type6 } from './type-6'
import { perAttribute } from './per-attribute'
import { scd2Merge } from './scd2-merge'

// Scenes for the `history` course (module 06). Almost every board here shows REAL ROWS, because the
// SCD types differ only in what the rows look like after a change — the difference between Type 1
// and Type 2 is one extra row, and no arrangement of cards can teach that. §1 poses Ana's move and
// §4 pays it off; §9 is the board that matters most in practice, since SCD is chosen per COLUMN.
export const historyScenes: Scene[] = [
  theDriftQuestion,
  type0,
  type1,
  type2,
  controlColumns,
  type3,
  type4,
  type6,
  perAttribute,
  scd2Merge,
]

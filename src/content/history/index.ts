import type { Course } from '../types'
import { dimensionsChange } from './01-dimensions-change'
import { type0 } from './02-type-0'
import { type1 } from './03-type-1'
import { type2 } from './04-type-2'
import { effectiveDates } from './05-effective-dates'
import { type3 } from './06-type-3'
import { type4 } from './07-type-4'
import { type6 } from './08-type-6'
import { choosingAnScdType } from './09-choosing-an-scd-type'
import { scd2MergePattern } from './10-scd2-merge-pattern'

// history — module 06 of the ten-module spine, and the last course of the shipped prefix. What to do
// when a dimension drifts: the six SCD types, the control columns that make a timeline, and the merge
// that loads one. §10 points forward at module 09's restartable loads, which is the strongest reason
// to append `loading` next. Ten sections, ten scenes, ten wavs (18.3 min). Narration + wav ported
// verbatim from ~/Workspace/data-warehousing-ct and FROZEN — never edit a `narration`.
export const history: Course = {
  id: 'history',
  title: 'Slowly Changing Dimensions',
  sections: [
    dimensionsChange,
    type0,
    type1,
    type2,
    effectiveDates,
    type3,
    type4,
    type6,
    choosingAnScdType,
    scd2MergePattern,
  ],
}

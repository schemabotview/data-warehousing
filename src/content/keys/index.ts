import type { Course } from '../types'
import { normalization } from './01-normalization'
import { theNormalForms } from './02-the-normal-forms'
import { splittingTo3nf } from './03-splitting-to-3nf'
import { denormalization } from './04-denormalization'
import { keysSuperCandidatePrimary } from './05-keys-super-candidate-primary'
import { compositeKeys } from './06-composite-keys'
import { foreignKeys } from './07-foreign-keys'
import { strongVsWeakEntities } from './08-strong-vs-weak-entities'
import { naturalVsSurrogateKey } from './09-natural-vs-surrogate-key'
import { whySurrogateKeys } from './10-why-surrogate-keys'

// keys — module 02 of the ten-module spine. Why OLTP splits tables apart, why a warehouse puts them
// back together, and the four key terms in between — ending on the surrogate key, which every later
// course assumes. Ten sections, ten scenes, ten wavs (17.8 min). Narration + wav ported verbatim from
// ~/Workspace/data-warehousing-ct and FROZEN — never edit a `narration`.
export const keys: Course = {
  id: 'keys',
  title: 'Normalization & Keys',
  sections: [
    normalization,
    theNormalForms,
    splittingTo3nf,
    denormalization,
    keysSuperCandidatePrimary,
    compositeKeys,
    foreignKeys,
    strongVsWeakEntities,
    naturalVsSurrogateKey,
    whySurrogateKeys,
  ],
}

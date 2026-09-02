import type { Course } from '../types'
import { whatADimensionIs } from './01-what-a-dimension-is'
import { attributesAndHierarchies } from './02-attributes-and-hierarchies'
import { surrogateKeysInDimensions } from './03-surrogate-keys-in-dimensions'
import { conformedDimensions } from './04-conformed-dimensions'
import { rolePlayingDimensions } from './05-role-playing-dimensions'
import { junkDimensions } from './06-junk-dimensions'
import { degenerateDimensionsRevisited } from './07-degenerate-dimensions-revisited'
import { theDateDimension } from './08-the-date-dimension'
import { factVsDimension } from './09-fact-vs-dimension'
import { dimensionPitfalls } from './10-dimension-pitfalls'

// dimensions — module 04 of the ten-module spine. The other half of the star: the context you slice
// by. Attributes and hierarchies, the two keys every dimension carries, and the four special types
// (conformed, role-playing, junk, degenerate). Ten sections, ten scenes, ten wavs (16.4 min).
// Narration + wav ported verbatim from ~/Workspace/data-warehousing-ct and FROZEN — never edit a
// `narration`.
export const dimensions: Course = {
  id: 'dimensions',
  title: 'Dimension Tables',
  sections: [
    whatADimensionIs,
    attributesAndHierarchies,
    surrogateKeysInDimensions,
    conformedDimensions,
    rolePlayingDimensions,
    junkDimensions,
    degenerateDimensionsRevisited,
    theDateDimension,
    factVsDimension,
    dimensionPitfalls,
  ],
}

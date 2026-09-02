import type { Course } from '../types'
import { theStarSchema } from './01-the-star-schema'
import { anatomyOfAStar } from './02-anatomy-of-a-star'
import { whyDenormalizedWins } from './03-why-denormalized-wins'
import { theSnowflakeSchema } from './04-the-snowflake-schema'
import { starVsSnowflake } from './05-star-vs-snowflake'
import { galaxySchemas } from './06-galaxy-schemas'
import { physicalDesignWalkthrough } from './07-physical-design-walkthrough'
import { keysInThePhysicalModel } from './08-keys-in-the-physical-model'
import { degenerateAndDerived } from './09-degenerate-and-derived'
import { choosingASchema } from './10-choosing-a-schema'

// schemas — module 05 of the ten-module spine. Facts and dimensions, arranged: the star, the
// snowflake, the one dial between them, and the galaxy that real warehouses actually are. §7 walks
// the Jabra Sales star physically. Ten sections, ten scenes, ten wavs (17.5 min). Narration + wav
// ported verbatim from ~/Workspace/data-warehousing-ct and FROZEN — never edit a `narration`.
export const schemas: Course = {
  id: 'schemas',
  title: 'Star & Snowflake Schemas',
  sections: [
    theStarSchema,
    anatomyOfAStar,
    whyDenormalizedWins,
    theSnowflakeSchema,
    starVsSnowflake,
    galaxySchemas,
    physicalDesignWalkthrough,
    keysInThePhysicalModel,
    degenerateAndDerived,
    choosingASchema,
  ],
}

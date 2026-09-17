import type { Scene } from '@graphlearning/flow'
import { starShape } from './star-shape'
import { starAnatomy } from './star-anatomy'
import { flatWins } from './flat-wins'
import { snowflakeShape } from './snowflake-shape'
import { starVsSnowflake } from './star-vs-snowflake'
import { galaxy } from './galaxy'
import { jabraStar } from './jabra-star'
import { fourKeyRoles } from './four-key-roles'
import { derivedColumns } from './derived-columns'
import { choosingASchema } from './choosing-a-schema'

// Scenes for the `schemas` course (module 05). Three boards show the star and are deliberately NOT
// the same picture: §1 is the shape alone (one hop, nothing else), §2 is the anatomy and the join
// arithmetic, and §7 is the real Jabra column list. Splitting them that way is what stops the course
// from drawing one diagram ten times.
export const schemasScenes: Scene[] = [
  starShape,
  starAnatomy,
  flatWins,
  snowflakeShape,
  starVsSnowflake,
  galaxy,
  jabraStar,
  fourKeyRoles,
  derivedColumns,
  choosingASchema,
]

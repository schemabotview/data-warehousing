import type { Scene } from '@graphlearning/flow'
import { redundancyAnomalies } from './redundancy-anomalies'
import { normalFormsLadder } from './normal-forms-ladder'
import { splitTo3nf } from './split-to-3nf'
import { collapseHierarchy } from './collapse-hierarchy'
import { keyNesting } from './key-nesting'
import { compositeKey } from './composite-key'
import { fkIntegrity } from './fk-integrity'
import { weakEntity } from './weak-entity'
import { anitaTwoRows } from './anita-two-rows'
import { surrogatePattern } from './surrogate-pattern'

// Scenes for the `keys` course (module 02). This course leans on the engine's `kind: 'table'` node
// more than any other: nearly every claim here is about what a ROW or a KEY looks like, and faking a
// relation as a container of tiles would say nothing about its shape. The arc runs from splitting
// tables apart (§1–§3) to deliberately collapsing them again (§4) and then to the key that makes a
// warehouse dimension work (§9–§10).
export const keysScenes: Scene[] = [
  redundancyAnomalies,
  normalFormsLadder,
  splitTo3nf,
  collapseHierarchy,
  keyNesting,
  compositeKey,
  fkIntegrity,
  weakEntity,
  anitaTwoRows,
  surrogatePattern,
]

import type { Scene } from '../../render-engine'
import { factAnatomy } from './fact-anatomy'
import { grainRuler } from './grain-ruler'
import { additivity } from './additivity'
import { starJoin } from './star-join'
import { degenerateDim } from './degenerate-dim'
import { transactionalFact } from './transactional-fact'
import { periodicSnapshot } from './periodic-snapshot'
import { accumulatingSnapshot } from './accumulating-snapshot'
import { aggregateFact } from './aggregate-fact'
import { factlessFact } from './factless-fact'

// Scenes for the `facts` course (module 03). This is the first course to run on the Jabra Spain
// FACT_SALES model, which the narration names out loud — so the table and column names on these
// boards are fixed by the audio, not chosen. §6–§10 are the five fact-table types, each drawn as
// real rows, because "one row per event" versus "one row per lifecycle" is a claim about what the
// rows look like and cannot be taught with a card that asserts it.
export const factsScenes: Scene[] = [
  factAnatomy,
  grainRuler,
  additivity,
  starJoin,
  degenerateDim,
  transactionalFact,
  periodicSnapshot,
  accumulatingSnapshot,
  aggregateFact,
  factlessFact,
]

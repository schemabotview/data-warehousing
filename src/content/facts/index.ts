import type { Course } from '../types'
import { whatAFactTableIs } from './01-what-a-fact-table-is'
import { grain } from './02-grain'
import { additivity } from './03-additivity'
import { foreignKeysToDimensions } from './04-foreign-keys-to-dimensions'
import { degenerateDimensions } from './05-degenerate-dimensions'
import { transactionalFacts } from './06-transactional-facts'
import { periodicSnapshotFacts } from './07-periodic-snapshot-facts'
import { accumulatingSnapshotFacts } from './08-accumulating-snapshot-facts'
import { aggregateFacts } from './09-aggregate-facts'
import { factlessFacts } from './10-factless-facts'

// facts — module 03 of the ten-module spine, and the first to run on the Jabra Spain FACT_SALES
// model the narration names out loud. What a fact table is, the grain decision everything else
// follows from, which measures may be summed, and the five fact-table types. Ten sections, ten
// scenes, ten wavs (15.3 min). Narration + wav ported verbatim from ~/Workspace/data-warehousing-ct
// and FROZEN — never edit a `narration`.
export const facts: Course = {
  id: 'facts',
  title: 'Fact Tables',
  sections: [
    whatAFactTableIs,
    grain,
    additivity,
    foreignKeysToDimensions,
    degenerateDimensions,
    transactionalFacts,
    periodicSnapshotFacts,
    accumulatingSnapshotFacts,
    aggregateFacts,
    factlessFacts,
  ],
}

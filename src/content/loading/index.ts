import type { Course } from '../types'
import { etlVsElt } from './01-etl-vs-elt'
import { extract } from './02-extract'
import { stagingAreas } from './03-staging-areas'
import { transform } from './04-transform'
import { fullVsIncremental } from './05-full-vs-incremental'
import { changeDataCapture } from './06-change-data-capture'
import { surrogateKeyLookups } from './07-surrogate-key-lookups'
import { dimensionsBeforeFacts } from './08-dimensions-before-facts'
import { idempotentLoads } from './09-idempotent-loads'
import { orchestration } from './10-orchestration'

// loading — module 09 of the ten-module spine, and the course `history` §10 explicitly promises
// ("that's module nine's restartable-loads principle, which is exactly where we go next"). Extract,
// stage, transform, load; CDC; the surrogate-key lookup that module 08 named in one line; and the
// idempotence that turns a failure into a re-run. Ten sections, ten scenes, ten wavs (18.2 min).
// Narration + wav ported verbatim from ~/Workspace/data-warehousing-ct and FROZEN.
export const loading: Course = {
  id: 'loading',
  title: 'Loading the Warehouse — ETL & ELT',
  sections: [
    etlVsElt,
    extract,
    stagingAreas,
    transform,
    fullVsIncremental,
    changeDataCapture,
    surrogateKeyLookups,
    dimensionsBeforeFacts,
    idempotentLoads,
    orchestration,
  ],
}

import type { Course } from '../types'
import { whyTheCloud } from './01-why-the-cloud'
import { mppArchitecture } from './02-mpp-architecture'
import { computeAndStorage } from './03-compute-and-storage'
import { thePlatforms } from './04-the-platforms'
import { dataDistribution } from './05-data-distribution'
import { columnarStorage } from './06-columnar-storage'
import { clusteringAndZoneMaps } from './07-clustering-and-zone-maps'
import { viewsAndCaching } from './08-views-and-caching'
import { starJoinOptimization } from './09-star-join-optimization'
import { queryBestPractices } from './10-query-best-practices'

// platform — module 10, and the FINALE of the concept: the narration of §10 closes the whole arc
// out loud ("model a clean star, in modules three through eight; load it reliably, in module nine;
// run it on cloud MPP in module ten"). The through-line is one swap — the index-era tuning vocabulary
// is replaced by distribution, clustering, pruning and caching. Ten sections, ten scenes, ten wavs
// (18.8 min). Narration + wav ported verbatim from ~/Workspace/data-warehousing-ct and FROZEN.
export const platform: Course = {
  id: 'platform',
  title: 'Cloud Data Warehouses & MPP',
  sections: [
    whyTheCloud,
    mppArchitecture,
    computeAndStorage,
    thePlatforms,
    dataDistribution,
    columnarStorage,
    clusteringAndZoneMaps,
    viewsAndCaching,
    starJoinOptimization,
    queryBestPractices,
  ],
}

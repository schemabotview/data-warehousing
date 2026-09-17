import type { Scene } from '@graphlearning/flow'
import { toTheCloud } from './to-the-cloud'
import { mpp } from './mpp'
import { computeStorage } from './compute-storage'
import { platforms } from './platforms'
import { distribution } from './distribution'
import { columnar } from './columnar'
import { zoneMaps } from './zone-maps'
import { caching } from './caching'
import { starJoinOpt } from './star-join-opt'
import { beforeAfter } from './before-after'

// Scenes for the `platform` course (module 10) — the FINALE of the concept. The through-line is one
// swap: the tuning vocabulary of the index era is replaced by distribution, clustering, pruning and
// caching, and §6-§9 each supply one piece of that. §10 closes the whole ten-module arc, which is
// what the narration itself does ("model a clean star, load it reliably, run it on cloud MPP").
export const platformScenes: Scene[] = [
  toTheCloud,
  mpp,
  computeStorage,
  platforms,
  distribution,
  columnar,
  zoneMaps,
  caching,
  starJoinOpt,
  beforeAfter,
]

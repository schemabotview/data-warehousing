import type { Scene } from '@graphlearning/flow'
import { etlVsElt } from './etl-vs-elt'
import { extract } from './extract'
import { staging } from './staging'
import { transform } from './transform'
import { fullVsIncremental } from './full-vs-incremental'
import { cdc } from './cdc'
import { keyLookup } from './key-lookup'
import { dimsBeforeFacts } from './dims-before-facts'
import { idempotent } from './idempotent'
import { orchestration } from './orchestration'

// Scenes for the `loading` course (module 09) — the one `history` §10 promised ("that's module
// nine's restartable-loads principle, which is exactly where we go next"). §7 is module 08's
// one-line surrogate-key lookup expanded into a whole board, and §9 generalises module 06's SCD-2
// merge from one table to the entire pipeline.
export const loadingScenes: Scene[] = [
  etlVsElt,
  extract,
  staging,
  transform,
  fullVsIncremental,
  cdc,
  keyLookup,
  dimsBeforeFacts,
  idempotent,
  orchestration,
]

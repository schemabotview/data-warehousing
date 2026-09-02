import type { Scene } from '../../render-engine'
import { whyVault } from './why-vault'
import { threeBlocks } from './three-blocks'
import { hubs } from './hubs'
import { links } from './links'
import { satellites } from './satellites'
import { hashKeys } from './hash-keys'
import { rawVsBusiness } from './raw-vs-business'
import { vaultVsStar } from './vault-vs-star'
import { vaultToStar } from './vault-to-star'
import { whenToVault } from './when-to-vault'

// Scenes for the `datavault` course (module 07). §2 is the course's spine — the hub/link/satellite
// graph — and §3-§6 are each a zoom into one node type of it. The course deliberately keeps
// answering module 06: satellites get SCD-2 for free (§5) where the star needed a policy per column,
// and §8/§9 end by layering the two rather than choosing between them.
export const datavaultScenes: Scene[] = [
  whyVault,
  threeBlocks,
  hubs,
  links,
  satellites,
  hashKeys,
  rawVsBusiness,
  vaultVsStar,
  vaultToStar,
  whenToVault,
]

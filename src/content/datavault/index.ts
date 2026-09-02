import type { Course } from '../types'
import { whyDataVaultExists } from './01-why-data-vault-exists'
import { threeBuildingBlocks } from './02-three-building-blocks'
import { hubs } from './03-hubs'
import { links } from './04-links'
import { satellites } from './05-satellites'
import { hashKeys } from './06-hash-keys'
import { rawVsBusinessVault } from './07-raw-vs-business-vault'
import { vaultVsDimensional } from './08-vault-vs-dimensional'
import { vaultToStar } from './09-vault-to-star'
import { whenToUseDataVault } from './10-when-to-use-data-vault'

// datavault — module 07 of the ten-module spine, and the one genuinely OPTIONAL course in it: a
// different modelling style for the raw integration layer, not a replacement for the star. Hubs,
// links and satellites; hash keys and load metadata; and the mechanical mapping back to a star mart.
// Ten sections, ten scenes, ten wavs (18.2 min). Narration + wav ported verbatim from
// ~/Workspace/data-warehousing-ct and FROZEN — never edit a `narration`.
export const datavault: Course = {
  id: 'datavault',
  title: 'Data Vault Modeling',
  sections: [
    whyDataVaultExists,
    threeBuildingBlocks,
    hubs,
    links,
    satellites,
    hashKeys,
    rawVsBusinessVault,
    vaultVsDimensional,
    vaultToStar,
    whenToUseDataVault,
  ],
}

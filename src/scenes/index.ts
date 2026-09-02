import type { Scene } from '../render-engine'
import { foundationsScenes } from './foundations'
import { keysScenes } from './keys'
import { factsScenes } from './facts'
import { dimensionsScenes } from './dimensions'
import { schemasScenes } from './schemas'
import { historyScenes } from './history'
import { datavaultScenes } from './datavault'
import { designScenes } from './design'
import { loadingScenes } from './loading'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. Courses are added here as they're authored, one slice at a time:
// foundations → keys → facts → dimensions → schemas → history.
const ALL: Scene[] = [...foundationsScenes, ...keysScenes, ...factsScenes, ...dimensionsScenes, ...schemasScenes, ...historyScenes, ...datavaultScenes, ...designScenes, ...loadingScenes]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}

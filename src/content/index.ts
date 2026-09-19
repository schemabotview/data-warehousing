import { foundations } from './foundations'
import { keys } from './keys'
import { facts } from './facts'
import { dimensions } from './dimensions'
import { schemas } from './schemas'
import { history } from './history'
import { datavault } from './datavault'
import { design } from './design'
import { loading } from './loading'
import { platform } from './platform'
import type { Course, Section } from './types'

// The course catalog, in syllabus order. → past a course's last section rolls into the next course's
// first. Courses are added here as they're authored, one slice at a time — and their ORDER IS FIXED:
// the ported narration cross-references its neighbours by module number ("recall module two", "that's
// module six"), so course N must stay module N of the ten-module spine:
//   1 foundations · 2 keys · 3 facts · 4 dimensions · 5 schemas · 6 history
//   (later appends, in order: 7 datavault · 8 design · 9 loading · 10 platform)
export const COURSES: Record<string, Course> = {
  [foundations.id]: foundations,
  [keys.id]: keys,
  [facts.id]: facts,
  [dimensions.id]: dimensions,
  [schemas.id]: schemas,
  [history.id]: history,
  [datavault.id]: datavault,
  [design.id]: design,
  [loading.id]: loading,
  [platform.id]: platform,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract the recorder drives, so it cannot be a per-repo decision. Re-exported here because
// this module is what the app and the scripts already import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}

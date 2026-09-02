import { foundations } from './foundations'
import { keys } from './keys'
import { facts } from './facts'
import { dimensions } from './dimensions'
import { schemas } from './schemas'
import { history } from './history'
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
}

export type { Course, Section }

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}

// The slug for a section is `<courseId>-<sectionId>` — section IS the unit (one slide, one
// narration), so no trailing beat index.
export function slugOf(course: Course, section: Section): string {
  return `${course.id}-${section.id}`
}

export function allSections(course: Course): { section: Section; slug: string }[] {
  return course.sections.map((section) => ({ section, slug: slugOf(course, section) }))
}

import type { Scene } from '@graphlearning/flow'

// §10 the decision — the course closes on a default and its exceptions, which is a decision tree,
// not a list. Snowflaking is drawn as a scalpel applied to ONE dimension rather than a whole-schema
// choice, because that is the mistake this section exists to prevent.
export const choosingASchema: Scene = {
  id: 'choosing-a-schema',
  title: 'Choosing a schema',
  nodes: [
    { id: 'default', label: 'Start with a star', sub: 'flat dimensions — the default, always', pattern: 'service', icon: 'star' },
    {
      id: 'exceptions',
      label: 'Snowflake ONE dimension, and only for a reason',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ex-huge', label: 'A huge sub-tree', sub: 'a real storage saving', pattern: 'external', icon: 'harddrive' },
        { id: 'ex-shared', label: 'A shared sub-dim', sub: 'an outrigger — DIM_GEOGRAPHY', pattern: 'external', icon: 'globe' },
        { id: 'ex-rule', label: 'A governance rule', sub: 'the tooling mandates it', pattern: 'external', icon: 'scroll' },
      ],
    },
    { id: 'galaxy', label: 'Grow to a galaxy', sub: 'each process is another star', pattern: 'user', icon: 'boxes' },
    { id: 'tilt', label: 'The modern tilt', sub: 'columnar MPP makes joins and storage cheaper still', pattern: 'user', icon: 'cloud' },
  ],
  edges: [
    { source: 'default', target: 'exceptions', label: 'deviate only with a reason you can name' },
    { source: 'exceptions', target: 'galaxy', label: 'a scalpel, not the default — then add each new process as another star, reusing the conformed dimensions' },
    { source: 'galaxy', target: 'tilt', label: 'which pushes even harder toward the flat star, and away from snowflaking — module 10 returns to this' },
  ],
}

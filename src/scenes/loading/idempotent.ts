import type { Scene } from '../../render-engine'

// §9 idempotence — the section the whole course has been pointing at since module 06's merge. The
// framing that makes it stick: pipelines fail, so the only question is what a RE-RUN does. Each
// technique is paired with the blind alternative it replaces, because that contrast is the lesson.
export const idempotent: Scene = {
  id: 'idempotent',
  title: 'Pipelines fail — what matters is the re-run',
  nodes: [
    {
      id: 'idem',
      label: 'Idempotent — running twice equals running once',
      kind: 'table',
      pattern: 'storage',
      headers: ['Do this', 'Instead of', 'So that'],
      values: [
        ['MERGE on the natural key', 'a blind INSERT', 'a re-run updates, never duplicates'],
        ['Delete-then-insert a partition', 'appending to it', 'the partition is replaced, not grown'],
        ['Deterministic hash keys', 'generated sequences', 'duplicates collapse onto themselves'],
      ],
    },
    {
      id: 'restart',
      label: 'Restartable — resume after a failure',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rs-stage', label: 'Staging checkpoint', sub: 're-transform, never re-extract', pattern: 'service', icon: 'harddrive' },
        { id: 'rs-state', label: 'Per-step state', sub: 'resume at the first incomplete step', pattern: 'service', icon: 'workflow' },
        { id: 'rs-hwm', label: 'High-water mark', sub: 'advances only on success', pattern: 'service', icon: 'ruler' },
      ],
    },
    { id: 'backbone', label: 'Failure is a re-run', sub: 'not a 2am hand-repair', pattern: 'user', icon: 'repeat' },
  ],
  edges: [
    { source: 'idem', target: 'restart' },
    { source: 'restart', target: 'backbone', label: 'the same guarantee the SCD-2 merge gave one table, now covering the whole pipeline' },
  ],
}

import type { Scene } from '../../render-engine'

// §10 the load — the course ends on the mechanism, so this is a decision procedure: match on the
// natural key, then one of four outcomes. The hash comparison and the idempotence requirement are
// the two details that make it work in production, and idempotence is where module 09 picks up.
export const scd2Merge: Scene = {
  id: 'scd2-merge',
  title: 'Loading an SCD-2 dimension',
  nodes: [
    { id: 'match', label: 'Match source to dim', sub: 'on the NATURAL key — never the surrogate', pattern: 'service', icon: 'merge' },
    {
      id: 'outcomes',
      label: 'Then exactly one of four things happens',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'oc-new', label: 'New natural key', sub: 'INSERT · new SK · current = Y', pattern: 'storage', icon: 'circlecheck' },
        { id: 'oc-changed', label: 'Tracked attr changed', sub: 'expire the old, insert a new version', pattern: 'user', icon: 'history' },
        { id: 'oc-same', label: 'No change', sub: 'do nothing at all', pattern: 'external', icon: 'ban' },
        { id: 'oc-gone', label: 'Missing from source', sub: 'per policy — soft-delete or leave', pattern: 'external', icon: 'circleslash' },
      ],
    },
    {
      id: 'how',
      kind: 'code',
      filename: 'expire-and-insert, as one MERGE',
      label: [
        '-- detect change cheaply: compare a hash of the tracked columns',
        'UPDATE dim SET expiry_date = today, is_current = \'N\'  -- matched + changed',
        'INSERT INTO dim (...) VALUES (new_sk, ..., today, \'9999-12-31\', \'Y\')',
      ].join('\n'),
    },
    { id: 'idem', label: 'Must be idempotent', sub: 're-running creates no duplicate versions', pattern: 'warn', icon: 'repeat' },
  ],
  edges: [
    { source: 'match', target: 'outcomes' },
    { source: 'outcomes', target: 'how', label: 'one SQL MERGE — matched and changed updates, unmatched inserts — or a dbt snapshot' },
    { source: 'how', target: 'idem', label: 'so a failed load is safe to restart' },
  ],
}

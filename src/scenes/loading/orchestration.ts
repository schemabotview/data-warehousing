import type { Scene } from '../../render-engine'

// §10 orchestration + data quality — the course closes on the two things that make a pipeline
// trustworthy rather than merely working. The DAG restates §8's ordering as an operational fact, and
// the checks end on the rule that matters most: fail or quarantine, never publish wrong numbers.
export const orchestration: Scene = {
  id: 'orchestration',
  title: 'Orchestration & data quality',
  nodes: [
    {
      id: 'dag',
      label: 'The pipeline as a DAG — Airflow, dbt, cloud schedulers',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'dg-x', label: 'Extract', pattern: 'external', icon: 'funnel' },
        { id: 'dg-s', label: 'Stage', pattern: 'service', icon: 'harddrive' },
        { id: 'dg-t', label: 'Transform', pattern: 'service', icon: 'gears' },
        { id: 'dg-d', label: 'Dimensions', pattern: 'user', icon: 'layers' },
        { id: 'dg-f', label: 'Facts', pattern: 'storage', icon: 'sigma' },
      ],
      edges: [
        { source: 'dg-x', target: 'dg-s' }, { source: 'dg-s', target: 'dg-t' },
        { source: 'dg-t', target: 'dg-d' }, { source: 'dg-d', target: 'dg-f' },
      ],
    },
    {
      id: 'checks',
      label: 'Then verify the result',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ck-rows', label: 'Row counts', sub: 'a drop means a broken feed', pattern: 'service', icon: 'hash' },
        { id: 'ck-keys', label: 'Unique & not-null', sub: 'PKs unique, FKs all resolve', pattern: 'service', icon: 'key' },
        { id: 'ck-range', label: 'Range & domain', sub: 'no negative quantities, sane dates', pattern: 'service', icon: 'gauge' },
        { id: 'ck-recon', label: 'Reconciliation', sub: 'warehouse totals tie to source totals', pattern: 'service', icon: 'scale' },
      ],
    },
    { id: 'rule', label: 'Fail or quarantine', sub: 'never publish wrong numbers', pattern: 'warn', icon: 'ban' },
    { id: 'loop', label: 'Reliable AND trustworthy', sub: 'only now is it ready for BI', pattern: 'user', icon: 'circlecheck' },
  ],
  edges: [
    { source: 'dag', target: 'checks', label: 'order, schedule, retries, and resume-from-checkpoint — dimensions before facts, every run' },
    { source: 'checks', target: 'rule' },
    { source: 'rule', target: 'loop', label: 'orchestration makes the pipeline reliable; the checks make it trustworthy' },
  ],
}

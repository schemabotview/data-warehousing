import type { Scene } from '../../render-engine'

// §8 the lakehouse — the claim is architectural: warehouse management placed ON lake storage, so the
// picture must be a STACK, not a comparison. Read bottom-up: cheap object storage, open columnar
// files, then the transactional table layer that supplies the warehouse guarantees — and one copy at
// the top serving both BI and ML, which is the whole point.
export const lakehouseStack: Scene = {
  id: 'lakehouse-stack',
  title: 'The lakehouse',
  flow: 'BT',
  nodes: [
    { id: 'obj', label: 'Cheap object storage', sub: 'the lake, unchanged', pattern: 'external', icon: 'harddrive' },
    { id: 'files', label: 'Open files', sub: 'Parquet — open, not proprietary', pattern: 'external', icon: 'file' },
    {
      id: 'layer',
      label: 'Transactional table layer — Delta · Iceberg · Hudi',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'g-acid', label: 'ACID', sub: 'commits, not half-written folders', pattern: 'service', icon: 'shieldcheck' },
        { id: 'g-schema', label: 'Schema enforcement', sub: 'and evolution', pattern: 'service', icon: 'lock' },
        { id: 'g-time', label: 'Time travel', sub: 'query an earlier version', pattern: 'service', icon: 'history' },
      ],
    },
    {
      id: 'consumers',
      label: 'BI and ML — on ONE copy',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'c-bi', label: 'Dashboards', sub: 'the warehouse audience', pattern: 'user', icon: 'barchart' },
        { id: 'c-ml', label: 'Data science', sub: 'the lake audience', pattern: 'user', icon: 'brain' },
      ],
    },
  ],
  edges: [
    { source: 'obj', target: 'files', label: 'stored as open columnar files — any engine can read them' },
    { source: 'files', target: 'layer', label: 'managed by' },
    { source: 'layer', target: 'consumers', label: 'ends the copy-twice split: land raw, then curate in place' },
  ],
}

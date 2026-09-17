import type { Scene } from '@graphlearning/flow'

// §4 components — the one genuine SYSTEM MAP of the course: sources → ETL → storage → marts → BI,
// left to right, with metadata underneath as the strip that makes the whole thing governable. Every
// later course is a zoom into the `store` box, so this frame is the mental model the concept hangs on.
export const warehousePipeline: Scene = {
  id: 'warehouse-pipeline',
  title: 'The warehouse, end to end',
  nodes: [
    {
      id: 'sources',
      label: 'Data sources',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 's-oltp', label: 'OLTP DBs', sub: 'orders, customers', pattern: 'storage', icon: 'database' },
        { id: 's-files', label: 'Files & APIs', sub: 'CSV · JSON · logs', pattern: 'external', icon: 'file' },
        { id: 's-saas', label: 'SaaS apps', sub: 'CRM · ERP', pattern: 'external', icon: 'cloud' },
      ],
    },
    {
      id: 'etl',
      label: 'ETL / ELT',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'e-stage', label: 'Staging', sub: 'raw extracts land here', pattern: 'service', icon: 'harddrive' },
        { id: 'e-transform', label: 'Transform', sub: 'clean · conform · dedupe', pattern: 'service', icon: 'funnel' },
      ],
      edges: [{ source: 'e-stage', target: 'e-transform' }],
    },
    {
      id: 'store',
      label: 'Storage — the curated warehouse',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'st-fact', label: 'Fact tables', sub: 'the measures', pattern: 'storage', icon: 'sigma' },
        { id: 'st-dim', label: 'Dimensions', sub: 'the context', pattern: 'storage', icon: 'layers' },
      ],
    },
    {
      id: 'marts',
      label: 'Data marts',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'm-sales', label: 'Sales', pattern: 'user', icon: 'chartpie' },
        { id: 'm-finance', label: 'Finance', pattern: 'user', icon: 'chartpie' },
        { id: 'm-mktg', label: 'Marketing', pattern: 'user', icon: 'chartpie' },
      ],
    },
    {
      id: 'bi',
      label: 'Access & BI',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'b-dash', label: 'Dashboards', pattern: 'user', icon: 'barchart' },
        { id: 'b-adhoc', label: 'Ad-hoc / OLAP', pattern: 'user', icon: 'search' },
        { id: 'b-ds', label: 'Data science', pattern: 'user', icon: 'brain' },
      ],
    },
    { id: 'meta', label: 'Metadata & catalog', sub: 'definitions · lineage · governance', pattern: 'external', icon: 'scroll' },
  ],
  edges: [
    { source: 'sources', target: 'etl', label: 'extract' },
    { source: 'etl', target: 'store', label: 'load' },
    { source: 'store', target: 'marts', label: 'subset' },
    { source: 'marts', target: 'bi', label: 'query' },
    { source: 'meta', target: 'store', label: 'describes every box on this line' },
  ],
}

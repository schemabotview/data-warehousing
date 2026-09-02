import type { Scene } from '../../render-engine'

// §10 the modeling journey — a descent from business language to DDL, so the scene is three stacked
// levels with the SAME idea restated at each one (a customer buys a product → tables and keys →
// real types and partitions). Showing one thread survive all three levels is what makes the levels
// mean anything; naming them alone does not. It also sets up where the rest of the spine sits.
export const threeLevels: Scene = {
  id: 'three-levels',
  title: 'Conceptual → logical → physical',
  nodes: [
    {
      id: 'conceptual',
      label: 'Conceptual — no technology',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cn-what', label: 'Entities & relations', sub: 'customer buys product', pattern: 'user', icon: 'users' },
        { id: 'cn-who', label: 'Stakeholders validate', sub: 'business language only', pattern: 'user', icon: 'usercheck' },
      ],
    },
    {
      id: 'logical',
      label: 'Logical — platform-independent',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lg-what', label: 'Tables & keys', sub: 'normalised, or facts & dimensions', pattern: 'service', icon: 'table' },
        { id: 'lg-where', label: 'Courses 2 to 6 live here', sub: 'keys · facts · dims · schemas · SCD', pattern: 'service', icon: 'layers' },
      ],
    },
    {
      id: 'physical',
      label: 'Physical — a real build on a real platform',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ph-what', label: 'DDL & data types', sub: 'indexes · partitioning · tuning', pattern: 'storage', icon: 'code' },
        { id: 'ph-where', label: 'Module 10 lives here', sub: 'cloud & MPP', pattern: 'storage', icon: 'cloud' },
      ],
    },
  ],
  edges: [
    { source: 'conceptual', target: 'logical', label: 'agree the concepts, THEN design the structure' },
    { source: 'logical', target: 'physical', label: 'and only then commit to a platform' },
  ],
}

import type { Scene } from '@graphlearning/flow'

// §7 the physical walkthrough — the first board in the course to show REAL COLUMNS, which is what
// makes it different from §1's shape and §2's anatomy. FACT_SALES is drawn as a schema table so the
// four column groups (surrogate PK, FKs, degenerate dims, measures) are visible in one read.
export const jabraStar: Scene = {
  id: 'jabra-star',
  title: 'The Jabra Sales star, physically',
  nodes: [
    {
      id: 'fact',
      label: 'FACT_SALES',
      sub: 'grain: one order line — surrogate PK, then FKs, then degenerate dims, then measures',
      kind: 'table',
      pattern: 'storage',
      columns: [
        { name: 'sales_key', type: 'int', key: 'PK' },
        { name: 'order_date_key', type: 'int', key: 'FK' },
        { name: 'customer_key', type: 'int', key: 'FK' },
        { name: 'product_key', type: 'int', key: 'FK' },
        { name: 'channel_key', type: 'int', key: 'FK' },
        { name: 'promotion_key', type: 'int', key: 'FK' },
        { name: 'order_id', type: 'varchar' },
        { name: 'order_status', type: 'varchar' },
        { name: 'quantity', type: 'int' },
        { name: 'line_total', type: 'decimal' },
      ],
    },
    {
      id: 'points',
      label: 'The five points',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'jp-date', label: 'DIM_DATE', sub: 'YYYYMMDD · calendar + fiscal', pattern: 'service', icon: 'calendar' },
        { id: 'jp-cust', label: 'DIM_CUSTOMER', sub: 'SCD-2 · geography + history', pattern: 'user', icon: 'users' },
        { id: 'jp-prod', label: 'DIM_PRODUCT', sub: 'SCD-2 · line, category, price', pattern: 'user', icon: 'package' },
        { id: 'jp-chan', label: 'DIM_CHANNEL', sub: 'small and conformed', pattern: 'service', icon: 'workflow' },
        { id: 'jp-promo', label: 'DIM_PROMOTION', sub: 'campaigns and discounts', pattern: 'service', icon: 'tag' },
        { id: 'jp-audit', label: 'Audit columns', sub: 'insert_dt · update_dt', pattern: 'external', icon: 'scroll' },
      ],
    },
  ],
  edges: [{ source: 'fact', target: 'points', label: 'surrogate keys everywhere, the natural key kept to trace the source, and SCD-2 on the two dimensions that change' }],
}

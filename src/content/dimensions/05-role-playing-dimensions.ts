import type { Section } from '../types'

export const rolePlayingDimensions: Section = {
  id: 'role-playing-dimensions',
  title: 'Role-playing dimensions',
  scene: 'role-playing',
  slide: `## Role-playing dimensions

Three date columns on the fact do **not** need three date tables — copies would drift. Build one, and join it once per role.

### One table, many roles

- \`FACT_SALES\` records an **order date**; \`FACT_SHIPMENT\` records a **ship** and a **delivery** date
- All three are dates, so all three point at the **same** \`DIM_DATE\`
- Three copies would drift apart — and each would need its own load

### Make the roles readable

- **Alias** each join, so the query reads naturally and columns don't collide
- Or expose a **view per role** — \`dim_ship_date\`, \`dim_delivery_date\`

### Beyond dates

- **Employee** as \`seller_key\` and \`buyer_key\` on one fact
- **Geography** as \`origin\` and \`destination\` on a shipment
`,
  narration:
    'Role-playing dimensions. One physical dimension table can appear several times in the same fact, each time in a different role. That\'s a role-playing dimension — one table, many jobs. The date dimension is the classic case. The shipment fact records two dates: when a parcel shipped, and when it was delivered. The sales fact records the order date. All three are dates — so all three point at the same dim date. You do not build a separate dim order date, dim ship date, and dim delivery date — that would triplicate the same calendar and let the copies drift apart. You build one dim date, and join it as many times as there are date columns, each join playing a different role. For that to work, each join needs its own alias, so a query reads naturally and the columns don\'t collide. So you join dim date once as "o" on the ship-date key, and again as "d" on the delivery-date key, and now you can select the order month from one and the delivery month from the other. Some teams go a step further and expose each role as a view — a view for order date, a view for ship date — over the one physical table, so BI tools show tidy, role-named fields. And it\'s not just dates. Any reused dimension can role-play. An employee dimension can appear as both the seller key and the buyer key on the same fact. A geography dimension can appear as both origin and destination on a shipment. The principle is always the same: one physical table, joined once per role, aliased per use. Role-playing keeps a single conformed dimension, while letting a fact reference it from several angles.',
}

import type { Section } from '../types'

export const inmonVsKimball: Section = {
  id: 'inmon-vs-kimball',
  title: 'Inmon vs Kimball — top-down vs bottom-up',
  scene: 'top-down-bottom-up',
  slide: `## Inmon vs Kimball

The field's oldest argument is not about the destination. Both end with an integrated warehouse and dimensional marts — they disagree about **which one you build first**.

### Two approaches — where do you start?

- **Inmon (top-down)** — build the **enterprise warehouse** first (normalized), derive marts from it
- **Kimball (bottom-up)** — build **dimensional marts** first (star), warehouse emerges

### Trade-offs

- **Inmon** — consistent, robust · but slower & heavier up front
- **Kimball** — fast, business-friendly · but needs **conformed dimensions** or silos

### Modern take

- Often **hybrid** — integrated core (Inmon / Data Vault) feeding Kimball marts for BI
`,
  narration:
    "Inmon versus Kimball — top-down versus bottom-up. The two foundational approaches to warehouse design come from Bill Inmon and Ralph Kimball, and they disagree on one thing: where you start. Inmon is top-down. You build one enterprise data warehouse first — a single, integrated, normalized repository for the whole organization, the corporate single source of truth. Then you derive departmental data marts from it. The upside is enterprise-wide consistency, less redundancy, and a robust foundation. The downside is that it's slower and more expensive to deliver value, because there's heavy modeling up front. Kimball is bottom-up. You build dimensional data marts first, one business process at a time — sales, then inventory, and so on — each one a star schema. The enterprise warehouse then emerges as the union of those marts, tied together by conformed dimensions — shared customer, date, and product tables — through what's called the bus architecture. The upside is that it's fast to deliver, business-friendly, and easy to query. The downside is that it takes discipline: without conformed dimensions, the marts drift into silos. So which one? Inmon suits complex enterprises that need a governed, integrated core; Kimball suits teams that need value quickly and simple queries. In practice, many real warehouses are hybrid — an integrated core, Inmon-style or built as a Data Vault, feeding Kimball-style dimensional marts for consumption. And it's the dimensional model, Kimball's, that most B-I users actually touch.",
}

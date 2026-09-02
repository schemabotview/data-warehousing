import type { Section } from '../types'

export const surrogateKeysInDimensions: Section = {
  id: 'surrogate-keys-in-dimensions',
  title: 'Surrogate keys in dimensions',
  scene: 'two-keys',
  slide: `## Surrogate keys in dimensions

Every dimension carries **two** keys: the surrogate the fact joins on, and the natural key from the source. The pair is what makes history possible.

### Two keys on every dimension

- \`customer_key\` — **surrogate** PK, the fact points at it
- \`customer_id\` — **natural** key from the source system

### Why a surrogate

- **Decoupled** from source renumbering & merges
- **Fast, narrow** integer joins
- Reserve \`0\` for the **"Unknown"** member — never a NULL FK

### The crucial one — it enables **history**

- Ana moves Madrid → Barcelona: **two rows**, same \`customer_id\`, new \`customer_key\`
- Each fact points at the version **current at sale time**
- That's a **Slowly Changing Dimension** — full detail in module 06
`,
  narration:
    "Surrogate keys in dimensions. Every dimension is built on a surrogate key — a warehouse-generated integer that identifies each row, kept deliberately separate from the source system's natural, or business, key. In the Jabra model, dim customer carries both. There's the customer key — the surrogate, say eleven-oh-one — which is meaningless outside the warehouse and is the thing the fact's foreign key points at. And there's the customer i-d — the natural key, like C-four-four-seven-one — which is the identifier the source operational system uses. So why build on a surrogate, and not just use the natural key? Three reasons. First, it's decoupled from the source — if the source renumbers its customers, or two merged systems both use C-one, the warehouse key is unaffected. Second, joins are fast and narrow — a four-byte integer beats a text business code on a fact of millions of rows. And third, it gives you a slot for the unknown member — you reserve zero, or minus one, for unknown or not-yet-arrived, so a fact with a missing lookup gets a real key, never a null foreign key. That's how late-arriving facts are handled cleanly. But here's the crucial reason warehouses insist on it. When a dimension attribute changes over time — Ana moves from Madrid to Barcelona — a surrogate key lets you keep both versions as separate rows: the same customer i-d, C-four-four-seven-one, but two different customer keys — the old one, and a new one. Each fact row points at whichever version was current when the sale actually happened, so history stays correct. A natural key alone can't do this — it identifies the customer, but not which version of them. That technique is a slowly changing dimension, and it gets the full, type-by-type treatment in module 06. For now, the takeaway is one line: the surrogate key is the hinge that slowly changing dimensions turn on. Give every dimension one, keep the natural key beside it, and reserve a key for the unknown member.",
}

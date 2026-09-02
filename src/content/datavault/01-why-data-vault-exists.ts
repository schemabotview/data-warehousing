import type { Section } from '../types'

export const whyDataVaultExists: Section = {
  id: 'why-data-vault-exists',
  title: 'Why Data Vault exists — agility & auditability',
  scene: 'why-vault',
  slide: `## Why Data Vault exists

The star is superb to query and **rigid to change**. Data Vault separates business keys, relationships and context so each can change on its own.

### The star's weakness for integration

- New source / relationship / grain → re-engineer facts & dims
- History **bolted on** via SCD

### Built for the raw integration layer

- **Agility** — absorb change by **adding** tables, never restructuring
- **Auditability** — every row stamped **source + load time**, never overwritten
- **Parallel loading** — hubs, links, sats load independently → scales to MPP

### The core idea

- Separate **business keys · relationships · context**
- Three table types: **hubs · links · satellites** — each evolves alone

### A layer, not a rival

- Vault **integrates & preserves** · a **star mart** sits on top to query
`,
  narration:
    "Why Data Vault exists — agility and auditability. The star schema, from modules three through six, is a superb reporting model. But point it straight at a messy, changing enterprise, and its weakness shows: it's rigid. A new source system, a new relationship, or a change of grain can force you to re-engineer facts and dimensions, and reload history. And history itself is bolted on, through slowly changing dimensions. For a large, multi-source, long-lived warehouse, that brittleness is a real cost. Data Vault is a different modeling methodology — Dan Linstedt's — built not for the query layer, but for the raw integration layer underneath it. And it's engineered for three things a star struggles with. First, agility: it absorbs a new source or relationship by adding tables, never by restructuring the existing ones. The model grows; it doesn't get rebuilt. Second, auditability: every row is stamped with where it came from and when it loaded, and nothing is ever overwritten. The vault is the immutable system of record — you can always prove exactly what a source said, and when. And third, scalable, parallel loading: the structure lets hubs, links, and satellites load independently and in parallel, so it scales to huge volumes and to massively parallel platforms. The core idea is this. Data Vault separates three concerns that a star fuses together: business keys, relationships, and descriptive or historical context. It splits them into three table types — hubs, links, and satellites — so each can evolve on its own. New attribute? Add a satellite. New relationship? Add a link. New entity? Add a hub. The existing structures are left untouched. And crucially, Data Vault does not replace the star. It sits beneath it. The vault integrates and preserves raw data from every source, and a star information mart is built on top for people to query. So you get the vault's flexibility and audit trail, and the star's fast, friendly reporting. Data Vault exists to make the enterprise integration layer agile and auditable — add-only structures, full history, and source lineage on every row — feeding star marts, rather than replacing them.",
}

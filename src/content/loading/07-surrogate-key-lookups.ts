import type { Section } from '../types'

export const surrogateKeyLookups: Section = {
  id: 'surrogate-key-lookups',
  title: 'Surrogate key generation & lookups',
  scene: 'key-lookup',
  slide: `## Surrogate key generation & lookups

Module 08 mentioned this step in one line. It is the heart of dimensional loading: the dimension **mints** the key, and the fact **resolves** it.

### Generation — dimensions mint their keys

- New member → generate a **surrogate**: sequence / identity / hash (DV)
- Dims **own** their keys; natural key rides along · reserve \`0\` = **Unknown**

### Lookup — facts resolve keys at load

- Source fact has only **natural** keys → look each up:
- The surrogates become the fact's **FKs**

### Handling the misses

- **Not found** → load its dim first, or point at **Unknown** + backfill (late-arriving)
- **SCD-2** → grab the version **current at the event date**, not just \`is_current\`

### Why it's the crux

- Makes the star **join correctly** and **preserves history**
`,
  narration:
    'Surrogate key generation and lookups. Module eight mentioned "look the natural key up to get the surrogate." This section is that mechanic in full — because the surrogate-key pipeline is the heart of dimensional loading, the thing that wires every fact row to the right dimension rows. First, generation — dimensions mint their keys. When a new dimension member is loaded, the load generates its surrogate key — from a database sequence, an identity or auto-increment column, or a hash, which is the Data Vault approach from module seven. Dimensions own their keys; the natural key just rides along as an attribute. And you reserve key zero, or minus one, for the unknown member, from module four. Second, lookup — facts resolve keys at load. A source fact row carries only natural keys — C-four-four-seven-one, P-88. So before writing the fact, the load looks each natural key up in its dimension, to fetch the surrogate foreign key. C-four-four-seven-one resolves, through dim customer, to customer key eleven-oh-one. P-88 resolves, through dim product, to product key two-oh-four. Those surrogates become the fact row\'s foreign keys. Every dimension key on the fact goes through this translation. Now, handling the misses. If a natural key isn\'t found, you either load its dimension first — section eight — or you point the fact at the unknown member and backfill later; that\'s a late-arriving fact. And for SCD-2 dimensions, don\'t just grab the is-current row — look up the version that was current at the fact\'s event date, where the event date falls between the effective and expiry dates; that\'s module six. That\'s exactly what keeps a historical sale linked to the customer\'s then-address. Why is this the crux? Because this lookup is what makes the star join correctly, and what preserves history. Get it right, and every fact foreign key resolves to the exact dimension version it should. Get it wrong, and reports silently mis-attribute. So: the surrogate-key pipeline generates keys when dimensions load, then resolves each fact\'s natural keys to surrogate foreign keys at load time — using the SCD-2 version current at the event date, and the unknown member for any misses.',
}

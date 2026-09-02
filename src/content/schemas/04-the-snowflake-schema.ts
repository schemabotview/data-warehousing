import type { Section } from '../types'

export const theSnowflakeSchema: Section = {
  id: 'the-snowflake-schema',
  title: 'The snowflake schema',
  scene: 'snowflake-shape',
  slide: `## The snowflake schema

The same star, with its dimensions **normalized** into sub-tables — until the diagram sprouts enough branches to look like a snowflake.

### A star with **normalized** dimensions

- Each dimension split into related **sub-dimension** tables
- Dimensions sprout sub-dims → the diagram looks like a **snowflake**

### A real one — the outrigger

- Shared, normalized sub-dim = an **outrigger** (maintain once)

### Costs & saves

- **Saves** — less redundancy, less storage
- **Costs** — more joins, more FKs, complex SQL, slower reads
- **Bottom-up** design (vs the star's top-down)
`,
  narration:
    "The snowflake schema. The snowflake schema is an extension of the star where one or more dimensions are normalized — split back out into related sub-dimension tables. Where a star keeps each dimension flat, a snowflake lets a dimension branch into levels. Take dim product. In a star, category and product line are just columns on the one table. Snowflake it, and those become their own tables. Dim product now holds a category key pointing at dim category, which in turn points at dim product line. The dimension has become a little multi-level tree — and the diagram, with dimensions sprouting sub-dimensions off the central fact, looks like a snowflake. The Jabra model actually has a genuine snowflake branch. Dim warehouse doesn't store its own city and region — it carries a geography key to a shared dim geography table. So the path runs from the shipment fact, to dim warehouse, to dim geography. A normalized sub-dimension shared this way has a name: an outrigger. And it's useful when the same geography is reused by several dimensions and you want to maintain it in just one place. So what does snowflaking cost, and save? It saves space and cuts redundancy — product line is stored once, in its own table, instead of being repeated on every product row. But it costs joins and clarity: a query for sales by product line must now chain from the fact, to dim product, to dim category, to dim product line. More joins, more foreign keys, more complex SQL, and slower reads. It's a bottom-up design — you build the normalized pieces up — versus the star's top-down, where you start from the flat dimension. So a snowflake normalizes dimensions into sub-tables: less redundancy and storage, but more joins and complexity. It's a star with its dimensions un-flattened — and whether that's worth it is exactly the next section.",
}

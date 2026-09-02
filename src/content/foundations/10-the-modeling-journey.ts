import type { Section } from '../types'

export const theModelingJourney: Section = {
  id: 'the-modeling-journey',
  title: 'The modeling journey — conceptual, logical, physical',
  scene: 'three-levels',
  slide: `## The modeling journey

A model descends three levels, from business language to real DDL. Agree the **concepts** first; commit to a **platform** last.

### Three levels, business → tables

- **Conceptual** — key **entities & relationships**, no tech (stakeholders validate)
- **Logical** — tables, columns, **keys**, normalized or **facts & dimensions** (platform-independent)
- **Physical** — real DDL: data types, **indexes, partitioning**, platform tuning

### Why top-down

- Agree **concepts** with the business → design **logical** structure → commit to a **physical** build

### In this course

- Modules 02–08 = **logical** (keys, facts, dims, schemas) · Module 10 = **physical** (cloud & MPP)
`,
  narration:
    "The modeling journey — conceptual, logical, and physical. Designing the data itself moves through three levels of abstraction, from a business idea down to running tables. Each level adds detail, and each has its own audience. The conceptual model is the big-picture view: the key business entities and how they relate, with no technology in sight. A customer places orders; an order contains products. It's boxes and lines that a business stakeholder can look at and validate. No columns, no keys, no data types yet. The logical model adds structure, but stays platform-independent. Entities become tables, attributes become columns, and relationships get keys — primary and foreign. The design gets normalized, if it's for a transaction system, or shaped into facts and dimensions, if it's for a warehouse. Data types stay generic. This is where the real modeling decisions live. The physical model makes it concrete on a specific platform: the exact S-Q-L data types, indexes, partitioning, the actual create-table statements, and platform tuning. Now the names and structures match what the database engine will really run. Why bother with the levels? Working top-down keeps the design honest. You agree the concepts with the business, you work out the logical structure without arguing about the database, and only then do you commit to a physical implementation. In this course, modules two through eight live mostly at the logical level — keys, facts, dimensions, and schemas — and module ten, on cloud and M-P-P, is where the physical choices like distribution and partitioning really pay off.",
}

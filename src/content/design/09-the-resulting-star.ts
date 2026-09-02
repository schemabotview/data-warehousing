import type { Section } from '../types'

export const theResultingStar: Section = {
  id: 'the-resulting-star',
  title: 'The resulting star — end to end',
  scene: 'resulting-star',
  slide: `## The resulting star — end to end

Each of the four steps became one part of the star. The proof is a query the business actually asks, answered with one fact and three joins.

### Four steps in → a star out

- **Process** → the fact table · **Grain** → what one of its rows means
- **Dimensions** → the points of the star · **Facts** → the measures at its centre
- \`order_id\` rides along as a **degenerate dimension** — an id with no table

### Prove it answers the business

- *"Revenue by month, by product line, by region"* — one fact, **three joins**
- Measures come from the **centre**; every slice comes from a **point**
- No joins between dimensions, so every future question has the same shape

### That is the whole method

- A blank page and a business became a model that answers the question it started from
`,
  narration:
    'The resulting star — end to end. Put the pieces together, and the design is complete: FACT SALES at the centre, five dimensions around it — a star, derived entirely by running the four steps on one bill. Dim date, dim customer, dim product, dim channel, and dim promotion ring the fact; and order i-d and order status sit on the fact itself, as degenerate dimensions. Now trace the whole design, because every part of the star traces back to a step. The process — step one, the sales order — is why the fact exists at all. The grain — step two, one order line — is what a fact row means. The dimensions — step three: date, customer, product, channel, promotion — are the points of the star. And the facts — step four: quantity through line total — are the measures at the centre. Four questions in, a working star out. But the real test of a model is whether it answers the questions that motivated it. So watch the star join do exactly that. Select the month name, the product line, the region, and the sum of line total. From fact sales, joined to dim date on the order-date key, to dim product on the product key, and to dim customer on the customer key. Grouped by month, product line, and region. That\'s "revenue by month, by product line, by region" — one fact, three dimension joins, one aggregate. The design works: measures from the centre, slices from the points, every question the same shape. And that gives us the four steps mapped cleanly onto the star. The process is the star\'s subject. The grain is its rows. The dimensions are its points. And the facts are its centre. That\'s the whole method, and the whole star. So: run the four steps, and a validated star falls out — fact at the centre, dimensions as points, answering "measure by attribute" queries directly. The design is proven by the very query it was built to serve.',
}

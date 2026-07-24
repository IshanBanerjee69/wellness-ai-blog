# How to add another startup

All startup content lives in `startups.js`. The layout is generated automatically.

1. Open `startups.js`.
2. Copy one complete startup block, beginning with `{` and ending with `},`.
3. Paste the copy before the final `];`.
4. Replace its name, official website, category, title, rating, short comparison details, and paragraphs.
5. Save and publish the changes.

The site automatically updates:

- startup numbering and total count;
- category filter buttons;
- the full article card;
- the comparison table;
- the usefulness rating.

To change the “Most interesting” startup, set its `featured` value to `true` and
set every other startup’s `featured` value to `false`. Add `featuredIntro` and
`featuredDetail` to control the two verdict paragraphs.

Available accent colors are `coral`, `gold`, and `blue`. Reusing colors is fine.

/**
 * Curated rotation list for the homepage "Topic of the Week" feature.
 *
 * Each entry is a lightweight reference, not duplicated content — the
 * actual title/teaser/href/emoji is resolved at render time against the
 * real source of truth (guideCategories, tools, or the inline fields
 * below for video/podcast/infographic types, which don't have their own
 * exported data registry). This keeps the rotation in sync automatically
 * if a guide's title or a tool's tagline ever changes.
 *
 * Entry shapes:
 *  - { type: 'guide', id }        — id must match guideCategories AND
 *                                    have a hero-images.js entry (i.e. be
 *                                    a full guide, never a 2-paragraph
 *                                    stub)
 *  - { type: 'tool', id }         — id must match tools.js
 *  - { type: 'video' | 'podcast' | 'infographic', title, teaser, href, emoji }
 *                                  — self-contained, since these content
 *                                    types aren't exported as structured
 *                                    data elsewhere in the codebase
 *
 * Rotation is deterministic and date-driven (ISO week number) — see
 * src/logic/topicOfWeek.js. It advances automatically every week with no
 * redeploy required, and loops back to the start once it reaches the end
 * of this list.
 *
 * To feature something on-demand (e.g. a brand-new guide the week it
 * launches) instead of waiting for its turn in rotation, set
 * `pinnedTopic` below. It takes priority over the rotation until the
 * `until` date (inclusive), then automatically falls back to normal
 * rotation — no need to remember to unset it.
 */

export const pinnedTopic = null
// Example:
// export const pinnedTopic = { type: 'guide', id: 'no-dig-gardening', until: '2026-07-20' }

export const topicOfWeek = [
  { type: 'guide', id: 'xeriscape' },
  { type: 'tool', id: 'fertilizer-calculator' },
  { type: 'guide', id: 'weed-management' },
  { type: 'tool', id: 'usda-zone-finder' },
  { type: 'guide', id: 'garden-pests' },
  { type: 'tool', id: 'companion-planting-checker' },
  { type: 'guide', id: 'four-season-garden' },
  {
    type: 'video',
    title: "Building the Quick Win Children's Garden",
    teaser: 'Our original video on getting kids growing fast with high-payoff, fast-germinating plants.',
    href: '/videos/',
    emoji: '🎬',
  },
  { type: 'guide', id: 'no-dig-gardening' },
  { type: 'tool', id: 'soil-calculator' },
  { type: 'guide', id: 'organic-fertilizing' },
  {
    type: 'podcast',
    title: 'Tricking Annuals Into Non-Stop Blooms',
    teaser: 'Our original podcast episode on deadheading and pinching tricks for a season-long flower show.',
    href: '/podcasts/',
    emoji: '🎙️',
  },
  { type: 'guide', id: 'rain-garden' },
  { type: 'tool', id: 'watering-calculator' },
  { type: 'guide', id: 'seed-saving' },
  {
    type: 'infographic',
    title: 'Companion Planting Quick Reference',
    teaser: 'A visual cheat-sheet for which plants help each other in the garden — and which to keep apart.',
    href: '/infographics/',
    emoji: '🖼️',
  },
  { type: 'guide', id: 'mulching-guide' },
  { type: 'tool', id: 'plant-spacing-calculator' },
  { type: 'guide', id: 'butterfly-garden' },
  {
    type: 'video',
    title: 'The Annual Garden Equation: Buying Time and Renting Color',
    teaser: 'Our original video on using annuals strategically for instant, budget-friendly curb appeal.',
    href: '/videos/',
    emoji: '🎬',
  },
]

export const japaneseGardenContent = {
  id: 'japanese-garden',
  hero: {
    emoji: '⛩️',
    title: 'Japanese Garden Elements',
    subtitle: 'Bring Tranquility and Harmony to Your Space with Japanese Garden Principles',
  },
  intro: 'Japanese gardens have been practiced and refined over more than a thousand years, drawing from Shinto reverence for nature, Buddhist contemplative traditions, and the aesthetic philosophy of wabi-sabi — the beauty of imperfection, impermanence, and incompleteness. These principles translate powerfully into American gardens of any size, in any climate, and with any budget. What they require is not money or space, but a different way of seeing.',
  sections: [
    // ─── SECTION 1: CORE AESTHETIC PRINCIPLES ────────────────────────────────
    {
      id: 'core-aesthetic-principles',
      title: 'Ma and the Seven Core Aesthetic Principles',
      blocks: [
        {
          type: 'p',
          text: 'The Japanese concept of ma — often translated as \'negative space\' or \'pause\' — is the philosophical foundation of Japanese garden design. In the Western tradition, garden design typically asks: what should I fill this space with? Japanese garden design asks the opposite: what is the quality of the emptiness I am creating, and how does what I place make that emptiness meaningful?',
        },
        {
          type: 'p',
          text: 'This distinction — between filling space and composing it — is the most important concept to carry with you through this guide. A Japanese garden is not a garden with Japanese plants or Japanese ornaments. It is a garden designed around restraint, asymmetry, the suggestion of nature rather than its reproduction, and the experience of stillness that well-designed space creates in the people who move through it.',
        },
        {
          type: 'p',
          text: 'This guide is organized to take you from philosophy to practice in a logical sequence: first the core aesthetic principles that inform every decision, then the major elements of Japanese garden design — stone, water, plants, structures — each treated in depth. Regional adaptation notes throughout ensure the principles are applicable across all American climates, from the rainy Pacific Northwest to the desert Southwest, from the humid Southeast to the cold-winter Midwest.',
        },
        {
          type: 'table',
          headers: ['Principle', 'Japanese Concept', 'What It Means in Practice'],
          rows: [
            ['Asymmetry', 'Fukinsei', 'Avoid even numbers, mirror symmetry, and perfectly balanced pairs. Place three stones rather than two; plant five shrubs rather than four. Nature does not organize itself symmetrically, and Japanese garden design follows nature in this. Odd numbers create tension and interest; even numbers create static equilibrium.'],
            ['Simplicity', 'Kanso', 'Remove rather than add. Every element in the garden should earn its presence. An empty gravel court with three stones says more than a bed crowded with ten plant species. Edit relentlessly. If you are unsure whether an element belongs, remove it and see how the garden feels.'],
            ['Austere Elegance', 'Koko', 'The beauty of restraint and age. A weathered stone lantern is more beautiful than a new one; a moss-covered path is more beautiful than a clean concrete one. Choose materials and plants that age gracefully and express time.'],
            ['Naturalness', 'Shizen', 'Avoid the obviously artificial. Curves rather than straight lines; irregular stone shapes rather than cut, geometric ones; plants pruned to suggest natural growth rather than geometric forms. The goal is a nature so artfully arranged that the arrangement is invisible.'],
            ['Subtle Profundity', 'Yugen', 'The quality of mystery and depth. A path that curves out of sight is more compelling than one that reveals itself fully. A garden glimpsed through a gate, a lantern half-hidden in shadow, a stone partially buried — these suggest a world larger than what is shown.'],
            ['Freedom from Convention', 'Datsuzoku', 'The quality of surprise and the unexpected within the ordered whole. A single striking stone in a raked gravel field; an unusual plant among moss and stone. The garden should feel composed but not rigid.'],
            ['Stillness & Tranquility', 'Seijaku', 'The ultimate goal of Japanese garden design: a quality of active stillness — not emptiness, but silence that is alive. The sound of water over stone, the shadow of a branch moving across gravel, the presence of moss in deep shade. These create the conditions in which stillness is felt.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Wabi-sabi is the Japanese aesthetic of imperfection, impermanence, and incompleteness. It finds beauty in the worn, the asymmetrical, the unfinished, and the aged — a cracked stone bowl more beautiful for its crack, a lantern more beautiful for its lichen. Wabi-sabi gives permission to stop fighting impermanence and start designing with it.',
        },
      ],
    },

    // ─── SECTION 2: MAJOR GARDEN TYPES ───────────────────────────────────────
    {
      id: 'major-garden-types',
      title: 'The Major Japanese Garden Types',
      blocks: [
        {
          type: 'p',
          text: 'Japanese garden design encompasses several distinct garden types, each with its own history, spatial logic, and aesthetic priorities. Understanding the types helps clarify which approach is most suited to your space, climate, and intentions — and most American Japanese-inspired gardens draw from more than one tradition simultaneously.',
        },
        {
          type: 'table',
          headers: ['Garden Type', 'Japanese Name', 'Key Characteristics', 'Space Required', 'Best American Application'],
          rows: [
            ['Strolling Garden', 'Kaiyu-shiki-teien', 'Designed to be experienced by walking a path; reveals itself in sequential views; typically includes a pond, islands, bridges, and multiple viewpoints; the largest and most complex form', 'Large — typically 1+ acre in traditional form', 'Adapted to large suburban or rural properties. The key element is the sequential reveal — the path that unfolds views one at a time. Can be simplified for smaller spaces by reducing the pond to a small water feature.'],
            ['Dry Garden / Rock Garden', 'Karesansui', 'Water represented by raked gravel or sand; islands of stone; minimal planting; designed primarily for contemplation from a fixed viewpoint; the most minimalist and philosophical form', 'Small — among the most space-efficient garden types', 'Extremely adaptable to American contexts, including very small spaces, urban courtyards, and low-water climates. Does not require water and is low-maintenance. The most widely imitated Japanese garden form in Western contexts.'],
            ['Tea Garden', 'Roji', 'Path leading to a tea house or seating area; extremely naturalistic; rough stepping stones; stone lanterns; a water basin (tsukubai) for ritual handwashing; moss and shade plants; deliberately simple', 'Small to medium', 'Perfectly suited to small American gardens. The path, lantern, water basin, and seating area are the essential elements and all can be scaled to a compact space. Focuses the garden on the experience of arriving and pausing.'],
            ['Courtyard Garden', 'Tsubo-niwa', 'Tiny enclosed garden visible from inside a building; often a single composition of stone, moss, bamboo, or a small maple; designed to be seen rather than walked through', 'Very small — as little as 6–10 square feet', 'Ideal for urban homes, side yards, and indoor-outdoor spaces. A single composition between two windows; a small courtyard outside a glass door. One of the most achievable Japanese garden forms for American homes.'],
            ['Borrowed Scenery Garden', 'Shakkei', 'Uses the landscape beyond the garden boundary as part of the composition; trees, hills, or mountains in the distance are \'borrowed\' by framing them from within the garden', 'Any size — depends on context', 'Powerful technique for American properties with views. Frame a distant mountain, tree line, or hillside through a gap in planting or over a low wall. The view becomes part of the garden without belonging to the property.'],
            ['Paradise Garden', 'Jodo-teien', 'Based on Buddhist Pure Land imagery; large central pond representing the Western Paradise; pavilion or bridge in the center; planting to suggest abundance and serenity', 'Large', 'Historical form less commonly adapted in America, but the central pond with island and bridge is an element that can be incorporated into strolling garden designs.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Most American Japanese-inspired gardens blend elements from multiple garden types — the stepping stones and lantern of the tea garden, the raked gravel of the karesansui, and the borrowed scenery principle all coexisting in a single small yard. Purity of type matters far less than thoughtful application of the underlying principles.',
        },
      ],
    },
  ],
}

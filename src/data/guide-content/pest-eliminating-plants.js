export const pestEliminatingPlantsContent = {
  id: 'pest-eliminating-plants',
  hero: {
    emoji: '🌿',
    title: 'Pest-Eliminating Plants',
    subtitle: 'Certain plants repel insects, confuse pests, and lure them away from your crops — here\'s how to use them strategically in your garden.',
  },
  intro: 'Some plants produce volatile compounds, strong scents, or root secretions that genuinely deter certain pests — and strategic placement of these plants can reduce pest pressure meaningfully when combined with other integrated pest management practices. French marigolds (Tagetes patula) release alpha-terthienyl from their roots, a compound toxic to root-knot nematodes — but only after a full season of growing, making them most effective as a cover crop rather than a companion. Basil planted near tomatoes appears to repel thrips and aphids in some studies, though results vary by cultivar. Nasturtiums are among the most reliable trap crops available to home gardeners, drawing aphids away from beans, brassicas, and cucumbers onto sacrificial plants that are then removed and destroyed. This guide focuses specifically on the plants themselves — which ones to grow, where to place them, and what to realistically expect — as a companion to the site\'s Organic Pest Control guide, which covers product-based controls like Bt and neem oil.',
  sections: [
    {
      id: 'scent-repellent-plants',
      title: 'Scent-Repellent Plants — What the Aroma Actually Does',
      blocks: [
        {
          type: 'p',
          text: 'Strongly aromatic plants work by masking the host-plant scent a pest uses to find its target, or by containing volatile compounds that many insects find directly irritating. The effect is real but localized — a single repellent plant provides protection only within a few feet, not across an entire garden.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Deters', 'Best Placement', 'Notes'],
          rows: [
            ['Catnip (Nepeta cataria)', 'Mosquitoes (lab studies show stronger repellency than DEET), flea beetles', 'Garden borders, away from paths where cats might trample it', 'Effect diminishes rapidly outdoors as the compound disperses in open air — most effective in enclosed or still-air settings'],
            ['Lavender', 'Moths, fleas, mosquitoes (mild)', 'Borders, near seating areas, mixed into perennial beds', 'Reliable multi-purpose plant — also a strong deer deterrent'],
            ['Marigold (French)', 'Root-knot nematodes (via root secretions), some aboveground pests to a lesser extent', 'Interplanted throughout beds, or grown as a full-season cover crop', 'Nematode benefit requires a full season of growth, not a quick companion effect'],
            ['Wormwood, tansy', 'A broad range of insects via strong volatile oils', 'Garden borders only, never between crops', 'Allelopathic — can inhibit growth of nearby plants, so isolate at the garden edge'],
            ['Alliums (onion, garlic, chives)', 'Carrot fly, aphids on roses', 'Interplanted directly among carrots; ringed around roses', 'One of the better-evidenced scent-masking pairings — see the Companion Planting guide for the full pairing table'],
            ['Rosemary, sage, thyme', 'Cabbage moth, carrot fly, bean beetles (mild-moderate effect)', 'Garden borders, raised bed edges', 'Effect is modest — best treated as a bonus benefit of an already-useful culinary herb, not a primary control'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌬️',
          text: 'Wind direction matters more than most gardeners expect — a repellent plant placed downwind of the crop it\'s meant to protect does very little, since the scent it releases travels away from the target rather than across it.',
        },
        {
          type: 'image',
          src: '/guides/pest-eliminating-plants/catnip-lavender-border.jpg',
          alt: 'A garden border planted with catnip and lavender at the edge of a vegetable bed',
          caption: 'Strongly aromatic plants like catnip and lavender provide localized protection within a few feet, not across an entire garden.',
        },
        {
          type: 'image',
          src: '/guides/pest-eliminating-plants/marigolds-vegetable-bed.jpg',
          alt: 'French marigolds interplanted throughout a vegetable garden bed',
          caption: 'French marigolds reduce root-knot nematodes through root secretions, but the benefit builds over a full season of growth.',
        },
      ],
    },
    {
      id: 'trap-crops',
      title: 'Trap Crops — Sacrificial Plants That Actually Work',
      blocks: [
        {
          type: 'p',
          text: 'A trap crop is a plant pests prefer over your main crop, planted specifically to be sacrificed. Unlike scent repellents, trap crops have strong, well-documented evidence behind them — but they only work if actively monitored and removed once pests have concentrated on them.',
        },
        {
          type: 'table',
          headers: ['Trap Crop', 'Protects', 'How to Use It'],
          rows: [
            ['Nasturtium', 'Beans, brassicas, cucumbers (aphids)', 'Plant along the perimeter, upwind of the protected crop; remove and destroy once heavily infested'],
            ['Radish', 'Cucumbers, squash (cucumber beetles)', 'Plant a border row that matures slightly ahead of the main crop'],
            ['Blue Hubbard squash', 'Other cucurbits (squash bugs, cucumber beetles, squash vine borer) — most effective at larger garden/farm scale', 'Plant a perimeter ring; monitor closely as beetles concentrate here'],
            ['Collards or mustard', 'Brassicas (diamondback moth, harlequin bug)', 'Plant slightly earlier than the main brassica crop to intercept early pest arrival'],
            ['Sunflower', 'General aphid pressure', 'Plant near, but not directly among, vulnerable crops'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'An unmonitored trap crop becomes a pest nursery instead of a sink — check it regularly, and remove and destroy it (don\'t compost pest-laden plant material in an open pile) once it has drawn in a significant pest population.',
        },
        {
          type: 'image',
          src: '/guides/pest-eliminating-plants/nasturtium-trap-crop.jpg',
          alt: 'Bright orange nasturtium flowers planted as a trap crop along a garden bed edge',
          caption: 'Nasturtiums are among the most reliable trap crops available, drawing aphids away from beans, brassicas, and cucumbers.',
        },
      ],
    },
    {
      id: 'border-hedge-plantings',
      title: 'Border and Hedge Plantings as a Whole-Garden Strategy',
      blocks: [
        {
          type: 'p',
          text: 'A dedicated border of repellent and beneficial-insect-attracting plants around the perimeter of a vegetable garden does more collectively than any single plant does alone — it combines scent masking, trap cropping, and pollinator/predator support into one design feature.',
        },
        {
          type: 'list',
          items: [
            'Alternate strongly aromatic herbs (rosemary, lavender, sage) with flowering plants that support predatory and parasitic insects (dill, yarrow, alyssum) along the border.',
            'Include at least one dedicated trap crop planting (nasturtiums are the easiest starting point) at the border, not mixed into the interior beds.',
            'Leave gaps in a solid hedge border for airflow — a border planted too densely can itself become humid, sheltered pest habitat.',
            'Refresh or replant border sections that underperform after a season of observation — border effectiveness varies by local pest pressure and microclimate.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌻',
          text: 'A border planting is a long-term investment, not a quick fix — most of its benefit builds over a full season as beneficial insect populations establish and pest pressure gradually redistributes toward the trap crops within it.',
        },
        {
          type: 'image',
          src: '/guides/pest-eliminating-plants/herb-flower-border.jpg',
          alt: 'A mixed border of aromatic herbs and flowering plants along the perimeter of a vegetable garden',
          caption: 'A mixed border combining aromatic herbs, flowering plants, and a trap crop does more collectively than any single plant alone.',
        },
      ],
    },
    {
      id: 'what-the-research-supports',
      title: 'What the Research Actually Supports',
      blocks: [
        {
          type: 'p',
          text: 'Plant-based pest deterrence spans a wide range of evidence quality, from well-documented mechanisms to garden folklore that persists mostly through repetition. Being clear-eyed about which category a given claim falls into helps you invest garden space where it will actually pay off.',
        },
        {
          type: 'table',
          headers: ['Claim', 'Evidence Level', 'Practical Takeaway'],
          rows: [
            ['Nasturtiums as an aphid trap crop', 'Strong', 'Plant with confidence; monitor and remove once infested'],
            ['French marigold root secretions reducing nematodes', 'Strong, but only as a full-season cover crop', 'Don\'t expect a nematode benefit from a marigold planted the same season as a quick companion'],
            ['Alliums masking carrot fly scent', 'Strong', 'One of the most reliable scent-based pairings available'],
            ['Catnip repelling mosquitoes better than DEET', 'True in controlled lab conditions, weak outdoors', 'Useful as a minor bonus in a border planting, not a primary mosquito strategy'],
            ['Basil repelling aphids/thrips near tomatoes', 'Mixed — some studies show an effect, results vary by cultivar and conditions', 'Plant basil near tomatoes for its many other benefits; treat pest suppression as a possible bonus, not a guarantee'],
            ['General "pest confusion" from mixed plantings', 'Plausible mechanism, weak direct evidence for most specific pairings', 'A diverse planting has real benefits (reduced monoculture risk, better beneficial insect support) even where the specific repellent claim is unproven'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔬',
          text: 'Treat plant-based pest deterrence as one layer of a broader IPM approach — see the site\'s Organic Pest Control guide for the product-based layer (Bt, neem oil, beneficial nematodes) and the Companion Planting guide for the full pairing table this guide draws its scent-masking examples from.',
        },
        {
          type: 'image',
          src: '/guides/pest-eliminating-plants/diverse-vegetable-garden.jpg',
          alt: 'A diverse vegetable garden bed with mixed herbs, flowers, and vegetables growing together',
          caption: 'A diverse planting has real benefits even where a specific repellent claim is unproven — reduced monoculture risk and better beneficial insect support.',
        },
      ],
    },
  ],
};

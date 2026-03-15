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

    // ─── SECTION 3: STONE ─────────────────────────────────────────────────────
    {
      id: 'stone',
      title: 'Stone — The Bones of the Japanese Garden',
      blocks: [
        {
          type: 'p',
          text: 'Stone is the most essential material in Japanese garden design — more fundamental even than plants or water. In the Japanese garden tradition, stones are chosen, positioned, and regarded with the same care and reverence that a sculptor gives to their primary material. Stones are not decoration; they are the structural and spiritual skeleton of the garden, and every other element is arranged in relation to them.',
        },
        {
          type: 'h3',
          text: 'How to See and Select Stones',
        },
        {
          type: 'p',
          text: 'The Japanese tradition of suiseki — the appreciation of naturally formed stones — is the foundation of stone selection for the garden. A stone is chosen for its character: its shape, texture, color, the way it holds moss, the way it casts shadow, and what it suggests to the imagination.',
        },
        {
          type: 'list',
          items: [
            'Stone character: Seek stones with inherent visual interest — unusual shapes, surface texture that catches light, evidence of weathering or geological history. Avoid stones that are perfectly round, uniformly gray, or without distinguishing features. The stone with a crack, a vein of quartz, a hollow where water collects, or an asymmetric profile is more valuable in Japanese garden terms than a perfect, featureless specimen.',
            'Scale and proportion: The most common error in stone placement is choosing stones that are too small for the space. A stone that looks impressive at the garden center often looks diminished once set into the ground. If in doubt, choose the larger stone. Partially bury stones — a stone that sits entirely above the ground surface looks placed; a stone whose lower third is buried looks as if it has always been there.',
            'Odd numbers: Place stones in groups of three, five, or seven — never two or four. The classic three-stone arrangement is the fundamental unit of Japanese stone composition: one tall vertical stone (shin, the primary), one lower diagonal stone (soe, the secondary), and one horizontal flat stone (tai, the tertiary). These three represent heaven, humanity, and earth.',
            'Source locally: Use the stone that belongs to your landscape — granite in New England, limestone in the Midwest, sandstone in the Southwest, basalt in the Pacific Northwest. Local stone grounds the garden in its place, supports the principle of naturalness (shizen), and acquires moss and patina appropriate to your climate.',
          ],
        },
        {
          type: 'h3',
          text: 'Stone Placement: The Primary Rules',
        },
        {
          type: 'list',
          items: [
            'Bury at least one-third: The portion of the stone below grade anchors it visually to the earth. A stone sitting fully on the surface looks artificial regardless of its intrinsic beauty.',
            'Lean slightly into the earth: Stones that lean slightly — not straight vertical or perfectly horizontal — look natural and settled. Perfect perpendiculars feel engineered.',
            'Let the stone\'s strongest face forward: Every stone has a face — the side with the most character, the most interesting texture or profile. Find it before placing and orient it toward the primary viewpoint.',
            'Consider shadow: How will this stone look at different times of day as light and shadow shift across its surface? A stone without shadow at midday may reveal extraordinary texture at early morning or late afternoon.',
            'Never move an important stone casually: Once a key stone is placed well, its position becomes part of the garden\'s character. Moving it is a significant decision, not a casual adjustment.',
          ],
        },
        {
          type: 'h3',
          text: 'Types of Stone Features',
        },
        {
          type: 'table',
          headers: ['Stone Feature', 'Japanese Term', 'Function & Character', 'Placement Notes'],
          rows: [
            ['Garden Rock / Specimen Stone', 'Ishi', 'The fundamental unit. A single stone of character placed as a focal point, anchor to a composition, or as part of a stone group.', 'Place partially buried, face toward primary viewpoint, with at least two supporting smaller stones in the composition.'],
            ['Stepping Stones', 'Tobi-ishi', 'The path through the garden. Flat-topped stones placed for walking — but also composing the rhythm and experience of the garden journey.', 'Space irregularly (not evenly) at a natural walking stride. Vary stone sizes. Sink flush with or slightly above grade. Set in moss, gravel, or planting — not concrete.'],
            ['Stone Path', 'Nobiishi', 'A more continuous stone surface than stepping stones — slabs set close together. More formal than tobi-ishi; used in tea gardens near the tea house.', 'Set tightly with minimal gaps; fill gaps with moss or fine gravel. Maintain the irregular outline of each stone rather than cutting to uniform shapes.'],
            ['Stone Lantern', 'Ishidoro', 'Perhaps the most iconic Japanese garden element in Western interpretation. Originally functional; now primarily compositional and symbolic.', 'Never place in the center of a composition; always offset to the side. Site near water or a path intersection. Allow moss to develop on its surface over time.'],
            ['Water Basin', 'Tsukubai', 'A stone basin for water — originally for ritual handwashing in the tea garden; now a water feature and composition element. Accompanied by a bamboo spout, surrounding stones, and a drain.', 'Positioned low (the name means \'to crouch\') near a path or entry. The surrounding stones — the yakuishi — are as important as the basin itself.'],
            ['Dry Waterfall', 'Kare-taki', 'Stones arranged to suggest a waterfall without water — the central stone feature of a dry garden. Creates the visual dynamic of falling water through vertical stone arrangement.', 'Three primary stones: a tall central stone (the fall), flanking stones suggesting the water\'s spread, and flat stones at the base suggesting a pool. Orient so primary light falls across the composition.'],
            ['Bridge Stone', 'Ishi-bashi', 'A single large flat stone laid across a dry stream, small water feature, or path depression to suggest a bridge — one of the most elegant Japanese garden elements.', 'Must span the gap fully, with both ends resting on stable ground or supporting stones. Choose a stone with natural horizontal character.'],
            ['Stone Steps', 'Nobiishi / Kutsunugi-ishi', 'Steps that rise through a grade change, or a single flat stone at the entry where one removes shoes. Part of the path\'s choreography and transition sequence.', 'Set each step stone deeply and stably. Vary the stone shapes slightly — uniform cut stone looks Western. Allow plants to soften the edges over time.'],
          ],
        },
        {
          type: 'h3',
          text: 'Stone Lanterns: Selection and Placement',
        },
        {
          type: 'p',
          text: 'The stone lantern (ishidoro) is the element most frequently imported into Western garden contexts, often placed with more enthusiasm than understanding. A lantern placed correctly is a powerful compositional anchor; placed incorrectly, it looks like an afterthought from a garden center.',
        },
        {
          type: 'list',
          items: [
            'Classic lantern types: The yukimi-doro (snow-viewing lantern) sits low on short legs and was designed to be reflected in water — place near ponds, streams, or water basins. The kasuga-doro stands tall on a single column and was originally used in temple and shrine gardens — place beside a path or at the intersection of paths. The oribe-doro has a distinctive carved face panel and typically stands in a tea garden beside the path.',
            'Material: Natural granite that has begun to weather and acquire moss is ideal. Cast concrete lanterns often look cheap and lightweight; if budget requires concrete, choose a dense, well-cast version and allow it several years to weather before judging. Never use plastic or resin lanterns.',
            'Placement: Never place a lantern in the center of a garden. Always offset it — beside a path, at the edge of water, partially obscured by a plant or stone. A lantern half-hidden behind a maple branch is more interesting than one standing in open view. Site it where it will eventually acquire moss — north-facing and near water are ideal.',
            'Number: One lantern per garden in most contexts. Two lanterns positioned symmetrically flanking an entry is a formal arrangement appropriate for temple-style gates; elsewhere, a single lantern is more powerful.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪨',
          text: 'A lantern that looks new and too prominent needs two things: time and partial concealment. Allow moss to develop on it by painting with diluted buttermilk in a shaded, moist location. Plant a low shrub or fern partially in front of it. Relocate it from the center of the composition to an edge or path intersection. The goal is a lantern that looks as if it has always been there.',
        },
      ],
    },
    // ─── SECTION 4: WATER ─────────────────────────────────────────────────────
    {
      id: 'water',
      title: 'Water — Stillness, Movement, and the Suggestion of Both',
      blocks: [
        {
          type: 'p',
          text: 'Water in the Japanese garden is never merely decorative — it is philosophical. Still water represents the mind in meditation: reflective, calm, and containing the sky. Moving water represents the continuous change of nature: the stream that is never the same water twice, the waterfall that appears permanent but is in constant flux. Even in the dry garden (karesansui), where no actual water exists, gravel is raked to suggest the movement of water across stone — because the absence of water, thoughtfully composed, can evoke water more powerfully than water itself.',
        },
        {
          type: 'h3',
          text: 'Ponds and Still Water',
        },
        {
          type: 'p',
          text: 'A Japanese garden pond is not a swimming pool, a koi pond of the Western commercial variety, or a reflecting pool with geometric edges. It is an asymmetric, naturalistic water body whose edges blend into planting, stone, and moss in a way that suggests a natural lake or mountain tarn.',
        },
        {
          type: 'list',
          items: [
            'Shape: Irregular and asymmetric. The shoreline should be varied — bays and peninsulas rather than a uniform oval or rectangle. Draw the pond shape by laying a garden hose loosely and stepping back to evaluate it from the primary viewpoint before excavating.',
            'Depth: A minimum of 18–24 inches in most climates to maintain water clarity and temperature stability. Where koi are intended, 3–4 feet is preferred. In Zone 5 and colder, depth below the frost line allows fish to overwinter; a pond heater may also be needed.',
            'Edges: The most important part of a Japanese garden pond is where the water meets the land. Lay flat stones partially into the water at the waterline. Let planting — iris, rush, sedge — extend into the water at the shallow margins. In one or two places, allow the bank to drop steeply to deep water with no intermediate stone, creating visual depth and mystery.',
            'Islands: Even a very small island — a single stone rising from the water, or a small planted mound — dramatically increases the complexity and interest of a garden pond. The island is the point around which the water turns; it creates foreground and background in a way that a simple pond without an island cannot.',
            'Koi: Koi are optional but traditional in many Japanese garden styles. They add movement and color — the flash of orange and white beneath the water surface is part of the designed experience. Koi require filtration, minimum pond depth, and feeding. Native goldfish are a lower-maintenance alternative.',
          ],
        },
        {
          type: 'h3',
          text: 'Streams and Moving Water',
        },
        {
          type: 'p',
          text: 'A Japanese garden stream suggests a mountain stream — clear water moving over stone, perhaps audible but not dramatically loud, with naturalistic banks and occasional pools where the water slows and deepens. The movement of water in the garden is experienced by ear as much as by eye.',
        },
        {
          type: 'list',
          items: [
            'Sound design: The sound of water is a primary sensory element in the Japanese garden. A narrow channel over rounded stones creates a gentle, continuous sound. Water falling a greater distance over a stone creates a more pronounced sound. In the American garden, this is a powerful tool for masking urban noise — the sound of a small stream can effectively mask traffic when positioned between the noise source and the seating area.',
            'Stream construction: Lay a flexible EPDM liner in the stream channel before placing stones. Position stones to direct water flow and create natural-looking movement. Vary the channel width — narrow passages where water speeds up, wider pools where it slows. Plant the margins immediately with moisture-loving plants: iris, primrose, astilbe, ferns.',
            'Bamboo spouts (kakei): A bamboo spout — a section of bamboo through which water is directed into a basin, pool, or stream — is one of the most elegant Japanese water elements. The water flows continuously (recirculated by a small pump) and makes a distinctive quiet sound as it strikes the basin or stone below. Extremely effective in small garden spaces.',
          ],
        },
        {
          type: 'h3',
          text: 'Dry Water — The Karesansui Stream',
        },
        {
          type: 'p',
          text: 'The dry stream (kare-nagare) represents a stream or river using carefully raked gravel or small stones. It is one of the most useful Japanese garden techniques for American climates, particularly in drought-prone regions where actual water features are impractical or water use is restricted. Done well, a dry stream is as compelling as a real one.',
        },
        {
          type: 'list',
          items: [
            'Construction: Excavate a naturalistic channel 6–12 inches deeper than surrounding grade. Line with landscape fabric. Fill with small rounded river stones (1–3 inch diameter) or decomposed granite in a contrasting color from surrounding ground material. Place larger stones at the margins and at bends in the channel where a real stream would deposit them.',
            'Bridges: A flat stone bridge over a dry stream — a single large slab spanning the channel — is one of the most effective small-scale Japanese garden features and requires no water or pump. The bridge implies the stream; the stream implies water; the whole composition implies a landscape in miniature.',
            'Planting: Plant the margins of the dry stream with plants that would naturally be found at a stream bank — ferns, hostas, irises, sedges — even though no water is present. The planting confirms the stream\'s identity to the imagination.',
          ],
        },
        {
          type: 'h3',
          text: 'The Water Basin (Tsukubai)',
        },
        {
          type: 'p',
          text: 'The tsukubai — a low stone basin filled with water — is one of the most achievable and beautiful Japanese garden elements for small American gardens. In the tea garden tradition, it was used for ritual handwashing before the tea ceremony; in the contemporary garden, it is a miniature water feature, bird bath, and compositional anchor simultaneously.',
        },
        {
          type: 'list',
          items: [
            'The composition: The tsukubai is never placed alone. The surrounding stones (yakuishi) are part of the composition: a tall stone to one side (the candle stone, where a lantern was placed), a flat stone in front (the stepping stone from which one crouches to use the basin), and a lower stone to the opposite side of the candle stone. A bamboo spout typically supplies water. Small rounded stones at the base (the umi, or sea) complete the scene.',
            'Scale: The basin itself can be as small as 12 inches in diameter and 6–8 inches deep. Prefabricated cast stone and natural stone basins are widely available at garden centers. A natural boulder with a depression drilled by a mason is the most authentic and beautiful option.',
            'Planting: Surround the tsukubai with moss, ferns, and low shade plants. The water basin is almost always sited in shade or dappled light, which supports the moss and planting that makes the composition feel ancient and settled.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'For small gardens with no room for a pond or stream, a single tsukubai with a recirculating bamboo spout delivers the sound, movement, and focal presence of a water feature in as little as 10–25 square feet. It is the single highest-impact Japanese garden element for compact spaces.',
        },
      ],
    },
  ],
}

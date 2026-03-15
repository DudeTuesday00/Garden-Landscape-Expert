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
    // ─── SECTION 5: PLANTS ────────────────────────────────────────────────────
    {
      id: 'plants',
      title: 'Plants for the Japanese Garden',
      blocks: [
        {
          type: 'p',
          text: 'Japanese garden planting is not about Japanese plants — it is about plants that embody Japanese aesthetic principles. Restraint, seasonality, structural clarity, and the ability to age gracefully matter more than geographic origin. Many of the most effective Japanese garden plants are native to North America, Europe, or China rather than Japan. What makes them appropriate is not their passport but their character.',
        },
        {
          type: 'p',
          text: 'The palette is intentionally limited. A Japanese garden typically uses far fewer species than a Western garden of equivalent size — perhaps 8–15 species where a cottage garden might use 40 or 50. This restraint is not poverty of imagination; it is compositional discipline. Each species is chosen to perform a specific role and is given enough space to perform that role with full presence.',
        },
        {
          type: 'h3',
          text: 'Trees: The Primary Structure',
        },
        {
          type: 'table',
          headers: ['Tree', 'Zones', 'Japanese Garden Role', 'Key Qualities', 'Notes'],
          rows: [
            ['Japanese Maple (Acer palmatum)', '5–9', 'The signature Japanese garden tree. Specimen, focal point, seasonal drama.', 'Extraordinary fall color; refined leaf shape; sculptural winter branch structure; varieties for sun and shade', 'The most versatile Japanese garden tree for American gardens. Choose variety by size, sun exposure, and desired foliage color. Weeping varieties (\'Crimson Queen,\' \'Tamukeyama\') for water\'s edge and container planting.'],
            ['Japanese Black Pine (Pinus thunbergii)', '5–8', 'Coastal pine aesthetic; structural evergreen anchor; trained in the niwaki (cloud pruning) tradition', 'Irregular, wind-shaped natural form; dramatic winter silhouette; excellent for niwaki training', 'The most dramatic Japanese garden evergreen. Requires annual candle pruning to develop the characteristic layered cloud form. Full sun, excellent drainage.'],
            ['Japanese Red Pine (Pinus densiflora)', '3–7', 'Similar to black pine; more cold-hardy; the preferred pine for northern gardens', 'Orange-red bark beautiful in winter; looser, more informal habit than black pine', '\'Umbraculifera\' (Tanyosho pine) is a multi-stemmed form with a flat-topped parasol shape — one of the finest pines for small Japanese gardens.'],
            ['Cherry (Prunus serrulata and relatives)', '4–8 (varies)', 'Seasonal accent of extraordinary beauty. The symbol of mono no aware — the bittersweet beauty of transience.', 'Brief but spectacular spring bloom; attractive bark year-round; good fall color in some varieties', '\'Kwanzan\' and \'Yoshino\' are the most widely available. For small gardens: \'Autumnalis\' (reblooms in fall), \'Okame\' (small, early pink). Native cherries (P. serotina) also appropriate.'],
            ['Japanese Snowbell (Styrax japonicus)', '5–8', 'Understory tree; graceful habit; elegant spring flowers', 'Pendulous white bell flowers in late spring; clean foliage; good fall color; refined branching', 'One of the finest small trees for part-shade Japanese garden positions. Underused in American gardens relative to its beauty.'],
            ['Serviceberry (Amelanchier spp.)', '3–9 (varies)', 'Native substitute for cherry; spring flower, summer berry, fall color; multi-season interest', 'White spring flowers, edible blue-black berries, outstanding fall color in red-orange', 'One of the finest native alternatives to Japanese cherry. A. canadensis and A. arborea are the most widely adapted. Supports birds and native pollinators.'],
            ['Ginkgo (Ginkgo biloba)', '3–9', 'Ancient, deeply symbolic tree. Dramatic fan-shaped leaves. Extraordinary yellow fall color.', 'Fan-shaped leaves unique in the plant world; brilliant yellow fall color; pest and disease-free; extremely long-lived', 'Plant male trees only (females produce malodorous fruit). \'Autumn Gold\' and \'Princeton Sentry\' (narrow upright) are reliable male selections. Grows slowly; a patient investment.'],
          ],
        },
        {
          type: 'h3',
          text: 'Shrubs: The Middle Layer',
        },
        {
          type: 'table',
          headers: ['Shrub', 'Zones', 'Role', 'Season of Interest', 'Notes'],
          rows: [
            ['Azalea (Rhododendron spp.)', '4–9 (varies)', 'Mass color accent in spring; evergreen structure year-round; the most traditional Japanese garden flowering shrub', 'Spring bloom; evergreen foliage year-round', 'Clip azaleas into rounded or cloud-pruned (niwaki) forms. Satsuki and Kurume types are most traditional. Acid soil essential. Best in part shade.'],
            ['Japanese Pieris (Pieris japonica)', '4–8', 'Evergreen structure; early spring flower; refined and elegant', 'Year-round evergreen; cascading white flowers in early spring; attractive red new growth', 'One of the finest Japanese garden shrubs for year-round interest. Shade-tolerant. \'Mountain Fire\' has brilliant red new growth. Acid soil required.'],
            ['Camellia (C. japonica / C. sasanqua)', '6–9 (japonica); 6–10 (sasanqua)', 'Evergreen structure; winter and spring bloom; the most important flowering shrub of the Japanese garden', 'C. sasanqua: fall–winter; C. japonica: winter–spring', 'In the South and Pacific Coast, camellias are garden anchors of the first order. The flowers — which fall whole from the shrub — are one of the signature seasonal events of the Japanese garden. Zone 7+ for reliable performance.'],
            ['Japanese Kerria (Kerria japonica)', '4–9', 'Bright spring flowers on arching stems; graceful habit; shade-tolerant', 'Spring: bright golden-yellow flowers; attractive green stems year-round', 'One of the most shade-tolerant flowering shrubs for Japanese garden use. Arching stems provide movement in winter. Single-flowered form more traditional than double (\'Pleniflora\').'],
            ['Mugo Pine (Pinus mugo)', '2–8', 'Low evergreen structure; rock garden and stone composition anchor', 'Year-round evergreen; slow growth ideal for long-term compositions with stone', 'One of the best low evergreen shrubs for formal stone compositions and the edges of karesansui gardens.'],
            ['Leucothoe (L. fontanesiana)', '4–6', 'Arching foliage; shade ground layer; native alternative to nandina', 'Year-round; fall-winter color shift to bronze-red', 'Native to eastern North America. Arching habit and layered foliage texture are well-suited to the Japanese garden aesthetic.'],
            ['Heavenly Bamboo (Nandina domestica)', '6–9', 'Seasonal color through foliage; winter berries; vertical accent', 'Year-round: spring–summer green, fall-winter red; persistent red berries', 'Note: Nandina is invasive in the Southeast — check your state\'s invasive plant list. Where invasive, substitute Itea virginica or Aronia arbutifolia.'],
          ],
        },
        {
          type: 'h3',
          text: 'Ground Layer: Moss, Ferns, and Low Planting',
        },
        {
          type: 'p',
          text: 'The ground layer of a Japanese garden is where the aesthetic difference from Western garden design is most immediately visible. Where a Western garden might use mulch or a uniform ground cover, the Japanese garden uses moss, ferns, and carefully chosen low plants that vary in texture, value, and seasonal behavior — creating a ground plane that is as compositionally considered as everything above it.',
        },
        {
          type: 'list',
          items: [
            'Ferns: Among the finest Japanese garden plants for any light condition. Japanese painted fern (Athyrium niponicum \'Pictum\') — silver-painted fronds of extraordinary beauty, Zones 3–8. Ostrich fern (Matteuccia struthiopteris) — bold vase form, Zones 2–8. Autumn fern (Dryopteris erythrosora) — bronze new fronds, evergreen in mild climates, Zones 5–9. Christmas fern (Polystichum acrostichoides) — evergreen, native, extremely adaptable, Zones 3–9.',
            'Mondo grass (Ophiopogon japonicus): One of the most useful Japanese garden ground covers — a fine-textured grass-like plant that forms a dense low mat. Black mondo grass (O. planiscapus \'Nigrescens\') is extraordinary in composition with pale gravel or light stone. Hardy Zones 6–10.',
            'Epimedium: Among the finest shade ground covers for a Japanese garden context. Delicate heart-shaped leaves; small spring flowers; tolerates dry shade. Hardy Zones 4–8.',
            'Sedges (Carex spp.): Grass-like plants for moist to average shade conditions. C. morrowii \'Ice Dance\' (variegated, Zone 5–9) and C. oshimensis \'Evergold\' (golden, Zone 5–9) bridge the aesthetic between moss, fern, and grass in a way that feels intrinsically Japanese.',
            'Liriope: Tolerates more sun and dry conditions than mondo grass. Hardy Zones 4–9. Use in mass rather than as a border edging, which reads as a Western design approach.',
          ],
        },
        {
          type: 'h3',
          text: 'Growing Moss: The Essential Japanese Garden Skill',
        },
        {
          type: 'p',
          text: 'Moss is so central to the Japanese garden aesthetic that an entire gardening tradition — koke-niwa, the moss garden — is devoted to it. Establishing moss requires patience and specific conditions, but once established, a healthy moss lawn is one of the most beautiful and low-maintenance surfaces a garden can have.',
        },
        {
          type: 'table',
          headers: ['Moss Type', 'Best For', 'Light', 'Moisture', 'Climate Notes'],
          rows: [
            ['Sheet Moss (Hypnum spp.)', 'Ground cover in large areas; stepping stone surrounds; the most commonly available moss', 'Part shade to full shade', 'Consistently moist but not waterlogged', 'Adaptable across most of the US in shade conditions. The standard moss for Japanese garden establishment.'],
            ['Cushion Moss (Leucobryum glaucum)', 'Stone compositions; the mounded cushion form is particularly beautiful with stone and lanterns', 'Part shade to full shade', 'Moist; tolerates brief drying better than sheet moss', 'Eastern and Pacific Northwest US. The distinctive mounded form is uniquely beautiful.'],
            ['Haircap Moss (Polytrichum spp.)', 'Taller, more textured moss for transitional zones; effective between moss lawn and larger plantings', 'Part shade', 'Moist to average', 'Very widely adaptable; tolerates more sun than other mosses. Found across most of the US.'],
            ['Fern Moss (Thuidium spp.)', 'The finest texture of any common moss; feathery appearance; excellent for detailed compositions near stone and water', 'Full shade to part shade', 'Consistently moist', 'Best in humid climates: Pacific Northwest, Southeast, New England. Dries and browns in dry conditions.'],
          ],
        },
        {
          type: 'list',
          items: [
            'Establishment — transplant method: Collect or purchase living moss. Remove existing ground cover and loosen soil. Lower soil pH to 5.5–6.0 if needed. Press moss firmly onto moist soil, ensuring good contact. Water gently twice daily for 4–6 weeks. Avoid foot traffic for the first full season.',
            'Establishment — slurry method: Blend moss, buttermilk, and water into a slurry. Paint onto stone, bare soil, or a prepared surface. Keep moist. Moss will establish within weeks in humid, shaded conditions. Best in climates with consistent summer rainfall.',
            'Maintenance: Remove leaves and debris by hand or with a soft broom — never blow, as a leaf blower destroys moss. Do not fertilize. Keep shaded and moist. Replenish patches that die out by transplanting from healthy areas.',
            'Climate challenge: Moss establishes most easily in the Pacific Northwest, New England, upper Midwest, and humid Southeast. In hot, dry climates, fine-textured decomposed granite, pea gravel, or low ground covers (Mazus, Pratia) may substitute visually.',
          ],
        },
        {
          type: 'h3',
          text: 'Bamboo: Use with Caution and Intention',
        },
        {
          type: 'p',
          text: 'Bamboo is perhaps the most immediately recognizable Japanese garden plant in the American imagination, and one of the most frequently misused. Running bamboo (Phyllostachys and Pleioblastus genera) spreads aggressively by underground rhizomes and has become invasive in many states, particularly in the South and mid-Atlantic. Clumping bamboo (Fargesia genera) does not spread by running rhizomes and is the ecologically responsible choice for most American gardens.',
        },
        {
          type: 'list',
          items: [
            'Running bamboo in containers: If you want the aesthetic of running bamboo (P. aurea, P. nigra — black bamboo), grow it in a container sunk into the ground with a physical rhizome barrier (18–24 inch depth), or in a large above-ground container.',
            'Clumping bamboo: Fargesia rufa, F. murielae, and F. nitida are the most widely available clumping bamboos in the US. They are cold-hardy (Zones 4–6 depending on species), shade-tolerant, and non-invasive. Ideal for corner accents, screening, and container specimens.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Before planting any running bamboo (Phyllostachys), check your state\'s invasive plant list. Once established without a rhizome barrier, running bamboo is extremely difficult to remove and can spread into neighboring properties. When in doubt, choose Fargesia (clumping) bamboo instead.',
        },
      ],
    },
    // ─── SECTION 6: DRY GARDEN — KARESANSUI ──────────────────────────────────
    {
      id: 'dry-garden-karesansui',
      title: 'The Dry Garden — Karesansui',
      blocks: [
        {
          type: 'p',
          text: 'The karesansui — dry landscape garden — is the most philosophical and the most architecturally pure form of Japanese garden design. It uses no actual water; instead, gravel or sand is raked into patterns that suggest water — streams, ocean waves, the stillness of a mountain lake. Stones rise from this raked surface as islands, mountains, or simply as themselves. Planting is minimal or absent. The garden is typically designed to be viewed from a fixed position, often from inside a building or from a veranda, rather than walked through.',
        },
        {
          type: 'p',
          text: 'The most famous karesansui gardens — Ryoanji in Kyoto, with its fifteen stones in raked gravel visible only as fourteen from any single viewpoint; Daisen-in, with its narrative dry waterfall and river — are among the most visited gardens on earth. Their power comes entirely from stone, gravel, and empty space.',
        },
        {
          type: 'h3',
          text: 'Building a Karesansui: Step by Step',
        },
        {
          type: 'list',
          items: [
            'Define the garden boundary: The karesansui must have clear edges — traditionally a low wall, a wooden border, a change in level, or a precise boundary of edging stones. The contained quality of the garden is essential to its power; without definition, the raked gravel looks like an unfinished path, not a composed space.',
            'Prepare the base: Excavate to a depth of 4–6 inches. Lay compacted gravel base (2–3 inches of crushed gravel for drainage). Cover with landscape fabric rated for long-term use — this prevents weeds from penetrating the raked surface. Top with 2–3 inches of the chosen gravel or decomposed granite.',
            'Choose and place the stones first: Before raking, place the stones. The stones determine where the raking patterns will go — they are islands around which water flows. Set each stone deeply, at least one-third buried. Compose in groups of odd numbers. Step back repeatedly to evaluate from the primary viewpoint — the viewpoint from which the garden will be experienced.',
            'Choose the raking medium: Traditional Japanese gardens use white or pale gray decomposed granite or crushed granite. The color should contrast with the stone. Pea gravel can be raked but does not hold patterns as crisply as angular decomposed granite. For an American regional variation, choose a locally available stone material — white marble chips, gray decomposed granite, or tan crushed limestone.',
            'Rake the patterns: Straight parallel lines suggest open water. Concentric circles or ovals around a stone suggest water flowing around an island. Diagonal lines suggest waves. The raking is done with a specialized wooden rake (available from Japanese garden suppliers); a handmade rake with widely spaced wooden tines works equally well. Re-rake after rain and wind, weekly in active seasons, or whenever the pattern is disturbed.',
            'Add minimal planting: Traditional karesansui gardens may include no planting at all, or a single moss-covered stone, a pruned pine, or a clipped azalea or Japanese holly. A Japanese maple at one end of the garden (outside the raked area, casting shadow into it) or a single accent plant within the raked area is appropriate in an American adaptation.',
          ],
        },
        {
          type: 'h3',
          text: 'Raking Patterns and Their Meanings',
        },
        {
          type: 'table',
          headers: ['Pattern', 'Japanese Term', 'Visual Effect', 'Best Use'],
          rows: [
            ['Parallel straight lines', 'Nami (waves) in long view', 'Open water; a lake surface; the sea in calm conditions', 'Large flat areas of the garden; the primary field of the karesansui'],
            ['Concentric circles around a stone', 'Sazanami (ripples)', 'Water flowing around an island; the ring pattern left when a stone drops into still water', 'Around each stone group; creates the illusion that stones are emerging from water'],
            ['Diagonal crossing lines', 'Arare (hailstorm) or wave patterns', 'Turbulent water; ocean waves; energy and movement', 'Used sparingly to suggest dynamic areas of the composition; effective near a dry waterfall stone arrangement'],
            ['Curved parallel lines', 'River flow', 'A flowing stream; water moving through a channel', 'Dry stream sections; areas where the garden suggests a river moving between stone banks'],
            ['Whirlpool / spiral', 'Uzu (whirlpool)', 'Water turning around an obstacle; energy concentrated', 'Very sparingly; at a single stone of great presence; can overwhelm if used too broadly'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'In Zen Buddhist temple contexts, the act of raking the karesansui was itself a meditation practice — a form of moving meditation requiring complete attention and physical presence. The raked garden was not a permanent artwork but a daily practice. For the home gardener, the weekly act of raking — removing the effects of wind and weather, restoring the pattern, moving around the garden with attention to its composition — is a contemplative practice as much as a maintenance task. Consider the raking not as chore but as the primary activity for which the garden was designed.',
        },
        {
          type: 'tip',
          emoji: '🪨',
          text: 'The karesansui is the ideal Japanese garden form for dry climates, small spaces, and low-maintenance priorities. It requires no water, no pump, no pond liner, and no irrigation — only stone, gravel, a rake, and a clear boundary. It is also one of the most adaptable forms: a strip 4 feet wide and 12 feet long between a path and a wall can become a fully resolved karesansui with three stones and a raked field.',
        },
      ],
    },
    // ─── SECTION 7: STRUCTURES, PATHS & HARDSCAPE ────────────────────────────
    {
      id: 'structures-paths-hardscape',
      title: 'Structures, Paths & Hardscape',
      blocks: [
        {
          type: 'p',
          text: 'In a Japanese garden, structures are not amenities — they are compositional elements. A gate defines the threshold between the ordinary world and the garden world. A fence controls sightlines and creates mystery. A bridge draws the eye and the foot across water or the suggestion of water. A pavilion provides a fixed viewpoint from which the garden reveals its intentions. Each of these elements must be considered not as an object placed in the garden, but as a relationship between spaces — the space before and the space after, the visible and the concealed, the destination and the journey toward it.',
        },
        {
          type: 'h3',
          text: 'Gates — The Threshold Experience',
        },
        {
          type: 'p',
          text: 'The most important structural element of a Japanese garden is often the gate — not because of its visual presence but because of what it does to the visitor\'s psychological state. Passing through a gate is a ritual transition. It marks the moment when the outside world is left behind and the garden world begins.',
        },
        {
          type: 'p',
          text: 'The traditional roofed gate, or mon, is a substantial structure associated with temple and estate gardens. For residential and small-scale garden use, the appropriate gate is more modest: a simple timber frame with a low, slightly curved or flat roof of cedar shingles or copper. The gate need not be tall — 6 to 7 feet is typical — and it should be narrower than feels comfortable, designed to require a slight pause and a change of posture (a slight bow or duck) to pass through. This compression and release is intentional. The garden should feel larger after the constraint of the gateway.',
        },
        {
          type: 'tip',
          emoji: '🚪',
          text: 'A gate does not require a wall to be effective. A freestanding gate frame in a hedge opening, or between two planted screening shrubs, creates the necessary threshold experience without the expense of a full wall. What matters is the psychological moment of transition, not the physical barrier. Even a simple change in path material — from gravel to stepping stone — at the garden entrance can function as a threshold.',
        },
        {
          type: 'h3',
          text: 'Fences — Privacy, Screening & Borrowed Scenery',
        },
        {
          type: 'p',
          text: 'Traditional Japanese fences (gaki or kakine) are made from natural materials — bamboo, wood, woven brush, or combinations of these — and are designed to be beautiful in themselves, not merely functional. The two most important types for American residential gardens are the sleeve fence (sodegaki), a short freestanding screen used to block a specific view or create a sense of enclosure around a feature, and the bamboo fence, which comes in many woven patterns (teppo-gaki, yotsume-gaki, kenninji-gaki) ranging from nearly transparent to fully opaque.',
        },
        {
          type: 'p',
          text: 'The sleeve fence — typically 3 to 5 feet tall and 4 to 8 feet long — is one of the most useful tools in Japanese garden design. Placed strategically, it conceals an unattractive element, forces a change of direction in a path, or frames a view through a deliberate opening. Because it is short and freestanding, it can be installed without posts or foundations in most soils.',
        },
        {
          type: 'list',
          items: [
            'Kenninji-gaki (solid woven bamboo): The densest pattern; provides full privacy and a clean, flat surface. Traditional in tea gardens as a backdrop for key plantings.',
            'Yotsume-gaki (square grid bamboo): An open lattice pattern that allows filtered views while defining space. Good for boundaries that should feel present but not oppressive.',
            'Teppo-gaki (gun barrel bamboo): Vertical round culms with spacing; a relaxed, rustic style appropriate for naturalistic gardens.',
            'Zig-zag (kinkakuji-style): Angled horizontal timbers on posts; used to create visual movement along a fence line.',
            'Sleeve fence (sodegaki): Short, freestanding screen — the most versatile single element in the Japanese garden design toolkit.',
          ],
        },
        {
          type: 'h3',
          text: 'Bridges — Crossing Points',
        },
        {
          type: 'p',
          text: 'A bridge in a Japanese garden is never just a way to cross water. It is a pause point — a moment in the journey where the visitor stops, looks, and sees the garden from a new angle. The most common Japanese garden bridges are the flat stone slab bridge (a single large stone or two parallel stones laid across a narrow water feature), the arched wooden bridge (most familiar to Western eyes from the iconic red-painted bridge over a koi pond), and the stepping-stone crossing (flat stones placed in water at intervals, requiring the visitor to watch their feet and slow their pace).',
        },
        {
          type: 'p',
          text: 'For American residential gardens, the flat stone slab bridge is the most appropriate and most achievable. A single large flagstone or two bluestone slabs placed across a dry stream or a narrow water feature, set on stone abutments at each bank, creates an authentic and durable crossing with no hardware, no railing, and no maintenance. The stone should be wide enough to feel secure (18–24 inches minimum) and should extend 6–8 inches past the bank on each side.',
        },
        {
          type: 'h3',
          text: 'Paths — The Journey as Design',
        },
        {
          type: 'p',
          text: 'Japanese garden paths are among the most deliberate and carefully designed elements of the tradition. They do not simply connect Point A to Point B. They control the pace of movement, direct the gaze, and reveal the garden in sequence — concealing some features until the right moment, offering a view of another feature before you arrive at it, and creating the sense that the garden is larger and more complex than it physically is.',
        },
        {
          type: 'p',
          text: 'The two fundamental path types are the tobi-ishi (stepping stone path) and the noren-ishi (a more continuous paved surface of fitted stones). The stepping stone path is the defining element of the tea garden roji — the dewy path — and its function is to slow the visitor to a pace where they must look at each stone before stepping, releasing the mind from thought and bringing attention entirely to the present moment. Stones should be irregular in shape, set flush with the ground or slightly raised, and placed to require a comfortable but slightly deliberate stride — typically 18 to 22 inches center to center for adult steps.',
        },
        {
          type: 'table',
          headers: ['Path Element', 'Material', 'Purpose', 'Placement Notes'],
          rows: [
            ['Tobi-ishi (stepping stones)', 'Irregular flat fieldstone, slate, bluestone, granite', 'Slows movement; forces attention to each step; rhythmic progression through garden', 'Set 18–22 in. center to center; embed 1–2 in. above grade; vary sizes for rhythm'],
            ['Noren-ishi (fitted stone paving)', 'Cut or fitted irregular stone; decomposed granite surround', 'Allows normal walking pace; used near structures, on arrival courts, around pavilions', 'Set in compacted base; fill joints with DG, moss, or creeping thyme'],
            ['Gravel path', 'Decomposed granite, pea gravel, crushed granite', 'Suggests movement; audible crunch underfoot; low cost; easily reshaped', 'Edge with timber, steel, or stone border; rake regularly; suppress weeds with fabric base'],
            ['Zig-zag path (yatsuhashi)', 'Flat wooden planks on posts over water or bog; or stepping stones in angular arrangement', 'Creates a pause and a shift in direction; traditional over iris plantings in water', 'Boards should be 10–12 in. wide; posts pressure-treated or black locust for durability'],
            ['Threshold stone (kutsunugi-ishi)', 'Single large flat stone at building or gate entrance', 'Marks transition point; where shoes are removed before entering a structure', 'Should be the largest single stone in the path sequence; set level and stable'],
          ],
        },
        {
          type: 'h3',
          text: 'The Tea House & Garden Pavilion',
        },
        {
          type: 'p',
          text: 'The ideal endpoint of the roji — the dewy path — in a traditional tea garden is the tea house (chashitsu): a small, humble structure designed for the practice of the tea ceremony. Its defining characteristics are deliberate simplicity, modest scale (a true chashitsu may be only a few tatami mats in size), natural materials (rough plaster walls, unfinished wood, clay roof tiles), and a small low entrance (nijiriguchi) that requires all who enter to bow, regardless of rank or status.',
        },
        {
          type: 'p',
          text: 'For American residential gardens, a full tea house is rarely practical, but the design principles of the tea house translate directly into garden pavilion design. A simple open-sided structure — 8 by 10 feet, with a post-and-beam frame, a low overhanging roof, and a wooden floor raised slightly off the ground — provides the fixed viewpoint and the sheltered contemplative space that the chashitsu provides in traditional gardens. It should be sited to face the best composition in the garden, not the house. The garden exists, in part, to be seen from this structure.',
        },
        {
          type: 'tip',
          emoji: '🏯',
          text: 'The lantern (toro) is the most commonly misused Japanese garden element in Western gardens. Authentic Japanese stone lanterns — yukimi-dori (snow-viewing), kasuga, oribe — are specific compositional elements placed with great care: at the edge of a water feature where they appear to reflect, at a path junction to mark a turning point, or at a tsukubai to provide light for evening ceremonies. A lantern placed in the center of a bed or used as a general accent defeats its purpose. If you use a lantern, place one, use it to mark a specific threshold or water edge, and set it where moss can establish at its base over time.',
        },
      ],
    },
  ],
}

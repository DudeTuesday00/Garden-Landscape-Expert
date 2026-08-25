export const squareFootGardeningContent = {
  id: 'square-foot-gardening',
  hero: {
    emoji: '📐',
    title: 'Square Foot Gardening',
    subtitle: 'Maximum food production in minimum space with this proven system',
  },
  intro: 'Square Foot Gardening is a complete system, not just a spacing method. It encompasses a specific raised bed structure, a proprietary growing medium called Mel\'s Mix, a grid system that divides each bed into individual one-square-foot planting cells, precise plant-per-square-foot spacing derived from each plant\'s mature size, and a succession planting schedule that keeps every square producing from the last frost of spring to the first frost of fall. This guide covers every component in depth — why each element exists, how to implement it, and how to adapt it to your specific space and climate.',
  sections: [
    {
      id: 'at-a-glance',
      title: 'Square Foot Gardening at a Glance',
      blocks: [
        {
          type: 'tip',
          emoji: '📐',
          text: 'Square Foot Gardening produces more food, in less space, with less water, less fertilizer, almost no weeding, and far less physical labor than any conventional garden of comparable productivity. A 4×4 SFG bed routinely out-produces a 4×16 conventional row garden. That is not a marketing claim — it is the practical outcome of intensive spacing, superior soil, and systematic succession planting.',
        },
        {
          type: 'table',
          headers: ['Feature', 'Conventional Row Garden', 'Square Foot Garden', 'Advantage'],
          rows: [
            ['Space efficiency', '15–20% of space growing food', '80–100% of space growing food', 'SFG produces same yield in 20% of the area'],
            ['Weeding time', 'Hours per week at peak season', 'Under 5 minutes per week', 'No bare soil = almost no weed germination'],
            ['Water use', 'High; most evaporates from bare soil', 'Up to 80% less water than row gardening', 'Intensive planting shades soil; water goes to roots'],
            ['Soil preparation', 'Annual tilling, amending, testing', 'One-time bed construction; top-dress yearly', 'Mel\'s Mix never needs tilling; add compost annually'],
            ['Physical labor', 'Significant digging, tilling, hoeing', 'Minimal; all work done from paths', 'Raised beds eliminate bending; no-till after year one'],
            ['Learning curve', 'High; varies by soil type, location, crop', 'Moderate; standardized system with predictable outcomes', 'Same method works in any climate, any zone'],
          ],
        },
        {
          type: 'tip',
          emoji: '📐',
          text: 'The central principle: never leave a square foot empty, and never let a square foot become exhausted. Every square in the grid should be growing something at all times during the growing season. When one crop is harvested, the square is immediately replanted — same crop for succession, or a different crop in the rotation. This continuous occupancy is what separates Square Foot Gardening from casual raised-bed growing.',
        },
        { type: 'image', src: '/guides/square-foot-gardening/grid-raised-bed-overview.jpg', alt: 'An overhead view of a wooden raised garden bed divided into a grid with different vegetables growing in each square', caption: 'The grid is what makes the method visible — a glance tells you exactly what is planted where and which squares are ready to replant.' },
      ],
    },
    {
      id: 'five-core-components',
      title: 'The Five Core Components',
      blocks: [
        {
          type: 'p',
          text: 'Square Foot Gardening is a system of five interlocking components. Omitting or compromising any one of them undermines the others. Understanding why each component exists allows you to adapt the system intelligently without losing its essential function.',
        },
        { type: 'h3', text: 'Component 1: The Raised Box' },
        {
          type: 'p',
          text: 'The SFG raised box is the foundation of the system. It is not simply a raised bed — it is a structure built to precise specifications that make every other component work correctly.',
        },
        {
          type: 'table',
          headers: ['Specification', 'Requirement', 'Why It Matters'],
          rows: [
            ['Width', 'Maximum 4 feet (accessible from both sides); 2 feet if against a wall', 'Every square must be reachable without stepping into the bed. Compaction destroys Mel\'s Mix structure.'],
            ['Depth', '6 inches minimum; 12 inches optimal', '12 inches accommodates almost all vegetables. Shallower limits root depth and dries faster.'],
            ['Material', 'Untreated wood (cedar, redwood, pine), composite lumber, galvanized metal', 'Avoid pressure-treated lumber with arsenic compounds.'],
            ['Bottom', 'Open bottom (preferred); wire mesh in gopher areas', 'Open bottom allows drainage and lets earthworms enter from below. Never use solid bottoms without drainage.'],
            ['Path width between beds', 'Minimum 3 feet; 4 feet preferred', 'Must accommodate wheelbarrow, comfortable passage, and kneeling to work the bed edges.'],
          ],
        },
        {
          type: 'list',
          items: [
            'Lumber: Four 2×6 or 2×8 boards (8 ft each, cut to 4 ft) — two per side, stacked, give 12 inches of depth.',
            'Fasteners: 3-inch deck screws (not nails — nails work loose with seasonal expansion).',
            'Cost estimate: A basic 4×4 box from pine 2×6 lumber runs $25–50; cedar $60–120.',
          ],
        },
        { type: 'h3', text: 'Component 2: Mel\'s Mix — The Growing Medium' },
        {
          type: 'p',
          text: 'Mel\'s Mix is the single most important and most misunderstood component of Square Foot Gardening. It is not garden soil. It is a manufactured, soilless growing medium with properties that make intensive planting work.',
        },
        {
          type: 'table',
          headers: ['Component', 'Proportion', 'Function', 'What to Buy / Notes'],
          rows: [
            ['Coarse Vermiculite', '1/3 by volume', 'Aerates the mix; retains moisture without waterlogging; keeps mix loose and non-compacting', 'Buy \'coarse\' or \'horticultural\' grade — fine vermiculite is for seed starting, not beds.'],
            ['Blended Compost', '1/3 by volume', 'Provides nutrients; hosts microbial ecosystem; improves moisture retention', 'CRITICAL: use at least 5 different compost sources — mushroom, worm castings, manure-based, leaf-based, food-waste-based.'],
            ['Peat Moss or Coconut Coir', '1/3 by volume', 'Retains moisture; creates airiness; provides slightly acidic pH balance', 'Coconut coir is the sustainable alternative to peat moss. Pre-moisten before mixing.'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The most common Square Foot Gardening mistake is using a single bag of compost in Mel\'s Mix. A single compost source — even an excellent one — cannot provide the complete spectrum of nutrients vegetables need. Use a minimum of five different compost sources. Worm castings are the most nutrient-dense and biologically active compost available and should always be one of your five sources.',
        },
        {
          type: 'list',
          items: [
            'Calculate volume: length × width × depth = cubic feet needed per component. For a 4×4 box at 12" depth: 16 cu ft total, so ~5.3 cu ft of each component.',
            'After year one: top-dress with 1–2 inches of fresh blended compost each spring.',
            'Never add native soil: it introduces weed seeds, pathogens, compaction, and pH variability.',
          ],
        },
        { type: 'h3', text: 'Component 3: The Grid' },
        {
          type: 'tip',
          emoji: '📐',
          text: 'Before the grid, a raised bed is just a raised bed. After the grid, it becomes a system. The grid makes the method visible — you can look at a bed and see immediately what is planted where, what is empty, what needs attention. Gardeners who skip the grid invariably drift toward conventional row-garden habits. Build the grid before you plant anything.',
        },
        {
          type: 'list',
          items: [
            'Materials: Wooden lath strips (traditional), 1/2-inch PVC pipe, metal conduit, or heavy twine stapled to the box top.',
            'Notch the box top edges at 12-inch intervals and lay grid strips across the notches for a clean, permanent grid.',
            'The grid should be permanent — not removed and replaced each season.',
          ],
        },
        { type: 'h3', text: 'Component 4: Plant Spacing — The Heart of the System' },
        {
          type: 'table',
          headers: ['Plants Per Sq Ft', 'Spacing', 'Examples', 'Notes'],
          rows: [
            ['1 plant per sq ft', '12" × 12"', 'Tomatoes, peppers, eggplant, broccoli, cabbage, chard, kale, zucchini', 'Large plants that need the full square.'],
            ['4 plants per sq ft', '6" × 6"', 'Leaf lettuce, dwarf kale, parsley, garlic, leeks, peas (bush)', 'One of the most common SFG spacings. A full square of leaf lettuce provides weekly salads.'],
            ['9 plants per sq ft', '4" × 4"', 'Bush beans, beets, spinach, turnips, most herbs, cilantro', 'Very productive. A 9-plant square of bush beans produces 2–3 pounds per planting.'],
            ['16 plants per sq ft', '3" × 3"', 'Carrots, radishes, green onions, small beets', 'Maximum intensity. Excellent for fast-maturing crops harvested individually.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Trust the numbers. SFG spacing feels crowded the first time you plant 16 radishes into a 12-inch square — but it is derived from the actual space mature plants need. Closely-spaced plants shade the soil beneath them, eliminating light that weed seeds need to germinate. They moderate soil temperature and reduce moisture evaporation. The slight reduction in individual plant size is more than offset by the number of plants per square foot.',
        },
        { type: 'h3', text: 'Component 5: Succession Planting' },
        {
          type: 'list',
          items: [
            'Sequential succession: Plant one or two squares of a fast-maturing crop (radishes, lettuce). When harvest begins, replant an adjacent square. Stagger plantings by 2–3 weeks for continuous supply.',
            'Relay succession: Plant a slow-growing crop (broccoli) in a square. While it grows, plant fast-maturing crops in adjacent squares that will be harvested and replanted.',
            'Seasonal succession: Plant cool-season crops in spring. As summer heat arrives, replace them immediately with warm-season crops.',
            'The rule: As soon as a square is harvested, replant it the same day. A square that sits empty is a wasted resource.',
          ],
        },
        { type: 'image', src: '/guides/square-foot-gardening/wooden-raised-bed-frame-grid.jpg', alt: 'A wooden raised garden bed frame with a string grid dividing it into one-foot squares, freshly filled with dark soil', caption: 'Build the grid before you plant anything — gardeners who skip it invariably drift back toward conventional row-garden habits.' },
      ],
    },
    {
      id: 'plant-spacing-reference',
      title: 'Complete Plant Spacing Reference',
      blocks: [
        {
          type: 'p',
          text: 'The following tables cover the most productive vegetables and herbs for Square Foot Gardening, with exact spacing, plants per square foot, and notes for each.',
        },
        { type: 'h3', text: '🍅 Fruiting Vegetables' },
        {
          type: 'table',
          headers: ['Plant', 'Spacing', 'Plants / Sq Ft', 'Notes'],
          rows: [
            ['Cherry Tomato (indeterminate)', '1 per 2 sq ft', '0.5', 'Train vertically on a strong cage. Indeterminate varieties grow all season — use a 6-foot cage minimum.'],
            ['Slicing / Beefsteak Tomato', '1 per 2–4 sq ft', '0.25–0.5', 'Large indeterminate varieties need 2–4 contiguous squares. Plant at one corner and train cage over adjacent squares.'],
            ['Bell / Sweet Pepper', '1 per sq ft', '1', 'Peppers stay compact and work perfectly in a single square. Stake if heavily loaded.'],
            ['Eggplant', '1 per sq ft', '1', 'Standard varieties need one square; dwarf varieties can share.'],
            ['Zucchini / Summer Squash', '1 per 4 sq ft', '0.25', 'One of the largest plants in SFG. Plan 4 contiguous squares per plant.'],
            ['Cucumber (slicing)', '1 per sq ft', '1', 'MUST be trellised vertically — this is non-negotiable in SFG.'],
            ['Beans — Bush', '9 per sq ft', '9', 'The most productive use of a square foot. Succession plant every 2–3 weeks for continuous harvest.'],
            ['Beans — Pole', '8 per sq ft', '8', 'Plant at the base of a vertical trellis. One planting produces all season.'],
            ['Peas — Climbing', '8 per sq ft', '8', 'Train up a trellis on the north side of the bed. Highly productive in cool weather.'],
            ['Corn (sweet)', '4 per sq ft', '4', 'Requires a block of at least 16 plants (4×4 squares) for wind pollination.'],
          ],
        },
        { type: 'h3', text: '🥬 Greens, Salads & Brassicas' },
        {
          type: 'table',
          headers: ['Plant', 'Spacing', 'Plants / Sq Ft', 'Notes'],
          rows: [
            ['Head Lettuce', '1 per sq ft', '1', 'Succession plant 1 square every 2 weeks for continuous supply.'],
            ['Leaf Lettuce (loose-leaf)', '4 per sq ft', '4', 'Cut-and-come-again. One square of mixed leaf lettuce provides weekly salads for a family of 4.'],
            ['Spinach', '9 per sq ft', '9', 'Cool-season. Harvest baby leaves (30 days) or full leaves (45 days). Bolts in heat.'],
            ['Arugula', '4–9 per sq ft', '4–9', 'Fast-maturing (30–40 days). Cut-and-come-again. Plant spring and fall.'],
            ['Mesclun / Salad Mix', 'Scatter over sq ft', 'n/a', 'Scatter-sow the entire square. Cut at 3–4 inches; regrows 2–3 times.'],
            ['Kale', '1 per sq ft', '1', 'Large plant. One planting produces from spring through winter in mild climates.'],
            ['Broccoli', '1 per sq ft', '1', 'After main head, side shoots continue producing for weeks. Plant spring and again mid-summer for fall.'],
            ['Kohlrabi', '4 per sq ft', '4', 'Fast-growing (50–60 days) and space-efficient. Great SFG crop.'],
          ],
        },
        { type: 'h3', text: '🥕 Root Vegetables' },
        {
          type: 'table',
          headers: ['Plant', 'Spacing', 'Plants / Sq Ft', 'Notes'],
          rows: [
            ['Carrots (full-size)', '16 per sq ft', '16', 'Mel\'s Mix is ideal for carrots — deep, loose, stone-free. Thin ruthlessly to 3-inch spacing.'],
            ['Radishes', '16 per sq ft', '16', 'The fastest crop in SFG (22–30 days). Ideal succession crop to fill gaps between slower plants.'],
            ['Beets', '9 per sq ft', '9', 'Each \'seed\' is actually a cluster of 2–3 seeds — thin to one plant per 4-inch space. Both root and greens are edible.'],
            ['Garlic', '4–9 per sq ft', '4–9', 'Plant individual cloves in fall (October–November). One of the highest-value SFG crops per square foot.'],
            ['Green Onions / Scallions', '16 per sq ft', '16', 'One of the highest-density SFG crops. Harvest in 60–70 days. Succession plant every 3 weeks.'],
            ['Leeks', '9 per sq ft', '9', 'Long season (100–120 days). Very cold-hardy — harvest through winter in Zone 6+.'],
          ],
        },
        { type: 'h3', text: '🌿 Herbs' },
        {
          type: 'table',
          headers: ['Plant', 'Spacing', 'Plants / Sq Ft', 'Notes'],
          rows: [
            ['Basil (Genovese)', '1–4 per sq ft', '1–4', '1/sq ft for a large plant; 4/sq ft for regular pinching harvest.'],
            ['Cilantro', '9 per sq ft', '9', 'Quick to bolt in heat. Succession plant every 2–3 weeks in spring and fall.'],
            ['Dill', '9 per sq ft', '9', 'Tall — plant on the north side so it doesn\'t shade others.'],
            ['Chives', '4 per sq ft', '4', 'Hardy perennial. One planting lasts many years. Both leaves and flowers are edible.'],
            ['Mint (all varieties)', '1 per sq ft (contained)', '1', 'MUST be contained — grow in a pot buried to its rim in the SFG bed. Otherwise takes over the entire bed.'],
            ['Thyme / Oregano / Rosemary / Sage', '1 per sq ft', '1', 'Hardy perennials. Position at ends or edges of the bed as permanent, non-rotating anchor points.'],
          ],
        },
        {
          type: 'tip',
          emoji: '📋',
          text: 'Perennial herbs (chives, thyme, oregano, rosemary, sage) occupy their squares permanently. This is a feature: once established, they require almost no care and produce for years. Position them at the ends or edges of the bed so they don\'t block access to the rest of the grid.',
        },
        { type: 'image', src: '/guides/square-foot-gardening/carrots-radishes-dense-planting.jpg', alt: 'Densely planted carrots and radishes growing in a small square section of a raised garden bed', caption: 'Mel\'s Mix is deep, loose, and stone-free — exactly what root vegetables need to reach the 16-per-square-foot density this system is built around.' },
      ],
    },
    {
      id: 'planning',
      title: 'Planning Your Square Foot Garden',
      blocks: [
        {
          type: 'p',
          text: 'Planning is where Square Foot Gardening earns its reputation for efficiency. A well-planned SFG grid uses every square productively from early spring through late fall.',
        },
        { type: 'h3', text: 'The Planning Process — Step by Step' },
        {
          type: 'list',
          items: [
            'Assess your space and sun: Map your beds. Note which direction is north. Count sun hours per area.',
            'List your priorities: What does your household actually eat and in what quantities? Plan squares around consumption, not ideal variety lists.',
            'Separate by season: Cool-season crops (spring and fall) vs. warm-season crops (summer). Plan the seasonal transition for each square.',
            'Map the grid on paper: Draw your bed(s) to scale on graph paper (1 square = 1 foot). Assign each square a crop.',
            'Plan vertical structures: Mark where trellises go before finalizing plant placement. Trellises always go on the north end of the bed to avoid shading.',
            'Plan succession intervals: For each fast-maturing crop, note when you will replant. Write succession dates directly on the planning grid.',
          ],
        },
        { type: 'h3', text: 'Tall-to-Short Placement (North-to-South)' },
        {
          type: 'table',
          headers: ['Position in Bed', 'Height Range', 'Best Crops'],
          rows: [
            ['North end — trellis zone', '4–8 ft (trellised)', 'Pole beans, cucumbers, indeterminate tomatoes, peas, small-fruited melons'],
            ['North-center — tall plants', '2–4 ft', 'Determinate tomatoes, large peppers, eggplant, broccoli, large kale, chard, corn'],
            ['Center', '1–2 ft', 'Bush beans, head lettuce, beets, garlic, onions'],
            ['South-center — medium plants', '6–12 inches', 'Leaf lettuce, spinach, herbs (thyme, basil), kohlrabi, radishes'],
            ['South end — shortest plants', 'Under 6 inches', 'Carrots (tops only), green onions, low-growing herbs, strawberries'],
          ],
        },
        { type: 'h3', text: 'Companion Planting Guide' },
        {
          type: 'table',
          headers: ['Plant', 'Best Companions', 'Companions to Avoid', 'Reason'],
          rows: [
            ['Tomatoes', 'Basil, carrots, parsley, marigolds, borage', 'Brassicas, fennel', 'Basil repels aphids; marigolds deter nematodes; borage attracts pollinators.'],
            ['Cucumbers', 'Beans, dill, marigolds, nasturtiums, radishes', 'Sage, strong aromatic herbs', 'Radishes deter cucumber beetles; dill attracts predatory insects.'],
            ['Beans', 'Carrots, squash, cucumbers, marigolds', 'Onions, garlic, leeks, fennel', 'Beans fix atmospheric nitrogen. Onion family inhibits bean growth.'],
            ['Brassicas', 'Dill, marigolds, nasturtiums, onions', 'Strawberries, tomatoes in adjacent squares', 'Dill attracts wasps that parasitize cabbage worms; nasturtiums trap aphids.'],
            ['Carrots', 'Leeks, onions, sage, rosemary, lettuce', 'Dill (once flowering)', 'Onions and leeks repel carrot fly; rosemary masks carrot scent.'],
            ['Garlic / Onions', 'Carrots, beets, lettuce, tomatoes', 'Beans, peas', 'Allium family has broad pest-deterrent properties.'],
          ],
        },
        { type: 'h3', text: 'Crop Rotation' },
        {
          type: 'table',
          headers: ['Plant Family', 'Members', 'What They Deplete / Leave Behind', 'Rotation Rule'],
          rows: [
            ['Solanaceae (Nightshades)', 'Tomatoes, peppers, eggplant, potatoes', 'Heavy nitrogen feeders; leave susceptibility to Verticillium wilt', 'Do not plant nightshades in the same squares for at least 3 years. Follow with legumes.'],
            ['Fabaceae (Legumes)', 'Beans, peas', 'Fix atmospheric nitrogen — enrich soil for following crops', 'Excellent before heavy feeders. Rotate to different squares each year.'],
            ['Brassicaceae (Brassicas)', 'Broccoli, cabbage, kale, radishes, turnips', 'Heavy phosphorus feeders; leave susceptibility to clubroot', 'Never plant brassicas in the same square two years running.'],
            ['Cucurbitaceae (Cucurbits)', 'Cucumbers, squash, melons, pumpkins', 'Heavy feeders; susceptible to powdery mildew', 'Rotate to different squares each year. Follow with legumes.'],
            ['Alliaceae (Alliums)', 'Onions, garlic, leeks, chives', 'Medium feeders; suppress pathogens', 'Excellent preceding crop for disease suppression. Rotate annually.'],
          ],
        },
        {
          type: 'tip',
          emoji: '📋',
          text: 'Keep a SFG planning journal that documents what grew where, in which season, and what followed it. Over 2–3 seasons, this record allows you to see rotation patterns, identify which combinations produced best, and plan future seasons with real data from your specific beds and microclimate. Minimum: a grid sketch with each square labeled with crop, planting date, and harvest date.',
        },
      ],
    },
    {
      id: 'building-beds',
      title: 'Building Your Beds & Making Mel\'s Mix',
      blocks: [
        { type: 'h3', text: 'Step-by-Step: Building a 4×4 SFG Box' },
        {
          type: 'list',
          items: [
            'Gather materials: Four 8-foot 2×6 boards (cut in half = eight 4-foot sections), 3-inch deck screws, drill.',
            'Assemble the frame: Stack two boards per side. Attach end boards to side boards with 3-inch screws through pre-drilled holes.',
            'Add corner reinforcement: Drive 12-inch sections of 4×4 post into each inside corner, or use L-brackets.',
            'Position the box permanently: Once filled with 300–400 pounds of Mel\'s Mix, it is not easily moved.',
            'Lay ground treatment: Inside the box, lay 5–6 layers of cardboard (overlapping, no gaps) on the ground to suppress weeds.',
            'Install the grid before filling: Notch the box edges at 12-inch intervals and attach grid strips.',
            'Mix and fill: Blend Mel\'s Mix components thoroughly. Moisten as you fill — dry vermiculite is dusty and hazardous to breathe.',
          ],
        },
        { type: 'h3', text: 'Making Mel\'s Mix — Practical Approach' },
        {
          type: 'list',
          items: [
            'Calculate volume first: length × width × depth = cubic feet needed per component. Buy 10% extra.',
            'Pre-moisten coir: Coconut coir comes in compressed blocks. Cover with warm water and allow to expand fully before mixing (20–30 minutes).',
            'Large tarp method: For one or two beds, spread a 10×10 ft tarp on a flat surface. Dump all components onto the tarp and mix by lifting opposite corners.',
            'Wheelbarrow method: Mix in small batches, thoroughly mixed, transferred to the bed.',
            'Final moisture check: Properly moistened Mel\'s Mix should hold together briefly when squeezed but fall apart readily.',
          ],
        },
        { type: 'h3', text: 'Vertical Structures' },
        {
          type: 'table',
          headers: ['Structure Type', 'Best Crops', 'Construction', 'Notes'],
          rows: [
            ['Vertical frame trellis', 'Cucumbers, pole beans, peas, small melons, indeterminate tomatoes', 'Two 6-foot posts at north end of bed. String wire horizontally every 6 inches.', 'The most versatile SFG vertical structure. Can be angled outward over a path to avoid shading the bed.'],
            ['Cattle panel arch', 'Same as above + heavier gourds', 'Bend a 16-foot cattle panel into an arch over the bed, stake ends into ground.', 'More permanent and rigid. Allows growing on both sides of the arch.'],
            ['Teepee / tripod', 'Pole beans, cucumbers', 'Three 6–8 foot bamboo poles, bases in a triangle, tied at the top.', 'Best for beans — the teepee shape perfectly matches their climbing habit.'],
            ['Tomato cage (heavy)', 'Indeterminate tomatoes', 'Purchase 5–6 foot heavy wire cages, or make from concrete remesh.', 'Standard garden center cages are too short and flimsy. Use remesh or livestock panel cages.'],
          ],
        },
        { type: 'image', src: '/guides/square-foot-gardening/cucumber-trellis-raised-bed.jpg', alt: 'Cucumbers climbing a vertical trellis at the edge of a wooden raised garden bed', caption: 'Trellising is non-negotiable for cucumbers in SFG — it turns a 4-square-foot sprawling plant into a 1-square-foot vertical one.' },
      ],
    },
    {
      id: 'seasonal-management',
      title: 'Seasonal Management — Year-Round Production',
      blocks: [
        {
          type: 'p',
          text: 'A Square Foot Garden managed through all four seasons in a temperate climate produces food for 9–12 months of the year. The schedule below uses Zone 7 as a reference point — shift dates 2–4 weeks later for each zone colder (Zone 6, 5, 4) or 2–4 weeks earlier for each zone warmer (Zone 8, 9).',
        },
        {
          type: 'table',
          headers: ['Season / Month', 'What\'s Growing', 'Key Tasks', 'Planning Ahead'],
          rows: [
            ['Late Winter / Pre-Spring (Feb–Mar)', 'Nothing yet; or overwintered crops (garlic, kale, carrots)', 'Order seeds. Plan grid on paper. Build or repair boxes. Replenish Mel\'s Mix. Start seeds indoors: tomatoes, peppers, eggplant (8–10 weeks before last frost).', 'This is the most important planning window. Map every square before the first seed goes in.'],
            ['Spring Cool Season (Mar–May)', 'Radishes, lettuce, spinach, arugula, peas, broccoli, kale, chard, beets, carrots, garlic', 'Direct sow cool-season crops as soon as soil can be worked. Harden off transplants. Succession plant radishes and lettuce every 2 weeks.', 'Plan which squares transition to warm-season crops in May. Identify succession dates.'],
            ['Early Summer Transition (May–Jun)', 'Transition: pulling bolted cool-season crops; planting warm-season', 'After last frost (mid-April Zone 7): transplant tomatoes, peppers, eggplant. Direct sow beans, cucumbers, squash, basil. Pull bolted crops; replant squares immediately.', 'Mark succession planting dates for beans (every 3 weeks). Plan fall broccoli starts for mid-July.'],
            ['Midsummer (Jun–Aug)', 'Tomatoes, peppers, eggplant, cucumbers, beans, squash, basil, dill, chard, corn', 'Harvest every 2–3 days. Prune suckers from indeterminate tomatoes. Water daily in containers; every 2–3 days in raised beds in heat.', 'Start fall brassica transplants indoors in mid-July. Direct sow carrots in mid-August for fall harvest.'],
            ['Late Summer / Fall Transition (Aug–Sep)', 'Warm-season crops still producing; fall crops beginning', 'Transplant fall broccoli and kale. Direct sow spinach, arugula, turnips, radishes. Pull exhausted summer crops and immediately replant.', 'Identify which squares will be garlic in October.'],
            ['Fall Cool Season (Sep–Nov)', 'Broccoli, kale, chard, carrots, beets, spinach, radishes, turnips, lettuce (early fall)', 'Harvest fall crops. Plant garlic in October. Apply row covers when temps drop below 28°F. Mulch garlic with straw after planting.', 'Order next year\'s seeds in November. Top-dress beds with compost as they empty.'],
            ['Winter (Dec–Feb, Zone 7)', 'Garlic, overwintered kale, chard, carrots (under mulch), spinach (under row cover)', 'Minimal management. Check row covers after wind. Garlic needs no care until spring.', 'Order seeds by January. Begin tomato and pepper seeds indoors in late February.'],
          ],
        },
        { type: 'h3', text: 'Watering SFG Beds' },
        {
          type: 'list',
          items: [
            'The finger test: Push a finger 2 inches into the mix. If moist, skip watering. If dry, water thoroughly.',
            'Deep watering: When you water, wet the full 12 inches of mix. Shallow sprinkling promotes shallow roots.',
            'Frequency: In spring and fall, most SFG beds need watering every 3–4 days. In hot summer weather (consistently above 90°F), water every 1–2 days. Containers every 1–2 days in heat regardless of zone.',
            'Drip irrigation: A soaker hose or drip line through the bed reduces watering labor to turning a valve. The most efficient approach for large systems.',
          ],
        },
        { type: 'h3', text: 'Season Extension' },
        {
          type: 'table',
          headers: ['Method', 'Temperature Protection', 'Best Used For', 'Cost / Complexity'],
          rows: [
            ['Row cover (lightweight)', '2–4°F of frost protection', 'Extending cool-season crops into early winter; protecting transplants from late frost', 'Low cost; very easy. Drape directly over plants.'],
            ['Row cover (heavyweight)', '6–8°F of frost protection', 'Carrying cool-hardy crops through most of winter in Zone 6–7', 'Moderate cost. Reduces light transmission.'],
            ['Cold frame (unheated)', '10–15°F of frost protection', 'Near-complete winter garden in Zone 6–7; extends spring and fall by 4–6 weeks', 'Moderate cost and construction. Vent on warm days.'],
            ['Low tunnel (hoops + row cover)', '4–8°F of frost protection', 'The most versatile season extension tool for SFG — easily covers one or more beds', 'Low to moderate cost. Hoops store easily; row cover reusable for 3–5 seasons.'],
          ],
        },
        { type: 'image', src: '/guides/square-foot-gardening/row-cover-raised-bed-frost-protection.jpg', alt: 'A lightweight white fabric row cover draped over hoops covering a raised garden bed', caption: 'A low tunnel is the most versatile season-extension tool in SFG — a few degrees of frost protection can add weeks on both ends of the growing season.' },
      ],
    },
    {
      id: 'advanced-techniques',
      title: 'Advanced Square Foot Gardening Techniques',
      blocks: [
        { type: 'h3', text: 'Vertical Growing — Maximizing Space Above the Bed' },
        {
          type: 'list',
          items: [
            'Cucumbers on vertical trellis: Train the central leader upward, pinching lateral shoots to 2 leaves each. Fruit hangs straight and clean.',
            'Indeterminate tomatoes (single leader): One plant can be grown as a single-leader vine trained straight up, producing fruit at every node, requiring only 1 square foot of ground space.',
            'Pole beans on a teepee: 8 plants per square foot at the base, climbing to 6 feet. The most productive legume use of a square foot.',
            'Melons on trellis: Small-fruited melons (\'Sugar Baby,\' \'Minnesota Midget\') can be grown vertically if fruits are supported with mesh slings.',
          ],
        },
        { type: 'h3', text: 'The Multi-Bed System' },
        {
          type: 'table',
          headers: ['Number of 4×4 Beds', 'Approximate Productivity', 'Recommended Allocation', 'Notes'],
          rows: [
            ['1 bed (16 sq ft)', 'Salads, herbs, and some vegetables for 1–2 people', '4 squares greens, 4 tomatoes/peppers, 4 beans/cucumbers, 4 root veg/herbs', 'Entry-level system. Demonstrates the method; builds skills.'],
            ['2 beds (32 sq ft)', 'Most vegetables for a couple; supplemental for a small family', 'Bed 1: spring + summer succession. Bed 2: fall cool-season + garlic overwintering.', 'Two-bed rotation enables proper seasonal sequencing.'],
            ['3–4 beds (48–64 sq ft)', 'Primary vegetable source for a family of 4 with preservation surplus', 'Dedicated beds: salads/herbs, large fruiting crops, root vegetables, cool-season/garlic rotation.', 'Handles most of a family\'s fresh vegetable needs May–November in Zone 7.'],
            ['5–8 beds (80–128 sq ft)', 'Substantial food self-sufficiency; preservation quantities', 'Add dedicated beds: perennial herbs, strawberries, high-value specialty crops.', 'Yields are meaningfully significant as a food budget supplement.'],
          ],
        },
        { type: 'h3', text: 'Intensive Interplanting' },
        {
          type: 'list',
          items: [
            'Radishes under transplants: Plant 4–8 radishes around a newly transplanted tomato. The radishes mature (22–30 days) before the tomato shades them, using the temporal gap between transplanting and canopy closure.',
            'Lettuce under broccoli: Plant 4 lettuce plants in a broccoli square at transplant time. Harvest lettuce before the broccoli head forms.',
            'Green onions as permanent interplant: A ring of 4–6 green onions around the base of a pepper or eggplant occupies the edge of the square that would otherwise be bare.',
          ],
        },
        { type: 'h3', text: 'Seed Starting for SFG' },
        {
          type: 'table',
          headers: ['Crop', 'Weeks Before Last Frost to Start Indoors', 'Notes for SFG'],
          rows: [
            ['Tomatoes (indeterminate)', '6–8 weeks', 'Start early for the longest possible season. Transplant when nighttime temps stay above 50°F.'],
            ['Peppers (sweet and hot)', '8–10 weeks', 'Peppers are slow from seed — start earlier than tomatoes. Need 80°F+ soil to germinate reliably.'],
            ['Eggplant', '8–10 weeks', 'Very sensitive to cold soil — do not transplant until soil is consistently 60°F+.'],
            ['Broccoli (fall crop)', '10–12 weeks before first fall frost', 'Start in mid-July in Zone 7 for fall transplanting.'],
            ['Basil', '4–6 weeks before last frost', 'Very frost-sensitive — do not transplant until soil and nights are warm (60°F+).'],
            ['Lettuce (for transplants)', '4–5 weeks', 'Transplants give a 3–4 week advantage. Useful for getting early-season squares planted while soil is still cold.'],
          ],
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Square Foot Gardens',
      blocks: [
        {
          type: 'table',
          headers: ['Problem', 'Most Likely Cause', 'Diagnosis', 'Solution'],
          rows: [
            ['Seeds not germinating', 'Too cold, too deep, or old seeds; single-source compost', 'Check soil temperature. Test seeds on moist paper towel (5 days). Check planting depth.', 'Most vegetables need 55–75°F soil. Improve compost diversity in Mel\'s Mix.'],
            ['Seedlings leggy', 'Insufficient light; too warm; started too early indoors', 'Check light hours — 6+ hours of direct sun required. Indoor seedlings need 14–16 hours under grow lights.', 'Add supplemental grow lights. Start seeds closer to transplant date.'],
            ['Plants yellowing (whole plant)', 'Nitrogen deficiency or overwatering / root rot', 'Is the Mel\'s Mix soggy? Is the mix more than 2 seasons old without compost replenishment?', 'For nitrogen: feed with liquid fish emulsion. For root rot: improve drainage, reduce watering.'],
            ['Poor fruit set on tomatoes / peppers', 'Temperature too high or too low; nitrogen excess', 'Tomatoes drop flowers when nights are above 70°F or below 55°F.', 'Plant heat-tolerant varieties. Reduce nitrogen at flower stage. Hand-pollinate with electric toothbrush.'],
            ['Waterlogging / standing water', 'Insufficient drainage; clay soil beneath bed', 'Check if water exits bottom of bed within 30 minutes of watering.', 'Raise bed on feet. Add drainage layer of coarse gravel inside the box bottom.'],
            ['Mix compacting after one season', 'Organic matter decomposing; not enough coarse vermiculite; being walked on', 'Probe mix with a finger — should be loose and aerated to 12 inches.', 'Top-dress with fresh Mel\'s Mix components. Never step in the bed.'],
            ['Rapid bolting (lettuce, spinach)', 'Heat; long day length; natural seasonal response', 'Bolting is unstoppable once triggered.', 'Plant cool-season crops early. Use bolt-resistant varieties. Transition to warm-season crops.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Square Foot Gardening works not because of any single clever idea, but because every component reinforces every other. Remove any one of them and the system degrades toward conventional raised-bed growing. The gardeners who get the most from SFG trust the system completely for at least one full season — they use Mel\'s Mix as specified, build the grid before planting, follow the spacing numbers even when they seem crowded, and replant immediately after each harvest. By midsummer of the first season, those gardeners understand why every element exists.',
        },
      ],
    },
  ],
}

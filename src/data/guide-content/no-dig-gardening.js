export const noDigGardeningContent = {
  id: 'no-dig-gardening',
  hero: {
    emoji: '🚫',
    title: 'No-Dig Gardening',
    subtitle: 'The Complete Guide to Building Living Soil Without Turning a Single Spadeful',
  },
  intro: 'No-dig gardening is one of the most significant shifts in how we understand and practice growing food and ornamentals. It turns out that the act of digging — the one thing every gardener has always done without question — actively destroys the microscopic universe that makes fertile soil possible. This guide gives you everything you need to transition to no-dig methods: the soil science behind why it works, the layering techniques that build fertility fast, the composting and mulching strategies that drive results, the complete planting and maintenance calendar, and the region-specific guidance for every American climate.',
  sections: [
    {
      id: 'science',
      title: 'Section 1: The Science of No-Dig',
      blocks: [
        {
          type: 'h3',
          text: 'Why Leaving Soil Undisturbed Is the Single Most Important Thing You Can Do for Garden Productivity',
        },
        {
          type: 'p',
          text: 'For generations, digging, tilling, and turning the soil has been considered fundamental garden practice. It is actually one of the most destructive acts we can perform in the garden.',
        },
        {
          type: 'p',
          text: 'Healthy garden soil is an extraordinarily complex living ecosystem. A single teaspoon contains roughly one billion bacteria, several yards of fungal hyphae, thousands of protozoa, and hundreds of nematodes. These organisms form the soil food web that regulates nutrient availability, disease suppression, water retention, and plant growth.',
        },
        {
          type: 'h3',
          text: 'Understanding Why Digging Destroys Soil',
        },
        {
          type: 'list',
          items: [
            'Sever mycorrhizal fungal networks that connect plant roots to nutrients and water.',
            'Collapse soil structure and aggregates that hold air and water in balance.',
            'Expose carbon to oxidation, depleting organic matter.',
            'Disrupt vertically layered organism communities.',
            'Create hardpan layers that roots and water cannot penetrate.',
            'Trigger weed seed germination by bringing dormant seeds to the surface.',
          ],
        },
        {
          type: 'h3',
          text: 'The Soil Food Web: What You Are Protecting',
        },
        {
          type: 'table',
          headers: ['Soil Organism', 'Role in Soil', 'Harmed by Tillage?'],
          rows: [
            ['Bacteria', 'Break down organic matter; fix nitrogen; suppress pathogens; bind soil aggregates', 'Yes'],
            ['Fungi (including mycorrhizae)', 'Form networks connecting roots to nutrients; protect roots from pathogens', 'Severely'],
            ['Earthworms', 'Process organic matter into castings; create channels for water and roots', 'Severely'],
            ['Protozoa & Nematodes', 'Graze bacteria and release plant-available nitrogen; regulate populations', 'Yes'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'The Mycorrhizal Connection: Plants growing in undisturbed soil with intact mycorrhizal networks consistently outperform the same plants in tilled soil — not because of any nutrient addition, but because the fungal networks are simply more effective at gathering resources.',
        },
        { type: 'image', src: '/guides/no-dig-gardening/earthworm-rich-soil-closeup.jpg', alt: 'Close-up of dark crumbly garden soil full of earthworms and organic matter', caption: 'This is what an undisturbed soil food web looks like — earthworm channels, dark crumbly structure, and no hardpan from tillage.' },
      ],
    },
    {
      id: 'method',
      title: 'Section 2: The No-Dig Method',
      blocks: [
        {
          type: 'h3',
          text: 'Sheet Mulching, Lasagna Beds, and Building New Beds on Any Surface',
        },
        {
          type: 'p',
          text: 'No-dig gardening shares the core principle of never inverting soil layers and always feeding the soil through surface application of organic matter.',
        },
        {
          type: 'h3',
          text: 'Method 1: The Sheet Mulch / Cardboard Bed (New Beds on Turf or Weeds)',
        },
        {
          type: 'p',
          text: 'The definitive technique for converting lawn or weedy ground into productive space without digging.',
        },
        {
          type: 'list',
          items: [
            'Mow or flatten existing vegetation low.',
            'Lay overlapping cardboard (remove tape/staples), wetting each piece thoroughly.',
            'Apply 4-6 inches of finished compost on top.',
            'Plant transplants immediately (direct seed after 4-6 weeks when settled).',
          ],
        },
        {
          type: 'tip',
          emoji: '💡',
          text: 'Cardboard under 4-6 inches of compost typically breaks down within 3-6 months. By the second growing season, what was lawn has become fully integrated soil — with no digging required.',
        },
        { type: 'image', src: '/guides/no-dig-gardening/cardboard-compost-sheet-mulch.jpg', alt: 'Overlapping sheets of cardboard being covered with a thick layer of dark compost to smother lawn grass', caption: 'This cardboard-and-compost sandwich is the entire technique — no tilling, no removing turf, just smothering and building on top.' },
        {
          type: 'h3',
          text: 'Method 2: The Lasagna Bed (Deep Nutrient-Building)',
        },
        {
          type: 'table',
          headers: ['Layer', 'Material', 'Depth', 'Purpose'],
          rows: [
            ['1 (base)', 'Cardboard', 'Single overlapping layer', 'Smother vegetation'],
            ['2', 'Green material (grass, scraps)', '2-3 inches', 'Nitrogen to activate decomposition'],
            ['3', 'Brown material (straw, leaves)', '3-4 inches', 'Carbon layer; air pockets'],
            ['4', 'Compost or aged manure', '2-3 inches', 'Microbial inoculant'],
            ['5 (top)', 'Finished compost', '4-6 inches', 'Planting layer'],
          ],
        },
        {
          type: 'h3',
          text: 'Method 3: Annual Compost Top-Dressing',
        },
        {
          type: 'p',
          text: 'For established beds, apply 1-2 inches of finished compost annually on the surface. Do not dig it in. Earthworms and biology do the work.',
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'One Inch Per Year: Charles Dowding\'s trials show that one inch of compost top-dressed annually maintains and builds fertility for continuous production.',
        },
      ],
    },
    {
      id: 'practice',
      title: 'Section 3: No-Dig in Practice',
      blocks: [
        {
          type: 'h3',
          text: 'The No-Dig Vegetable Garden',
        },
        {
          type: 'p',
          text: 'Design permanent beds 30-48 inches wide with permanent 12-18 inch paths. Never walk on beds.',
        },
        { type: 'image', src: '/guides/no-dig-gardening/permanent-raised-bed-rows.jpg', alt: 'Permanent no-dig garden beds with narrow walking paths between them, vegetables growing in neat rows', caption: 'Fixed beds and permanent paths mean the growing soil is never compacted by foot traffic — the structural foundation the whole no-dig method depends on.' },
        {
          type: 'h3',
          text: 'Specific Crops in No-Dig',
        },
        {
          type: 'table',
          headers: ['Crop', 'No-Dig Method', 'Tips'],
          rows: [
            ['Potatoes', 'Lay seed potatoes on compost surface; cover with 6-8 inches straw', 'Harvest by pulling back straw — no digging'],
            ['Carrots & Root Crops', 'Sow directly into compost surface layer', 'Compost provides ideal loose, stone-free medium'],
            ['Tomatoes & Peppers', 'Plant transplants through compost; cut at base at season end', 'Leave roots intact to preserve mycorrhizal networks'],
            ['Garlic', 'Plant cloves 2-3 inches deep into compost in autumn', 'One of the best crops to follow summer vegetables'],
          ],
        },
        { type: 'image', src: '/guides/no-dig-gardening/potato-straw-harvest.jpg', alt: 'Straw pulled back to reveal potatoes growing on top of a compost bed surface', caption: 'Growing potatoes on the surface under straw means harvest is just pulling back the mulch — no digging fork required.' },
        {
          type: 'h3',
          text: 'No-Dig for Ornamental Beds and Cut Flowers',
        },
        {
          type: 'p',
          text: 'Use sheet mulching for new borders. On established beds, stop digging and top-dress annually with compost. Minimize perennial division frequency.',
        },
      ],
    },
    {
      id: 'composting',
      title: 'Section 4: Composting for No-Dig',
      blocks: [
        {
          type: 'h3',
          text: 'Compost: The Engine of No-Dig Gardening',
        },
        {
          type: 'p',
          text: 'No-dig runs on finished compost. Quality is everything — dark, crumbly, earthy-smelling, with no recognizable original materials.',
        },
        {
          type: 'h3',
          text: 'Hot Composting (Fast, 4-8 Weeks)',
        },
        {
          type: 'list',
          items: [
            'Build the pile all at once (minimum 3x3x3 ft).',
            'Aim for ~25-30:1 Carbon:Nitrogen ratio (roughly 2 parts brown to 1 part green by volume).',
            'Keep moist like a wrung-out sponge.',
            'Turn every 3-5 days.',
            'Target 140-160°F in the center.',
          ],
        },
        {
          type: 'h3',
          text: 'Cold Composting (Low Effort, 6-18 Months)',
        },
        {
          type: 'p',
          text: 'Add materials as available. Maintain rough balance of greens and browns. Use the bottom first.',
        },
        {
          type: 'tip',
          emoji: '💡',
          text: 'The 1-2-3 Compost Rule: (1) A home composting system, (2) a bulk source for establishment, (3) steady input of green and brown materials.',
        },
        { type: 'image', src: '/guides/no-dig-gardening/finished-dark-compost-pile.jpg', alt: 'A pile of dark, crumbly, finished compost with a garden fork resting in it', caption: 'Dark, crumbly, and earthy-smelling with no recognizable original materials — this is finished compost ready to top-dress a no-dig bed.' },
      ],
    },
    {
      id: 'weeds-pests',
      title: 'Section 5: Weeds, Pests & Problems',
      blocks: [
        {
          type: 'h3',
          text: 'Weed Management Without Digging',
        },
        {
          type: 'p',
          text: 'No-dig eliminates the cycle of bringing dormant weed seeds to the surface. The seed bank stays buried and dormant.',
        },
        {
          type: 'table',
          headers: ['Weed Type', 'No-Dig Approach'],
          rows: [
            ['Annual weeds', 'Hand-pull or shallow hoe (<½ inch) when small'],
            ['Tap-rooted perennials (dandelion, dock)', 'Pull or lever roots cleanly from loose compost surface'],
            ['Running perennials (bindweed, couch grass)', 'Repeated shoot removal + thick cardboard + deep mulch'],
          ],
        },
        {
          type: 'h3',
          text: 'Pest Management in No-Dig Gardens',
        },
        {
          type: 'p',
          text: 'Biologically active, undisturbed soil actively suppresses many soil-borne diseases and supports beneficial predators (ground beetles, predatory nematodes, etc.).',
        },
      ],
    },
    {
      id: 'regional',
      title: 'Section 6: Regional No-Dig Guide',
      blocks: [
        {
          type: 'h3',
          text: 'Adapting No-Dig to Every American Climate',
        },
        {
          type: 'table',
          headers: ['Region', 'Key Opportunities', 'Key Challenges', 'Best Strategy'],
          rows: [
            ['Pacific Northwest (7-9)', 'Long mild seasons, natural rain', 'Wet winters, slugs', 'Establish beds in autumn; heavy wood chip paths'],
            ['California Coast (8-11)', 'Year-round growing possible', 'Summer drought', 'Heavy surface mulch for moisture retention'],
            ['Desert Southwest (7-11)', 'Excellent winter growing', 'Extreme summer heat, alkaline soils', 'Generous compost (2-3"); deep summer mulch'],
            ['Mountain West (4-7)', 'Cool summers, intense sun', 'Short season, late frosts', 'Autumn sheet mulching; wind protection'],
            ['Midwest/Great Lakes (4-7)', 'Rich soils, good rainfall', 'Humid summers, clay soils', 'Leaf mold from autumn leaves is gold'],
            ['Mid-Atlantic/Southeast (6-9)', 'Long season, two major crops', 'High humidity, clay, disease', 'No-dig excels here due to reduced disease pressure'],
            ['New England/Northeast (4-6)', 'Cool summers suit brassicas', 'Short season, rocks, deer', 'Leaf mold + deep winter mulch'],
          ],
        },
        {
          type: 'h3',
          text: 'Soil Type Adaptations',
        },
        {
          type: 'list',
          items: [
            'Heavy clay: Most dramatic success story. Start with deeper compost (6-8 inches). Never till when wet.',
            'Sandy/silty: Extra generous compost (2-3 inches/year) builds water and nutrient retention.',
            'Compacted urban: Consider raised beds on top rather than fighting the subsoil.',
            'Alkaline: Use acidifying composts and monitor pH.',
          ],
        },
      ],
    },
    {
      id: 'calendar',
      title: 'Section 7: The No-Dig Calendar',
      blocks: [
        {
          type: 'h3',
          text: 'Month-by-Month Guidance',
        },
        {
          type: 'table',
          headers: ['Month', 'Primary Tasks', 'Compost/Mulch'],
          rows: [
            ['January-February', 'Plan beds; order seeds and bulk compost; indoor seed starting', 'Assess winter breakdown; keep piles covered'],
            ['March', 'Apply spring compost top-dressing (1-2"); establish new sheet mulch beds', 'Major application month for Zones 5-8'],
            ['April-May', 'Major planting; succession sow every 2-3 weeks; mulch between crops', 'Maintain 1-inch buffer on bare areas'],
            ['June-August', 'Succession planting; pest monitoring; liquid feed heavy feeders; plant autumn brassicas', 'Heavy straw mulch for moisture'],
            ['September-October', 'Major autumn compost top-dressing; plant garlic; clear summer crops by cutting at base', 'Primary autumn application feeds soil all winter'],
            ['November-December', 'Deep mulch tender perennials; protect root crops; plan next year; harvest winter crops', 'Continue adding to compost piles'],
          ],
        },
      ],
    },
    {
      id: 'quick-reference',
      title: 'Section 8: Quick Reference Tables',
      blocks: [
        {
          type: 'h3',
          text: 'Compost Application Rates at a Glance',
        },
        {
          type: 'table',
          headers: ['Situation', 'Compost Depth', 'Timing'],
          rows: [
            ['New bed on lawn (sheet mulch)', '4-6 inches on cardboard', 'Any time; autumn/early spring ideal'],
            ['Annual maintenance', '1-2 inches per year', 'Autumn and/or early spring'],
            ['After clearing a crop', '1 inch minimum', 'Immediately after clearance'],
            ['Potatoes (surface method)', '4 inches below + 6-8 inches straw above', 'At planting'],
          ],
        },
        {
          type: 'h3',
          text: 'Key No-Dig Dos and Don’ts',
        },
        {
          type: 'table',
          headers: ['Action', 'Verdict'],
          rows: [
            ['Dig to incorporate compost', 'NEVER — surface application is the defining principle'],
            ['Hoe shallowly (<½ inch) for weeds', 'YES — acceptable for small weeds'],
            ['Remove previous crop roots', 'NO — cut at base and leave roots in place'],
            ['Walk on beds', 'NEVER — design beds narrow enough to reach from paths'],
            ['Add fresh manure directly', 'AVOID — age minimum 6 months'],
          ],
        },
        {
          type: 'h3',
          text: 'No-Dig Starter Shopping List',
        },
        {
          type: 'list',
          items: [
            'Finished compost (4-6 cubic yards for a 200 sq ft new bed)',
            'Cardboard (enough for full coverage with 12-inch overlaps)',
            'Straw bale (1-2 for a 200 sq ft bed)',
            'Sharp collinear or stirrup hoe',
            'Compost bin or three-bay system',
          ],
        },
      ],
    },
    {
      id: 'closing',
      title: 'Closing Reflection',
      blocks: [
        {
          type: 'p',
          text: 'No-dig gardening is not a shortcut or a way to avoid work. It is a recognition that the most important work in the garden is done by billions of organisms in the soil — and that our job is to feed and protect them, not to disrupt them.',
        },
        {
          type: 'p',
          text: 'When you stop digging, you stop fighting your soil and start working with it. The results, season after season, compound in ways that conventional cultivation never can: richer soil, less weeding, better water retention, lower disease pressure, and a garden that gets easier to grow in rather than harder.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'The best time to stop digging was the day you started. The second best time is now.',
        },
      ],
    },
  ],
};

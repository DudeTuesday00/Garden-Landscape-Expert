export const seedSavingContent = {
  id: 'seed-saving',
  hero: {
    emoji: '🌱',
    title: 'Seed Saving Guide',
    subtitle: 'Save Seeds from Your Best Plants to Grow Again Next Year — for Free',
  },
  intro: 'Saving seeds is one of the oldest human skills — practiced for ten thousand years before the first garden center opened. When you save seed from your best tomato, your most prolific bean, your most beautiful flower, you are doing something that every gardening ancestor did as a matter of course: selecting for your own soil, your own climate, your own taste. Over time, saved seeds become locally adapted strains tuned to exactly your conditions. This guide gives you everything you need: the science of pollination and seed maturity, detailed instructions for 50+ vegetables, herbs, and flowers, the storage conditions that keep seeds viable for years, and the selection principles that let you improve your garden with every passing season.',
  sections: [
    {
      id: 'why-save-seeds',
      title: 'Section 1: Why Save Seeds',
      blocks: [
        {
          type: 'h3',
          text: 'The Six Core Benefits of Saving Your Own Seeds',
        },
        {
          type: 'table',
          headers: ['Benefit', 'What It Means in Practice'],
          rows: [
            ['Cost savings', 'A packet of 25 tomato seeds costs $4-6. A single saved tomato contains 150-300 seeds. One season\'s seed saving from a single plant funds dozens of future seasons.'],
            ['Local adaptation', 'Seeds saved from plants that thrived in your specific soil, microclimate, and regional conditions gradually develop genetic tuning to exactly those conditions. Over 3-5 generations, locally saved seeds reliably outperform commercial stock in your garden.'],
            ['Variety preservation', 'Thousands of heirloom and open-pollinated varieties have been lost as commercial production standardized. Home seed savers are the primary keepers of rare and heritage varieties.'],
            ['Food sovereignty', 'Control over your own seed supply is control over your food supply. The seed-saving gardener is genuinely self-sufficient in a way that a non-saving gardener is not.'],
            ['Selection for your tastes', 'Commercial varieties are selected for yield, shelf life, and shipping durability — not flavor. When you save from your most delicious tomato, you are running a selection program tuned to exactly what you value.'],
            ['Connection to plant heritage', 'Seed saving connects you to the generations of gardeners who selected and preserved the varieties you grow. Growing \'Cherokee Purple\' from saved seed is participating in a continuous lineage.'],
          ],
        },
        {
          type: 'h3',
          text: 'Open-Pollinated vs. Hybrid vs. GMO: What You Can and Cannot Save',
        },
        {
          type: 'table',
          headers: ['Seed Type', 'What It Means', 'Can You Save?'],
          rows: [
            ['Open-Pollinated (OP)', 'Pollinated by insects, wind, or self-pollination in traditional patterns; offspring reliably resemble parents when properly isolated', 'YES — this is the foundation of seed saving. Includes all heirlooms.'],
            ['Heirloom', 'A subset of open-pollinated varieties with documented history, typically pre-1950 and passed down through generations', 'YES — same as OP. Exceptional flavor and cultural heritage.'],
            ['F1 Hybrid (marked \'F1\')', 'First-generation cross between two stabilized parent lines; bred for uniformity and hybrid vigor; offspring are genetically unpredictable', 'NOT RECOMMENDED — offspring will not breed true.'],
            ['GMO', 'Contains genes inserted via recombinant DNA technology', 'Legally complicated; practically irrelevant for home gardeners (not sold at retail).'],
            ['Treated seed', 'Commercially treated with fungicides or other compounds', 'YES for seed saving — treatment only affects the stored seed, not the genetics of offspring.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Look for OP or Heirloom: When buying seeds with the intention of saving them, look for packets marked "Open-Pollinated," "OP," "Heirloom," or "Heritage." Avoid any packet marked "F1 Hybrid."',
        },
      ],
    },
    {
      id: 'science',
      title: 'Section 2: The Science of Seeds',
      blocks: [
        {
          type: 'h3',
          text: 'Understanding Pollination: The Foundation of Seed Saving',
        },
        {
          type: 'table',
          headers: ['Pollination Type', 'How It Works', 'Seed Saving Implication', 'Examples'],
          rows: [
            ['Self-pollination', 'Pollen from a flower\'s own anthers fertilizes its own ovule before insects can interfere', 'Seeds will breed true; little or no isolation required; easiest category', 'Tomatoes, peppers, eggplant, beans, peas, lettuce, most annual herbs'],
            ['Insect cross-pollination', 'Requires insects (primarily bees) to carry pollen between flowers', 'Isolation distance or bagging/caging required between varieties of the same species', 'Squash, cucumbers, melons, brassicas, sunflowers, most flowers'],
            ['Wind cross-pollination', 'Pollen is light and carried long distances by wind', 'Largest isolation distances required (up to a mile for some crops)', 'Corn, beets, spinach, chard'],
          ],
        },
        {
          type: 'h3',
          text: 'Isolation: Keeping Varieties Pure',
        },
        {
          type: 'table',
          headers: ['Isolation Method', 'How It Works', 'Best For'],
          rows: [
            ['Distance isolation', 'Planting different varieties far enough apart that pollen cannot travel between them', 'Large gardens; rural settings'],
            ['Bag isolation', 'Placing breathable bags over individual flowers before they open', 'Tomatoes, peppers; high-certainty purity'],
            ['Cage isolation', 'Fine insect mesh cages over plants or groups', 'Brassicas, squash; when purity from specific plants is needed'],
            ['Temporal isolation', 'Staggering planting so varieties flower at different times', 'Corn, squash; supplemental method'],
          ],
        },
        {
          type: 'h3',
          text: 'Seed Maturity: The Most Important Concept in Seed Saving',
        },
        {
          type: 'p',
          text: 'The single most common seed saving mistake is harvesting seeds too early. Seeds continue developing long after the fruit reaches edible maturity. Seeds harvested before physiological maturity will have poor germination rates and shorter storage life.',
        },
        {
          type: 'tip',
          emoji: '🌾',
          text: 'The Fully Ripe Rule: When in doubt, leave it longer. Seeds from fully ripened, slightly over-mature fruits consistently outperform seeds harvested at peak edible quality. For tomatoes: leave the best seed fruits until they are fully soft and slightly past ideal eating.',
        },
        {
          type: 'h3',
          text: 'Selection: How to Choose Which Plants to Save From',
        },
        {
          type: 'table',
          headers: ['Trait Category', 'What to Select For', 'What to Cull (Never Save From)'],
          rows: [
            ['Vigor and health', 'Strong early germination; robust growth; resistance to local pest and disease pressure', 'Slow germination; weak growth; first plants to show disease'],
            ['Timing and adaptation', 'Plants that mature in your season length; set fruit in your heat or cold', 'First plants to bolt (especially lettuce, spinach, brassicas); plants that fail to ripen before frost'],
            ['Yield and productivity', 'Highest yield of the trait you value; continuous production over longest season', 'Low-yielding plants even if individual quality is good'],
            ['Flavor, texture, and quality', 'Best eating quality by your own assessment; characteristic flavor of the variety', 'Off-type fruits that do not represent the variety; bitter or poor-tasting specimens'],
          ],
        },
        {
          type: 'h3',
          text: 'Minimum Population Size',
        },
        {
          type: 'table',
          headers: ['Crop Type', 'Minimum Recommended Plants'],
          rows: [
            ['Self-pollinating annuals (tomatoes, peppers, beans, peas)', 'Minimum 1; recommended 3-6'],
            ['Insect-pollinated annuals (squash, cucumbers, melons)', 'Minimum 3-6; 6-12 preferred'],
            ['Wind-pollinated crops (corn, beets, spinach)', 'Minimum 6; 20-50 strongly recommended'],
            ['Biennials (carrots, parsnips, onions, brassicas)', 'Minimum 6 that overwintered; 12-20 recommended'],
          ],
        },
      ],
    },
    {
      id: 'crops',
      title: 'Section 3: Crop-by-Crop Seed Saving Guide',
      blocks: [
        {
          type: 'h3',
          text: 'The Tomato Family — Easiest Seed Saving',
        },
        {
          type: 'table',
          headers: ['Crop', 'Isolation Needed', 'When to Harvest for Seed', 'Processing Method'],
          rows: [
            ['Tomatoes (all types)', '25 ft for home savers; 150-300 ft for true purity', 'Fruit fully ripe, soft, slightly past peak eating quality', 'Wet fermentation (2-3 days in water; viable seeds sink)'],
            ['Peppers (sweet & hot)', '300-1500 ft (can cross between sweet and hot)', 'Fully ripe pepper — fully colored and well past green eating stage', 'Dry processing — scrape and dry on plate'],
            ['Eggplant / Aubergine', '150-300 ft', 'Leave on plant far past eating stage until brown, yellow, or spotted and hard', 'Dry or minimal wet processing'],
          ],
        },
        {
          type: 'h3',
          text: 'The Legume Family — Beans, Peas, and More',
        },
        {
          type: 'p',
          text: 'Legumes are among the easiest seeds to save. They are self-pollinating, and the seeds dry right on the plant in their pods.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Isolation Needed', 'When to Harvest', 'Processing'],
          rows: [
            ['Beans (bush and pole)', '15-25 ft', 'Pods fully brown and papery; seeds rattle; beginning to split', 'Dry on plant, then cure 2-4 weeks; thresh and winnow'],
            ['Peas', '15-25 ft', 'Pods fully tan and papery; seeds hard inside', 'Dry on plant, cure 2-3 weeks; shell when rock-hard'],
            ['Runner beans', '25-50 ft', 'Pods fully papery and brown; large seeds visible through walls', 'Dry on plant or hang plants; shell when fully dry'],
          ],
        },
        {
          type: 'h3',
          text: 'The Cucurbit Family — Squash, Cucumbers, Melons',
        },
        {
          type: 'p',
          text: 'Cucurbits require more attention because they cross-pollinate freely via bees. Important: Different species (e.g., butternut squash and zucchini) do NOT cross — they belong to different species.',
        },
        {
          type: 'tip',
          emoji: '💡',
          text: 'The Cucurbit Species Key: You can grow zucchini (C. pepo) and butternut (C. moschata) in the same garden without isolation — they will not cross because they are different species. The problem only occurs when you grow two varieties of the SAME species together.',
        },
        {
          type: 'table',
          headers: ['Crop (Species)', 'Isolation Distance', 'When to Harvest for Seed', 'Processing'],
          rows: [
            ['Summer squash & zucchini (C. pepo)', '500-1500 ft from other C. pepo', 'Completely hard, fully colored, stem begins to dry (6-8 weeks past eating maturity)', 'Scrape seeds; wash; dry on screen'],
            ['Winter squash — butternut type (C. moschata)', '500-1500 ft from other C. moschata', 'After eating-stage ripeness; store 4-6 weeks before extracting', 'Scoop; wash; dry on screen'],
            ['Cucumbers (Cucumis sativus)', '500-1000 ft from other cucumber varieties', 'Fully yellow-orange and soft — 5-6 weeks past eating maturity', 'Ferment 1-2 days like tomatoes; rinse; dry'],
            ['Watermelon (Citrullus lanatus)', '500-1000 ft from other watermelon varieties', 'Fully ripe (dull skin, yellow ground spot, dried tendril)', 'Scoop seeds; rinse; dry on screen'],
          ],
        },
        {
          type: 'h3',
          text: 'Corn — A Special Case',
        },
        {
          type: 'p',
          text: 'Corn is wind-pollinated and one of the most cross-promiscuous crops. Pollen can travel a mile.',
        },
        {
          type: 'list',
          items: [
            'Isolation: 1,000-1,500 feet from other corn varieties (or 14+ days temporal isolation).',
            'Minimum population: At least 50 plants (ideally 100-200) to avoid inbreeding depression.',
            'Harvest: Leave ears until husks fully brown; cure 4-8 weeks.',
            'Processing: Save from the middle of the ear; remove tip and butt kernels.',
          ],
        },
        {
          type: 'h3',
          text: 'Salad Crops — Lettuce and More',
        },
        {
          type: 'table',
          headers: ['Crop', 'Isolation Needed', 'When to Harvest', 'Notes'],
          rows: [
            ['Lettuce', '25 ft (mostly self-pollinating)', 'When seed stalks fully elongated; 50-70% of seed heads dry', 'Mark plants that bolt LAST. Harvest entire stalks; finish drying in bags. Store 4-6 years.'],
            ['Endive / Chicory', '500-1000 ft (crosses within genus)', 'When seed stalks fully dry', 'Crosses freely with wild chicory — a major challenge in many areas.'],
          ],
        },
        {
          type: 'h3',
          text: 'Root Vegetables — Biennial Crops',
        },
        {
          type: 'p',
          text: 'Carrots, parsnips, beets, and most root vegetables are biennials. They require overwintering selected roots (in ground in mild climates or root cellar in cold climates) then replanting in spring for seed production.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Isolation Distance', 'Overwinter Method', 'Key Notes'],
          rows: [
            ['Carrots', '1000-1500 ft from other carrots AND wild Queen Anne\'s lace', 'Zones 6+: mulch heavily in ground. Zones 3-5: root cellar in damp sand', 'Very challenging in areas with wild carrots.'],
            ['Beets & Chard', '500-1000 ft (same species)', 'In ground (mild) or root cellar', 'Chard and beets cross freely with each other.'],
            ['Parsnips', '500-1000 ft', 'In ground (very cold hardy)', 'Excellent for cold climates.'],
          ],
        },
      ],
    },
    {
      id: 'storage',
      title: 'Section 4: Cleaning, Testing, and Storing Seeds',
      blocks: [
        {
          type: 'h3',
          text: 'Wet vs. Dry Processing',
        },
        {
          type: 'p',
          text: 'Wet-fruited crops (tomatoes, cucumbers, melons, eggplant): Ferment or rinse to remove gel. Dry-fruited crops (beans, peas, most flowers, grains): Thresh and winnow.',
        },
        {
          type: 'h3',
          text: 'Germination Testing',
        },
        {
          type: 'p',
          text: 'Before relying on saved seeds for a whole season, test germination. Place 10-20 seeds on a damp paper towel in a plastic bag. Keep warm. Count how many sprout in the expected time for that crop. 80%+ is excellent; 50-70% is usable with thicker sowing; below 50% is questionable for main crops.',
        },
        {
          type: 'h3',
          text: 'Storage Conditions That Actually Work',
        },
        {
          type: 'list',
          items: [
            'Cool and dry is everything. Ideal: 40-50°F (4-10°C) and low humidity.',
            'Paper envelopes inside airtight jars or metal tins with desiccant packets work well.',
            'Never store in plastic bags long-term (moisture buildup).',
            'Label every envelope with variety name and year collected.',
            'Most vegetable seeds store 3-6 years under good conditions; some (tomato, cucumber) last 10+ years.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'The silica gel packet from new shoes or vitamin bottles is your friend. Add one to each seed jar.',
        },
      ],
    },
    {
      id: 'closing',
      title: 'Closing Reflection',
      blocks: [
        {
          type: 'p',
          text: 'Seed saving is not just a money-saving technique. It is a direct connection to the 10,000-year human story of agriculture. Every time you save seed from a plant that performed exceptionally well in your garden, you are participating in the same ancient conversation between people and plants that created every variety we grow today.',
        },
        {
          type: 'p',
          text: 'Start small. Pick one easy crop this season — tomatoes or beans — and save seed from your three best plants. Dry them carefully. Store them well. Plant them next year. Watch what happens over three seasons. The plants will tell you if you are doing it right.',
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'The best seed you will ever grow is the seed you save yourself, from the plants that already proved they belong in your garden.',
        },
      ],
    },
  ],
};

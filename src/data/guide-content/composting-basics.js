export const compostingBasicsContent = {
  id: 'composting-basics',
  hero: {
    emoji: '🌍',
    title: 'Composting Basics',
    subtitle: 'Turn kitchen scraps and garden waste into rich, free compost — the single most valuable amendment you can add to any garden soil.',
  },
  intro: 'Finished compost is often called "black gold" by gardeners, and the label is apt: it improves drainage in clay soils, increases water retention in sandy soils, feeds soil microorganisms that make nutrients available to plants, and suppresses certain soil-borne diseases — no synthetic fertilizer does all of these things simultaneously. The fundamentals are simple: combine roughly three parts carbon-rich "browns" (dry leaves, straw, cardboard, wood chips) with one part nitrogen-rich "greens" (kitchen scraps, fresh grass clippings, garden trimmings), add enough moisture to make the pile feel like a wrung-out sponge, and either turn it regularly for hot composting or leave it alone for slow cold composting. Both methods produce excellent compost; they differ only in speed. This guide covers the practical fundamentals of building and maintaining a compost pile — see the site\'s Soil Health guide for how finished compost fits into a broader soil-improvement plan, and Organic Fertilizing for compost alongside other organic amendments.',
  sections: [
    {
      id: 'browns-and-greens',
      title: 'Browns and Greens — The Core Ratio',
      blocks: [
        {
          type: 'p',
          text: 'Every composting method, hot or cold, depends on the same basic input balance: roughly three parts carbon-rich "browns" to one part nitrogen-rich "greens" by volume. Getting this ratio right is the single biggest factor in whether a pile composts efficiently or turns into a smelly, slow-to-break-down mess.',
        },
        {
          type: 'table',
          headers: ['Category', 'Materials', 'Role'],
          rows: [
            ['Browns (carbon-rich)', 'Dry leaves, straw, shredded cardboard, wood chips, sawdust (untreated), dried plant stems', 'Provide energy for decomposer microbes and physical structure that keeps the pile aerated'],
            ['Greens (nitrogen-rich)', 'Kitchen scraps (fruit/vegetable trimmings), fresh grass clippings, coffee grounds, fresh garden trimmings', 'Provide the nitrogen decomposer microbes need to reproduce and break down carbon material efficiently'],
          ],
        },
        {
          type: 'tip',
          emoji: '🍂',
          text: 'Save a bag of dry fall leaves specifically to keep on hand year-round — they\'re the easiest, most reliable brown material for balancing kitchen scraps added through the rest of the year when fresh browns aren\'t as available.',
        },
        {
          type: 'image',
          src: '/guides/composting-basics/browns-greens-layered.jpg',
          alt: 'A compost bin showing layered brown dry leaves and green kitchen scraps and grass clippings',
          caption: 'Roughly three parts browns to one part greens by volume is the foundation of an efficient, odor-free compost pile.',
        },
      ],
    },
    {
      id: 'hot-vs-cold-composting',
      title: 'Hot Composting vs. Cold Composting',
      blocks: [
        {
          type: 'p',
          text: 'Both approaches produce excellent finished compost — the choice comes down to how much active management you want to put in versus how quickly you want finished compost.',
        },
        {
          type: 'table',
          headers: ['Method', 'Pile Size Needed', 'Management', 'Time to Finished Compost'],
          rows: [
            ['Hot composting', 'At least 3 feet cubed (smaller piles can\'t retain enough heat)', 'Regular turning (every few days to weekly), monitoring internal temperature (target 130-160°F)', '6-8 weeks with consistent management'],
            ['Cold composting', 'Any size, including a simple bin added to gradually', 'Add materials as available, turn occasionally (or not at all)', '6-12 months'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Hot composting kills most weed seeds, pathogens, and fly larvae because of the sustained high temperature — cold composting does not reliably reach these temperatures, so avoid adding diseased plant material or mature weed seed heads to a cold pile.',
        },
        {
          type: 'image',
          src: '/guides/composting-basics/turning-hot-compost-pile.jpg',
          alt: 'A gardener turning a large steaming compost pile with a pitchfork',
          caption: 'Regular turning and a pile size of at least 3 feet cubed lets hot composting reach the internal temperatures that kill weed seeds and pathogens.',
        },
      ],
    },
    {
      id: 'what-to-compost',
      title: 'What to Compost and What to Avoid',
      blocks: [
        {
          type: 'p',
          text: 'What not to compost is just as important as what to include — a few common mistakes account for most compost pile problems related to pests, odor, and pathogen risk.',
        },
        {
          type: 'list',
          items: [
            'Compost freely: fruit and vegetable scraps, coffee grounds and filters, eggshells, dry leaves, grass clippings, plain cardboard and paper, garden trimmings from healthy plants.',
            'Avoid meat, dairy, and cooked/oily food — these attract pests (rodents, flies) and decompose in ways that produce persistent odor.',
            'Avoid diseased plant material — most home compost piles, especially cold piles, don\'t reach temperatures reliably high enough to kill plant pathogens, which can then spread back into the garden with the finished compost.',
            'Avoid pet waste (dog and cat feces) — it can carry pathogens harmful to humans that aren\'t reliably eliminated by home composting.',
            'Avoid treated or painted wood — chemicals can persist in the finished compost.',
          ],
        },
        {
          type: 'tip',
          emoji: '🥚',
          text: 'Crushed eggshells break down slowly but add valuable calcium over time — crushing them into smaller pieces before adding speeds their breakdown noticeably compared to tossing in whole shells.',
        },
        {
          type: 'image',
          src: '/guides/composting-basics/kitchen-scraps-bucket.jpg',
          alt: 'A kitchen countertop compost bucket filled with fruit and vegetable scraps and coffee grounds',
          caption: 'Fruit and vegetable scraps, coffee grounds, and eggshells are safe, reliable green materials for any home compost pile.',
        },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Common Compost Problems',
      blocks: [
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Fix'],
          rows: [
            ['Pile smells bad (ammonia or rotten odor)', 'Too many greens/nitrogen, or the pile is too wet and compacted, cutting off oxygen', 'Add more browns and turn the pile to reintroduce air'],
            ['Pile isn\'t heating up', 'Too small, too dry, or too much brown/carbon material relative to nitrogen', 'Increase pile size to at least 3 feet cubed, add moisture, and mix in more greens'],
            ['Pile is too dry', 'Insufficient moisture, especially common with a brown-heavy pile', 'Water while turning until material feels like a wrung-out sponge, not soggy'],
            ['Pile is too wet / soggy', 'Excess greens, poor drainage, or too much rain exposure', 'Add dry browns to absorb excess moisture and improve structure; cover the pile in wet climates'],
            ['Pests (rodents, flies)', 'Meat, dairy, or cooked food added; exposed food scraps on the surface', 'Remove offending material, always bury fresh scraps under a layer of browns, and consider a rodent-resistant enclosed bin'],
            ['Pile is decomposing very slowly', 'Materials too large (whole branches, unshredded stalks), or the carbon-to-nitrogen ratio is off', 'Chop or shred larger materials before adding, and recheck the browns-to-greens balance'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'A properly balanced, actively managed compost pile shouldn\'t smell bad at all — a strong odor is almost always a sign of a specific, fixable imbalance rather than an inherent feature of composting.',
        },
      ],
    },
    {
      id: 'vermicomposting',
      title: 'Vermicomposting — A Kitchen-Scrap Alternative',
      blocks: [
        {
          type: 'p',
          text: 'Vermicomposting uses red wiggler worms (Eisenia fetida) to process kitchen scraps into worm castings — a nutrient-rich compost alternative that works well for anyone without outdoor space for a traditional pile, or who wants to process kitchen scraps specifically.',
        },
        {
          type: 'list',
          items: [
            'Use a dedicated worm bin (purchased or DIY from a plastic tote with drainage and air holes) rather than adding worms directly to an outdoor pile.',
            'Bedding material (shredded newspaper, cardboard, coco coir) provides the worms\' living environment; add kitchen scraps in small amounts, buried under the bedding.',
            'Feed gradually — overfeeding a worm bin leads to the same odor and pest problems as an imbalanced outdoor pile, since uneaten food simply rots.',
            'Harvest finished castings after several months, typically by moving worms to one side of the bin with fresh bedding and harvesting the finished material from the other side.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪱',
          text: 'A worm bin can live indoors year-round (a basement, garage, or even under a kitchen sink) in climates too cold for outdoor composting to continue through winter, making it a genuinely complementary method rather than a full replacement for an outdoor pile.',
        },
        {
          type: 'image',
          src: '/guides/composting-basics/worm-bin-red-wigglers.jpg',
          alt: 'A worm composting bin with visible red wiggler worms and dark worm castings',
          caption: 'Vermicomposting with red wiggler worms is a compact, indoor-friendly alternative for processing kitchen scraps.',
        },
      ],
    },
    {
      id: 'applying-finished-compost',
      title: 'How and When to Apply Finished Compost',
      blocks: [
        {
          type: 'p',
          text: 'Finished compost is dark, crumbly, and earthy-smelling with no recognizable original material — knowing when compost has actually reached this stage, and how to apply it, gets the most value out of the effort that went into making it.',
        },
        {
          type: 'list',
          items: [
            'Apply a 1-3 inch layer as a top-dress on garden beds annually — this is the highest-value, lowest-effort way to use finished compost, per the site\'s Soil Health guide.',
            'Mix compost into potting soil at roughly one-third of the total volume for container plantings.',
            'Use as a side-dress around actively growing plants during the season for a gentle nutrient boost.',
            'Screen finished compost through a simple mesh screen if a fine texture is needed for seed starting mix or a top-dress on fine turf — larger unfinished chunks can go back into the next batch.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'If compost still contains recognizable pieces of the original material (a chunk of eggshell here, a bit of stick there), it can still be used — those pieces will simply continue breaking down in the garden bed rather than needing to fully finish in the pile first.',
        },
        {
          type: 'image',
          src: '/guides/composting-basics/spreading-finished-compost.jpg',
          alt: 'A gardener spreading dark crumbly finished compost onto a raised garden bed',
          caption: 'Finished compost is dark, crumbly, and earthy-smelling — applying it as an annual top-dress is the highest-value use of the effort that made it.',
        },
      ],
    },
  ],
};

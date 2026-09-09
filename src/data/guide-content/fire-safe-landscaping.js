export const fireSafeLandscapingContent = {
  id: 'fire-safe-landscaping',
  hero: {
    emoji: '🔥',
    title: 'Fire-Safe Landscaping',
    subtitle: 'Reduce wildfire risk around your home with defensible space design, low-flammability plant choices, and smart hardscape buffers.',
  },
  intro: 'Defensible space is not about eliminating vegetation around your home — it is about creating zones of managed, low-flammability planting that slow a fire\'s approach, reduce ember landing zones, and give firefighters a safer working environment. California, Colorado, Oregon, Washington, Arizona, and New Mexico have all developed specific defensible space requirements based on decades of post-fire research, and the principles apply equally to any home in a fire-prone landscape. The critical insight from wildfire research is that homes are most often ignited by embers carried ahead of the fire front — sometimes miles ahead — so reducing the number of places embers can lodge and ignite is as important as the plants themselves.',
  sections: [
    {
      id: 'three-zone-framework',
      title: 'The Three-Zone Defensible Space Framework',
      blocks: [
        {
          type: 'p',
          text: 'Defensible space research divides the landscape into three zones by distance from the home, each with a different management goal — understanding the distinction between zones tells you what standard to apply where.',
        },
        {
          type: 'table',
          headers: ['Zone', 'Distance from Home', 'Goal', 'Approach'],
          rows: [
            ['Zone 0', '0-5 feet', 'Non-combustible immediate perimeter', 'Stone, concrete, gravel, or irrigated succulents only — no wood mulch, no combustible debris, no dense plantings against siding'],
            ['Zone 1', '5-30 feet', 'Low-flammability, widely spaced plants with no continuous fuel path', 'Keep grass mowed, space shrubs so fire can\'t travel between them, limb up trees to at least 6 feet'],
            ['Zone 2', '30-100 feet', 'Reduced fuel continuity, not vegetation elimination', 'Thin dense vegetation, remove dead material, maintain spacing between larger fuel sources'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Zone 0 is the single highest-leverage area to get right — most home ignitions during wildfires happen from embers landing and igniting material within just a few feet of the structure itself, not from direct flame contact with distant vegetation.',
        },
        {
          type: 'image',
          src: '/guides/fire-safe-landscaping/zone-0-gravel-perimeter.jpg',
          alt: 'A house with a non-combustible gravel and stone perimeter immediately around its foundation',
          caption: 'Zone 0, the immediate 5-foot perimeter, should be entirely non-combustible — stone, gravel, or concrete, never wood mulch.',
        },
      ],
    },
    {
      id: 'ember-ignition-risk',
      title: 'Understanding Ember-Driven Ignition',
      blocks: [
        {
          type: 'p',
          text: 'The critical insight from decades of post-fire research is that homes are most often ignited by wind-carried embers — sometimes landing miles ahead of the actual fire front — not by direct contact with flame from nearby vegetation.',
        },
        {
          type: 'list',
          items: [
            'Embers can travel well over a mile ahead of an active fire front under the right wind conditions, meaning ember risk exists even for homes that appear geographically distant from an approaching fire.',
            'Common ember ignition points include roof valleys and gutters (dry leaf debris), under-deck spaces, vents without ember-resistant screening, and any combustible material piled against the structure.',
            'A home with a "perfect" surrounding landscape can still ignite if gutters are full of dry leaves or vents lack ember screening — structural vulnerabilities matter as much as landscaping.',
            'Regular seasonal maintenance (gutter cleaning, clearing debris from under decks and around foundations) is a genuinely essential, ongoing part of defensible space, not a one-time landscaping project.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔥',
          text: 'Because ember ignition doesn\'t require direct fire contact, defensible space work extends beyond plant choices to structural details — ember-resistant vent screens, gutter guards, and enclosed eaves all meaningfully reduce ignition risk alongside the landscaping itself.',
        },
        {
          type: 'image',
          src: '/guides/fire-safe-landscaping/clean-gutters-vent-screen.jpg',
          alt: 'Clean, debris-free house gutters and an ember-resistant vent screen close-up',
          caption: 'Clean gutters and ember-resistant vent screens address the ember ignition points that account for most home losses in wildfires.',
        },
      ],
    },
    {
      id: 'plant-flammability-ratings',
      title: 'Plant Flammability — What to Avoid Near Structures',
      blocks: [
        {
          type: 'p',
          text: 'Certain widely planted landscape species carry a well-documented, elevated fire risk due to their oil content, structure, or tendency to accumulate dry, dead material — avoiding these near structures is one of the most impactful individual choices in a fire-safe landscape.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Why It\'s High-Risk', 'Notes'],
          rows: [
            ['Juniper (especially spreading varieties)', 'Resinous, retains dead needles/branches internally, burns intensely', 'One of the most consistently flagged high-risk landscape shrubs in fire-prone regions'],
            ['Pampas grass', 'Large volume of fine, dry, highly flammable material', 'Extremely rapid, intense burn when dry'],
            ['Ornamental grasses (left standing, dry)', 'Fine dry material ignites easily and carries fire quickly', 'Cut back and remove dead growth seasonally rather than leaving it standing through fire season'],
            ['Dense resinous conifers (in tight groupings)', 'High resin/oil content, and density creates fire-ladder risk', 'Space individual specimens well apart rather than planting as a dense screen near structures'],
            ['Eucalyptus', 'High oil content, sheds substantial flammable bark and leaf litter', 'A well-documented risk factor in California wildfires specifically'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'It\'s not just the living plant that matters — dead, dry plant material (standing ornamental grasses, accumulated pine needles, unpruned dead branches) is often more flammable than the living tissue, making regular removal of dead material as important as initial plant selection.',
        },
        {
          type: 'image',
          src: '/guides/fire-safe-landscaping/spaced-shrubs-tree-limbed.jpg',
          alt: 'Well-spaced shrubs and a tree limbed up to six feet in a fire-conscious landscape',
          caption: 'Widely spaced shrubs and trees limbed up to at least six feet prevent fire from traveling in a continuous ladder toward a home.',
        },
      ],
    },
    {
      id: 'low-flammability-alternatives',
      title: 'Low-Flammability Plant Choices by Category',
      blocks: [
        {
          type: 'p',
          text: 'Fire-resistant landscaping doesn\'t mean a bare, plant-free yard — many attractive, well-established landscape plants carry genuinely lower fire risk due to higher moisture content, less resinous foliage, or lower overall fuel volume.',
        },
        {
          type: 'table',
          headers: ['Category', 'Lower-Risk Options', 'Notes'],
          rows: [
            ['Groundcovers', 'Ice plant, low-growing sedums, creeping thyme', 'High moisture content and low fuel volume make these good Zone 0/1 choices'],
            ['Shrubs', 'Many broadleaf evergreens with high moisture content (verify regionally), deciduous shrubs generally lower-risk than resinous conifers', 'Deciduous shrubs typically carry less risk than dense evergreen conifers due to lower resin content and seasonal leaf drop'],
            ['Perennials', 'Succulents, many well-irrigated flowering perennials', 'Consistently irrigated, high-moisture plants burn less readily than drought-stressed vegetation'],
            ['Trees (properly spaced and limbed)', 'Well-maintained deciduous trees with high canopy clearance', 'Any tree species becomes higher-risk if allowed to accumulate dead material or grow branches low to the ground'],
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Consistent irrigation matters as much as species selection — a well-watered, healthy plant of a "moderate risk" species often poses less real-world fire risk than a drought-stressed, poorly maintained specimen of a nominally "lower risk" species.',
        },
        {
          type: 'image',
          src: '/guides/fire-safe-landscaping/succulent-groundcover-low-risk.jpg',
          alt: 'Well-irrigated succulents and low groundcover plants near a house foundation',
          caption: 'High-moisture succulents and irrigated groundcovers carry genuinely lower fire risk than dry, resinous shrubs.',
        },
      ],
    },
    {
      id: 'hardscape-buffers',
      title: 'Hardscape Buffer Design',
      blocks: [
        {
          type: 'p',
          text: 'Non-combustible hardscape elements do double duty in a fire-safe landscape — they serve normal landscape design functions while also creating genuine fuel breaks that can slow or stop a fire\'s approach.',
        },
        {
          type: 'list',
          items: [
            'A gravel, stone, or concrete path or patio ring immediately around the structure (Zone 0) creates a non-combustible buffer with essentially zero fire risk.',
            'Driveways and walkways function as informal fuel breaks — factor their placement into overall defensible space planning, not just traffic flow.',
            'Stone or masonry retaining walls and raised beds interrupt fuel continuity between planted areas.',
            'A gravel or hardscape strip along a fence line (especially wood fencing, which can itself carry fire toward a structure) reduces the risk of the fence acting as a fuel path.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪨',
          text: 'A wood fence that runs directly to the house wall is a documented fire-spread pathway — either transition to a non-combustible material for the final several feet of fence closest to the structure, or interrupt it with a gravel or masonry gap.',
        },
        {
          type: 'image',
          src: '/guides/fire-safe-landscaping/gravel-path-fuel-break.jpg',
          alt: 'A gravel garden path serving as a fuel break between planted areas near a house',
          caption: 'A gravel path or patio does double duty — a normal landscape feature that also interrupts fuel continuity toward the home.',
        },
      ],
    },
    {
      id: 'regional-defensible-space-requirements',
      title: 'Regional Defensible Space Requirements',
      blocks: [
        {
          type: 'p',
          text: 'Several fire-prone states have codified specific defensible space requirements into law or building code — checking your specific state and local jurisdiction\'s requirements is essential, since they can mandate specific clearances beyond general best practice.',
        },
        {
          type: 'table',
          headers: ['State', 'Notes'],
          rows: [
            ['California', 'Statewide defensible space law (100 feet where terrain allows) with detailed zone requirements; many local jurisdictions add stricter local rules'],
            ['Colorado', 'County-level defensible space guidance, often tied to wildfire risk zone mapping'],
            ['Oregon', 'Statewide wildfire risk mapping program informing defensible space and building code requirements in high-risk zones'],
            ['Washington', 'Defensible space guidance through state and local fire agencies, particularly in eastern Washington\'s higher-risk areas'],
            ['Arizona / New Mexico', 'Defensible space guidance through state forestry agencies, with local variation by county and fire district'],
          ],
        },
        {
          type: 'tip',
          emoji: '📋',
          text: 'Check with your local fire department or state forestry agency for the specific, legally required defensible space clearances in your area — general guidance like this covers the widely-applicable principles, but exact required distances and enforcement vary by jurisdiction.',
        },
      ],
    },
  ],
};

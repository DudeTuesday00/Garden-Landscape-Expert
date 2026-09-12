export const growingTomatoesContent = {
  id: 'growing-tomatoes',
  hero: {
    emoji: '🍅',
    title: 'Growing Tomatoes: The Complete Guide',
    subtitle: 'From seed to harvest — variety selection, staking, feeding, and solving the problems that stop most home tomato crops.',
  },
  intro: 'Tomatoes are the single most popular vegetable grown by home gardeners in the US, and also one of the most commonly mishandled — inconsistent watering, the wrong support system, and a handful of predictable diseases account for the vast majority of disappointing harvests. None of it is complicated once you know the actual mechanics: how deep to plant, how much water is enough, and which problems are worth treating versus which are just part of growing tomatoes. This guide covers the full arc from starting seed indoors through solving the most common mid-season problems — for container-specific tomato growing, see the site\'s Vegetables in Containers guide, and for the tomato-specific pest and disease detail this guide only summarizes, see Organic Pest Control and Common Garden Diseases.',
  sections: [
    {
      id: 'starting-from-seed',
      title: 'Starting Tomatoes from Seed',
      blocks: [
        {
          type: 'p',
          text: 'Tomatoes need a long enough head start indoors to be a sturdy, flowering-soon transplant by the time it\'s warm enough to plant outdoors — starting too early produces a leggy, stressed plant that struggles to catch up.',
        },
        {
          type: 'list',
          items: [
            'Start seeds indoors 6-8 weeks before your last frost date — earlier than that produces an overgrown, rootbound seedling with no real advantage.',
            'Use a seed-starting mix, not garden soil or potting soil, and keep it consistently moist (not wet) until germination, typically 5-10 days at 70-80°F.',
            'Move seedlings under strong light (a sunny south window is rarely enough — a grow light kept 2-3 inches above the seedlings for 14-16 hours a day produces much sturdier growth) as soon as they emerge.',
            'Pot up into larger containers once the first true leaves appear, burying the stem slightly deeper each time — tomatoes root readily along a buried stem, which builds a stronger root system before it even reaches the garden.',
            'Harden off over 7-10 days before transplanting outdoors, gradually increasing outdoor sun and wind exposure — a seedling moved directly from indoor conditions to full sun and wind will scorch and stall.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'Bottom heat (a seedling heat mat set to 75-80°F) speeds germination significantly and is one of the highest-value small investments for starting tomatoes indoors, especially in a cool basement or garage setup.',
        },
        {
          type: 'image',
          src: '/guides/growing-tomatoes/tomato-seedlings-grow-light.jpg',
          alt: 'Young tomato seedlings growing under a grow light indoors in seed starting trays',
          caption: 'Strong overhead light for 14-16 hours a day produces sturdier tomato seedlings than a sunny window alone.',
        },
      ],
    },
    {
      id: 'choosing-varieties',
      title: 'Choosing the Right Varieties',
      blocks: [
        {
          type: 'p',
          text: 'The single most consequential decision in growing tomatoes is determinate versus indeterminate — it determines plant size, staking needs, and whether you get one concentrated harvest or a steady supply all season.',
        },
        {
          type: 'table',
          headers: ['Growth Type', 'Characteristics', 'Best For'],
          rows: [
            ['Determinate', 'Grows to a fixed height (3-4 ft), sets fruit in a concentrated window, then declines', 'Canning/sauce-making in one batch, small spaces, shorter growing seasons'],
            ['Indeterminate', 'Keeps growing and producing until frost, can reach 6-10+ ft, needs sturdy support', 'A steady supply of fresh eating tomatoes all season; most heirloom and cherry varieties are indeterminate'],
            ['Dwarf/Patio', 'Compact plants (1-3 ft), bred specifically for containers and small spaces', 'Balconies, patios, and small raised beds — see the site\'s Vegetables in Containers guide'],
          ],
        },
        {
          type: 'list',
          items: [
            'Cherry and grape tomatoes (Sun Gold, Sweet 100) are the most forgiving for beginners — heavy producers, less disease-prone, and quick to first harvest.',
            'Slicing tomatoes (Better Boy, Celebrity) are the standard all-purpose choice for sandwiches and fresh eating.',
            'Paste tomatoes (Roma, San Marzano) have less water content and more flesh, ideal for sauce and canning.',
            'Heirloom varieties (Brandywine, Cherokee Purple) offer exceptional flavor but are generally less disease-resistant than modern hybrids — look for varieties bred with at least some disease resistance if blight has been a problem in your garden before.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔤',
          text: 'Disease-resistance letter codes on seed packets and tags (V, F, N, T, A) indicate resistance to Verticillium wilt, Fusarium wilt, nematodes, tobacco mosaic virus, and Alternaria — a variety coded "VFN" carries meaningfully better odds in a garden with a history of soil-borne disease.',
        },
        {
          type: 'image',
          src: '/guides/growing-tomatoes/variety-selection-tomatoes-table.jpg',
          alt: 'A variety of tomato types including cherry, slicing, and paste tomatoes displayed together on a wooden table',
          caption: 'Determinate versus indeterminate is the single most consequential choice — it determines plant size, support needs, and harvest pattern.',
        },
      ],
    },
    {
      id: 'planting-and-staking',
      title: 'Planting Deep and Staking Correctly',
      blocks: [
        {
          type: 'p',
          text: 'Tomatoes are one of the few vegetables that benefit from being planted deeper than they grew in their pot — the buried stem grows roots along its entire length, producing a much stronger plant than a shallow planting.',
        },
        {
          type: 'list',
          items: [
            'Plant so that only the top 2-3 sets of leaves remain above soil — for a leggy seedling, dig a shallow trench and lay the stem sideways rather than digging an extremely deep hole, and it will grow upward on its own within days.',
            'Space plants 24-36 inches apart for good air circulation — crowded tomatoes are significantly more prone to fungal disease.',
            'Install support at planting time, not weeks later — driving a stake through an established root system damages far more roots than doing it at planting.',
          ],
        },
        {
          type: 'table',
          headers: ['Support Method', 'Best For', 'Notes'],
          rows: [
            ['Cages (store-bought or concrete-reinforcing-wire)', 'Determinate and smaller indeterminate varieties', 'Least labor once installed; a cage needs to be wide and tall enough — most store-bought cages are undersized for a full-grown indeterminate plant'],
            ['Stakes with ties', 'Indeterminate varieties grown as a single or double stem (pruned)', 'Requires ongoing tying as the plant grows and pruning of side suckers; produces earlier, larger fruit than an unpruned plant'],
            ['Florida weave (string between posts)', 'Long rows of tomatoes', 'Efficient for growing many plants in a row; requires periodic weaving as plants grow'],
            ['Trellis/vertical netting', 'Indeterminate varieties in a raised bed or small footprint', 'See the site\'s Vertical Gardening guide for general trellis design principles'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'An unsupported indeterminate tomato sprawling on the ground develops fruit rot, is far more accessible to slugs and ground pests, and is significantly harder to harvest from — support isn\'t optional for anything but the most compact determinate varieties.',
        },
        {
          type: 'image',
          src: '/guides/growing-tomatoes/staking-tomato-plants.jpg',
          alt: 'A gardener tying a young tomato plant to a wooden stake in a garden bed',
          caption: 'Installing support at planting time avoids driving a stake through an already-established root system weeks later.',
        },
      ],
    },
    {
      id: 'watering-and-feeding',
      title: 'Watering and Feeding for Consistent Fruit',
      blocks: [
        {
          type: 'p',
          text: 'Watering consistency, more than volume, is what prevents the two most common fruit problems in tomatoes — blossom end rot and fruit cracking are both caused by irregular water availability, not by disease.',
        },
        {
          type: 'list',
          items: [
            'Water deeply and consistently — 1-2 inches per week, applied at the base rather than overhead, which also reduces fungal disease pressure by keeping foliage dry.',
            'Mulch heavily (straw, shredded leaves) around the base once the soil has warmed to moderate soil moisture swings between waterings.',
            'Avoid letting the soil dry out completely and then drenching it — this exact swing is what causes blossom end rot (a dark, sunken patch on the fruit\'s bottom caused by a calcium-uptake disruption, not a calcium deficiency in the soil itself) and fruit cracking around the stem.',
            'Feed with a balanced fertilizer at planting, then switch to a lower-nitrogen, higher-phosphorus/potassium formula once flowering begins — excess nitrogen produces lush foliage at the expense of fruit set.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'A drip irrigation line or soaker hose on a timer solves the consistency problem far more reliably than manual watering, since it removes the human tendency to water thoroughly one week and skip the next during a busy stretch.',
        },
        {
          type: 'image',
          src: '/guides/growing-tomatoes/drip-irrigation-tomato-row.jpg',
          alt: 'A drip irrigation line running along a row of mulched tomato plants in a garden bed',
          caption: 'Watering consistency — not volume — is what prevents blossom end rot and fruit cracking, the two most common tomato fruit problems.',
        },
      ],
    },
    {
      id: 'common-problems',
      title: 'Solving the Most Common Problems',
      blocks: [
        {
          type: 'p',
          text: 'Most tomato problems fall into a short, predictable list — recognizing which one you\'re looking at is most of the battle, since the fix is usually specific to the actual cause rather than a generic response.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Fix'],
          rows: [
            ['Blossom end rot (dark sunken patch on fruit bottom)', 'Inconsistent watering disrupting calcium uptake, not a soil calcium deficiency', 'Water consistently and mulch — adding calcium to the soil rarely fixes an already-adequate calcium supply that just isn\'t being taken up'],
            ['Fruit cracking (concentric rings around the stem)', 'A sudden heavy watering or rain after a dry spell', 'Consistent watering and mulch, same fix as blossom end rot; some varieties are more crack-resistant than others'],
            ['Yellowing lower leaves', 'Often normal as the plant matures and redirects energy to fruit; can also signal nitrogen deficiency or early blight', 'If leaves show dark spots with concentric rings, see Common Garden Diseases\' early blight profile; if plain yellowing with no spots, usually normal or a feeding issue'],
            ['Blossom drop (flowers fall without setting fruit)', 'Temperatures above 90°F or below 55°F interfere with pollen viability', 'Usually self-resolves once temperatures moderate; not a plant health problem'],
            ['Large caterpillars stripping foliage', 'Tomato or tobacco hornworm', 'Hand-pick (check for white cocoon-like eggs on the hornworm\'s back first — those are parasitic wasp eggs and mean natural control is already working) — see Organic Pest Control for full detail'],
            ['Leaves develop dark spots, plant collapses rapidly', 'Early or late blight', 'Remove affected foliage promptly, improve air circulation, avoid overhead watering — see Common Garden Diseases for the full fungal-disease profile and treatment options'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔄',
          text: 'Rotating where tomatoes and their nightshade relatives (peppers, eggplant, potatoes) grow each year — not repeating the same bed for 3-4 years — is the single most effective prevention against the soil-borne diseases that build up with repeated planting; see the site\'s Post-Harvest Garden Care guide for the full rotation framework.',
        },
        {
          type: 'image',
          src: '/guides/growing-tomatoes/harvested-ripe-tomatoes-basket.jpg',
          alt: 'A basket full of freshly harvested ripe red tomatoes from a home garden',
          caption: 'Most tomato problems fall into a short, predictable list — recognizing which one you\'re seeing is most of the battle.',
        },
      ],
    },
  ],
};

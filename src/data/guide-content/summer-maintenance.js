export const summerMaintenanceContent = {
  id: 'summer-maintenance',
  hero: {
    emoji: '☀️',
    title: 'Summer Garden Maintenance',
    subtitle: 'Keep your garden productive and attractive through the heat of summer with a targeted maintenance routine that prevents problems before they compound.',
  },
  intro: 'Summer is when the garden both delivers its peak performance and demands the most vigilance. Heat stress, insect pressure, powdery mildew, and the relentless production of seeds on spent flowers all accelerate in July and August. A weekly maintenance routine — deadheading to extend bloom, scouting for pest damage early, deep watering instead of shallow daily watering, and staying on top of succession planting gaps — keeps the garden producing continuously rather than peaking in June and declining by midsummer.',
  sections: [
    {
      id: 'deep-watering-technique',
      title: 'Watering — The Most Consequential Summer Task',
      blocks: [
        {
          type: 'p',
          text: 'Watering technique matters more in summer than any other single maintenance factor — the difference between shallow daily watering and deep, infrequent watering shows up in both plant resilience and disease pressure.',
        },
        {
          type: 'list',
          items: [
            'Water deeply — roughly 1-2 inches per week applied in one or two sessions rather than daily light sprinkles, which only wet the top inch of soil.',
            'Water in the morning when possible, so foliage that gets wet has all day to dry before evening — wet foliage overnight is a major driver of fungal disease pressure in summer heat and humidity.',
            'Check soil moisture at root depth (a few inches down), not just the surface, before deciding whether to water — surface soil can look dry while deeper soil is still adequately moist.',
            'Increase watering frequency during genuine heat waves, but maintain the deep-watering principle rather than switching to frequent shallow watering under stress.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'See the site\'s Water-Wise Gardening guide for the full irrigation and mulching techniques that make deep watering easier to sustain through a hot summer — drip irrigation and a good mulch layer both reduce how often deep watering sessions are actually needed.',
        },
        {
          type: 'image',
          src: '/guides/summer-maintenance/morning-deep-watering.jpg',
          alt: 'A gardener deep watering vegetable plants in the early morning sunlight',
          caption: 'Deep, infrequent morning watering drives roots deeper and reduces fungal disease pressure compared to shallow daily watering.',
        },
      ],
    },
    {
      id: 'deadheading-cutting-back',
      title: 'Deadheading and Cutting Back by Plant',
      blocks: [
        {
          type: 'p',
          text: 'Removing spent blooms redirects a plant\'s energy from seed production back into new flowers, and a midsummer hard cutback on certain perennials triggers a genuine second bloom rather than a slow, weak trickle of flowers through the rest of the season.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Technique', 'Notes'],
          rows: [
            ['Salvia, catmint', 'Cut back hard by about half after the first flush fades', 'Reliably reblooms within about 6 weeks with fresh, compact growth'],
            ['Coneflower, black-eyed Susan', 'Deadhead spent blooms individually, or leave some standing for birds', 'A mix of deadheading and leaving seed heads balances continued bloom with wildlife value'],
            ['Petunias, calibrachoa (non-self-cleaning types)', 'Regular deadheading or a midseason trim', 'Many modern varieties are self-cleaning, but a light trim still refreshes leggy growth'],
            ['Daylilies', 'Remove spent flower stalks (scapes) after all buds on a stalk have finished', 'Improves appearance; doesn\'t trigger rebloom in most varieties'],
            ['Roses (repeat-blooming types)', 'Deadhead just above a five-leaflet leaf for the next flush', 'Ongoing deadheading through summer sustains continuous bloom on repeat bloomers'],
          ],
        },
        {
          type: 'tip',
          emoji: '✂️',
          text: 'A "Chelsea chop" style hard cutback — trimming a leggy perennial back by a third to a half in early-to-mid summer — works on far more plants than just salvia and catmint; experiment on a few stems of an unfamiliar perennial before committing the whole plant.',
        },
        {
          type: 'image',
          src: '/guides/summer-maintenance/deadheading-perennials.jpg',
          alt: 'A gardener deadheading spent flowers on a perennial plant with garden shears',
          caption: 'Regular deadheading redirects a plant\'s energy from seed production back into producing new flowers.',
        },
      ],
    },
    {
      id: 'pest-and-disease-scouting',
      title: 'Scouting for Pest and Disease Pressure',
      blocks: [
        {
          type: 'p',
          text: 'Summer heat and humidity accelerate both insect pest cycles and fungal disease development — catching problems in their early stages during routine walkthroughs prevents small issues from becoming season-defining ones.',
        },
        {
          type: 'list',
          items: [
            'Walk the garden weekly specifically looking under leaves, not just at the tops — many common pests (aphids, spider mites, early powdery mildew) show up on leaf undersides first.',
            'Address a small pest population immediately with the least disruptive control available (hand-picking, a strong water spray) rather than waiting to see if it becomes a real problem.',
            'Improve air circulation around plants showing early powdery mildew — thinning crowded growth and avoiding overhead watering both help contain it before it spreads.',
            'Remove and dispose of (don\'t compost) any severely disease-affected foliage promptly to reduce the spore load available to spread to healthy growth.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'See the site\'s Organic Pest Control guide for the full IPM framework and product-based interventions once scouting turns up an actual pest problem — this section is specifically about the weekly habit of catching issues early, not the treatment itself.',
        },
        {
          type: 'image',
          src: '/guides/summer-maintenance/checking-leaf-underside-pests.jpg',
          alt: 'A gardener checking the underside of a leaf for early signs of pests during a garden walkthrough',
          caption: 'Checking leaf undersides during a weekly walkthrough catches most pest and disease problems before they spread.',
        },
      ],
    },
    {
      id: 'summer-succession-planting',
      title: 'Succession Planting for Continuous Harvest',
      blocks: [
        {
          type: 'p',
          text: 'A vegetable garden that stops producing by midsummer usually reflects a single spring planting rather than an ongoing succession — refilling harvested space through summer keeps beds productive into fall.',
        },
        {
          type: 'list',
          items: [
            'Sow fast-maturing crops (bush beans, lettuce, radish) every 2-3 weeks through early-to-mid summer to replace earlier plantings as they\'re harvested out.',
            'Sow a fall brassica crop (broccoli, cabbage, kale) in late July or early August in most temperate zones, timed to mature as summer heat fades.',
            'Refresh spent container annuals and vegetable plantings midseason rather than leaving an exhausted plant in place through the rest of summer.',
            'Track your zone\'s average first fall frost date and count backward by each crop\'s days-to-maturity to confirm a late-summer sowing will actually have time to produce before frost.',
          ],
        },
        {
          type: 'tip',
          emoji: '🥬',
          text: 'The site\'s Succession Planting Planner tool automates the frost-date math for common fast crops — a useful check before committing a late-summer sowing to a bed that could otherwise go to a fall cover crop instead.',
        },
        {
          type: 'image',
          src: '/guides/summer-maintenance/succession-sown-lettuce-beans.jpg',
          alt: 'A vegetable bed with staggered rows of lettuce and beans at different growth stages from succession planting',
          caption: 'Sowing fast-maturing crops every few weeks keeps beds productive through summer instead of peaking once in June.',
        },
      ],
    },
    {
      id: 'heat-stress-management',
      title: 'Managing Heat Stress in Vegetable Gardens',
      blocks: [
        {
          type: 'p',
          text: 'Extreme summer heat stresses vegetables in ways that look like disease or nutrient problems but actually resolve on their own once temperatures moderate — recognizing genuine heat stress prevents unnecessary intervention.',
        },
        {
          type: 'table',
          headers: ['Symptom', 'Likely Cause', 'Response'],
          rows: [
            ['Blossom drop on tomatoes/peppers', 'Temperatures above ~90°F disrupt pollen viability', 'Usually resolves once temperatures moderate; no treatment needed'],
            ['Bitter lettuce, premature bolting', 'Heat triggers flowering (bolting) and bitter compound production', 'Harvest promptly; switch to heat-tolerant varieties or shift lettuce to a shadier spot for the rest of summer'],
            ['Wilting despite adequate soil moisture', 'Transpiration outpacing uptake in extreme heat, not a true water deficit', 'Provide afternoon shade cloth during the worst heat rather than overwatering'],
            ['Sunscald on fruit (tomatoes, peppers)', 'Direct sun exposure on fruit after sudden defoliation or pruning', 'Avoid heavy pruning during peak heat; use shade cloth on especially exposed plants'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'Shade cloth (30-50% shade) deployed during the hottest afternoon hours protects heat-stressed vegetables without meaningfully reducing the light they need for continued production — a targeted, temporary intervention rather than a permanent shade structure.',
        },
        {
          type: 'image',
          src: '/guides/summer-maintenance/shade-cloth-vegetable-garden.jpg',
          alt: 'Shade cloth deployed over a vegetable garden bed during peak summer heat',
          caption: 'Shade cloth during the hottest afternoon hours protects heat-stressed plants without significantly reducing needed light.',
        },
      ],
    },
  ],
};

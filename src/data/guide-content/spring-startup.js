export const springStartupContent = {
  id: 'spring-startup',
  hero: {
    emoji: '🌱',
    title: 'Spring Garden Startup',
    subtitle: 'The complete zone-by-zone checklist for bringing your garden back to life — from first thaw cleanup through your last safe frost date and beyond.',
  },
  intro: 'Spring garden startup isn\'t a single moment — it\'s a sequence of tasks spread across six to eight weeks, each timed to specific soil temperatures and frost-date windows. The temptation is to rush: to plant seeds before the ground is ready, to cut back ornamental grasses before they\'ve served as winter habitat, to divide perennials before soil conditions support root recovery. Getting the sequence right — soil prep before planting, hardening off before transplanting, waiting for soil to warm before direct seeding warm-season crops — makes the difference between a strong start and weeks of setbacks. This guide focuses on task sequencing and timing mechanics; see the site\'s Four-Season Garden Design guide for what to plant for year-round visual interest, and Winter Garden Prep for what should already be in place from the prior fall.',
  sections: [
    {
      id: 'the-startup-sequence',
      title: 'The Correct Order of Spring Tasks',
      blocks: [
        {
          type: 'p',
          text: 'Spring garden tasks have a natural, soil-condition-driven order — doing them out of sequence (dividing perennials before soil has drained, planting before beds are amended) creates avoidable setbacks that compound through the season.',
        },
        {
          type: 'list',
          items: [
            'Wait for soil to dry enough to crumble in your hand before walking on beds or amending them — working wet soil compacts it and undoes structure that took a full season to build.',
            'Clean up winter debris (fallen branches, matted leaves smothering crowns) before amending, so compost and soil work aren\'t buried under material that should be composted separately.',
            'Amend and top-dress beds with compost before planting, giving soil biology a head start incorporating it before roots need to use it.',
            'Divide overcrowded perennials once new growth is visible but still short (a few inches), which minimizes transplant shock compared to dividing fully leafed-out plants.',
            'Prune roses, ornamental grasses, and summer-blooming shrubs before new growth emerges, but only after the hardest frost risk has passed for tender new growth.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Cutting back ornamental grasses and perennial seed heads too early strips away winter habitat that overwintering insects and birds are still using — wait until you see new green growth emerging at the base before cutting back the prior season\'s growth.',
        },
        {
          type: 'image',
          src: '/guides/spring-startup/spring-bed-cleanup.jpg',
          alt: 'A gardener clearing winter debris from a garden bed with new green growth emerging',
          caption: 'Clearing winter debris before amending beds lets compost and soil work integrate without being buried under leftover material.',
        },
      ],
    },
    {
      id: 'soil-temperature-benchmarks',
      title: 'Soil Temperature Benchmarks by Crop',
      blocks: [
        {
          type: 'p',
          text: 'A soil thermometer is more reliable than a calendar date for timing spring planting — the same "average last frost" date can correspond to meaningfully different actual soil temperatures depending on the specific spring\'s weather pattern.',
        },
        {
          type: 'table',
          headers: ['Soil Temperature', 'What Can Go In', 'Notes'],
          rows: [
            ['40-50°F', 'Peas, spinach, lettuce, radish, onion sets', 'These cold-tolerant crops germinate reliably even in cool soil'],
            ['50-60°F', 'Carrots, beets, chard, potatoes', 'A comfortable middle range for most cool-season vegetables'],
            ['60°F and rising', 'Beans, cucumbers, squash', 'Direct-sown warm-season crops planted too early simply sit and rot rather than germinating'],
            ['65-70°F', 'Tomato and pepper transplants (after hardening off)', 'Transplanting warm-season crops into cold soil stalls growth even if air temperature feels warm enough'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'Check soil temperature at the depth you\'ll actually plant seed (usually 1-2 inches for most vegetables), in the morning before the sun has warmed the surface — a single afternoon reading can overstate how warm the root zone actually is.',
        },
        {
          type: 'image',
          src: '/guides/spring-startup/soil-thermometer-garden-bed.jpg',
          alt: 'A soil thermometer inserted into garden bed soil to check spring planting readiness',
          caption: 'A soil thermometer is more reliable than a calendar date for timing spring planting decisions.',
        },
      ],
    },
    {
      id: 'indoor-seed-starting-timing',
      title: 'Indoor Seed Starting Timing',
      blocks: [
        {
          type: 'p',
          text: 'Starting seeds indoors on the correct schedule — counting backward from your last frost date by each crop\'s specific timeline — avoids both leggy, overgrown transplants (started too early) and undersized ones that lag once planted out (started too late).',
        },
        {
          type: 'table',
          headers: ['Crop', 'Weeks Before Last Frost', 'Notes'],
          rows: [
            ['Onions, leeks', '10-12 weeks', 'Among the earliest starts, slow to establish'],
            ['Peppers, eggplant', '8-10 weeks', 'Slow germination and early growth; benefit from the longest indoor head start among common vegetables'],
            ['Tomatoes', '6-8 weeks', 'Grow quickly once started — starting too early produces leggy, rootbound transplants'],
            ['Brassicas (broccoli, cabbage)', '6-8 weeks', 'Can be transplanted out before last frost since they tolerate light cold'],
            ['Cucumbers, squash, melons', '3-4 weeks', 'Fast growers that resent root disturbance — start late and transplant promptly'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Working backward from your zone\'s last frost date (available from the site\'s USDA Zone Finder tool) for each crop\'s specific timeline avoids the single most common seed-starting mistake — starting everything on the same date regardless of how differently each crop grows.',
        },
        {
          type: 'image',
          src: '/guides/spring-startup/seed-starting-trays-indoor.jpg',
          alt: 'Trays of young vegetable seedlings growing indoors under grow lights',
          caption: 'Starting each crop on its own backward-calculated schedule avoids both leggy overgrown transplants and undersized late starts.',
        },
      ],
    },
    {
      id: 'hardening-off',
      title: 'Hardening Off Seedlings Safely',
      blocks: [
        {
          type: 'p',
          text: 'Seedlings grown indoors under stable, protected conditions need a gradual transition to outdoor sun, wind, and temperature swings — skipping this step is one of the most common causes of transplant shock and setback in spring.',
        },
        {
          type: 'list',
          items: [
            'Begin hardening off 7-10 days before the planned transplant date, once outdoor conditions are reasonably mild.',
            'Start with just an hour or two of outdoor exposure in a sheltered, partly shaded spot, gradually increasing duration and sun exposure each day.',
            'Bring plants back indoors (or into a cold frame) each night during the hardening-off period until they\'re acclimated to nighttime lows.',
            'Watch for signs of stress (wilting, leaf scorch, bleaching) and back off exposure if seen, rather than pushing through on a fixed schedule.',
          ],
        },
        {
          type: 'tip',
          emoji: '🪟',
          text: 'A cold frame (see the site\'s Cold Frames & Season Extension guide) is an ideal hardening-off environment — it provides graduated outdoor exposure with a lid that can be closed on cold nights, simplifying the whole process compared to moving trays in and out by hand.',
        },
        {
          type: 'image',
          src: '/guides/spring-startup/hardening-off-seedlings-outdoors.jpg',
          alt: 'Seedling trays being gradually acclimated to outdoor conditions in a sheltered spot',
          caption: 'Gradually increasing outdoor exposure over 7-10 days prevents the transplant shock that skipping hardening off commonly causes.',
        },
      ],
    },
    {
      id: 'zone-by-zone-timing',
      title: 'Zone-by-Zone Spring Startup Windows',
      blocks: [
        {
          type: 'p',
          text: 'The tasks themselves are broadly the same across zones, but the calendar shifts dramatically — a task list without zone context isn\'t actually actionable for most gardeners.',
        },
        {
          type: 'table',
          headers: ['Zone Range', 'Startup Window Begins', 'Notes'],
          rows: [
            ['Zones 3-4', 'Late April to early May', 'Shortest, most compressed startup window; many tasks happen in quick succession'],
            ['Zones 5-6', 'Mid-March through mid-May', 'A extended, multi-stage window as the season gradually warms'],
            ['Zones 7-8', 'February through April', 'Meaningful outdoor work often begins while colder zones are still under snow'],
            ['Zones 9-11', 'Often begins in January-February', 'Little true dormancy; spring startup blends with ongoing winter growing season activity'],
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'Use your specific zone\'s last frost date (via the site\'s USDA Zone Finder and Garden Planting Calendar tools) rather than this table\'s broad ranges for actual planting decisions — these ranges illustrate the scale of the shift, not a precise planting schedule.',
        },
        {
          type: 'image',
          src: '/guides/spring-startup/garden-coming-to-life.jpg',
          alt: 'A garden bed bursting with fresh spring growth and early blooms',
          caption: 'A properly sequenced spring startup produces a strong, healthy start rather than weeks of avoidable setbacks.',
        },
      ],
    },
  ],
};

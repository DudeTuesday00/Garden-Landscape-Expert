export const yearRoundCalendarContent = {
  id: 'year-round-calendar',
  hero: {
    emoji: '🗓️',
    title: 'Year-Round Gardening Calendar',
    subtitle: 'A month-by-month task calendar for the vegetable garden, zone-calibrated so you always know what to start, sow, and harvest next.',
  },
  intro: 'Knowing what to do in the garden is only half the challenge — knowing when to do it is the other half, and timing varies dramatically across US climate zones. A gardener in Zone 9 is starting tomato transplants in February while a Zone 4 gardener is still ordering seeds from a catalog. This guide focuses specifically on the vegetable and edible garden task calendar — seed starting, direct sowing, transplanting, and succession timing, anchored to your zone. For a month-by-month calendar of ornamental bloom sequence and garden design tasks, see the site\'s Four-Season Garden Design guide, which covers that ground in full; this guide picks up where that one leaves off, for the kitchen garden specifically.',
  sections: [
    {
      id: 'how-zone-shifting-works',
      title: 'How Zone-Shifted Timing Works',
      blocks: [
        {
          type: 'p',
          text: 'Every task calendar in this guide is baselined to Zone 6 (roughly the Mid-Atlantic/lower Midwest) — the goal isn\'t to memorize a different calendar for every zone, but to learn the shift rule and apply it consistently.',
        },
        {
          type: 'list',
          items: [
            'Shift roughly 1-2 weeks earlier per zone warmer than Zone 6 (Zone 7, 8, 9, and so on) — a Zone 9 gardener starts most tasks 4-6 weeks ahead of the Zone 6 baseline.',
            'Shift roughly 1-2 weeks later per zone colder than Zone 6 (Zone 5, 4, 3) — a Zone 3 gardener runs 4-6 weeks behind the baseline for spring tasks, and stops correspondingly earlier in fall.',
            'The shift isn\'t perfectly symmetric between spring and fall — colder zones don\'t just start late, they also end their growing season earlier, compressing the whole calendar rather than just delaying it.',
            'Task order stays constant across all zones even when exact dates shift — indoor seed starting always precedes direct sowing of the same crop, which always precedes transplanting, regardless of zone.',
          ],
        },
        {
          type: 'tip',
          emoji: '🗺️',
          text: 'Use the site\'s USDA Zone Finder tool to confirm your exact zone by ZIP code, then apply the shift rule above to every date in this guide\'s tables — treat the Zone 6 dates as a reference point, not a literal instruction.',
        },
        {
          type: 'image',
          src: '/guides/year-round-calendar/garden-planning-notebook-seed-packets.jpg',
          alt: 'A garden planning notebook open with seed packets and a calendar laid out on a table',
          caption: 'A zone-calibrated calendar removes the guesswork of when to start, sow, and transplant each crop.',
        },
      ],
    },
    {
      id: 'winter-months',
      title: 'Winter — The Planning Months',
      blocks: [
        {
          type: 'p',
          text: 'Winter months are far from idle in a working vegetable garden calendar — January and February are prime time for the planning and early-start work that makes the rest of the season run smoothly.',
        },
        {
          type: 'list',
          items: [
            'Order seeds in January — popular varieties sell out by February, and ordering early avoids settling for a substitute variety.',
            'Inventory and test germination on leftover seed from prior years before ordering more — most vegetable seed stays viable 2-4 years if stored cool and dry, and a quick paper-towel germination test avoids wasting garden space on seed that won\'t sprout.',
            'Start slow-germinating crops indoors under lights in late winter — onions, leeks, and celery all need 8-12 weeks of indoor growth before it\'s time to transplant, far earlier than faster crops like tomatoes.',
            'Clean, sharpen, and oil garden tools before the season starts, when there\'s time to do it properly rather than in a rushed spring window.',
            'Review the prior year\'s garden notes or map (if kept) and plan crop rotation for the coming season — see the site\'s Post-Harvest Garden Care guide for the full rotation-planning framework.',
          ],
        },
        {
          type: 'tip',
          emoji: '📋',
          text: 'A simple planning session in January — what worked, what didn\'t, what to grow more or less of — takes an hour and meaningfully improves the whole season\'s results, yet it\'s the step most gardeners skip in the rush of spring.',
        },
        {
          type: 'image',
          src: '/guides/year-round-calendar/onions-leeks-seed-starting-indoors.jpg',
          alt: 'Onion and leek seedlings started indoors under grow lights in late winter',
          caption: 'Onions, leeks, and celery need 8-12 weeks of indoor growth — among the earliest seed-starting tasks of the year.',
        },
      ],
    },
    {
      id: 'spring-summer-calendar',
      title: 'Spring & Summer Task Calendar',
      blocks: [
        {
          type: 'p',
          text: 'The spring-into-summer stretch is the busiest period of the vegetable garden year, moving from indoor seed starting through direct sowing, transplanting, and into active-season maintenance.',
        },
        {
          type: 'table',
          headers: ['Month (Zone 6 baseline)', 'Primary Tasks'],
          rows: [
            ['March', 'Start tomatoes, peppers, and eggplant indoors under lights. Direct sow cold-tolerant crops outdoors as soil becomes workable: peas, spinach, lettuce, radish.'],
            ['April', 'Direct sow more cool-season crops: carrots, beets, more lettuce successions. Harden off indoor-started seedlings in the final 1-2 weeks of the month.'],
            ['May', 'Transplant tomatoes, peppers, and eggplant outdoors after last frost date. Direct sow warm-season crops: beans, squash, cucumbers, corn.'],
            ['June', 'Begin succession sowing of fast crops (radish, lettuce, beans) every 2-3 weeks. Mulch to conserve moisture as temperatures climb.'],
            ['July', 'Peak harvest season for early-planted crops. Continue succession sowing. Monitor for heat stress and pest pressure — see the site\'s Summer Garden Maintenance guide for detailed technique.'],
            ['August', 'Sow fall crops now for a fall harvest: brassicas, more lettuce, spinach, and root vegetables — this is the last realistic window in most Zone 6 gardens.'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The two most common timing mistakes are planting warm-season crops too early in spring (before the last frost date, risking a total loss) and forgetting the fall sowing window entirely in the busy heat of summer — both are calendar failures, not skill failures.',
        },
        {
          type: 'image',
          src: '/guides/year-round-calendar/transplanting-tomato-seedlings-spring.jpg',
          alt: 'A gardener transplanting tomato seedlings into a garden bed in late spring',
          caption: 'Transplanting warm-season crops too early, before the last frost date, is one of the most common timing mistakes.',
        },
      ],
    },
    {
      id: 'fall-task-calendar',
      title: 'Fall Task Calendar',
      blocks: [
        {
          type: 'p',
          text: 'Fall tasks split into two tracks running at the same time: harvesting and extending the current season\'s crops, and beginning the preparation work that sets up next year.',
        },
        {
          type: 'table',
          headers: ['Month (Zone 6 baseline)', 'Primary Tasks'],
          rows: [
            ['September', 'Continue harvesting summer crops. Plant garlic (a fall-only crop) and cover crops in beds as they clear. See the site\'s Fall Planting Guide for full garlic and cover crop timing.'],
            ['October', 'Extend the season for cold-tolerant crops using row cover or cold frames. Begin fall cleanup — cut back diseased material, leave healthy perennial material standing for wildlife.'],
            ['November', 'Final harvest before hard frost. Amend cleared beds with compost. Disconnect and drain irrigation before freezing temperatures arrive.'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌾',
          text: 'For the full mechanics of what to cut back versus leave standing, crop rotation planning, and fall soil amendment, see the site\'s Post-Harvest Garden Care guide — this calendar tells you when those tasks happen, that guide covers how and why in depth.',
        },
        {
          type: 'image',
          src: '/guides/year-round-calendar/garlic-planting-fall-cover-crop.jpg',
          alt: 'A gardener planting garlic cloves in a fall garden bed with cover crop growing in an adjacent row',
          caption: 'September and October carry two tracks at once: harvesting the current season and planting for the next.',
        },
      ],
    },
    {
      id: 'building-your-own-calendar',
      title: 'Building Your Own Zone-Specific Calendar',
      blocks: [
        {
          type: 'p',
          text: 'The tables in this guide are a starting template, not a fixed schedule — the most useful calendar is the one you build from your own garden\'s actual results over a season or two.',
        },
        {
          type: 'list',
          items: [
            'Start with your zone\'s estimated last and first frost dates as anchor points, then work backward and forward from them using each crop\'s seed packet timing (most packets list weeks before/after last frost for starting and sowing).',
            'Track actual outcomes in a simple notebook or phone note — when you actually planted, when it actually produced — and adjust next year\'s calendar based on what really happened in your specific garden, not just the zone average.',
            'Keep a running list of successes worth repeating and failures worth avoiding; a calendar refined over 2-3 seasons against your own microclimate outperforms any generic zone-based table, including this one.',
            'Revisit the calendar each January as part of the winter planning task above — the calendar itself is a living document, not something to set once and follow forever.',
          ],
        },
        {
          type: 'tip',
          emoji: '✅',
          text: 'A garden that\'s always in motion — something being started, maintained, harvested, or prepared in every season — is the actual goal of a year-round calendar, not perfect adherence to any specific date.',
        },
        {
          type: 'image',
          src: '/guides/year-round-calendar/garden-journal-tracking-seasons.jpg',
          alt: 'A gardening journal with handwritten notes tracking planting dates and harvest results across seasons',
          caption: 'A calendar refined over a few seasons against your own garden\'s real results outperforms any generic zone table.',
        },
      ],
    },
  ],
};

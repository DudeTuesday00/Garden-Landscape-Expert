export const lawnCareContent = {
  id: 'lawn-care',
  hero: {
    emoji: '🌱',
    title: 'Lawn Care: A Practical Year-Round Guide',
    subtitle: 'Mowing height, deep watering, feeding, aeration, and overseeding — the handful of habits that make a thick, healthy lawn.',
  },
  intro: 'A healthy lawn is less about a long list of products and more about a handful of habits done at the right time: mowing high, watering deeply, feeding at the right season, aerating compacted soil, and overseeding thin areas. A thick lawn crowds out most weeds by itself, which reduces the need for chemicals. The most important first step is knowing whether you have a cool-season or a warm-season grass, since that decides nearly every timing question. This guide covers grass types, mowing, watering, feeding, aeration, overseeding, and the common problems. For weeds in more detail, see Weed Management, for saving water, see Water-Wise Gardening, and for feeding the soil, see Organic Fertilizing and Soil Health.',
  sections: [
    {
      id: 'grass-types',
      title: 'Know Your Grass: Cool-Season or Warm-Season',
      blocks: [
        {
          type: 'p',
          text: 'Grasses fall into two groups that grow best at different temperatures, and each is cared for on a different calendar. Identify yours before you buy fertilizer or seed, since timing is the difference between helping a lawn and harming it.',
        },
        {
          type: 'table',
          headers: ['Group', 'Common grasses', 'Grows best', 'Typical regions'],
          rows: [
            ['Cool-season', 'Kentucky bluegrass, tall fescue, fine fescues, perennial ryegrass', 'Spring and fall, in mild temperatures; may slow or go dormant in summer heat', 'Northern half of the country and the transition zone'],
            ['Warm-season', 'Bermudagrass, zoysiagrass, St. Augustinegrass, centipedegrass', 'Summer heat; goes dormant and brown in winter after cold weather', 'The South and warm regions'],
          ],
        },
        {
          type: 'p',
          text: 'The transition zone, the band between the two regions, can grow either group, and gardeners there often choose tall fescue or a warm-season grass depending on shade, water, and how much summer stress the lawn sees.',
        },
        {
          type: 'tip',
          emoji: '🔍',
          text: 'If you are unsure what grass you have, take a small piece of turf to a local garden center or your cooperative extension office, and ask for an identification.',
        },
      ],
    },
    {
      id: 'mowing',
      title: 'Mowing Well',
      blocks: [
        {
          type: 'p',
          text: 'Mowing is the most frequent job and the one with the biggest effect. Mowing too short weakens grass, exposes soil to weeds, and dries the lawn out faster.',
        },
        {
          type: 'list',
          items: [
            'Follow the one-third rule: never remove more than about a third of the blade height in a single mowing.',
            'Mow cool-season grasses relatively high, generally around 3-4 inches. Warm-season grasses are usually mown lower, roughly 1-3 inches depending on the type, and each has its own preferred range.',
            'Keep mower blades sharp. A dull blade tears grass and leaves ragged brown tips instead of a clean cut.',
            'Leave the clippings on the lawn. They break down quickly and return nutrients to the soil.',
            'Mow when the grass is dry, and vary the mowing pattern from time to time to avoid ruts and to keep grass upright.',
            'Raise the mowing height in hot, dry weather, which shades the soil and helps the lawn survive stress.',
          ],
        },
        {
          type: 'image',
          src: '/guides/lawn-care/mowing-high.jpg',
          alt: 'A push lawn mower cutting a thick green lawn at a high setting with freshly cut grass blades in the foreground',
          caption: 'Mowing high and often, with a sharp blade, is the simplest way to a thicker lawn.',
        },
      ],
    },
    {
      id: 'watering',
      title: 'Watering Deeply, Not Often',
      blocks: [
        {
          type: 'p',
          text: 'Deep, infrequent watering pushes roots down, making the lawn more drought tolerant. Frequent shallow watering does the opposite, encouraging shallow roots and disease.',
        },
        {
          type: 'list',
          items: [
            'Aim for roughly 1 inch of water a week, including rain, and more in very hot, dry spells. Sandy soils may need it split into two sessions, while heavy clay soaks it in more slowly.',
            'Water early in the morning, when there is less wind and evaporation, and the grass dries during the day.',
            'Check how much your sprinkler delivers by placing a few empty cans or shallow dishes on the lawn and timing how long they take to collect an inch.',
            'If water runs off before soaking in, water in shorter cycles with a pause between them.',
            'A lawn that is thirsty shows a bluish-gray tint, and footprints stay pressed into the grass instead of springing back.',
            'Warm-season grasses may go dormant in drought and recover with the return of rain, while cool-season grasses can also go dormant in summer heat.',
          ],
        },
        {
          type: 'image',
          src: '/guides/lawn-care/morning-sprinkler.jpg',
          alt: 'A lawn sprinkler spraying water over a green lawn at sunrise with dew and soft golden light',
          caption: 'Early morning is the best time to water, with less evaporation and time for the grass to dry.',
        },
      ],
    },
    {
      id: 'feeding',
      title: 'Feeding at the Right Time',
      blocks: [
        {
          type: 'p',
          text: 'Lawns are hungry, mostly for nitrogen, but more is not better. The right timing depends on the grass group, and the best plan begins with a soil test to check what your soil actually needs.',
        },
        {
          type: 'table',
          headers: ['Grass group', 'Best feeding times', 'Notes'],
          rows: [
            ['Cool-season', 'Early fall is the most important feeding, with a lighter feeding in late fall or spring', 'Avoid heavy feeding in summer heat, which can stress the lawn and encourage disease'],
            ['Warm-season', 'Late spring through summer, once the grass is actively growing', 'Avoid feeding late in the season, which can push soft growth before cold weather'],
          ],
        },
        {
          type: 'list',
          items: [
            'Take a soil test every few years to learn the pH and any nutrient shortages. See Soil Health for how to interpret one.',
            'Choose a slow-release or organic fertilizer, which feeds steadily and lowers the risk of burning the lawn or of runoff.',
            'Follow the label rate. Applying more than directed burns grass and can pollute waterways.',
            'Sweep or blow any fertilizer off driveways and sidewalks back onto the lawn.',
            'Water lightly after feeding, following the product label, so the fertilizer moves into the soil.',
          ],
        },
      ],
    },
    {
      id: 'aeration',
      title: 'Aeration for Compacted Soil',
      blocks: [
        {
          type: 'p',
          text: 'Foot traffic, mowing, and heavy clay compact soil until water, air, and nutrients cannot reach the roots. Core aeration removes small plugs of soil, opening channels that let the lawn breathe.',
        },
        {
          type: 'list',
          items: [
            'Use a core aerator, which pulls out plugs of soil, rather than a spike tool, which can press soil tighter around each hole. Machines can be rented, and some lawn services provide the job.',
            'Aerate when the grass is actively growing and the soil is moist but not saturated. For cool-season lawns that is early fall or spring, and for warm-season lawns late spring to early summer.',
            'Leave the plugs on the lawn. They break down in a couple of weeks and return soil to the surface.',
            'Most lawns benefit from aeration every year or two, and heavily compacted or clay lawns more often.',
            'Follow aeration with overseeding and light feeding, when the lawn needs them, since the holes give seed excellent contact with soil.',
          ],
        },
        {
          type: 'image',
          src: '/guides/lawn-care/core-aeration.jpg',
          alt: 'Small cylindrical soil plugs pulled out by core aeration lying scattered on a green lawn',
          caption: 'Core aeration pulls out small plugs of soil, opening channels for water and air.',
        },
      ],
    },
    {
      id: 'overseeding',
      title: 'Overseeding and Repairing Thin Areas',
      blocks: [
        {
          type: 'p',
          text: 'Lawns thin out over time. Overseeding, which means spreading new seed over the existing turf, fills thin spots, adds improved varieties, and crowds out weeds.',
        },
        {
          type: 'list',
          items: [
            'For cool-season lawns, early fall is the best time, when soil is warm and air is cooler. Warm-season lawns are best seeded or plugged in late spring to early summer.',
            'Mow a little lower than usual, remove debris, and loosen the surface with a rake so seed reaches soil.',
            'Choose seed suited to your climate and your amount of sun, and follow the seeding rate on the bag.',
            'Spread the seed evenly with a broadcast spreader, then rake lightly or roll to press it into contact with soil.',
            'Keep the seeded area consistently damp, with light watering once or twice a day, until seedlings are established, then return to deep, less frequent watering.',
            'Wait until new grass has been mowed a few times before applying weed killers, since many products harm seedlings. Check the label.',
          ],
        },
        {
          type: 'image',
          src: '/guides/lawn-care/overseeding-spreader.jpg',
          alt: 'A green wheeled broadcast seed spreader with a push handle standing on a thin lawn scattered with autumn leaves',
          caption: 'A broadcast spreader gives an even coat of seed across a thinning lawn.',
        },
      ],
    },
    {
      id: 'problems',
      title: 'Common Lawn Problems',
      blocks: [
        {
          type: 'p',
          text: 'Most lawn problems come from stress: mowing too low, watering the wrong way, compacted soil, or the wrong grass in the wrong place. Fix the cause and the lawn usually recovers.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Likely cause', 'What to do'],
          rows: [
            ['Irregular brown patches', 'Drought stress, dog urine, a fungal disease in humid weather, or grubs', 'Check watering first; pull back a bit of turf to look for grubs, and water deeply in the morning'],
            ['Turf peels up like carpet', 'Grubs feeding on roots', 'Confirm with a spade test, and treat according to the grub species and timing recommended locally'],
            ['Thin grass under trees', 'Shade and root competition', 'Raise mowing height, use shade-tolerant grass, or replace with a groundcover or mulch'],
            ['Weeds such as dandelion and crabgrass', 'Thin turf, mowing too low, or bare soil', 'Mow higher, thicken the lawn with overseeding, and time any pre-emergent product to the recommended soil temperature. See Weed Management'],
            ['Moss', 'Shade, compaction, poor drainage, or low fertility', 'Improve light and drainage, aerate, and address soil acidity if a test shows it'],
            ['Dead, dry, crunchy grass', 'Drought dormancy or lack of water', 'Water deeply; dormant grass often greens up again when conditions improve'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌍',
          text: 'If a lawn is more trouble than it is worth in a hard spot such as deep shade or a steep slope, consider replacing part of it with groundcover, mulch, or a low-water planting. See the Low-Maintenance Landscape guide.',
        },
        {
          type: 'image',
          src: '/guides/lawn-care/brown-patch.jpg',
          alt: 'An irregular round brown dead patch in an otherwise green lawn with dry straw-colored grass',
          caption: 'A brown patch has many possible causes, so check watering, soil, and grubs before treating.',
        },
      ],
    },
  ],
}

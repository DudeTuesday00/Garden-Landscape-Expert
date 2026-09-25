export const coverCropsContent = {
  id: 'cover-crops',
  hero: {
    emoji: '🌾',
    title: 'Cover Crops for Home Gardens',
    subtitle: 'Feed the soil, suppress weeds, and protect bare ground — what to sow, when, and how to finish them off without a tiller.',
  },
  intro: 'A cover crop is a plant you grow for the benefit of the soil instead of for harvest. Sown on bare ground in fall or in any gap between crops, it holds soil in place, shades out weeds, feeds soil life with roots and leaves, and, in the case of legumes, adds nitrogen for the next crop. For home gardeners this is one of the cheapest and most effective ways to improve soil, since the seed costs little and the plants do the work. This guide covers why cover crops matter, the main choices, how and when to sow, how to end them without digging, and how to fit them into a rotation. It builds on No-Dig Gardening and Soil Health, and pairs with Post-Harvest Garden Care.',
  sections: [
    {
      id: 'why-cover-crops',
      title: 'Why Grow a Cover Crop',
      blocks: [
        {
          type: 'p',
          text: 'Bare soil is not natural. Left uncovered, it is exposed to rain that compacts and erodes it, sun that bakes it, and a rush of weeds that fill the gap. A cover crop fills that space with something useful.',
        },
        {
          type: 'list',
          items: [
            'Protects soil from erosion and compaction by heavy rain, and keeps nutrients from washing away over winter.',
            'Suppresses weeds by occupying the space and casting shade, so fewer weed seeds get a chance to sprout.',
            'Feeds soil life. Roots release sugars that fuel beneficial bacteria and fungi, and the plant material adds organic matter when it breaks down.',
            'Loosens soil. Strong roots, such as those of rye or tillage radish, open channels that improve drainage and air.',
            'Adds nitrogen when the plant is a legume, which partners with bacteria to capture nitrogen from the air.',
            'Supports beneficial insects and pollinators when left to flower, such as crimson clover and buckwheat.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌍',
          text: 'You do not need a large plot. A single bed you plant with rye after the last tomatoes come out is a real cover crop, and the benefits show up in the next season.',
        },
        {
          type: 'image',
          src: '/guides/cover-crops/winter-rye-bed.jpg',
          alt: 'Young green winter rye grass seedlings covering a raised vegetable bed in autumn with a few fallen yellow leaves',
          caption: 'Winter rye keeps a bed green and protected through the cold months.',
        },
      ],
    },
    {
      id: 'choosing-a-cover-crop',
      title: 'Choosing a Cover Crop',
      blocks: [
        {
          type: 'p',
          text: 'Cover crops fall into a few groups, and the right one depends on your season and what you want the crop to do. Grasses build organic matter and suppress weeds, legumes add nitrogen, and brassicas and buckwheat handle specific jobs.',
        },
        {
          type: 'table',
          headers: ['Cover crop', 'Type', 'Best sown', 'Main job', 'Notes'],
          rows: [
            ['Winter rye', 'Grass', 'Fall, several weeks before hard frost', 'Weed suppression, erosion control, organic matter', 'Very cold hardy; grows in cool weather; can be tough to manage if allowed to mature'],
            ['Oats', 'Grass', 'Late summer to early fall', 'Quick cover, weed suppression', 'Usually winter-kill in colder climates, leaving an easy-to-plant mulch'],
            ['Crimson clover', 'Legume', 'Late summer to fall', 'Nitrogen, pollinator flowers', 'Beautiful red blooms; may not survive the coldest winters'],
            ['Hairy vetch', 'Legume', 'Fall', 'Nitrogen, weed suppression', 'Very hardy; a good partner sown with rye'],
            ['Field peas or fava beans', 'Legume', 'Early spring or fall', 'Nitrogen, biomass', 'Fast growing, and the tops are edible young; sow in cool weather'],
            ['Buckwheat', 'Broadleaf', 'Late spring through summer', 'Fast summer cover, pollinators', 'Flowers within roughly 4-6 weeks; killed by frost; cut before it sets seed'],
            ['Tillage radish and mustard', 'Brassica', 'Late summer', 'Breaks up compacted soil, suppresses pests', 'Radish roots usually winter-kill in cold climates and leave open channels; let mustard residue break down for a couple of weeks before sowing seed'],
          ],
        },
        {
          type: 'p',
          text: 'A popular mix for a fall bed is rye with hairy vetch: the rye holds the soil and outcompetes weeds, and the vetch adds nitrogen. If you only want one, choose oats where winters are cold, and rye where you want something hardy that will grow over winter.',
        },
        {
          type: 'image',
          src: '/guides/cover-crops/crimson-clover-bee.jpg',
          alt: 'A bumblebee on a bright crimson clover flower in full bloom with green leaves in the soft background',
          caption: 'Crimson clover fixes nitrogen and feeds bees when it flowers in spring.',
        },
      ],
    },
    {
      id: 'sowing',
      title: 'When and How to Sow',
      blocks: [
        {
          type: 'p',
          text: 'The most useful moment for a cover crop is right after you clear a bed in the fall. Sow early enough that the seedlings can establish before hard frost, generally several weeks ahead of it, so they enter winter with a good root system.',
        },
        {
          type: 'list',
          items: [
            'Clear the bed of spent crops and weeds. There is no need to dig; a rake to roughen the soil surface is enough.',
            'Broadcast the seed evenly by hand, following the seeding rate given on the seed package, since rates differ a lot between crops.',
            'Rake lightly to cover the seed, or press it in, so it is in contact with soil and safe from birds.',
            'Water in well and keep the surface damp until seedlings are up.',
            'For legumes, an inoculant powder matched to the crop helps nitrogen-fixing bacteria colonize the roots, and is inexpensive insurance in soil that has not grown that legume before.',
            'In spring and summer, fast crops such as buckwheat or oats can fill a gap of a month or two between harvest and the next planting.',
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'Not sure what to sow when? Buy seed in a mix designed for your region, or ask your local cooperative extension office which cover crops do best in your area and season.',
        },
        {
          type: 'image',
          src: '/guides/cover-crops/broadcasting-seed.jpg',
          alt: 'A gardener hand broadcasting small seeds over bare raked garden soil with seeds in mid-air',
          caption: 'Cover crop seed is broadcast by hand, raked in lightly, and watered.',
        },
      ],
    },
    {
      id: 'ending-a-cover-crop',
      title: 'Ending a Cover Crop Without Digging',
      blocks: [
        {
          type: 'p',
          text: 'Timing matters more than method. Cut or end the crop before it sets seed, which for most is at flowering, so it does not become a weed. For legumes, the best time is usually when flowers are just opening, when nitrogen is at its peak.',
        },
        {
          type: 'list',
          items: [
            'Chop and drop: cut the plants at the soil line with shears or a sharp hoe, and leave the tops on the surface as mulch. This suits small beds and no-dig gardens.',
            'Mow low: for larger patches, mow the crop to the ground, then leave the clippings in place.',
            'Cover it: for tough cover crops, mow or cut, then smother the residue under a tarp, cardboard, or thick mulch for a few weeks to kill regrowth.',
            'Winter kill: crops like oats and buckwheat are killed by frost and simply lie down as mulch. Plant into the residue in spring.',
            'Tilling in is optional. Working the residue into the soil speeds decomposition, but it also disturbs soil life, so many gardeners skip it.',
            'Wait a couple of weeks after ending a heavy crop like rye before sowing small seeds such as carrots or lettuce, since decomposing residue can hold back tiny seedlings. Transplants usually go in without a problem.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Do not let rye or other grasses go to seed head in the garden. Mature rye is tough, hard to cut, and may reseed. End it while it is still green and soft, ideally before it starts to produce heads.',
        },
        {
          type: 'image',
          src: '/guides/cover-crops/chop-and-drop.jpg',
          alt: 'A gardener with hand shears cutting down a flowering cover crop at soil level with cut stems lying on the soil surface',
          caption: 'Cutting at soil level and leaving the tops as mulch is the simplest way to end a cover crop.',
        },
      ],
    },
    {
      id: 'rotation-and-troubleshooting',
      title: 'Nitrogen, Rotation, and Troubleshooting',
      blocks: [
        {
          type: 'p',
          text: 'Legume cover crops leave a nitrogen boost for the crop that follows them, and hungry feeders such as tomatoes, squash, and corn benefit most. Roots of healthy legumes carry small pale nodules where the nitrogen-fixing bacteria live.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Likely cause', 'What to do'],
          rows: [
            ['Patchy or thin stand', 'Seed dried out, was eaten by birds, or sown too late', 'Rake seed in, keep damp until sprouted, and sow earlier next time'],
            ['Cover crop is full of weeds', 'Sown too thinly or too late to outcompete weeds', 'Seed at the recommended rate, and cut both crop and weeds before they set seed'],
            ['Cover crop grew too tall or tough to cut', 'Left too long, especially rye', 'End it earlier, while soft, and use a sharp tool or mow low'],
            ['Little nitrogen benefit from legumes', 'Wrong inoculant, cold soil, or crop ended too late', 'Use a matching inoculant, and end legumes at early bloom'],
            ['Seedlings struggle after cover crop', 'Heavy residue holding back tiny seeds', 'Wait a couple of weeks, rake residue aside, or plant transplants instead'],
            ['Cover crop persists as a weed', 'Allowed to seed, or perennial types such as white clover spread', 'Cut before seed set and pick annual types for beds that are replanted often'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔄',
          text: 'Plan cover crops into your rotation: a bean or pea crop leaves nitrogen behind, a bed sown in rye rests over winter, and a legume ahead of a hungry crop feeds it. See Post-Harvest Garden Care for a full rotation plan, and Growing Beans and Peas for how legume crops fit in.',
        },
        {
          type: 'image',
          src: '/guides/cover-crops/root-nodules.jpg',
          alt: 'Legume roots held in an open palm covered in many small round pale nodules with dark soil crumbs',
          caption: 'The small round nodules on legume roots are where nitrogen-fixing bacteria live.',
        },
      ],
    },
  ],
}

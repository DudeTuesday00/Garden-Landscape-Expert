export const postHarvestContent = {
  id: 'post-harvest',
  hero: {
    emoji: '🌾',
    title: 'Post-Harvest Garden Care',
    subtitle: 'Make the most of the season\'s end — save seeds, amend soil, plan rotations, and set up your garden to be healthier next year than it was this one.',
  },
  intro: 'What you do in the weeks after your last harvest has an outsized impact on next year\'s garden. Fall is the ideal time to incorporate compost and amendments because they have months to break down and integrate before spring planting. It\'s also the best moment to plant cover crops that protect bare soil from erosion, fix nitrogen, and add organic matter when tilled under in spring. Post-harvest care is less about cleanup and more about setting up soil biology and garden structure for the season ahead. This guide focuses on crop rotation planning and end-of-season decisions specifically — see the site\'s Seed Saving guide for the full mechanics of collecting and storing seed, and Soil Health for the deeper soil-improvement framework this fits into.',
  sections: [
    {
      id: 'crop-rotation-planning',
      title: 'Planning Crop Rotation Before You Forget',
      blocks: [
        {
          type: 'p',
          text: 'Fall — while the season\'s layout is still fresh in memory — is the ideal time to plan next year\'s crop rotation, before the details of what grew where fade over winter.',
        },
        {
          type: 'table',
          headers: ['Plant Family', 'Members', 'Rotation Guidance'],
          rows: [
            ['Solanaceae (nightshades)', 'Tomato, pepper, eggplant, potato', 'Don\'t return to the same bed for 3-4 years — shared soil-borne diseases build up quickly with repeated planting'],
            ['Brassicaceae', 'Cabbage, broccoli, kale, radish', 'Rotate to break the clubroot and flea beetle cycle'],
            ['Cucurbitaceae', 'Cucumber, squash, melon', 'Rotate to reduce cucumber beetle and squash vine borer carryover in the soil'],
            ['Fabaceae (legumes)', 'Beans, peas', 'Plant a heavy feeder in the bed a legume crop occupied the prior year, to use the nitrogen it left behind'],
          ],
        },
        {
          type: 'tip',
          emoji: '📝',
          text: 'A simple hand-drawn garden map noting which family grew in which bed this year — even a quick phone photo of the layout — is enough to plan next year\'s rotation accurately, and takes far less effort than trying to remember it months later.',
        },
        {
          type: 'image',
          src: '/guides/post-harvest/garden-bed-map-planning.jpg',
          alt: 'A hand-drawn garden bed layout map with notes for planning next years crop rotation',
          caption: 'Sketching the current year\'s bed layout while it\'s fresh makes next year\'s crop rotation planning far more accurate.',
        },
      ],
    },
    {
      id: 'what-to-cut-back-vs-leave',
      title: 'What to Cut Back and What to Leave Standing',
      blocks: [
        {
          type: 'p',
          text: 'The instinct to fully clear a garden at season\'s end is understandable but often counterproductive — many ornamental seed heads and hollow stems provide critical overwintering habitat for native bees and beneficial insects that a tidy fall cleanup destroys.',
        },
        {
          type: 'table',
          headers: ['Plant Material', 'Recommendation', 'Why'],
          rows: [
            ['Ornamental grass seed heads', 'Leave standing through winter', 'Winter food for seed-eating birds; cut back in early spring instead'],
            ['Perennial flower seed heads (coneflower, black-eyed Susan)', 'Leave standing', 'Bird food and winter garden structure; also hosts overwintering beneficial insects'],
            ['Hollow-stemmed perennials', 'Leave standing, or cut and lay stems in a brush pile', 'Many native bee species overwinter inside hollow plant stems'],
            ['Diseased plant material (blight-affected tomatoes, powdery-mildew-covered squash vines)', 'Remove and dispose of, don\'t compost', 'Prevents disease pathogens from persisting in the garden or spreading through compost'],
            ['Spent annual vegetable plants (healthy)', 'Cut back and compost, or chop-and-drop as mulch', 'No overwintering habitat value once the plant is fully spent, and clearing reduces pest overwintering sites for annual crop pests specifically'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'The distinction matters: leave ornamental and native perennial material standing for wildlife value, but remove and discard (don\'t compost) genuinely diseased material — a blanket "leave everything" or "clear everything" approach misses the real, plant-specific reasoning behind this guidance.',
        },
        {
          type: 'image',
          src: '/guides/post-harvest/seed-heads-standing-winter.jpg',
          alt: 'Dried ornamental grass and coneflower seed heads left standing in a fall garden bed',
          caption: 'Leaving seed heads and hollow stems standing through winter provides critical habitat for birds and overwintering beneficial insects.',
        },
      ],
    },
    {
      id: 'fall-soil-amendment',
      title: 'Fall Soil Amendment Timing',
      blocks: [
        {
          type: 'p',
          text: 'Fall is the ideal time to incorporate compost and amendments because they have months to break down and integrate into the soil before spring planting demands they be immediately plant-available.',
        },
        {
          type: 'list',
          items: [
            'Spread 1-3 inches of finished compost across cleared beds in fall — it will continue breaking down and integrating over winter, ready to support strong spring growth.',
            'Apply slower-acting amendments (rock phosphate, lime for pH correction) in fall specifically, since these take months to become fully available in the soil.',
            'Avoid applying fast-release nitrogen fertilizer in fall — it\'s not needed by dormant or slow-growing plants and is more likely to leach away before spring than be used.',
          ],
        },
        {
          type: 'tip',
          emoji: '🍂',
          text: 'See the site\'s Soil Health guide for the complete soil-testing and multi-year improvement framework this fall amendment step fits into — this section covers just the timing rationale specific to post-harvest season.',
        },
        {
          type: 'image',
          src: '/guides/post-harvest/spreading-compost-cleared-bed.jpg',
          alt: 'A gardener spreading finished compost across a cleared vegetable garden bed in fall',
          caption: 'Compost applied in fall has months to break down and integrate before spring planting demands it be immediately available.',
        },
      ],
    },
    {
      id: 'cover-crops',
      title: 'Cover Crops for Bare Fall Beds',
      blocks: [
        {
          type: 'p',
          text: 'A bare bed left exposed over winter loses topsoil to erosion and nutrients to leaching — a fall-sown cover crop protects the soil while actively improving it.',
        },
        {
          type: 'table',
          headers: ['Cover Crop', 'Key Benefit', 'Notes'],
          rows: [
            ['Winter rye', 'Excellent erosion control, suppresses weeds', 'Extremely cold-hardy, one of the most reliable choices for northern gardens'],
            ['Crimson clover', 'Nitrogen fixation', 'A legume cover crop that adds nitrogen when turned under in spring'],
            ['Field peas', 'Nitrogen fixation, fast establishment', 'Good paired with a grass cover like oats for combined benefits'],
            ['Buckwheat', 'Fast-growing, suppresses weeds quickly', 'Not winter-hardy in most zones — best as a quick-turnaround summer/early-fall cover before a hardier crop follows'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌾',
          text: 'Cover crops need enough fall growing time to establish before hard frost — sow at least 4-6 weeks before your area\'s first killing frost, following the same general timing principle used for fall lawn seeding.',
        },
        {
          type: 'image',
          src: '/guides/post-harvest/winter-rye-cover-crop.jpg',
          alt: 'Winter rye cover crop growing green in a bare vegetable garden bed in late fall',
          caption: 'Winter rye protects bare soil from erosion over winter while suppressing weeds until it\'s turned under in spring.',
        },
      ],
    },
    {
      id: 'seed-saving-considerations',
      title: 'Deciding What Seed to Save',
      blocks: [
        {
          type: 'p',
          text: 'Letting a few of your best-performing plants go fully to seed and collecting it extends the life of your favorite varieties indefinitely — provided they\'re open-pollinated, not hybrid, varieties.',
        },
        {
          type: 'list',
          items: [
            'Save seed only from open-pollinated or heirloom varieties — seed collected from F1 hybrids won\'t reliably reproduce the parent plant\'s traits the following year.',
            'Select your best-performing individual plants (most productive, most disease-resistant, best flavor) to save seed from, not just whichever plant happens to still have seed available.',
            'Isolate cross-pollinating crops (many squash, corn) from other varieties of the same species if seed purity matters, since they readily cross with nearby relatives.',
            'Label saved seed clearly with variety name and year — seed viability and identification both degrade fast without good records.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'See the site\'s Seed Saving guide for the full crop-by-crop mechanics — proper drying, cleaning, and storage technique varies significantly between a wet-processed tomato seed and a dry bean pod, and getting this right is what actually determines next season\'s germination rate.',
        },
        {
          type: 'image',
          src: '/guides/post-harvest/dried-bean-seeds-jar.jpg',
          alt: 'Dried heirloom bean seeds being collected into a labeled glass jar for storage',
          caption: 'Saving seed from your best open-pollinated performers, labeled clearly, extends the life of favorite varieties indefinitely.',
        },
      ],
    },
  ],
};

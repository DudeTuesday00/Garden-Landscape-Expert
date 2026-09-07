export const coldFramesContent = {
  id: 'cold-frames',
  hero: {
    emoji: '🪟',
    title: 'Cold Frames & Season Extension',
    subtitle: 'Extend your growing season by four to six weeks in both spring and fall — with simple structures that cost almost nothing to build.',
  },
  intro: 'A cold frame is one of the most practical investments a vegetable gardener can make: a simple bottomless box with a transparent lid traps solar heat, raises soil temperature, and protects plants from frost — often enough to grow salad greens through winter in Zones 6 and warmer. Cold frames can be built from scrap lumber and an old storm window for under twenty dollars, or purchased as ready-made kits. Beyond cold frames, season extension encompasses row cover fabric, low tunnels made from wire hoops and floating row cover, and full hoop houses — each offering progressively more warmth and weather protection for progressively more investment.',
  sections: [
    {
      id: 'construction-and-sizing',
      title: 'Cold Frame Construction and Sizing',
      blocks: [
        {
          type: 'p',
          text: 'A cold frame doesn\'t need to be elaborate to work well — the basic design (a bottomless box with a transparent, hinged lid) has stayed essentially unchanged for generations because it\'s simple and effective.',
        },
        {
          type: 'list',
          items: [
            'Build the back wall taller than the front — a sloped lid sheds rain and snow while angling toward the sun for maximum solar gain, typically a 10-15 degree slope.',
            'Use an old storm window, greenhouse polycarbonate panel, or heavy-duty plastic sheeting stretched over a frame as the transparent lid.',
            'Size the box to match your actual planting plans — a 3-by-6-foot frame is a common, manageable size for a home garden, but any size that fits your space works.',
            'Insulate the frame\'s walls (straw bales stacked against the outside, foam board) for significantly better cold-night performance in harsher climates.',
            'A hinged lid, rather than a lid that must be fully removed, makes daily venting dramatically more practical.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔨',
          text: 'A cold frame built from scrap lumber and a salvaged storm window can cost under twenty dollars and still perform as well as a purchased kit costing many times more — the design is simple enough that materials matter more than craftsmanship.',
        },
        {
          type: 'image',
          src: '/guides/cold-frames/wooden-cold-frame-garden.jpg',
          alt: 'A simple wooden cold frame with a sloped glass lid in a vegetable garden',
          caption: 'A basic cold frame — a bottomless box with a sloped, transparent lid — has stayed largely unchanged for generations because the simple design works.',
        },
      ],
    },
    {
      id: 'siting-and-ventilation',
      title: 'Siting for Solar Gain and the Critical Role of Ventilation',
      blocks: [
        {
          type: 'p',
          text: 'The most important principle of season extension is ventilation — a cold frame in direct March sun can overheat to seedling-killing temperatures within an hour if not propped open, even when outdoor air temperature is still near freezing.',
        },
        {
          type: 'list',
          items: [
            'Site the cold frame facing south (or the most sun-exposed direction available) for maximum solar gain through the coldest months.',
            'Position it against a south-facing wall or fence where practical — the structure adds thermal mass and wind protection.',
            'Check and vent the frame daily on sunny days, even in winter — prop the lid open a few inches once interior temperature climbs, and close it again as afternoon temperatures drop.',
            'Consider an automatic vent opener (a wax-cylinder or bimetal-strip device that opens the lid automatically past a set temperature) for anyone who can\'t check the frame daily.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'More cold frame crops are lost to overheating on a sunny day than to frost on a cold night — the enclosed space traps heat far more effectively than most gardeners expect, and even a 20°F outdoor day can produce dangerously high interior temperatures by midday.',
        },
        {
          type: 'image',
          src: '/guides/cold-frames/propped-open-lid-venting.jpg',
          alt: 'A cold frame lid propped open with a stick to vent excess heat on a sunny day',
          caption: 'Daily venting on sunny days prevents a cold frame from overheating, even when outdoor temperatures are still near freezing.',
        },
      ],
    },
    {
      id: 'crop-selection',
      title: 'Crop Selection by Protection Level Needed',
      blocks: [
        {
          type: 'p',
          text: 'Cold frames work best for cool-season crops that already tolerate some cold — they extend the range of a crop\'s natural tolerance rather than making a genuinely tender plant frost-hardy.',
        },
        {
          type: 'table',
          headers: ['Crop', 'Cold Tolerance', 'Best Use in a Cold Frame'],
          rows: [
            ['Lettuce, spinach, arugula, mache', 'High', 'Reliable winter growth in Zones 6+ with a cold frame; slower growth but continuous harvest'],
            ['Kale, collards', 'Very high', 'Some varieties survive with minimal protection even outside a frame, but a cold frame speeds growth significantly'],
            ['Radishes', 'High', 'Fast-maturing, ideal for filling a cold frame between other plantings'],
            ['Scallions (overwintered)', 'High', 'Plant in fall for an extra-early spring harvest'],
            ['Carrots (overwintered)', 'Moderate-high', 'Sweeten with cold exposure; can be left in the ground under a frame and harvested through winter in milder zones'],
            ['Seedlings started indoors', 'Varies by species', 'A cold frame is the ideal hardening-off environment before transplanting to the open garden'],
          ],
        },
        {
          type: 'tip',
          emoji: '🥬',
          text: 'A cold frame doesn\'t need to hold the same crop all season — succession planting quick crops like radishes and lettuce keeps the space productive throughout fall, winter, and early spring.',
        },
        {
          type: 'image',
          src: '/guides/cold-frames/lettuce-spinach-winter-frame.jpg',
          alt: 'Fresh lettuce and spinach growing inside an open cold frame in winter',
          caption: 'Cool-season greens like lettuce and spinach can grow through winter in Zones 6+ with a cold frame\'s protection.',
        },
      ],
    },
    {
      id: 'hoop-houses-and-row-cover',
      title: 'Row Cover, Low Tunnels, and Hoop House Basics',
      blocks: [
        {
          type: 'p',
          text: 'Beyond a fixed cold frame, several other season-extension tools offer different tradeoffs between protection level, flexibility, and cost — useful for larger plantings a cold frame can\'t cover.',
        },
        {
          type: 'table',
          headers: ['Structure', 'Protection Level', 'Best For', 'Relative Cost'],
          rows: [
            ['Floating row cover (fabric only, no structure)', 'Light — a few degrees of frost protection', 'Draped directly over rows for quick, flexible protection', 'Very low'],
            ['Low tunnels (wire hoops + row cover or plastic)', 'Moderate', 'Extending a fabric row cover\'s protection with a taller, more consistent air gap over plants', 'Low'],
            ['Cold frame', 'Moderate-high', 'A fixed location, smaller area, easy daily access', 'Low-moderate'],
            ['Hoop house (walk-in, unheated)', 'High', 'Larger plantings, season-long extension across a bigger footprint', 'Moderate-high'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌾',
          text: 'A hoop house extends the same core principle as a cold frame — trapping solar heat under a transparent barrier — just at a scale that covers rows rather than a single box, making it the natural next step for a gardener whose cold frame season-extension has outgrown its footprint.',
        },
        {
          type: 'image',
          src: '/guides/cold-frames/low-tunnel-hoops-row-cover.jpg',
          alt: 'Wire hoops covered with white floating row cover forming a low tunnel over a garden row',
          caption: 'Low tunnels made from wire hoops and row cover extend season-extension protection across larger plantings than a cold frame can cover.',
        },
      ],
    },
    {
      id: 'timing-by-zone',
      title: 'Timing Plantings for Each Structure and Zone',
      blocks: [
        {
          type: 'p',
          text: 'Season extension timing is best understood relative to your zone\'s frost dates, not fixed calendar dates — a cold frame typically buys four to six weeks on both ends of the growing season, regardless of which specific dates that translates to locally.',
        },
        {
          type: 'list',
          items: [
            'Fall planting: sow cool-season crops in a cold frame roughly 4-6 weeks before your first fall frost date, so they\'re established before growth slows in shorter, cooler days.',
            'Winter harvest: in Zones 6 and warmer, many cold-hardy greens can be harvested intermittently through winter from a cold frame, though growth slows dramatically as day length shortens.',
            'Spring planting: start cool-season crops in a cold frame 4-6 weeks before your last spring frost date — well ahead of when the same crop could be direct-sown in open ground.',
            'Hardening off: move indoor-started seedlings to the cold frame roughly 7-10 days before their final transplant date, propping the lid open progressively longer each day to acclimate them to outdoor conditions.',
          ],
        },
        {
          type: 'tip',
          emoji: '📅',
          text: 'Check the site\'s Zone Finder and Garden Planting Calendar tools for your specific frost dates, then apply the 4-6 week cold frame extension window on either end — the same underlying frost-date math the rest of the site\'s planting tools already use.',
        },
        {
          type: 'image',
          src: '/guides/cold-frames/hardening-off-seedlings.jpg',
          alt: 'Young seedling trays being hardened off inside an open cold frame before transplanting',
          caption: 'A cold frame is an ideal hardening-off environment, gradually acclimating indoor-started seedlings to outdoor conditions before transplanting.',
        },
      ],
    },
  ],
};

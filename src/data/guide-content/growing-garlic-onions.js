export const growingGarlicOnionsContent = {
  id: 'growing-garlic-onions',
  hero: {
    emoji: '🧄',
    title: 'Growing Garlic and Onions',
    subtitle: 'The two easiest storage crops in the garden — when to plant each, how day length decides your onion variety, and how to harvest and cure them.',
  },
  intro: 'Garlic and onions are rewarding, space-efficient crops that store for months, and they share a family, the alliums, and many needs. Their timing is where gardeners go wrong. Garlic is planted in fall and harvested the following summer, while onions are sown or set out in spring, and choosing the wrong onion variety for your latitude can mean bulbs that never form properly. This guide covers both crops: types, planting, care, and the harvest and curing that make them keep. The site\'s Fall Planting Guide covers the fall garlic timing window and mulching in brief; this guide goes deeper on both crops.',
  sections: [
    {
      id: 'garlic-types',
      title: 'Garlic: Types and Planting',
      blocks: [
        {
          type: 'p',
          text: 'Garlic is grown from cloves, not seed, and it does best when planted in fall so it can establish roots and get the cold period it needs to form a proper bulb.',
        },
        {
          type: 'table',
          headers: ['Type', 'Best Climate', 'Character'],
          rows: [
            ['Hardneck', 'Colder regions, where winters are cold enough', 'Sends up a flower stalk called a scape; often a bolder, more complex flavor; generally shorter storage life'],
            ['Softneck', 'Milder climates, and the type usually sold in stores', 'No hard central stalk; generally stores longer and is easier to braid'],
          ],
        },
        {
          type: 'list',
          items: [
            'Buy seed garlic from a garden supplier rather than grocery bulbs, which may be treated or poorly suited to your climate.',
            'Plant several weeks before the ground freezes solid, commonly cited as roughly October to early November in many temperate regions, so roots form before winter.',
            'Break bulbs into individual cloves shortly before planting, keeping the papery wrapper on each clove.',
            'Plant cloves pointed end up, roughly 2 inches deep and 4-6 inches apart, in loose, well-drained soil amended with compost.',
            'Mulch with a few inches of straw after planting, and pull it back in spring as shoots emerge.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌸',
          text: 'Hardneck garlic sends up curling flower stalks called scapes in early summer. Cut them off so the plant puts its energy into the bulb, and use them in cooking, since they have a mild garlic flavor.',
        },
        {
          type: 'image',
          src: '/guides/growing-garlic-onions/garlic-cloves-planting-row.jpg',
          alt: 'Individual garlic cloves lined up pointed end up on loose dark soil while a hand sets the next one in place',
          caption: 'Set garlic cloves pointed end up in a row, then push each about 2 inches deep and cover with soil.',
        },
      ],
    },
    {
      id: 'onion-day-length',
      title: 'Onions: Day Length Decides the Variety',
      blocks: [
        {
          type: 'p',
          text: 'Onions form bulbs in response to day length, so the right variety depends on your latitude. Choosing the wrong type is the most common reason onions stay small or never form bulbs.',
        },
        {
          type: 'table',
          headers: ['Type', 'Where It Suits', 'Bulbs Form When'],
          rows: [
            ['Long-day', 'Northern regions, generally above roughly 35-36° north latitude', 'Days reach about 14-16 hours of daylight'],
            ['Short-day', 'Southern regions, generally below roughly 32° north', 'Days reach about 10-12 hours of daylight'],
            ['Intermediate or day-neutral', 'Middle latitudes, and a forgiving choice elsewhere', 'Days reach about 12-14 hours of daylight'],
          ],
        },
        {
          type: 'list',
          items: [
            'Onions can be started from seeds, transplants, or small dry bulbs called sets. Seeds give the widest choice of varieties, transplants are convenient, and sets are the easiest for beginners.',
            'Start seeds indoors roughly 8-10 weeks before transplanting, and set out plants or sets in early spring as soon as the soil can be worked, since onions tolerate light frost.',
            'Space plants roughly 4 inches apart in rows, or closer if you will harvest some as green onions.',
            'Onions are shallow-rooted, so keep them well weeded and steadily watered, and feed with a nitrogen-rich fertilizer early in the season.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Match the variety to your latitude before you buy. A long-day onion grown in the far South, or a short-day onion grown in the far North, will usually not produce good bulbs no matter how well you care for it.',
        },
        {
          type: 'image',
          src: '/guides/growing-garlic-onions/onion-seedlings-transplanted.jpg',
          alt: 'Rows of young green onion seedlings planted a few inches apart in a garden bed',
          caption: 'Onions are set out in early spring and spaced a few inches apart.',
        },
      ],
    },
    {
      id: 'care',
      title: 'Care Through the Season',
      blocks: [
        {
          type: 'p',
          text: 'Alliums are low-maintenance, but they are poor competitors, so weeds and dry spells cost real yield.',
        },
        {
          type: 'list',
          items: [
            'Water regularly, roughly an inch a week, especially while bulbs are sizing up, and mulch to suppress weeds and hold moisture.',
            'Weed gently by hand or with a shallow hoe, since shallow roots are easily damaged.',
            'Stop feeding nitrogen as bulbs begin to swell, since late nitrogen can delay maturity and reduce storage life.',
            'Stop watering as the tops begin to yellow and fall over, so bulbs finish maturing and dry down properly.',
          ],
        },
        {
          type: 'table',
          headers: ['Problem', 'Signs', 'Response'],
          rows: [
            ['Onion thrips', 'Silvery streaks and distorted leaf tips from tiny insects', 'Keep plants watered, use reflective mulch or insecticidal soap, and see Organic Pest Control'],
            ['Onion maggots', 'Wilting plants with maggots in the bulb base', 'Row cover, and rotate away from alliums for several years'],
            ['Rust and white rot', 'Orange pustules on leaves, or fluffy white growth on the bulb base', 'Rotate crops, use clean seed garlic, and remove infected plants; white rot persists in soil for years'],
            ['Bolting', 'A flower stalk forms and the bulb stops growing', 'Usually caused by cold snaps or the wrong variety; use the flowered onions first'],
          ],
        },
        {
          type: 'tip',
          emoji: '🔄',
          text: 'Do not plant alliums where garlic, onions, leeks, or shallots grew in recent years. White rot can survive in the soil for many years once it is established, so rotation and clean planting stock matter.',
        },
        {
          type: 'image',
          src: '/guides/growing-garlic-onions/mulched-garlic-bed-spring.jpg',
          alt: 'A bed of green garlic shoots emerging through a layer of golden straw mulch in spring',
          caption: 'Straw mulch protects garlic through winter and suppresses weeds in spring.',
        },
      ],
    },
    {
      id: 'harvest-and-curing',
      title: 'Harvesting and Curing',
      blocks: [
        {
          type: 'p',
          text: 'Timing the harvest and curing properly is what turns a fresh bulb into one that stores for months. Both crops are cured the same basic way.',
        },
        {
          type: 'list',
          items: [
            'Harvest garlic in early to mid-summer when the lower leaves have turned brown but several green leaves remain. Each remaining green leaf corresponds to a bulb wrapper, so waiting too long lets the wrappers split and reduces storage life.',
            'Harvest onions when about half or more of the tops have fallen over and yellowed. Loosen the soil with a fork and lift the bulbs rather than pulling them by the tops.',
            'Cure both by laying or hanging them in a warm, dry, well-ventilated place out of direct sun for roughly two to four weeks, until the necks are dry and tight and the outer skins rustle.',
            'Once cured, trim the roots and cut the tops to an inch or two for onions and garlic, or braid softneck varieties by their tops.',
            'Store in a cool, dry, ventilated place. Onions commonly keep for several months, and softneck garlic often keeps longest. Bulbs with thick necks or damage should be used first, since they store poorly.',
            'Save a few of your largest, best garlic bulbs to replant in fall, since garlic adapts to your garden over the years.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧅',
          text: 'Mesh bags, old stockings, and hanging braids all work well for storage, as long as air can move around the bulbs. Keep them dry, since moisture invites rot.',
        },
        {
          type: 'image',
          src: '/guides/growing-garlic-onions/harvested-onions-tops-fallen.jpg',
          alt: 'Freshly lifted onions with yellowing green tops lying on dry soil in a garden bed',
          caption: 'Onions are ready to lift once about half or more of the tops have fallen over and yellowed.',
        },
        {
          type: 'image',
          src: '/guides/growing-garlic-onions/garlic-bulbs-curing-hanging.jpg',
          alt: 'Bundles of harvested garlic bulbs with long stems hanging to dry from a rafter in a well-ventilated shed',
          caption: 'Cure garlic and onions in a warm, airy place out of the sun for a few weeks.',
        },
      ],
    },
  ],
}

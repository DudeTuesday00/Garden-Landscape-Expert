export const growingBerriesContent = {
  id: 'growing-berries',
  hero: {
    emoji: '🫐',
    title: 'Growing Berries: Strawberries, Blueberries & Brambles',
    subtitle: 'Small fruit for a small footprint — the specific soil, pruning, and pollination needs that make backyard berries productive for years.',
  },
  intro: 'Berries occupy a category of their own — smaller and faster to bear than fruit trees, but with soil and pruning requirements specific enough that treating them like any other perennial leads to disappointing results. Blueberries fail in ordinary garden soil not from neglect but from pH alone; raspberries and blackberries need pruning timed to whether they fruit on old or new growth; strawberries need a planting system chosen around how the variety actually produces. This guide covers the three most commonly grown home-garden berries — for tree fruit, see the site\'s Fruit Trees guide, which covers an entirely different plant category with its own needs.',
  sections: [
    {
      id: 'strawberries',
      title: 'Strawberries',
      blocks: [
        {
          type: 'p',
          text: 'Strawberries are the fastest-bearing berry — a spring planting can produce a modest harvest the same year — but the right planting system depends entirely on which of the three fruiting types you\'re growing.',
        },
        {
          type: 'table',
          headers: ['Type', 'Fruiting Pattern', 'Best Planting System'],
          rows: [
            ['June-bearing', 'One large, concentrated harvest in early summer', 'Matted row — allow runners to fill in around the mother plants for maximum total yield'],
            ['Everbearing', 'Two to three smaller harvests across spring, summer, and fall', 'Hill system — remove runners to redirect energy into the mother plant and multiple harvest flushes'],
            ['Day-neutral', 'Continuous smaller harvests all season regardless of day length', 'Hill system, same as everbearing — most productive per plant over a full season'],
          ],
        },
        {
          type: 'list',
          items: [
            'Plant with the crown (where roots meet leaves) exactly at soil level — buried too deep and the crown rots, planted too high and the roots dry out and the plant fails to establish.',
            'Pinch off the first season\'s flowers on June-bearing types planted in spring, sacrificing that year\'s harvest to force the plant\'s energy into root and runner establishment for a much stronger crop the following year.',
            'Replace a strawberry patch every 3-4 years — productivity declines noticeably after that as the patch becomes overcrowded and more disease-prone.',
          ],
        },
        {
          type: 'tip',
          emoji: '🍓',
          text: 'Straw mulch (the origin of the plant\'s name) keeps developing berries off bare soil, preventing rot and slug damage, while also suppressing weeds and moderating soil moisture — an old practice that\'s still simply the right one.',
        },
        {
          type: 'image',
          src: '/guides/growing-berries/strawberry-runners-matted-row.jpg',
          alt: 'A strawberry patch with runners spreading to fill in a matted row planting system',
          caption: 'June-bearing strawberries are typically grown in a matted row, letting runners fill in around the mother plants for maximum yield.',
        },
      ],
    },
    {
      id: 'blueberries',
      title: 'Blueberries',
      blocks: [
        {
          type: 'p',
          text: 'Blueberries fail more often from soil pH than from any other cause — they require genuinely acidic soil (pH 4.5-5.5) that most garden soil simply doesn\'t have without deliberate, ongoing amendment.',
        },
        {
          type: 'list',
          items: [
            'Test soil pH before planting — see the site\'s Soil Health guide for testing methodology — and amend with elemental sulfur well ahead of planting if the soil isn\'t already acidic, since pH change happens slowly over months, not days.',
            'Plant two different varieties for cross-pollination even on species described as self-fertile — cross-pollinated plants consistently produce larger berries and heavier yields than a single variety alone.',
            'Use an acidic mulch (pine bark, pine needles) rather than a neutral or alkaline one, which helps maintain the pH the plant needs over time rather than working against it.',
            'Expect a slow start — blueberries take 2-3 years to reach significant production and can bear for decades once established, making them a genuine long-term investment rather than a quick payoff.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Blueberries planted in ordinary unamended garden soil (typically pH 6.0-7.0) will survive but chronically underperform — yellowing leaves with green veins (iron chlorosis) is the classic symptom of blueberries struggling in soil that isn\'t acidic enough, not a nutrient deficiency to be fed away.',
        },
        {
          type: 'image',
          src: '/guides/growing-berries/blueberry-bushes-ripening.jpg',
          alt: 'Blueberry bushes with clusters of ripening berries in an acidic soil garden bed with pine bark mulch',
          caption: 'Blueberries require genuinely acidic soil — most chronic underperformance traces back to pH, not neglect.',
        },
      ],
    },
    {
      id: 'brambles',
      title: 'Raspberries and Blackberries',
      blocks: [
        {
          type: 'p',
          text: 'Raspberries and blackberries — collectively called brambles — are among the most productive backyard fruits per square foot, but pruning them correctly depends on knowing whether a variety fruits on this year\'s new growth or last year\'s canes.',
        },
        {
          type: 'table',
          headers: ['Bearing Type', 'Fruits On', 'Pruning Approach'],
          rows: [
            ['Summer-bearing (floricane)', 'Second-year canes (floricanes)', 'Remove spent canes immediately after harvest; leave first-year canes (primocanes) standing to fruit the following summer'],
            ['Fall-bearing (primocane)', 'First-year canes, in the fall of their first year', 'Cut all canes to the ground in late winter for a single strong fall crop, or leave some standing for a smaller early-summer crop plus a fall crop'],
            ['Blackberries (most varieties)', 'Second-year canes, like summer-bearing raspberries', 'Same removal timing as summer-bearing raspberries — cut spent floricanes after harvest'],
          ],
        },
        {
          type: 'list',
          items: [
            'Install a trellis (a simple two-wire system between posts works well) at planting time — brambles sprawl without support, making harvest difficult and increasing disease from foliage sitting on wet ground.',
            'Thin canes to 4-6 inches apart along the row each dormant season — overcrowded canes reduce air circulation and fruit quality.',
            'Contain spreading varieties (especially black and red raspberries, which spread readily by root suckers) with a buried root barrier or diligent removal of suckers outside the intended row.',
          ],
        },
        {
          type: 'tip',
          emoji: '✂️',
          text: 'Getting summer-bearing versus fall-bearing pruning backwards is the single most common bramble mistake — cutting all canes to the ground on a summer-bearing variety eliminates the entire next harvest, since that crop was going to come from the canes just removed.',
        },
        {
          type: 'image',
          src: '/guides/growing-berries/raspberry-canes-trellis.jpg',
          alt: 'Raspberry canes trained along a simple wire trellis system in a garden row',
          caption: 'A trellis keeps sprawling bramble canes off wet ground, improving air circulation and making harvest far easier.',
        },
      ],
    },
    {
      id: 'site-and-soil-prep',
      title: 'Site Selection and Soil Preparation',
      blocks: [
        {
          type: 'p',
          text: 'All three berry types share a few baseline site requirements, though blueberries in particular have the added, non-negotiable pH need covered above.',
        },
        {
          type: 'list',
          items: [
            'Full sun (6+ hours) produces the best yields for all three berry types — some fruiting and flavor development happens even in partial shade, but it\'s a real tradeoff, not a minor one.',
            'Good drainage matters across all berries — blueberries and brambles in particular are prone to root rot in soil that stays waterlogged.',
            'Work in several inches of compost before planting any of these — unlike blueberries\' pH need, this general soil-building step benefits strawberries and brambles just as much.',
            'Give brambles and blueberries room — both spread over time (brambles by suckers, blueberries by simply growing into large mature shrubs) and are genuinely difficult to relocate once established.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌞',
          text: 'Choose berry planting sites with next year and the year after in mind, not just this season — all three of these are multi-year (blueberries, decades-long) investments in a specific spot, unlike an annual vegetable bed that gets rethought every year.',
        },
        {
          type: 'image',
          src: '/guides/growing-berries/full-sun-berry-planting-site.jpg',
          alt: 'A sunny garden site being prepared with compost for planting berry bushes',
          caption: 'Full sun and good drainage benefit all three berry types — blueberries additionally require the specific acidic soil covered above.',
        },
      ],
    },
    {
      id: 'harvest-and-care',
      title: 'Ongoing Care and Harvest',
      blocks: [
        {
          type: 'p',
          text: 'Once established, berries need relatively modest seasonal care — the main recurring efforts are protecting the crop from birds and staying ahead of a small set of common pests.',
        },
        {
          type: 'list',
          items: [
            'Netting is close to essential for all three berry types — birds routinely take the majority of an unprotected berry crop, often the day before it would otherwise have been picked.',
            'Mulch all three types annually — it conserves moisture, suppresses weeds, and for blueberries specifically helps maintain the acidic soil pH they need.',
            'Harvest strawberries and brambles when fully colored, since none of these berries continue ripening after picking (unlike some fruits); blueberries benefit from a few extra days on the bush after they turn blue, as sweetness continues developing briefly.',
            'Watch for Japanese beetles on brambles and spotted wing drosophila on all three — see the site\'s Organic Pest Control guide for identification and treatment of both.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Spotted wing drosophila, unlike most fruit flies, can lay eggs in still-ripening fruit, not just overripe or damaged fruit — by the time damage is visible, larvae are typically already present, making prompt, complete harvest of ripe fruit (rather than letting any linger on the plant) one of the most effective non-chemical controls.',
        },
        {
          type: 'image',
          src: '/guides/growing-berries/bird-netting-berry-bushes.jpg',
          alt: 'Protective bird netting draped over ripening berry bushes in a home garden',
          caption: 'Netting is close to essential across all three berry types — birds routinely take the majority of an unprotected crop.',
        },
      ],
    },
  ],
};

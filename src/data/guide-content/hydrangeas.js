export const hydrangeasContent = {
  id: 'hydrangeas',
  hero: {
    emoji: '💠',
    title: 'Hydrangeas: Choosing, Growing, and Pruning',
    subtitle: 'The five types that matter, which one suits your climate and light, how to change flower color, and the pruning-timing rule that decides whether they bloom.',
  },
  intro: 'Hydrangeas are among the most popular flowering shrubs in North America, and also among the most frustrating for gardeners who plant the wrong type or prune at the wrong time. The name covers several very different plants: some are cold-hardy and bloom on new growth, some bloom on last year\'s stems and lose their flowers to a hard winter or a wrong-season cut, and only one group changes color with soil chemistry. This guide sorts out the main types, what each needs, how to grow them well, and the pruning mistakes that cost you a season. For the general pruning principles, see the site\'s Pruning Basics guide, and for pet safety, Pet-Friendly Plants.',
  sections: [
    {
      id: 'types',
      title: 'The Main Types',
      blocks: [
        {
          type: 'p',
          text: 'Choosing the right type for your climate is the most important decision. Hardiness and the kind of wood the flowers grow on both vary widely between them.',
        },
        {
          type: 'table',
          headers: ['Type', 'Approximate Hardiness', 'Blooms On', 'Notes'],
          rows: [
            ['Panicle', 'Zones 3-8', 'New wood', 'The most cold-hardy and sun-tolerant; cone-shaped white flowers that often age to pink; reliable bloom'],
            ['Smooth', 'Zones 3-9', 'New wood', 'Very hardy, native to eastern North America, with large white flower heads on stems that can flop under their weight'],
            ['Bigleaf (mophead and lacecap)', 'Zones 5-9', 'Old wood on most; some reblooming types also bloom on new wood', 'The classic blue and pink hydrangea; the type that changes color; buds are vulnerable to winter and late frost damage'],
            ['Oakleaf', 'Zones 5-9', 'Old wood', 'Native to the southeastern US, with oak-shaped leaves, cone-shaped flowers, peeling bark, and good red fall color'],
            ['Climbing', 'Zones 4-8', 'Old wood', 'A slow-starting woody vine that clings to walls and trees and blooms once established'],
          ],
        },
        {
          type: 'tip',
          emoji: '🧭',
          text: 'If you live in a cold climate and want reliable flowers, choose panicle or smooth hydrangeas. They bloom on the current season\'s growth, so a hard winter or an unlucky frost cannot wipe out the buds.',
        },
        {
          type: 'image',
          src: '/guides/hydrangeas/hydrangea-types-together.jpg',
          alt: 'A mix of hydrangea flower types including a blue mophead, a white cone-shaped panicle, and a white round smooth hydrangea',
          caption: 'Hydrangea types differ in flower shape, hardiness, and when they set buds.',
        },
      ],
    },
    {
      id: 'sun-soil-water',
      title: 'Sun, Soil, and Water',
      blocks: [
        {
          type: 'p',
          text: 'The name hydrangea comes from Greek words for water, and the plants live up to it. They dislike drought and struggle in poorly drained, soggy ground.',
        },
        {
          type: 'list',
          items: [
            'Most hydrangeas do best in morning sun with afternoon shade, especially in hot climates where full afternoon sun scorches leaves and wilts flowers. Panicle types tolerate much more sun than bigleaf and smooth types.',
            'Plant in rich, well-drained soil that holds moisture, amended with compost. Avoid sites where water stands.',
            'Water deeply and regularly during dry spells, especially the first two years. Hydrangeas may droop in afternoon heat and recover in the evening, but persistent wilting means they need water.',
            'Mulch with a few inches of shredded bark or leaves to conserve moisture and moderate soil temperature, keeping mulch off the stems.',
            'Give them room. Panicle and smooth types can grow to 6 feet or more, and spacing of roughly 3-6 feet is common, depending on the variety.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Feed lightly in spring with a balanced fertilizer or compost. Too much nitrogen produces big leaves and few flowers.',
        },
        {
          type: 'image',
          src: '/guides/hydrangeas/hydrangea-shady-border-mulch.jpg',
          alt: 'A large pink hydrangea shrub in bloom growing in a shaded garden border with dark mulch at its base',
          caption: 'Morning sun with afternoon shade and consistent moisture suit most hydrangeas.',
        },
      ],
    },
    {
      id: 'flower-color',
      title: 'Changing Flower Color',
      blocks: [
        {
          type: 'p',
          text: 'Only bigleaf hydrangeas, and a few closely related types, change color in response to soil chemistry. White hydrangeas, and the panicle, smooth, and oakleaf types, do not.',
        },
        {
          type: 'table',
          headers: ['Flower Color', 'Soil Conditions', 'How Growers Encourage It'],
          rows: [
            ['Blue', 'Acidic soil, roughly pH 5.2-5.5, where aluminum is available to the plant', 'Acidify soil gradually, commonly with aluminum sulfate or sulfur, following label directions'],
            ['Pink', 'Slightly acidic to alkaline soil, roughly pH 6.0-6.2 or higher, where aluminum is less available', 'Raise pH gradually with garden lime, following label directions'],
            ['Purple or mixed', 'In between, or uneven conditions', 'A natural result of soil that is neither clearly acidic nor clearly alkaline'],
          ],
        },
        {
          type: 'list',
          items: [
            'The color you see reflects what the roots have taken up, which can take a season or more to shift, so change happens slowly.',
            'Test the soil before adjusting it, since adding acidifiers or lime without knowing your starting pH can do more harm than good.',
            'Container-grown hydrangeas are the easiest to change, because the soil volume is small and controllable.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Do not over-apply aluminum sulfate or lime. Excess can burn roots and harm the plant. Apply in small amounts as directed, water it in well, and retest the soil rather than adding more on a hunch.',
        },
        {
          type: 'image',
          src: '/guides/hydrangeas/blue-and-pink-hydrangea-blooms.jpg',
          alt: 'Blue and pink hydrangea flower heads growing side by side on neighboring shrubs',
          caption: 'Bigleaf hydrangeas shift between blue and pink depending on soil acidity.',
        },
      ],
    },
    {
      id: 'pruning',
      title: 'Pruning: Getting the Timing Right',
      blocks: [
        {
          type: 'p',
          text: 'Wrong-season pruning is the most common reason a healthy hydrangea produces no flowers. The rule is the same as for other flowering shrubs: it depends on whether the plant blooms on old wood or new wood.',
        },
        {
          type: 'table',
          headers: ['Type', 'Blooms On', 'Prune When'],
          rows: [
            ['Panicle and smooth', 'New wood', 'Late winter or early spring, before new growth starts; can be cut back hard for bigger, sturdier stems, or lightly for a bigger, taller shrub'],
            ['Bigleaf (most)', 'Old wood', 'Right after flowering in summer, and only lightly; remove dead stems in spring once new growth shows'],
            ['Bigleaf (reblooming types)', 'Old and new wood', 'Light pruning after the first flush; they are more forgiving'],
            ['Oakleaf', 'Old wood', 'Right after flowering, and only lightly, shaping as needed'],
            ['Climbing', 'Old wood', 'Right after flowering, only as needed to control size'],
          ],
        },
        {
          type: 'list',
          items: [
            'When in doubt, prune very little. Hydrangeas rarely need heavy pruning, and removing dead stems and spent flower heads is often enough.',
            'Never do a hard fall or winter cut on bigleaf and oakleaf types. It removes the flower buds already formed for next year.',
            'Wait until spring to identify dead wood on bigleaf hydrangeas. Stems that leaf out from the base or along the stem are alive, even if the tips are dead.',
            'Leaving flower heads on through winter protects the buds below them and adds winter interest, and they can be trimmed off in spring.',
          ],
        },
        {
          type: 'tip',
          emoji: '✂️',
          text: 'See the site\'s Pruning Basics guide for the three basic cuts and the old-wood versus new-wood timing table that applies to all flowering shrubs, not only hydrangeas.',
        },
        {
          type: 'image',
          src: '/guides/hydrangeas/pruning-spent-hydrangea-stems.jpg',
          alt: 'A gardener using hand pruners to remove old dead flower heads from a hydrangea shrub in early spring',
          caption: 'Panicle and smooth types are pruned in late winter; bigleaf types only lightly, right after flowering.',
        },
      ],
    },
    {
      id: 'problems',
      title: 'Troubleshooting and Winter Care',
      blocks: [
        {
          type: 'p',
          text: 'A few problems account for most hydrangea complaints. Most are about buds, water, or light rather than pests or disease.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Likely Cause', 'Fix'],
          rows: [
            ['Healthy plant, no flowers', 'Wrong-season pruning, frost-killed buds on a bigleaf type, or too much shade', 'Check the pruning timing and light; consider a panicle or reblooming type in cold areas'],
            ['Wilting in afternoon heat', 'Heat and water demand, or too much afternoon sun', 'Water deeply and provide afternoon shade; wilting that lasts into the evening means it needs water'],
            ['Brown, crispy leaf edges', 'Sun scorch or drought stress', 'More shade and consistent watering'],
            ['Leaves with spots', 'Common fungal leaf spots, usually cosmetic', 'Improve airflow and avoid wetting foliage; see Common Garden Diseases'],
            ['Floppy stems on smooth types', 'Heavy flower heads on weak stems', 'Cut back harder in late winter or use a support ring'],
          ],
        },
        {
          type: 'list',
          items: [
            'In cold zones, protect bigleaf hydrangeas with a thick layer of mulch or leaves over the base in late fall, and remove it in spring after the last hard frost.',
            'Avoid fertilizing late in summer, since late growth is tender and can be killed by early frost.',
            'Hydrangeas contain compounds that can be toxic to pets and people if eaten in quantity, so plant with care where dogs or young children chew on plants.',
          ],
        },
        {
          type: 'image',
          src: '/guides/hydrangeas/hydrangea-winter-mulch-leaves.jpg',
          alt: 'A hydrangea shrub in late fall with bare stems and a thick layer of straw and leaves mulched around its base',
          caption: 'In cold zones, a thick layer of mulch over the base protects bigleaf hydrangeas through winter.',
        },
      ],
    },
  ],
}

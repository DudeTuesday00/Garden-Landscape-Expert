export const slugControlContent = {
  id: 'slug-control',
  hero: {
    emoji: '🐌',
    title: 'Slug & Snail Control',
    subtitle: 'Protect hostas, lettuce, strawberries, and seedlings from slug damage using methods that actually work — without harming pets or beneficial wildlife.',
  },
  intro: 'Slugs cause more heartbreak in cool, moist gardens than almost any other pest — a tray of healthy seedlings can be destroyed in a single night, and hostas that took years to establish can be reduced to lace by early summer. The key to slug control is understanding their biology: they are most active at night and during overcast, wet days, hiding under boards, pots, dense mulch, and plant debris during daylight. Control is most effective when it addresses both the active population and the habitat that shelters them. No single method eliminates slugs entirely, but combining two or three approaches consistently keeps damage at manageable levels in even the most slug-prone gardens.',
  sections: [
    {
      id: 'slug-biology',
      title: 'Understanding Slug and Snail Biology',
      blocks: [
        {
          type: 'p',
          text: 'Slugs and snails are both mollusks with nearly identical biology — a snail simply carries a shell it can retreat into, which makes it somewhat more resilient to drying out and predation. Both are most active at night and during humid, overcast conditions, and both slow down dramatically in dry heat and cold. Understanding this activity pattern is the foundation of effective control: most methods work by intercepting slugs during their nighttime feeding runs or by removing the daytime shelter they depend on to survive dry, sunny hours.',
        },
        {
          type: 'list',
          items: [
            'Slugs travel on a trail of mucus that leaves a telltale silvery sheen on soil and leaves — a reliable diagnostic sign even if you never see the slug itself.',
            'A single slug can lay dozens of eggs at a time in moist soil or under debris, several times per year, so an unmanaged population compounds quickly.',
            'Slugs can travel a surprising distance in a single night — a slug problem on one side of the yard can easily become a whole-garden problem within a season.',
            'Cool, wet spring and fall conditions are peak slug season in most climates; population pressure drops during hot, dry summer stretches.',
          ],
        },
        {
          type: 'tip',
          emoji: '🔦',
          text: 'A flashlight check an hour or two after dark, during or just after rain, is the single best way to confirm slugs (versus another pest) and see the actual size of the population you\'re dealing with.',
        },
      ],
    },
    {
      id: 'bait-options',
      title: 'Bait Options — What Actually Works',
      blocks: [
        {
          type: 'p',
          text: 'Not all slug baits are equal, and the difference matters for pet and wildlife safety, not just effectiveness.',
        },
        {
          type: 'table',
          headers: ['Bait Type', 'How It Works', 'Safety', 'Notes'],
          rows: [
            ['Iron phosphate (Sluggo, Escar-Go, and similar)', 'Slugs stop feeding within hours of ingesting it and die within several days, typically underground', 'Breaks down into iron and phosphate — safe around pets, birds, and wildlife', 'The gold standard for organic slug control; reapply after heavy rain'],
            ['Metaldehyde', 'Causes fatal dehydration in slugs', 'Highly toxic to dogs, cats, and wildlife if ingested — a leading cause of pet poisoning where used', 'Avoid in any garden with pets or where wildlife may scavenge bait'],
            ['Diatomaceous earth', 'Sharp microscopic particles damage the slug\'s soft underside on contact', 'Safe for pets and wildlife', 'Only works dry — reapply after every rain or irrigation; less effective in humid climates'],
            ['Copper barriers (tape or mesh)', 'Mild electrical reaction on contact deters slugs from crossing', 'Safe for pets and wildlife', 'Best for raised beds and containers where a continuous barrier is practical'],
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Never use metaldehyde-based bait in a garden visited by pets, and be cautious even with iron phosphate baits around dogs that eat indiscriminately — while far less toxic, ingesting a large quantity can still cause digestive upset. Place bait under a small cover (a tile or piece of board) to keep it accessible to slugs but out of easy reach of curious pets.',
        },
        {
          type: 'image',
          src: '/guides/slug-control/iron-phosphate-bait.jpg',
          alt: 'Small blue-green iron phosphate slug bait pellets scattered on dark garden soil near seedlings',
          caption: 'Iron phosphate bait is the pet-safe gold standard for organic slug control.',
        },
      ],
    },
    {
      id: 'traps',
      title: 'Traps — Low-Cost and Reusable',
      blocks: [
        {
          type: 'h3',
          text: 'Beer Traps',
        },
        {
          type: 'p',
          text: 'A shallow container sunk into the soil so its rim sits at ground level, filled with beer, attracts slugs with the yeast scent and drowns them. Beer traps work but require daily emptying and refilling to stay effective, and a poorly placed trap can actually draw slugs toward a bed from a wider area — place traps at the bed perimeter, not scattered through the middle of vulnerable plants.',
        },
        {
          type: 'h3',
          text: 'Board and Trap Boards',
        },
        {
          type: 'p',
          text: 'A simple board, piece of cardboard, or overturned flower pot placed in the garden gives slugs a dark, moist daytime hiding spot — check underneath each morning and remove any slugs found by hand. This method works especially well combined with habitat reduction elsewhere in the garden, since a well-placed trap board becomes the shelter of choice once other hiding spots are removed.',
        },
        {
          type: 'tip',
          emoji: '🍺',
          text: 'A sunken container of water mixed with a small amount of sugar and yeast is a longer-lasting, cheaper alternative to beer that works through the same mechanism.',
        },
        {
          type: 'image',
          src: '/guides/slug-control/beer-trap.jpg',
          alt: 'A shallow container sunk into garden soil at ground level as a beer trap for slugs',
          caption: 'A beer trap sunk flush with the soil surface lures and drowns slugs — but needs daily emptying to stay effective.',
        },
      ],
    },
    {
      id: 'habitat-reduction',
      title: 'Habitat Reduction — The Long-Term Fix',
      blocks: [
        {
          type: 'p',
          text: 'Bait and traps manage an existing population, but reducing the shelter slugs depend on during the day addresses the underlying reason a garden stays slug-prone season after season.',
        },
        {
          type: 'list',
          items: [
            'Clear dense mulch, boards, pots, and plant debris away from the base of highly vulnerable plants (hostas, lettuce, strawberries, seedlings) — mulch elsewhere in the garden can stay, since some habitat reduction is more practical than total elimination.',
            'Water in the morning rather than the evening — slugs are most active on wet nights, so morning watering lets the soil surface dry out before dark.',
            'Space plants for airflow; dense, low foliage that stays damp all day is prime slug habitat.',
            'Keep garden edges and adjacent lawn mowed and free of tall, damp vegetation that provides a staging area for slugs to move into beds.',
            'Remove spent, decaying plant material promptly rather than letting it accumulate at soil level.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌤️',
          text: 'Habitat reduction alone rarely solves a serious slug problem overnight, but a garden that\'s been consistently decluttered of daytime shelter for a full season typically needs far less bait and trapping the following year.',
        },
        {
          type: 'image',
          src: '/guides/slug-control/hosta-damage.jpg',
          alt: 'Hosta leaves with visible slug damage holes, close-up in a garden bed',
          caption: 'Hostas are among the most slug-vulnerable plants — reducing daytime shelter nearby cuts damage significantly over a season.',
        },
      ],
    },
    {
      id: 'natural-predators',
      title: 'Encouraging Natural Predators',
      blocks: [
        {
          type: 'p',
          text: 'A garden with an established population of slug predators needs far less active intervention. Several common garden visitors eat slugs and snails as a regular part of their diet.',
        },
        {
          type: 'table',
          headers: ['Predator', 'How to Encourage It'],
          rows: [
            ['Ground beetles', 'Leave some undisturbed mulch and avoid tilling — ground beetles need daytime shelter and are killed by broad-spectrum pesticides'],
            ['Toads', 'Provide a shallow water dish and some low, damp shelter (a broken pot on its side); avoid pesticides toxic to amphibians'],
            ['Songbirds', 'Bird feeders and brush piles near the garden bring in birds that also forage for slugs and their eggs'],
            ['Garter snakes (where present)', 'Leave brush or rock piles at the garden edge as habitat; avoid killing snakes encountered in the garden'],
            ['Ducks and chickens (if kept)', 'Free-ranging poultry are highly effective slug predators, though they will also eat seedlings and need to be excluded from vulnerable young plantings'],
          ],
        },
        {
          type: 'tip',
          emoji: '🐸',
          text: 'Avoiding metaldehyde bait matters here too — a toad or bird that eats a poisoned slug can be poisoned itself, undermining the very predator population you\'re trying to build.',
        },
        {
          type: 'image',
          src: '/guides/slug-control/toad-garden-habitat.jpg',
          alt: 'A small garden toad sheltering near a shallow water dish and damp mulch in a garden bed',
          caption: 'A shallow water dish and low, damp shelter encourage toads — one of the most effective natural slug predators.',
        },
      ],
    },
    {
      id: 'vulnerable-plants',
      title: 'Most and Least Vulnerable Plants',
      blocks: [
        {
          type: 'p',
          text: 'Slug damage isn\'t evenly distributed — some plants are reliable slug magnets, while others are rarely touched. Knowing which is which helps you focus protection where it actually matters.',
        },
        {
          type: 'table',
          headers: ['Vulnerability', 'Plants'],
          rows: [
            ['High — protect proactively', 'Hostas, lettuce and other tender greens, strawberries, seedlings of nearly any species, dahlias, delphiniums, marigolds'],
            ['Moderate — monitor', 'Beans, cabbage family, basil, zinnias'],
            ['Low — rarely bothered', 'Herbs with strong scent or fuzzy leaves (lavender, rosemary, sage), most ornamental grasses, plants with tough or leathery leaves (many succulents, most conifers)'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'Seedlings of almost any species are far more vulnerable than the same plant once it matures — concentrate bait, traps, and barriers around the seed-starting and transplant stage, and you can often ease off once plants are established.',
        },
        {
          type: 'image',
          src: '/guides/slug-control/lettuce-seedlings.jpg',
          alt: 'Healthy young lettuce seedlings growing in dark garden soil',
          caption: 'Seedlings of nearly any species are highly vulnerable to slug damage — concentrate protection here during the transplant stage.',
        },
      ],
    },
  ],
}

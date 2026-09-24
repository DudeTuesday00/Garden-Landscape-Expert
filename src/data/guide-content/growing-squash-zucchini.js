export const growingSquashZucchiniContent = {
  id: 'growing-squash-zucchini',
  hero: {
    emoji: '🎃',
    title: 'Growing Squash and Zucchini',
    subtitle: 'Summer and winter squash from planting to storage — pollination, the pests that wreck vines, when to harvest, and how to cure squash so it keeps.',
  },
  intro: 'Squash is one of the most productive crops a home garden can grow — a couple of zucchini plants can feed a household and its neighbors — but it has its own quirks. Flowers open as separate males and females, a single borer can kill a healthy vine overnight, and winter squash must be cured properly to keep for months. This guide covers the difference between summer and winter types, planting, pollination, the main pests and diseases, and harvest and storage. For the traditional squash companions, see the site\'s Three Sisters Garden guide; for pest detail this guide only summarizes, see Organic Pest Control and Common Garden Diseases.',
  sections: [
    {
      id: 'summer-vs-winter',
      title: 'Summer Squash Versus Winter Squash',
      blocks: [
        {
          type: 'p',
          text: 'The names describe when the fruit is eaten, not when it grows. Both types are warm-season crops planted after frost, but they are harvested at very different stages.',
        },
        {
          type: 'table',
          headers: ['Type', 'Examples', 'Harvested', 'Storage'],
          rows: [
            ['Summer squash', 'Zucchini, yellow crookneck, pattypan', 'Young, while the rind is soft and edible', 'A few days to a week in the refrigerator'],
            ['Winter squash', 'Butternut, acorn, spaghetti, kabocha, pumpkin', 'Fully mature, with a hard rind', 'Weeks to months in a cool, dry place'],
          ],
        },
        {
          type: 'list',
          items: [
            'Summer squash grows on compact bush plants and produces continually once it starts, often more than a household can eat.',
            'Winter squash usually grows on long, sprawling vines, some of them many feet long, so it needs plenty of room or a sturdy trellis.',
            'Both types are heavy feeders and thirsty, so they reward rich, compost-amended soil and steady watering.',
          ],
        },
        {
          type: 'tip',
          emoji: '🥒',
          text: 'Two or three zucchini plants are plenty for most families. It is a well-known gardening joke that a fourth plant is how neighbors start locking their car doors in August.',
        },
        {
          type: 'image',
          src: '/guides/growing-squash-zucchini/zucchini-butternut-side-by-side.jpg',
          alt: 'A green zucchini and a tan butternut squash lying side by side on a wooden table',
          caption: 'Summer squash is eaten young and soft; winter squash is left to mature with a hard rind.',
        },
      ],
    },
    {
      id: 'planting-squash',
      title: 'Planting and Spacing',
      blocks: [
        {
          type: 'p',
          text: 'Squash seeds germinate best in warm soil and rot in cold, wet ground, so timing matters more than any other planting detail.',
        },
        {
          type: 'list',
          items: [
            'Plant after the last frost, when soil has warmed to at least 60-65°F. Squash germinates fastest at around 70°F and above.',
            'Direct sow seeds about an inch deep, or start seedlings indoors only about 2-4 weeks ahead, since squash resents root disturbance and outgrows pots quickly.',
            'Plant in hills or mounds of enriched soil, or in rows. Space bush summer squash roughly 2-3 feet apart and sprawling winter squash roughly 3-6 feet or more apart, depending on the variety.',
            'Work in plenty of compost before planting, since squash is a heavy feeder, and mulch after the soil warms.',
            'Squash needs full sun, at least 6-8 hours a day.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Sprawling winter squash can be trained up a strong trellis or fence to save space, with the heavy fruits supported in slings made from old fabric. Small-fruited varieties such as acorn and delicata suit trellises best.',
        },
        {
          type: 'image',
          src: '/guides/growing-squash-zucchini/squash-hills-mounds.jpg',
          alt: 'Young squash plants growing on rounded mounds of dark soil in a sunny garden with mulch',
          caption: 'Squash is planted in mounds or rows of rich soil after the ground has warmed.',
        },
      ],
    },
    {
      id: 'pollination',
      title: 'Pollination: Why Flowers Fall Off',
      blocks: [
        {
          type: 'p',
          text: 'Squash plants produce separate male and female flowers on the same plant, and fruit only forms when pollen from a male flower reaches a female. Understanding this explains the most common early-season worry.',
        },
        {
          type: 'list',
          items: [
            'The first flowers to appear are usually all male, and they fall off after a day. This is normal and not a sign of trouble.',
            'Female flowers have a tiny swollen fruit at the base, directly behind the petals. Male flowers have only a plain thin stem.',
            'Bees do the pollination. Where pollinators are scarce, fruit can shrivel and rot while still small, because the female flower was never fertilized.',
            'You can hand-pollinate in the morning by picking a freshly opened male flower, removing its petals, and touching its pollen-bearing center to the center of a female flower.',
            'Planting flowers that attract bees near your squash helps; see the Pollinator Garden guide.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'If small fruits turn yellow, shrivel at the tip, and rot, the usual cause is poor pollination, not disease. Hand-pollinating in the morning, when the flowers are open, usually fixes it.',
        },
        {
          type: 'image',
          src: '/guides/growing-squash-zucchini/female-squash-flower-baby-fruit.jpg',
          alt: 'A large open yellow squash blossom with a ribbed green central column on a squash vine',
          caption: 'Squash blossoms are large and yellow. Check behind the petals: a female flower has a tiny fruit there, and a male flower has only a thin stem.',
        },
      ],
    },
    {
      id: 'pests-and-diseases',
      title: 'Pests and Diseases',
      blocks: [
        {
          type: 'p',
          text: 'Squash has a short list of serious enemies. Knowing them in advance is the difference between a lost vine and a saved one.',
        },
        {
          type: 'table',
          headers: ['Problem', 'Signs', 'Response'],
          rows: [
            ['Squash vine borer', 'A healthy-looking vine suddenly wilts, with sawdust-like frass near the base of the stem', 'Cover young plants with row cover until flowering, watch for eggs on stems, and remove borers by slitting the stem if caught early'],
            ['Squash bugs', 'Brownish bugs and clusters of small orange-brown eggs on leaf undersides; wilting leaves', 'Hand-pick bugs and crush eggs regularly; trap under boards overnight'],
            ['Cucumber beetles', 'Striped or spotted beetles on leaves and flowers; can spread bacterial wilt', 'Row cover, and remove beetles early'],
            ['Powdery mildew', 'White powdery coating on leaves, common in late summer', 'Improve airflow, water at the base, and use resistant varieties; see Common Garden Diseases'],
          ],
        },
        {
          type: 'list',
          items: [
            'Rotate squash to a different bed each year. Cucumber beetles, borers, and mildew carry over in the soil and plant debris.',
            'Remove old vines and clean up debris at the end of the season, so pests have nowhere to overwinter.',
            'Powdery mildew often appears as the season ages and usually does not stop production entirely, so it is often tolerated late in the season.',
          ],
        },
        {
          type: 'tip',
          emoji: '🛡️',
          text: 'Row cover over young plants is one of the best defenses against borers and beetles. Remove it once flowers appear so pollinators can reach them, or you will be pollinating by hand.',
        },
        {
          type: 'image',
          src: '/guides/growing-squash-zucchini/squash-bug-eggs-leaf.jpg',
          alt: 'Fingers pointing to a small cluster of orange-brown eggs on a green squash leaf',
          caption: 'Squash bug eggs form small orange-brown clusters, usually on leaf undersides, and are easy to crush before they hatch.',
        },
      ],
    },
    {
      id: 'harvest-and-curing',
      title: 'Harvest, Curing, and Storage',
      blocks: [
        {
          type: 'p',
          text: 'Summer and winter squash are harvested on opposite principles: pick summer squash small and often, and let winter squash mature fully before cutting.',
        },
        {
          type: 'list',
          items: [
            'Harvest zucchini and other summer squash while young — commonly around 6-8 inches for zucchini — with a glossy skin that a fingernail easily pierces. Overgrown squash becomes seedy and tough, and it slows further production.',
            'Check plants daily in midsummer, since zucchini can nearly double in size in a day or two.',
            'Winter squash is ready when the rind is hard enough that a fingernail cannot dent it, the color is deep and even, and the stem beside the fruit has dried and turned corky.',
            'Cut winter squash with a few inches of stem attached, never pulling it off, and never carry it by the stem. Harvest before a hard frost.',
            'Many winter squash keep best after curing: a week or two in a warm, dry, airy spot, commonly cited at around 80-85°F, hardens the rind and heals small cuts. Butternut benefits from curing, while acorn squash is generally not cured and is best eaten sooner.',
            'After curing, store winter squash in a cool, dry, ventilated place, roughly 50-55°F, not touching one another. Butternut and similar thick-skinned types often keep for months, while acorn keeps for a shorter time.',
          ],
        },
        {
          type: 'tip',
          emoji: '📦',
          text: 'Check stored squash every couple of weeks and use any with soft spots first. One rotting squash will spoil its neighbors.',
        },
        {
          type: 'image',
          src: '/guides/growing-squash-zucchini/butternut-squash-curing.jpg',
          alt: 'Harvested butternut squash with stems attached sitting in a single layer in a warm dry sunny spot to cure',
          caption: 'Winter squash hardens its rind and heals small cuts during a week or two of curing.',
        },
      ],
    },
  ],
}

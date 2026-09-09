export const overwinteringContent = {
  id: 'overwintering',
  hero: {
    emoji: '🏠',
    title: 'Overwintering Tender Plants',
    subtitle: 'Save your dahlias, cannas, elephant ears, and gladiolus from frost — dig, cure, and store them correctly and they\'ll return bigger next year for free.',
  },
  intro: 'Tender bulbs, tubers, corms, and rhizomes — dahlias, cannas, gladiolus, elephant ears, caladiums, and tuberous begonias — represent a real investment of time and money, and nearly all of them can be dug, stored, and replanted year after year rather than treated as annuals. Unlike a container tropical that stays actively growing indoors all winter, these plants go fully dormant in storage: no light, no water beyond what prevents shriveling, just the right temperature and humidity until spring. This guide focuses specifically on the dig-and-store mechanics for these dormant tubers, corms, and rhizomes — for keeping actively growing tropical container plants (geraniums, fuchsias, hibiscus, and similar) alive indoors through winter, see the site\'s Winter Garden Prep guide, which covers that method in full detail.',
  sections: [
    {
      id: 'which-plants-need-lifting',
      title: 'Which Plants Need Lifting Before Frost',
      blocks: [
        {
          type: 'p',
          text: 'Not every tender plant needs the same treatment — the common thread across everything in this guide is an underground storage structure (a tuber, corm, or rhizome) that can be dug up, dried, and stored dormant without soil, rather than a plant that needs to keep growing through winter.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Structure Type', 'Frost Tolerance', 'Worth Storing?'],
          rows: [
            ['Dahlia', 'Tuberous root clump', 'Killed by first hard frost (foliage blackens)', 'Yes — tubers multiply each season, often worth more each year'],
            ['Canna', 'Rhizome', 'Foliage damaged by light frost', 'Yes — rhizome clumps expand rapidly and divide easily'],
            ['Gladiolus', 'Corm', 'Foliage damaged by light frost', 'Yes, especially named or expensive varieties — inexpensive mixed corms are sometimes cheaper to rebuy'],
            ['Elephant Ear (Colocasia/Alocasia)', 'Tuber/corm', 'Foliage collapses at first frost', 'Yes — larger tubers each year produce dramatically bigger plants'],
            ['Caladium', 'Tuber', 'Very frost-tender, damaged by cool temps even before frost', 'Yes, though caladium tubers are relatively inexpensive to replace if storage space is tight'],
            ['Tuberous Begonia', 'Tuber', 'Killed by first frost', 'Yes — named varieties in particular are worth preserving'],
          ],
        },
        {
          type: 'tip',
          emoji: '💰',
          text: 'A dahlia tuber clump dug in fall and divided in spring can turn one $15 plant into 4-6 plants worth replanting — the economics strongly favor storage over buying new every year, especially for named varieties.',
        },
        {
          type: 'image',
          src: '/guides/overwintering/dahlia-tubers-freshly-dug.jpg',
          alt: 'Freshly dug dahlia tuber clump with soil still clinging to the roots, laid on a garden table',
          caption: 'A dahlia tuber clump dug before hard frost can be divided into several plants worth of tubers by spring.',
        },
      ],
    },
    {
      id: 'digging-and-curing',
      title: 'Digging Timing and Curing',
      blocks: [
        {
          type: 'p',
          text: 'Timing the dig correctly matters more than almost any other step — dig too early and tubers are underdeveloped and smaller than they could be; wait too long after a hard freeze and rot may have already started in the crown.',
        },
        {
          type: 'list',
          items: [
            'Wait until the first light frost blackens the foliage (this signals the plant has pulled its remaining energy down into the storage structure), but dig within a few days — don\'t leave tubers in frozen or waterlogged ground.',
            'Cut foliage back to 2-4 inches above the crown before digging, to make handling easier and reduce the chance of breaking the crown itself.',
            'Dig well outside the plant\'s drip line with a garden fork, not a shovel, to avoid slicing through tubers — lift the entire clump from below rather than prying at the crown.',
            'Gently rinse off excess soil with a hose (dahlias, cannas) or let it air-dry and brush off once dry (gladiolus corms, which are more prone to rot if kept wet).',
            'Cure in a well-ventilated, frost-free space for several days to a couple of weeks depending on plant type — this allows cut surfaces to callus over and excess moisture to evaporate before long-term storage.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'A tuber, corm, or rhizome put into storage still damp or with an unhealed cut surface is the single most common cause of total storage loss to rot — when in doubt, cure a few extra days rather than too few.',
        },
        {
          type: 'image',
          src: '/guides/overwintering/curing-tubers-garage.jpg',
          alt: 'Dahlia tubers spread out on newspaper in a garage to cure before winter storage',
          caption: 'Curing tubers in a well-ventilated, frost-free space for several days allows cut surfaces to callus before storage.',
        },
      ],
    },
    {
      id: 'storage-conditions-by-plant',
      title: 'Storage Conditions by Plant',
      blocks: [
        {
          type: 'p',
          text: 'Each plant type has its own moisture and temperature sweet spot during storage — too dry and tubers shrivel past the point of viability, too damp and rot sets in, so matching the medium and conditions to the specific plant matters.',
        },
        {
          type: 'table',
          headers: ['Plant', 'Storage Medium', 'Temperature', 'Humidity Notes'],
          rows: [
            ['Dahlia', 'Barely-damp vermiculite, peat moss, or wood shavings in a ventilated box', '40-50°F', 'Enough humidity to prevent shriveling but not enough to sweat or rot — check monthly'],
            ['Canna', 'Slightly drier medium than dahlias — dry peat or newspaper works', '40-50°F', 'More forgiving of dry conditions than dahlias; tolerates drier storage'],
            ['Gladiolus', 'Mesh bag or open tray, no packing medium needed', '35-45°F', 'Wants to stay dry — good air circulation prevents the rot corms are prone to'],
            ['Elephant Ear', 'Barely-damp peat moss or vermiculite in a ventilated container', '50-60°F', 'Less cold-tolerant than dahlias/cannas — too cold causes tissue damage even without freezing'],
            ['Caladium', 'Dry peat moss or vermiculite, kept warm', '60-65°F', 'The most cold-sensitive of this group — chilling injury occurs well above freezing'],
            ['Tuberous Begonia', 'Dry peat moss or wood shavings', '40-50°F', 'Store dry — begonia tubers are more rot-prone than dry-shrivel-prone'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: 'Elephant ears and caladiums need noticeably warmer storage than dahlias, cannas, gladiolus, and begonias — a garage or unheated basement cold enough for the others may actually damage these two, so group storage locations by temperature need, not just convenience.',
        },
        {
          type: 'image',
          src: '/guides/overwintering/labeled-storage-boxes-vermiculite.jpg',
          alt: 'Cardboard storage boxes filled with vermiculite for overwintering dahlia and canna tubers in a cool basement',
          caption: 'Matching storage medium and temperature to each plant type is the difference between viable tubers and losses by spring.',
        },
      ],
    },
    {
      id: 'mid-winter-checks',
      title: 'Mid-Winter Storage Checks',
      blocks: [
        {
          type: 'p',
          text: 'Storage isn\'t a "dig it and forget it" process — a quick check once a month catches problems early enough to save the rest of the batch, rather than discovering a total loss in spring.',
        },
        {
          type: 'list',
          items: [
            'Check monthly for shriveling (tubers going soft and wrinkled) — a light misting of the storage medium, not the tubers directly, usually corrects this without inviting rot.',
            'Check monthly for rot or mold — a soft, mushy, or foul-smelling spot on a tuber should be cut away immediately with a clean knife and the cut surface dusted with sulfur or cinnamon (a mild natural fungicide) before returning it to storage, to keep it from spreading to the rest of the batch.',
            'Separate any visibly rotting tuber from the rest of the storage container immediately — rot spreads by contact in a shared storage medium.',
            'Confirm the storage space is holding its target temperature range — a min/max thermometer left in the storage area for a week is worth the small effort to confirm before committing an entire season\'s tubers to it.',
          ],
        },
        {
          type: 'tip',
          emoji: '📝',
          text: 'Label every tuber or storage bag with the variety name before storing — a mixed box of unlabeled dahlia tubers by spring is a common and entirely avoidable frustration, especially for named cultivars that look identical once dormant.',
        },
        {
          type: 'image',
          src: '/guides/overwintering/checking-stored-tubers-winter.jpg',
          alt: 'A gardener inspecting stored dahlia tubers in a labeled box during a mid-winter check',
          caption: 'A monthly check for shriveling or rot catches problems early enough to save the rest of the storage batch.',
        },
      ],
    },
    {
      id: 'spring-reawakening',
      title: 'Spring Division and Reawakening',
      blocks: [
        {
          type: 'p',
          text: 'As the last frost date approaches, stored tubers come out of dormancy and get divided, pre-sprouted, and readied for the plants that will fill the garden by early summer.',
        },
        {
          type: 'list',
          items: [
            'Divide dahlia clumps 4-6 weeks before your last frost date — each division needs at least one visible eye (a small growth point near where the tuber meets the old stem), since a tuber without an eye won\'t sprout even if it looks otherwise healthy.',
            'Divide canna rhizomes into sections with at least 2-3 growth points each, using a clean, sharp knife.',
            'Pre-sprout dahlias, cannas, and elephant ears indoors 4-6 weeks before the last frost by potting divisions in slightly moist potting mix under light — this gives a significant head start over direct spring planting and lets you confirm viability before the ground is even workable.',
            'Gladiolus corms generally don\'t need pre-sprouting — plant directly outdoors after the last frost, staggering plantings 2 weeks apart for an extended bloom period.',
            'Harden off any pre-sprouted plants before moving them outdoors permanently, the same way seedlings are hardened off, since indoor-grown sprouts haven\'t yet toughened up for outdoor sun and wind.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌱',
          text: 'A tuber that never sprouts by 3-4 weeks after being brought out of dormant storage and given warmth and light likely didn\'t survive storage — better to know this in early spring, with time to source a replacement, than to discover it after planting outdoors.',
        },
        {
          type: 'image',
          src: '/guides/overwintering/dividing-dahlia-tubers-spring.jpg',
          alt: 'A gardener dividing a dahlia tuber clump in spring, showing individual tubers with visible eyes',
          caption: 'Each dahlia division needs at least one visible eye near the old stem — a tuber without one won\'t sprout.',
        },
      ],
    },
  ],
};

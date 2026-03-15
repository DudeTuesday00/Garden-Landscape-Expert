export const winterGardenPrepContent = {
  id: 'winter-garden-prep',
  hero: {
    emoji: '❄️',
    title: 'Winter Garden Prep',
    subtitle: 'Protect Your Plants, Prepare Your Soil, and Set the Stage for Spring',
  },
  intro: "Winter's demands on a garden vary enormously across the United States. In Zone 3 Minnesota, the ground freezes to three feet, temperatures fall below -30°F, and every tender plant must either be buried in mulch, dug up and stored, or accepted as an annual loss. In Zone 10 Florida, 'winter' means the best growing season of the year — the time for warm-season crops to rest and cool-season vegetables to thrive. In Zone 7 Virginia, a single polar vortex can kill plants that have been reliably perennial for a decade. Understanding your zone, your last and first frost dates, and the specific vulnerabilities of your plants is the foundation of effective winter preparation.",
  sections: [

    // ─── OVERVIEW: KNOW YOUR NUMBERS ─────────────────────────────────────────
    {
      id: 'overview',
      title: 'Know Your Numbers: The Key Winter Dates',
      blocks: [
        {
          type: 'p',
          text: "Throughout this guide, tasks and timing are anchored to First Fall Frost Date (FFD) — the date when night temperatures first reach 32°F — and ground freeze date, both of which vary by location and are the practical triggers for most winter preparation work. Your local cooperative extension service or weather service can provide your area's historical FFD and average ground freeze timing.",
        },
        {
          type: 'tip',
          emoji: '❄️',
          text: "Why Winter Prep Matters More Than Spring Prep: Most gardeners think of spring as the season of garden beginnings. But the gardeners whose springs go smoothly — whose perennials emerge vigorous, whose soil is ready to work the moment temperatures rise, whose tools are sharp and their bulbs are planted — did their most important work in fall and early winter. Winter garden preparation is an act of forward investment. Every hour spent in autumn protecting a marginally hardy shrub, amending a bed with compost, planting spring bulbs, or cleaning and oiling tools is an hour that spring does not owe you. The garden that receives thoughtful fall care enters winter stronger, suffers less damage, and emerges in spring several weeks ahead of the garden that was simply abandoned to the cold.",
        },
        {
          type: 'h3',
          text: 'Winter Prep Windows by Region',
        },
        {
          type: 'table',
          headers: ['Region / Zone Range', 'First Fall Frost', 'Ground Freeze Depth', 'Last Spring Frost', 'Winter Prep Window'],
          rows: [
            [
              'Northern Plains, Upper Midwest, northern New England (Zones 3–4)',
              'Mid-September – October 1',
              '24–48 inches or more',
              'May 1 – June 15',
              'August–October: a compressed, urgent window. Priority on bulb planting, tender plant storage, and deep mulching before the ground locks up.',
            ],
            [
              'Midwest, mid-Atlantic, southern New England, Pacific Northwest (Zones 5–6)',
              'October 1 – November 1',
              '12–24 inches',
              'April 1 – May 15',
              'September–November: the longest and most forgiving prep window. Time for all major tasks with room for adjustment.',
            ],
            [
              'Mid-South, lower mid-Atlantic, parts of California (Zones 7–8)',
              'November 1 – December 15',
              '0–12 inches (variable)',
              'March 1 – April 15',
              'October–December: mild temperatures allow planting through late fall. Cool-season vegetables go in as summer crops come out.',
            ],
            [
              'Deep South, Gulf Coast, lower California, Hawaii (Zones 9–10+)',
              'Rare or no frost',
              'Ground does not freeze',
              'No spring frost / minimal',
              "No hard deadline. Transition summer-to-cool-season crops in October–November. Rest tender perennials. Work soil in the 'off season' (summer).",
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '🌡️',
          text: "USDA Hardiness Zones (1–13) indicate the average annual minimum winter temperature and are used to determine whether a plant can survive winter in your area long-term. Frost dates indicate when temperatures will first or last drop to 32°F. Both matter for winter prep: the hardiness zone tells you which plants need protection; the frost date tells you when to start protecting them. Find your exact frost dates at the USDA's Plant Hardiness Zone Map (planthardiness.ars.usda.gov) or through your local National Weather Service office — local frost dates can vary by weeks within a single county due to elevation, proximity to water, and urban heat effects.",
        },
      ],
    },

    // ─── SECTION 1: PERENNIALS & ORNAMENTAL GRASSES ──────────────────────────
    {
      id: 'perennials',
      title: 'Section 1: Preparing Perennials & Ornamental Grasses',
      blocks: [
        {
          type: 'p',
          text: 'Perennials are the backbone of most American gardens, and the decisions made about them in fall — what to cut back, what to leave standing, when to divide, how deeply to mulch — have direct consequences on how they emerge in spring. The conventional instinct to cut everything back hard in fall is no longer the consensus best practice; a more nuanced approach recognizes the wildlife, aesthetic, and plant-health value of selective, thoughtful fall cutback.',
        },
        {
          type: 'h3',
          text: 'The Cut-Back Decision: What Science and Ecology Now Recommend',
        },
        {
          type: 'p',
          text: 'Research in recent decades has shifted the consensus on fall cutback significantly. The old approach — cut everything to the ground in October and mulch heavily — is now understood to remove critical overwintering habitat for beneficial insects (including native bees that nest in hollow stems), eliminate winter food sources for birds (seedheads), and in some cases actually increase winter die-back by removing insulating stem tissue from the crown.',
        },
        {
          type: 'table',
          headers: ['Plant Category', 'Fall Action', 'Timing', 'Why'],
          rows: [
            [
              'Ornamental grasses (warm-season: miscanthus, pennisetum, muhly)',
              'Leave standing through winter; cut back to 4–6 inches in late winter before new growth emerges',
              'Cut back February–March (before growth starts)',
              'Outstanding winter interest; seeds feed birds; the dried plumes and foliage provide 4–5 months of beauty after bloom ends. Cutting in fall removes all of this. Cut too early in spring and you risk cutting new growth.',
            ],
            [
              'Ornamental grasses (cool-season: fescue, blue oat grass, sedges)',
              'Comb out dead blades in fall; do not cut back — these are semi-evergreen and the green blades are alive',
              'Fall grooming; no cutback needed',
              'Cool-season grasses remain partly green through winter in most zones. Cutting back removes living tissue that resumes active growth in early spring.',
            ],
            [
              'Perennials with ornamental seedheads (coneflower, black-eyed Susan, rudbeckia, ironweed, Joe-Pye weed)',
              'Leave standing through winter',
              'Cut back late winter before growth emerges',
              'Seedheads are a primary food source for goldfinches, chickadees, and other seed-eating birds through winter. Studies show that gardens with standing perennial structure support significantly higher winter bird populations than those cut back in fall.',
            ],
            [
              'Perennials with hollow stems (bee balm, Joe-Pye weed, ironweed, anise hyssop)',
              'Leave at least 12–18 inch stem stubs standing',
              'Cut flush in late winter',
              'Hollow stems of these species are nesting sites for native mason bees, leafcutter bees, and other beneficial insects. Cutting in fall removes these nest sites. Leave stubs for late-emerging bees through the following summer.',
            ],
            [
              'Perennials prone to crown rot (lavender, Russian sage, ornamental salvias)',
              'Light tidy only — do not cut back hard; remove dead material but leave the bulk of woody stems until spring',
              'After hard frost; do not cut in fall',
              'Hard fall cutback of woody-based perennials in cold climates exposes the crown and invites moisture and disease. Leave the skeleton of stems to protect the crown and mulch gently around (not over) the crown.',
            ],
            [
              'Aggressive spreaders (catmint, goldenrod, aggressive asters)',
              'Cut back and remove spent material before seed dispersal; bag and dispose (do not compost if invasive)',
              'Before seeds fully ripen',
              'Prevents unwanted reseeding. Cutting before seed set is more effective than cutting after.',
            ],
            [
              'Hostas, daylilies, bleeding heart, and other soft-stemmed perennials',
              'Remove foliage after hard frost kills it naturally; do not cut green foliage',
              'After first killing frost',
              'Removing naturally senesced foliage prevents slug egg overwintering and reduces disease. Cutting green foliage removes nutrients the plant is actively translocating back to the roots.',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Dividing Perennials in Fall',
        },
        {
          type: 'p',
          text: 'Fall is the ideal time to divide many perennials — the heat stress of summer is over, soil moisture is typically adequate, and the plant has several months of mild weather (in most zones) to establish divided sections before hard winter. Dividing reinvigorates overcrowded clumps, creates new plants for free, and is the single most effective way to maintain the long-term vigor of established perennials.',
        },
        {
          type: 'list',
          items: [
            'Best candidates for fall division: Hostas (the most productive fall-division subject; divide large clumps any time after bloom through early October), daylilies (divide immediately after bloom or in early fall), ornamental grasses (divide warm-season types in spring; cool-season types in fall or early spring), black-eyed Susan and coneflower (divide every 3–4 years when centers become sparse), astilbe (divide every 2–3 years for best bloom).',
            'Perennials better divided in spring: Ornamental grasses (warm-season types: wait until spring when new growth is just visible), chrysanthemums (divide in spring), bee balm (spring division is more reliable), anything borderline hardy in your zone (don\'t stress them before winter).',
            'Division technique: Dig the entire clump, taking a generous root ball. Use two garden forks back-to-back to lever the clump apart, or a sharp spade for smaller clumps. Divide into sections each with at least 3–5 healthy growth points. Replant immediately and water in well. Do not allow divided roots to dry out even briefly.',
            'Timing relative to FFD: Aim to complete fall divisions at least 4–6 weeks before your FFD to give divided sections time to root before the ground freezes.',
          ],
        },
        {
          type: 'h3',
          text: 'Mulching Perennial Beds for Winter',
        },
        {
          type: 'p',
          text: 'Winter mulch serves a fundamentally different purpose than summer mulch. Summer mulch conserves moisture and suppresses weeds. Winter mulch is primarily about moderating soil temperature — preventing the freeze-thaw cycles that heave plant roots out of the soil and kill crowns that would otherwise survive a steady cold temperature.',
        },
        {
          type: 'list',
          items: [
            'The heaving problem: Freeze-thaw cycles occur when daytime temperatures rise above freezing and night temperatures drop below. The soil expands and contracts repeatedly, and plants rooted in it can be literally pushed out of the ground — their crowns exposed to desiccating wind and lethal cold. Mulch prevents heaving not by keeping plants warm but by keeping the soil temperature stable, preventing the repeated cycling that causes it.',
            'When to apply winter mulch: The critical timing error is applying mulch too early. Apply after the ground has frozen slightly — typically after 2–3 consecutive nights below 25°F in your area. Mulch applied before the ground freezes can trap warmth and encourage rodents to nest in the mulch against plant crowns. The goal is to lock in the cold, not to prevent it.',
            'Best winter mulch materials: Shredded leaves (the ideal free mulch — run leaves through a mower or leaf shredder; whole leaves mat into an impermeable layer), straw (clean, weed-free; excellent insulator; easy to remove in spring), evergreen boughs (classic protection for roses and marginally hardy plants; hold mulch in place and provide air circulation), wood chips (fine for shrubs and trees; less ideal for perennial crowns where they may pack too densely).',
            'Depth: 3–4 inches for most perennials. 4–6 inches for marginally hardy plants. Keep mulch 2–3 inches away from the crown of the plant itself — direct mulch against the crown traps moisture and invites disease and rodent damage.',
          ],
        },
      ],
    },
  ],
}

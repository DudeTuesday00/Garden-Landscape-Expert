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

    // ─── SECTION 2: TREES & SHRUBS ────────────────────────────────────────────
    {
      id: 'trees-and-shrubs',
      title: 'Section 2: Preparing Trees & Shrubs for Winter',
      blocks: [
        {
          type: 'p',
          text: 'Trees and shrubs represent the largest investment in most gardens — in both money and time — and winter is the season when the most serious damage can occur. Anti-desiccant sprays, burlap wraps, proper pruning timing, rodent guards, and thoughtful mulching are all tools for protecting these investments through the cold season.',
        },
        {
          type: 'h3',
          text: 'Pruning: What to Do and What to Wait On',
        },
        {
          type: 'p',
          text: "Fall pruning is one of the most consequential and most commonly mismanaged winter prep tasks. Pruning at the wrong time can stimulate tender new growth that winter will kill, remove next year's flower buds already set on the wood, or open wounds that will not heal before cold arrives. Understanding the pruning timing for each category of plant is essential.",
        },
        {
          type: 'table',
          headers: ['Plant Category', 'Pruning Timing', 'What to Do', 'What NOT to Do'],
          rows: [
            [
              'Deciduous shade and flowering trees',
              'Late winter / early spring (while dormant; before buds swell)',
              'Remove dead, damaged, crossing, and structurally problematic branches while the tree is fully dormant and leafless. The structure is clearest then, wounds callus faster as growth begins.',
              'Do not prune in fall when wounds cannot close before winter. Do not prune spring-flowering trees (magnolia, redbud, serviceberry) in late winter — you will remove flower buds. Prune those immediately after bloom.',
            ],
            [
              'Summer-flowering shrubs (rose of Sharon, butterfly bush, crape myrtle, potentilla)',
              'Late winter / early spring before growth begins',
              'Cut back to the desired size and structure. These bloom on current season\'s growth so even hard pruning does not sacrifice flowers.',
              'Do not prune in fall. Stems left standing protect the crown from cold; removing them in fall exposes the crown and removes winter interest.',
            ],
            [
              'Spring-flowering shrubs (lilac, forsythia, azalea, mock orange, viburnum, spirea)',
              'Immediately after bloom (spring)',
              'Prune after flowers fade — this is the only window before next year\'s flower buds set on the wood. Remove up to one-third of old canes to rejuvenate. NOT in fall.',
              "Pruning in fall removes next year's flower buds entirely. This is the most common reason spring-flowering shrubs fail to bloom.",
            ],
            [
              'Broad-leaved evergreens (rhododendron, mountain laurel, holly, boxwood)',
              'Minimal fall pruning only; major pruning in early spring',
              'Remove only dead or broken branches in fall. Light shaping is acceptable in Zone 7+ where wounds close quickly. Major structural pruning in spring.',
              'Hard fall pruning in cold climates stimulates growth that winter will kill. Avoid pruning after August in Zones 5–6.',
            ],
            [
              'Needled evergreens (pine, spruce, fir, arborvitae)',
              'Spring for most; early summer for pines (candle pruning)',
              "Remove dead or broken branches in fall. Do not do major shaping — save for spring. Pines are pruned by removing or pinching new 'candles' in late spring/early summer.",
              'Do not prune healthy needled evergreens in fall. Pruning stimulates growth that will be killed by winter in cold climates. Arborvitae pruned in fall browns at the cuts.',
            ],
            [
              'Roses',
              'Zone-dependent: see rose section below',
              'Zone 6+: light cleanup in fall, major pruning in early spring. Zone 7+: can do more structural pruning in fall as plants enter dormancy.',
              'Avoid heavy fall pruning in cold climates — it removes insulating cane mass and stimulates vulnerable new growth.',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Protecting Marginally Hardy Shrubs',
        },
        {
          type: 'list',
          items: [
            'Anti-desiccant sprays: Broad-leaved evergreens (rhododendron, boxwood, holly, mountain laurel) and needled evergreens (arborvitae, false cypress) lose significant moisture through their foliage during winter — particularly on sunny, windy days when the ground is frozen and roots cannot replace the lost water. Anti-desiccant sprays (Wilt-Pruf, Vapor Gard) coat foliage with a protective waxy film that reduces moisture loss by 30–50%. Apply in late fall after temperatures drop consistently below 40°F but before hard freeze. Reapply in late January or February in cold climates.',
            'Burlap wraps: Burlap wrapping protects shrubs from three specific threats: desiccating wind, sun scald (the burning of bark on the south and west sides of young trees and shrubs from winter sun), and physical damage from ice and snow loads. Wrap arborvitae, boxwood, and upright evergreens with burlap loosely tied with twine — the burlap should not press tightly against the foliage but should create a barrier around it. A three-stake burlap screen (burlap stapled to three stakes creating a windbreak) is more effective than wrapping for broadleaf evergreens and allows air circulation.',
            'Snow and ice management: The greatest physical threat to needled evergreen shrubs in heavy-snow climates is snow and ice accumulation that bends or breaks branches. Upright arborvitae, columnar junipers, and similar shrubs can be loosely tied with soft twine in a spiral from the base to the top to prevent branches from splaying under snow weight. Gently brush snow off shrubs with a broom immediately after snowfall — do not shake frozen-ice-laden branches, which will break.',
          ],
        },
        {
          type: 'h3',
          text: 'Roses: Winter Protection by Zone',
        },
        {
          type: 'p',
          text: 'Roses are among the most zone-dependent plants for winter care — the same rose that requires no protection in Zone 8 needs serious mulching, cane burial, or even Styrofoam cone protection in Zone 4. Understanding your zone and your specific rose type is essential before choosing a protection strategy.',
        },
        {
          type: 'table',
          headers: ['Rose Type', 'Zones Needing Protection', 'Protection Method', 'When to Apply / Remove'],
          rows: [
            [
              'Hardy shrub roses (Knock Out, Canadian series, rugosa types)',
              'Zones 3–4: mound mulch over crown; Zones 5–6: minimal or no protection needed',
              'After FFD: mound 10–12 inches of shredded leaves or compost over the crown, not the canes. Zones 3–4: also wrap canes loosely with burlap.',
              'Apply after several hard frosts; remove in spring when overnight temps stay above 25°F consistently.',
            ],
            [
              'Hybrid tea and grandiflora roses',
              'Zones 3–6 (Zone 7 borderline)',
              'Mound 10–12 inches of compost or soil (not the garden soil removed from beside the plant — buy bagged compost to avoid heaving that soil) over the crown. In Zones 3–5, also wrap canes in burlap or use Styrofoam cone protection.',
              'Apply after several hard frosts. Remove mound gradually as temps warm in spring — do not uncover all at once.',
            ],
            [
              'Climbing roses',
              'Zones 3–5: significant protection; Zones 6–7: light protection',
              'Remove canes from their support, bundle loosely, and either lay them on the ground and cover with soil or wrap them in burlap and tie back to the support. The key is insulating the bud union (the graft point, usually at or below the soil surface).',
              'Apply after hard frosts. Uncover and retrain canes in spring after last frost risk.',
            ],
            [
              'Tree roses (standards)',
              'Zones 4–7',
              'The most vulnerable rose form. Options: dig and pot for indoor storage; wrap the entire head in burlap after stripping leaves; bury the entire plant by digging alongside it, tipping it over, and mounding soil over it.',
              'Apply before first hard freeze. Unbury in spring after last frost risk.',
            ],
            [
              'Own-root roses (many modern shrub types)',
              'Zones 3–5: moderate protection; Zones 6+: minimal',
              'Mound compost over the crown. Own-root roses, unlike grafted types, will regrow from the roots even if top growth is killed — the regrowth is the same variety, not rootstock. Less critical to protect than grafted roses.',
              'Same timing as shrub roses above.',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Young Trees: Protecting New Plantings',
        },
        {
          type: 'list',
          items: [
            'Trunk wrap: Young deciduous trees with thin, smooth bark (maples, apples, cherries, lindens) are vulnerable to sun scald and frost crack — conditions where the bark alternately expands in daytime sun and contracts in nighttime cold, causing splits in the bark. Wrap the trunk from the ground to the first scaffold branch with a commercial tree wrap (light-colored crepe paper tree wrap or commercial plastic tree guards) each fall for the first 3–5 years. Remove wrapping in spring to prevent it from becoming a habitat for insects and disease.',
            'Rodent guards: Mice, voles, and rabbits can girdle young trees under snow cover by chewing bark in a ring around the trunk — a wound that kills the tree even if it survives winter otherwise. Hardware cloth cylinders (1/4 inch mesh) installed around the base of young trees before the first snow are the most effective protection. Extend at least 18 inches above the expected snow depth in your area (snow compacts rodents\' effective reach considerably). Bury the bottom edge 2–3 inches in the ground to prevent tunneling.',
            'Staking young trees: Trees planted within the last 1–2 years may need staking to prevent wind rock during winter storms. Use two stakes (one on each side of the tree, outside the root ball) with a flexible tie that allows some movement — movement in the wind builds trunk taper and strength. Remove stakes in spring after the first full growing season.',
            'Watering before freeze: One of the most valuable and most overlooked fall tasks for trees and shrubs is a deep watering before the ground freezes. Plants enter winter better able to resist desiccation if their root zones are fully hydrated. Water deeply in late fall during any dry period, especially for newly planted trees and broadleaf evergreens.',
          ],
        },
      ],
    },
  ],
}

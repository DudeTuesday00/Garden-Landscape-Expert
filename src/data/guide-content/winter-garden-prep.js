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

    // ─── SECTION 3: BULBS ────────────────────────────────────────────────────
    {
      id: 'bulbs',
      title: 'Section 3: Bulbs — Planting, Lifting & Storing',
      blocks: [
        {
          type: 'p',
          text: "Bulbs are the most time-sensitive element of fall garden work: spring-blooming bulbs must be planted in fall, during a specific window, or the opportunity is lost for the year. At the same time, tender summer-blooming bulbs must be lifted before the ground freezes or they will rot or die. Managing both in the right sequence is a central task of fall garden preparation.",
        },
        {
          type: 'h3',
          text: 'Spring-Blooming Bulbs: Planting in Fall',
        },
        {
          type: 'p',
          text: 'Spring-blooming bulbs — tulips, daffodils, hyacinths, crocus, alliums, muscari, and dozens of minor bulbs — require a period of cold dormancy (chilling) to trigger spring flowering. They must be planted in fall so the cold soil of winter provides the chilling hours they need. Bulbs planted in winter after the ground freezes hard, or in spring, will not bloom normally that first year.',
        },
        {
          type: 'list',
          items: [
            'Planting window: The ideal planting window is when soil temperatures have dropped below 60°F (usually 4–6 weeks before your FFD in most zones) but before the ground freezes. This window is typically September–October in Zones 4–5, October–November in Zones 6–7, and November–December in Zones 8–9. A soil thermometer is the most reliable tool; 50–55°F soil temperature is the sweet spot for bulb planting.',
            'Depth and spacing: The general rule is to plant bulbs at a depth of 2–3 times the diameter of the bulb. Large bulbs (tulips, daffodils, alliums): 6–8 inches deep. Medium bulbs (hyacinths, large crocus): 4–6 inches deep. Small bulbs (minor crocus, muscari, scilla): 2–3 inches deep. Space bulbs so they nearly touch for a full, naturalistic look; give them breathing room for longer-term naturalization.',
            'Tulips in warm climates: Tulips require chilling hours that natural winters do not provide in Zones 7+. In Zone 7: tulips often perform for 1–2 seasons but do not naturalize reliably; treat as annuals or chill for 6–8 weeks in a refrigerator (away from ripening fruit, which emits ethylene gas that destroys the bulb). In Zones 8+: pre-chilling (8–12 weeks in the refrigerator) is essential for any tulip bloom.',
            'Daffodils and rodent resistance: Daffodils, alliums, and most minor bulbs are unpalatable to rodents and will naturalize and multiply freely. Plant daffodils as the backbone of the spring bulb display, with tulips as the accent. A garden of primarily daffodils will improve every year; a garden of primarily tulips will decline as rodents and heat take a toll.',
          ],
        },
        {
          type: 'table',
          headers: ['Bulb', 'Planting Depth', 'Spacing', 'Zones for Naturalization', 'Notes'],
          rows: [
            [
              'Tulip (Tulipa spp.)',
              '6–8 inches',
              '4–6 inches',
              '3–7 (unreliable in Z7; treat as annual Z8+)',
              'Plant 5–10 per square foot for impact. Species tulips naturalize better than hybrids. Pre-chill in Z7+.',
            ],
            [
              'Daffodil (Narcissus spp.)',
              '6–8 inches',
              '4–6 inches',
              '3–8 (naturalizes freely)',
              'The most reliable spring bulb in America. Deer and rodent resistant. Plant by the dozen for best effect.',
            ],
            [
              'Hyacinth (Hyacinthus orientalis)',
              '4–6 inches',
              '4–6 inches',
              '4–7 (Z3–4 with mulch; Z8 pre-chill)',
              'The most intensely fragrant spring bulb. Loose in the garden after 2–3 years — flowers become less formal, still beautiful.',
            ],
            [
              'Allium (Allium spp.)',
              '4–8 inches (by size)',
              '4–8 inches',
              '3–8',
              "Deer and rodent resistant. Excellent for late spring — bridging between tulips and summer perennials. A. giganteum and A. 'Gladiator' are the boldest.",
            ],
            [
              'Crocus (Crocus spp.)',
              '3–4 inches',
              '2–3 inches',
              '3–8',
              'Among the earliest spring flowers — often emerge through snow. Plant in masses (50+) for impact; individual crocus look lost. Squirrels dig these; plant with chicken wire or bone meal to deter.',
            ],
            [
              'Muscari / Grape Hyacinth (M. armeniacum)',
              '3–4 inches',
              '2–3 inches',
              '3–9',
              'Extremely easy and reliable. Naturalizes aggressively — plant where spreading is welcome. Brilliant blue-purple impossible to replicate with other early bulbs.',
            ],
            [
              'Scilla / Siberian Squill (Scilla siberica)',
              '3–4 inches',
              '2–3 inches',
              '2–8',
              'Intense true blue; one of the earliest spring flowers. Naturalizes readily and can spread widely through lawns. Beautiful in combination with early daffodils.',
            ],
            [
              'Fritillaria (Fritillaria spp.)',
              '4–6 inches',
              '4–6 inches',
              '4–8 (varies by species)',
              'F. imperialis (Crown Imperial) is dramatic and deer resistant; F. meleagris (checkered lily) is delicate and charming. Both unusual and valuable.',
            ],
            [
              'Camassia (Camassia spp.)',
              '4–6 inches',
              '4–6 inches',
              '3–8',
              'Tall spikes of blue-purple in late spring. Native North American. Tolerates wet spring soil where other bulbs would rot. Excellent for rain garden edges.',
            ],
          ],
        },
        {
          type: 'tip',
          emoji: '💡',
          text: "The Bulb Lasagna Technique: Layer multiple bulb species at different depths in a single container or planting area to maximize bloom from a single space. Plant the deepest-planted bulbs first (daffodils at the bottom), then a layer of soil, then medium bulbs (tulips or hyacinths), then another soil layer, then small bulbs (crocus or muscari) nearest the surface. The result is a sequence of bloom from the same spot across 6–8 weeks of spring — crocus first, then hyacinths, then tulips, then daffodils — rather than a single two-week window. This technique is particularly valuable for containers that will be brought onto a porch or into view in spring. Prepare the container in fall, store it in a cold (but not freezing) garage or porch through winter, and bring it into view when the first green shoots appear.",
        },
        {
          type: 'h3',
          text: 'Tender Bulbs: Lifting and Storing',
        },
        {
          type: 'p',
          text: 'Tender summer-blooming bulbs — dahlias, cannas, gladiolus, caladiums, elephant ears, tuberose — are native to tropical or subtropical climates and will be killed by freezing temperatures. In Zones 7 and colder (and some borderline Zone 8 areas), they must be dug after the first frost kills their foliage and stored indoors through winter.',
        },
        {
          type: 'table',
          headers: ['Tender Bulb', 'Lift After:', 'Storage Conditions', 'Storage Container', 'Zones for In-Ground Overwintering'],
          rows: [
            [
              'Dahlia',
              'First frost kills foliage; let cure in ground 1–2 weeks then dig',
              '40–50°F; dark; dry but not desiccating; 40–60% humidity',
              'Cardboard boxes or milk crates with peat moss, vermiculite, or shredded newspaper',
              'Zone 8+ (with heavy mulch); Zones 7 and colder: must lift',
            ],
            [
              'Canna',
              'After frost blackens foliage',
              '50–60°F; dry; dark',
              'Paper bags, cardboard boxes, or open milk crates; do not seal in plastic',
              'Zone 7+ with 4–6 inches of mulch; Zones 6 and colder: must lift',
            ],
            [
              'Gladiolus',
              'After foliage yellows, 4–6 weeks after bloom',
              '35–45°F; dark; dry; excellent air circulation',
              'Mesh bags or open cardboard trays; do not seal — corms rot without airflow',
              'Zone 7+ with heavy mulch (marginally hardy); Zones 6 and colder: lift annually',
            ],
            [
              'Caladium',
              'Before first frost; or at first frost (not cold-tolerant)',
              '65–70°F; dry; warm — these are tropical; cold damages them as much as freezing',
              'Paper bags or open boxes with dry peat moss',
              'Zone 9+ only; most gardeners treat as annuals or store',
            ],
            [
              'Elephant Ear (Colocasia / Alocasia)',
              'After first frost blackens foliage',
              '50–60°F; slightly moist peat; avoid completely drying out',
              'Paper bags or boxes with slightly moist peat; check monthly',
              'Colocasia Z7+ with deep mulch; Alocasia less hardy — lift Z8 and colder',
            ],
            [
              'Tuberose (Polianthes tuberosa)',
              'After first frost',
              '55–65°F; dry; dark',
              'Paper bags or cardboard; good airflow essential',
              'Zone 8+ with mulch; Zones 7 and colder: lift annually',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Digging and curing: After the first frost kills the foliage, cut stems back to 4–6 inches. Dig carefully with a garden fork, working a foot away from the stem to avoid spearing the bulb. Shake off soil (do not wash — wet bulbs rot in storage). Allow the dug bulbs to cure (dry) in a single layer in a cool, dry, well-ventilated space for 1–2 weeks before packing for storage. Curing hardens the outer skin and dramatically reduces storage rot.',
            'Storage check: Inspect stored bulbs monthly. Remove any showing rot immediately — one rotting bulb will rapidly spread to neighbors. If bulbs are shriveling, add a small amount of barely-moist vermiculite to the storage container. If they are soft or moldy, the storage conditions are too warm or humid.',
          ],
        },
      ],
    },

    // ─── SECTION 4: SOIL HEALTH ───────────────────────────────────────────────
    {
      id: 'soil-health',
      title: 'Section 4: Soil Health — The Fall Amendment Window',
      blocks: [
        {
          type: 'p',
          text: "Fall is the finest time to improve garden soil, and the most underutilized season for doing so. In spring, the urgency to plant crowds out the methodical work of soil improvement; beds are occupied and time is short. In fall, beds are emptied of spent annuals, summer crops are finished, and the gardener has the entire winter — three to five months of freeze-thaw cycles, earthworm activity, and microbial decomposition — to incorporate amendments before spring planting begins.",
        },
        {
          type: 'h3',
          text: 'Fall Amendment Strategies',
        },
        {
          type: 'list',
          items: [
            'Compost application: Apply 2–3 inches of finished compost to all emptied beds in fall. Do not dig or till it in — lay it on the surface and allow winter weather, earthworms, and freeze-thaw action to incorporate it. This no-till approach preserves soil structure and fungal networks that tilling destroys. By spring, the compost will be partially incorporated and ready for planting.',
            'Cover cropping: Cover crops (also called green manures) are planted in fall to protect bare soil through winter, suppress weeds, and — in the case of leguminous cover crops — fix atmospheric nitrogen into the soil. Annual rye, winter rye, crimson clover, hairy vetch, and winter peas are the most widely used. Plant 4–6 weeks before FFD for establishment. Terminate (by cutting or tilling) 2–3 weeks before spring planting.',
            'Leaf mulch: Fallen leaves are the most abundant and valuable free soil amendment available in most American gardens. Run leaves through a mower or leaf shredder to prevent matting, then use as mulch on beds or add to compost. Whole leaves matted into a sheet over beds can become an impermeable barrier that sheds water; shredded leaves are excellent mulch and improve soil structure as they break down.',
            'Lime or sulfur application: Fall is the ideal time to adjust soil pH because amendments need time to react with the soil — lime applied in fall is fully incorporated by spring. A soil test (from your cooperative extension service) will tell you exactly how much lime (to raise pH) or sulfur (to lower pH) to apply. Applying without a test risks over-correction.',
            'Bone meal and bulb fertilizer: Apply bone meal or granular bulb fertilizer to bulb planting areas at the time of planting. These slow-release amendments are in place for roots to access in spring.',
          ],
        },
        {
          type: 'h3',
          text: 'The No-Dig Garden Principle',
        },
        {
          type: 'p',
          text: "One of the most significant shifts in horticultural best practice over the past two decades is the move away from fall tilling and toward no-dig or no-till soil management. Traditional fall tilling — turning the soil with a rototiller or digging fork — was believed to improve drainage, incorporate amendments, and expose pest larvae to killing frosts. Research has since shown that tilling also destroys the fungal networks (mycorrhizae) that trees and plants depend on, disrupts earthworm populations, brings buried weed seeds to the surface where they germinate, and accelerates the oxidation of soil organic matter.",
        },
        {
          type: 'list',
          items: [
            'The no-dig alternative: Apply amendments on the surface. Allow biological processes — earthworms, freeze-thaw, microbial activity — to incorporate them. This approach builds soil structure continuously rather than disrupting and rebuilding it each year.',
            'Sheet mulching for new beds: To convert turf or weedy areas to garden beds without tilling, use the sheet mulch method: mow turf short, cover with overlapping cardboard (removing tape and staples), wet thoroughly, and cover with 4–6 inches of wood chip mulch or compost. By spring, the cardboard will have killed the turf and begun decomposing, and the mulch layer will be partially incorporated. This is the most effective no-dig bed conversion method and the most soil-preserving.',
          ],
        },
        {
          type: 'h3',
          text: 'Composting in Fall and Winter',
        },
        {
          type: 'p',
          text: 'Fall is the most productive season for building compost because the garden generates enormous quantities of compostable material — spent annuals, vegetable plant debris, fallen leaves, green trimmings. Incorporating this material into the compost pile rather than sending it to a landfill is one of the most impactful sustainable gardening practices available.',
        },
        {
          type: 'list',
          items: [
            "The ideal fall compost pile: Alternate 'brown' carbon-rich materials (dried leaves, straw, cardboard) with 'green' nitrogen-rich materials (spent vegetable plants, grass clippings, kitchen scraps) in roughly 3:1 brown-to-green ratio by volume. Water each layer. The pile will heat up and then cool as winter progresses; active decomposition slows in cold weather but does not stop entirely.",
            "What not to compost: Diseased plant material (powdery mildew, black spot, fire blight — these diseases can survive a home compost pile and reinfect the garden), aggressive weed seeds (especially weeds that set seed before you compost them), and any plant material treated with persistent herbicides. When in doubt, bag diseased material and dispose of it rather than composting.",
            'Cold-weather composting: In Zones 4 and colder, the compost pile will freeze solid through winter. This is not a problem — freeze-thaw action actually breaks down material and the pile will resume active decomposition as soon as temperatures rise in spring. Insulate the pile with a thick layer of straw or leaves over winter to reduce the depth of freeze penetration.',
          ],
        },
      ],
    },

    // ─── SECTION 5: OVERWINTERING TENDER PLANTS INDOORS ──────────────────────
    {
      id: 'overwintering-indoors',
      title: 'Section 5: Overwintering Tender Plants Indoors',
      blocks: [
        {
          type: 'p',
          text: 'Tender tropical and subtropical plants — the large container specimens, the spectacular houseplants moved outdoors for summer, the beloved geraniums and fuchsias and coleus that anchor the porch display — require either a move indoors before frost or acceptance that they will not survive the winter. For plants of significant size, beauty, or monetary value, indoor overwintering is the investment that preserves them year over year.',
        },
        {
          type: 'h3',
          text: 'The Indoor Overwintering Spectrum',
        },
        {
          type: 'p',
          text: "Not all tender plants overwinter the same way. The approach depends on the plant's dormancy requirements: some need active light and warmth to survive (tropical plants that never go dormant), some need cool darkness and minimal water (geraniums, some bulbs), and some can be stored almost as bare-root material in dry conditions.",
        },
        {
          type: 'table',
          headers: ['Plant', 'Overwintering Method', 'Conditions Needed', 'Care Through Winter', 'Spring Prep'],
          rows: [
            [
              'Geranium (Pelargonium)',
              'Pot up or bag whole plant bare-root; or take cuttings in August for rooted plants',
              'Cool (40–50°F), dark or dim; OR bright windowsill with minimal water',
              'Water once per month if stored dark; water weekly if in light. Watch for whitefly indoors.',
              'Repot, cut back, move to bright light 6–8 weeks before last frost date. Growth resumes quickly.',
            ],
            [
              'Fuchsia',
              'Bring in as container plant; or overwinter as dormant plant in cool space',
              'Cool (40–50°F), dark or dim; allow to go semi-dormant with minimal water',
              'Water every 3–4 weeks. Allow to drop leaves. Do not allow to completely desiccate.',
              'Bring to bright light in late winter; cut back by half; resume regular watering. New growth emerges within 2–3 weeks.',
            ],
            [
              'Coleus',
              'Take cuttings in late summer; root in water or moist mix indoors',
              'Bright windowsill or grow lights; warm (65–72°F)',
              'Water and fertilize lightly. Pinch to maintain bushy form through winter.',
              'Harden off and plant out after last frost. Cuttings taken from overwintered plants in spring root quickly for new season supply.',
            ],
            [
              'Gardenias',
              'Keep as container plant indoors',
              'Bright indirect light; 60–68°F; high humidity; away from heating vents',
              'Water when top inch dries; mist or use pebble tray for humidity. Watch for scale insects. Fertilize monthly with acid fertilizer.',
              'Move outside after temps consistently stay above 55°F at night.',
            ],
            [
              'Night-Blooming Jasmine (Cestrum nocturnum)',
              'Container plant — move indoors',
              'Bright window; 55–65°F; allow to reduce growth',
              'Water when top inch dries. Reduce fertilizer. May drop some leaves — normal.',
              'Cut back by one-third, begin fertilizing, move outdoors after frost risk ends.',
            ],
            [
              'Lemon Verbena',
              'Cut back by two-thirds; bring potted plant indoors; or take cuttings',
              'Cool (45–55°F) and somewhat bright; goes partially dormant',
              'Water sparingly — every 2–3 weeks. Will drop most leaves — normal. New growth resumes in late winter.',
              'Move to brighter, warmer location in late winter; resume regular watering; harden off before moving outdoors.',
            ],
            [
              'Tropical hibiscus',
              'Container plant — move indoors',
              'Brightest available window; 60–68°F minimum; reduce watering and stop fertilizing',
              'Water when soil is nearly dry. Watch for spider mites (low-humidity indoor air is ideal for mites). Treat with insecticidal soap if needed.',
              'Repot if root-bound, begin fertilizing, gradually move to more light, then outdoors after frost risk.',
            ],
            [
              'Brugmansia (Angel\'s Trumpet)',
              'Container or stored bare-root',
              "Can be stored dormant (stripped of leaves, kept in cool dark space at 35–45°F with roots barely moist) or kept growing (bright light, cool, reduced water)",
              'Dormant storage: water just enough to prevent roots from desiccating entirely. Check monthly.',
              'Bring to light, repot if needed, resume watering. New growth emerges in 2–4 weeks.',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'Pest Inspection Before Bringing Plants Indoors',
        },
        {
          type: 'p',
          text: 'Every plant moved from outdoors to indoors in fall is a potential vector for introducing pests — aphids, spider mites, whitefly, mealybug, scale — into the indoor environment, where they can spread to houseplants and are much harder to control than outdoors. A thorough inspection and treatment before any plant crosses the threshold is essential.',
        },
        {
          type: 'list',
          items: [
            'Inspect thoroughly: Check both sides of every leaf, all stem joints, the soil surface, and the drainage holes. Use a hand lens if possible. Look for the insects themselves, their eggs, webbing (mites), sticky residue (aphids, scale), and white cottony masses (mealybug).',
            'Treat before bringing in: If pests are found, treat outdoors. Apply insecticidal soap to all leaf surfaces (both sides), allow to dry, and repeat in 5 days before bringing the plant indoors. For scale, use a cotton swab dipped in rubbing alcohol to remove individual scales, then follow with insecticidal soap.',
            'Quarantine new arrivals: Isolate any plant moved indoors from existing houseplants for 2–3 weeks. Inspect again at the end of the quarantine period before placing near other plants. Pests that were missed in the initial inspection often become visible within 2 weeks as eggs hatch or populations increase.',
            'Shower the plant: A thorough shower with lukewarm water before bringing any plant indoors physically removes a large proportion of pest populations, soil debris, and any spider mite eggs present. This is particularly effective for plants with dense foliage.',
          ],
        },
      ],
    },

    // ─── SECTION 6: THE KITCHEN GARDEN IN FALL & WINTER ──────────────────────
    {
      id: 'kitchen-garden',
      title: 'Section 6: The Kitchen Garden in Fall & Winter',
      blocks: [
        {
          type: 'p',
          text: 'The vegetable garden requires its own set of fall and winter preparations, distinct from the ornamental garden, and offers its own set of opportunities. Fall is the best planting season for many crops in mild climates; in cold climates, it is the time to close down the season properly and set the stage for a productive spring. The difference between a kitchen garden properly put to bed and one abandoned in October is significant: the properly prepared bed is ready to plant 2–3 weeks earlier in spring, is dramatically less weedy, and has had its soil improved by months of biological activity.',
        },
        {
          type: 'h3',
          text: 'Extending the Harvest: Cold Frames, Row Cover & Hoop Houses',
        },
        {
          type: 'list',
          items: [
            'Row cover (floating row cover / Agribon): A lightweight spunbonded fabric laid directly over crops or over hoops provides 2–4°F of frost protection (light-weight covers) to 6–8°F (heavy-weight covers). Allows light and water through. Can be used as a tent over hoops or draped loosely over plants. Excellent for extending lettuce, spinach, kale, and root crops several weeks past FFD in all zones. Inexpensive and widely available.',
            'Cold frames: A low box with a transparent lid (glass or polycarbonate) that creates a protected microclimate 10–20°F warmer than outside. A cold frame in Zone 6 can effectively extend the growing zone to Zone 7 or 8 for the crops inside it. Ideal for starting seedlings in late winter and growing hardy greens through winter in Zones 6+. Vent on sunny days to prevent overheating.',
            'Hoop houses and low tunnels: PVC or metal hoops with row cover or plastic film draped over them create a protected tunnel over a bed. Low tunnels (12–18 inches tall) are inexpensive and effective for extending root crops, greens, and brassicas. Full-height hoop houses (6–8 feet) allow gardeners to work inside and can extend the season by an entire month at either end in most US climates.',
            'What to grow under cover: Hardy greens that tolerate and even improve with frost: kale, arugula, spinach, mache (corn salad), claytonia (miner\'s lettuce), Asian greens (tatsoi, mizuna), Swiss chard (in mild cold), parsley. Root crops that stay sweet in cold soil: carrots, parsnips, leeks, turnips, rutabaga. In Zone 7+, these can be harvested throughout winter under minimal cover.',
          ],
        },
        {
          type: 'h3',
          text: 'Fall Garden Cleanup',
        },
        {
          type: 'list',
          items: [
            'Remove diseased material: Any plants showing signs of disease — tomato blight, powdery mildew, black spot on roses, fungal leaf spots — should be removed and disposed of in the trash, not composted. Diseased plant debris left in the garden overwinters the pathogen and reinfects the garden in spring from the same location.',
            'Pull spent annuals and summer crops: Remove frost-killed annuals and spent vegetable plants promptly. Leaving them in place through winter provides habitat for disease, slugs, and pests. The exception is plants whose stems provide wildlife value (see Section 1).',
            'Manage alliums: Garlic is planted in fall (October–November in most zones) for harvest the following summer. Plant individual cloves 2–4 inches deep, 6 inches apart, pointed end up. Mulch after planting in cold climates. This is one of the most satisfying fall planting tasks and the most economical way to grow high-quality garlic.',
            'Sow overwintering cover crops: After removing summer crops from empty beds, sow cover crops immediately rather than leaving soil bare. Crimson clover, hairy vetch, winter rye, and winter wheat are all effective choices depending on your zone. Sow at least 4–6 weeks before FFD for establishment.',
          ],
        },
        {
          type: 'h3',
          text: 'Fall Planting — What Goes In Now',
        },
        {
          type: 'p',
          text: 'In mild climates, fall is the most productive planting season for a wide range of crops. Even in cold climates, certain crops go in the ground in fall to overwinter and produce early spring harvests.',
        },
        {
          type: 'table',
          headers: ['Crop', 'When to Plant in Fall', 'Zones for Fall Success', 'Notes'],
          rows: [
            [
              'Garlic',
              '6–8 weeks before ground freeze; typically Oct–Nov in most zones',
              'All zones with mulch',
              'Plant after first light frost in cold zones. Hardneck types for Zone 6 and colder; softneck types for Zone 8+. Mulch 4–6 inches after planting in cold climates.',
            ],
            [
              'Spinach',
              '6–8 weeks before FFD',
              'Zones 3–9',
              'Germinates in cool soil. Sow seeds directly; small plants survive winter in Zone 5+ and produce early spring harvest. Under row cover, extends dramatically.',
            ],
            [
              'Kale',
              '8–10 weeks before FFD',
              'Zones 3–9',
              'Established plants can survive to 10°F or below without protection. Flavor improves significantly after frost. One of the most cold-hardy vegetables.',
            ],
            [
              'Mache (Corn Salad)',
              '6–8 weeks before FFD',
              'Zones 4–9',
              'Overwinters as small rosettes in Zone 5+ and produces luxuriant spring growth. Extremely cold-hardy and underused. Nutty, mild flavor.',
            ],
            [
              'Arugula',
              '4–6 weeks before FFD',
              'Zones 5–9',
              'Sow in September for fall harvest; small plants survive to 15°F or below under row cover. Excellent cold frame crop.',
            ],
            [
              'Carrots',
              '10–12 weeks before FFD',
              'All zones with mulch',
              'Carrots left in the ground through winter sweeten dramatically with cold. Mulch heavily after ground freeze to extend harvest through winter. Dig as needed.',
            ],
            [
              'Asian Greens (tatsoi, mizuna, bok choy)',
              '4–8 weeks before FFD',
              'Zones 5–9',
              'Among the most productive fall and winter crops. Tatsoi is the most cold-hardy. All are excellent under row cover and in cold frames.',
            ],
            [
              'Overwintering onion sets',
              'September–October',
              'Zones 5–9',
              'Planted in fall, overwintered as small plants, harvested as spring scallions or allowed to mature for full-size onions. Produces earlier than spring-planted onions.',
            ],
          ],
        },
      ],
    },

    // ─── SECTION 7: TOOLS, EQUIPMENT & GARDEN STRUCTURES ─────────────────────
    {
      id: 'tools-and-structures',
      title: 'Section 7: Tools, Equipment & Garden Structures',
      blocks: [
        {
          type: 'p',
          text: "A tool well-maintained at the end of the season is a tool ready for the beginning of the next one. The fall tool and equipment routine takes less than an afternoon and prevents the frustration of rusted, dull, or broken tools at the moment in spring when you need them most. It is also, for many gardeners, one of the most satisfying quiet-season rituals — the physical objects of the gardening year cleaned, sharpened, and put away with intention.",
        },
        {
          type: 'h3',
          text: 'The Annual Tool Maintenance Routine',
        },
        {
          type: 'list',
          items: [
            'Clean all tools: Remove all soil from metal surfaces using a stiff brush or a putty knife for caked material. Soil left on metal through winter accelerates rusting. For stubborn deposits, spray with water and scrub with a wire brush, then dry completely before the next step.',
            'Sand handles: Wooden tool handles benefit from light sanding with 80–120 grit sandpaper to remove any roughness or splinters, followed by a wipe-down with linseed oil. This prevents cracking and splitting through winter\'s dry indoor air and extends handle life significantly. Fiberglass handles need no sanding.',
            'Sharpen cutting tools: Hoes, spades, shovels, and edgers should be sharpened with a flat mill file to restore the cutting edge. Pruners, loppers, and pruning saws should be sharpened with a whetstone or sent to a professional sharpening service. Sharp tools require dramatically less effort and do less plant damage than dull ones.',
            'Oil metal surfaces: After cleaning and sharpening, wipe all metal surfaces with a light coat of vegetable oil, WD-40, or mineral oil to prevent rust. A simple method for maintaining a collection of digging tools: keep a bucket of builder\'s sand mixed with motor oil in the garden shed; plunge tools into it after each use through the season and at the end of the season for storage.',
            'Inspect and repair: Check handles for cracks or looseness (a loose handle on a heavy tool is a safety hazard), examine pruner springs and pivots, check the cutting edge of pruners for nicks that require professional sharpening. Replace rather than repair tools with cracked handles or irreparable pivot damage.',
            'Store properly: Hang long-handled tools on wall hooks or in a tool rack rather than leaning them in a corner where they will fall and bend. Store hand tools in a box or drawer rather than loose in a bucket where they will jostle against each other. Keep pruners, knives, and scissors in a dedicated holder, blades protected.',
          ],
        },
        {
          type: 'h3',
          text: 'Irrigation System Winterization',
        },
        {
          type: 'list',
          items: [
            'Drip irrigation: Drain all drip lines by opening the end caps and allowing lines to empty. Disconnect emitters if desired and store indoors. Disconnect from the water supply. Flexible polyethylene drip lines can survive freezing better than rigid pipe but should still be drained. Remove and store any timer-controllers in a frost-free location.',
            'In-ground sprinkler systems: Winterization requires blowing out all water with compressed air — a process best done by an irrigation professional with a commercial compressor on the first attempt so you learn the correct procedure. Each zone must be blown independently. Shut off the water supply and drain the backflow preventer. In Zone 5 and colder, this is a non-negotiable task before the first hard freeze.',
            'Hose bib and outdoor faucets: Turn off the interior shutoff valve for each outdoor faucet and open the outdoor faucet to drain the line between the shutoff and the outdoor opening. Frost-free sillcocks (the most common modern outdoor faucet type) drain automatically when turned off, but only if the hose is disconnected — a hose left attached traps water in the sillcock and it will freeze regardless of type.',
            'Garden hoses: Drain completely, coil, and store indoors or in an insulated space. Hoses left outdoors through hard freezes crack and split at the connections. A stored hose lasts 10–15+ years; one left outdoors through several winters may last 3–4.',
          ],
        },
        {
          type: 'h3',
          text: 'Garden Structures: Fall Inspection and Repair',
        },
        {
          type: 'list',
          items: [
            'Fences and trellises: Inspect for winter damage from the previous year: loose posts, split wood, broken wires, damaged hardware. Repair structural issues in fall when the ground is workable, not in spring when you need the structure functional immediately. Apply a fresh coat of exterior paint or wood preservative to any bare wood.',
            'Cold frames and greenhouses: Clean glazing (glass or polycarbonate) with soapy water to maximize light transmission. Inspect seals and gaskets. Replace cracked glass panes before winter. Apply a fresh bead of silicone sealant to any gaps around the perimeter. Clean out all plant debris that could harbor disease or pests.',
            'Raised beds: Inspect wooden raised beds for rot at the soil line — this is where wood deteriorates first. Treat with an appropriate wood preservative (avoid creosote or chromated copper arsenate, which leach into food garden soil; use linseed oil or a cedar-appropriate preservative). In climates where the ground freezes hard, expect some movement in raised bed corners each year; re-drive any loosened stakes in spring.',
            'Garden paths: Inspect stepping stones and path materials for heaving, wobbling, or settling that creates trip hazards. Reset heaved stepping stones before winter makes the problem worse. Fill any gaps or low spots that collect water, which will further heave adjacent materials.',
          ],
        },
      ],
    },
  ],
}

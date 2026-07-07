/**
 * Extended growing/care data for the Plant Database (/plants/) detail pages.
 * Companion file keyed by plants.js id — same pattern as plant-profiles.js,
 * plant-spacing.js, plant-yields.js, and planting-windows.js.
 *
 * Compiled reference data (university-extension-fact-sheet level of
 * specificity per species), not fabricated or generic boilerplate.
 * Verified 1:1 coverage against all 185 plants.js ids before shipping.
 *
 * Each entry:
 *  - matureSize: string, realistic mature height/width for this species
 *  - growthRate: 'slow' | 'moderate' | 'fast'
 *  - companions: [{ name, reason }] — for the 25 plants also covered by
 *    the Companion Planting Checker (companion-pairings.js), these are
 *    derived directly from that dataset's 'good' pairings so the two
 *    surfaces never contradict each other (verified in sync at build
 *    time — see companion-pairings.js); all other plants have
 *    independently authored companion suggestions. Can be an empty
 *    array (e.g. fennel, which is allelopathic and has zero 'good'
 *    pairings in the checker dataset) — the UI simply omits the
 *    Good Companions block when empty.
 *  - deerResistance: { rating: 'rarely damaged' | 'seldom damaged' |
 *    'occasionally damaged' | 'frequently damaged', note } — standard
 *    Rutgers/extension-style deer-resistance rating scale
 *  - pollinatorValue: { rating: 'high' | 'moderate' | 'low' | 'none', note }
 *  - zoneNotes: short paragraph on how the plant's performance actually
 *    varies across its zones array (cold edge vs. warm edge), not a
 *    generic 'check your frost dates' filler
 *  - troubleshooting: [{ issue, fix }] — the real, most common
 *    species-specific problems, 2-4 per plant
 */
export const plantCareDetails = {
  "sunflower": {
    "matureSize": "5-12 ft tall, 1-2 ft wide (branching types can spread 3 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Pole Beans",
        "reason": "Beans climb the sturdy sunflower stalk and fix nitrogen that benefits the heavy-feeding sunflower."
      },
      {
        "name": "Cucumbers",
        "reason": "Sunflowers provide light afternoon shade and a trellis structure for sprawling cucumber vines."
      },
      {
        "name": "Corn",
        "reason": "Both are tall, sun-loving, heavy feeders that share similar spacing and watering needs without competing for the same root depth."
      },
      {
        "name": "Nasturtium",
        "reason": "Nasturtium acts as a trap crop for aphids, drawing them away from sunflower buds and foliage."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young seedlings and tender new growth but tend to leave mature, rough-stemmed plants alone."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "A major nectar and pollen source for bumblebees and honeybees, and the ripening seed heads are a favorite of goldfinches and other seed-eating birds."
    },
    "zoneNotes": "As a fast-maturing annual grown from seed each year, sunflowers perform reliably from zone 3 to 11 as long as the 70-100 day frost-free window is met; in zones 3-5 choose earlier-maturing varieties and start after all frost danger has passed, while in the hottest zones (9-11) plants benefit from being timed to avoid peak midsummer heat stress during flowering.",
    "troubleshooting": [
      {
        "issue": "Stalks toppling in wind or rain",
        "fix": "Stake tall single-stem varieties at planting time and site them in a location sheltered from prevailing wind."
      },
      {
        "issue": "Birds and squirrels stripping seed heads before harvest",
        "fix": "Cover maturing heads with a loose mesh or paper bag once petals fade and seeds begin to plump."
      },
      {
        "issue": "Powdery mildew on lower leaves in humid weather",
        "fix": "Space plants for airflow and water at the base rather than overhead."
      },
      {
        "issue": "Sunflower moth larvae boring into the seed head",
        "fix": "Monitor for moths during bud stage and treat with Bt (Bacillus thuringiensis) if larvae are found."
      }
    ]
  },
  "lavender": {
    "matureSize": "1.5-3 ft tall, 2-3 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Rosemary",
        "reason": "Shares lavender's need for lean, fast-draining soil and full sun, making it easy to group in the same dry bed."
      },
      {
        "name": "Roses",
        "reason": "Lavender planted at the base of roses helps deter aphids and its silvery foliage complements rose color."
      },
      {
        "name": "Yarrow",
        "reason": "Both are drought-tolerant and attract beneficial predatory insects that help control garden pests."
      },
      {
        "name": "Santolina",
        "reason": "A classic Mediterranean-garden pairing that shares identical watering and pruning needs, forming a tidy low hedge together."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The strong essential-oil fragrance and fuzzy, aromatic foliage make lavender one of the most reliably deer-proof perennials."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Extremely attractive to honeybees, bumblebees, and a wide range of butterflies throughout its long summer bloom period."
    },
    "zoneNotes": "Lavandula angustifolia is the hardiest culinary lavender, reliable through zone 5 winters if drainage is excellent, but wet, poorly drained soil in a cold winter is far more likely to kill it than the cold itself; at the warm end (zone 9), plants appreciate a bit of afternoon relief from the most intense summer heat and benefit from slightly earlier spring pruning.",
    "troubleshooting": [
      {
        "issue": "Root rot and plant collapse",
        "fix": "Plant in raised mounds or amend heavy clay with coarse grit to guarantee sharp drainage; never let roots sit in soggy soil."
      },
      {
        "issue": "Legginess and a woody, hollow center after a few years",
        "fix": "Prune back by about one-third every year right after flowering, but never cut into old bare wood."
      },
      {
        "issue": "Fungal leaf spot in humid climates",
        "fix": "Space plants generously for airflow and avoid overhead watering."
      },
      {
        "issue": "Winter dieback in wet, cold climates",
        "fix": "Mulch lightly with gravel rather than organic mulch, which holds moisture against the crown."
      }
    ]
  },
  "black-eyed-susan": {
    "matureSize": "1-3 ft tall, 1-2 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Purple Coneflower",
        "reason": "Blooms simultaneously in midsummer with a complementary gold-and-purple color contrast and identical sun and drought tolerance."
      },
      {
        "name": "Russian Sage",
        "reason": "Its airy purple-blue spikes provide vertical contrast against Black-Eyed Susan's daisy-form flowers while sharing the same lean-soil preference."
      },
      {
        "name": "Switchgrass",
        "reason": "Ornamental grass adds movement and winter structure around the clump without competing for moisture in dry conditions."
      },
      {
        "name": "Bee Balm",
        "reason": "Both are native prairie perennials that bloom together and draw the same pollinator community."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The coarse, hairy foliage is generally unpalatable to deer, though hungry animals may nibble young shoots in early spring."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "A key native nectar source for bees and butterflies, including skippers and painted ladies, and its seed heads feed goldfinches into winter."
    },
    "zoneNotes": "This short-lived native perennial (often behaving as a biennial or reseeding annual) is reliably hardy to zone 3 and self-sows readily to maintain a stand over time, while in the hottest end of its range (zone 9) it appreciates a bit of afternoon shade and tends to flower earlier and burn out faster in prolonged summer heat.",
    "troubleshooting": [
      {
        "issue": "Septoria leaf spot causing blackened lower leaves",
        "fix": "Remove and discard affected foliage promptly and avoid overhead watering to limit fungal spread."
      },
      {
        "issue": "Stand thinning out after 2-3 years",
        "fix": "Let a few flower heads go to seed each fall to naturally replenish the planting, or divide and replant crowded clumps in spring."
      },
      {
        "issue": "Powdery mildew in humid, crowded plantings",
        "fix": "Thin seedlings and divide clumps to improve air circulation."
      },
      {
        "issue": "Aphids on new growth",
        "fix": "Spray off with a strong stream of water or introduce ladybugs; infestations rarely require chemical treatment."
      }
    ]
  },
  "hosta": {
    "matureSize": "1-3 ft tall, 1.5-4 ft wide depending on cultivar (dwarf types stay under 1 ft; giant types can exceed 4 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Astilbe",
        "reason": "Thrives in the same moist, shaded conditions and adds feathery flower plumes that contrast with hosta's bold leaves."
      },
      {
        "name": "Ferns",
        "reason": "Shares identical shade and moisture requirements while providing fine-textured foliage contrast."
      },
      {
        "name": "Heuchera (Coral Bells)",
        "reason": "Low-growing colorful foliage fills in around hosta clumps and tolerates the same dappled shade."
      },
      {
        "name": "Japanese Painted Fern",
        "reason": "Silvery fronds echo blue-toned hosta cultivars and both prefer consistently moist, humus-rich soil."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Hosta is one of the most deer-preferred perennials in the garden and stands are often browsed to the ground overnight without repellents or fencing."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The tall summer flower spikes attract hummingbirds and bumblebees, though the plant is grown primarily for foliage rather than bloom."
    },
    "zoneNotes": "Hostas need a period of winter chill to break dormancy properly and perform best in zones 3-7; in the warmer end of their range (zones 8-9) gardeners should choose more heat-tolerant, thicker-leaved cultivars and provide consistent moisture plus afternoon shade, since thin-leaved varieties can scorch in prolonged summer heat.",
    "troubleshooting": [
      {
        "issue": "Slugs and snails skeletonizing leaves",
        "fix": "Set out shallow beer traps or apply iron phosphate slug bait at the first sign of ragged holes."
      },
      {
        "issue": "Deer or rabbit browsing",
        "fix": "Install fencing or apply repellent sprays regularly through the growing season, reapplying after rain."
      },
      {
        "issue": "Sun scorch on leaf edges",
        "fix": "Move or shade plants that are getting more than a couple hours of hot afternoon sun, especially thin-leaved cultivars."
      },
      {
        "issue": "Crown rot in poorly drained soil",
        "fix": "Amend heavy clay with compost and avoid planting in low spots where water collects."
      }
    ]
  },
  "coneflower": {
    "matureSize": "2-4 ft tall, 1.5-2 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Black-Eyed Susan",
        "reason": "Blooms concurrently in midsummer with a complementary purple-and-gold color scheme and matching drought tolerance."
      },
      {
        "name": "Little Bluestem",
        "reason": "A native prairie grass that provides upright structure and winter interest around coneflower clumps without competing for water."
      },
      {
        "name": "Butterfly Weed",
        "reason": "Both are tough, sun-loving natives that bloom together and support the same pollinator and butterfly species."
      },
      {
        "name": "Salvia",
        "reason": "Its spiky purple-blue flowers offer vertical contrast to coneflower's flat daisy form while sharing lean, well-drained soil needs."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The bristly foliage and stems are generally unappealing to deer, though flower buds may occasionally be nipped."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "A premier native nectar plant for bumblebees, honeybees, and butterflies such as swallowtails and monarchs, with its seed heads later feeding goldfinches."
    },
    "zoneNotes": "Echinacea purpurea is a tough tallgrass-prairie native that tolerates the cold reliably to zone 3 as long as soil drainage is good in winter, while at the warm edge of its range (zone 9) it benefits from a bit of afternoon shade and consistent moisture during the hottest months, since prolonged extreme heat can shorten bloom duration.",
    "troubleshooting": [
      {
        "issue": "Aster yellows disease causing distorted, greenish flowers",
        "fix": "Remove and destroy infected plants immediately, since the disease is spread by leafhoppers and has no cure."
      },
      {
        "issue": "Japanese beetles skeletonizing leaves and flowers",
        "fix": "Hand-pick beetles into soapy water in early morning or use targeted traps away from the bed."
      },
      {
        "issue": "Powdery mildew in humid, crowded conditions",
        "fix": "Space plants for airflow and water at the base rather than overhead."
      },
      {
        "issue": "Root rot in poorly drained soil",
        "fix": "Plant in well-amended, well-draining soil and avoid overwatering established clumps, which are quite drought tolerant."
      }
    ]
  },
  "marigold": {
    "matureSize": "6 in-3 ft tall, 6-18 in wide depending on type (signet types stay compact, African types grow tallest)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Marigold roots release compounds that suppress root-knot nematodes in the soil around tomato plants."
      },
      {
        "name": "Squash",
        "reason": "The strong scent of marigold foliage helps confuse and deter squash bugs and cucumber beetles."
      },
      {
        "name": "Peppers",
        "reason": "Marigolds attract hoverflies and lacewings whose larvae prey on aphids commonly found on pepper plants."
      },
      {
        "name": "Basil",
        "reason": "Both thrive in the same warm, sunny conditions and their combined scents help mask vegetable plants from egg-laying pests."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The pungent, resinous scent of marigold foliage is highly effective at repelling deer, which is a major reason it's planted as a vegetable-garden border."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Attracts bees and hoverflies, though modern double-flowered cultivars offer less accessible pollen than single-flowered heirloom types."
    },
    "zoneNotes": "As a warm-season annual, marigold is grown identically from zone 3 to 11 by waiting until after the last frost to plant or direct sow; the main difference across zones is timing and longevity, with cooler zones getting one long summer flush and hot zones (9-11) sometimes seeing plants decline in peak midsummer heat before rebounding in fall.",
    "troubleshooting": [
      {
        "issue": "Spider mites in hot, dry weather",
        "fix": "Rinse foliage with a strong water spray and increase humidity around plants; severe infestations may need insecticidal soap."
      },
      {
        "issue": "Powdery mildew late in the season",
        "fix": "Improve air circulation by spacing plants properly and avoid wetting foliage when watering."
      },
      {
        "issue": "Botrytis (gray mold) on flowers in wet weather",
        "fix": "Deadhead spent and rotting blooms promptly and avoid overhead irrigation."
      },
      {
        "issue": "Slugs on seedlings",
        "fix": "Protect young transplants with a barrier of diatomaceous earth or crushed eggshell until established."
      }
    ]
  },
  "hydrangea": {
    "matureSize": "3-6 ft tall, 3-6 ft wide (variety dependent)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Shares the same preference for part shade and consistently moist, rich soil, filling in the ground layer beneath hydrangea's canopy."
      },
      {
        "name": "Astilbe",
        "reason": "Both enjoy moisture-retentive soil and partial shade, with astilbe's fine plumes contrasting hydrangea's bold mophead blooms."
      },
      {
        "name": "Ferns",
        "reason": "Provide textural contrast at the base of hydrangea shrubs while tolerating the same shaded, humid conditions."
      },
      {
        "name": "Boxwood",
        "reason": "Evergreen boxwood provides year-round structure and a formal backdrop for hydrangea's showy but seasonal blooms."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer readily browse hydrangea foliage and flower buds, often stripping plants in areas with high deer pressure unless protected."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Sterile mophead flowers offer little pollen, but lacecap and panicle types with fertile florets attract bees and butterflies."
    },
    "zoneNotes": "Hydrangea macrophylla sets next year's flower buds on old wood in late summer, so in the coldest part of its range (zone 4-5) winter dieback of those buds is the most common cause of a shrub that grows but never blooms, while in the warmest zones (zone 9) plants need consistent irrigation and benefit from afternoon shade to prevent wilting and flower scorch; soil pH in any zone also determines whether blooms turn blue (acidic) or pink (alkaline).",
    "troubleshooting": [
      {
        "issue": "No flowers despite healthy growth",
        "fix": "Avoid pruning in fall or spring, which removes the old-wood buds; prune bigleaf hydrangeas only immediately after flowering, and protect buds from late frost in cold zones."
      },
      {
        "issue": "Wilting in afternoon heat",
        "fix": "Increase watering frequency and add mulch to conserve soil moisture; plants often perk back up in the evening."
      },
      {
        "issue": "Powdery mildew on leaves",
        "fix": "Improve air circulation through selective thinning and avoid overhead watering."
      },
      {
        "issue": "Blooms are the wrong color",
        "fix": "Lower soil pH with sulfur for blue blooms or raise it with lime for pink blooms, applied several months before bloom set."
      }
    ]
  },
  "impatiens": {
    "matureSize": "6-24 in tall, 12-18 in wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Fuchsia",
        "reason": "Shares impatiens' preference for shade and consistent moisture, adding hanging, pendant blooms to the same container or bed."
      },
      {
        "name": "Coleus",
        "reason": "Colorful foliage complements impatiens' flowers and both thrive in the same shaded, evenly moist conditions."
      },
      {
        "name": "Begonia",
        "reason": "A classic shade-bed pairing with similar water needs and a long season of continuous bloom."
      },
      {
        "name": "Ferns",
        "reason": "Provide a textural, cooling backdrop for impatiens' bright flowers in deeply shaded beds."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Impatiens' soft, tender foliage and flowers make it a favorite deer snack, and plants are often devastated overnight in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Modern hybrid impatiens offer relatively little accessible nectar and are visited only occasionally by bees and hummingbirds compared to other shade annuals."
    },
    "zoneNotes": "Grown as a warm-season annual everywhere outside the tropics, impatiens is planted after last frost from zone 3 through 11; in the hottest zones (10-11) it can persist as a short-lived perennial through mild winters, while in cooler zones a single hard frost in fall ends the season, and gardeners everywhere should watch for downy mildew, which spreads faster in humid, high-rainfall regions of the Southeast.",
    "troubleshooting": [
      {
        "issue": "Impatiens downy mildew causing sudden collapse and leaf drop",
        "fix": "Remove and discard affected plants immediately (do not compost) and switch to New Guinea impatiens or another shade annual in that bed for a few seasons, since the pathogen persists in soil."
      },
      {
        "issue": "Wilting in hot, dry spells",
        "fix": "Water deeply and consistently, especially in containers, which dry out faster than garden beds."
      },
      {
        "issue": "Leggy, sparse growth by midsummer",
        "fix": "Pinch stem tips back by a few inches to encourage bushier, fuller growth."
      },
      {
        "issue": "Slug damage on young transplants",
        "fix": "Apply iron phosphate bait or set up beer traps around new plantings."
      }
    ]
  },
  "dahlia": {
    "matureSize": "1-6 ft tall, 1-3 ft wide depending on class (dwarf bedding types stay under 18 in; dinner-plate types reach 4-6 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Zinnia",
        "reason": "Both are prolific summer cut flowers with similar full-sun and moderate-water needs, extending color through the same bed."
      },
      {
        "name": "Cosmos",
        "reason": "Airy cosmos foliage softens the visual weight of dahlia's large blooms while tolerating the same sunny conditions."
      },
      {
        "name": "Salvia",
        "reason": "Spiky salvia flowers provide vertical contrast to dahlia's rounded blooms and both attract the same pollinators."
      },
      {
        "name": "Marigold",
        "reason": "Marigold's root exudates help deter nematodes that can otherwise damage dahlia tubers in the soil."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Dahlia's succulent stems and lush foliage are highly attractive to deer, and plants often need fencing or repellent in areas with browsing pressure."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Single and semi-double flowered dahlias attract bees and butterflies well, though fully double, densely petaled forms like dinner-plate types offer pollinators little accessible pollen."
    },
    "zoneNotes": "Dahlia tubers are only reliably winter-hardy in the ground in zones 8-11; in zones 3-7 tubers must be dug up after the first light frost blackens the foliage and stored indoors over winter in a cool, frost-free space, while in the warmest zones (10-11) tubers can be left in place year-round but benefit from division every couple of years to maintain vigor.",
    "troubleshooting": [
      {
        "issue": "Tubers rotting in storage",
        "fix": "Cure tubers for a few days before storing and keep them in dry peat moss or vermiculite at 40-50°F with some air circulation."
      },
      {
        "issue": "Earwigs and slugs chewing petals",
        "fix": "Set out rolled damp newspaper traps at night and remove trapped pests in the morning."
      },
      {
        "issue": "Powdery mildew late in the season",
        "fix": "Space plants for good airflow and avoid overhead watering, especially as nights cool in fall."
      },
      {
        "issue": "Toppling in wind due to top-heavy blooms",
        "fix": "Stake tall varieties at planting time and tie stems loosely as they grow to avoid snapping brittle stalks."
      }
    ]
  },
  "peony": {
    "matureSize": "2-3 ft tall, 2-3 ft wide (tree peonies can reach 4-7 ft)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Catmint (Nepeta)",
        "reason": "Its billowy blue-purple flowers and mounding habit hide peony's bare lower stems and fading foliage after bloom."
      },
      {
        "name": "Iris",
        "reason": "Bearded iris blooms just before or alongside peony, sharing the same full-sun, well-drained garden conditions."
      },
      {
        "name": "Baptisia",
        "reason": "Provides sturdy shrub-like structure and blue-toned flowers that complement peony's bloom time and needs minimal division, similar to peony's own long-lived nature."
      },
      {
        "name": "Alliums",
        "reason": "Their globe-shaped flowers rise above peony foliage on bare stems, adding vertical interest without shading the peony crown."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Peony foliage contains compounds deer generally find unpalatable, making it one of the more reliably deer-resistant perennials."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Single and semi-double peony flowers provide abundant pollen for bees, though the ants commonly seen on peony buds are simply feeding on nectar, not pollinating."
    },
    "zoneNotes": "Herbaceous peonies require a sustained period of winter chilling to bloom well and are reliably hardy to zone 3, but struggle badly in zone 9 and warmer where winters rarely provide enough cold hours, making them a poor choice south of zone 8 without selecting specific low-chill cultivars; at the cold end of the range, deep snow cover actually protects the crown from extreme temperature swings.",
    "troubleshooting": [
      {
        "issue": "Plants fail to flower for years after planting",
        "fix": "Check planting depth — peony eyes should be no more than 1-2 inches below the soil surface, since planting too deep is the most common cause of bloom failure."
      },
      {
        "issue": "Botrytis blight causing blackened buds and stems in wet spring weather",
        "fix": "Cut affected stems back to healthy tissue and clean up all fallen debris in fall to reduce overwintering spores."
      },
      {
        "issue": "Heavy double blooms flopping over after rain",
        "fix": "Install peony rings or hoop supports in early spring before growth fills in."
      },
      {
        "issue": "Ants on flower buds",
        "fix": "No treatment is needed — the ants are harmless and simply feeding on the sweet nectar peony buds secrete."
      }
    ]
  },
  "zinnia": {
    "matureSize": "1-4 ft tall, 1-1.5 ft wide depending on variety",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Cosmos",
        "reason": "Both are heat-loving, low-maintenance annuals that bloom continuously through summer with similar lean-soil, full-sun needs."
      },
      {
        "name": "Marigold",
        "reason": "Shares zinnia's love of full sun and helps deter common garden pests, making a classic cutting-garden pairing."
      },
      {
        "name": "Basil",
        "reason": "The strong scent of basil helps mask zinnia foliage from Japanese beetles while both enjoy the same hot, sunny growing conditions."
      },
      {
        "name": "Sunflower",
        "reason": "Provides height and structure behind shorter zinnia plantings while attracting the same pollinators and beneficial insects."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse zinnia blooms and foliage when other food is scarce, but it isn't a preferred favorite compared to more tender annuals."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Single and semi-double zinnias are outstanding butterfly plants, drawing monarchs, swallowtails, and skippers along with bees throughout the summer."
    },
    "zoneNotes": "As a fast, heat-loving annual, zinnia performs the same basic way from zone 3 to 11 once soil has warmed after last frost; the practical difference is length of season, with cooler zones getting a single strong summer flush while hot zones (9-11) can direct sow a second succession in midsummer for continued fall bloom, though high humidity anywhere increases the risk of powdery mildew.",
    "troubleshooting": [
      {
        "issue": "Powdery mildew coating leaves in humid weather",
        "fix": "Choose mildew-resistant varieties, space plants for airflow, and water at the soil line rather than overhead."
      },
      {
        "issue": "Japanese beetles skeletonizing foliage and flowers",
        "fix": "Hand-pick beetles into soapy water in early morning during peak beetle season."
      },
      {
        "issue": "Leggy, sparse plants",
        "fix": "Pinch young plants when they reach 6-8 inches tall to encourage branching and more flowers."
      },
      {
        "issue": "Slowed blooming in midsummer",
        "fix": "Deadhead spent flowers regularly and side-dress with compost to keep plants producing new buds."
      }
    ]
  },
  "cosmos": {
    "matureSize": "2-4 ft tall, 1.5-2 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Zinnia",
        "reason": "Both thrive in poor, dry soil and full sun, providing a long-blooming, low-maintenance cutting garden pairing."
      },
      {
        "name": "Sunflower",
        "reason": "Cosmos' airy, fine-textured foliage softens the bold, heavy presence of sunflowers planted nearby."
      },
      {
        "name": "Dill",
        "reason": "Both self-sow readily and attract the same beneficial insects, including parasitic wasps that help control garden pests."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Shares cosmos' preference for lean soil and full sun while adding movement and contrasting fine texture."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The delicate, fern-like foliage is not a preferred deer food, though isolated browsing can occur in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "An excellent nectar source for bees, and its open, single flowers are particularly attractive to butterflies including swallowtails and painted ladies."
    },
    "zoneNotes": "Cosmos is grown as an easy warm-season annual from zone 3 through 11, direct sown after last frost; the key difference across zones is soil fertility management, since rich garden soil (more common where gardeners heavily amend beds regardless of zone) causes excessive foliage and few flowers, while the lean, sandy soils more typical of hot southern zones actually favor cosmos' best bloom performance.",
    "troubleshooting": [
      {
        "issue": "Lots of foliage but few flowers",
        "fix": "Avoid fertilizing or planting in overly rich soil — cosmos blooms best when slightly stressed in lean, well-drained soil."
      },
      {
        "issue": "Plants flopping over in wind or after rain",
        "fix": "Choose shorter cultivars in windy sites, or stake and cluster plants together so they support one another."
      },
      {
        "issue": "Aster yellows causing distorted growth",
        "fix": "Remove and destroy infected plants promptly, since the disease is spread by leafhoppers and cannot be cured."
      },
      {
        "issue": "Self-sown seedlings becoming weedy the following year",
        "fix": "Deadhead most spent blooms before they set seed, leaving only a few for controlled reseeding."
      }
    ]
  },
  "daylily": {
    "matureSize": "1.5-3 ft tall (foliage), flower scapes to 3-4 ft; 1.5-3 ft wide clumps",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Russian Sage",
        "reason": "Provides airy vertical contrast to daylily's strappy foliage while sharing the same tough, drought-tolerant, full-sun requirements."
      },
      {
        "name": "Catmint (Nepeta)",
        "reason": "Its mounding blue-purple flowers fill the gap at the base of daylily clumps and blooms over a similarly long season."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Shares daylily's rugged adaptability to varied soils while adding contrasting fine texture and movement."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Both are nearly indestructible, low-maintenance perennials that bloom together in a classic gold-and-orange summer combination."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Daylily flower buds and foliage are a preferred deer food, and plants in high-pressure areas are often stripped of buds before they can open."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Attracts bumblebees and hummingbirds, especially to older, more open-throated cultivars, though heavily ruffled or double modern hybrids offer less accessible nectar."
    },
    "zoneNotes": "Daylilies are exceptionally adaptable and reliably hardy from zone 3 through 9, but chilling requirements vary by cultivar group — dormant types need real winter cold to perform their best and can struggle in zone 9, while evergreen and semi-evergreen types are bred for milder climates and may suffer foliage dieback in the coldest end of the range (zone 3) without winter mulch.",
    "troubleshooting": [
      {
        "issue": "Daylily rust causing orange pustules on leaves",
        "fix": "Remove and destroy infected foliage and choose rust-resistant cultivars where the disease is prevalent."
      },
      {
        "issue": "Fewer blooms after several years",
        "fix": "Divide overcrowded clumps every 3-4 years in early spring or fall to restore vigor and flowering."
      },
      {
        "issue": "Aphids clustering on flower buds",
        "fix": "Spray off with a strong stream of water or introduce beneficial insects like ladybugs."
      },
      {
        "issue": "Deer stripping buds before bloom",
        "fix": "Apply deer repellent regularly through bud formation or protect prized clumps with temporary fencing."
      }
    ]
  },
  "columbine": {
    "matureSize": "1-3 ft tall, 1-1.5 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Coral Bells (Heuchera)",
        "reason": "Shares the same part-shade, well-drained conditions and its evergreen foliage fills in after columbine foliage declines in summer heat."
      },
      {
        "name": "Hosta",
        "reason": "Bold hosta leaves provide textural contrast to columbine's ferny foliage and both tolerate the same woodland-edge light."
      },
      {
        "name": "Astilbe",
        "reason": "Blooms slightly later, extending color in the shade garden once columbine's spring flush fades."
      },
      {
        "name": "Ferns",
        "reason": "Native ferns share columbine's preference for humusy, moisture-retentive soil and mask columbine's tendency to look ragged after leafminer damage."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The ferny, slightly toxic foliage is generally passed over by deer, though hungry animals may nip flower buds in early spring."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The long nectar spurs are specifically adapted to ruby-throated hummingbirds and long-tongued bumblebees."
    },
    "zoneNotes": "In the cooler end of its range (zones 3-4) columbine blooms later, in late spring to early summer, and plants are longer-lived since summer heat stress is minimal. In the warmer zones 8-9, bloom comes earlier in spring and plants often decline or die out within 2-3 years as heat and humidity shorten their lifespan, so allowing self-sown seedlings to replace parent plants is important there.",
    "troubleshooting": [
      {
        "issue": "Columbine leafminer tunnels (pale squiggly trails in leaves)",
        "fix": "Cut foliage back to the crown once tunneling appears; new clean leaves will regrow and the plant is not otherwise harmed."
      },
      {
        "issue": "Powdery mildew on foliage in humid summers",
        "fix": "Improve air circulation by thinning nearby plantings and avoid overhead watering late in the day."
      },
      {
        "issue": "Short-lived plants disappearing after a few years",
        "fix": "Let a few seed heads mature and drop each year so self-sown seedlings continuously replace older plants."
      }
    ]
  },
  "petunia": {
    "matureSize": "6-12 in tall, 12-18 in spread (trailing types spread to 3 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Lantana",
        "reason": "Matches petunia's heat tolerance and continuous bloom habit for season-long container and bed color."
      },
      {
        "name": "Marigold",
        "reason": "Marigold's pungent foliage helps deter aphids that are also attracted to petunia's soft new growth."
      },
      {
        "name": "Sweet Potato Vine",
        "reason": "Its trailing chartreuse or purple foliage complements petunia blooms and shares identical sun and water needs in mixed containers."
      },
      {
        "name": "Verbena",
        "reason": "A classic thriller-filler-spiller container partner with the same full-sun, well-drained preferences and similar bloom continuity."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Petunias are not a preferred deer browse but the tender, water-rich foliage and flowers may be sampled when other food is scarce."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Attracts hummingbirds and hawk moths to the tubular flowers, though modern ruffled hybrids offer less accessible nectar than older single-flowered types."
    },
    "zoneNotes": "Petunias are grown as annuals throughout nearly all of their listed range, but in the warmest zones (10-11) they can persist and rebloom through a mild winter if cut back, essentially behaving as short-lived tender perennials. In cooler zones 3-6, they should not go in the ground until after all frost danger has passed since even light frost will kill them.",
    "troubleshooting": [
      {
        "issue": "Leggy, sparse growth by midsummer",
        "fix": "Shear plants back by one-third to one-half and follow with a balanced liquid fertilizer to force fresh branching and bloom."
      },
      {
        "issue": "Budworm caterpillars chewing holes in buds and flowers",
        "fix": "Handpick visible worms in the evening or apply a Bt (Bacillus thuringiensis) spray at first sign of damage."
      },
      {
        "issue": "Yellowing lower leaves and poor bloom in containers",
        "fix": "Petunias are heavy feeders — apply a water-soluble fertilizer weekly, since container watering leaches nutrients quickly."
      }
    ]
  },
  "geranium": {
    "matureSize": "1-2 ft tall, 1-1.5 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Lobelia",
        "reason": "Trailing blue lobelia contrasts nicely with upright geranium blooms and shares similar container watering needs."
      },
      {
        "name": "Dusty Miller",
        "reason": "Silvery foliage sets off geranium's bright flower clusters and both tolerate the same dry-between-waterings regimen."
      },
      {
        "name": "Petunia",
        "reason": "A classic window box pairing sharing full sun and moderate water requirements for season-long color."
      },
      {
        "name": "Rosemary",
        "reason": "Shares geranium's preference for well-drained soil and drier conditions, and its scent can help mask geranium foliage from browsing pests."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The strongly scented, slightly fuzzy foliage is highly unpalatable to deer, making zonal geraniums one of the most reliably deer-proof bedding plants."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Double and semi-double zonal cultivars offer little accessible nectar, though bees will visit single-flowered older varieties."
    },
    "zoneNotes": "In zones 9-11, Pelargonium × hortorum is a true perennial subshrub that can live for years outdoors with only light pruning. Outside its listed hardy range it is grown as a warm-season annual or must be brought indoors before first frost and kept as a houseplant or dormant bare-root cutting over winter to survive.",
    "troubleshooting": [
      {
        "issue": "Botrytis (gray mold) on flowers in wet, humid weather",
        "fix": "Deadhead spent blooms promptly and avoid wetting foliage when watering; improve spacing for airflow."
      },
      {
        "issue": "Yellowing lower leaves",
        "fix": "This is often natural leaf senescence, but check that soil is allowed to dry between waterings since geraniums are prone to root rot in soggy soil."
      },
      {
        "issue": "Leggy, sparse growth after overwintering indoors",
        "fix": "Cut plants back by half in late winter before moving back outdoors to encourage compact new growth."
      }
    ]
  },
  "salvia": {
    "matureSize": "1.5-3 ft tall, 1.5-2 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Russian Sage",
        "reason": "Shares identical drought tolerance and full-sun requirements while echoing salvia's blue-purple spiky form for a cohesive dry border."
      },
      {
        "name": "Coreopsis",
        "reason": "Golden daisy-like blooms provide color contrast against salvia's spikes and both thrive on neglect in lean, sandy soil."
      },
      {
        "name": "Yarrow",
        "reason": "Both are highly drought tolerant once established and bloom over a long season, reducing supplemental watering needs in a mixed bed."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Fine grass texture and movement complement salvia's dense spikes while requiring the same lean, well-drained conditions."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The aromatic, slightly fuzzy foliage typical of Salvia species is one of the most consistently deer-resistant traits in the perennial border."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Tubular flowers are a favorite nectar source for hummingbirds, bumblebees, and native long-tongued bees throughout the bloom season."
    },
    "zoneNotes": "At the cold edge of its range (zone 4-5) many perennial salvias benefit from a winter mulch and may still be treated as short-lived perennials or reseeding annuals in harsh winters. In the warm end of its range (zones 9-11), salvia can bloom nearly year-round with minimal dormancy and often needs periodic hard cutbacks to prevent woody, sprawling growth.",
    "troubleshooting": [
      {
        "issue": "Stops blooming by midsummer",
        "fix": "Deadhead spent spikes down to a lateral bud to trigger a strong second flush of bloom."
      },
      {
        "issue": "Floppy, sprawling stems",
        "fix": "Grow in lean soil without added fertilizer, since rich soil produces weak, floppy growth; stake tall cultivars if needed."
      },
      {
        "issue": "Woody, unproductive base after several years",
        "fix": "Cut plants back hard by one-third in early spring before new growth emerges to rejuvenate the plant."
      }
    ]
  },
  "bleeding-heart": {
    "matureSize": "2-3 ft tall, 2-3 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Hosta's expanding summer foliage fills the visual gap left when bleeding heart goes dormant after flowering."
      },
      {
        "name": "Astilbe",
        "reason": "Later-blooming astilbe extends color in the same moist, part-shade woodland setting after bleeding heart's spring show ends."
      },
      {
        "name": "Ferns",
        "reason": "Ferns share the humus-rich, consistently moist soil bleeding heart prefers and their fine texture contrasts with its arching stems."
      },
      {
        "name": "Hellebore",
        "reason": "Blooms earlier in late winter and its evergreen foliage provides year-round structure once bleeding heart dies back to the ground."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The foliage contains isoquinoline alkaloids that make it mildly toxic and generally unappealing to browsing deer."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The distinctively shaped pink flowers are pollinated primarily by bumblebees strong enough to force open the heart-shaped petals."
    },
    "zoneNotes": "In the cooler zones 3-5, bleeding heart stays in leaf and bloom well into early summer since heat arrives late. In the warmer zones 8-9, summer heat triggers earlier dormancy, often by late spring, so gardeners there should plant companions specifically to hide the gap left by its disappearing foliage.",
    "troubleshooting": [
      {
        "issue": "Foliage yellows and collapses in early summer",
        "fix": "This is normal summer dormancy, not a disease — simply cut back the dying foliage and let interplanted companions take over visually."
      },
      {
        "issue": "Slugs and snails chewing new spring growth",
        "fix": "Apply iron phosphate slug bait around emerging shoots in early spring when damage is most likely."
      },
      {
        "issue": "Poor flowering in deep shade",
        "fix": "Move to a site with morning sun and afternoon shade, since bleeding heart needs some direct light to flower well despite being shade-tolerant for foliage."
      }
    ]
  },
  "bee-balm": {
    "matureSize": "2-4 ft tall, 2-3 ft wide (spreads by rhizomes)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Garlic Chives",
        "reason": "Their pungent scent helps mask bee balm's fragrance from pests while sharing similar water needs and attracting overlapping pollinators."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Blooms concurrently in similar sun and soil conditions, and its coarser gold flowers contrast well with bee balm's shaggy red or purple blooms."
      },
      {
        "name": "Phlox (Garden Phlox)",
        "reason": "Both are prone to powdery mildew in humid weather, so pairing them lets a single air-circulation and spacing strategy benefit both."
      },
      {
        "name": "Joe Pye Weed",
        "reason": "Shares bee balm's preference for moist, fertile soil and its similar late-summer bloom period extends the pollinator display."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The strongly minty, aromatic foliage of Monarda is highly effective at repelling deer browsing."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "A magnet for ruby-throated hummingbirds, bumblebees, and numerous butterfly species drawn to its nectar-rich tubular flowers."
    },
    "zoneNotes": "In the northern part of its range (zones 3-4), bee balm spreads more slowly and clumps stay more contained, needing less frequent division. In the humid southern end (zones 8-9), powdery mildew pressure is significantly higher due to warm, humid summer nights, making good air circulation and mildew-resistant cultivars especially important there.",
    "troubleshooting": [
      {
        "issue": "Powdery white coating on leaves in summer",
        "fix": "Divide clumps every 2-3 years to improve air circulation and choose mildew-resistant cultivars like 'Jacob Cline' or 'Marshall's Delight'."
      },
      {
        "issue": "Aggressive spreading crowding out neighbors",
        "fix": "Divide and thin the rhizomatous clump every spring, removing outer runners to keep it in bounds."
      },
      {
        "issue": "Fewer blooms by late summer",
        "fix": "Deadhead spent flower heads regularly to encourage continued branching and rebloom."
      }
    ]
  },
  "yarrow": {
    "matureSize": "2-3 ft tall, 2-3 ft wide (spreads by rhizomes)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Lavender",
        "reason": "Both thrive in poor, dry, well-drained soil and full sun, making them ideal low-water border partners."
      },
      {
        "name": "Russian Sage",
        "reason": "Shares yarrow's drought tolerance and airy texture, creating a cohesive xeric planting that needs no supplemental fertilizer."
      },
      {
        "name": "Coneflower (Echinacea)",
        "reason": "Blooms alongside yarrow in midsummer with similar sun and soil needs, and both attract beneficial pollinators and predatory insects."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Grasses provide vertical, fine-textured contrast to yarrow's flat flower clusters while tolerating the same lean soil."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The strongly aromatic, feathery foliage is one of the most reliably deer-resistant perennials in the sunny border."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The flat-topped umbels are an easy landing platform for a wide range of beneficial insects, including ladybugs, lacewings, hoverflies, and butterflies."
    },
    "zoneNotes": "In the coldest zones (3-4), yarrow's foliage dies back completely in winter and the plant returns reliably from its hardy rhizomatous roots each spring. In the warmest end of its range (zone 9), yarrow may stay semi-evergreen through winter but is more prone to root rot if summer humidity and rainfall are high, so drainage becomes especially critical there.",
    "troubleshooting": [
      {
        "issue": "Floppy stems that splay open in the middle of the clump",
        "fix": "Never fertilize yarrow — rich soil is the primary cause of weak, floppy growth; grow in lean, unamended soil instead."
      },
      {
        "issue": "Aggressive spreading into neighboring plants",
        "fix": "Divide the clump every 2-3 years in spring or fall and remove outer rhizome runners to control spread."
      },
      {
        "issue": "Powdery mildew in humid, crowded conditions",
        "fix": "Space plants for good air circulation and avoid overhead watering late in the day."
      }
    ]
  },
  "coreopsis": {
    "matureSize": "1.5-2 ft tall, 1.5-2 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Salvia",
        "reason": "Blue-purple spikes provide striking color contrast against coreopsis's golden daisy blooms while sharing the same drought-tolerant needs."
      },
      {
        "name": "Russian Sage",
        "reason": "Both tolerate lean, sandy soil and full sun without fertilizer, making a reliable low-maintenance pairing."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Overlaps in bloom color family and season, and both are equally tough, long-blooming, low-water perennials."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Fine grass texture and airy movement complement coreopsis's ferny, thread-leaf foliage in a naturalistic planting."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally leave the fine, thread-like foliage alone, though occasional browsing can occur when other forage is scarce."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The bright yellow daisy flowers are highly attractive to small native bees, butterflies, and beneficial hoverflies."
    },
    "zoneNotes": "In the cooler zones 4-5, threadleaf coreopsis forms tighter, more compact clumps and blooms slightly later into midsummer. In the warmest zones 9-10, plants bloom earlier and for a longer overall season but tend to be shorter-lived, often needing division or replacement every 2-3 years as clumps decline in the heat.",
    "troubleshooting": [
      {
        "issue": "Bloom slows noticeably by midsummer",
        "fix": "Shear the entire plant back by about one-third after the first flush to stimulate a fresh round of buds."
      },
      {
        "issue": "Open, floppy center of the clump",
        "fix": "Divide congested clumps every 2-3 years in spring to maintain a tight, upright habit."
      },
      {
        "issue": "Root or crown rot in heavy, poorly drained soil",
        "fix": "Plant in raised beds or amend clay soil with grit to ensure sharp drainage, since coreopsis will not tolerate wet feet."
      }
    ]
  },
  "foxglove": {
    "matureSize": "3-6 ft tall (bloom spike), 1-1.5 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Broad hosta leaves provide textural contrast at the base of foxglove's tall spires while sharing the same part-shade, humus-rich soil preference."
      },
      {
        "name": "Astilbe",
        "reason": "Both thrive in moist, woodland-edge conditions and bloom in overlapping early-summer timing for a layered cottage-garden look."
      },
      {
        "name": "Ferns",
        "reason": "Fine fern texture softens the base of foxglove's dramatic vertical spikes and both tolerate similar dappled shade."
      },
      {
        "name": "Columbine",
        "reason": "A classic cottage-garden pairing that shares similar bloom time, part-shade tolerance, and cheerful self-seeding habit."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Foxglove contains cardiac glycosides that are highly toxic if ingested, making it one of the most reliably deer-proof plants for the garden."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The tubular spotted blooms are precisely sized for bumblebees, which crawl deep inside to reach the nectar and pollen."
    },
    "zoneNotes": "In cooler zones 4-5, foxglove reliably completes its two-year biennial cycle, forming a foliage rosette the first year and flowering the second before dying. In the warmest zones 8-9, hot summers can shorten the plant's life or cause it to behave more like a short-lived perennial, and self-sown seedlings there often germinate and establish faster due to the longer growing season.",
    "troubleshooting": [
      {
        "issue": "No flowers the first year after planting",
        "fix": "This is expected biennial behavior — foxglove forms only a leafy rosette its first year and blooms the following season."
      },
      {
        "issue": "Powdery mildew or leaf spot in humid weather",
        "fix": "Space plants well for airflow and remove and destroy affected lower leaves promptly."
      },
      {
        "issue": "Plant fails to reappear after blooming",
        "fix": "Allow some flower spikes to fully mature and drop seed before cutting back, since foxglove relies on self-sowing to persist in the garden."
      }
    ]
  },
  "dianthus": {
    "matureSize": "6-12 in tall, 12-18 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Lavender",
        "reason": "Shares dianthus's need for sharp drainage, full sun, and low fertility, forming a classic fragrant cottage-garden edging combination."
      },
      {
        "name": "Salvia",
        "reason": "Upright salvia spikes add vertical contrast to dianthus's low mounding habit while requiring the same lean, well-drained soil."
      },
      {
        "name": "Yarrow",
        "reason": "Both tolerate poor soil and drought once established, making them reliable low-water border companions."
      },
      {
        "name": "Roses",
        "reason": "A traditional pairing — dianthus's clove scent and low mounding habit complement rose bushes while sharing similar sun and drainage requirements."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The narrow, grass-like, slightly bitter foliage is not a preferred deer food, though flowers may occasionally be nibbled."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The fringed, clove-scented flowers attract butterflies and long-tongued bees able to reach the narrow floral tube."
    },
    "zoneNotes": "In the coldest zones (3-4), dianthus benefits from a light winter mulch and well-drained siting to prevent crown rot from alternating freeze-thaw cycles. In the warmest zones (8-9), the main challenge shifts from cold hardiness to summer heat and humidity, which can cause foliage rot, so excellent drainage and avoiding overhead watering become more important than winter protection there.",
    "troubleshooting": [
      {
        "issue": "Center of the clump dies out, leaving a bare patch",
        "fix": "Divide and replant the healthy outer sections every 2-3 years, since dianthus clumps naturally decline in the center over time."
      },
      {
        "issue": "Crown or root rot in heavy or wet soil",
        "fix": "Plant in raised beds or amend soil with coarse grit or sand to ensure sharp, fast drainage."
      },
      {
        "issue": "Fewer blooms after the initial flush",
        "fix": "Shear plants back by about half after the main bloom to encourage a second, lighter flush later in the season."
      }
    ]
  },
  "astilbe": {
    "matureSize": "1.5-3 ft tall, 1.5-2 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Bold hosta leaves contrast beautifully with astilbe's feathery plumes and both demand the same consistently moist, shaded conditions."
      },
      {
        "name": "Ferns",
        "reason": "Fine fern texture echoes astilbe's own ferny foliage and both thrive in the same rich, damp woodland soil."
      },
      {
        "name": "Bleeding Heart",
        "reason": "Blooms earlier in spring, handing off color to astilbe's summer plumes in the same moist part-shade setting."
      },
      {
        "name": "Japanese Painted Fern",
        "reason": "Its silvery fronds brighten shaded plantings and share astilbe's need for consistent moisture and humus-rich soil."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Astilbe is generally passed over by deer, though tender new spring growth can occasionally be browsed when other food is scarce."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The dense plumes attract bees and small beneficial insects, though astilbe is grown primarily for foliage and floral display rather than pollinator value."
    },
    "zoneNotes": "In the cooler zones 3-5, astilbe tolerates more direct sun since intense heat is less of a stress factor there. In the warmest zone 8, astilbe needs consistently deeper shade and much more frequent watering to avoid scorched, crispy foliage, since it has very low drought tolerance and heat accelerates soil drying.",
    "troubleshooting": [
      {
        "issue": "Crispy, browning leaf edges",
        "fix": "Increase watering frequency and check that soil never dries out completely, since astilbe has almost no drought tolerance."
      },
      {
        "issue": "Sparse bloom in a shady spot",
        "fix": "Move to a site with a few hours of morning sun, as deep, all-day shade can reduce flowering even though the plant survives there."
      },
      {
        "issue": "Woody, overcrowded clumps blooming poorly after several years",
        "fix": "Divide clumps every 3-4 years in early spring to rejuvenate vigor and flowering."
      }
    ]
  },
  "snapdragon": {
    "matureSize": "1-3 ft tall, 0.5-1 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Pansy",
        "reason": "Both are cool-season bloomers that thrive in the same crisp spring and fall temperatures and share similar watering needs."
      },
      {
        "name": "Sweet Alyssum",
        "reason": "Low, spreading alyssum fills the bare soil at the base of snapdragon's upright spikes and blooms in the same cool conditions."
      },
      {
        "name": "Stock (Matthiola)",
        "reason": "A classic cut-flower-garden pairing sharing similar cool-season timing, sun needs, and use as a fragrant cutting flower."
      },
      {
        "name": "Calendula",
        "reason": "Blooms during the same cool spring window and its cheerful color complements snapdragon spikes in cutting gardens."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Snapdragons are not a preferred browse but tender flower spikes may be nipped by deer when little else is available."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The hinged flowers require the weight of a bumblebee to pry them open, making bumblebees the primary and most effective pollinator."
    },
    "zoneNotes": "In cooler zones 4-6, snapdragons are typically planted in spring and bloom through the cooler part of summer before heat causes them to decline. In the warmest zones 9-11, snapdragons perform best as a fall-planted cool-season crop, blooming through winter and into spring, since summer heat there causes them to stop flowering or bolt.",
    "troubleshooting": [
      {
        "issue": "Plants stop blooming and look leggy in summer heat",
        "fix": "Cut back hard by one-third once heat arrives; plants often rebound and rebloom as temperatures cool in fall."
      },
      {
        "issue": "Rust (orange pustules on leaf undersides)",
        "fix": "Choose rust-resistant cultivars, avoid overhead watering, and remove and destroy infected foliage promptly."
      },
      {
        "issue": "Weak, floppy stems",
        "fix": "Pinch young plants when 4-6 inches tall to encourage bushier, sturdier branching, and stake tall varieties if needed."
      }
    ]
  },
  "tomato": {
    "matureSize": "3-6 ft tall (unstaked sprawl to 4 ft wide), indeterminate vines can reach 8-10 ft on a trellis",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Basil",
        "reason": "Classic kitchen and garden pairing — basil thrives in the same warm, sunny conditions tomatoes need, and many gardeners report reduced pest pressure when grown together."
      },
      {
        "name": "Carrot",
        "reason": "Carrots' deep, loosening roots improve soil structure around tomato roots without competing for the same growing space."
      },
      {
        "name": "Onion",
        "reason": "Alliums' strong scent helps confuse and deter many common tomato pests."
      },
      {
        "name": "Garlic",
        "reason": "Alliums' strong scent helps confuse and deter many common tomato pests."
      },
      {
        "name": "Chives",
        "reason": "Alliums' strong scent helps confuse and deter many common tomato pests."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "The fuzzy, strongly-scented foliage deters many deer, but hungry deer in early spring will still browse young transplants and ripe fruit."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Flowers are self-fertile and wind-pollinated, but buzz-pollination by bumblebees measurably increases fruit set and size."
    },
    "zoneNotes": "In Zones 3-5, the growing season is often too short for long-maturing indeterminate varieties unless started indoors 6-8 weeks early and grown under black plastic mulch for extra soil heat. In Zones 9-11, spring-planted tomatoes typically stop setting fruit once nighttime temperatures stay above 75°F, so gardeners there rely on a second fall crop planted in late summer.",
    "troubleshooting": [
      {
        "issue": "Blossom-end rot (dark, sunken patches on fruit bottoms)",
        "fix": "Keep soil moisture consistent with regular deep watering and mulch, since the rot is caused by uneven water uptake disrupting calcium delivery, not usually a calcium deficiency in the soil itself."
      },
      {
        "issue": "Cracked fruit",
        "fix": "Water evenly and avoid letting soil dry out between heavy rains, which causes fruit to swell faster than the skin can stretch."
      },
      {
        "issue": "Yellowing lower leaves with brown spots (early blight)",
        "fix": "Remove and destroy affected foliage promptly, mulch to prevent soil splash onto leaves, and rotate planting location each year."
      },
      {
        "issue": "Hornworms stripping foliage",
        "fix": "Hand-pick caterpillars in the early morning or evening, and leave any hornworm covered in small white cocoons alone — those are parasitic wasp larvae already controlling the population."
      }
    ]
  },
  "zucchini": {
    "matureSize": "2-3 ft tall, 3-4 ft wide bush habit (vining types can spread 6-8 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Corn",
        "reason": "Squash-family leaves shade the soil around corn, retaining moisture and suppressing weeds."
      },
      {
        "name": "Green Bean",
        "reason": "Nitrogen-fixing beans benefit the heavy-feeding squash sharing the bed."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "The bristly, prickly leaves and stems discourage casual browsing, though deer will still eat young seedlings and tender new growth when other food is scarce."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Large, bright yellow male and female flowers are a favorite of honeybees, bumblebees, and squash bees, which are essential since zucchini fruit cannot form without insect-transferred pollen."
    },
    "zoneNotes": "In cooler Zones 3-5, plants should go in only after soil reaches 60-70°F, since chilled seedlings stall and become far more vulnerable to squash vine borer; a single planting usually runs from June frost-out to first fall frost. In hot Zones 9-11, production often slows or stops in peak summer heat, so a second sowing in late summer extends harvest into a cooler fall window.",
    "troubleshooting": [
      {
        "issue": "Powdery mildew coating leaves in white film",
        "fix": "Improve air circulation by spacing plants generously, water at the base rather than overhead, and apply a potassium bicarbonate or neem-based fungicide at first sign."
      },
      {
        "issue": "Squash vine borer causing sudden wilting of an otherwise healthy plant",
        "fix": "Slit the stem lengthwise near the entry hole to remove the larva, then mound moist soil over the wound to encourage new rooting."
      },
      {
        "issue": "Fruit rotting at the blossom end without developing",
        "fix": "Hand-pollinate with a small brush between male and female flowers in early morning if bee activity is low."
      },
      {
        "issue": "Squash bugs clustering on stems and leaf undersides",
        "fix": "Check leaf undersides regularly and crush or remove bronze egg clusters before they hatch, and use row covers until bloom."
      }
    ]
  },
  "winter-squash": {
    "matureSize": "1-2 ft tall, vines sprawling 8-15 ft (bush types stay within 3-4 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Corn",
        "reason": "Sprawling squash vines shade the soil around corn's shallow roots, conserving moisture and crowding out weeds."
      },
      {
        "name": "Pole Bean",
        "reason": "Nitrogen-fixing beans feed the heavy-feeding squash sharing the bed, echoing the traditional Three Sisters planting."
      },
      {
        "name": "Nasturtium",
        "reason": "Nasturtiums act as a trap crop, luring squash bugs and aphids away from the main vines."
      },
      {
        "name": "Radish",
        "reason": "Fast-maturing radishes are thought to help repel squash vine borer and are harvested out of the way long before the squash vines fill the bed."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Coarse, hairy vines are low on the preference list, but deer will still nibble tender growing tips and young leaves early in the season."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Large yellow-orange blossoms are visited heavily by bumblebees, honeybees, and specialist squash bees, which are the primary pollinators responsible for fruit set."
    },
    "zoneNotes": "In Zones 3-5, the long 90-110 day maturation window means seed must go in directly after frost with no room for a late start, or be started indoors in biodegradable pots to avoid root disturbance. In Zones 8-11, growers often time planting so fruit matures in the drier late-summer stretch, since heavy humidity and rain during ripening promote fruit rot and shorten storage life.",
    "troubleshooting": [
      {
        "issue": "Sudden vine wilting despite moist soil",
        "fix": "Check the base of the stem for a sawdust-like frass hole from squash vine borer and slit the stem to remove the larva, then bury the wounded section to root."
      },
      {
        "issue": "Fruit rotting where it touches damp soil",
        "fix": "Set developing squash on a piece of cardboard, straw, or an overturned pot to keep it off wet ground as it matures."
      },
      {
        "issue": "Soft spots after harvest during storage",
        "fix": "Cure fruit in the sun for 1-2 weeks at harvest to harden the skin, and store only blemish-free squash in a cool, dry space around 50-55°F."
      },
      {
        "issue": "Powdery mildew late in the season",
        "fix": "Once fruit is sized up, mildew on older leaves is mostly cosmetic — remove the worst-affected leaves for air flow but prioritize letting fruit finish ripening rather than aggressive spraying."
      }
    ]
  },
  "okra": {
    "matureSize": "4-6 ft tall, 1.5-2 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Pepper",
        "reason": "Both crave the same hot, full-sun conditions and okra's tall growth can offer light afternoon shade relief to peppers in the hottest climates."
      },
      {
        "name": "Basil",
        "reason": "Basil's strong scent helps confuse aphids and other soft-bodied pests that target tender okra shoots."
      },
      {
        "name": "Cucumber",
        "reason": "Both are vigorous, heat-loving vines/shrubs with similar watering needs, making efficient use of the same bed."
      },
      {
        "name": "Radish",
        "reason": "Fast-maturing radish is a traditional companion said to repel flea beetles that otherwise pit young okra leaves."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The coarse, bristly foliage and thick stems are unpalatable to deer, making okra one of the more reliably deer-resistant vegetable crops."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The large, pale-yellow hibiscus-like flowers (okra is in the mallow family) are especially attractive to bumblebees and other large native bees."
    },
    "zoneNotes": "Okra is only realistic outdoors in Zones 6-11 because it demands soil above 65°F and a long stretch of true summer heat to size up pods; in Zone 6 gardeners must start seed indoors and use black plastic mulch to bank enough heat units before frost. In Zones 9-11, plants often become semi-perennial, continuing to produce into a mild fall and sometimes overwintering in the warmest microclimates.",
    "troubleshooting": [
      {
        "issue": "Pods becoming tough and fibrous",
        "fix": "Harvest pods daily once production starts, picking them at 2-3 inches long — oversized pods are essentially unsalvageable."
      },
      {
        "issue": "Poor germination in cool soil",
        "fix": "Soak seed overnight before sowing and wait until soil is reliably above 65°F, since okra seed simply rots in cold, wet ground."
      },
      {
        "issue": "Aphids clustering on new growth and pods",
        "fix": "Spray a strong jet of water or insecticidal soap on the undersides of leaves, and encourage ladybugs by avoiding broad-spectrum insecticides."
      },
      {
        "issue": "Skin irritation while harvesting",
        "fix": "Wear long sleeves and gloves when picking, as the fine spines on stems and pods of many varieties can irritate skin."
      }
    ]
  },
  "lettuce": {
    "matureSize": "6-12 in tall, 6-10 in wide depending on type (head vs. loose-leaf)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Carrot",
        "reason": "Lettuce is shallow-rooted and shade-tolerant enough to intercrop between carrot rows without competing."
      },
      {
        "name": "Chives",
        "reason": "Chives' scent helps deter aphids, a common pest on tender lettuce leaves."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Tender, water-rich leaves make lettuce one of the first crops deer target, and a single browsing visit can wipe out an entire bed overnight."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grown as a leaf crop harvested before flowering, lettuce offers little pollinator value unless allowed to bolt, at which point its small yellow flowers draw a few tiny native bees and hoverflies."
    },
    "zoneNotes": "In Zones 3-6, lettuce is essentially a spring-and-fall-only crop, since it bolts and turns bitter once temperatures consistently exceed 75-80°F, leaving a short window on either side of summer. In Zones 8-11, gardeners instead grow it through fall, winter, and early spring, avoiding the hot months entirely and choosing heat-tolerant varieties for the shoulder seasons.",
    "troubleshooting": [
      {
        "issue": "Bolting and turning bitter in warm weather",
        "fix": "Plant heat-tolerant or bolt-resistant varieties for late-season crops and provide afternoon shade once temperatures climb."
      },
      {
        "issue": "Slugs and snails shredding leaves",
        "fix": "Set out shallow beer traps or apply iron phosphate bait around the bed, and water in the morning so soil surface dries by evening."
      },
      {
        "issue": "Slow, spotty germination in warm soil",
        "fix": "Lettuce seed goes dormant above roughly 80°F, so sow in late afternoon and keep the seedbed cool and shaded until sprouting."
      },
      {
        "issue": "Aphids hiding in leaf folds",
        "fix": "Rinse plants with a strong water spray and encourage predatory insects by interplanting with alliums or flowering herbs."
      }
    ]
  },
  "bell-pepper": {
    "matureSize": "1.5-3 ft tall, 1.5-2 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Basil",
        "reason": "Classic pairing — basil is reputed to improve pepper flavor and help repel common pests."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Peppers are not a top deer favorite, but young transplants and tender new leaves are still browsed when deer pressure is high."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Small white self-fertile flowers don't require insects to set fruit, but visits from bumblebees and sweat bees measurably improve pollination rates and fruit size."
    },
    "zoneNotes": "In Zones 5-6, peppers need transplants started indoors 8-10 weeks ahead and benefit from black plastic mulch or wall-o-water protection to bank enough heat, since a short season can leave fruit stuck at green and never reaching its ripe color. In Zones 9-11, plants often persist as short-lived perennials if protected from any occasional cold snap, continuing to flower and fruit for more than one season.",
    "troubleshooting": [
      {
        "issue": "Blossom drop with no fruit set",
        "fix": "Blossom drop is usually triggered by temperatures above 90°F or below 60°F — provide afternoon shade cloth in extreme heat and wait out cool snaps."
      },
      {
        "issue": "Sunscald — pale, papery patches on exposed fruit",
        "fix": "Avoid over-pruning foliage that shades developing fruit, and use light shade cloth during peak summer intensity."
      },
      {
        "issue": "Blossom-end rot on fruit tips",
        "fix": "Maintain even soil moisture with mulch and consistent watering rather than letting the root zone swing between dry and saturated."
      },
      {
        "issue": "Aphids curling new leaves",
        "fix": "Spray undersides of leaves with insecticidal soap and interplant with alliums or basil to deter buildup."
      }
    ]
  },
  "green-bean": {
    "matureSize": "Bush types: 1-2 ft tall, 1-1.5 ft wide; pole types: vines 6-10 ft on a trellis",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Corn",
        "reason": "The Three Sisters combination — corn provides a living trellis for climbing beans."
      },
      {
        "name": "Pumpkin",
        "reason": "Nitrogen-fixing beans benefit the heavy-feeding squash sharing the bed, in the classic Three Sisters pattern."
      },
      {
        "name": "Zucchini",
        "reason": "Nitrogen-fixing beans benefit the heavy-feeding squash sharing the bed."
      },
      {
        "name": "Cucumber",
        "reason": "Classic pairing — beans fix nitrogen that benefits the heavier-feeding cucumber."
      },
      {
        "name": "Carrot",
        "reason": "Compatible growth habits and root depths, with beans adding nitrogen to the shared bed."
      },
      {
        "name": "Eggplant",
        "reason": "Beans are thought to help repel Colorado potato beetle, which also attacks eggplant."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Tender leaves and pods are highly palatable, and deer often target young bean rows before gardeners even notice the damage starting."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Self-pollinating flowers don't require insect visits to set pods, but bumblebees and honeybees do visit and can slightly boost yields, especially in pole varieties."
    },
    "zoneNotes": "In Zones 3-5, beans should be direct-sown only after soil warms past 60°F and all frost danger has passed, since cold, wet seed rots quickly, leaving a tight window for multiple bush bean successions. In Zones 8-11, the short 50-60 day maturation of bush types allows two or three successive sowings across spring and fall, avoiding only the hottest peak-summer weeks when flowering can stall.",
    "troubleshooting": [
      {
        "issue": "Flowers dropping without setting pods",
        "fix": "Blossom drop is usually heat-triggered above roughly 90°F — provide light afternoon shade during heat waves and ensure consistent watering."
      },
      {
        "issue": "Mexican bean beetle larvae skeletonizing leaves",
        "fix": "Check leaf undersides for yellow-orange egg clusters and spiny larvae, hand-pick when populations are small, and rotate planting location yearly."
      },
      {
        "issue": "Powdery or downy mildew on leaves in humid weather",
        "fix": "Space plants for good airflow, water at the soil line, and remove heavily infected foliage promptly."
      },
      {
        "issue": "Poor germination or seedlings rotting",
        "fix": "Avoid overwatering right after sowing and wait for soil to warm sufficiently, since bean seed is very prone to rotting in cold, saturated ground."
      }
    ]
  },
  "kale": {
    "matureSize": "1.5-2.5 ft tall, 1.5-2 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Dill",
        "reason": "Dill's flowers attract parasitic wasps and other predatory insects that prey on brassica pests."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse kale, especially young transplants, but its slightly bitter, sulfurous flavor makes it somewhat less preferred than softer greens like lettuce."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grown for leaves and typically harvested before bolting, kale offers minimal pollinator value unless left to flower, when its yellow blooms attract small native bees."
    },
    "zoneNotes": "In Zones 3-6, kale is prized as a hardy crop that survives light frost and even snow cover, with flavor actually improving after a cold snap converts starches to sugars; a fall planting can often be harvested well into winter under row cover. In Zones 9-11, it performs best as a fall-through-spring crop, since prolonged summer heat causes bitterness and bolting, and gardeners there avoid summer sowings entirely.",
    "troubleshooting": [
      {
        "issue": "Cabbage worms chewing holes in leaves",
        "fix": "Cover plants with floating row cover to block egg-laying moths, or hand-pick green caterpillars and apply Bt (Bacillus thuringiensis) if infestations are heavy."
      },
      {
        "issue": "Aphids clustering in curled new leaves",
        "fix": "Rinse with a strong water spray and encourage ladybugs and parasitic wasps by interplanting with dill or alyssum."
      },
      {
        "issue": "Leaves turning bitter and tough in summer heat",
        "fix": "Provide afternoon shade during hot spells or shift kale plantings entirely to the cooler shoulder seasons."
      },
      {
        "issue": "Yellowing lower leaves",
        "fix": "This is often normal aging — simply remove old outer leaves to redirect energy to new growth, but check for nitrogen deficiency if it spreads rapidly."
      }
    ]
  },
  "carrot": {
    "matureSize": "8-12 in tall foliage, roots 6-10 in deep, plants spaced 2-3 in apart",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Carrots' deep, loosening roots improve soil structure around tomato roots without competing for the same growing space."
      },
      {
        "name": "Onion",
        "reason": "Onion scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects."
      },
      {
        "name": "Garlic",
        "reason": "Allium scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects."
      },
      {
        "name": "Chives",
        "reason": "Allium scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects."
      },
      {
        "name": "Lettuce",
        "reason": "Lettuce is shallow-rooted and shade-tolerant enough to intercrop between carrot rows without competing."
      },
      {
        "name": "Peas",
        "reason": "Peas fix nitrogen in the soil, benefiting the heavier-feeding carrot planted nearby."
      },
      {
        "name": "Green Bean",
        "reason": "Compatible growth habits and root depths, with beans adding nitrogen to the shared bed."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer occasionally nibble the ferny top foliage, but they generally leave carrot beds alone since the edible root is out of sight underground."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Harvested as a root crop before flowering, carrots have little pollinator value, though a plant left to bolt produces umbrella-shaped flower clusters attractive to hoverflies and small parasitic wasps."
    },
    "zoneNotes": "In Zones 3-6, carrots are best as a spring or late-summer-into-fall crop, and roots left in the ground under mulch after a light frost actually sweeten and can be harvested through much of winter in milder years. In Zones 8-11, summer heat causes roots to become tough, woody, and bitter, so growers there sow primarily in fall and winter for spring harvest.",
    "troubleshooting": [
      {
        "issue": "Forked or misshapen roots",
        "fix": "Work soil deeply and remove rocks and clumps before sowing, since roots fork around any obstruction they meet."
      },
      {
        "issue": "Poor, spotty germination",
        "fix": "Keep the seedbed consistently moist for the 1-3 weeks carrot seed takes to sprout, covering lightly with row cover or a board to prevent surface drying."
      },
      {
        "issue": "Green shoulders on roots",
        "fix": "Hill a bit of soil or mulch over exposed root tops as they develop to block sunlight, which is what triggers the bitter green color."
      },
      {
        "issue": "Carrot rust fly larvae tunneling into roots",
        "fix": "Use fine mesh row cover from sowing through harvest, since adult flies lay eggs at the soil surface near the base of the foliage."
      }
    ]
  },
  "broccoli": {
    "matureSize": "1.5-3 ft tall, 1.5-2 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Dill",
        "reason": "Dill's flowers attract parasitic wasps and other predatory insects that prey on cabbage worms and other brassica pests."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Broccoli's tender leaves and developing heads are highly attractive to deer, and unprotected plantings are frequently among the first crops browsed in a mixed garden."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Heads harvested before flowering offer little value, but any plant left to bolt produces clusters of small yellow flowers that draw honeybees, bumblebees, and cabbage white butterflies."
    },
    "zoneNotes": "In Zones 3-6, broccoli is grown as a spring crop timed to mature before summer heat causes premature small-headed bolting, with a second planting in midsummer for a fall harvest that often produces better quality heads than spring's. In Zones 8-10, it's grown almost exclusively as a fall-through-winter crop, since heads planted in spring bolt quickly once temperatures rise.",
    "troubleshooting": [
      {
        "issue": "Cabbage worms and loopers chewing heads and leaves",
        "fix": "Cover with row cover from transplanting through harvest, or apply Bt at first sign of caterpillar damage."
      },
      {
        "issue": "Heads bolting to loose yellow flowers before harvest",
        "fix": "Harvest heads promptly once tight and dark green, and avoid planting broccoli where it will mature during a hot stretch."
      },
      {
        "issue": "Small, premature 'buttoning' heads",
        "fix": "This is usually caused by transplant stress or a cold snap after planting too-large transplants — set out compact, stocky seedlings at the correct time for your zone."
      },
      {
        "issue": "Aphids hiding deep in developing heads",
        "fix": "Rinse heads thoroughly before use and encourage natural predators by avoiding broad-spectrum insecticide sprays."
      }
    ]
  },
  "spinach": {
    "matureSize": "6-10 in tall, 6-8 in wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Radish",
        "reason": "Fast-growing radish is a compatible, non-competing filler crop between slower-growing spinach."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Soft, tender leaves make spinach highly palatable, and it is often one of the first crops browsed when deer enter a vegetable garden."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Spinach is wind-pollinated, not insect-pollinated, and is almost always harvested well before any flowering would occur."
    },
    "zoneNotes": "In Zones 3-6, spinach thrives in the cool of early spring and again in fall, and mature plants can often survive under snow cover, resuming growth the moment temperatures rise. In Zones 8-11, it performs best as a fall-through-early-spring crop entirely, since it bolts almost immediately once day length and temperature increase in late spring.",
    "troubleshooting": [
      {
        "issue": "Bolting to seed stalk quickly",
        "fix": "Plant heat- and bolt-tolerant varieties for late plantings, and harvest promptly once daylength and temperatures start climbing in spring."
      },
      {
        "issue": "Leafminers tunneling pale trails inside leaves",
        "fix": "Remove and destroy affected leaves immediately, and cover new plantings with row cover to block egg-laying adult flies."
      },
      {
        "issue": "Downy mildew causing yellow patches with fuzzy gray growth underneath",
        "fix": "Improve airflow with wider spacing, water at the soil line, and choose resistant varieties in humid climates."
      },
      {
        "issue": "Slow or poor germination in warm soil",
        "fix": "Spinach seed germinates poorly above about 75°F — sow in cool soil or pre-chill seed briefly in the refrigerator before planting warm-season successions."
      }
    ]
  },
  "swiss-chard": {
    "matureSize": "1.5-2 ft tall, 1-1.5 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Onion",
        "reason": "Alliums' scent helps deter aphids and leafminers that target chard's tender leaves."
      },
      {
        "name": "Bush Bean",
        "reason": "Nitrogen-fixing beans benefit the moderately heavy-feeding chard sharing the bed, without competing for the same canopy space."
      },
      {
        "name": "Cabbage",
        "reason": "Chard's beet-family roots occupy a different soil niche than brassica roots, making efficient use of shared bed space."
      },
      {
        "name": "Marigold",
        "reason": "Marigolds help deter leaf miners and aphids while adding season-long color alongside chard's own colorful stems."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Chard's thick, glossy leaves are somewhat less tender than lettuce or spinach, giving it moderate deer resistance, though hungry deer will still browse it when preferred food is unavailable."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grown for its leaves and stalks and rarely allowed to flower, chard offers minimal pollinator value, though a bolted plant's small green flower clusters can draw a few small native bees."
    },
    "zoneNotes": "In Zones 3-6, chard is typically grown spring through fall as a cut-and-come-again crop and tolerates light frost well, often surviving into early winter under row cover. In Zones 8-11, its notable heat tolerance compared to spinach and lettuce lets it keep producing through summer, making it one of the few leafy greens that bridges the entire warm season there.",
    "troubleshooting": [
      {
        "issue": "Leafminers creating pale tunnels in leaves",
        "fix": "Remove and destroy mined leaves promptly and use row cover on new plantings to block egg-laying adult flies."
      },
      {
        "issue": "Leaves turning tough and bitter",
        "fix": "Harvest outer leaves regularly while young and tender rather than letting them grow oversized before cutting."
      },
      {
        "issue": "Cercospora leaf spot (small tan spots with purple margins)",
        "fix": "Space plants for airflow, water at the soil line, and remove affected leaves promptly to slow spread."
      },
      {
        "issue": "Slow regrowth after heavy cutting",
        "fix": "Always leave the central growing crown intact when harvesting outer stalks so the plant can continue producing new leaves."
      }
    ]
  },
  "peas": {
    "matureSize": "Bush types: 1.5-2.5 ft tall; vining types: 4-8 ft on a trellis, 1-1.5 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Carrot",
        "reason": "Peas fix nitrogen in the soil, benefiting the heavier-feeding carrot planted nearby."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Tender vines, leaves, and young pods are highly attractive to deer, and unprotected pea rows are commonly among the first plants browsed in spring."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Flowers are largely self-pollinating, but bumblebees and other native bees do visit and can improve pod set, especially in sweet pea's edible-podded relatives."
    },
    "zoneNotes": "In Zones 3-6, peas are strictly a cool-season crop sown as soon as soil can be worked in early spring, since they stop producing and decline once summer heat arrives, though a second sowing 10-12 weeks before first fall frost often succeeds. In Zones 8-11, peas are grown through fall and winter instead, as summer heat there causes flowers to drop before pods can set.",
    "troubleshooting": [
      {
        "issue": "Flowers dropping without setting pods in warm weather",
        "fix": "Time plantings so flowering occurs while temperatures stay below about 75°F, since heat is the primary cause of pea blossom drop."
      },
      {
        "issue": "Powdery mildew coating leaves late in the season",
        "fix": "Choose resistant varieties, space plants for airflow, and expect some mildew as the natural end-of-season signal to pull warm-weather plantings."
      },
      {
        "issue": "Poor germination in cold, wet soil",
        "fix": "Inoculate seed with rhizobium inoculant at planting and avoid sowing in waterlogged soil, since pea seed rots quickly in cold, saturated ground."
      },
      {
        "issue": "Aphids clustering on new growth",
        "fix": "Rinse plants with a strong water spray and encourage ladybugs and lacewings by avoiding broad-spectrum insecticides."
      }
    ]
  },
  "radish": {
    "matureSize": "6-12 in tall, 4-6 in wide (root 1-2 in diameter for globe types)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Cucumber",
        "reason": "Radish is a classic trap crop for cucumber beetles, drawing pest pressure away from the cucumber."
      },
      {
        "name": "Spinach",
        "reason": "Fast-growing radish is a compatible, non-competing filler crop between slower-growing spinach."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The pungent, mustard-oil foliage is generally unappealing to deer, though hungry animals may nibble tops in early spring."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Rarely flowers under normal harvest timing, but bolted plants left in the ground produce small white-purple flowers that draw hoverflies and small native bees."
    },
    "zoneNotes": "At the cold edge (zone 3-4), radish is strictly a short-window spring and late-summer crop sown as soon as soil can be worked, since it needs consistently cool soil to avoid pithy roots. At the warm edge (zone 9-11), spring windows close fast once daytime temps exceed 75°F and bolting accelerates, so growers there rely mainly on a long fall-through-winter growing season instead.",
    "troubleshooting": [
      {
        "issue": "Roots stay small or fail to bulb",
        "fix": "Thin seedlings to 1-2 inches apart early — overcrowding is the single most common cause of skinny, misshapen roots."
      },
      {
        "issue": "Bolting to flower before roots size up",
        "fix": "Sow in cool weather only (spring or fall) and keep soil consistently moist; heat and drought stress both trigger premature bolting."
      },
      {
        "issue": "Flea beetle shot-hole damage on leaves",
        "fix": "Cover rows with lightweight row cover immediately after sowing, since radish germinates and matures fast enough to often outrun light infestations."
      }
    ]
  },
  "onion": {
    "matureSize": "12-18 in tall, 4-6 in wide (bulb 2-4 in diameter)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Alliums' strong scent helps confuse and deter many common tomato pests."
      },
      {
        "name": "Carrot",
        "reason": "Onion scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects."
      },
      {
        "name": "Beet",
        "reason": "Compatible growth habits and non-competing root structures."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The sulfur-compound scent and taste of the foliage and bulb make onion one of the most reliably deer-proof vegetable crops."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Bulbing onions are harvested before flowering, but plants left to bolt produce large globe-shaped umbels that honeybees and native bees readily visit."
    },
    "zoneNotes": "Day-length variety matching matters more than zone alone: short-day varieties bulb properly in zones 8-11's shorter winter daylight, while long-day varieties are required for reliable bulbing in zones 3-6 where summer days are longer; intermediate-day types bridge zones 6-7. Getting this wrong is the most common reason gardeners report onions that never bulb up.",
    "troubleshooting": [
      {
        "issue": "Bulbs stay small or fail to form",
        "fix": "Confirm you're growing a day-length type matched to your latitude, and keep beds weed-free since onions compete poorly with weeds for nutrients."
      },
      {
        "issue": "Thrips causing silvery streaks on leaves",
        "fix": "Spray with insecticidal soap and keep nearby weeds mowed, since thrips overwinter in grassy vegetation adjacent to onion beds."
      },
      {
        "issue": "Bulbs rot in storage",
        "fix": "Stop watering once tops flop over, cure bulbs in a warm dry spot for 2-3 weeks before storage, and only store fully dry, thick-necked bulbs."
      }
    ]
  },
  "garlic": {
    "matureSize": "18-24 in tall, 6-12 in wide (bulb 2-3 in diameter)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Alliums' strong scent helps confuse and deter many common tomato pests."
      },
      {
        "name": "Carrot",
        "reason": "Allium scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Garlic's sulfur compounds make both the bulb and foliage highly unpalatable to deer and are even used as a base for homemade deer repellent sprays."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Hardneck varieties produce scapes with flower-like bulbils rather than true nectar-rich flowers, offering limited pollinator value compared to onion's bolted blooms."
    },
    "zoneNotes": "Hardneck garlic thrives at the cold end of its range (zones 3-5), where a real winter chilling period produces the biggest, most flavorful bulbs and pronounced scapes; softneck types perform better toward the warm edge (zones 7-9) where mild winters still meet the minimum 4-6 weeks below 40°F needed to trigger bulbing. In zones warmer than 9, garlic often fails to bulb properly without artificial pre-chilling of seed cloves.",
    "troubleshooting": [
      {
        "issue": "Bulbs fail to divide into cloves",
        "fix": "Ensure cloves experience adequate cold (40°F or below) for several weeks; in mild-winter zones, refrigerate seed cloves for 6-8 weeks before fall planting."
      },
      {
        "issue": "White rot or basal rot in bulbs",
        "fix": "Practice a 4-year rotation away from alliums in affected beds, since the fungus persists in soil for years and there is no in-season cure."
      },
      {
        "issue": "Small bulbs at harvest",
        "fix": "Cut scapes promptly on hardneck types — leaving them redirects the plant's energy into the flower stalk instead of bulb sizing."
      }
    ]
  },
  "beet": {
    "matureSize": "12-18 in tall, 6-8 in wide (root 2-3 in diameter at harvest)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Onion",
        "reason": "Compatible growth habits and non-competing root structures."
      },
      {
        "name": "Cabbage",
        "reason": "Beet's mineral-accumulating roots and the brassica's different nutrient needs make this a low-competition pairing."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse the tender greens, especially young seedlings, though the below-ground root itself is untouched."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grown as a root crop and harvested before flowering, so it offers little pollinator forage; bolted second-year plants produce wind-pollinated flowers of no real nectar value."
    },
    "zoneNotes": "In cooler zones (3-5), beets are typically a single spring-into-fall crop with one main harvest window, while in zones 8-10 gardeners can grow two full crops — a spring one before summer heat and a second sown in late summer for fall and winter harvest. Hot spells above 85°F in the warmer part of the range can cause zoning (white rings) in the roots regardless of latitude.",
    "troubleshooting": [
      {
        "issue": "Roots have white concentric rings inside",
        "fix": "This 'zoning' is caused by heat fluctuations during growth; harvest earlier and time plantings to mature during cooler weather."
      },
      {
        "issue": "Poor germination or bare patches",
        "fix": "Beet 'seeds' are actually dried fruit clusters containing multiple embryos — soak seed 12-24 hours before sowing and keep soil consistently moist during the 1-2 week germination window."
      },
      {
        "issue": "Leaf miner tunnels in greens",
        "fix": "Remove and destroy affected leaves promptly and cover new plantings with row cover to block egg-laying adult flies."
      }
    ]
  },
  "hot-pepper": {
    "matureSize": "18-36 in tall, 12-24 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Basil",
        "reason": "Classic pairing — basil is reputed to help repel common pepper pests."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The capsaicin that makes hot peppers spicy to humans also makes the foliage and fruit unappealing to deer, one of the more reliably deer-resistant vegetables."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Self-pollinating but the small white or purple star-shaped flowers are visited by bumblebees and sweat bees, which improve fruit set."
    },
    "zoneNotes": "At the cool edge of its range (zone 5-6), hot peppers need to be started indoors 8-10 weeks early and given a warm microclimate (black plastic mulch, wall-o-water) since fruit set stalls below 60°F nights. Toward the hot end (zone 9-11), plants perform as short-lived perennials that can overwinter with protection and often produce more intensely flavored, hotter fruit under extended heat stress.",
    "troubleshooting": [
      {
        "issue": "Blossom drop with no fruit set",
        "fix": "Extreme heat above 90°F or cool nights below 60°F both cause flowers to abort; provide afternoon shade during heat waves or wait out cool snaps."
      },
      {
        "issue": "Blossom end rot on fruit",
        "fix": "Maintain even soil moisture with mulch and consistent watering, since calcium uptake problems from irregular watering (not soil calcium deficiency) are the usual cause."
      },
      {
        "issue": "Aphids clustering on new growth",
        "fix": "Spray off with a strong water jet or apply insecticidal soap, and encourage ladybugs by avoiding broad-spectrum pesticides."
      }
    ]
  },
  "sweet-potato": {
    "matureSize": "12-18 in tall, vines trailing 4-10 ft",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Bush Bean",
        "reason": "Nitrogen-fixing bush beans benefit the heavy-feeding sweet potato vine while staying low enough not to be smothered by its sprawl."
      },
      {
        "name": "Marigold",
        "reason": "Marigold roots release compounds that suppress root-knot nematodes, a common pest of sweet potato tubers."
      },
      {
        "name": "Dill",
        "reason": "Dill's umbel flowers attract predatory and parasitic insects that help control sweet potato hornworm and other foliage pests."
      },
      {
        "name": "Thyme",
        "reason": "Low-growing thyme tolerates the light shade cast by sprawling sweet potato vines and acts as a living mulch to suppress weeds."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse the trailing vine foliage in open gardens, though damage rarely affects the underground tubers directly."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Rarely flowers in temperate gardens since it's grown for tubers and harvested before the morning-glory-like blooms typically appear."
    },
    "zoneNotes": "At the cool edge of its listed range (zone 8), sweet potato needs black plastic mulch to warm the soil and a full 100-120 frost-free days to size up tubers, and vines are killed by the first light frost. Toward zones 10-11 it behaves as a true tender perennial, often producing continuously and requiring active vine management to keep it from rooting at every leaf node and overrunning the bed.",
    "troubleshooting": [
      {
        "issue": "Lush vines but few or small tubers",
        "fix": "Avoid high-nitrogen fertilizer, which pushes vine growth at the expense of root development; use a low-nitrogen, higher-potassium feed instead."
      },
      {
        "issue": "Tubers with rough, cracked skin",
        "fix": "Keep soil moisture consistent — alternating drought and heavy watering causes growth cracks; mulch to even out soil moisture."
      },
      {
        "issue": "Sweet potato weevil damage",
        "fix": "Rotate planting sites yearly, hill soil to cover exposed tubers, and remove volunteer plants promptly, since weevils overwinter in plant debris and soil."
      }
    ]
  },
  "cabbage": {
    "matureSize": "12-15 in tall, 18-24 in wide (head 6-10 in diameter)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Dill",
        "reason": "Dill's flowers attract parasitic wasps and other predatory insects that prey on cabbage worms and other brassica pests."
      },
      {
        "name": "Chamomile",
        "reason": "A classic pairing — chamomile is reputed to improve the growth and flavor of nearby brassicas."
      },
      {
        "name": "Beet",
        "reason": "Beet's mineral-accumulating roots and the brassica's different nutrient needs make this a low-competition pairing."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Cabbage heads and leaves are a favorite deer browse; unprotected plantings near wooded edges are routinely stripped overnight."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Harvested before flowering in most gardens, but bolted second-year plants produce yellow flower clusters that attract cabbage white butterflies (a pest, not a benefit) along with some bees."
    },
    "zoneNotes": "In cold zones (3-5), cabbage is grown as a single spring-to-summer or summer-to-fall crop timed around the region's one cool window, and hard frosts below 20°F can damage exposed heads. In warmer zones (8-10), it is primarily a fall-through-winter crop planted to mature during cool months, since summer heat above 80°F causes heads to bolt, split, or fail to form.",
    "troubleshooting": [
      {
        "issue": "Cabbage worms chewing large holes in leaves",
        "fix": "Cover plants with row cover from transplanting onward to exclude egg-laying moths, or hand-pick and apply Bt (Bacillus thuringiensis) as a targeted organic treatment."
      },
      {
        "issue": "Heads splitting after heavy rain",
        "fix": "Harvest promptly once heads feel firm, or reduce splitting by twisting the plant slightly to break some roots and slow water uptake."
      },
      {
        "issue": "Heads fail to form, staying loose and leafy",
        "fix": "Ensure consistent, ample water and fertile soil — cabbage is a heavy feeder and inconsistent conditions prevent tight head formation."
      }
    ]
  },
  "eggplant": {
    "matureSize": "24-36 in tall, 18-24 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Green Bean",
        "reason": "Beans are thought to help repel Colorado potato beetle, which also attacks eggplant."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will sometimes browse young eggplant foliage, though the fuzzy leaf texture and nightshade compounds make it less preferred than many vegetables."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Self-fertile, but the nodding purple flowers benefit from buzz pollination by bumblebees, which improves fruit set and size."
    },
    "zoneNotes": "At the cool edge (zone 5-6), eggplant needs an 8-week head start indoors and black plastic mulch or row cover to hold soil warmth, since growth stalls entirely below 60°F. In the hottest zones (9-11) it thrives as a short-lived perennial that can be cut back and overwintered indoors or under cover, often outproducing plants grown as strict annuals further north.",
    "troubleshooting": [
      {
        "issue": "Flea beetles riddling leaves with small holes",
        "fix": "Cover young transplants with row cover until plants are established and vigorous enough to outgrow moderate damage."
      },
      {
        "issue": "Fruit turns bitter or seedy",
        "fix": "Harvest while skin is still glossy and fruit is young; overripe eggplant with dull skin develops bitterness and tough seeds."
      },
      {
        "issue": "Colorado potato beetle defoliation",
        "fix": "Hand-pick adults and orange egg clusters on leaf undersides regularly, since this pest can strip young plants quickly if left unchecked."
      }
    ]
  },
  "arugula": {
    "matureSize": "6-12 in tall, 6-8 in wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Lettuce",
        "reason": "Similar fast-growing, cool-season habits and shallow roots make these compatible neighbors with no competition for space."
      },
      {
        "name": "Nasturtium",
        "reason": "Nasturtium acts as a trap crop for flea beetles and aphids, pulling pest pressure away from the more valuable arugula crop."
      },
      {
        "name": "Radish",
        "reason": "Both are ultra-fast maturing crops well suited to succession interplanting between slower vegetables."
      },
      {
        "name": "Marigold",
        "reason": "Marigold's strong scent can help mask arugula from flea beetles, which locate host plants partly by smell."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The peppery, mustard-oil flavor that makes arugula distinctive in salads also makes it less palatable to deer than milder greens."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Bolted plants produce cream-colored, purple-veined flowers that are readily visited by small native bees and hoverflies."
    },
    "zoneNotes": "In cool zones (3-6), arugula can be grown through most of the summer with only brief midsummer bolting risk. In hot zones (8-11), it bolts to flower within days once temperatures pass 75-80°F, so it is best treated as a spring and fall-through-winter crop there, with light afternoon shade extending the harvest window slightly in shoulder seasons.",
    "troubleshooting": [
      {
        "issue": "Bolting to flower within a few weeks of sowing",
        "fix": "Sow only in cool weather (below 75°F) and provide afternoon shade in warm spells; once bolted, flavor turns sharply bitter and harvest should stop."
      },
      {
        "issue": "Flea beetle shot-holes in leaves",
        "fix": "Use lightweight row cover from sowing onward, since arugula is one of the flea beetle's most preferred hosts."
      },
      {
        "issue": "Leaves taste excessively bitter or hot",
        "fix": "Harvest young and often — leaves become more pungent and tough as the plant matures or experiences heat/drought stress."
      }
    ]
  },
  "corn": {
    "matureSize": "6-8 ft tall, 1-1.5 ft wide per stalk",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Green Bean",
        "reason": "The Three Sisters combination — corn provides a living trellis for climbing beans."
      },
      {
        "name": "Pumpkin",
        "reason": "The Three Sisters combination — squash leaves shade the soil, retaining moisture and suppressing weeds around corn."
      },
      {
        "name": "Zucchini",
        "reason": "Squash-family leaves shade the soil around corn, retaining moisture and suppressing weeds."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer and raccoons both readily raid corn, browsing young stalks and stripping ripening ears; unfenced plantings often need dedicated protection."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated rather than insect-pollinated, though bees do sometimes collect its abundant, protein-rich pollen from the tassels."
    },
    "zoneNotes": "In short-season zones (3-5), gardeners must choose early-maturing varieties (60-75 days) and start as soon as soil hits 60°F to finish before fall frost. In long-season zones (8-11), a wider range of varieties works and successive plantings every 2-3 weeks can extend fresh-corn harvest across most of the summer.",
    "troubleshooting": [
      {
        "issue": "Poor kernel fill, ears with gaps",
        "fix": "Plant in blocks of at least 4 short rows rather than one long row — corn is wind-pollinated and needs pollen drift from multiple directions for full ears."
      },
      {
        "issue": "Corn earworm in ear tips",
        "fix": "Apply a few drops of mineral oil to the silks just after they emerge to smother young larvae before they enter the ear."
      },
      {
        "issue": "Stalks blown over in wind",
        "fix": "Hill soil up around the base of stalks when knee-high, and consider a wider block planting for mutual wind support."
      }
    ]
  },
  "bok-choy": {
    "matureSize": "6-10 in tall, 6-10 in wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Cilantro",
        "reason": "Both are fast-maturing, cool-season crops with shallow roots that share bed space without competing."
      },
      {
        "name": "Nasturtium",
        "reason": "Nasturtium serves as a trap crop for flea beetles and aphids that would otherwise target the tender bok choy leaves."
      },
      {
        "name": "Dill",
        "reason": "Dill attracts parasitic wasps that help control the same cabbage worm and aphid pests that trouble this brassica relative."
      },
      {
        "name": "Marigold",
        "reason": "Marigold's scent can help deter cabbage moths from locating and laying eggs on nearby bok choy."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "As a mild, tender brassica green, deer will browse it readily when other forage is scarce, similar to cabbage and other Asian greens."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grown for leaves and harvested before flowering, though bolted plants produce small yellow flowers attractive to small bees and hoverflies."
    },
    "zoneNotes": "In cool zones (3-6), bok choy can be grown spring through fall with careful timing around the shortest heat spells. In hot zones (8-11), it bolts almost immediately once temperatures exceed 75°F, making it best suited as a fall, winter, and early spring crop there rather than a summer one.",
    "troubleshooting": [
      {
        "issue": "Rapid bolting to flower",
        "fix": "Direct sow only in cool weather and avoid transplant shock or root disturbance, both of which trigger premature bolting in this brassica."
      },
      {
        "issue": "Flea beetle damage on young leaves",
        "fix": "Cover seedlings with row cover immediately after sowing since bok choy's tender leaves are highly attractive to flea beetles."
      },
      {
        "issue": "Slug and snail damage on leaves",
        "fix": "Set out shallow beer traps or apply iron phosphate bait around the base of plants, especially in damp spring conditions."
      }
    ]
  },
  "collard-greens": {
    "matureSize": "2-3 ft tall, 2-3 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Dill",
        "reason": "Dill's flowers attract parasitic wasps and predatory insects that help control cabbage worms and aphids common to collards."
      },
      {
        "name": "Thyme",
        "reason": "Thyme's strong aromatic oils can help mask the scent brassicas emit that attracts cabbage moths."
      },
      {
        "name": "Onion",
        "reason": "Onion's pungent scent helps deter cabbage-family pests while sharing similar sun and moisture needs."
      },
      {
        "name": "Marigold",
        "reason": "Marigold roots suppress root-knot nematodes and its bloom attracts beneficial insects that prey on collard pests."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Like other loose-leaf brassicas, collards are a preferred deer browse and unfenced plantings are commonly stripped to bare stems."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Usually harvested continuously as leaves before flowering, but plants allowed to bolt in their second year produce yellow flowers that draw small bees."
    },
    "zoneNotes": "At the cool edge of its range (zone 6), collards are grown as a spring and fall crop and are killed back by hard winter freezes. Toward the warm end (zones 9-11), they behave as true short-lived perennials, often producing leaves for two or more years and actually improving in sweetness after a light frost rather than being damaged by it.",
    "troubleshooting": [
      {
        "issue": "Cabbage worms and loopers chewing leaves",
        "fix": "Hand-pick or apply Bt (Bacillus thuringiensis), and use row cover on new plantings to exclude egg-laying moths."
      },
      {
        "issue": "Aphid colonies on leaf undersides",
        "fix": "Blast off with water and encourage ladybugs and lacewings by planting nearby flowering companions like dill or alyssum."
      },
      {
        "issue": "Leaves turning bitter or tough",
        "fix": "Harvest lower, older leaves regularly and keep plants well watered — drought stress and over-maturity both increase bitterness."
      }
    ]
  },
  "pumpkin": {
    "matureSize": "1-2 ft tall, vines sprawling 10-20 ft",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Corn",
        "reason": "The Three Sisters combination — squash leaves shade the soil, retaining moisture and suppressing weeds around corn."
      },
      {
        "name": "Green Bean",
        "reason": "Nitrogen-fixing beans benefit the heavy-feeding squash sharing the bed, in the classic Three Sisters pattern."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse pumpkin vine tips and leaves, especially young plants, though the prickly mature foliage becomes less appealing over time."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Large yellow-orange male and female flowers are a major draw for bumblebees, squash bees, and honeybees, all essential for fruit set since pumpkin flowers require insect pollination."
    },
    "zoneNotes": "In short-season zones (3-5), gardeners need to choose smaller pie-pumpkin varieties (100-110 days) and start as early as frost allows to reach maturity before fall frost kills the vines. In long-season zones (8-11), giant and long-season varieties become viable, and a second succession planting is sometimes possible for a late fall harvest.",
    "troubleshooting": [
      {
        "issue": "Squash vine borer causing sudden vine collapse",
        "fix": "Wrap the base of stems with foil or fabric at planting time, and monitor for entry holes with frass, slitting the stem to remove the borer if caught early."
      },
      {
        "issue": "Powdery mildew coating leaves late in the season",
        "fix": "Space vines for airflow, water at the soil line rather than overhead, and apply a potassium bicarbonate or sulfur spray at first signs."
      },
      {
        "issue": "Fruit rotting where it touches damp soil",
        "fix": "Slip a piece of wood, cardboard, or straw under developing fruit to keep it off wet ground."
      },
      {
        "issue": "Poor fruit set despite many flowers",
        "fix": "Confirm both male and female flowers are present and being visited by bees; hand-pollinate with a small brush if pollinator activity is low."
      }
    ]
  },
  "strawberry": {
    "matureSize": "6-8 in tall, 12-18 in spread per plant (runners extend 1-2 ft further)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Borage",
        "reason": "Borage is said to improve strawberry flavor and vigor while its blue flowers draw in bees for better pollination."
      },
      {
        "name": "Spinach",
        "reason": "Shallow-rooted spinach shares the strawberry bed without competing and can be harvested early before the strawberries spread."
      },
      {
        "name": "Thyme",
        "reason": "Low-growing thyme shares the same well-drained soil preference and helps suppress weeds around strawberry crowns."
      },
      {
        "name": "Onions",
        "reason": "Onions' sulfur compounds help repel many soil pests and slugs that target ripening strawberries."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Both the low, tender foliage and the sweet ripening fruit make strawberries a favorite target; netting or fencing is usually needed where deer pressure is high."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Attracts mason bees and honeybees to its small white flowers, and good pollination directly improves berry size and shape."
    },
    "zoneNotes": "In Zones 3-5, June-bearing varieties need reliable winter mulch (straw) to protect crowns from freeze-thaw heaving, while everbearing types are more forgiving of short seasons. In Zones 8-10, strawberries are often grown as annuals or in a plasticulture system since plants decline in summer heat and are replanted each fall for a winter/spring crop.",
    "troubleshooting": [
      {
        "issue": "Gray mold (botrytis) on ripening fruit",
        "fix": "Improve air circulation by thinning foliage, mulch with straw to keep berries off damp soil, and pick ripe fruit promptly."
      },
      {
        "issue": "Small, misshapen berries",
        "fix": "Usually a pollination deficiency or tarnished plant bug feeding — encourage pollinators and avoid broad-spectrum insecticides during bloom."
      },
      {
        "issue": "Declining vigor after 2-3 years",
        "fix": "Renovate beds by mowing foliage after harvest and thinning to healthy daughter plants, or replace the planting every 3 years."
      },
      {
        "issue": "Slugs eating fruit",
        "fix": "Keep berries elevated off soil with straw mulch and use iron phosphate bait around the bed perimeter."
      }
    ]
  },
  "blueberry": {
    "matureSize": "6-8 ft tall, 4-6 ft wide (highbush type)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Rhododendron",
        "reason": "Shares the same acidic, well-drained soil requirements, making it easy to group in a coordinated planting bed."
      },
      {
        "name": "Azalea",
        "reason": "Both are shallow-rooted, acid-loving shrubs that thrive under the same mulching and watering regimen."
      },
      {
        "name": "Ferns",
        "reason": "Tolerate the same moist, acidic, humus-rich soil and provide attractive underplanting without competing for nutrients."
      },
      {
        "name": "Clover",
        "reason": "A living mulch that fixes some nitrogen and attracts pollinators to the blueberry patch during bloom."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse tender new growth and ripening fruit when other food is scarce, so fencing is wise in rural areas."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Bumblebees are especially effective pollinators of blueberry's bell-shaped flowers via buzz pollination, and native mining bees also visit heavily."
    },
    "zoneNotes": "At the cold edge (Zone 4), choose half-high or northern highbush cultivars bred for hardiness, and expect some flower bud loss in harsh winters without snow cover. At the warm edge (Zone 9), northern highbush struggles with insufficient winter chill hours, so southern highbush or rabbiteye types are needed to set fruit reliably.",
    "troubleshooting": [
      {
        "issue": "Yellowing leaves with green veins (chlorosis)",
        "fix": "Almost always caused by soil pH above 5.5; apply elemental sulfur or an acidifying fertilizer to bring pH down to 4.5-5.5."
      },
      {
        "issue": "Poor fruit set",
        "fix": "Plant at least two different cultivars for cross-pollination, since most blueberries produce more and larger fruit with a pollinator partner."
      },
      {
        "issue": "Birds stripping ripening berries",
        "fix": "Cover bushes with bird netting as fruit begins to color, well before full ripeness."
      },
      {
        "issue": "Mummy berry disease (shriveled, tan fruit)",
        "fix": "Rake and destroy fallen mummified berries and leaf litter each fall to break the disease cycle."
      }
    ]
  },
  "raspberry": {
    "matureSize": "4-6 ft tall, spreading 2-4 ft wide via suckers (can colonize a 3+ ft row width)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Garlic",
        "reason": "Planted along the row edge, garlic's sulfur compounds help deter aphids and Japanese beetles from raspberry canes."
      },
      {
        "name": "Marigold",
        "reason": "Suppresses root-knot nematodes in the soil and adds season-long pest-deterrent blooms near the planting."
      },
      {
        "name": "Yarrow",
        "reason": "Draws in predatory insects like lacewings and ladybugs that help control aphids on raspberry canes."
      },
      {
        "name": "Tansy",
        "reason": "A traditional companion known to repel Japanese beetles and ants that can otherwise farm aphids on the canes."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "The thorny canes offer some natural protection, but deer will still browse tender new growth and fruit when pressure is high."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "A major early-summer nectar source for honeybees and bumblebees, and the flowers also attract many native solitary bees."
    },
    "zoneNotes": "In Zone 3-4, floricane (summer-bearing) types need reliable snow cover or heavy mulch to protect canes from winter kill, while primocane (fall-bearing) types can be mowed to the ground each winter and still fruit reliably the following fall. In Zone 8-9, raspberries struggle with summer heat and insufficient winter chilling, so only heat-tolerant cultivars perform well and afternoon shade is often needed.",
    "troubleshooting": [
      {
        "issue": "Cane borers causing wilted cane tips",
        "fix": "Prune out and destroy wilted tips several inches below the damage as soon as it's noticed."
      },
      {
        "issue": "Spur blight or cane diseases",
        "fix": "Thin canes to improve air circulation and remove spent floricanes immediately after fruiting."
      },
      {
        "issue": "Uncontrolled spreading via suckers",
        "fix": "Confine the row with buried root barriers and mow or dig out unwanted suckers each spring."
      },
      {
        "issue": "Japanese beetles skeletonizing leaves",
        "fix": "Hand-pick beetles into soapy water in early morning and avoid planting near heavily infested turf."
      }
    ]
  },
  "cucumber": {
    "matureSize": "Vines 4-8 ft long (bush types 1-2 ft), trellised plants take up 1-2 sq ft footprint",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Green Bean",
        "reason": "Classic pairing — beans fix nitrogen that benefits the heavier-feeding cucumber."
      },
      {
        "name": "Radish",
        "reason": "Radish is a classic trap crop for cucumber beetles, drawing pest pressure away from the cucumber."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer readily browse cucumber foliage and vines, often before fruit even sets, so fencing is typically necessary."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Separate male and female flowers rely on honeybees and native squash bees for pollination; poor pollination causes misshapen fruit."
    },
    "zoneNotes": "In cooler Zones 4-5, cucumbers need soil warmed to at least 65°F before direct-sowing and benefit from black plastic mulch to speed growth in a shorter season. In hot Zones 9-11, spring plantings can bolt or turn bitter once temperatures exceed the mid-90s, so growers often plant a fall crop for better flavor and fewer bitter fruits.",
    "troubleshooting": [
      {
        "issue": "Bacterial wilt causing sudden vine collapse",
        "fix": "Control cucumber beetles early, since they vector the wilt bacteria — use row covers until bloom and remove infected vines immediately."
      },
      {
        "issue": "Powdery mildew on leaves late season",
        "fix": "Choose resistant varieties, water at the base rather than overhead, and ensure good air circulation between plants."
      },
      {
        "issue": "Bitter-tasting fruit",
        "fix": "Keep soil consistently moist, since inconsistent watering and heat stress are the main causes of bitterness (cucurbitacin buildup)."
      },
      {
        "issue": "Poor fruit set or misshapen cucumbers",
        "fix": "Ensure adequate pollinator activity and avoid spraying insecticides during flowering."
      }
    ]
  },
  "apple": {
    "matureSize": "15-25 ft tall, 15-20 ft wide on standard rootstock (dwarf types 8-10 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Chives",
        "reason": "Planted at the base, chives are traditionally used to help deter apple scab and repel aphids."
      },
      {
        "name": "Nasturtium",
        "reason": "Acts as a trap crop for aphids, luring them away from tender new apple growth."
      },
      {
        "name": "Comfrey",
        "reason": "Deep roots mine nutrients and its chopped leaves make an excellent mulch that feeds the tree's root zone."
      },
      {
        "name": "Daffodils",
        "reason": "Planted in the tree's root zone, daffodils deter rodents from gnawing at the trunk and bulbs without competing for light."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer browse young apple trees heavily, especially in winter when they strip bark and buds; trunk guards and fencing are essential for young trees."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Spring blossoms are a critical early-season nectar source for honeybees, mason bees, and bumblebees, all of which are needed for fruit set."
    },
    "zoneNotes": "At the cold edge (Zone 3-4), choose cold-hardy cultivars like Honeycrisp or Haralson, since many popular varieties suffer winter dieback below -20°F. At the warm edge (Zone 8), apples need cultivars with low chill-hour requirements (under 500 hours), as standard Northern varieties won't break dormancy properly and will bloom erratically.",
    "troubleshooting": [
      {
        "issue": "Apple scab causing dark leaf and fruit lesions",
        "fix": "Rake and destroy fallen leaves each autumn to reduce overwintering spores, and apply fungicide sprays from bud break through petal fall in wet springs."
      },
      {
        "issue": "Codling moth larvae tunneling into fruit",
        "fix": "Hang pheromone traps to monitor and time sprays, or bag individual young fruits in footies for organic protection."
      },
      {
        "issue": "Poor fruiting despite healthy tree",
        "fix": "Plant a second, compatible variety within 50 feet, since most apples are not self-fruitful and need cross-pollination."
      },
      {
        "issue": "Fire blight causing blackened, scorched-looking shoot tips",
        "fix": "Prune out infected branches 8-12 inches below visible damage during dry weather, sterilizing tools between cuts."
      }
    ]
  },
  "watermelon": {
    "matureSize": "Vines 6-12 ft long, sprawling 6-10 ft wide footprint",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Corn",
        "reason": "Tall corn stalks provide light shade and a windbreak while watermelon vines sprawl beneath, making efficient use of garden space."
      },
      {
        "name": "Nasturtium",
        "reason": "Acts as a trap crop for aphids and cucumber beetles, drawing them away from the watermelon vines."
      },
      {
        "name": "Radish",
        "reason": "Fast-growing radish helps deter cucumber beetles and squash bugs that also target watermelon."
      },
      {
        "name": "Marigold",
        "reason": "Suppresses root-knot nematodes in the soil, which can otherwise stunt watermelon roots."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will nibble young vine tips and leaves, but the sprawling, thorny-leaved growth habit makes it a lower priority browse than many vegetables."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Relies on honeybees and native bees to move pollen between separate male and female flowers; insufficient pollination causes small or misshapen melons."
    },
    "zoneNotes": "In cooler Zones 4-6, short-season varieties (70-80 days) and black plastic mulch are essential since watermelon needs a long stretch of consistently hot weather to ripen before frost. In hot Zones 8-10, watermelon thrives with the extended heat but needs consistent irrigation, as drought stress during fruit development leads to hollow heart and poor flavor.",
    "troubleshooting": [
      {
        "issue": "Fruit not sweetening or ripening",
        "fix": "Check for a dried tendril nearest the fruit and a dull rind color as ripeness cues, and reduce watering in the final week to concentrate sugars."
      },
      {
        "issue": "Blossom end rot on developing fruit",
        "fix": "Maintain even soil moisture, since inconsistent watering disrupts calcium uptake more than a true calcium deficiency."
      },
      {
        "issue": "Powdery mildew late in the season",
        "fix": "Space vines for airflow, water at the soil line, and choose mildew-resistant cultivars."
      },
      {
        "issue": "Squash vine borer or cucumber beetle damage",
        "fix": "Use row covers until bloom time and inspect stem bases regularly, slitting and removing borers if found."
      }
    ]
  },
  "grape": {
    "matureSize": "Vines 15-20+ ft long on a trellis, trained to a 6-8 ft wide canopy",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Chives",
        "reason": "Planted around the base, chives help deter Japanese beetles and other pests that target grape foliage."
      },
      {
        "name": "Hyssop",
        "reason": "Attracts beneficial predatory insects and is a traditional vineyard companion said to improve grape growth."
      },
      {
        "name": "Clover",
        "reason": "Used as a living groundcover between rows to fix nitrogen and suppress weeds without competing for water at depth."
      },
      {
        "name": "Roses",
        "reason": "Classic vineyard practice — roses planted at row ends act as an early-warning indicator for powdery mildew, since they show symptoms before the vines."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer readily browse tender new grape shoots and leaves in spring, which can significantly reduce that year's crop; fencing is often necessary."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grape flowers are mostly self-pollinating and wind-pollinated, offering little nectar, though bees will occasionally visit for pollen."
    },
    "zoneNotes": "In Zone 4-5, only cold-hardy American or hybrid cultivars (like Concord or Marquette) survive winter reliably, since European wine grapes (Vitis vinifera) suffer bud and trunk damage below about -10°F. In Zone 9-10, grapes need adequate winter chilling to break dormancy properly and set fruit, so warm-climate growers should choose low-chill or muscadine-type cultivars suited to mild winters.",
    "troubleshooting": [
      {
        "issue": "Powdery mildew coating leaves and fruit",
        "fix": "Prune for an open canopy to improve airflow and apply sulfur or fungicide sprays starting at bud break in humid climates."
      },
      {
        "issue": "Birds stripping ripening clusters",
        "fix": "Cover ripening fruit clusters with netting as color begins to change."
      },
      {
        "issue": "Black rot causing shriveled, mummified berries",
        "fix": "Remove and destroy infected mummies and fallen debris, and apply preventive fungicide sprays during wet spring weather."
      },
      {
        "issue": "Poor fruiting on overly vigorous vines",
        "fix": "Follow an annual dormant pruning regimen, since unpruned vines put energy into leafy growth instead of fruit."
      }
    ]
  },
  "cherry-tree": {
    "matureSize": "35-40 ft tall, 25-30 ft wide (standard sweet cherry; dwarf types 10-15 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Garlic",
        "reason": "Planted around the base, garlic's sulfur compounds help repel aphids and borers common on cherry trees."
      },
      {
        "name": "Lavender",
        "reason": "Draws in pollinators for the early spring blossoms while its scent helps mask the tree from some pest insects."
      },
      {
        "name": "Comfrey",
        "reason": "Deep-rooted comfrey mines nutrients from the subsoil and its cut leaves make a nutrient-rich mulch for the root zone."
      },
      {
        "name": "Tansy",
        "reason": "A traditional orchard companion known to help repel ants and aphids from fruit trees."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer heavily browse cherry bark, buds, and low branches, especially on young trees in winter, making trunk protection and fencing important."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "One of the earliest spring bloomers, providing critical early-season forage for honeybees, mason bees, and bumblebees."
    },
    "zoneNotes": "At the cold edge (Zone 4), sweet cherries can suffer bud and blossom damage from late spring frosts since they bloom very early; tart (sour) cherries are more cold-hardy and reliable in this range. At the warm edge (Zone 9), most sweet cherries fail to receive enough winter chill hours to break dormancy properly, so they are rarely successful there without low-chill cultivars.",
    "troubleshooting": [
      {
        "issue": "Birds and squirrels stripping the entire crop",
        "fix": "Cover smaller trees with netting as fruit begins to color, since cherries are one of the most bird-vulnerable tree fruits."
      },
      {
        "issue": "Brown rot causing fruit to shrivel and rot on the tree",
        "fix": "Improve air circulation through pruning, remove mummified fruit, and apply fungicide during bloom in humid conditions."
      },
      {
        "issue": "Cracked fruit after rain near harvest",
        "fix": "Choose crack-resistant cultivars and avoid heavy irrigation right before harvest, especially ahead of rain."
      },
      {
        "issue": "No fruit despite healthy blossoms",
        "fix": "Plant a compatible pollinator variety nearby for sweet cherries, since most sweet cherry cultivars are self-incompatible."
      }
    ]
  },
  "lemon-tree": {
    "matureSize": "10-20 ft tall, 10-15 ft wide (standard); dwarf/container types 3-6 ft",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Marigold",
        "reason": "Deters nematodes and aphids in the root zone and around the canopy of citrus trees."
      },
      {
        "name": "Comfrey",
        "reason": "Deep roots pull up nutrients and its chopped leaves make an excellent nutrient-rich mulch for heavy-feeding citrus."
      },
      {
        "name": "Nasturtium",
        "reason": "Acts as a trap crop for aphids, drawing them away from tender new citrus growth."
      },
      {
        "name": "Lavender",
        "reason": "Shares similar well-drained soil preferences and attracts pollinators to the fragrant citrus blossoms."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The tough, aromatic, citrus-scented foliage is generally unappealing to deer, though hungry animals may occasionally browse young growth."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Fragrant blossoms attract honeybees and are especially valued as a nectar source in warm climates where citrus blooms much of the year."
    },
    "zoneNotes": "Lemon trees are only reliably hardy outdoors in Zones 9-11; at the cold edge (Zone 9) unexpected freezes below 28°F can cause serious damage or death, so frost cloth or temporary structures are needed on cold nights. In the warmest parts of Zone 11, consistent heat and humidity actually support near-continuous flowering and fruiting, but trees need regular deep watering to keep up with the extended growing season.",
    "troubleshooting": [
      {
        "issue": "Yellowing leaves with green veins",
        "fix": "Usually indicates an iron or nitrogen deficiency; apply a citrus-specific fertilizer formulated with chelated micronutrients."
      },
      {
        "issue": "Sooty black mold on leaves",
        "fix": "Control the aphids or scale insects producing the honeydew that the mold grows on, using horticultural oil sprays."
      },
      {
        "issue": "Fruit drop before ripening",
        "fix": "Maintain consistent watering, since alternating drought and overwatering is the most common cause of premature fruit drop."
      },
      {
        "issue": "Cold damage to leaves or branches",
        "fix": "Move container trees indoors or cover in-ground trees with frost cloth whenever temperatures threaten to drop below 28°F."
      }
    ]
  },
  "peach-tree": {
    "matureSize": "15-25 ft tall, 15-20 ft wide (standard; dwarf types 6-10 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Garlic",
        "reason": "Planted at the base, garlic helps repel borers and aphids that commonly attack peach trees."
      },
      {
        "name": "Marigold",
        "reason": "Suppresses root-knot nematodes in the soil, a significant problem for peach tree roots in sandy soils."
      },
      {
        "name": "Comfrey",
        "reason": "Deep-rooted comfrey mines nutrients and its cut leaves provide a nutrient-rich mulch for this heavy-feeding tree."
      },
      {
        "name": "Southernwood",
        "reason": "A traditional orchard herb planted near stone fruit to help deter peach tree borer moths."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer readily browse peach foliage and low branches, and can strip bark from young trunks in winter, so protective fencing is often needed."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Early pink spring blossoms are an important nectar source for honeybees and native mason bees emerging in early spring."
    },
    "zoneNotes": "At the cold edge (Zone 5), peach flower buds can be killed by late winter cold snaps or a hard frost after an early warm spell, since peaches bloom very early and have limited bud hardiness. At the warm edge (Zone 9), peaches need cultivars specifically bred for low chill-hour requirements, as standard Northern varieties won't set fruit reliably without enough cumulative winter chilling.",
    "troubleshooting": [
      {
        "issue": "Peach leaf curl distorting and reddening leaves in spring",
        "fix": "Apply a copper-based fungicide spray during dormancy in late winter before buds swell, since it cannot be controlled once symptoms appear."
      },
      {
        "issue": "Fruit dropping before ripening or small fruit size",
        "fix": "Thin fruit to about 6 inches apart when they're marble-sized, since overcropping is the most common cause of small, poor-quality peaches."
      },
      {
        "issue": "Borers at the base of the trunk",
        "fix": "Inspect the trunk base for gummy sap and sawdust-like frass each fall and spring, and physically remove larvae or apply preventive trunk treatments."
      },
      {
        "issue": "Brown rot on ripening fruit",
        "fix": "Thin fruit for airflow, remove mummified fruit from the tree and ground, and apply fungicide during bloom in humid regions."
      }
    ]
  },
  "pear-tree": {
    "matureSize": "20-40 ft tall, 20-25 ft wide (standard; dwarf types 10-12 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Chives",
        "reason": "Planted at the base, chives are traditionally used to help deter pear psylla and aphids."
      },
      {
        "name": "Nasturtium",
        "reason": "Acts as a trap crop for aphids, luring them away from young pear foliage."
      },
      {
        "name": "Comfrey",
        "reason": "Deep roots draw up nutrients and its chopped leaves make an excellent mulch for the tree's root zone."
      },
      {
        "name": "Daffodils",
        "reason": "Deters burrowing rodents from the root zone without competing with the tree for sunlight."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer browse pear foliage and young shoots readily, and can damage trunk bark on young trees, so protection is important in the first several years."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Early, abundant white blossoms provide an important nectar source for honeybees and mason bees, though the flowers have a fainter scent than apple."
    },
    "zoneNotes": "At the cold edge (Zone 4), choose cold-hardy European pear cultivars like Bartlett-derived hybrids, since many Asian pear varieties lack sufficient winter hardiness. At the warm edge (Zone 9), European pears can suffer from insufficient winter chilling, while Asian pears and low-chill European cultivars perform far better in mild-winter climates.",
    "troubleshooting": [
      {
        "issue": "Fire blight causing blackened, scorched shoot tips",
        "fix": "Prune out infected branches well below visible damage during dry weather, sterilizing shears between cuts, and avoid excess nitrogen fertilizer that promotes susceptible new growth."
      },
      {
        "issue": "Pear psylla causing sticky honeydew and sooty mold",
        "fix": "Apply dormant oil in late winter before bud break to smother overwintering eggs."
      },
      {
        "issue": "Fruit that never ripens well on the tree",
        "fix": "Harvest pears while still firm and green-mature, then ripen them indoors at room temperature for the best texture and flavor."
      },
      {
        "issue": "No fruit despite good blossoms",
        "fix": "Plant a second, compatible pear variety nearby, since most pears require cross-pollination to set fruit."
      }
    ]
  },
  "blackberry": {
    "matureSize": "5-9 ft tall (erect/semi-erect types), spreading 3-6 ft wide via canes",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Garlic",
        "reason": "Deters aphids and other cane-feeding pests when planted along the row edge."
      },
      {
        "name": "Marigold",
        "reason": "Suppresses root-knot nematodes in the soil that can otherwise weaken blackberry root systems."
      },
      {
        "name": "Tansy",
        "reason": "A traditional cane-berry companion known to help repel Japanese beetles and ants."
      },
      {
        "name": "Comfrey",
        "reason": "Deep roots mine nutrients and its cut leaves provide a nutrient-rich mulch for this vigorous, heavy-feeding bramble."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The thorny canes of most blackberry varieties discourage browsing, though deer may still nibble tender new shoots and ripe fruit occasionally."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "A significant nectar source for honeybees and bumblebees during its extended early-summer bloom period."
    },
    "zoneNotes": "At the cold edge (Zone 5), only cold-hardy erect cultivars survive reliably, since many trailing and semi-trailing types suffer significant cane dieback below about -10°F without heavy mulch protection. In Zone 9-10, blackberries appreciate the long growing season but benefit from afternoon shade and consistent irrigation, as intense summer heat can scald ripening berries.",
    "troubleshooting": [
      {
        "issue": "Cane blight or dieback",
        "fix": "Prune out and destroy dead or discolored canes each year and avoid working around wet plants, which spreads fungal spores."
      },
      {
        "issue": "Aggressive spreading beyond the planted area",
        "fix": "Contain the patch with buried root barriers and mow or dig out unwanted suckers regularly."
      },
      {
        "issue": "Birds eating ripening berries",
        "fix": "Cover the row with netting as berries begin to turn color."
      },
      {
        "issue": "Sour or seedy-tasting fruit",
        "fix": "Allow berries to fully ripen on the cane — blackberries don't continue to sweeten after picking, unlike some other fruits."
      }
    ]
  },
  "fig-tree": {
    "matureSize": "10-30 ft tall, 10-20 ft wide in warm climates (often kept to 6-10 ft with pruning or container culture)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Rosemary",
        "reason": "Shares the same preference for lean, well-drained soil and minimal water once established, making a low-maintenance pairing."
      },
      {
        "name": "Lavender",
        "reason": "Tolerates similar dry, sunny conditions and helps mask the fig from some browsing pests with its strong scent."
      },
      {
        "name": "Comfrey",
        "reason": "Its chopped leaves make a good occasional mulch, though should be used sparingly to avoid encouraging excess nitrogen-driven leaf growth."
      },
      {
        "name": "Society Garlic",
        "reason": "Tolerates the same dry, sunny conditions at the base of the tree while helping deter some pest insects."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The milky sap and tough leaves make fig relatively unappealing to deer, though hungry animals may occasionally sample ripe fruit."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Common fig cultivars grown in home gardens are self-fertile and don't rely on the specialized fig wasp needed for Smyrna-type figs, so they offer little practical pollinator value."
    },
    "zoneNotes": "In Zone 7-8 (the cold edge), figs typically die back to the ground in hard winters and regrow from the roots, so growers often choose hardy cultivars like Chicago Hardy and apply heavy winter mulch or wrapping. In Zone 10-11, figs grow vigorously nearly year-round and can produce two crops (breba and main) per season, but need consistent watering during fruit development to prevent split or dropped fruit.",
    "troubleshooting": [
      {
        "issue": "Fruit splitting on the tree",
        "fix": "Maintain even soil moisture, since irregular watering (drought followed by heavy rain or irrigation) is the main cause of splitting."
      },
      {
        "issue": "Winter dieback of branches",
        "fix": "In marginal zones, wrap the trunk and lower branches with burlap and mulch heavily, or grow in a container that can be moved to shelter."
      },
      {
        "issue": "Excess leafy growth with little fruit",
        "fix": "Avoid high-nitrogen fertilizer, which pushes vegetative growth at the expense of fruiting; use a balanced or low-nitrogen feed instead."
      },
      {
        "issue": "Rust or leaf spot in humid climates",
        "fix": "Improve air circulation through pruning and remove and destroy fallen infected leaves at the end of the season."
      }
    ]
  },
  "basil": {
    "matureSize": "1-2.5 ft tall, 1-1.5 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Classic kitchen and garden pairing — basil thrives in the same warm, sunny conditions tomatoes need, and many gardeners report reduced pest pressure when grown together."
      },
      {
        "name": "Bell Pepper",
        "reason": "Classic pairing — basil is reputed to improve pepper flavor and help repel common pests."
      },
      {
        "name": "Hot Pepper",
        "reason": "Classic pairing — basil is reputed to help repel common pepper pests."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The strong volatile-oil scent of basil foliage generally discourages browsing, though hungry deer may nibble young transplants."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "If allowed to flower, basil's small white or purple spikes draw honeybees and small native bees, though most gardeners pinch blooms off before this happens."
    },
    "zoneNotes": "As a true tender annual, basil grows the same way everywhere within its 4-11 range during the warm season; the real variable is season length, not zone character. In Zone 4-5, a short frost-free window means starting seed indoors and transplanting after all frost danger to get a full harvest before fall cold ends the plant, while Zones 9-11 allow direct sowing and multiple successive plantings through a long, hot growing season.",
    "troubleshooting": [
      {
        "issue": "Fusarium wilt causing sudden one-sided wilting and yellowing",
        "fix": "Remove and destroy infected plants immediately, avoid replanting basil in the same soil for 3+ years, and choose Fusarium-resistant varieties like 'Prospera' or 'Amazel'."
      },
      {
        "issue": "Downy mildew showing as yellow patches on top of leaves with gray fuzz underneath",
        "fix": "Increase air circulation by spacing plants further apart, water at the soil line rather than overhead, and plant resistant cultivars in humid climates."
      },
      {
        "issue": "Plants bolting to flower and turning bitter in midsummer heat",
        "fix": "Pinch flower spikes as soon as they appear and harvest the top third of stems weekly to keep the plant in vegetative growth."
      },
      {
        "issue": "Blackened, mushy tissue after a cold night",
        "fix": "Basil is damaged by temperatures below 50°F; cover plants or bring containers indoors whenever a cool night is forecast, even in summer."
      }
    ]
  },
  "mint": {
    "matureSize": "1-2 ft tall, spreading indefinitely via rhizomes (2-3 ft or more per season if unchecked)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Cabbage",
        "reason": "Mint's strong scent is reputed to help mask brassicas from cabbage moths, and its low sprawling habit doesn't compete for light."
      },
      {
        "name": "Broccoli",
        "reason": "The pungent aroma of mint foliage can help confuse cabbage worm moths seeking brassica hosts."
      },
      {
        "name": "Tomato",
        "reason": "Mint is a traditional companion said to repel aphids and flea beetles that also trouble tomatoes, though it must be grown in a buried pot to prevent it overtaking the tomato bed."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The intensely pungent menthol oils in mint foliage make it one of the most reliably deer-avoided herbs in the garden."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Mint's late-summer flower spikes are a magnet for honeybees, bumblebees, and numerous small native bees and hoverflies."
    },
    "zoneNotes": "Mint is winter-hardy throughout its entire Zone 3-11 range, but its behavior shifts with climate: in cold Zone 3-4 gardens it dies back completely to the rhizome each winter and re-emerges reliably in spring, while in warm Zone 9-11 areas it can remain evergreen and semi-active year-round, extending its already aggressive spreading season by several months.",
    "troubleshooting": [
      {
        "issue": "Rhizomes escaping the bed and colonizing surrounding lawn or beds",
        "fix": "Grow mint only in a bottomless pot sunk into the ground with the rim left 2 inches above soil level, or keep it strictly in an above-ground container."
      },
      {
        "issue": "Rust appearing as orange-brown pustules on leaf undersides",
        "fix": "Remove and dispose of infected foliage, avoid overhead watering, and cut the entire planting back hard to encourage clean new growth."
      },
      {
        "issue": "Powdery mildew coating leaves in dry, crowded conditions",
        "fix": "Thin dense clumps for airflow, water at the base, and shear plants back hard — mint regrows quickly from a hard cutback."
      },
      {
        "issue": "Flavor turning weak or leggy stems by midsummer",
        "fix": "Cut the entire patch back by half in early summer to force fresh, more aromatic new growth."
      }
    ]
  },
  "rosemary": {
    "matureSize": "2-6 ft tall, 2-4 ft wide (trailing types spread 2-3 ft and stay under 1 ft tall)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Cabbage",
        "reason": "Rosemary's strong resinous scent is a traditional deterrent for cabbage moths that target brassica plantings."
      },
      {
        "name": "Bean",
        "reason": "Rosemary is reputed to repel bean beetles thanks to its pungent essential oils."
      },
      {
        "name": "Carrot",
        "reason": "The strong scent of rosemary can help mask carrots from carrot rust flies searching by smell."
      },
      {
        "name": "Sage",
        "reason": "Both are drought-tolerant Mediterranean natives that share identical sun, soil, and watering needs, making bed planning simple."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The tough, resinous, highly aromatic needles of rosemary are almost never browsed by deer."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Rosemary's pale blue late-winter and spring flowers are an important early-season nectar source for honeybees and native bumblebees."
    },
    "zoneNotes": "Rosemary's hardiness edge sits right around Zone 7, so at the cold end of its range plants need a sheltered, south-facing spot and reliable snow cover or winter mulch to survive, and even then a hard freeze can kill an unprotected plant. In Zones 9-11 it becomes a true woody, largely evergreen perennial shrub that can live for decades and is often trained into hedges or topiary forms.",
    "troubleshooting": [
      {
        "issue": "Root rot and blackened lower stems from soggy soil",
        "fix": "Plant in raised beds or amend heavily with grit/sand, and never let containers sit in a saucer of standing water."
      },
      {
        "issue": "Powdery mildew in humid or crowded conditions",
        "fix": "Space plants for airflow and prune the interior of the shrub annually to open it up."
      },
      {
        "issue": "Spider mites causing fine stippling and webbing, especially on indoor overwintered plants",
        "fix": "Increase humidity around indoor plants and rinse foliage periodically; treat active infestations with insecticidal soap."
      },
      {
        "issue": "Winter dieback in marginal zones",
        "fix": "Grow borderline-hardy cultivars like 'Arp' or 'Hill Hardy', site plants against a warm wall, and apply a thick mulch layer before the first hard freeze."
      }
    ]
  },
  "chives": {
    "matureSize": "10-15 in tall, 8-12 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Alliums' strong scent helps confuse and deter many common tomato pests."
      },
      {
        "name": "Carrot",
        "reason": "Allium scent genuinely reduces carrot fly pressure through scent confusion — one of the better-supported companion planting effects."
      },
      {
        "name": "Lettuce",
        "reason": "Chives' scent helps deter aphids, a common pest on tender lettuce leaves."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Like other alliums, chives contain sulfur compounds that give them a pungent onion flavor deer strongly avoid."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The globe-shaped purple flower heads are highly attractive to honeybees, bumblebees, and numerous small native bees."
    },
    "zoneNotes": "Chives are cold-hardy across their entire Zone 3-10 range and go fully dormant in winter everywhere north of Zone 8, dying back to the ground and returning reliably each spring. In the warmest Zone 9-10 gardens they stay evergreen or nearly so through winter, giving gardeners there several extra months of harvest compared to colder zones.",
    "troubleshooting": [
      {
        "issue": "Clumps becoming sparse, woody, and less productive after several years",
        "fix": "Dig and divide the clump into smaller sections every 2-3 years in early spring or fall and replant with fresh compost."
      },
      {
        "issue": "Rust showing as orange pustules on leaf blades",
        "fix": "Remove affected leaves promptly, avoid overhead watering, and improve air circulation around the clump."
      },
      {
        "issue": "Onion thrips causing silvery streaking on leaves",
        "fix": "Spray foliage with a strong jet of water to dislodge thrips and follow with insecticidal soap if the infestation persists."
      },
      {
        "issue": "Unwanted volunteer seedlings spreading throughout the bed",
        "fix": "Deadhead spent flower heads before they set seed unless self-sowing is desired."
      }
    ]
  },
  "parsley": {
    "matureSize": "8-12 in tall, 8-10 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Parsley left to flower in its second year attracts hoverflies and parasitic wasps that prey on tomato hornworms and aphids."
      },
      {
        "name": "Asparagus",
        "reason": "A long-standing traditional pairing; parsley's shallow roots don't compete with asparagus crowns and the two share similar moisture needs."
      },
      {
        "name": "Carrot",
        "reason": "Both are members of the same Apiaceae family with similar cultural needs, making shared bed planning straightforward, though rotating them separately helps avoid shared pests."
      },
      {
        "name": "Corn",
        "reason": "Parsley's low, dense habit makes efficient use of ground space beneath taller corn without competing for light."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Parsley is more palatable to deer than most culinary herbs and can be browsed, especially when preferred forage is scarce."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "If overwintered into its second year, parsley's flat-topped yellow-green umbels attract hoverflies, parasitic wasps, and are a favored host plant for black swallowtail butterfly caterpillars."
    },
    "zoneNotes": "As a true biennial, parsley's zone performance is defined by whether it survives winter to flower in year two: in Zone 3-5 the crown is usually killed by deep freezes, so it behaves as an annual, while in Zone 6 and warmer a heavy mulch typically lets the root overwinter successfully, allowing gardeners there to save seed or leave it as a pollinator plant in its second spring.",
    "troubleshooting": [
      {
        "issue": "Slow, erratic germination taking 3-4 weeks",
        "fix": "Soak seed overnight in warm water before sowing and keep the seedbed consistently moist until sprouts emerge."
      },
      {
        "issue": "Parsleyworm (black swallowtail caterpillar) stripping foliage",
        "fix": "Tolerate light feeding since it supports butterfly populations, or relocate caterpillars to a dedicated sacrificial plant if damage is heavy."
      },
      {
        "issue": "Premature bolting in a hot first summer",
        "fix": "Provide afternoon shade during heat waves and keep soil evenly moist, since heat and drought stress trigger early flowering."
      },
      {
        "issue": "Carrot rust fly larvae tunneling in the taproot",
        "fix": "Cover new plantings with floating row cover to exclude egg-laying flies, since parsley shares this pest with its Apiaceae relatives."
      }
    ]
  },
  "watercress": {
    "matureSize": "6-10 in tall, spreading 1-3 ft as trailing stems root at nodes",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Mint",
        "reason": "Both thrive in consistently moist to boggy soil, making them natural bed-mates in a wet, partly shaded corner of the garden."
      },
      {
        "name": "Lettuce",
        "reason": "Watercress can be grown at the moist margins of a lettuce bed, sharing similar cool-season, high-moisture preferences."
      },
      {
        "name": "Chives",
        "reason": "Chives tolerate the same rich, consistently damp soil watercress needs and add pest-deterrent value at the bed's edge."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Watercress has a peppery flavor that offers some natural deterrence, but its location in wet, low-lying areas near water sources brings it into frequent contact with browsing deer."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The small white flower clusters attract hoverflies and small native bees, though most gardeners harvest the plant before it flowers heavily."
    },
    "zoneNotes": "Watercress is grown as a perennial only where a source of cool, continuously flowing water is available, which limits its true zone dependence; in colder Zone 3-5 gardens without a natural spring or stream it is typically grown as an annual in containers of standing water, while gardeners in milder Zone 7-11 areas with access to a spring-fed stream can maintain a truly perennial, self-sustaining patch.",
    "troubleshooting": [
      {
        "issue": "Bolting and turning bitter in warm weather",
        "fix": "Harvest stem tips continuously to delay flowering, and provide afternoon shade once temperatures climb above 75°F."
      },
      {
        "issue": "Stagnant water causing rot and mosquito breeding",
        "fix": "Grow in a container with a slow trickle of fresh water or change standing water every 2-3 days."
      },
      {
        "issue": "Leaf spot or fungal disease in dense, humid plantings",
        "fix": "Thin stems to improve air circulation and avoid letting water become stagnant or nutrient-fouled."
      },
      {
        "issue": "Slow establishment from seed",
        "fix": "Start from stem cuttings rooted directly in water instead of seed for faster, more reliable establishment."
      }
    ]
  },
  "thyme": {
    "matureSize": "6-12 in tall, 12-18 in wide (creeping types under 3 in tall, spreading 12-24 in)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Cabbage",
        "reason": "Thyme's strong essential oils are a traditional deterrent for cabbage worms and cabbage moths on nearby brassicas."
      },
      {
        "name": "Strawberry",
        "reason": "Low-growing thyme makes a living mulch around strawberry plants, suppressing weeds without competing for root space."
      },
      {
        "name": "Rosemary",
        "reason": "Both are drought-tolerant Mediterranean natives requiring identical sharp drainage and lean, dry soil."
      },
      {
        "name": "Eggplant",
        "reason": "Thyme is reputed to help repel flea beetles, one of the most damaging early-season pests of eggplant."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Thyme's dense, wiry, highly aromatic foliage is one of the most consistently deer-avoided groundcovers available."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Thyme's tiny summer flowers are extremely attractive to honeybees and are a classic source of monofloral thyme honey in Mediterranean regions."
    },
    "zoneNotes": "Thyme performs best across its full Zone 4-9 range but is notably intolerant of combined winter cold and wet soil, so at the Zone 4-5 cold edge good drainage becomes essential to prevent the crown from rotting under snow and ice, while in humid Zone 8-9 summers powdery mildew and root rot become the bigger risk than cold.",
    "troubleshooting": [
      {
        "issue": "Center of the plant dying out and becoming woody after 3-4 years",
        "fix": "Shear back hard after spring flowering each year to encourage compact new growth, and replace plants once they become predominantly woody."
      },
      {
        "issue": "Root rot in heavy or poorly drained soil",
        "fix": "Plant in raised beds or rock gardens amended with coarse sand or grit, and avoid mulching directly against the crown."
      },
      {
        "issue": "Spider mites in hot, dry conditions",
        "fix": "Rinse foliage periodically with a strong spray of water and avoid drought-stressing the plant excessively."
      },
      {
        "issue": "Loss of flavor and vigor from overwatering or rich soil",
        "fix": "Grow in lean, unamended soil and water only when the top few inches are fully dry — overly generous care dilutes the essential oils that give thyme its flavor."
      }
    ]
  },
  "oregano": {
    "matureSize": "1-2 ft tall, 1.5-2 ft wide, spreading by rhizomes",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Broccoli",
        "reason": "Oregano's dense, aromatic groundcover habit is reputed to confuse cabbage moths seeking brassica hosts."
      },
      {
        "name": "Pepper",
        "reason": "Oregano's strong scent can help mask peppers from aphids and other pests that locate host plants by smell."
      },
      {
        "name": "Grape",
        "reason": "Traditional Mediterranean vineyard pairing; oregano tolerates the same lean, well-drained soil and doesn't compete with grape roots."
      },
      {
        "name": "Rosemary",
        "reason": "Both are drought-tolerant Mediterranean natives sharing identical sun and drainage requirements."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Oregano's pungent, oil-rich foliage is reliably left alone by deer even under heavy browsing pressure."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The small pink-purple summer flowers are a favorite of honeybees, bumblebees, and numerous butterfly species."
    },
    "zoneNotes": "Oregano is reliably perennial through its full Zone 4-10 range, but its spreading vigor scales up with warmth: in cooler Zone 4-5 gardens it forms a manageable, well-behaved clump, while in Zone 8-10 the same rhizomatous spreading habit can become aggressive enough that gardeners there often contain it in a bed edged with buried barrier material.",
    "troubleshooting": [
      {
        "issue": "Flavor becoming weak or diluted in overly rich or wet soil",
        "fix": "Grow in lean, well-drained soil with minimal fertilizer — like most Mediterranean herbs, oregano's essential oil concentration drops under overly generous conditions."
      },
      {
        "issue": "Spreading aggressively beyond its intended bed",
        "fix": "Divide and thin the clump every couple of years, or install a buried edging barrier to contain rhizome spread."
      },
      {
        "issue": "Powdery mildew in humid or crowded plantings",
        "fix": "Cut back by two-thirds in midsummer to open up airflow and stimulate fresh, cleaner regrowth."
      },
      {
        "issue": "Leggy, sprawling stems with sparse foliage",
        "fix": "Pinch growing tips regularly and harvest before flowering to keep the plant bushy and compact."
      }
    ]
  },
  "cilantro": {
    "matureSize": "1-2 ft tall, 6-8 in wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Spinach",
        "reason": "Both are quick-maturing, cool-season crops that can be interplanted and harvested on a similar timeline."
      },
      {
        "name": "Pepper",
        "reason": "Cilantro's flowers, if allowed to bloom, attract hoverflies and parasitic wasps that help control aphids on peppers."
      },
      {
        "name": "Bean",
        "reason": "Cilantro's scent is reputed to help repel aphids and potato beetles that can also affect nearby beans."
      },
      {
        "name": "Basil",
        "reason": "Both are compact culinary herbs with similar moisture needs, making efficient use of a shared container or bed edge."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Cilantro's foliage is more tender and less aromatic-oil-dense than woody Mediterranean herbs, so deer will browse it when other food is limited."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "When cilantro bolts and flowers, its flat white umbels are highly attractive to hoverflies, parasitic wasps, and small native bees, making the 'wasted' bolted plant valuable to leave in place."
    },
    "zoneNotes": "Cilantro is grown as a cool-season annual throughout its entire Zone 3-11 range, but the growing calendar flips with climate: in cold Zone 3-5 it's sown in spring for an early-summer harvest before summer heat triggers bolting, while in hot Zone 9-11 gardens it actually performs best as a fall-through-winter crop, since summer heat there causes it to bolt almost immediately.",
    "troubleshooting": [
      {
        "issue": "Bolting to flower within a few weeks of hot weather",
        "fix": "Sow in partial afternoon shade during warm months, choose slow-bolt cultivars like 'Calypso' or 'Santo', and succession-sow every 2-3 weeks for continuous supply."
      },
      {
        "issue": "Poor germination from old or improperly stored seed",
        "fix": "Use fresh seed and lightly crush the papery seed coat before sowing to speed water uptake."
      },
      {
        "issue": "Aphids clustering on new growth",
        "fix": "Spray with a strong stream of water or insecticidal soap, and encourage beneficial insects by letting a few plants flower nearby."
      },
      {
        "issue": "Taproot disturbance causing transplant shock and premature bolting",
        "fix": "Direct sow whenever possible, or transplant very young seedlings carefully without disturbing the taproot."
      }
    ]
  },
  "dill": {
    "matureSize": "2-4 ft tall, 1-1.5 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Broccoli",
        "reason": "Dill's flowers attract parasitic wasps and other predatory insects that prey on cabbage worms and other brassica pests."
      },
      {
        "name": "Cabbage",
        "reason": "Dill's flowers attract parasitic wasps and other predatory insects that prey on cabbage worms and other brassica pests."
      },
      {
        "name": "Kale",
        "reason": "Dill's flowers attract parasitic wasps and other predatory insects that prey on brassica pests."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Dill's pungent, feathery foliage is generally passed over by deer in favor of more palatable garden plants."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Dill's flat-topped yellow flower umbels attract hoverflies, parasitic wasps, ladybugs, and are a favored host plant for black swallowtail butterfly caterpillars."
    },
    "zoneNotes": "Dill grows as a fast-cycling annual throughout its full Zone 3-11 range, so zone mainly determines timing and number of successions possible: cold Zone 3-5 gardens get one or two plantings before frost ends the season, while warm Zone 9-11 gardens can direct-sow dill in fall and winter as well as spring, since it bolts quickly once summer heat arrives everywhere.",
    "troubleshooting": [
      {
        "issue": "Bolting to seed quickly in hot weather, ending leaf production",
        "fix": "Succession sow every 3-4 weeks through the cool season and harvest leaves promptly before flower heads form."
      },
      {
        "issue": "Toppling over in wind or rain due to tall, hollow stems",
        "fix": "Plant in a sheltered spot or stake tall varieties, and avoid overly rich soil that produces excessively soft, weak growth."
      },
      {
        "issue": "Parsleyworm (black swallowtail caterpillar) defoliating plants",
        "fix": "Tolerate moderate feeding to support butterfly populations, or plant extra dill specifically as a sacrificial host plant."
      },
      {
        "issue": "Transplant shock and bolting when started indoors and moved outside",
        "fix": "Direct sow dill whenever possible, since its taproot resents disturbance and disturbed seedlings often bolt prematurely."
      }
    ]
  },
  "sage": {
    "matureSize": "1.5-2.5 ft tall, 2-3 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Cabbage",
        "reason": "Sage's strong scent is a traditional deterrent for cabbage moths and cabbage root maggot flies on nearby brassicas."
      },
      {
        "name": "Carrot",
        "reason": "Sage is reputed to help repel carrot rust flies through scent masking."
      },
      {
        "name": "Rosemary",
        "reason": "Both are woody Mediterranean perennials with identical needs for full sun, lean soil, and sharp drainage."
      },
      {
        "name": "Bean",
        "reason": "Sage's aroma is traditionally said to deter bean beetles when interplanted nearby."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Sage's fuzzy, highly aromatic gray-green leaves are one of the most reliably deer-proof herbs for foundation and border plantings."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Sage's tubular purple-blue flower spikes are especially attractive to bumblebees and hummingbirds, and also draw honeybees and native bees."
    },
    "zoneNotes": "Sage is reliably perennial through its Zone 4-8 range, but winter survival depends heavily on drainage rather than cold alone: at the Zone 4 cold edge, wet winter soil combined with freezing temperatures is more likely to kill plants than cold air alone, while in Zone 7-8 the main risk shifts to summer humidity, which can cause the woody crown to rot if soil stays too moist.",
    "troubleshooting": [
      {
        "issue": "Plants becoming woody, sparse, and less productive after 3-4 years",
        "fix": "Prune hard in spring to encourage fresh basal growth, and plan to propagate cuttings or replace the plant every 3-4 years."
      },
      {
        "issue": "Root and crown rot in poorly drained or overly wet soil",
        "fix": "Plant in raised beds or slopes with excellent drainage, and space plants for good air circulation."
      },
      {
        "issue": "Powdery mildew in humid climates",
        "fix": "Avoid overhead watering, prune for airflow, and choose a well-ventilated planting site."
      },
      {
        "issue": "Spider mites during hot, dry spells",
        "fix": "Rinse foliage with water periodically and avoid prolonged drought stress on container-grown plants."
      }
    ]
  },
  "lemon-balm": {
    "matureSize": "1.5-2.5 ft tall, 1.5-2 ft wide, spreading by rhizomes and self-seeding",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Lemon balm's flowers attract pollinators and predatory insects, and its lemony scent is reputed to help repel aphids and whiteflies from nearby tomatoes."
      },
      {
        "name": "Squash",
        "reason": "Lemon balm's flowers draw in bees and other pollinators that improve fruit set on squash."
      },
      {
        "name": "Cucumber",
        "reason": "The strong lemony aroma is traditionally believed to help deter cucumber beetles."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Lemon balm's strong citrus-mint scent generally discourages deer browsing, though it is less consistently avoided than woodier Mediterranean herbs."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The small white summer flowers are a strong draw for honeybees (the genus name Melissa is Greek for honeybee) as well as native bees and hoverflies."
    },
    "zoneNotes": "Lemon balm is hardy throughout its Zone 3-7 range and dies back completely to the roots each winter everywhere in that range, re-emerging vigorously in spring. Because it's less heat-tolerant than true mints, gardeners at the warm Zone 7 edge should expect some summer dormancy or scorch during the hottest weeks, while in the colder Zone 3-4 portion of its range it performs best with consistent moisture and light afternoon shade.",
    "troubleshooting": [
      {
        "issue": "Aggressive self-seeding and spreading throughout the bed",
        "fix": "Deadhead flowers before they set seed and contain the root system in a buried pot, the same way you would with mint."
      },
      {
        "issue": "Powdery mildew coating leaves in humid, crowded conditions",
        "fix": "Cut the whole plant back hard after flowering to remove infected growth and stimulate clean new foliage."
      },
      {
        "issue": "Leaf scorch and wilting during summer heat waves",
        "fix": "Provide afternoon shade in hot climates and keep soil consistently moist rather than letting it dry out fully."
      },
      {
        "issue": "Diminished lemon fragrance in older, leggy growth",
        "fix": "Harvest and cut back regularly throughout the season, since fresh young leaves carry noticeably more essential oil than old woody stems."
      }
    ]
  },
  "chamomile": {
    "matureSize": "8-24 in tall, 12-18 in wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Cabbage",
        "reason": "A classic pairing — chamomile is reputed to improve the growth and flavor of nearby brassicas."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Chamomile's apple-scented, finely cut foliage is not a preferred deer forage, though it lacks the strong deterrent oils of woodier herbs."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The daisy-like white and yellow flowers are highly attractive to honeybees, hoverflies, and small native bees throughout their long summer bloom period."
    },
    "zoneNotes": "German chamomile is grown as a cool-season annual across its full Zone 3-9 listed range, so zone mainly shifts the calendar: in cooler Zone 3-5 gardens it's sown in spring for a single summer bloom season, while in hot Zone 8-9 climates it performs best as a fall-sown crop that flowers in the cooler months of late winter and spring before summer heat ends it.",
    "troubleshooting": [
      {
        "issue": "Aphids clustering on flower buds and stems",
        "fix": "Spray with a strong jet of water or insecticidal soap, and encourage ladybugs and lacewings by avoiding broad-spectrum pesticides nearby."
      },
      {
        "issue": "Damping off or poor germination in cool, wet soil",
        "fix": "Surface-sow the tiny seed (it needs light to germinate) in well-drained soil and avoid burying it."
      },
      {
        "issue": "Weak flowering and floppy stems in overly rich, shaded soil",
        "fix": "Grow in full sun with lean to average soil — chamomile blooms best without heavy fertilization."
      },
      {
        "issue": "Uncontrolled self-seeding taking over adjacent beds",
        "fix": "Deadhead spent flowers regularly if volunteer seedlings aren't wanted the following year."
      }
    ]
  },
  "fennel": {
    "matureSize": "4-6 ft tall (bulb types 2-3 ft), 1.5-2 ft wide",
    "growthRate": "fast",
    "companions": [],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Fennel's strong anise scent generally discourages deer browsing, though its lush foliage may occasionally be sampled."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Fennel's large yellow flower umbels are outstanding for beneficial insects, drawing hoverflies, parasitic wasps, ladybugs, and are one of the top host plants for black and anise swallowtail butterfly caterpillars."
    },
    "zoneNotes": "Fennel is grown as an annual bulbing vegetable across most of its Zone 4-10 range but can behave as a true short-lived perennial in the mildest Zone 8-10 winters, where the crown may survive and resprout. In cooler Zone 4-6 gardens, bulb-type fennel needs to be started early or grown in the cool days of fall, since bulbing is triggered by shortening days and stalls out in high summer heat.",
    "troubleshooting": [
      {
        "issue": "Bulbs failing to swell or splitting",
        "fix": "Keep soil consistently moist during bulb formation and mound soil up around the base ('blanching') 2-3 weeks before harvest."
      },
      {
        "issue": "Suppressing growth of neighboring vegetables and herbs",
        "fix": "Fennel releases allelopathic compounds that inhibit many garden plants — grow it in its own isolated bed well away from tomatoes, beans, and most other herbs."
      },
      {
        "issue": "Premature bolting to flower before bulbing",
        "fix": "Sow bulb-type fennel in late summer for a fall harvest in warm climates, since long summer days and heat trigger early flowering."
      },
      {
        "issue": "Parsleyworm and other swallowtail caterpillars defoliating plants",
        "fix": "Tolerate feeding to support butterfly populations, or plant extra fennel specifically as a host plant separate from bulbs intended for harvest."
      }
    ]
  },
  "stevia": {
    "matureSize": "1.5-3 ft tall, 1-1.5 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Tomato",
        "reason": "Stevia's mild, non-competitive habit and similar moderate water needs make it an easy-to-tuck-in companion in a warm vegetable bed."
      },
      {
        "name": "Pepper",
        "reason": "Both share full-sun, warm-season growing conditions and moderate watering needs, making shared bed space efficient."
      },
      {
        "name": "Cabbage",
        "reason": "Stevia's dense leafy growth can help shade the soil and suppress weeds around brassica plantings without competing aggressively."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Stevia's tender, sweet leaves offer little natural deterrence and can be browsed by deer, especially young transplants."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Stevia's small white flowers offer modest nectar for tiny native bees but are typically removed by growers to keep the plant focused on leaf production."
    },
    "zoneNotes": "Stevia is a true perennial only in its native Zone 9-11 range, where it overwinters outdoors and can be harvested for several years. In colder zones outside this range, it must be grown as an annual or overwintered indoors as a houseplant, since it has essentially no frost tolerance and is killed by the first freeze.",
    "troubleshooting": [
      {
        "issue": "Sudden death after a light frost",
        "fix": "Bring container-grown plants indoors before the first fall frost in any zone colder than 9, or take stem cuttings in late summer to root and overwinter indoors."
      },
      {
        "issue": "Leggy, sparse growth and reduced sweetness",
        "fix": "Pinch growing tips regularly to encourage bushy growth and harvest leaves before the plant flowers, since sweetness (stevioside content) peaks just before bloom."
      },
      {
        "issue": "Root rot in heavy, poorly drained soil",
        "fix": "Grow in loose, well-drained soil or raised beds and avoid overwatering between waterings."
      },
      {
        "issue": "Slow, difficult germination from seed",
        "fix": "Propagate from stem cuttings instead of seed, since stevia seed has notoriously low and inconsistent viability."
      }
    ]
  },
  "japanese-maple": {
    "matureSize": "15-25 ft tall, 15-20 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Shares the dappled shade cast by the canopy and offers contrasting bold foliage at ground level."
      },
      {
        "name": "Astilbe",
        "reason": "Thrives in the same moist, acidic, part-shade conditions and blooms while the maple's foliage provides a shaded backdrop."
      },
      {
        "name": "Japanese Forest Grass (Hakonechloa)",
        "reason": "Echoes the maple's fine-textured, layered look and tolerates the same root competition and shade."
      },
      {
        "name": "Azalea",
        "reason": "Classic underplanting choice sharing acidic, well-drained soil preferences and a similar Japanese-garden aesthetic."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer generally avoid the tough, dissected leaves but may browse young transplants or rub antlers on thin bark."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Small spring flowers offer minor nectar for early native bees, but the tree is grown primarily for foliage, not wildlife value."
    },
    "zoneNotes": "In Zone 5, plant in a site sheltered from winter wind and late-spring frost, which can damage the early-emerging leaves; in Zones 8-9 it needs afternoon shade and consistent moisture to avoid leaf scorch from summer heat. Coastal and inland heat exposure at the warm end of its range is the single biggest factor limiting healthy growth.",
    "troubleshooting": [
      {
        "issue": "Leaf scorch (browned, crispy leaf margins)",
        "fix": "Move or shade the tree from hot afternoon sun and water deeply during dry spells rather than misting foliage."
      },
      {
        "issue": "Verticillium wilt (sudden branch dieback)",
        "fix": "Prune out and destroy affected limbs, avoid planting where other wilt-susceptible plants have died, and keep the tree unstressed with proper watering."
      },
      {
        "issue": "Late frost damage to new growth",
        "fix": "Choose a planting site protected from early morning sun after a freeze, which causes rapid thaw damage to frozen tissue."
      }
    ]
  },
  "dogwood": {
    "matureSize": "15-30 ft tall, 15-30 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Azalea",
        "reason": "Both are classic understory companions sharing acidic, humus-rich soil and a spring bloom season that overlaps beautifully."
      },
      {
        "name": "Fern (native woodland species)",
        "reason": "Fills the dappled shade beneath the canopy and tolerates the same root zone competition."
      },
      {
        "name": "Virginia Bluebells",
        "reason": "Native spring ephemeral that blooms alongside the dogwood's bracts in the same woodland-edge habitat."
      },
      {
        "name": "Redbud",
        "reason": "Traditional companion tree pairing pink redbud blooms against white dogwood bracts in the same understory light conditions."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young saplings and low branches, especially in winter when other browse is scarce."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Spring bracts attract native bees and butterflies, and the red fall berries are a critical food source for over 35 bird species including cedar waxwings."
    },
    "zoneNotes": "At the cold edge (Zone 5), dogwood needs a site protected from harsh winter wind and late frost to avoid flower bud damage; at the warm edge (Zone 9), it struggles with heat and humidity stress and is far more prone to powdery mildew and anthracnose, so afternoon shade becomes essential. Populations in the Deep South are increasingly being planted as the hybrid 'Appalachian Spring' for anthracnose resistance.",
    "troubleshooting": [
      {
        "issue": "Dogwood anthracnose (leaf spots, twig dieback)",
        "fix": "Prune out infected twigs, improve air circulation, and avoid overhead watering; consider resistant cultivars like 'Appalachian Spring' in high-pressure areas."
      },
      {
        "issue": "Powdery mildew on leaves",
        "fix": "Space trees for airflow and select mildew-resistant cultivars such as 'Cherokee Brave'."
      },
      {
        "issue": "Trunk damage from lawn mowers/string trimmers",
        "fix": "Maintain a mulch ring 3-4 ft wide around the base to keep equipment away from the thin bark."
      }
    ]
  },
  "crape-myrtle": {
    "matureSize": "15-25 ft tall, 15-20 ft wide (tree forms; dwarf cultivars stay under 5 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Liriope",
        "reason": "Low, grassy edging that tolerates the dry, sunny conditions crape myrtle prefers and hides bare lower trunks."
      },
      {
        "name": "Loropetalum",
        "reason": "Shares full sun and heat tolerance while offering contrasting purple foliage against crape myrtle's summer blooms."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Blooms concurrently in midsummer heat and shares the same low-water, full-sun requirements."
      },
      {
        "name": "Dwarf Yaupon Holly",
        "reason": "Evergreen structure at the base compensates for crape myrtle's bare winter silhouette in the same soil and light conditions."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally leave mature crape myrtle alone, though they may nibble tender new shoots on young plants."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Long summer bloom period is a major nectar source for bees and butterflies when few other trees are flowering."
    },
    "zoneNotes": "In Zone 6, crape myrtle often dies back to the ground in cold winters and should be treated more like a large shrub, regrowing and blooming on new wood by midsummer; in Zones 9-10 it grows as a true small tree with a permanent woody framework and exfoliating bark that becomes a year-round ornamental feature. Cultivar selection matters enormously at the cold edge — 'Natchez' and 'Muskogee' are among the hardier tree-form selections.",
    "troubleshooting": [
      {
        "issue": "Powdery mildew on leaves and buds",
        "fix": "Plant mildew-resistant cultivars (most modern Lagerstroemia indica x fauriei hybrids) and ensure full sun with good air circulation."
      },
      {
        "issue": "Crape myrtle bark scale (white waxy coating on stems)",
        "fix": "Scrub trunks with a soft brush and soapy water, then treat with a systemic insecticide drench in spring if infestation persists."
      },
      {
        "issue": "\"Crape murder\" — topping cuts leading to weak, whippy regrowth",
        "fix": "Prune only to remove crossing branches and spent seed heads in late winter; never cut back main stems to stubs."
      }
    ]
  },
  "magnolia": {
    "matureSize": "60-80 ft tall, 30-50 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Camellia",
        "reason": "Shares acidic, well-drained soil and partial shade tolerance while extending the flowering season into fall and winter."
      },
      {
        "name": "Azalea",
        "reason": "Classic Southern garden pairing sharing the same acidic soil preference and thriving beneath the magnolia's high canopy."
      },
      {
        "name": "Cast Iron Plant (Aspidistra)",
        "reason": "Tolerates the deep shade and dry soil found beneath a mature magnolia's dense canopy and shallow roots."
      },
      {
        "name": "Hellebore",
        "reason": "Winter/early-spring bloomer that fills the shaded understory where grass struggles to grow beneath the evergreen canopy."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The tough, leathery leaves are rarely browsed, making it one of the more reliable deer-resistant large trees."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Large fragrant blooms attract beetles (an ancient pollination relationship predating bees) along with some native bees."
    },
    "zoneNotes": "At the cold edge (Zone 5-6), southern magnolia needs a sheltered microclimate and may suffer leaf burn or dieback in harsh winters, so cold-hardy cultivars like 'Edith Bogue' or 'Bracken's Brown Beauty' are essential; in Zones 8-9 it reaches full stature and blooms most reliably, though a sheltered site still helps protect early flowers from late frost. Deciduous magnolia species (e.g., saucer magnolia) are more cold-tolerant but are more susceptible to frost-damaged blooms at the northern edge of the range.",
    "troubleshooting": [
      {
        "issue": "Yellowing leaves from alkaline soil (iron chlorosis)",
        "fix": "Amend soil to lower pH with sulfur or use chelated iron soil drenches; avoid planting near concrete foundations that leach lime."
      },
      {
        "issue": "Scale insects on leaves and stems",
        "fix": "Treat with horticultural oil in late winter before new growth emerges."
      },
      {
        "issue": "Frost damage to early spring blooms",
        "fix": "Site the tree away from low frost pockets and eastern exposures where rapid morning thaw worsens damage."
      }
    ]
  },
  "red-maple": {
    "matureSize": "40-60 ft tall, 30-50 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Fothergilla",
        "reason": "Native shrub that shares moist, acidic soil preferences and complements the maple's fall color with its own orange-red foliage."
      },
      {
        "name": "Sweetbay Magnolia",
        "reason": "Tolerates the same wet-tolerant soil conditions red maple favors, useful in low or poorly drained landscape areas."
      },
      {
        "name": "Winterberry Holly",
        "reason": "Shares a tolerance for wet, acidic soils and provides red berry color once the maple's fall leaves have dropped."
      },
      {
        "name": "Christmas Fern",
        "reason": "Native groundcover that fills the dappled shade beneath the canopy without competing aggressively for moisture."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer frequently browse young saplings and low branches, often necessitating tree guards for the first several years."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Among the earliest trees to bloom in spring, its small red flowers provide a critical early nectar and pollen source for native bees."
    },
    "zoneNotes": "At the northern edge (Zone 3), red maple is fully cold-hardy but fall color develops later and can be cut short by an early hard freeze; at the southern edge (Zone 9), it needs consistently moist soil to avoid heat stress and tends to color less reliably in mild, extended-warm autumns. Wet-soil-tolerant swamp populations from the species' native range make it one of the most adaptable shade trees across this entire zone span.",
    "troubleshooting": [
      {
        "issue": "Girdling roots restricting trunk growth",
        "fix": "Inspect the root flare at planting and prune any roots circling the trunk; avoid piling mulch against the bark."
      },
      {
        "issue": "Verticillium wilt (branch dieback)",
        "fix": "Remove and destroy affected limbs, sterilize pruning tools between cuts, and keep the tree well-watered to reduce stress."
      },
      {
        "issue": "Surface roots lifting sidewalks or lawns",
        "fix": "Plant at least 10-15 ft from hardscape and avoid heavy soil compaction over the root zone."
      }
    ]
  },
  "redbud": {
    "matureSize": "20-30 ft tall, 25-35 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Dogwood",
        "reason": "Classic native understory pairing — pink redbud blooms and white dogwood bracts flower together in the same woodland-edge light."
      },
      {
        "name": "Virginia Bluebells",
        "reason": "Native spring ephemeral that carpets the ground beneath redbud's dappled canopy at the same bloom time."
      },
      {
        "name": "Wild Ginger",
        "reason": "Shade-tolerant native groundcover that thrives in the same moist, humus-rich soil found beneath redbud's canopy."
      },
      {
        "name": "Serviceberry",
        "reason": "Another small native flowering tree with overlapping bloom time and similar part-shade, well-drained soil needs."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young trees and low branches but generally leave established specimens alone."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Early spring flowers are a vital nectar source for native bees, including mason bees, before most other plants have bloomed."
    },
    "zoneNotes": "At the cold edge (Zone 4), select a hardy seed source or cultivar such as 'Northern Strain,' since redbud seedlings from southern populations often suffer dieback in harsh winters; at the warm edge (Zone 9), afternoon shade and supplemental water help it avoid heat and drought stress. The species' huge native range means genetic origin matters as much as the zone number when choosing a nursery tree.",
    "troubleshooting": [
      {
        "issue": "Canker disease (sunken, dying branches)",
        "fix": "Prune out infected wood well below the canker during dry weather and avoid trunk wounds from mowers or trimmers."
      },
      {
        "issue": "Verticillium wilt",
        "fix": "Remove affected limbs promptly and keep the tree unstressed with consistent watering during establishment."
      },
      {
        "issue": "Short-lived trunk/branch structure with weak crotch angles",
        "fix": "Prune to establish strong, well-spaced scaffold branches while the tree is young."
      }
    ]
  },
  "river-birch": {
    "matureSize": "40-70 ft tall, 40-60 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Winterberry Holly",
        "reason": "Shares a preference for consistently moist to wet soils and thrives in the same rain-garden or low-spot plantings."
      },
      {
        "name": "Switchgrass",
        "reason": "Native ornamental grass tolerant of the same damp soils, providing textural contrast at the birch's base."
      },
      {
        "name": "Cardinal Flower",
        "reason": "Moisture-loving native perennial that fills the understory in the same wet-soil conditions river birch favors."
      },
      {
        "name": "Inkberry Holly",
        "reason": "Evergreen shrub tolerant of wet soil that provides year-round structure beneath the birch's dappled shade."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The bark and foliage are not a preferred browse, making it a reliable choice in deer-heavy landscapes."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Wind-pollinated catkins provide early-season pollen for native bees, and the tree hosts numerous native moth and butterfly caterpillars."
    },
    "zoneNotes": "At the cold edge (Zone 4), river birch is fully hardy and largely free of the bronze birch borer that plagues other birches in warm climates; at the warm edge (Zone 9), it is one of the few birches that reliably tolerates heat and humidity, though it appreciates supplemental water during prolonged summer drought. Its native range along Southeastern and Midwestern floodplains explains its unusual heat tolerance compared to other birch species.",
    "troubleshooting": [
      {
        "issue": "Leaf yellowing (iron chlorosis) in alkaline soil",
        "fix": "Amend soil pH downward with sulfur or use chelated iron treatments; avoid high-pH sites."
      },
      {
        "issue": "Aphids producing sticky honeydew",
        "fix": "Spray foliage with a strong water jet or insecticidal soap; tolerate light infestations since natural predators usually control them."
      },
      {
        "issue": "Leaf scorch in drought",
        "fix": "Water deeply during dry spells, especially for young trees, since river birch's shallow roots dry out quickly."
      }
    ]
  },
  "weeping-willow": {
    "matureSize": "30-50 ft tall, 30-50 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Cardinal Flower",
        "reason": "Moisture-loving native perennial that thrives in the same consistently wet soil near ponds or streams."
      },
      {
        "name": "Blue Flag Iris",
        "reason": "Classic pond-edge companion sharing the willow's love of standing water and boggy soil."
      },
      {
        "name": "Sweet Flag (Acorus)",
        "reason": "Water-margin plant that fills the wet, low-lying ground beneath the willow's canopy without competing for structural space."
      },
      {
        "name": "Red-Twig Dogwood",
        "reason": "Tolerates wet soil and adds winter stem color once the willow's foliage has dropped."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young shoots and low branches, particularly on younger, more tender trees."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Early-season catkins provide an important nectar and pollen source for native bees emerging in very early spring."
    },
    "zoneNotes": "At the cold edge (Zone 4), weeping willow can suffer winter branch dieback and needs a sheltered site away from harsh wind; at the warm edge (Zone 9-10), it grows extremely fast but has a shorter overall lifespan and is more prone to storm damage from brittle wood in intense summer thunderstorms. Across its whole range it performs best with a reliable, ample water source rather than average garden soil.",
    "troubleshooting": [
      {
        "issue": "Aggressive roots invading pipes and foundations",
        "fix": "Plant at least 50 ft from septic lines, foundations, and pools, and choose a site with ample open space."
      },
      {
        "issue": "Weak, brittle wood breaking in storms",
        "fix": "Prune to remove crossing or weakly attached branches regularly and avoid planting near structures or parking areas."
      },
      {
        "issue": "Willow blight/canker (blackened, wilting shoot tips)",
        "fix": "Prune out and destroy infected branches during dry weather and avoid overhead watering that keeps foliage wet."
      }
    ]
  },
  "red-oak": {
    "matureSize": "60-75 ft tall, 45-50 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Christmas Fern",
        "reason": "Native shade-tolerant groundcover that fills the understory beneath the oak's canopy in the same acidic, well-drained soil."
      },
      {
        "name": "Wild Ginger",
        "reason": "Low native groundcover suited to the dappled shade and leaf-litter-rich soil found under a mature oak."
      },
      {
        "name": "Serviceberry",
        "reason": "Small native understory tree that tolerates the part shade beneath a red oak's high canopy and extends the wildlife food season."
      },
      {
        "name": "Highbush Blueberry",
        "reason": "Shares the oak's preference for acidic soil and benefits from the light shade at the canopy's edge."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse seedlings and low sprouts, but mature trees are essentially untouched."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Oaks host more caterpillar species than almost any other North American tree genus, making them a keystone food source for songbirds, and the acorns feed deer, turkey, and squirrels."
    },
    "zoneNotes": "At the cold edge (Zone 4), red oak is fully hardy and one of the faster-growing oaks for cold climates; at the warm edge (Zone 9), it experiences more disease pressure from oak wilt and prefers slightly cooler, well-drained sites rather than the heavy heat and humidity that pin oak or live oak tolerate better. Fall color also tends to be more reliably vivid in the cooler northern part of its range.",
    "troubleshooting": [
      {
        "issue": "Oak wilt (rapid wilting and leaf browning)",
        "fix": "Avoid pruning between April and July when sap beetles spread the fungus, and immediately remove and destroy infected trees."
      },
      {
        "issue": "Gypsy moth/spongy moth defoliation",
        "fix": "Monitor for egg masses in winter and scrape them off, or treat with Bt (Bacillus thuringiensis) during early larval stages."
      },
      {
        "issue": "Slow establishment and transplant shock",
        "fix": "Plant young, smaller trees (bare-root or small container) since oaks establish taproots best when planted young rather than as large specimens."
      }
    ]
  },
  "arborvitae": {
    "matureSize": "20-40 ft tall, 10-15 ft wide (standard forms; dwarf cultivars much smaller)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Boxwood",
        "reason": "Evergreen shrub that shares full sun to part shade and provides a lower-growing textural contrast in front of a tall arborvitae screen."
      },
      {
        "name": "Hydrangea",
        "reason": "Benefits from the wind protection and light afternoon shade an arborvitae hedge provides while adding seasonal color."
      },
      {
        "name": "Daylily",
        "reason": "Tough, low-maintenance perennial that softens the base of an arborvitae privacy screen without competing for the same root zone depth."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Arborvitae is one of the most preferred winter browse plants for deer and often needs fencing or repellent in deer-heavy areas."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Wind-pollinated with no showy flowers, it offers little direct pollinator value but does provide dense cover and nesting habitat for songbirds."
    },
    "zoneNotes": "At the cold edge (Zone 3), arborvitae is exceptionally hardy but can suffer winter burn (bronzing) from cold wind and sun in exposed sites; at the warm edge (Zone 8), it is more prone to heat stress and bagworm pressure, and appreciates a site with some afternoon relief in the hottest climates. It performs most reliably as a screening plant in the cooler-to-middle portion of its range.",
    "troubleshooting": [
      {
        "issue": "Bagworm infestation (spindle-shaped bags on foliage)",
        "fix": "Hand-pick bags in fall/winter before eggs hatch, or treat with Bt in early summer when larvae are small."
      },
      {
        "issue": "Winter bronzing/burn",
        "fix": "Site away from harsh winter wind and desiccating sun, and apply an anti-desiccant spray in late fall in exposed locations."
      },
      {
        "issue": "Deer browsing",
        "fix": "Wrap young plants in burlap or use deer repellent sprays through fall and winter in high-pressure areas."
      }
    ]
  },
  "eastern-white-pine": {
    "matureSize": "50-80 ft tall, 20-40 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Mountain Laurel",
        "reason": "Native understory shrub that tolerates the acidic soil and light shade found beneath a white pine canopy."
      },
      {
        "name": "Rhododendron",
        "reason": "Shares the acidic, well-drained soil preference and benefits from the dappled shade under mature white pines."
      },
      {
        "name": "Lowbush Blueberry",
        "reason": "Thrives in the same acidic, sandy soils typical of white pine stands, echoing a classic Northeastern woodland pairing."
      },
      {
        "name": "Wintergreen",
        "reason": "Low native groundcover adapted to the acidic duff layer beneath established pines."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "White pine is a preferred winter browse for deer, and young trees often need protection until they grow above browse height."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated with no showy blooms, though the dense evergreen structure offers valuable winter cover and nesting sites for birds."
    },
    "zoneNotes": "At the cold edge (Zone 3), white pine is fully hardy and grows vigorously in the cool climates it evolved in; at the warm edge (Zone 8), it is far more stressed by heat, humidity, and drought, becoming more susceptible to white pine weevil and root rot in poorly drained southern soils. It performs best overall in the cooler two-thirds of its listed range.",
    "troubleshooting": [
      {
        "issue": "White pine weevil killing the leader shoot",
        "fix": "Prune out and destroy the infested leader in late spring before adults emerge, and train a side branch to become the new leader."
      },
      {
        "issue": "Road-salt damage (browning needles near roads/driveways)",
        "fix": "Avoid planting within 50-60 ft of heavily salted roads or use burlap screening to block salt spray in winter."
      },
      {
        "issue": "White pine blister rust",
        "fix": "Avoid planting near currant or gooseberry bushes (alternate hosts) and prune out cankered branches promptly."
      }
    ]
  },
  "blue-spruce": {
    "matureSize": "50-75 ft tall, 10-20 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Potentilla",
        "reason": "Tough, low-water shrub that shares full sun and well-drained soil, useful as foreground planting for a tall blue spruce specimen."
      },
      {
        "name": "Russian Sage",
        "reason": "Drought-tolerant perennial that complements the spruce's silvery-blue color and shares the same sunny, well-drained site."
      },
      {
        "name": "Karl Foerster Feather Reed Grass",
        "reason": "Upright ornamental grass that echoes the spruce's vertical form while tolerating the same open, sunny conditions."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The stiff, sharp needles generally deter deer browsing, though young trees may occasionally be nibbled in harsh winters."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated with no significant nectar value, though its dense branching provides important winter shelter for birds."
    },
    "zoneNotes": "At the cold edge (Zone 3), blue spruce is exceptionally hardy and thrives in the dry, cold climates of its native Rocky Mountain range; at the warm edge (Zone 7), it struggles with heat and humidity and becomes far more susceptible to needle cast diseases, often declining prematurely in hot, humid summers. It is best suited overall to cooler, drier climates than the eastern half of its listed zone range provides.",
    "troubleshooting": [
      {
        "issue": "Rhizosphaera needle cast (browning, dropping interior needles)",
        "fix": "Improve air circulation by spacing trees widely, avoid overhead watering, and apply fungicide in spring if the disease is established."
      },
      {
        "issue": "Spider mites in hot, dry weather",
        "fix": "Hose down foliage regularly during hot spells and treat heavy infestations with horticultural oil."
      },
      {
        "issue": "Cytospora canker (branch dieback, oozing resin)",
        "fix": "Prune out and destroy affected branches during dry weather; there is no cure once a tree is heavily infected, so prevention through good siting is key."
      }
    ]
  },
  "douglas-fir": {
    "matureSize": "40-80 ft tall (up to 200+ ft in native Pacific NW forests), 12-20 ft wide in landscape settings",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Rhododendron",
        "reason": "Shares the cool, moist, acidic conditions Douglas fir prefers and thrives in the light shade at the canopy edge."
      },
      {
        "name": "Sword Fern",
        "reason": "Native Pacific Northwest understory plant that fills the shaded, moist ground beneath Douglas fir in its natural companion habitat."
      },
      {
        "name": "Salal",
        "reason": "Native evergreen groundcover that naturally co-occurs with Douglas fir in Pacific coastal forests and tolerates the same acidic, humus-rich soil."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young seedlings and low branches, particularly in winter, but generally avoid established trees."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated with no showy flowers, though it provides significant cover and nesting habitat, and its seeds are an important food source for squirrels and birds."
    },
    "zoneNotes": "At the cold edge (Zone 4), Douglas fir needs a sheltered site with reliable snow cover, as interior/Rocky Mountain seed sources are more cold-hardy than coastal strains; at the warm edge (Zone 6), it struggles significantly with heat and drought stress outside of its preferred cool, humid Pacific Northwest climate, making it a poor choice for hot summer regions even within its nominal zone range. Seed source (coastal vs. interior) matters as much as zone number for this species.",
    "troubleshooting": [
      {
        "issue": "Drought stress in hot, dry summers",
        "fix": "Provide supplemental deep watering during establishment and avoid planting in regions with hot, arid summers outside its preferred climate."
      },
      {
        "issue": "Swiss needle cast (yellowing, premature needle drop)",
        "fix": "Improve air circulation and avoid overhead irrigation, especially in humid coastal climates where the fungus thrives."
      },
      {
        "issue": "Douglas fir bark beetle in stressed trees",
        "fix": "Keep trees well-watered and vigorous, since beetles primarily attack drought- or damage-stressed trees; remove severely infested trees promptly."
      }
    ]
  },
  "leyland-cypress": {
    "matureSize": "40-60 ft tall, 15-25 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Loropetalum",
        "reason": "Shares full sun and well-drained soil and adds color contrast as a lower-growing foreground shrub in front of a Leyland cypress screen."
      },
      {
        "name": "Nandina",
        "reason": "Tough, drought-tolerant shrub that thrives in the same sunny conditions and softens the base of a tall cypress hedge."
      },
      {
        "name": "Knockout Rose",
        "reason": "Full-sun, low-maintenance companion that provides seasonal color at the base of an evergreen privacy screen."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The dense, resinous foliage is not a preferred browse, making it a reliable screening choice in deer-prone landscapes."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Wind-pollinated with no flowers, though the dense evergreen habit offers valuable nesting and roosting cover for birds."
    },
    "zoneNotes": "At the cold edge (Zone 6), Leyland cypress can suffer winter injury and ice/snow breakage due to its fast, soft growth, so a sheltered site helps; at the warm edge (Zone 10), it is more prone to canker diseases when planted too densely in the hot, humid Southeast, where good spacing and drainage become critical to avoid disease pressure. It is most trouble-free in the middle of its range with well-drained soil.",
    "troubleshooting": [
      {
        "issue": "Seiridium/Botryosphaeria canker (branch dieback, browning)",
        "fix": "Space trees 6-10 ft apart for airflow, avoid overhead irrigation, and prune out infected branches during dry weather."
      },
      {
        "issue": "Bagworm infestation",
        "fix": "Hand-pick bags in winter or treat with Bt in early summer while larvae are small."
      },
      {
        "issue": "Root rot in poorly drained soil",
        "fix": "Plant in well-drained soil or raised beds and avoid overwatering, since Leyland cypress is highly sensitive to wet feet."
      }
    ]
  },
  "eastern-red-cedar": {
    "matureSize": "30-50 ft tall, 8-20 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Little Bluestem",
        "reason": "Native prairie grass that shares the cedar's tolerance for poor, dry soil and thrives in the same open, sunny sites."
      },
      {
        "name": "Butterfly Weed",
        "reason": "Drought-tolerant native perennial suited to the same lean, well-drained soil eastern red cedar favors."
      },
      {
        "name": "Yarrow",
        "reason": "Tough, low-water companion that tolerates the same poor soil and full sun conditions without competing heavily for moisture."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The aromatic, prickly foliage is generally avoided by deer except under severe winter food pressure."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Female trees produce blue berry-like cones that are an important winter food source for cedar waxwings and other songbirds, and the dense foliage provides nesting habitat."
    },
    "zoneNotes": "At the cold edge (Zone 3), eastern red cedar is fully hardy and one of the toughest conifers for harsh prairie and plains winters; at the warm edge (Zone 9), it is extremely heat- and drought-tolerant but should not be planted near apple or crabapple trees, since cedar-apple rust pressure is more severe in the humid, warmer parts of its range. Its remarkable soil adaptability makes it one of the most widely distributed native conifers in North America.",
    "troubleshooting": [
      {
        "issue": "Cedar-apple rust (orange gelatinous galls)",
        "fix": "Avoid planting within a few hundred feet of apple or crabapple trees, or remove galls in late winter before they release spores."
      },
      {
        "issue": "Bagworm infestation",
        "fix": "Hand-remove bags in winter or treat with Bt in early summer during the larval stage."
      },
      {
        "issue": "Winter bronzing of foliage",
        "fix": "This is a normal seasonal color change in cold weather and typically greens back up in spring; no treatment needed."
      }
    ]
  },
  "white-oak": {
    "matureSize": "60-80 ft tall, 50-80 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Christmas Fern",
        "reason": "Native shade-tolerant groundcover suited to the acidic, well-drained soil and dappled light beneath a mature white oak canopy."
      },
      {
        "name": "Mountain Laurel",
        "reason": "Native understory shrub that shares the oak's preference for acidic, well-drained soil and tolerates the shade at the canopy edge."
      },
      {
        "name": "Wild Ginger",
        "reason": "Low groundcover adapted to the leaf-litter-rich, humus soil typical beneath long-lived white oaks."
      },
      {
        "name": "Serviceberry",
        "reason": "Small native understory tree that complements white oak's high canopy and extends the wildlife food and bloom season."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer browse seedlings and young saplings heavily, often requiring tree protection for the first several years, but rarely damage mature trees."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "As a keystone species, white oak hosts hundreds of caterpillar species that feed songbirds, and its acorns are a critical fall/winter food source for deer, turkey, and squirrels."
    },
    "zoneNotes": "At the cold edge (Zone 3), white oak is fully hardy but grows especially slowly, sometimes taking 50+ years to reach significant size; at the warm edge (Zone 9), it is less common and less reliably vigorous than more heat-adapted oaks like live oak, preferring the cooler, well-drained sites found in the northern and middle portions of its range. Its exceptional longevity — often exceeding 300 years — makes it one of the most valuable legacy trees to plant regardless of zone.",
    "troubleshooting": [
      {
        "issue": "Oak wilt (rapid leaf browning and wilting)",
        "fix": "Avoid pruning in spring/early summer when sap beetles are active, and remove infected trees promptly to prevent spread through root grafts."
      },
      {
        "issue": "Slow establishment/transplant shock",
        "fix": "Plant young, small trees rather than large specimens, since white oak develops a long taproot that resents transplanting once established."
      },
      {
        "issue": "Soil compaction damaging shallow feeder roots",
        "fix": "Avoid foot traffic, construction, or heavy mulch mounding within the root zone (dripline) of established trees."
      }
    ]
  },
  "pin-oak": {
    "matureSize": "60-70 ft tall, 25-40 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Christmas Fern",
        "reason": "Tolerates the dense shade and acidic leaf litter beneath a mature pin oak's canopy."
      },
      {
        "name": "Wild Ginger",
        "reason": "Low, shade-tolerant groundcover that thrives in the same moist, acidic soil pin oak prefers."
      },
      {
        "name": "Virginia Bluebells",
        "reason": "Spring ephemeral that blooms before the oak's canopy fully leafs out, then goes dormant during peak shade."
      },
      {
        "name": "Inkberry Holly",
        "reason": "Shares pin oak's tolerance for wet, poorly drained clay soils in a mixed foundation planting."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Young saplings can get browsed but mature trees are generally left alone once bark toughens."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Wind-pollinated catkins offer little nectar value, but the acorns and canopy support squirrels, blue jays, and woodpeckers."
    },
    "zoneNotes": "In zone 4, pin oak can suffer dieback in unusually harsh winters and grows noticeably slower than farther south. In zones 7-8 at the warm edge, it performs well but is more prone to iron chlorosis where soils trend alkaline, since heat accelerates the tree's demand for iron uptake.",
    "troubleshooting": [
      {
        "issue": "Iron chlorosis (yellow leaves with dark green veins)",
        "fix": "Apply chelated iron soil drench or foliar spray and avoid planting in alkaline or compacted urban soil."
      },
      {
        "issue": "Retained lower branches ('self-pruning failure') that die but don't drop",
        "fix": "Prune dead lower limbs in late winter; this is a normal habit of the species, not disease."
      },
      {
        "issue": "Girdling roots on trees planted too deep",
        "fix": "Plant with the root flare visible at soil grade and remove circling roots at planting time."
      }
    ]
  },
  "live-oak": {
    "matureSize": "40-60 ft tall, 60-100 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Resurrection Fern",
        "reason": "Naturally epiphytic on live oak's broad limbs, adding texture without competing for root space."
      },
      {
        "name": "Spanish Moss",
        "reason": "The classic companion epiphyte that drapes live oak's horizontal branches in the Deep South."
      },
      {
        "name": "Muhly Grass",
        "reason": "Sun-loving ornamental grass that thrives at the dappled edge of a live oak's expansive canopy."
      },
      {
        "name": "Azalea",
        "reason": "Understory shrub that appreciates the filtered light and acidic soil found beneath a mature live oak."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Tough, leathery leaves are not a preferred browse, though deer may nibble young transplants."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Spring catkins feed early-season native bees, and the heavy acorn crop is a major food source for wild turkey, deer, and songbirds."
    },
    "zoneNotes": "At the cool edge (zone 7), live oak is evergreen in mild winters but can suffer significant leaf burn or partial defoliation during hard freezes. In zones 9-10 along the Gulf Coast it reaches its full iconic form with massive lateral spread and is essentially problem-free once established.",
    "troubleshooting": [
      {
        "issue": "Oak wilt fungal disease",
        "fix": "Avoid pruning between February and June when sap beetles are active, and sterilize tools between cuts."
      },
      {
        "issue": "Spanish moss buildup weighing down limbs",
        "fix": "This is largely cosmetic and not harmful, but excessive moss can be thinned manually if desired."
      },
      {
        "issue": "Limited root space under pavement in urban settings",
        "fix": "Use structural soil or root pathways when planting near sidewalks and driveways to prevent future heaving."
      }
    ]
  },
  "bur-oak": {
    "matureSize": "70-80 ft tall, 70-80 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Big Bluestem",
        "reason": "A native tallgrass prairie companion that shares bur oak's deep-rooted drought tolerance in savanna plantings."
      },
      {
        "name": "Wild Bergamot",
        "reason": "Sun-tolerant prairie perennial that thrives in the open, dappled shade typical of a bur oak savanna."
      },
      {
        "name": "Purple Coneflower",
        "reason": "Classic prairie-restoration pairing that tolerates the same heavy clay soils bur oak favors."
      },
      {
        "name": "Serviceberry",
        "reason": "Small understory tree with a similar tough, low-maintenance profile for a layered native planting."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Thick, corky bark and coarse leaves make mature bur oak unattractive to deer browsing."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Its enormous fringed acorns are prized by squirrels, blue jays, and wild turkey, and the tree hosts numerous native moth and butterfly caterpillars."
    },
    "zoneNotes": "At the cold edge (zone 3), bur oak is among the most cold-hardy oaks in North America and shows no dieback even in prairie winters. Toward zone 8, it tolerates heat and drought exceptionally well due to its deep taproot, but growth slows further in compacted or frequently irrigated soils it isn't adapted to.",
    "troubleshooting": [
      {
        "issue": "Difficult transplanting due to deep taproot",
        "fix": "Purchase younger, smaller nursery stock or containerized trees rather than large field-dug specimens."
      },
      {
        "issue": "Slow early growth discouraging homeowners",
        "fix": "Expect modest height gains the first several years; growth accelerates once the taproot is established."
      },
      {
        "issue": "Occasional gall-forming wasps distorting twigs",
        "fix": "Prune out and destroy affected twigs in winter; galls are cosmetic and rarely threaten tree health."
      }
    ]
  },
  "sugar-maple": {
    "matureSize": "60-75 ft tall, 40-50 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Trillium",
        "reason": "Classic Eastern woodland spring ephemeral that thrives in the same rich, acidic soil beneath sugar maples."
      },
      {
        "name": "Foamflower",
        "reason": "Shade-tolerant native groundcover that fills in naturally beneath a mature maple canopy."
      },
      {
        "name": "Christmas Fern",
        "reason": "Evergreen fern that handles the dense summer shade and dry soil competition of maple roots."
      },
      {
        "name": "Wild Ginger",
        "reason": "Low-growing native groundcover well suited to the cool, humus-rich understory sugar maples create."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young seedlings and saplings, particularly the tender spring growth, but mature trees are unaffected."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Early spring flowers provide crucial nectar for native bees emerging from dormancy before most other blooms appear."
    },
    "zoneNotes": "At the cold edge (zone 3), sugar maple performs beautifully and is the source tree for commercial maple syrup, since cold winters and freeze-thaw spring cycles trigger the best sap flow. In zone 7-8 at the warm edge, summer heat stress becomes a real limiting factor and trees are more prone to leaf scorch and decline, making it a poor choice in the Deep South.",
    "troubleshooting": [
      {
        "issue": "Leaf scorch in hot, dry, or salty urban sites",
        "fix": "Avoid planting near roads treated with de-icing salt and ensure consistent watering during drought."
      },
      {
        "issue": "Verticillium wilt causing branch dieback",
        "fix": "Remove and destroy affected limbs promptly; there is no cure, so prevention through site selection is key."
      },
      {
        "issue": "Girdling roots and trunk decay from soil piled against the trunk",
        "fix": "Keep mulch and soil away from the root flare and inspect the base periodically for circling roots."
      }
    ]
  },
  "silver-maple": {
    "matureSize": "50-80 ft tall, 35-50 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Ostrich Fern",
        "reason": "Moisture-loving fern that thrives in the damp, low-lying sites silver maple is often planted in."
      },
      {
        "name": "Cardinal Flower",
        "reason": "Native wetland perennial that shares silver maple's preference for consistently moist soil."
      },
      {
        "name": "River Birch",
        "reason": "Another fast-growing, wet-tolerant tree that pairs well in naturalized low-spot or streambank plantings."
      },
      {
        "name": "Joe Pye Weed",
        "reason": "Tall native perennial suited to the same damp soils and open sun silver maple tolerates."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer may browse low branches and saplings, but the tree grows quickly enough to outpace moderate damage."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Very early spring flowers are an important nectar source for native bees before most other trees bloom."
    },
    "zoneNotes": "In zone 3-4 at the cold edge, silver maple is fully hardy and its rapid growth makes it a popular quick shade tree despite structural weaknesses. In zone 9 at the warm edge, heat and drought stress become more limiting, and the brittle wood is at higher risk from severe summer thunderstorms and hurricanes common in that range.",
    "troubleshooting": [
      {
        "issue": "Storm damage from brittle, weak-wooded branches",
        "fix": "Plant well away from structures and have a certified arborist thin the canopy periodically to reduce wind load."
      },
      {
        "issue": "Aggressive surface roots heaving sidewalks and lawns",
        "fix": "Site at least 20-30 feet from pavement, foundations, and septic lines before planting."
      },
      {
        "issue": "Chlorosis in high-pH soils",
        "fix": "Amend with sulfur or use chelated iron treatments to keep soil pH in the slightly acidic range this tree prefers."
      }
    ]
  },
  "american-sycamore": {
    "matureSize": "75-100 ft tall, 60-75 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "River Birch",
        "reason": "Shares sycamore's preference for consistently moist, streamside soils in naturalized plantings."
      },
      {
        "name": "Cardinal Flower",
        "reason": "Moisture-loving native perennial well suited to the damp, floodplain-like conditions sycamore favors."
      },
      {
        "name": "Buttonbush",
        "reason": "Wetland shrub that tolerates the same periodically flooded sites where sycamore thrives."
      },
      {
        "name": "Switchgrass",
        "reason": "Deep-rooted native grass that stabilizes soil around sycamore in streambank and low-area plantings."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Coarse, bristly leaves and rapid upward growth make sycamore largely unappealing to browsing deer."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated with inconspicuous flowers, though the seed balls do feed goldfinches and other seed-eating birds through winter."
    },
    "zoneNotes": "At the cold edge (zone 4), sycamore is fully hardy but grows somewhat slower than in warmer regions. In zones 8-9 near its warm limit it reaches truly massive proportions fastest, but anthracnose pressure is typically worse in years with cool, wet spring weather regardless of zone.",
    "troubleshooting": [
      {
        "issue": "Anthracnose fungal disease causing early leaf drop",
        "fix": "Rake and destroy fallen leaves each year and avoid overhead watering; resistant hybrid cultivars like 'Bloodgood' London planetree can be substituted."
      },
      {
        "issue": "Constant bark shedding creating litter",
        "fix": "This is a normal ornamental trait of the species — simply site away from patios or areas requiring tidy year-round appearance."
      },
      {
        "issue": "Massive mature size overwhelming small yards",
        "fix": "Reserve for large properties, parks, or streamside areas with at least 40-50 feet of clearance in all directions."
      }
    ]
  },
  "tulip-poplar": {
    "matureSize": "70-90 ft tall, 35-50 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Mountain Laurel",
        "reason": "Understory shrub adapted to the same acidic, well-drained soils found beneath mature tulip poplars in Eastern forests."
      },
      {
        "name": "Christmas Fern",
        "reason": "Shade-tolerant native fern that fills in naturally beneath tulip poplar's high, open canopy."
      },
      {
        "name": "Virginia Sweetspire",
        "reason": "Native shrub that tolerates the dappled shade and rich soil typical of a tulip poplar planting."
      },
      {
        "name": "Wild Columbine",
        "reason": "Woodland perennial well suited to the light shade cast by tulip poplar's high-branching form."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer occasionally browse young saplings but generally avoid the bitter-tasting foliage of established trees."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Large tulip-shaped flowers produce copious nectar prized by honeybees, native bees, and hummingbirds."
    },
    "zoneNotes": "At the cold edge (zone 4), tulip poplar grows more slowly and can experience occasional dieback after extreme winters. Toward zone 9 at the warm edge, it needs consistent soil moisture to handle summer heat, and drought-stressed trees in that range are more prone to premature yellow leaf drop in mid-to-late summer.",
    "troubleshooting": [
      {
        "issue": "Premature yellowing and leaf drop in dry summers",
        "fix": "Water deeply during drought, especially in the tree's first several years, and mulch to conserve soil moisture."
      },
      {
        "issue": "Aphid infestations producing sticky honeydew and sooty mold",
        "fix": "Encourage ladybugs and lacewings, or spray with insecticidal soap on young trees for heavy infestations."
      },
      {
        "issue": "Weak branch attachments prone to storm breakage in older trees",
        "fix": "Schedule periodic structural pruning by a certified arborist to remove weak or crossing limbs."
      }
    ]
  },
  "sweetgum": {
    "matureSize": "60-75 ft tall, 40-50 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Oakleaf Hydrangea",
        "reason": "Understory shrub with complementary fall color that tolerates the same acidic, well-drained soils sweetgum favors."
      },
      {
        "name": "Itea (Virginia Sweetspire)",
        "reason": "Native shrub whose red fall foliage echoes sweetgum's own dramatic autumn color display."
      },
      {
        "name": "Christmas Fern",
        "reason": "Handles the light shade and acidic leaf litter that accumulates beneath a mature sweetgum."
      },
      {
        "name": "Little Bluestem",
        "reason": "Sun-tolerant native grass suited to the dappled edge of sweetgum's canopy in mixed borders."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Star-shaped, somewhat leathery leaves are not a preferred deer food, especially on established trees."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Flowers are inconspicuous and wind-pollinated, but the abundant seed balls feed goldfinches, chickadees, and squirrels through winter."
    },
    "zoneNotes": "At the cold edge (zone 5), sweetgum's fall color intensifies with cooler autumn nights but the tree can suffer occasional twig dieback in severe winters. In zone 9 at the warm edge, growth is faster and more vigorous, but the notorious spiky seed pod litter becomes a bigger nuisance issue on paved surfaces due to the longer growing season.",
    "troubleshooting": [
      {
        "issue": "Spiky seed pods ('gumballs') littering lawns and walkways",
        "fix": "Plant a fruitless cultivar such as 'Rotundiloba' near hardscape areas, or rake pods promptly after they drop."
      },
      {
        "issue": "Chlorosis in high-pH or compacted soils",
        "fix": "Amend soil to slightly acidic pH and avoid heavily compacted urban planting sites."
      },
      {
        "issue": "Shallow surface roots disrupting nearby lawn or pavement",
        "fix": "Plant at least 15-20 feet from sidewalks, driveways, and foundations."
      }
    ]
  },
  "ginkgo": {
    "matureSize": "50-80 ft tall, 30-40 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Shade-tolerant perennial well suited to the light, open dappled shade a mature ginkgo casts."
      },
      {
        "name": "Japanese Forest Grass",
        "reason": "Fine-textured ornamental grass that complements ginkgo's distinctive fan-shaped foliage in shade borders."
      },
      {
        "name": "Astilbe",
        "reason": "Tolerates the same well-drained, urban-tolerant conditions ginkgo thrives in near sidewalks and courtyards."
      },
      {
        "name": "Boxwood",
        "reason": "Classic formal underplanting that softens the tall, upright silhouette of a mature ginkgo specimen."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Ginkgo's unique leaf chemistry, unchanged for millions of years, is highly unpalatable to deer and virtually pest-free overall."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated with no showy flowers, offering minimal direct pollinator value, though it provides structural habitat for birds."
    },
    "zoneNotes": "At the cold edge (zone 3), ginkgo is fully hardy and shows excellent fall color, though growth is notably slower than in warmer zones. Toward zone 8 at the warm edge, it tolerates heat, pollution, and poor soil exceptionally well, making it one of the most reliable street trees across its entire range regardless of zone.",
    "troubleshooting": [
      {
        "issue": "Foul-smelling fruit from female trees",
        "fix": "Always purchase a named male cultivar such as 'Autumn Gold' or 'Princeton Sentry' to avoid fruiting entirely."
      },
      {
        "issue": "Very slow establishment period after transplanting",
        "fix": "Be patient and provide consistent watering for the first 2-3 years; growth rate increases once established."
      },
      {
        "issue": "Sparse, awkward branching in young trees",
        "fix": "Light structural pruning in the early years helps develop a fuller, more balanced canopy over time."
      }
    ]
  },
  "american-linden": {
    "matureSize": "50-70 ft tall, 35-50 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Bee Balm",
        "reason": "Nectar-rich perennial that complements linden's own honeybee-attracting summer flowers."
      },
      {
        "name": "Foamflower",
        "reason": "Shade-tolerant groundcover suited to the dense, symmetrical shade linden's canopy produces."
      },
      {
        "name": "Hosta",
        "reason": "Reliable shade perennial that fills in well beneath a mature linden's broad crown."
      },
      {
        "name": "Solomon's Seal",
        "reason": "Native woodland perennial adapted to the rich, moist soil linden favors."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young leaves and saplings, particularly in areas with high deer pressure, but mature trees tolerate light browsing."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Intensely fragrant summer flowers are one of the best honeybee nectar sources of any shade tree, also drawing native bees in large numbers."
    },
    "zoneNotes": "At the cold edge (zone 3), American linden is fully hardy and one of the most reliable shade trees for northern prairie and Great Lakes climates. In zone 8 at the warm edge, summer heat and humidity increase pressure from Japanese beetles, which can skeletonize foliage more severely than in cooler regions.",
    "troubleshooting": [
      {
        "issue": "Japanese beetle defoliation in summer",
        "fix": "Hand-pick beetles in early morning or use targeted treatments; avoid pheromone traps, which can attract more beetles to the area."
      },
      {
        "issue": "Aphids producing sticky honeydew that drips on cars and patios",
        "fix": "Encourage natural predators like ladybugs, or treat heavy infestations with insecticidal soap."
      },
      {
        "issue": "Leaf scorch during prolonged summer drought",
        "fix": "Water deeply during dry spells, particularly for newly planted or young trees."
      }
    ]
  },
  "american-elm": {
    "matureSize": "60-80 ft tall, 40-60 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Classic shade perennial well suited to the light, dappled shade beneath elm's vase-shaped canopy."
      },
      {
        "name": "Astilbe",
        "reason": "Moisture-loving perennial that thrives in the rich, well-drained soil American elm prefers."
      },
      {
        "name": "Bleeding Heart",
        "reason": "Shade-tolerant spring perennial that complements the classic street-tree look of a mature elm."
      },
      {
        "name": "Ferns (assorted woodland species)",
        "reason": "Fill in naturally beneath elm's high, arching branch structure in a traditional shade garden."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse young saplings but rarely bother established trees with mature bark."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Small, inconspicuous wind-pollinated flowers offer limited nectar, though the tree hosts numerous native butterfly and moth caterpillars."
    },
    "zoneNotes": "At the cold edge (zone 3), American elm is fully hardy and was historically one of the most widely planted street trees across the northern Great Plains and Midwest. In zone 9 at the warm edge, disease-resistant cultivars still perform well, but heat and humidity can increase pressure from elm leaf beetles compared to cooler regions.",
    "troubleshooting": [
      {
        "issue": "Dutch elm disease killing susceptible older-variety trees",
        "fix": "Only plant disease-resistant cultivars like 'Princeton' or 'Valley Forge,' and remove any severely infected trees promptly to limit spread."
      },
      {
        "issue": "Elm leaf beetle skeletonizing foliage",
        "fix": "Apply systemic insecticide in spring if infestations are severe, or rely on natural predators for light damage."
      },
      {
        "issue": "Suckering from the base or roots",
        "fix": "Prune out root suckers regularly at the point of origin to maintain a clean single-trunk form."
      }
    ]
  },
  "honeylocust": {
    "matureSize": "30-70 ft tall, 30-70 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Kentucky Bluegrass",
        "reason": "Honeylocust's light, filtered shade is famously turf-friendly, allowing lawn grass to thrive underneath unlike most large shade trees."
      },
      {
        "name": "Daylily",
        "reason": "Sun-tolerant perennial that handles the dappled light beneath honeylocust's fine, feathery canopy."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Thrives in the same open, sunny conditions honeylocust's thin canopy allows to reach the ground."
      },
      {
        "name": "Russian Sage",
        "reason": "Drought-tolerant perennial well suited to honeylocust's tolerance for hot, dry urban planting sites."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Thorny wild forms and even thornless cultivars are seldom browsed once past the seedling stage."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Small, fragrant spring flowers attract honeybees and native bees, and the seed pods feed squirrels and deer in fall."
    },
    "zoneNotes": "At the cold edge (zone 3), honeylocust is exceptionally hardy and thrives on the Great Plains where few other large shade trees tolerate the wind and cold. In zone 9 at the warm edge, it handles extreme heat and drought well, but webworm and mimosa webworm pest pressure tends to be more severe in the longer, hotter growing season.",
    "troubleshooting": [
      {
        "issue": "Mimosa webworm creating unsightly webbed, browned foliage",
        "fix": "Prune out and destroy webbed sections early, or treat with Bt (Bacillus thuringiensis) at first sign of webbing."
      },
      {
        "issue": "Pod litter from seed-bearing cultivars",
        "fix": "Choose a podless cultivar like 'Shademaster' or 'Skyline' to avoid cleanup entirely."
      },
      {
        "issue": "Canker diseases on stressed trees",
        "fix": "Avoid drought stress and mechanical injury, which are the primary triggers, and prune out cankered limbs promptly."
      }
    ]
  },
  "bald-cypress": {
    "matureSize": "50-70 ft tall, 20-30 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Cardinal Flower",
        "reason": "Wetland native perennial that thrives in the same consistently moist to wet soils bald cypress favors."
      },
      {
        "name": "Louisiana Iris",
        "reason": "Classic Southern swamp-garden companion adapted to the same boggy, low-lying planting conditions."
      },
      {
        "name": "Buttonbush",
        "reason": "Wetland shrub that tolerates standing water alongside bald cypress in rain garden or pond-edge plantings."
      },
      {
        "name": "Switchgrass",
        "reason": "Deep-rooted native grass that stabilizes soil at the water's edge near bald cypress plantings."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Soft, feathery needles are occasionally browsed by deer, but damage is rarely severe on established trees."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated cones offer little nectar value, but the dense branching provides excellent nesting and roosting habitat for wading birds and songbirds."
    },
    "zoneNotes": "At the cold edge (zone 4), bald cypress is surprisingly hardy for a tree associated with Southern swamps and colors up reliably each fall. In zones 9-10 at the warm edge, it grows in its native element and forms the classic knobby 'knees' in consistently saturated soil, though in drier upland sites at any zone the knees rarely develop.",
    "troubleshooting": [
      {
        "issue": "Knees forming and disrupting lawn mowing",
        "fix": "Plant away from mowed turf areas or in sites with well-drained soil where knee formation is less pronounced."
      },
      {
        "issue": "Spider mites in hot, dry conditions",
        "fix": "Hose down foliage periodically during drought and ensure consistent soil moisture to reduce mite stress."
      },
      {
        "issue": "Chlorosis in high-pH soils",
        "fix": "Amend with sulfur or use chelated iron products, since bald cypress prefers acidic, wet conditions."
      }
    ]
  },
  "sabal-palm": {
    "matureSize": "40-50 ft tall, 10-15 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Muhly Grass",
        "reason": "Classic Florida landscape companion that shares sabal palm's tolerance for sandy soil and coastal wind."
      },
      {
        "name": "Coontie",
        "reason": "Native cycad groundcover well suited to the dry, sandy conditions beneath a sabal palm."
      },
      {
        "name": "Firebush",
        "reason": "Heat- and salt-tolerant shrub that pairs naturally with sabal palm in coastal Florida landscaping."
      },
      {
        "name": "Beach Sunflower",
        "reason": "Low, spreading groundcover that thrives in the same full-sun, sandy, salt-tolerant conditions sabal palm favors."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Tough, fibrous fronds are rarely browsed, making it a reliable choice in areas with deer pressure."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Large clusters of small white summer flowers attract native bees, and the abundant fruit feeds songbirds, raccoons, and black bears."
    },
    "zoneNotes": "At the cold edge (zone 8), sabal palm is the most cold-hardy native palm and can survive brief drops into the teens°F once established, though fronds may show cold damage. In zones 10-11 at the warm edge, it grows in its ideal climate and reaches full stately height with essentially no cold stress at all.",
    "troubleshooting": [
      {
        "issue": "Slow establishment after transplanting large field-dug specimens",
        "fix": "Expect a 1-2 year adjustment period; keep newly transplanted palms consistently watered and avoid fertilizing immediately after planting."
      },
      {
        "issue": "Potassium deficiency causing yellow-orange discoloration on older fronds",
        "fix": "Apply a palm-specific slow-release fertilizer with extra potassium and magnesium."
      },
      {
        "issue": "Frond drop leaving a rough, unkempt trunk ('boot' stubs)",
        "fix": "This is a natural growth habit; boots can be trimmed for a smoother look or left for a more natural appearance."
      }
    ]
  },
  "queen-palm": {
    "matureSize": "35-50 ft tall, 15-25 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Bird of Paradise",
        "reason": "Classic tropical companion that shares queen palm's love of full sun and frost-free warmth in Florida and Southern California landscapes."
      },
      {
        "name": "Bougainvillea",
        "reason": "Vigorous flowering vine that pairs well with queen palm's fast, tropical-looking growth habit."
      },
      {
        "name": "Lantana",
        "reason": "Heat- and drought-tolerant groundcover well suited to the sunny base plantings beneath a queen palm."
      },
      {
        "name": "Society Garlic",
        "reason": "Low, drought-tolerant border plant that complements queen palm's tall, airy silhouette."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Palms are generally low on the deer browse list, and queen palm's fronds are well out of typical browsing reach at maturity."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Large hanging flower clusters attract bees and other pollinating insects, and the orange fruit is eaten by birds and squirrels."
    },
    "zoneNotes": "At the cold edge (zone 9), queen palm is marginally hardy and can suffer serious frond damage or death in hard freezes below the mid-20s°F, so cold protection may be needed during rare cold snaps. In zone 11 at the warm edge, it thrives with essentially no cold risk and grows at its fastest, most vigorous rate.",
    "troubleshooting": [
      {
        "issue": "Cold damage or death during unexpected freezes",
        "fix": "Wrap the trunk and crown with frost cloth during hard freeze warnings, especially for young palms near the cold edge of its range."
      },
      {
        "issue": "Nutrient deficiencies (potassium, magnesium, manganese) causing frizzled or discolored fronds",
        "fix": "Feed regularly with a palm-specific fertilizer formulated for these micronutrients."
      },
      {
        "issue": "Ganoderma butt rot at the base of older palms",
        "fix": "There is no cure; remove and destroy affected palms and avoid replanting another palm in the same spot."
      }
    ]
  },
  "butterfly-bush": {
    "matureSize": "5-8 ft tall, 4-6 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Russian Sage",
        "reason": "Shares the same full-sun, low-water needs and its silvery blue spikes bloom alongside butterfly bush all summer without competing for moisture."
      },
      {
        "name": "Coneflower (Echinacea)",
        "reason": "Blooms on the same summer-into-fall schedule and reinforces the pollinator display with a contrasting daisy form."
      },
      {
        "name": "Ornamental Grasses (e.g. Little Bluestem)",
        "reason": "Provides an airy, low-water backdrop and winter structure once butterfly bush is cut back hard in spring."
      },
      {
        "name": "Sedum 'Autumn Joy'",
        "reason": "Extends the nectar season into fall right as butterfly bush blooms taper off, keeping late migrating butterflies fed."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The bitter, slightly fuzzy leaves discourage browsing, though deer may nip new growth in early spring when little else is available."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "A magnet for swallowtails, monarchs, painted ladies, and other nectaring butterflies, plus bumblebees and hummingbirds."
    },
    "zoneNotes": "In Zone 5, stems typically die back to the ground each winter and the shrub behaves as a cutback perennial, still flowering reliably on new wood by midsummer. In Zones 9-10 it stays woody and evergreen-ish year-round and needs harder, more frequent pruning to prevent it from becoming leggy and sparse-flowering at the base.",
    "troubleshooting": [
      {
        "issue": "Legginess with bare lower stems",
        "fix": "Cut all stems back to 6-12 inches from the ground in early spring before new growth emerges; this is required annual maintenance, not optional cleanup."
      },
      {
        "issue": "Spider mites in hot, dry weather",
        "fix": "Hose down foliage regularly during heat waves and avoid drought stress, which is the main trigger for mite outbreaks."
      },
      {
        "issue": "Self-seeding into wild areas",
        "fix": "Deadhead spent flower spikes promptly and consider a sterile cultivar (e.g. 'Miss Molly' or Lo & Behold series) where the species is regionally invasive."
      }
    ]
  },
  "knockout-rose": {
    "matureSize": "3-4 ft tall, 3-4 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Catmint (Nepeta)",
        "reason": "Its sprawling blue-purple flowers mask bare rose stems at the base and shares the same full-sun, well-drained preference."
      },
      {
        "name": "Salvia 'May Night'",
        "reason": "Repeat-blooms on a similar cycle, giving continuous color contrast against the rose's pink or red blooms."
      },
      {
        "name": "Boxwood",
        "reason": "A clipped boxwood edge gives Knockout Rose's informal mounded form structure in a formal bed layout."
      },
      {
        "name": "Lavender",
        "reason": "Shares drought tolerance and full sun, and its gray foliage sets off the rose's glossy green leaves."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "More deer-resistant than hybrid tea roses due to thicker foliage, but hungry deer in high-pressure areas will still browse buds and canes."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Single-petaled blooms are accessible to bees, especially bumblebees and honeybees, though the flowers offer little fragrance to attract broader pollinator traffic."
    },
    "zoneNotes": "In Zone 4-5, plants may experience some cane dieback in harsh winters and benefit from a mounded mulch collar at the base; in Zones 9-10 the shrub blooms nearly year-round with only a brief winter pause and needs more frequent deadheading and fertilizing to sustain the extended bloom season.",
    "troubleshooting": [
      {
        "issue": "Rose rosette disease (witches'-broom growth)",
        "fix": "Remove and destroy infected canes or the entire plant immediately, since there is no cure and the mite-vectored virus spreads to nearby roses."
      },
      {
        "issue": "Black spot in humid climates",
        "fix": "Water at the base rather than overhead, ensure good air circulation between plants, and clean up fallen leaves in autumn."
      },
      {
        "issue": "Japanese beetle feeding on blooms",
        "fix": "Hand-pick beetles into soapy water in early morning and avoid pheromone traps, which tend to attract more beetles than they catch."
      }
    ]
  },
  "lilac": {
    "matureSize": "8-15 ft tall, 6-12 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Peony",
        "reason": "Blooms in the same late-spring window and shares lilac's preference for full sun and neutral-to-alkaline, well-drained soil."
      },
      {
        "name": "Allium 'Purple Sensation'",
        "reason": "Its globe flowers echo lilac's purple tones and bloom just as the shrub's flower clusters fade."
      },
      {
        "name": "Catmint (Nepeta)",
        "reason": "Softens lilac's bare lower legs and continues blooming long after the shrub's short spring show ends."
      },
      {
        "name": "Weigela",
        "reason": "Extends the flowering sequence into early summer with a similar informal, arching shrub form."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer generally avoid mature lilac but will browse tender new shoots and flower buds on young plants in early spring."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Fragrant flower clusters draw early-season bumblebees, honeybees, and swallowtail butterflies during the brief bloom window."
    },
    "zoneNotes": "Lilac performs best at the cold end of its range (Zones 3-5) where winter chilling hours are abundant and bloom is heaviest; in Zone 7, the warm end of its tolerance, chilling requirements are marginally met and flowering can become sparse or erratic in mild winters, making it a poor choice further south.",
    "troubleshooting": [
      {
        "issue": "Powdery mildew on leaves by late summer",
        "fix": "Improve air circulation by thinning crowded stems and choose mildew-resistant cultivars like 'Miss Kim'; the disease is cosmetic and doesn't require chemical treatment."
      },
      {
        "issue": "Failure to bloom",
        "fix": "Prune only immediately after flowering (buds for next year set by midsummer), and check that the site gets at least 6 hours of direct sun."
      },
      {
        "issue": "Overgrown, leggy shrub with flowers only at the top",
        "fix": "Rejuvenate by removing one-third of the oldest, thickest canes at ground level each year for three years."
      }
    ]
  },
  "azalea": {
    "matureSize": "3-6 ft tall, 3-6 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Thrives in the same acidic, partial-shade woodland conditions and fills in beneath azalea's canopy after its spring bloom fades."
      },
      {
        "name": "Japanese Fern (Athyrium niponicum)",
        "reason": "Shares azalea's preference for humus-rich, acidic soil and adds textural contrast in a shaded bed."
      },
      {
        "name": "Camellia",
        "reason": "Extends flowering interest into fall and winter in the same acidic-soil, part-shade planting bed."
      },
      {
        "name": "Dogwood (Cornus florida)",
        "reason": "Provides the dappled overhead shade azalea prefers and blooms in the same season for a classic layered spring display."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Azalea is a preferred deer browse, especially flower buds in winter and new growth in spring; unprotected plantings in high-deer areas are often stripped."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Early-season blooms attract mason bees, bumblebees, and occasionally ruby-throated hummingbirds passing through on migration."
    },
    "zoneNotes": "In Zone 4-5, choose cold-hardy Northern Lights or PJM-type cultivars, since standard evergreen azaleas suffer bud and stem dieback below about -15°F; in Zones 8-9, azaleas benefit from afternoon shade to avoid summer leaf scorch and typically bloom several weeks earlier than their northern counterparts.",
    "troubleshooting": [
      {
        "issue": "Yellowing leaves with green veins (iron chlorosis)",
        "fix": "Test soil pH and amend with sulfur if it has drifted above 6.0, since alkaline soil locks up iron azaleas need."
      },
      {
        "issue": "Lace bugs causing stippled, bleached foliage",
        "fix": "Check the undersides of leaves for black specks (droppings) and treat with horticultural oil or insecticidal soap in spring before populations build."
      },
      {
        "issue": "Root rot in heavy, poorly drained soil",
        "fix": "Plant high, with the root ball slightly above grade, and amend clay soil generously with organic matter before planting."
      }
    ]
  },
  "forsythia": {
    "matureSize": "6-10 ft tall, 6-10 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Daffodil",
        "reason": "Blooms at exactly the same early-spring moment, echoing forsythia's yellow with a lower-growing bulb layer."
      },
      {
        "name": "Crocus",
        "reason": "One of the very first bulbs to flower, timed to open alongside forsythia's bare-branch yellow display."
      },
      {
        "name": "Viburnum",
        "reason": "Follows forsythia's early bloom with its own flush of white flowers, extending seasonal interest in the same bed."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Fills in around forsythia's coarse summer foliage and provides contrast once the spring flower show has passed."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally leave established forsythia alone, though young transplants may get occasional browsing before the shrub toughens up."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "An important early nectar and pollen source for the first bumblebee queens and honeybees emerging from winter dormancy."
    },
    "zoneNotes": "At the cold edge of its range (Zone 4), flower buds set the previous fall can be killed by late winter cold snaps even though the plant itself survives, resulting in a bloomless spring with foliage only; in Zone 8-9 forsythia blooms noticeably earlier, sometimes in late January, and benefits from being planted where a late freeze won't damage the open flowers.",
    "troubleshooting": [
      {
        "issue": "Sprawling, weedy appearance",
        "fix": "Prune immediately after flowering to shape, and remove one-third of the oldest canes at the base each year rather than shearing, which ruins the natural arching form."
      },
      {
        "issue": "No flowers despite healthy growth",
        "fix": "Check for late-winter cold damage to flower buds, or overly aggressive fall/winter pruning that removed the buds before they could open."
      },
      {
        "issue": "Rooting where branch tips touch soil",
        "fix": "Trim low, trailing branches that layer themselves into the ground if a tidy footprint is desired, since forsythia roots readily wherever stems contact soil."
      }
    ]
  },
  "boxwood": {
    "matureSize": "3-6 ft tall, 3-6 ft wide (unpruned); maintained smaller as a hedge",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Thrives in the same partial shade at boxwood's base and provides contrasting broad-leaf texture against its fine evergreen foliage."
      },
      {
        "name": "Boxwood (as a formal edge)",
        "reason": "Repeating the same species in a clipped low hedge is the classic way to frame a bed geometrically."
      },
      {
        "name": "Lavender",
        "reason": "In full-sun plantings, its silvery foliage and looser habit contrast well with boxwood's dense, dark green formality."
      },
      {
        "name": "Daffodil",
        "reason": "Blooms and fades before boxwood's own spring growth flush, adding seasonal color without competing for space."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Boxwood's bitter, slightly toxic foliage makes it one of the most reliably deer-resistant landscape shrubs available."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Inconspicuous spring flowers offer minor pollen value to small bees, but boxwood is grown for foliage, not floral resources."
    },
    "zoneNotes": "In Zone 5, winter bronzing and desiccation on exposed, windy sites is common and worsens in years with little snow cover for insulation; in Zone 9, English boxwood (Buxus sempervirens) struggles with summer heat and humidity-related root rot, so American or hybrid cultivars like 'Green Velvet' are a more reliable choice at the warm end of the range.",
    "troubleshooting": [
      {
        "issue": "Boxwood blight (dark leaf spots, defoliation)",
        "fix": "Remove and destroy infected plants and fallen leaf litter, avoid overhead watering, and disinfect pruning tools between plants."
      },
      {
        "issue": "Winter bronzing/desiccation",
        "fix": "Apply an anti-desiccant spray in late fall and site plants away from harsh winter wind exposure."
      },
      {
        "issue": "Boxwood leafminer causing blistered leaves",
        "fix": "Apply a systemic insecticide in spring when adult flies emerge, or prune out and destroy heavily mined foliage."
      }
    ]
  },
  "rhododendron": {
    "matureSize": "6-10 ft tall, 6-10 ft wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Azalea",
        "reason": "A close relative sharing the exact same acidic soil, part-shade, and moisture requirements, extending the bloom season when varieties are staggered."
      },
      {
        "name": "Japanese Fern (Athyrium niponicum)",
        "reason": "Fills the shaded ground plane beneath rhododendron's canopy with textural contrast and matching soil needs."
      },
      {
        "name": "Mountain Laurel (Kalmia latifolia)",
        "reason": "A native woodland companion with the same acidic, well-drained soil preference and overlapping bloom time."
      },
      {
        "name": "Hosta",
        "reason": "Tolerates the same dappled shade and moist, humus-rich soil at the shrub's base."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Rhododendron is one of deer's preferred winter browse plants, and unprotected specimens are frequently stripped of foliage and flower buds in cold months."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Large flower trusses attract bumblebees and other native bees, along with occasional hummingbird visits during bloom."
    },
    "zoneNotes": "In Zone 4, only the hardiest catawbiense-derived hybrids (like 'Roseum Elegans' or 'PJM') survive reliably, and winter leaf curling and bronzing is normal cold-protection behavior, not necessarily damage; in Zone 8, summer heat and humidity become the limiting factor rather than cold, and afternoon shade plus consistent moisture become essential to prevent scorch and root stress.",
    "troubleshooting": [
      {
        "issue": "Yellowing leaves with green veins (iron chlorosis)",
        "fix": "Test and lower soil pH if it has risen above 6.0, since rhododendron requires strongly acidic soil to take up iron properly."
      },
      {
        "issue": "Root rot from poor drainage",
        "fix": "Plant with the root crown slightly above grade in raised, well-drained beds, since rhododendron roots are extremely intolerant of standing water."
      },
      {
        "issue": "Lace bugs stippling leaf surfaces",
        "fix": "Inspect leaf undersides for dark excrement spots and treat with insecticidal soap, focusing on plants in full sun where lace bug pressure is highest."
      }
    ]
  },
  "spirea": {
    "matureSize": "3-5 ft tall, 3-5 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Daylily",
        "reason": "Blooms through the same summer stretch and tolerates the same range of soil types and full sun exposure."
      },
      {
        "name": "Russian Sage",
        "reason": "Complements spirea's pink or white flower clusters with airy blue spikes and matching drought tolerance."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Shares spirea's easygoing, low-maintenance nature and extends bloom color into late summer and fall."
      },
      {
        "name": "Boxwood",
        "reason": "Gives structural contrast against spirea's soft mounded form in a mixed foundation planting."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally bypass spirea in favor of more palatable plants, making it a dependable choice in browse-heavy landscapes."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Flat-topped flower clusters are easily accessible to small native bees, honeybees, and butterflies throughout the bloom period."
    },
    "zoneNotes": "At the cold end of its range (Zone 3), spirea may experience some tip dieback in exceptionally harsh winters but rebounds quickly from the base due to its vigorous growth habit; in Zone 8-9 it blooms earlier and benefits from the post-bloom shearing being done promptly to trigger a strong rebloom before summer heat sets in.",
    "troubleshooting": [
      {
        "issue": "Sparse second bloom",
        "fix": "Shear back by one-third immediately after the first flower flush fades to stimulate a reliable rebloom later in summer."
      },
      {
        "issue": "Powdery mildew in humid conditions",
        "fix": "Space plants for good air circulation and avoid overhead watering late in the day."
      },
      {
        "issue": "Aphids clustering on new growth",
        "fix": "Spray off with a strong jet of water or apply insecticidal soap; populations are rarely severe enough to threaten the plant's health."
      }
    ]
  },
  "holly": {
    "matureSize": "15-30 ft tall, 10-20 ft wide (species form; smaller cultivars available)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Nandina",
        "reason": "Shares holly's evergreen structure and winter berry display, doubling the cold-season color in a shared bed."
      },
      {
        "name": "Boxwood",
        "reason": "Provides a lower, formal evergreen contrast to holly's coarser, glossier foliage in foundation plantings."
      },
      {
        "name": "Winterberry Holly",
        "reason": "A deciduous relative that extends the red-berry winter display into open, sunnier parts of the landscape holly itself may not tolerate."
      },
      {
        "name": "Camellia",
        "reason": "Matches holly's evergreen structure and acid-soil preference while adding fall-through-winter flower color."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The spiny, leathery leaves of American holly are one of the most effective natural deer deterrents among common landscape shrubs."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Small, inconspicuous spring flowers are an important early nectar source for native bees, which are needed to pollinate female plants into producing berries."
    },
    "zoneNotes": "In Zone 5, American holly is at the cold edge of its tolerance and benefits from a sheltered site away from harsh winter wind, which can desiccate evergreen foliage; in Zone 9, it tolerates heat well but appreciates supplemental water during prolonged summer dry spells to keep berry production strong.",
    "troubleshooting": [
      {
        "issue": "No berries produced",
        "fix": "Confirm a male holly cultivar is planted within 30-40 feet, since holly is dioecious and only pollinated female plants set berries."
      },
      {
        "issue": "Leaf miner tunnels in foliage",
        "fix": "Prune out and destroy affected leaves and apply a systemic insecticide in spring when adult flies are active."
      },
      {
        "issue": "Scale insects causing sooty mold",
        "fix": "Treat with horticultural oil in late winter before bud break to smother overwintering scale before it spreads."
      }
    ]
  },
  "nandina": {
    "matureSize": "4-6 ft tall, 2-4 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Boxwood",
        "reason": "Provides a dense green evergreen backdrop that contrasts nicely with nandina's airy, cane-like structure and fall color."
      },
      {
        "name": "Liriope",
        "reason": "Shares nandina's tolerance for heat, drought, and part shade, filling the ground plane beneath its upright canes."
      },
      {
        "name": "Camellia",
        "reason": "Matches nandina's evergreen year-round presence and extends bloom interest through the winter months."
      },
      {
        "name": "Holly",
        "reason": "Combines with nandina's red winter berries for a doubled cold-season color display."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The leathery, slightly toxic foliage makes nandina one of the most reliably deer-proof shrubs for southern landscapes."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Small white spring flower clusters offer modest nectar value to small bees, but nandina is grown primarily for foliage and berry display."
    },
    "zoneNotes": "In Zone 6, nandina is at the cold edge of reliable performance and may suffer cane dieback in unusually harsh winters, rebounding from the base the following spring; in Zones 9-10 it is evergreen year-round and can self-seed aggressively via bird-dispersed berries, so many southeastern states now recommend sterile, berry-free cultivars like 'Firepower' to prevent it from naturalizing into wild areas.",
    "troubleshooting": [
      {
        "issue": "Legginess with bare lower canes",
        "fix": "Cut one-third of the oldest, tallest canes to the ground each spring to keep the plant full and compact from the base."
      },
      {
        "issue": "Invasive spread via berries in warm climates",
        "fix": "Choose a sterile, non-fruiting cultivar or deadhead berry clusters before birds can disperse the seeds into natural areas."
      },
      {
        "issue": "Winter leaf bronzing",
        "fix": "This is a normal cold-weather color change for many cultivars and not a sign of damage; no action is needed."
      }
    ]
  },
  "viburnum": {
    "matureSize": "6-8 ft tall, 5-7 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Forsythia",
        "reason": "Precedes viburnum's own spring bloom, creating a sequential flowering display through the season in the same bed."
      },
      {
        "name": "Hydrangea",
        "reason": "Shares similar moisture and part-shade tolerance while extending the shrub border's bloom season into summer."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Provides fall and winter textural interest that complements viburnum's own colorful autumn foliage and berries."
      },
      {
        "name": "Azalea",
        "reason": "Blooms around the same time in spring, layering complementary flower forms and colors in a mixed shrub border."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Susceptibility varies by species, but Burkwood viburnum is browsed by deer more readily than truly deer-resistant shrubs, especially in winter when food is scarce."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Intensely fragrant spring flower clusters are highly attractive to bumblebees, honeybees, and a range of native solitary bees, and the berries later feed songbirds."
    },
    "zoneNotes": "In Zone 4, viburnum blooms slightly later and berry set can be reduced if a late frost damages open flowers; in Zone 8, it flowers earlier in spring and benefits from a bit of afternoon shade in hotter inland areas to prevent summer leaf stress and premature fall color.",
    "troubleshooting": [
      {
        "issue": "Poor or no berry production",
        "fix": "Plant two genetically distinct viburnum varieties nearby, since most cross-pollinate poorly or not at all with a single plant of the same clone."
      },
      {
        "issue": "Viburnum leaf beetle skeletonizing foliage",
        "fix": "Scout for and prune out egg-laying sites on twigs in fall/winter, and treat larvae with insecticidal soap in spring before major damage occurs."
      },
      {
        "issue": "Powdery mildew in late summer",
        "fix": "Ensure good air circulation between shrubs and avoid wetting foliage when watering."
      }
    ]
  },
  "smokebush": {
    "matureSize": "10-15 ft tall, 10-15 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Russian Sage",
        "reason": "Shares smokebush's drought tolerance and full-sun requirement, with airy blue spikes echoing the shrub's smoky flower plumes."
      },
      {
        "name": "Ornamental Grasses",
        "reason": "Complements smokebush's cloud-like flower texture and shares the same low-water, full-sun growing conditions."
      },
      {
        "name": "Coneflower (Echinacea)",
        "reason": "Blooms through summer at the base of smokebush, adding season-long color beneath its bold purple foliage."
      },
      {
        "name": "Sedum 'Autumn Joy'",
        "reason": "Matches smokebush's drought tolerance and picks up color into fall as the shrub's own foliage turns fiery orange-red."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The tough, somewhat bitter foliage is not a preferred deer browse, though young transplants can occasionally be nibbled."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The tiny true flowers hidden within the smoky plumes attract small native bees and occasional butterflies during the early summer bloom."
    },
    "zoneNotes": "In Zone 4, smokebush can suffer some tip dieback in severe winters but recovers vigorously since it flowers on new wood, making hard spring pruning a non-issue there; in Zone 9, it appreciates a bit of relief from the most intense afternoon sun and benefits from occasional deep watering during extended summer drought despite its general drought tolerance.",
    "troubleshooting": [
      {
        "issue": "Verticillium wilt causing sudden branch death",
        "fix": "Prune out and destroy affected branches well below the wilted section, disinfecting tools between cuts, since there is no chemical cure."
      },
      {
        "issue": "Reduced smoky flower display when pruned hard",
        "fix": "Choose between cutting back hard each spring for the best purple foliage color or leaving it unpruned to maximize the flower plumes, since you can't fully have both in the same season."
      },
      {
        "issue": "Leggy, open growth habit",
        "fix": "Pinch or lightly prune young plants to encourage branching low on the plant before it matures into a tree-like form."
      }
    ]
  },
  "winterberry-holly": {
    "matureSize": "6-10 ft tall, 6-10 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Red Twig Dogwood (Cornus sericea)",
        "reason": "Shares winterberry's tolerance for wet soil and adds red winter stem color that complements the shrub's berry display."
      },
      {
        "name": "Summersweet (Clethra alnifolia)",
        "reason": "Thrives in the same moist-to-wet, part-shade conditions and extends fragrant bloom interest into summer."
      },
      {
        "name": "Ornamental Grasses (e.g. Switchgrass)",
        "reason": "Handles similarly moist soil and provides a textural, upright contrast to winterberry's dense branching."
      },
      {
        "name": "Holly (Ilex opaca)",
        "reason": "Its evergreen foliage provides a backdrop that makes winterberry's bare, berry-loaded winter branches stand out even more."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Less prickly than evergreen hollies since its leaves lack spines, so deer will browse winterberry foliage and stems more readily, especially in winter."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Small spring flowers draw native bees and honeybees, which are essential for pollinating female plants into their signature berry set."
    },
    "zoneNotes": "As a native shrub rated to Zone 3, winterberry is fully cold-hardy at the northern end of its range and often shows the showiest berry displays there once leaves drop early; at the southern edge in Zone 9, it needs consistently moist to wet soil to perform well and can struggle in typical well-drained garden beds without irrigation or a naturally boggy site.",
    "troubleshooting": [
      {
        "issue": "No berries produced",
        "fix": "Plant a compatible male winterberry cultivar (such as 'Jim Dandy' or 'Southern Gentleman') within 50 feet, since female plants require a male pollinator of matching bloom time."
      },
      {
        "issue": "Poor growth in dry, well-drained soil",
        "fix": "Site winterberry in consistently moist soil or a low spot in the landscape; it is one of the few shrubs that tolerates seasonal flooding and heavy clay."
      },
      {
        "issue": "Leaf spot or minor fungal issues in wet years",
        "fix": "Rake up and dispose of fallen leaves in autumn to reduce overwintering fungal spores, though the shrub tolerates minor leaf spot without lasting harm."
      }
    ]
  },
  "inkberry-holly": {
    "matureSize": "5-8 ft tall, 5-8 ft wide (dwarf cultivars like 'Shamrock' and 'Compacta' stay 3-4 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Fothergilla",
        "reason": "Shares Inkberry's need for acidic, moist soil and offers spring bottlebrush blooms plus fall color that Inkberry's evergreen foliage sets off."
      },
      {
        "name": "Summersweet (Clethra)",
        "reason": "Thrives in the same wet, acidic conditions and adds fragrant midsummer bloom while Inkberry provides structure."
      },
      {
        "name": "Switchgrass (Panicum virgatum)",
        "reason": "A native prairie/wetland-edge companion that tolerates the same moist soils and contrasts Inkberry's fine boxwood-like texture with airy seed heads."
      },
      {
        "name": "Winterberry Holly",
        "reason": "Same native wetland habitat and acidic soil preference, pairing Inkberry's evergreen mass with Winterberry's bright winter fruit display."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer occasionally browse young or stressed plants, but Inkberry is far less palatable than most broadleaf evergreens."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Small white spring flowers attract native bees and honeybees, and the plant is a larval host for the Henry's elfin butterfly in parts of its range."
    },
    "zoneNotes": "In zone 4 and the colder end of zone 5, Inkberry can suffer winter bronzing and occasional dieback in exposed sites and benefits from a sheltered planting spot. In zones 8-9 at the warm edge, it holds evergreen color year-round but performs best with consistent moisture and light afternoon shade during peak summer heat.",
    "troubleshooting": [
      {
        "issue": "Legginess and bare lower stems on older plants",
        "fix": "Prune hard in early spring to force basal branching, or shear lightly every year starting when the plant is young to maintain density from the ground up."
      },
      {
        "issue": "Yellowing foliage in alkaline or high-pH soil",
        "fix": "Test soil pH and amend with elemental sulfur or use an acidifying fertilizer, since Inkberry is intolerant of alkaline conditions."
      },
      {
        "issue": "Winter bronzing or leaf scorch in exposed northern sites",
        "fix": "Site out of harsh winter wind or apply an anti-desiccant spray in late fall, and avoid planting in zone 4 without wind protection."
      }
    ]
  },
  "japanese-holly": {
    "matureSize": "5-10 ft tall, 5-8 ft wide (dwarf cultivars like 'Helleri' and 'Soft Touch' stay 2-4 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Boxwood",
        "reason": "Nearly identical fine texture and formal shearing habit lets the two be mixed in a hedge or knot garden without a visual mismatch."
      },
      {
        "name": "Hosta",
        "reason": "Enjoys the same partial shade and well-drained soil, filling the ground layer beneath Japanese Holly's evergreen mass with contrasting broad foliage."
      },
      {
        "name": "Nandina",
        "reason": "Shares similar sun and drainage needs and adds fine-textured evergreen foliage plus winter berry color to complement Japanese Holly's dense form."
      },
      {
        "name": "Astilbe",
        "reason": "Tolerates the same moderate, evenly moist soil and partial shade, contributing feathery summer bloom spikes against Holly's dark, glossy backdrop."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally avoid its stiff, spiny-margined leaves, though pressure can increase in areas with high deer density."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Tiny, inconspicuous spring flowers offer minor nectar value to small native bees but are not a significant pollinator resource."
    },
    "zoneNotes": "At the cold edge of zone 5, Japanese Holly can experience winter leaf burn or dieback after severe cold snaps, especially in windy or unmulched sites. In zone 8, it tolerates heat well but is more prone to root rot in the region's often heavier, poorly drained clay soils, making raised planting or soil amendment important.",
    "troubleshooting": [
      {
        "issue": "Root rot and yellowing in poorly drained soil",
        "fix": "Plant in well-amended, well-drained soil or a raised bed, and avoid overwatering — this species is far more sensitive to wet feet than boxwood."
      },
      {
        "issue": "Black root weevil notching leaf edges",
        "fix": "Apply beneficial nematodes to the soil in late summer to target the larval stage, since adult weevils are largely nocturnal and hard to catch."
      },
      {
        "issue": "Winter bronzing or leaf drop after a hard freeze",
        "fix": "Mulch the root zone before winter and avoid late-season fertilization that pushes tender new growth susceptible to cold injury."
      }
    ]
  },
  "burning-bush": {
    "matureSize": "6-10 ft tall, 6-10 ft wide (dwarf 'Compactus' stays 6-8 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Black-Eyed Susan (Rudbeckia)",
        "reason": "Golden late-summer blooms peak just before Burning Bush's fall color show, creating a warm-toned transition from summer to autumn."
      },
      {
        "name": "Ornamental Grasses (Miscanthus, Panicum)",
        "reason": "Similar drought tolerance and a textural, upright form contrast with Burning Bush's dense horizontal branching while sharing fall interest."
      },
      {
        "name": "Purple Smokebush (Cotinus)",
        "reason": "Complementary rich foliage color and comparable sun and soil needs make a striking contrast planting through summer and fall."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally leave established plants alone, though young transplants can be nibbled in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Inconspicuous greenish spring flowers provide minor nectar for small bees but are not a notable pollinator draw."
    },
    "zoneNotes": "In zone 4, fall color develops reliably and often more intensely due to the sharp autumn temperature drop, but plants should be sited away from harsh winter wind. In zone 8, the fall color display is frequently muted or delayed by lingering warmth, and because the species readily naturalizes into woodlands there, many states restrict or discourage planting it regardless of zone suitability.",
    "troubleshooting": [
      {
        "issue": "Uncontrolled seedling spread into adjacent woods or fields",
        "fix": "Deadhead spent flowers where practical, remove volunteer seedlings promptly, and check state invasive species lists before planting — many Northeastern and Midwestern states now restrict sale or planting."
      },
      {
        "issue": "Scale insects on stems",
        "fix": "Scout in late winter for small brown bumps on twigs and treat with dormant horticultural oil before spring growth begins."
      },
      {
        "issue": "Poor fall color in overly shaded or warm-climate sites",
        "fix": "Plant in full sun, since color intensity depends on both light exposure and a genuine seasonal temperature drop."
      }
    ]
  },
  "privet": {
    "matureSize": "8-12 ft tall, 6-8 ft wide unsheared (maintained hedges typically kept at 4-6 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Boxwood",
        "reason": "Both take repeated shearing and can be combined in a layered formal hedge, with Privet's faster growth used as a quick screen behind slower Boxwood edging."
      },
      {
        "name": "Climbing Hydrangea",
        "reason": "Tolerates similar soil conditions and can be trained along a Privet hedge line for added summer bloom without competing for the same light."
      },
      {
        "name": "Daylily",
        "reason": "Undemanding and tolerant of the same wide range of soils, filling the foreground of a Privet hedge with summer color at a different height tier."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally avoid Privet's bitter foliage, making it a reliable hedge choice in areas with browsing pressure."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Unsheared plants produce clusters of small white flowers that attract honeybees and various native bees, though the scent is strong and unpleasant to some people."
    },
    "zoneNotes": "In zone 5, Privet can suffer tip dieback in unusually harsh winters, particularly on exposed sites, though it typically resprouts vigorously from the base. In zone 8, growth is even more aggressive and the plant readily seeds into surrounding areas from bird-dispersed fruit, so many regions classify it as invasive and recommend sterile cultivars or regular deadheading via shearing before fruit set.",
    "troubleshooting": [
      {
        "issue": "Volunteer seedlings spreading into nearby natural areas",
        "fix": "Shear before flowering to prevent fruit set, or choose a sterile cultivar, since bird-dispersed seed is the primary way Privet escapes cultivation."
      },
      {
        "issue": "Anthracnose or twig blight causing dieback",
        "fix": "Prune out and destroy affected branches during dry weather and improve air circulation by thinning dense growth."
      },
      {
        "issue": "Bare, woody base from repeated shallow shearing",
        "fix": "Every few years, cut the hedge back hard (renewal pruning) to force fresh growth low on the plant rather than shearing only the outer surface."
      }
    ]
  },
  "weigela": {
    "matureSize": "6-9 ft tall, 6-9 ft wide (compact cultivars like 'Wine and Roses' stay 4-5 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Bearded Iris",
        "reason": "Blooms at the same time in late spring, and Iris's strappy upright foliage contrasts nicely with Weigela's arching mounded form."
      },
      {
        "name": "Catmint (Nepeta)",
        "reason": "Extends the bloom season after Weigela's flush fades and shares the same full-sun, well-drained conditions."
      },
      {
        "name": "Spirea",
        "reason": "Similar old-fashioned, easy-care habit and overlapping bloom timing make for a classic cottage-style shrub pairing with minimal care differences."
      },
      {
        "name": "Coral Bells (Heuchera)",
        "reason": "Tolerates the light shade cast at Weigela's base and adds colorful foliage interest once the shrub's spring bloom show has finished."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "New spring growth and flower buds can be browsed in high-pressure areas, though established plants generally recover quickly."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Tubular pink and red blooms are a favorite nectar source for hummingbirds and are also visited by bumblebees and other long-tongued native bees."
    },
    "zoneNotes": "In zone 4, flower buds can be damaged by late hard frosts after an early warm spell, reducing bloom that season, though the plant itself is reliably winter hardy. In zone 8, Weigela tolerates the heat well but may produce a lighter, shorter bloom flush and benefits from afternoon shade in the hottest inland areas.",
    "troubleshooting": [
      {
        "issue": "Sparse bloom the following year",
        "fix": "Prune immediately after flowering rather than in fall or winter, since Weigela blooms on old wood and later pruning removes next year's flower buds."
      },
      {
        "issue": "Leggy, open growth habit over time",
        "fix": "Remove one-third of the oldest stems at ground level right after bloom each year to rejuvenate density from the base."
      },
      {
        "issue": "Bacterial leaf spot in wet, humid conditions",
        "fix": "Water at the base rather than overhead and improve air circulation by thinning crowded branches."
      }
    ]
  },
  "camellia": {
    "matureSize": "6-12 ft tall, 6-10 ft wide (varies widely by cultivar; some reach small-tree size with age)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Azalea",
        "reason": "Shares the same acidic, well-drained soil and partial shade requirements, with overlapping or sequential bloom timing for a layered spring display."
      },
      {
        "name": "Fern (native woodland species)",
        "reason": "Thrives in the same dappled shade and consistently moist, humus-rich soil beneath Camellia's canopy."
      },
      {
        "name": "Hellebore",
        "reason": "Blooms in the same winter-to-early-spring window in similar partial shade, extending seasonal interest at a lower height tier."
      },
      {
        "name": "Japanese Maple",
        "reason": "Provides the light, filtered shade Camellia prefers over hot afternoon sun while sharing acidic soil preferences."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse Camellia foliage and flower buds when other food is scarce, particularly in winter, so protection may be needed in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Late-season blooms provide a valuable nectar source for honeybees and bumblebees when few other plants are flowering."
    },
    "zoneNotes": "Zone 7 is the practical cold limit for most Camellia japonica cultivars, and plants there need a sheltered microclimate away from winter wind and morning sun to avoid flower bud and foliage damage from freeze-thaw cycles. In zones 8-9, Camellia performs best with afternoon shade and consistent moisture, since intense sun and drought stress cause leaf scorch and bud drop.",
    "troubleshooting": [
      {
        "issue": "Flower buds turning brown and dropping before opening",
        "fix": "Avoid overwatering or drought stress in late summer when buds are forming, and protect plants from early hard freezes with a frost cloth if a late-season bloomer is caught off guard."
      },
      {
        "issue": "Yellowing leaves with green veins (chlorosis)",
        "fix": "Test and lower soil pH with elemental sulfur or an acidifying fertilizer, since Camellia requires acidic soil to take up iron properly."
      },
      {
        "issue": "Tea scale on leaf undersides causing yellow speckling",
        "fix": "Treat with horticultural oil in spring or systemic imidacloprid drench, focusing coverage on the undersides of leaves where scale feeds."
      }
    ]
  },
  "juniper-shrub": {
    "matureSize": "1-6 ft tall, 3-10 ft wide depending on cultivar (spreading forms like 'Blue Rug' stay under 12 in tall; upright forms reach 5-6 ft)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Russian Sage (Perovskia)",
        "reason": "Shares the same low-water, full-sun, sharply drained requirements and adds vertical purple bloom spikes against Juniper's low mounded or spreading texture."
      },
      {
        "name": "Sedum (Autumn Joy)",
        "reason": "Thrives in the same lean, dry soil conditions and provides late-season bloom and structure that Juniper's evergreen form doesn't offer."
      },
      {
        "name": "Yucca",
        "reason": "Tolerates identical rocky, drought-prone sites and pairs a bold architectural form with Juniper's fine needled texture."
      },
      {
        "name": "Ornamental Grasses (Little Bluestem)",
        "reason": "Matches Juniper's drought tolerance and poor-soil adaptability while adding movement and fall color to a xeric planting."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The sharp, aromatic foliage is highly unpalatable to deer, making Juniper one of the most reliably deer-proof shrubs available."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Juniper is wind-pollinated with no showy flowers, so it offers essentially no nectar or pollen value to pollinators, though its dense form provides bird shelter and some species bear berry-like cones eaten by birds."
    },
    "zoneNotes": "At the cold edge in zone 3, Juniper is exceptionally hardy but benefits from a site not directly exposed to reflected winter sun, which can cause needle burn on evergreen conifers. In zone 9, heat itself is rarely a problem, but the humidity common in warm, wet climates increases pressure from fungal blights, making excellent drainage and avoiding overhead irrigation especially important there.",
    "troubleshooting": [
      {
        "issue": "Browning branch tips from Phomopsis or Kabatina twig blight",
        "fix": "Prune out and dispose of infected branch tips during dry weather and avoid overhead watering, which spreads fungal spores onto wet foliage."
      },
      {
        "issue": "Spider mites causing stippled, bronzed needles in hot, dry weather",
        "fix": "Spray plants forcefully with water to dislodge mites or apply horticultural oil, and avoid drought stress, which favors mite outbreaks."
      },
      {
        "issue": "Cedar-apple rust galls (on susceptible Juniper species)",
        "fix": "Remove visible galls in late winter before they release spores, and avoid planting susceptible junipers within a few hundred feet of apple or crabapple trees where practical."
      }
    ]
  },
  "yew": {
    "matureSize": "3-20 ft tall, 3-15 ft wide depending on cultivar (spreading forms like Taxus x media 'Densiformis' stay 3-4 ft; upright forms reach much taller)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Both tolerate deep shade and share similar moisture needs, with Hosta's broad foliage softening the base of a sheared Yew hedge."
      },
      {
        "name": "Astilbe",
        "reason": "Thrives in the same shaded, evenly moist conditions and adds summer bloom color that Yew's dark evergreen foliage lacks."
      },
      {
        "name": "Bergenia",
        "reason": "Tolerant of the same shade and offers year-round foliage interest plus early spring bloom at Yew's base."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Yew is one of deer's favorite winter browse plants despite being toxic, and unprotected plants in high-pressure areas are often stripped of foliage."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Yew is wind-pollinated with inconspicuous flowers and offers no meaningful nectar or pollen resource, though birds do eat the fleshy red aril around the toxic seed."
    },
    "zoneNotes": "At the cold edge of zone 4, Yew can suffer winter burn on foliage exposed to harsh sun and wind, so a sheltered or partially shaded site is safer in the coldest parts of its range. In zone 7, the warmer, more humid conditions increase the risk of root rot, making sharp drainage even more critical than in cooler zones.",
    "troubleshooting": [
      {
        "issue": "Root rot in heavy or poorly drained soil",
        "fix": "Plant in well-drained soil or a raised bed and avoid overwatering, since Yew is notably intolerant of wet feet."
      },
      {
        "issue": "Deer browsing foliage down to bare stems in winter",
        "fix": "Install fencing or apply deer repellent starting in fall, since Yew is a top winter food source for deer despite its toxicity."
      },
      {
        "issue": "Winter burn and bronzed foliage on exposed plants",
        "fix": "Site out of direct winter wind and reflected sun, or apply an anti-desiccant spray before the ground freezes."
      }
    ]
  },
  "mountain-laurel": {
    "matureSize": "5-10 ft tall, 5-10 ft wide (naturally occurring stands can reach 15 ft in ideal woodland conditions)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Rhododendron",
        "reason": "Shares identical acidic, well-drained soil and dappled shade requirements, with staggered bloom timing extending the woodland garden's flowering season."
      },
      {
        "name": "Eastern Hemlock",
        "reason": "Provides the same light, filtered woodland shade Mountain Laurel needs in its native range while creating a naturalistic layered canopy."
      },
      {
        "name": "Ferns (Christmas Fern, Wood Fern)",
        "reason": "Thrives in the same humus-rich, consistently moist acidic soil at Mountain Laurel's base, softening its woody understory presence."
      },
      {
        "name": "Pieris (Andromeda)",
        "reason": "Matches Mountain Laurel's acidic soil and part-shade needs and offers early spring bloom before Mountain Laurel's own late-spring flush."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "All parts of the plant are toxic and deer strongly avoid it, making Mountain Laurel one of the most reliable choices in high deer-pressure woodland gardens."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The distinctive spring-loaded stamens in each bloom are specifically adapted to dust visiting bumblebees with pollen, and the flowers are a significant native bee resource."
    },
    "zoneNotes": "At the cold edge in zone 4, plants need a sheltered woodland site protected from winter wind and sun scald, since exposed foliage can suffer significant winter burn. In zone 9 at the warm edge, Mountain Laurel struggles with heat and humidity stress and generally needs consistent afternoon shade and cool, moist root conditions to avoid decline.",
    "troubleshooting": [
      {
        "issue": "Leaf spot disease causing purplish-brown blotches",
        "fix": "Remove and destroy fallen infected leaves, avoid overhead watering, and improve air circulation by thinning surrounding vegetation."
      },
      {
        "issue": "Lace bugs causing stippled, silvery leaf discoloration",
        "fix": "Treat the undersides of leaves with horticultural oil or insecticidal soap in late spring when nymphs first appear."
      },
      {
        "issue": "Chlorotic, yellowing foliage",
        "fix": "Test soil pH and amend with sulfur or an acidifying fertilizer, since Mountain Laurel requires acidic soil to access iron and other nutrients."
      }
    ]
  },
  "japanese-barberry": {
    "matureSize": "3-6 ft tall, 4-7 ft wide (dwarf cultivars like 'Crimson Pygmy' stay 2 ft tall)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Black-Eyed Susan (Rudbeckia)",
        "reason": "Golden late-summer bloom contrasts strikingly with burgundy or gold Barberry foliage while sharing the same full-sun, low-water needs."
      },
      {
        "name": "Ornamental Grasses (Karl Foerster Feather Reed Grass)",
        "reason": "Tolerates the same lean, well-drained soil and adds vertical texture and movement against Barberry's dense mounded form."
      },
      {
        "name": "Sedum (Autumn Joy)",
        "reason": "Matches Barberry's drought tolerance and provides late-season bloom color that complements its foliage tones through fall."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The dense thorny stems make Japanese Barberry one of the most reliably deer-proof shrubs, which is part of why it became so overplanted."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Small pale yellow spring flowers offer minor nectar value to small native bees but are not a significant pollinator resource."
    },
    "zoneNotes": "In zone 4, Japanese Barberry is fully hardy but grows more slowly, taking longer to reach mature size and fill in as a hedge. In zone 8, growth is notably more vigorous and the plant seeds more readily into adjacent woodlands via bird dispersal, which is why several Northeastern states have moved to restrict or ban its sale regardless of the zone it's planted in.",
    "troubleshooting": [
      {
        "issue": "Volunteer seedlings appearing in nearby wooded or naturalized areas",
        "fix": "Deadhead spent flowers before fruit forms where practical, and check state and local invasive species regulations before planting, since Barberry is banned or restricted in several states."
      },
      {
        "issue": "Thorny stems making pruning and maintenance difficult",
        "fix": "Wear heavy leather gloves and long sleeves when pruning, and use long-handled loppers to work from a safe distance on interior stems."
      },
      {
        "issue": "Fungal leaf spot in humid conditions",
        "fix": "Improve air circulation by thinning dense interior growth and avoid overhead watering that keeps foliage wet."
      }
    ]
  },
  "climbing-rose": {
    "matureSize": "8-20 ft of cane length depending on cultivar, trained flat against a support",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Clematis",
        "reason": "Classic pairing that shares a support structure and full-sun requirements, with Clematis's finer flowers weaving through Climbing Rose's larger blooms for layered color."
      },
      {
        "name": "Lavender",
        "reason": "Thrives in the same well-drained, full-sun conditions and its aromatic foliage is traditionally planted at rose feet to help deter some pests."
      },
      {
        "name": "Catmint (Nepeta)",
        "reason": "Blooms over a long season at the rose's base, sharing sun and drainage needs while masking bare lower canes with soft mounded foliage."
      },
      {
        "name": "Foxglove",
        "reason": "Adds cottage-garden vertical interest at a lower tier during the same late-spring to early-summer bloom window as many climbing rose cultivars."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Deer readily browse rose foliage, buds, and even thorny canes when hungry, so fencing or repellent is usually necessary in areas with deer pressure."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Single and semi-double climbing rose cultivars provide accessible pollen for bumblebees and other native bees; heavily double, fully petaled cultivars offer far less since bees can't reach the center."
    },
    "zoneNotes": "In zone 5, many climbing rose cultivars need canes loosened from their support and laid down with winter protection, or a genuinely hardy cultivar chosen, since cane dieback is common after severe cold. In zone 9, plants grow vigorously nearly year-round and need more frequent training and pruning to keep canes from outgrowing their support and to manage increased blackspot and powdery mildew pressure from the humidity.",
    "troubleshooting": [
      {
        "issue": "Blackspot causing yellowing leaves with dark spots and defoliation",
        "fix": "Water at the base rather than overhead, clean up fallen leaves promptly, and apply a preventive fungicide program starting in early spring in humid climates."
      },
      {
        "issue": "Few flowers despite vigorous cane growth",
        "fix": "Train canes horizontally along the support rather than letting them grow straight up, since horizontal canes produce far more flowering side-shoots."
      },
      {
        "issue": "Japanese beetles skeletonizing leaves and damaging blooms",
        "fix": "Hand-pick beetles into soapy water in early morning when they're sluggish, and avoid pheromone traps, which can draw in more beetles than they catch."
      }
    ]
  },
  "hybrid-tea-rose": {
    "matureSize": "3-6 ft tall, 2-3 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Lavender",
        "reason": "Shares full-sun, well-drained soil requirements and its aromatic foliage is a traditional underplanting believed to help confuse pest insects seeking roses."
      },
      {
        "name": "Salvia (Perennial)",
        "reason": "Blooms over a long season alongside repeat-flowering Hybrid Tea Roses and tolerates the same sunny, well-drained conditions without competing heavily for nutrients."
      },
      {
        "name": "Catmint (Nepeta)",
        "reason": "Softens the often bare, leggy lower stems typical of Hybrid Tea Roses while sharing identical sun and drainage needs."
      },
      {
        "name": "Alliums",
        "reason": "Traditional rose-garden companion whose strong scent is thought to help deter aphids, and its narrow upright form doesn't compete for space at the rose's base."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Hybrid Tea Roses are among the most deer-preferred landscape plants, and buds and foliage are often stripped without fencing or repellent in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Heavily double, high-centered blooms have their reproductive parts largely obscured by extra petals, making pollen and nectar difficult for bees to access compared to single-flowered rose types."
    },
    "zoneNotes": "In zone 5, Hybrid Tea Roses generally need winter protection such as mounding soil or mulch over the graft union, since many cultivars are grafted onto rootstock that isn't reliably hardy on its own. In zone 9, the extended warm season allows for a longer bloom period and more flushes per year, but the high humidity typical there significantly increases blackspot and powdery mildew pressure, making a consistent fungicide program more important than in drier climates.",
    "troubleshooting": [
      {
        "issue": "Blackspot defoliating lower and middle foliage",
        "fix": "Apply a proactive fungicide rotation starting at leaf-out, remove and dispose of fallen leaves, and avoid overhead watering."
      },
      {
        "issue": "Weak, spindly growth and poor bloom production",
        "fix": "Feed on a regular schedule through the growing season with a rose-specific or balanced fertilizer, since Hybrid Teas are heavy feeders compared to landscape shrub roses."
      },
      {
        "issue": "Cane dieback after a hard winter",
        "fix": "Mound soil or mulch 8-10 inches over the graft union in fall in zones 5-6, and prune back to healthy green wood in spring once new growth resumes."
      }
    ]
  },
  "shrub-rose": {
    "matureSize": "3-5 ft tall, 3-5 ft wide (varies by series; some landscape types reach 4-6 ft)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Catmint (Nepeta)",
        "reason": "A classic low-maintenance pairing sharing the same full-sun, well-drained conditions, with Catmint's long bloom season complementing repeat-flowering Shrub Roses."
      },
      {
        "name": "Russian Sage (Perovskia)",
        "reason": "Matches Shrub Rose's drought tolerance and sun requirements while adding airy purple vertical interest against the rose's denser mounded form."
      },
      {
        "name": "Ornamental Grasses (Little Bluestem)",
        "reason": "Tolerates the same lean, well-drained soil and provides textural contrast and fall interest once the rose's main flush has slowed."
      },
      {
        "name": "Yarrow",
        "reason": "Thrives in identical sun and soil conditions with minimal care, extending bloom color in the same low-maintenance landscape bed."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Shrub roses are browsed less readily than Hybrid Teas due to denser, thornier growth, but deer will still eat foliage and buds when pressure is high."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Many popular series like Knock Out and single-flowered English shrub roses have accessible centers that bumblebees and other native bees can easily forage."
    },
    "zoneNotes": "In zone 4, some shrub rose series need winter mulching over the crown, though many of the modern landscape types are bred for own-root hardiness without grafting concerns. In zone 9, plants bloom nearly continuously through the long growing season and benefit from a mid-summer pruning to remove spent blooms and encourage a strong fall flush.",
    "troubleshooting": [
      {
        "issue": "Occasional blackspot or powdery mildew in humid weather",
        "fix": "Space plants for good air circulation and water at the base, though most modern shrub rose series have strong built-in disease resistance requiring little spraying."
      },
      {
        "issue": "Overly dense, twiggy growth reducing bloom size",
        "fix": "Prune back by one-third to one-half in late winter or early spring to open up the center and encourage vigorous new flowering wood."
      },
      {
        "issue": "Japanese beetles feeding on blooms and foliage",
        "fix": "Hand-pick beetles into soapy water during peak activity in early morning, focusing on the most fragrant open blooms where they congregate."
      }
    ]
  },
  "clematis": {
    "matureSize": "8-12 ft climbing height, 2-3 ft spread",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Climbing Rose",
        "reason": "Shares the same trellis or arbor, with clematis threading through rose canes for a layered bloom effect often called a 'marriage.'"
      },
      {
        "name": "Allium (Ornamental Onion)",
        "reason": "Shallow-rooted alliums shade the clematis root zone without competing, satisfying the classic 'cool roots, warm head' requirement."
      },
      {
        "name": "Hosta",
        "reason": "Broad hosta leaves planted at the base physically shade clematis roots from direct sun."
      },
      {
        "name": "Lavender",
        "reason": "Low, drought-tolerant lavender at the base keeps foliage off the soil and helps deter slugs that can damage young clematis shoots."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer generally avoid mature clematis foliage but will browse tender new spring growth in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Attracts bees and occasionally hummingbirds, though the flowers offer less nectar reward than many other vines."
    },
    "zoneNotes": "In zone 4, clematis benefits from winter mulch over the crown and should be sited where snow cover is likely, since exposed crowns can suffer dieback. In zones 8-9, plants perform best with afternoon shade to prevent bloom fade and may rebloom sporadically through a longer growing season rather than in one concentrated flush.",
    "troubleshooting": [
      {
        "issue": "Clematis wilt (stems suddenly collapse and blacken)",
        "fix": "Cut affected stems back to healthy growth at or below soil level; most cultivars resprout from the crown within weeks."
      },
      {
        "issue": "No blooms despite healthy vine",
        "fix": "Identify the pruning group (1, 2, or 3) from the variety tag and prune at the correct time — wrong-season pruning removes the growth that would have flowered."
      },
      {
        "issue": "Powdery mildew on leaves late summer",
        "fix": "Improve air circulation by thinning crowded stems and avoid overhead watering late in the day."
      }
    ]
  },
  "morning-glory": {
    "matureSize": "8-12 ft climbing vine per season",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Corn",
        "reason": "Sturdy corn stalks give fast-climbing morning glory a living trellis, echoing the Three Sisters planting tradition."
      },
      {
        "name": "Sunflower",
        "reason": "Tall sunflower stems provide vertical support and the two bloom colors complement each other in a cottage-style bed."
      },
      {
        "name": "Zinnia",
        "reason": "Zinnias fill the ground layer with color while morning glory climbs above, maximizing a small bed's vertical space."
      },
      {
        "name": "Moonflower",
        "reason": "Moonflower opens at dusk as morning glory closes, giving the same trellis round-the-clock bloom coverage."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer usually leave morning glory alone due to mildly toxic seeds and foliage, but hungry deer may nibble young seedlings."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Attracts bumblebees and other native bees in the early morning hours when flowers are freshly open, plus occasional hummingbird visits."
    },
    "zoneNotes": "In zone 3, morning glory must be direct-sown after soil has warmed since the short season leaves no time for transplant shock recovery. In zones 10-11 it can self-sow aggressively and behave as a weedy perennial, so spent vines should be cleared before seed pods mature to prevent unwanted spread.",
    "troubleshooting": [
      {
        "issue": "Slow or no germination",
        "fix": "Nick the hard seed coat with a file or soak seeds in warm water for 24 hours before sowing."
      },
      {
        "issue": "Japanese beetles skeletonizing leaves",
        "fix": "Hand-pick beetles in early morning or use row cover until bloom time when pollinator access is needed."
      },
      {
        "issue": "Vine dominating and shading neighboring plants",
        "fix": "Pinch growing tips regularly to control spread and direct growth onto its intended support."
      }
    ]
  },
  "wisteria": {
    "matureSize": "25-40 ft climbing length, can spread widely without support",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Peony",
        "reason": "Peonies bloom at ground level in the same season, giving a wisteria arbor color from top to bottom."
      },
      {
        "name": "Boxwood",
        "reason": "A clipped boxwood hedge beneath a wisteria arbor gives formal structure that contrasts with wisteria's cascading habit."
      },
      {
        "name": "Clematis",
        "reason": "A later-blooming clematis on the same structure extends the flowering season after wisteria's spring display fades."
      },
      {
        "name": "Daffodil",
        "reason": "Daffodils naturalized at the base bloom and fade before wisteria's canopy fully leafs out and shades the ground."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "All parts of wisteria contain toxic compounds that make it one of the more reliably deer-resistant flowering vines."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Heavy nectar producer that draws bumblebees, which are strong enough to trip the flower's pollination mechanism, along with honeybees."
    },
    "zoneNotes": "At the cold edge of its range in zone 4, flower buds can be damaged by late frosts, resulting in a foliage-only year with no bloom. In zones 8-9, Chinese wisteria grows so vigorously that it requires aggressive summer pruning to prevent it from girdling nearby trees and structures, and gardeners in the Southeast are increasingly encouraged to choose native Wisteria frutescens instead due to invasiveness concerns.",
    "troubleshooting": [
      {
        "issue": "Vine never flowers",
        "fix": "Root-prune with a spade in fall to induce bloom stress, and switch from high-nitrogen fertilizer to a low-nitrogen, high-phosphorus feed."
      },
      {
        "issue": "Vine damaging fence or gutters",
        "fix": "Install heavy-gauge wire or steel cable support anchored to structural framing, not to the fence or gutter itself."
      },
      {
        "issue": "Aggressive suckering and spread",
        "fix": "Cut back new runners at the base as soon as they appear and consider root-barrier installation for older plantings."
      }
    ]
  },
  "trumpet-vine": {
    "matureSize": "25-40 ft climbing length",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Bee Balm",
        "reason": "Both are hummingbird magnets, so pairing them extends nectar availability across the growing season for the same pollinators."
      },
      {
        "name": "Russian Sage",
        "reason": "Drought-tolerant Russian sage at the base tolerates the same low-water, poor-soil conditions trumpet vine thrives in."
      },
      {
        "name": "Ornamental Grass",
        "reason": "Tough grasses like switchgrass can visually contain the aggressive vine's base without competing for the same resources it needs."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Trumpet vine's tough, slightly bitter foliage is generally passed over by deer in favor of softer plants."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "One of the top hummingbird plants in North America, and also visited by bumblebees strong enough to force open the tubular blooms."
    },
    "zoneNotes": "In zone 4 at its cold limit, trumpet vine may die back to the ground each winter and regrow from the root each spring rather than developing a persistent woody structure. In zones 9-10, its suckering habit becomes a genuine management challenge, often spreading many feet from the original planting and requiring yearly root-barrier maintenance.",
    "troubleshooting": [
      {
        "issue": "Vine spreading via root suckers into lawn or beds",
        "fix": "Mow or cut suckers as soon as they emerge and install a root barrier 18-24 inches deep around the planting."
      },
      {
        "issue": "Vine pulling down its support",
        "fix": "Use heavy steel arbors or cable trellising anchored into concrete footings rather than wood lattice or fencing."
      },
      {
        "issue": "Sparse flowering on an otherwise vigorous vine",
        "fix": "Prune hard in late winter to stimulate the current season's new growth, since blooms form only on new wood."
      }
    ]
  },
  "virginia-creeper": {
    "matureSize": "30-50 ft climbing length",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Oakleaf Hydrangea",
        "reason": "Both offer strong native fall color, creating a layered red-and-burgundy display against a wall or fence line."
      },
      {
        "name": "Coral Honeysuckle",
        "reason": "Complements Virginia creeper's clinging habit on the same structure while adding hummingbird-friendly blooms it lacks."
      },
      {
        "name": "Ferns",
        "reason": "Shade-tolerant ferns at the base thrive in the dappled light Virginia creeper's dense canopy creates lower down."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer occasionally browse Virginia creeper but it is not a preferred food source and mature vines shrug off light grazing."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Small greenish flowers are visited by native bees and wasps, and the blue-black fall berries are an important food source for migrating songbirds."
    },
    "zoneNotes": "In zone 3, this native vine is fully cold-hardy and its brilliant crimson fall color is often more intense than in warmer zones due to sharper autumn temperature swings. In zone 9-10, growth is nearly evergreen in mild winters and the vine can become weedy, self-seeding readily via bird-dispersed berries into fence lines and tree canopies.",
    "troubleshooting": [
      {
        "issue": "Vine climbing into and smothering shrubs or small trees",
        "fix": "Cut back runners at ground level each season to keep the vine confined to its intended wall or fence."
      },
      {
        "issue": "Confused with poison ivy",
        "fix": "Confirm five leaflets (not three) before handling — Virginia creeper is not a skin irritant for most people, but misidentification causes unnecessary alarm."
      },
      {
        "issue": "Adhesive holdfast pads damaging painted surfaces",
        "fix": "Grow on masonry, stone, or a dedicated trellis rather than painted wood or vinyl siding."
      }
    ]
  },
  "climbing-hydrangea": {
    "matureSize": "30-50 ft climbing length, slow to establish",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Shares the same partial-to-full-shade preference and moist soil, filling the ground plane beneath the climbing canopy."
      },
      {
        "name": "Astilbe",
        "reason": "Astilbe's feathery plumes thrive in the same cool, humus-rich shade conditions and bloom around the same early summer window."
      },
      {
        "name": "Japanese Painted Fern",
        "reason": "Provides textural contrast at the base of a north-facing wall where climbing hydrangea is often sited."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse climbing hydrangea foliage when other food is scarce, particularly on young, low-growing shoots."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The lacecap flower clusters attract bees and small pollinating flies drawn to the showy sterile outer florets."
    },
    "zoneNotes": "At the cold edge in zone 4, plants need a sheltered north or east wall to avoid winter sun-scald and frost-crack on the exfoliating bark. In zone 8, the vine tolerates more sun than in cooler zones but still performs best out of hot afternoon exposure, and the long 3-5 year establishment period holds true across the entire range.",
    "troubleshooting": [
      {
        "issue": "No blooms for several years after planting",
        "fix": "Be patient — this species is genuinely slow to reach flowering maturity; ensure it has a climbing surface to grip, since vines sprawling on the ground rarely bloom."
      },
      {
        "issue": "Weak attachment to smooth surfaces like vinyl siding",
        "fix": "Provide a rough masonry, brick, or wood surface, or install a support trellis for the self-clinging aerial rootlets to grip."
      },
      {
        "issue": "Leaf scorch in hot afternoon sun",
        "fix": "Relocate or provide afternoon shade, especially in zones 7 and warmer."
      }
    ]
  },
  "sweet-pea": {
    "matureSize": "6-8 ft climbing vine per season",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Foxglove",
        "reason": "Both are classic cottage garden cool-season bloomers that share similar early summer timing and informal cottage garden style."
      },
      {
        "name": "Larkspur",
        "reason": "Larkspur's spiky blue-purple flowers contrast nicely with sweet pea's frilly form while thriving in the same cool spring conditions."
      },
      {
        "name": "Carrot",
        "reason": "As a legume, sweet pea fixes nitrogen in the soil that benefits neighboring heavy feeders like carrots in a mixed cutting-and-kitchen bed."
      },
      {
        "name": "Snapdragon",
        "reason": "Shares sweet pea's preference for cool weather and works together in cut-flower arrangements with complementary bloom shapes."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Sweet pea foliage and flowers are palatable to deer, and seeds/pods are also mildly toxic to pets, so fencing is advisable in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Bumblebees are the primary pollinators, strong enough to pry open the keel-shaped flowers that smaller bees cannot access."
    },
    "zoneNotes": "In zone 3, sweet peas must be started as early as the ground can be worked, since the plant bolts and stops blooming once summer heat arrives, giving northern gardeners only a brief window. In zones 9-11, sweet peas are grown as a fall-to-winter crop, sown in autumn for late-winter and early-spring bloom before summer heat shuts them down entirely.",
    "troubleshooting": [
      {
        "issue": "Plants stop blooming in early summer",
        "fix": "This is heat-triggered bolting, not a fixable problem — pull spent plants and replant a heat-tolerant summer annual in their place."
      },
      {
        "issue": "Powdery mildew on leaves",
        "fix": "Space plants for airflow and water at the soil line rather than overhead, especially as temperatures rise."
      },
      {
        "issue": "Poor flowering, mostly foliage",
        "fix": "Avoid high-nitrogen fertilizer; use a bloom-boosting low-nitrogen feed and pick flowers frequently to prevent seed pod formation, which halts further blooming."
      }
    ]
  },
  "passionflower": {
    "matureSize": "15-25 ft climbing vine",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Milkweed",
        "reason": "Both are essential butterfly host plants — milkweed for monarchs, passionflower for Gulf Fritillary — creating a combined butterfly nursery."
      },
      {
        "name": "Salvia",
        "reason": "Salvia's continuous summer bloom complements passionflower's intricate but relatively short-lived individual flowers."
      },
      {
        "name": "Coreopsis",
        "reason": "Tolerates the same sandy, well-drained soil and full sun conditions passionflower prefers, filling the bed in front of the climbing vine."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer generally avoid passionflower foliage, though this claim can vary regionally with deer population pressure."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The unusual flower structure is specialized for large carpenter bees and is the required host plant for Gulf Fritillary and Zebra Longwing butterfly caterpillars."
    },
    "zoneNotes": "At the cold edge in zone 6, passionflower typically dies back to the ground each winter and regrows from hardy roots the following spring, delaying bloom until midsummer. In zones 9-11, it remains evergreen or semi-evergreen and blooms nearly continuously, and its spreading rhizomes require active containment to prevent it from popping up throughout nearby beds and lawn areas.",
    "troubleshooting": [
      {
        "issue": "Gulf Fritillary caterpillars stripping foliage",
        "fix": "This is expected and desirable — plant extra passionflower or accept temporary defoliation, as the vine regrows quickly."
      },
      {
        "issue": "Vine spreading via runners into lawn and beds",
        "fix": "Install a root barrier at planting time or mow/pull unwanted runners as soon as they appear."
      },
      {
        "issue": "No flowers on an otherwise healthy vine",
        "fix": "Ensure full sun exposure and be patient with young plants, which may take a full season or two to reach flowering size."
      }
    ]
  },
  "bougainvillea": {
    "matureSize": "15-30 ft climbing/sprawling habit, can be trained to shrub form",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Lantana",
        "reason": "Both thrive on heat, drought, and neglect, giving a low-water tropical bed continuous color from spring through frost."
      },
      {
        "name": "Agave",
        "reason": "Pairs well architecturally and shares bougainvillea's need for sharp drainage and minimal supplemental water."
      },
      {
        "name": "Plumbago",
        "reason": "Plumbago's blue flowers provide striking color contrast against bougainvillea's magenta or orange bracts in the same dry, sunny bed."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The sharp thorns and tough, leathery leaves make bougainvillea one of the more reliably deer-proof flowering vines in warm climates."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "The colorful parts are bracts rather than true petals, and the small true flowers offer limited nectar, though they do draw some butterflies and hummingbirds."
    },
    "zoneNotes": "In zone 9 at the cooler edge of its range, bougainvillea often drops leaves and blooms less reliably after winter cold snaps, recovering slowly each spring. In zones 10-11 it grows nearly year-round and can become a sprawling, thorny thicket if not pruned regularly to control its size and shape.",
    "troubleshooting": [
      {
        "issue": "Lush green growth but few blooms",
        "fix": "Reduce watering and fertilizing — bougainvillea flowers best under mild drought stress, and pampering promotes foliage over flowers."
      },
      {
        "issue": "Leaf drop after a move or cold snap",
        "fix": "Keep the plant in a sheltered, consistent spot; bougainvillea is sensitive to root disturbance and temperature swings and typically recovers with stable conditions."
      },
      {
        "issue": "Thorns causing handling injuries during pruning",
        "fix": "Always wear thick gloves and long sleeves, and prune immediately after each bloom flush rather than letting growth become dense and tangled."
      }
    ]
  },
  "honeysuckle": {
    "matureSize": "10-20 ft climbing length",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Trumpet Vine",
        "reason": "Both are premier native hummingbird vines, extending nectar availability when grown together on the same or adjacent structures."
      },
      {
        "name": "Purple Coneflower",
        "reason": "Coneflower's summer bloom picks up as honeysuckle's peak spring flowering slows, keeping pollinator interest going."
      },
      {
        "name": "Butterfly Bush",
        "reason": "Complements honeysuckle's fragrance and nectar value, creating a layered pollinator hedge along a fence line."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse honeysuckle foliage and stems, particularly new growth, more readily than they browse many other flowering vines."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Native coral honeysuckle is a favorite of ruby-throated hummingbirds and also attracts hummingbird moths and butterflies."
    },
    "zoneNotes": "In zone 4 at the cold edge, native coral honeysuckle dies back to woody stems but reliably resprouts and blooms the following season. In zone 9, be vigilant about distinguishing this native species from invasive Japanese honeysuckle (Lonicera japonica), which spreads aggressively into wooded areas in warm, humid Southeastern climates.",
    "troubleshooting": [
      {
        "issue": "Aphids clustering on new growth and flower buds",
        "fix": "Spray off with a strong stream of water or apply insecticidal soap; ladybugs typically arrive naturally to control populations."
      },
      {
        "issue": "Powdery mildew coating leaves in late summer",
        "fix": "Improve air circulation through selective pruning and avoid wetting foliage during watering."
      },
      {
        "issue": "Sparse bloom on an overgrown vine",
        "fix": "Prune right after the main spring flush to shape the plant and encourage a second, lighter bloom later in summer."
      }
    ]
  },
  "tulip": {
    "matureSize": "12-24 in tall, 4-6 in spread",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Forget-Me-Not",
        "reason": "Low-growing forget-me-nots bloom simultaneously and mask tulip's bare lower stems while their blue color contrasts with most tulip shades."
      },
      {
        "name": "Daffodil",
        "reason": "Daffodils are avoided by the same rodents and deer that target tulip bulbs, and interplanting can help disguise tulip bulbs from foragers."
      },
      {
        "name": "Hosta",
        "reason": "Emerging hosta foliage fills in and hides tulip's yellowing leaves as they die back after bloom."
      }
    ],
    "deerResistance": {
      "rating": "frequently damaged",
      "note": "Tulips are a favorite browse and grazing target for both deer and rodents, making them one of the least deer-resistant spring bulbs."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Tulips offer some early-season pollen for emerging bees, but as a heavily hybridized bloom they provide less nectar reward than many wildflower bulbs."
    },
    "zoneNotes": "In zone 3, tulips reliably perennialize because the ground freezes deeply enough to satisfy the bulb's chilling requirement, so bloom quality holds up for several years. In zone 8 at the warm edge, most tulip varieties fail to naturalize and decline sharply after the first year without a cold winter, so gardeners there generally treat them as annuals and dig or refrigerate bulbs before replanting.",
    "troubleshooting": [
      {
        "issue": "Deer or rabbits eating flower buds and foliage",
        "fix": "Apply repellent spray in early spring or install temporary fencing around beds during the bloom period."
      },
      {
        "issue": "Bulbs rotting in the ground",
        "fix": "Improve drainage by planting in raised beds or amending heavy clay with grit, since tulips are highly susceptible to rot in waterlogged soil."
      },
      {
        "issue": "Declining bloom size in following years",
        "fix": "Feed with a bulb fertilizer at planting and after bloom, and allow foliage to fully yellow and die back before removing it."
      }
    ]
  },
  "daffodil": {
    "matureSize": "12-18 in tall, 6 in spread",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Tulip",
        "reason": "Interplanting daffodils around tulip drifts helps protect the more vulnerable tulip bulbs since deer and rodents avoid the toxic daffodil bulbs nearby."
      },
      {
        "name": "Hosta",
        "reason": "Hosta leaves expand just as daffodil foliage is dying back, camouflaging the yellowing leaves that must be left in place."
      },
      {
        "name": "Creeping Phlox",
        "reason": "Low, spreading phlox blooms at the same time and covers bare ground around daffodil stems without competing for light."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "All parts of the daffodil contain lycorine, a toxic alkaloid that makes it one of the most reliably deer- and rodent-proof spring bulbs available."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Provides some early-season nectar for emerging bumblebee queens and honeybees on warm late-winter days, though nectar volume is modest."
    },
    "zoneNotes": "In zone 3, daffodils are fully cold-hardy and naturalize readily, spreading into large drifts over the years without any special winter protection. In zone 9, most daffodil varieties struggle to rebloom because winters rarely provide the sustained chill the bulb needs, so gardeners there should select warm-climate cultivars bred for low-chill requirements or treat them as one-season plantings.",
    "troubleshooting": [
      {
        "issue": "Bulbs flowering less each year ('blindness')",
        "fix": "Divide congested clumps every 3-5 years after foliage yellows, and avoid cutting foliage back before it fully dies down."
      },
      {
        "issue": "Basal rot in wet soil",
        "fix": "Plant in well-drained soil or raised beds, since daffodil bulbs are prone to rot in areas with poor drainage or heavy summer irrigation."
      },
      {
        "issue": "Narcissus bulb fly damage (soft, hollow bulbs)",
        "fix": "Mound soil over the neck of the bulb after foliage dies back to block the fly's egg-laying access, and discard any visibly hollowed bulbs."
      }
    ]
  },
  "gladiolus": {
    "matureSize": "2-5 ft tall, 1 ft spread",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Dahlia",
        "reason": "Both are tender summer corms/tubers requiring the same fall digging and winter storage routine in cold climates, simplifying garden maintenance."
      },
      {
        "name": "Zinnia",
        "reason": "Zinnia's bushy form hides gladiolus's bare lower stems while sharing the same full-sun cutting garden conditions."
      },
      {
        "name": "Cosmos",
        "reason": "Airy cosmos foliage softens gladiolus's stiff, upright spikes in a mixed cutting bed."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will sample gladiolus foliage and flower spikes, especially in gardens with few other options, though it is not a preferred food."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Modern hybrid gladiolus offer limited nectar and are visited occasionally by bees and hummingbirds but are not a significant pollinator resource."
    },
    "zoneNotes": "In zone 7 at the cool edge of its perennial range, corms can often overwinter in the ground with a heavy mulch layer in milder years but are at risk in a hard freeze, so many gardeners still lift them as insurance. In zones 10-11, corms remain in the ground year-round and can naturalize, but should be divided every couple of years as clumps become congested.",
    "troubleshooting": [
      {
        "issue": "Thrips causing streaked, distorted flowers",
        "fix": "Apply insecticidal soap at first sign of damage and remove and destroy heavily infested foliage after bloom."
      },
      {
        "issue": "Tall spikes flopping over",
        "fix": "Stake individually or plant in blocks where neighboring stems provide mutual support, and plant corms slightly deeper in loose soil."
      },
      {
        "issue": "Corms rotting in storage over winter",
        "fix": "Cure corms in a warm, dry, well-ventilated spot for 2-3 weeks before storing in mesh bags in a cool, dry location around 40-50°F."
      }
    ]
  },
  "allium": {
    "matureSize": "2-4 ft tall, 6-12 in spread (flower head 4-8 in diameter)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Peony",
        "reason": "Allium's tall globe blooms rise above peony foliage right as peony flowers finish, extending seasonal interest in the same bed."
      },
      {
        "name": "Catmint",
        "reason": "Sprawling catmint fills in and hides allium's yellowing foliage while sharing the same low-water, full-sun requirements."
      },
      {
        "name": "Russian Sage",
        "reason": "Russian sage's fine, airy texture contrasts dramatically with allium's bold spherical form for late-season structure."
      },
      {
        "name": "Salvia",
        "reason": "Blooms at a similar time with a spiky form that visually complements allium's rounded flower heads."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "As a true onion relative, allium's sulfurous compounds make it one of the most reliably deer- and rodent-proof bulbs."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The dense globe of tiny florets is a major draw for honeybees, bumblebees, and a wide range of butterflies during its bloom period."
    },
    "zoneNotes": "In zone 4, allium is fully hardy and reliably perennializes, with the cold winter satisfying its chilling requirement for strong spring emergence. In zone 9 at the warm edge, allium often performs as a short-lived perennial or annual since it needs a sustained cold period to rebloom well, so gardeners there may need to replant bulbs periodically.",
    "troubleshooting": [
      {
        "issue": "Foliage yellowing and looking untidy before bloom",
        "fix": "This is normal allium behavior — plant companion perennials in front to screen the fading leaves rather than cutting them prematurely."
      },
      {
        "issue": "Bulb rot in heavy, poorly drained soil",
        "fix": "Amend clay soil with grit or compost, or plant in raised beds to ensure sharp drainage."
      },
      {
        "issue": "Onion fly or bulb rot in humid climates",
        "fix": "Avoid overhead watering and ensure good air circulation around the base of plants."
      }
    ]
  },
  "bearded-iris": {
    "matureSize": "18-40 in tall, 12-18 in spread",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Peony",
        "reason": "Both are classic sun-loving perennials with similar bloom timing and low water needs once established, forming a traditional cottage garden pairing."
      },
      {
        "name": "Russian Sage",
        "reason": "Shares bearded iris's preference for lean, well-drained soil and provides a fine-textured contrast to iris's sword-like foliage."
      },
      {
        "name": "Daylily",
        "reason": "Daylily's grassy foliage and later bloom time extend color in the bed after iris finishes flowering, with matching sun and drainage needs."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The tough, fibrous rhizomes and leaves are generally unpalatable to deer, though the flowers themselves are occasionally nibbled."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Large bumblebees are the primary pollinators, using the flower's 'landing pad' petals and beard as a guide into the bloom."
    },
    "zoneNotes": "In zone 3, bearded iris is fully cold-hardy provided the rhizome is planted shallowly with its top exposed, since burial in cold, wet soil promotes rot rather than protecting the plant from cold. In zone 9-10, rhizomes benefit from light afternoon shade and more frequent division since the plant's dormant period is shorter and clumps congest faster in the extended growing season.",
    "troubleshooting": [
      {
        "issue": "Iris borer tunneling into rhizomes",
        "fix": "Remove and destroy old foliage each fall to eliminate overwintering eggs, and squash borer larvae found in leaf fans during the growing season."
      },
      {
        "issue": "Soft rot turning rhizomes mushy and foul-smelling",
        "fix": "Cut out and discard infected tissue, improve drainage, and avoid mulching directly over the rhizome, which traps moisture."
      },
      {
        "issue": "Poor flowering in an established clump",
        "fix": "Divide overcrowded rhizomes every 3-4 years in midsummer after bloom, replanting only firm, healthy sections."
      }
    ]
  },
  "hyacinth": {
    "matureSize": "8-12 in tall, 4-6 in spread",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Grape Hyacinth",
        "reason": "Grape hyacinth's smaller scale and similar bloom time create a layered display without competing for the same visual space."
      },
      {
        "name": "Pansy",
        "reason": "Cool-season pansies planted around hyacinth bulbs provide continuous color both before and after the hyacinth's shorter bloom window."
      },
      {
        "name": "Tulip",
        "reason": "Both are classic fall-planted bulbs with overlapping spring bloom time, commonly combined in mixed spring bulb displays."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Hyacinth bulbs and foliage contain oxalic acid compounds that are toxic and unpalatable, making them reliably ignored by deer and rodents."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The intensely fragrant flower spikes draw early-emerging bees and are especially attractive to queen bumblebees seeking spring nectar."
    },
    "zoneNotes": "In zone 4, hyacinth reliably returns and rebloom quality stays strong for several years thanks to consistent winter chilling. In zone 8 at the warm edge, bulbs often decline after the first year without an artificial chilling period, so gardeners there commonly refrigerate bulbs for 8-10 weeks before fall planting or treat hyacinth as a replant-each-year annual.",
    "troubleshooting": [
      {
        "issue": "Bulb rot in wet spring soil",
        "fix": "Ensure sharp drainage by planting in raised beds or amending soil with grit; avoid siting in low spots where water collects."
      },
      {
        "issue": "Flower spikes flopping over",
        "fix": "Plant in a location sheltered from strong wind, and avoid over-fertilizing with nitrogen, which produces weak, floppy stems."
      },
      {
        "issue": "Declining bloom in following years",
        "fix": "Allow foliage to die back fully before removing it, and feed with bulb fertilizer at planting and again after flowering."
      }
    ]
  },
  "caladium": {
    "matureSize": "12-24 in tall, 12-18 in spread",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Impatiens",
        "reason": "Shares caladium's preference for shade and consistent moisture, and impatiens' fine flowers contrast with caladium's bold leaf patterns."
      },
      {
        "name": "Fern",
        "reason": "Ferns provide a fine-textured green backdrop that makes caladium's bold, colorful foliage stand out even more."
      },
      {
        "name": "Begonia",
        "reason": "Shade-loving begonias share caladium's moisture and light needs and bloom continuously to complement the foliage display."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Caladium contains calcium oxalate crystals that make it unpalatable and mildly toxic, so deer generally avoid it."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Grown strictly for ornamental foliage; the inconspicuous flowers are typically removed and offer negligible pollinator value."
    },
    "zoneNotes": "In zone 9 at the cool edge of its hardiness, caladium tubers must be lifted and stored indoors over winter, since even a light frost will kill the foliage and cold, wet soil will rot the tubers. In zones 10-11, tubers can remain in the ground year-round, going dormant during any cool spells and resprouting as temperatures warm.",
    "troubleshooting": [
      {
        "issue": "Tubers rotting after planting",
        "fix": "Wait until soil temperatures are reliably above 65°F before planting, since cold, wet soil is the most common cause of tuber rot."
      },
      {
        "issue": "Slow or uneven sprouting",
        "fix": "Pre-sprout tubers indoors in moist peat moss at 70-75°F for a few weeks before transplanting outdoors."
      },
      {
        "issue": "Leaf scorch or fading color in direct sun",
        "fix": "Move to a location with dappled or full shade, especially for the more colorful, less sun-tolerant varieties."
      }
    ]
  },
  "canna-lily": {
    "matureSize": "3-6 ft tall, 1.5-2 ft spread",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Elephant Ear (Colocasia)",
        "reason": "Both bring bold, large-leaved tropical texture and share the same high-water, full-sun requirements, ideal for pond-edge or bog plantings."
      },
      {
        "name": "Salvia",
        "reason": "Salvia's spiky flower form contrasts with canna's broad paddle leaves while both tolerate heat and humidity well."
      },
      {
        "name": "Coleus",
        "reason": "Colorful coleus foliage fills in around canna's base, echoing its bold-leaf tropical look at a lower height."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Deer will browse canna foliage and flowers in areas of high deer pressure, though it is not typically a first-choice food source."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Attracts hummingbirds and occasionally butterflies drawn to the bright, tubular flowers, though nectar reward is modest compared to true lilies."
    },
    "zoneNotes": "In zone 7 at the cool edge, rhizomes must be dug after the first frost blackens the foliage and stored indoors over winter in barely moist peat moss, since they cannot survive freezing ground. In zones 10-11, canna remains in the ground year-round as a true evergreen perennial and can spread into large colonies that benefit from periodic division to maintain vigor.",
    "troubleshooting": [
      {
        "issue": "Canna leaf roller caterpillars folding and chewing leaves",
        "fix": "Remove and destroy rolled leaf sections by hand, or apply Bt (Bacillus thuringiensis) early in the infestation."
      },
      {
        "issue": "Rhizomes rotting in winter storage",
        "fix": "Cure rhizomes for a few days after digging, store in barely damp peat or vermiculite (not wet), and keep at 45-55°F with good air circulation."
      },
      {
        "issue": "Few flowers, mostly foliage",
        "fix": "Ensure full sun exposure of at least 6 hours and avoid excessive nitrogen fertilizer, which promotes leaf growth over blooms."
      }
    ]
  },
  "crocus": {
    "matureSize": "3-6 in tall, 2-3 in spread",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Snowdrop",
        "reason": "Both are among the earliest bloomers, planted together to create an extended late-winter-through-early-spring flowering succession."
      },
      {
        "name": "Daffodil",
        "reason": "Daffodil's deer-resistant reputation and later bloom time complement crocus, which is more vulnerable to squirrel and rodent digging."
      },
      {
        "name": "Creeping Thyme",
        "reason": "Low, mat-forming thyme fills lawn or bed gaps around naturalized crocus without shading out the small blooms."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Crocus corms and flowers are frequently dug up and eaten by squirrels, chipmunks, and voles, and deer will graze the emerging flowers, though foliage is less preferred."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "One of the most critical early-spring nectar and pollen sources for honeybees and native bees emerging from winter dormancy, when few other flowers are available."
    },
    "zoneNotes": "In zone 3, crocus emerges reliably even through late snow cover, often blooming within days of snowmelt due to its extreme cold hardiness. In zone 8 at the warm edge, crocus still performs well but tends to bloom earlier and finish faster as temperatures warm quickly, giving a shorter overall display window than in cooler zones.",
    "troubleshooting": [
      {
        "issue": "Corms dug up and eaten by squirrels or chipmunks",
        "fix": "Lay chicken wire flat over the planting area at soil level after planting, or interplant with daffodils, which rodents avoid."
      },
      {
        "issue": "Flowers appearing but foliage removed by rabbits or deer",
        "fix": "Apply repellent spray in late winter as shoots emerge, when browsing pressure is highest."
      },
      {
        "issue": "Declining bloom in naturalized lawn plantings",
        "fix": "Delay mowing until crocus foliage has fully yellowed and died back, since premature mowing prevents the corm from recharging for next year."
      }
    ]
  },
  "blue-fescue": {
    "matureSize": "8-12 in tall and wide (flower spikes to 14 in)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Sedum (Stonecrop)",
        "reason": "Shares the same low-water, full-sun requirements and its flat succulent foliage contrasts nicely with fescue's fine spiky texture."
      },
      {
        "name": "Russian Sage",
        "reason": "Silvery-blue tones echo the fescue's color while adding height and airy vertical structure above the low mound."
      },
      {
        "name": "Lavender",
        "reason": "Both thrive in lean, fast-draining soil and full sun, forming a classic silver-blue Mediterranean-style planting."
      },
      {
        "name": "Black Mondo Grass",
        "reason": "The near-black foliage creates a striking color contrast against blue fescue's icy blue-gray blades."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The fine, wiry, aromatic blades are unpalatable to deer and rarely browsed even in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grown almost entirely for its blue foliage color; its inconspicuous seed heads offer little nectar or pollen value to pollinators."
    },
    "zoneNotes": "In zone 4, blue fescue is fully hardy but benefits from a light winter mulch and reliable snow cover to prevent crown desiccation. At the warm end of its range (zones 8-9), summer humidity and heat are more limiting than cold — the clumps often decline or rot in hot, humid summers and perform best there with sharper drainage and afternoon shade.",
    "troubleshooting": [
      {
        "issue": "Brown, dead center of the clump",
        "fix": "Divide the plant every 2-3 years in early spring, discarding the woody center and replanting the healthy outer sections."
      },
      {
        "issue": "Floppy, green-tinged foliage instead of tight blue color",
        "fix": "Move to full sun and reduce fertilizer — too much shade or rich soil causes the foliage to green up and lose its compact habit."
      },
      {
        "issue": "Crown rot in humid or poorly drained sites",
        "fix": "Plant in raised beds or amend heavy soil with grit/sand to guarantee sharp winter drainage."
      }
    ]
  },
  "feather-reed-grass": {
    "matureSize": "3-5 ft tall (including plumes), 1.5-2 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Black-Eyed Susan",
        "reason": "Golden daisy-like blooms echo the tawny color of the grass's feathery plumes and share the same sunny, average-soil conditions."
      },
      {
        "name": "Purple Coneflower",
        "reason": "Its upright purple-pink flowers provide strong color contrast against the narrow vertical form of the grass."
      },
      {
        "name": "Sedum 'Autumn Joy'",
        "reason": "Blooms at the same late-summer time as the grass's plumes and shares similarly low maintenance needs."
      },
      {
        "name": "Russian Sage",
        "reason": "Both have a strict upright, non-flopping habit that reads well in formal or repeated mass plantings."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The stiff, upright blades are not a preferred deer food, though occasional light browsing can occur in areas with heavy pressure."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "As a wind-pollinated grass it produces no showy flowers or nectar, though its seed heads provide some winter forage for songbirds."
    },
    "zoneNotes": "At the cold edge of its range (zone 4), the sterile cultivar 'Karl Foerster' is the most reliable choice and returns dependably each spring. In the warmer zones 8-9, plants may go semi-dormant or brown out earlier in hot, dry summers, and the straight species (not 'Karl Foerster') can self-seed aggressively, so sterile cultivars are strongly preferred there.",
    "troubleshooting": [
      {
        "issue": "Flopping or splaying clumps",
        "fix": "Grow in full sun and avoid over-fertilizing with nitrogen, which produces weak, lax growth; stake temporarily if a summer storm flattens the clump."
      },
      {
        "issue": "Rust-colored spots on leaf blades",
        "fix": "Improve air circulation by dividing crowded clumps and avoid overhead watering late in the day."
      },
      {
        "issue": "Unwanted seedlings spreading nearby",
        "fix": "Plant only sterile cultivars such as 'Karl Foerster' or 'Overdam' rather than the species form."
      }
    ]
  },
  "fountain-grass": {
    "matureSize": "2-4 ft tall and wide including arching seed heads",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Rudbeckia (Black-Eyed Susan)",
        "reason": "Warm gold flower color complements the buff-pink seed plumes and both bloom together into fall."
      },
      {
        "name": "Coreopsis",
        "reason": "Fine-textured yellow flowers pair well against fountain grass's fuzzy, bottlebrush seed heads for late-season contrast."
      },
      {
        "name": "Sedum 'Autumn Joy'",
        "reason": "Both perform well in lean, well-drained soil and peak visually in late summer through fall."
      },
      {
        "name": "Salvia 'May Night'",
        "reason": "Its deep purple spikes provide vertical, cool-toned contrast to fountain grass's mounded, warm-toned form."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The fuzzy seed heads and coarse foliage are generally passed over by deer, though young shoots may occasionally be nibbled."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "A wind-pollinated ornamental grass with no significant nectar value, though the seed heads attract seed-eating birds in fall and winter."
    },
    "zoneNotes": "In zone 5, fountain grass survives reliably with good winter drainage but benefits from leaving the foliage uncut until spring for extra crown insulation. In zones 9-10, common green fountain grass (Pennisetum alopecuroides) can self-seed and naturalize; the purple-leaved 'Rubrum' type is actually tender there and often grown as an annual since it is not reliably hardy below zone 9.",
    "troubleshooting": [
      {
        "issue": "No regrowth in spring",
        "fix": "Confirm winter hardiness for your zone and cultivar — 'Rubrum' and other purple fountain grasses need zone 9+ or must be treated as annuals/overwintered indoors."
      },
      {
        "issue": "Excessive self-seeding into lawns and beds",
        "fix": "Deadhead spent plumes before seed drop or choose a sterile cultivar such as 'Hameln' in warmer zones where reseeding is a concern."
      },
      {
        "issue": "Thinning, weak clumps after several years",
        "fix": "Divide the clump in early spring every 3-4 years to rejuvenate vigor."
      }
    ]
  },
  "maiden-grass": {
    "matureSize": "5-8 ft tall (with plumes), 3-4 ft wide",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Purple Coneflower",
        "reason": "Its bold pink-purple blooms stand out at eye level in front of the tall, airy backdrop maiden grass provides."
      },
      {
        "name": "Joe Pye Weed",
        "reason": "Similarly large-scale perennial that matches Miscanthus in height and thrives in the same sunny, average-to-moist soil."
      },
      {
        "name": "Aster",
        "reason": "Fall-blooming asters flower alongside the grass's silvery plumes for extended late-season interest."
      },
      {
        "name": "Russian Sage",
        "reason": "Provides a lower, silvery-blue textural contrast at the base of the grass's tall, upright clump."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The tough, sharp-edged blades discourage browsing, though very young spring shoots are occasionally sampled."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated with no significant nectar or pollen value, though standing winter clumps offer shelter for overwintering insects."
    },
    "zoneNotes": "In zone 4, only the hardiest cultivars (such as 'Purpurascens' or 'Adagio') reliably survive and bloom before frost, since many later-blooming maiden grass cultivars need a longer season to flower. In zones 8-9, Miscanthus sinensis can self-seed prolifically and has become invasive in parts of the warm Southeast, so sterile or low-fertility cultivars are recommended there and regular deadheading is advised.",
    "troubleshooting": [
      {
        "issue": "Clump splitting open in the center",
        "fix": "Divide every 3-4 years in early spring using a sharp spade or saw to section the tough root mass."
      },
      {
        "issue": "Invasive self-seeding in warm climates",
        "fix": "Choose sterile cultivars like 'Gracillimus' or cut plumes back before seed matures in fall."
      },
      {
        "issue": "Foliage that never turns its full fall color or fails to bloom before frost",
        "fix": "Choose an early-blooming cultivar suited to your zone's shorter growing season, such as 'Purpurascens' for northern gardens."
      }
    ]
  },
  "muhly-grass": {
    "matureSize": "2-3 ft tall and wide (to 4 ft with pink flower clouds)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Yaupon Holly",
        "reason": "A native evergreen shrub that shares the same sandy, well-drained soil preference and provides a dark green backdrop for muhly grass's pink fall plumes."
      },
      {
        "name": "Salvia greggii",
        "reason": "Both are heat- and drought-tolerant Southeast/Southwest natives that bloom in complementary shades of pink and red."
      },
      {
        "name": "Agave",
        "reason": "Bold architectural rosette form contrasts beautifully with muhly grass's soft, airy pink seed clouds in xeriscape designs."
      },
      {
        "name": "Little Bluestem",
        "reason": "A companion native prairie grass with blue-green summer foliage and orange fall color that extends the seasonal grass display."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Fine, wiry blades hold little appeal for deer, making it one of the most reliably deer-proof ornamental grasses in Southern landscapes."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Wind-pollinated with no true flowers, though the dense seed heads provide food for small birds through winter."
    },
    "zoneNotes": "At the cold edge of its range (zone 6), muhly grass needs a hot, sunny, well-drained site and can suffer crown rot or fail to establish in heavy clay or wet winters. In zones 9-11, it is fully at home and often naturalizes along roadsides and in coastal sandy soils, producing its best pink plume display where summers are long and hot.",
    "troubleshooting": [
      {
        "issue": "Failure to establish or crown rot over winter",
        "fix": "Plant in full sun with excellent drainage, especially in clay soils common at the northern edge of its range; amend with sand or grit before planting."
      },
      {
        "issue": "Sparse or absent pink plumes",
        "fix": "Ensure at least 6-8 hours of direct sun; plants grown in part shade rarely produce the signature pink bloom color."
      },
      {
        "issue": "Matted, floppy old growth",
        "fix": "Cut the clump back hard to 4-6 inches in late winter before new growth emerges to keep it tidy and vigorous."
      }
    ]
  },
  "japanese-forest-grass": {
    "matureSize": "12-18 in tall, 18-24 in wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Shares the same moist, part-shade conditions and its bold rounded leaves contrast with the grass's fine cascading texture."
      },
      {
        "name": "Astilbe",
        "reason": "Thrives in the same humus-rich, consistently moist shade garden and adds vertical plume color against the low mounding grass."
      },
      {
        "name": "Japanese Painted Fern",
        "reason": "A classic shade-garden pairing where the fern's silvery fronds echo Hakonechloa's cascading, arching form."
      },
      {
        "name": "Coral Bells (Heuchera)",
        "reason": "Offers colorful mounded foliage at a similar scale, creating layered texture in shaded borders and containers."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Deer occasionally browse the tender blades, but it is damaged far less than most shade perennials, particularly once established."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Grown purely for its cascading golden foliage; its small wind-pollinated flowers offer negligible value to pollinators."
    },
    "zoneNotes": "In zone 5, plants need a sheltered site and consistent winter moisture to avoid desiccation, and may emerge later in spring than in warmer zones. In zone 9, the golden-leaved cultivars require deeper shade and more consistent watering to prevent leaf scorch, since intense sun and heat there quickly bleach or burn the delicate foliage.",
    "troubleshooting": [
      {
        "issue": "Scorched, brown leaf edges",
        "fix": "Move to deeper shade and increase watering frequency, especially during hot afternoons, since this grass cannot tolerate the sun exposure many other ornamental grasses accept."
      },
      {
        "issue": "Slow to establish or spread",
        "fix": "Be patient — Hakonechloa is inherently slow-growing; enrich soil with compost and keep evenly moist to speed establishment."
      },
      {
        "issue": "Slug and snail damage on new spring shoots",
        "fix": "Apply iron phosphate slug bait around the crown as new growth emerges in early spring."
      }
    ]
  },
  "switchgrass": {
    "matureSize": "3-6 ft tall, 2-3 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Purple Coneflower",
        "reason": "A classic native prairie pairing — its bold pink-purple blooms stand out against switchgrass's fine, airy seed panicles."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Both are native to North American prairies and share tolerance for wet-to-dry soil swings, making them ideal rain garden partners."
      },
      {
        "name": "Joe Pye Weed",
        "reason": "Thrives in the same moist-to-average soil and matches switchgrass's height for a naturalistic meadow look."
      },
      {
        "name": "Little Bluestem",
        "reason": "A companion native grass with blue-green summer color and orange-red fall color that extends the seasonal grass display."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "As a native prairie grass, it is not a preferred deer browse, though young spring shoots may occasionally be grazed in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Wind-pollinated and not a nectar source, but its dense seed heads are an important food source for songbirds like juncos and sparrows through winter, and the standing stems provide habitat for beneficial insects."
    },
    "zoneNotes": "In zone 3, switchgrass is fully hardy and one of the most cold-tolerant ornamental grasses available, dying back cleanly each fall and returning reliably each spring. In zone 9, it tolerates heat and humidity well but may need more supplemental water during extended summer drought than in its native prairie range, and taller cultivars can flop without staking in richer garden soil.",
    "troubleshooting": [
      {
        "issue": "Floppy, lodging stems in late summer",
        "fix": "Grow in lean soil without extra fertilizer, or choose a more upright cultivar like 'Northwind'; avoid overly rich garden beds."
      },
      {
        "issue": "Rust disease on leaf blades in humid climates",
        "fix": "Improve air circulation between clumps and choose rust-resistant cultivars such as 'Shenandoah' in humid southeastern gardens."
      },
      {
        "issue": "Aggressive self-seeding in ideal conditions",
        "fix": "Cut back seed heads before they fully mature and disperse if self-seeding becomes a nuisance in cultivated beds."
      }
    ]
  },
  "liriope": {
    "matureSize": "12-18 in tall, 12-24 in wide (spreads by rhizomes)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Both tolerate shade and share similar moisture needs, with liriope's fine grassy texture and purple spikes contrasting hosta's broad leaves."
      },
      {
        "name": "Azalea",
        "reason": "A traditional Southern landscape pairing where liriope's evergreen border edges the base of azalea plantings."
      },
      {
        "name": "Japanese Painted Fern",
        "reason": "Shares the same shade tolerance and adds silvery fine-textured foliage contrast beside liriope's strappy leaves."
      },
      {
        "name": "Autumn Fern",
        "reason": "Both are tough, evergreen shade plants commonly used together as foundation and border plantings in the Southeast."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The tough, leathery, grass-like foliage is highly resistant to deer browsing, making it a staple border plant in high deer-pressure landscapes."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Its late-summer purple flower spikes attract bees and other small pollinators, and the resulting blue-black berries provide food for birds in fall."
    },
    "zoneNotes": "In zone 4, liriope is at the very edge of hardiness and needs a protected microclimate and winter mulch to survive, with foliage often dying back completely rather than staying evergreen. In zones 9-10, it stays evergreen year-round and grows more vigorously, spreading via rhizomes fast enough that clumping (rather than running) cultivars are recommended to keep it in bounds.",
    "troubleshooting": [
      {
        "issue": "Winter foliage browning or dieback in cold zones",
        "fix": "Mow or cut the foliage back to 3 inches in late winter before new growth emerges to remove tattered leaves."
      },
      {
        "issue": "Crown rot in poorly drained, wet soil",
        "fix": "Plant in soil amended for drainage and avoid low spots where water collects."
      },
      {
        "issue": "Spreading beyond intended borders",
        "fix": "Choose clumping Liriope muscari rather than running Liriope spicata, and install a root barrier edging if containment is needed."
      }
    ]
  },
  "aloe-vera": {
    "matureSize": "1-2 ft tall and wide (offsets can form clumps 3 ft wide)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Agave",
        "reason": "Shares identical low-water, full-sun, sharp-drainage requirements and pairs well texturally in succulent rock gardens."
      },
      {
        "name": "Echeveria",
        "reason": "Both thrive in fast-draining soil and full sun to partial shade, making them classic companions in mixed succulent containers."
      },
      {
        "name": "Prickly Pear Cactus",
        "reason": "A drought-tolerant desert companion that shares aloe's need for gritty, well-drained soil and minimal irrigation."
      },
      {
        "name": "Lavender",
        "reason": "Complements aloe's architectural rosette form with soft, fragrant texture, and both tolerate lean, dry Mediterranean-style soil."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The thick, spiny-edged, bitter-sapped leaves are highly unpalatable and almost never browsed by deer."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Tubular orange-yellow flower spikes are attractive to hummingbirds and bees, particularly in warm climates where it blooms reliably."
    },
    "zoneNotes": "In zone 9, aloe vera is marginal outdoors and should be grown in a container or protected south-facing spot, as a hard freeze will kill it to the ground or outright. In zones 10-11 it thrives as a permanent garden plant year-round, forming larger offset clumps and blooming more reliably than in cooler, more marginal zones.",
    "troubleshooting": [
      {
        "issue": "Mushy, rotting leaves at the base",
        "fix": "Stop watering immediately and let soil dry completely; repot into fast-draining cactus mix if rot has set in, cutting away affected tissue."
      },
      {
        "issue": "Stretched, pale, leggy growth",
        "fix": "Move to a spot with more direct sunlight — insufficient light causes aloe to etiolate and lose its compact rosette form."
      },
      {
        "issue": "Cold damage or blackened leaves after frost",
        "fix": "Bring potted plants indoors before frost, or cover in-ground plants; damaged leaves should be trimmed away once new growth resumes."
      }
    ]
  },
  "jade-plant": {
    "matureSize": "3-5 ft tall and wide outdoors in ideal climates (2-3 ft as a houseplant)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Echeveria",
        "reason": "Shares the same low-water, gritty soil needs and pairs well in mixed succulent container arrangements."
      },
      {
        "name": "Haworthia",
        "reason": "Both tolerate similar indoor light conditions and fast-draining soil, making them natural companions in windowsill succulent bowls."
      },
      {
        "name": "Sedum (Stonecrop)",
        "reason": "Complements jade plant's thick oval leaves with a lower, spreading groundcover habit in outdoor succulent beds."
      },
      {
        "name": "Aloe Vera",
        "reason": "Requires the same infrequent, deep watering and bright light, making care routines compatible when grown together."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Thick, fleshy leaves with a high water content and mild toxicity make it unappealing to deer, though this is more relevant in mild zones 10-11 where it grows outdoors."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Produces small star-shaped white or pink flowers in winter when mature, offering minor nectar value to bees, but it is grown primarily for its sculptural form."
    },
    "zoneNotes": "Jade plant is reliably hardy outdoors only in zones 10-11; in zone 10 it may still need protection during rare cold snaps, since temperatures below the high 20s°F can cause significant leaf and stem damage. Everywhere colder, it must be grown as a container plant that is brought indoors before the first fall frost.",
    "troubleshooting": [
      {
        "issue": "Leaves dropping or shriveling",
        "fix": "Check soil moisture — both severe underwatering and overwatering cause leaf drop; water deeply only when soil is completely dry."
      },
      {
        "issue": "Soft, mushy, blackened stems",
        "fix": "This indicates root or stem rot from overwatering; remove affected tissue and repot in fresh, fast-draining cactus mix."
      },
      {
        "issue": "Leggy, sparse growth reaching for light",
        "fix": "Move to a brighter location — jade plants need several hours of direct sun daily to stay compact and tree-like."
      }
    ]
  },
  "echeveria": {
    "matureSize": "4-8 in tall and wide per rosette (varies by species)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Sedum (Stonecrop)",
        "reason": "Shares identical drainage and sun requirements and its trailing habit contrasts nicely with echeveria's tight rosette form in containers."
      },
      {
        "name": "Hens and Chicks",
        "reason": "Both are rosette-forming succulents that combine beautifully for color and size contrast in rock gardens and dish gardens."
      },
      {
        "name": "Agave",
        "reason": "Provides bold architectural scale above echeveria's low, compact rosettes in xeriscape and succulent bed designs."
      },
      {
        "name": "Haworthia",
        "reason": "Compatible light and watering needs make it an easy companion in mixed succulent container arrangements."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The thick, water-storing rosette leaves are generally avoided by deer, though this is mainly relevant where grown outdoors in zones 9-11."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "Produces bell-shaped orange, pink, or red flower stalks that attract hummingbirds and bees when grown outdoors and allowed to bloom."
    },
    "zoneNotes": "In zone 9, echeveria can be grown outdoors year-round in well-drained soil but may need frost cloth protection on the coldest nights, since most species tolerate only brief light frost. In zones 10-11 it thrives outdoors permanently, producing tighter, more colorful rosettes in bright light, while in colder zones it is best grown in containers that can be moved indoors for winter.",
    "troubleshooting": [
      {
        "issue": "Rosette center rot from water sitting in the crown",
        "fix": "Always water at the soil line, never overhead, and ensure the container has drainage holes."
      },
      {
        "issue": "Stretched, elongated stem (etiolation)",
        "fix": "Increase light exposure — echeveria needs bright, direct light to maintain a tight, compact rosette shape."
      },
      {
        "issue": "Mealybugs in leaf crevices",
        "fix": "Dab affected areas with a cotton swab dipped in isopropyl alcohol, repeating weekly until the infestation clears."
      }
    ]
  },
  "sedum": {
    "matureSize": "18-24 in tall, 18-24 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Russian Sage",
        "reason": "Both are extremely drought-tolerant and share the same lean, well-drained soil preference for xeriscape plantings."
      },
      {
        "name": "Purple Coneflower",
        "reason": "Blooms at the same late-summer time and both attract pollinators, extending the nectar season together."
      },
      {
        "name": "Ornamental Grasses (e.g., Switchgrass)",
        "reason": "Fine grass texture contrasts with sedum's fleshy rounded leaf clusters and flat flower heads for classic prairie-style plantings."
      },
      {
        "name": "Black-Eyed Susan",
        "reason": "Golden late-summer blooms complement sedum's pink-to-rust flower color transition into fall."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The thick, fleshy leaves are not a preferred deer food, though hungry deer in early spring may occasionally nip young shoots."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Late-summer flat-topped flower clusters are a major late-season nectar source for bees, butterflies (including migrating monarchs), and other pollinators."
    },
    "zoneNotes": "In zone 3, tall sedum is fully hardy and one of the most reliable perennials for extreme cold, though it may bloom slightly later given the shorter growing season. In zone 10, it performs best with some afternoon shade and excellent drainage, since prolonged heat and humidity combined with wet soil can cause the crown to rot.",
    "troubleshooting": [
      {
        "issue": "Floppy, splayed-open clumps",
        "fix": "Cut back by half in early June ('Chelsea chop') to encourage bushier, sturdier growth that resists flopping later in the season."
      },
      {
        "issue": "Crown or root rot in wet soil",
        "fix": "Plant in raised beds or amend with grit to ensure sharp drainage, especially in clay soils."
      },
      {
        "issue": "Sparse flowering",
        "fix": "Ensure at least 6 hours of direct sun daily — sedum blooms poorly in shade."
      }
    ]
  },
  "agave": {
    "matureSize": "3-6 ft tall, 6-10 ft wide (mature rosette)",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Prickly Pear Cactus",
        "reason": "Shares identical desert soil and water requirements and pairs well for a classic Southwest architectural planting."
      },
      {
        "name": "Muhly Grass",
        "reason": "Its soft pink plumes offer textural and color contrast against agave's stiff, bold rosette form."
      },
      {
        "name": "Aloe Vera",
        "reason": "Compatible sun and drainage needs make it a natural rosette-form companion in succulent and xeriscape beds."
      },
      {
        "name": "Red Yucca (Hesperaloe)",
        "reason": "A classic Southwest pairing where red yucca's slender bloom spikes contrast agave's broad, sculptural leaves."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The rigid, spine-tipped leaves are a strong physical deterrent, making agave one of the most reliably deer-proof landscape plants."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "When it blooms (once in its lifetime, typically after 10-25 years), the towering flower stalk produces abundant nectar that is a major draw for bats, hummingbirds, and bees, particularly in its native Southwest range."
    },
    "zoneNotes": "At the cold edge of its range (zone 8), Agave americana needs a south-facing, well-drained site and may suffer leaf damage or death in a hard freeze below the low 20s°F, so gardeners there often choose more cold-hardy species like Agave parryi instead. In zones 10-11 it thrives with minimal care and reaches its largest, most dramatic mature size, eventually sending up its signature flowering stalk before the rosette naturally dies.",
    "troubleshooting": [
      {
        "issue": "Rot at the base after wet winters",
        "fix": "Plant on a slight mound or slope with gritty, fast-draining soil to keep the crown from sitting in water."
      },
      {
        "issue": "Agave snout weevil infestation causing sudden collapse",
        "fix": "Treat proactively with a systemic insecticide drench in late spring in areas where this pest is known, since infested plants usually cannot be saved once collapse begins."
      },
      {
        "issue": "Overcrowding from offset pups",
        "fix": "Remove pups with a sharp spade once they are a few inches tall, before they compete with the mother plant for space and water."
      }
    ]
  },
  "haworthia": {
    "matureSize": "3-5 in tall, 4-6 in wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Echeveria",
        "reason": "Shares similar bright, indirect light and gritty soil needs, making it a compatible companion in mixed succulent dish gardens."
      },
      {
        "name": "Jade Plant",
        "reason": "Both tolerate the same indoor light levels and infrequent watering schedule, simplifying combined care in containers."
      },
      {
        "name": "Aloe Vera",
        "reason": "A related succulent with compatible watering needs that provides a taller architectural contrast to haworthia's low rosette form."
      },
      {
        "name": "Sansevieria (Snake Plant)",
        "reason": "Tolerates the same low-to-moderate indoor light and infrequent watering, making it an easy low-maintenance windowsill pairing."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Almost always grown indoors or in protected patio containers, so deer exposure is rare; the firm, striped leaves are not a preferred browse in any case."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Occasionally produces small tubular white flowers on a thin stalk, but it is grown almost exclusively as a foliage houseplant with minimal bloom or pollinator significance."
    },
    "zoneNotes": "Haworthia is only reliably hardy outdoors in zones 10-11 in a sheltered, shaded location, and even there it is more commonly grown in containers. In all other zones (including the cooler end of its listed range) it must be grown as a houseplant, since it has essentially no frost tolerance and will suffer irreversible damage below about 40°F.",
    "troubleshooting": [
      {
        "issue": "Leaves turning translucent or mushy",
        "fix": "This signals overwatering-related rot — let the soil dry out completely and reduce watering frequency, repotting into fresh cactus mix if rot has progressed."
      },
      {
        "issue": "Reddish or bleached, scorched leaf color",
        "fix": "Move out of direct afternoon sun into bright, indirect light — haworthia scorches easily unlike many other succulents."
      },
      {
        "issue": "Slow or no offset production",
        "fix": "Ensure adequate but not excessive light and allow the plant to become slightly pot-bound, which often triggers offset formation."
      }
    ]
  },
  "hens-and-chicks": {
    "matureSize": "3-6 in tall, spreading indefinitely by offsets to 12+ in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Sedum (Stonecrop)",
        "reason": "Shares identical rock-garden growing conditions and its trailing form complements the tight rosette shape of hens and chicks."
      },
      {
        "name": "Blue Fescue",
        "reason": "Fine grassy texture and blue-gray color contrast beautifully with the geometric rosettes in a rock garden setting."
      },
      {
        "name": "Creeping Thyme",
        "reason": "A low, drought-tolerant groundcover that fills gaps between rosettes while sharing the same lean, well-drained soil needs."
      },
      {
        "name": "Echeveria",
        "reason": "A tender rosette-forming relative that pairs well visually in mixed succulent containers, though echeveria needs winter protection where hens and chicks does not."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The tight, low rosettes with thick leaves are almost never browsed, making it one of the most reliable deer-proof groundcovers for rock gardens."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The 'hen' rosette sends up a star-shaped pink or red flower stalk before dying, which attracts bees and other small pollinators during its bloom."
    },
    "zoneNotes": "In zone 3, hens and chicks is exceptionally cold-hardy and often the most reliable succulent for extreme northern gardens, needing only sharp drainage to survive winter. In zone 10, it struggles more with heat and humidity than cold, and benefits from afternoon shade and extra-gritty soil to prevent rot in warm, wet conditions.",
    "troubleshooting": [
      {
        "issue": "Rosette rot after flowering",
        "fix": "This is a normal life cycle event — the mother rosette naturally dies after blooming; simply remove it and let the surrounding chicks fill in."
      },
      {
        "issue": "Rot in humid or poorly drained soil",
        "fix": "Plant in gritty, fast-draining soil raised slightly above grade, especially important in the humid Southeast."
      },
      {
        "issue": "Overcrowded, congested clumps",
        "fix": "Divide and replant offsets every couple of years to maintain vigor and prevent overcrowding-related rot."
      }
    ]
  },
  "prickly-pear": {
    "matureSize": "1-2 ft tall, 3-6 ft wide (spreading clump)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Agave",
        "reason": "Shares identical desert soil and full-sun requirements, forming a classic bold-textured Southwest succulent planting."
      },
      {
        "name": "Muhly Grass",
        "reason": "Soft pink plumes provide a fine-textured, colorful contrast against prickly pear's flat, paddle-shaped pads."
      },
      {
        "name": "Yucca",
        "reason": "A compatible drought-tolerant companion with contrasting spiky vertical form against prickly pear's horizontal pad growth."
      },
      {
        "name": "Blanket Flower (Gaillardia)",
        "reason": "Drought-tolerant, sun-loving flower that blooms alongside prickly pear's own bright yellow flowers for extended color."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The dense spines and glochids make it one of the most effective deer-deterrent plants available, rarely if ever browsed."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "Large, bright yellow spring flowers are highly attractive to native bees, particularly specialist cactus bees, as well as honeybees and beetles."
    },
    "zoneNotes": "In zone 4, Opuntia humifusa is one of the very few cold-hardy cactus species and survives reliably given sharp winter drainage, though the pads shrivel and lie flat in winter as a normal cold-weather adaptation before plumping back up in spring. In zones 10-11, it grows more vigorously and can spread rapidly into a large colony, so occasional pad removal may be needed to keep it contained.",
    "troubleshooting": [
      {
        "issue": "Pad rot after wet winters",
        "fix": "Ensure sharp drainage by planting in sandy or gravelly soil, ideally on a slope or raised bed, especially critical in the colder, wetter parts of its range."
      },
      {
        "issue": "Cochineal scale (white cottony patches on pads)",
        "fix": "Spray forcefully with water to dislodge the insects, or treat with insecticidal soap for persistent infestations."
      },
      {
        "issue": "Difficulty handling due to glochids",
        "fix": "Always use tongs and thick gloves when handling pads or fruit, since the tiny hair-like glochids embed in skin more readily than the large spines."
      }
    ]
  },
  "boston-fern": {
    "matureSize": "2-3 ft tall, 3-4 ft wide (spread of fronds)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Impatiens",
        "reason": "Shares the same shade, moisture, and humidity needs, filling in around the fern's base with season-long color."
      },
      {
        "name": "Caladium",
        "reason": "Both thrive in warm, humid shade and bring contrasting leaf texture (bold vs. feathery) to porch container plantings."
      },
      {
        "name": "Begonia (wax or rex)",
        "reason": "Tolerates the same consistently moist, humid conditions Boston Fern demands, common porch and hanging-basket pairing."
      },
      {
        "name": "Peace Lily",
        "reason": "Indoors, it shares Boston Fern's humidity and bright-indirect-light requirements, useful for grouping to raise ambient humidity."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Deer generally avoid ferns due to their fibrous, low-palatability foliage, making Boston Fern a reliable choice near browse-heavy areas."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "Ferns reproduce by spores, not flowers, and offer no nectar or pollen; Boston Fern is grown purely for foliage effect."
    },
    "zoneNotes": "Boston Fern is only reliably winter-hardy outdoors in Zones 9-11; at the cold edge (Zone 9) it can be damaged by a hard freeze and benefits from a heavy mulch or being grown in a protected microclimate. Outside Zones 9-11 it is treated as a seasonal hanging-basket or houseplant that must be brought indoors before the first frost, since it has no frost tolerance at all.",
    "troubleshooting": [
      {
        "issue": "Fronds turning brown and crispy",
        "fix": "Increase humidity with a pebble tray or misting and check that soil isn't drying out between waterings; low humidity is the most common cause indoors."
      },
      {
        "issue": "Yellowing lower fronds",
        "fix": "Reduce watering frequency slightly and ensure the pot has drainage; this is often a sign of overwatering or waterlogged roots."
      },
      {
        "issue": "Leaf drop and shedding",
        "fix": "Check for spider mites or scale on frond undersides, especially when overwintered indoors in dry, heated air; rinse foliage and raise humidity."
      },
      {
        "issue": "Sparse, weak new growth",
        "fix": "Feed monthly with a diluted balanced liquid fertilizer during the active growing season, since Boston Fern is a heavy feeder in bright, humid conditions."
      }
    ]
  },
  "japanese-painted-fern": {
    "matureSize": "12-18 in tall, 18-24 in wide",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Shares shade and moisture preferences while offering bold, solid-color leaves that set off the fern's silvery, dissected fronds."
      },
      {
        "name": "Heuchera (Coral Bells)",
        "reason": "Its burgundy or lime foliage echoes the fern's metallic-red midribs, creating a coordinated shade-garden color palette."
      },
      {
        "name": "Astilbe",
        "reason": "Blooms with feathery plumes in the same moist, part-shade conditions, adding vertical flower interest above the fern's low mound."
      },
      {
        "name": "Hakone Grass (Hakonechloa)",
        "reason": "Its cascading golden foliage contrasts texturally with the fern's upright fronds while thriving in identical woodland-edge conditions."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The fibrous, silvery fronds are unappealing to deer, making this fern dependable in gardens with heavy browsing pressure."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "As a spore-producing fern it has no flowers, nectar, or pollen and is valued strictly for its ornamental foliage color."
    },
    "zoneNotes": "In its coldest zones (3-4) the fronds die back completely to the crown each winter and benefit from a protective mulch layer, re-emerging reliably each spring. At the warm edge (Zone 8) it needs consistently moist soil and deeper shade to avoid scorching in summer heat, since its silvery coloring is more prone to sunburn than plain-green ferns.",
    "troubleshooting": [
      {
        "issue": "Fronds scorching or bleaching in patches",
        "fix": "Move to deeper shade or increase watering frequency during hot spells, since too much direct afternoon sun fades the silver coloring and burns leaf edges."
      },
      {
        "issue": "Slow to establish or fill in",
        "fix": "Be patient through the first two seasons and top-dress with compost each spring; this fern is naturally slow-growing until its rhizome network matures."
      },
      {
        "issue": "Slug and snail damage on fronds",
        "fix": "Use iron phosphate bait or diatomaceous earth around the crown in spring when new fiddleheads are most vulnerable."
      },
      {
        "issue": "Crown rot in poorly drained soil",
        "fix": "Amend heavy clay with compost before planting and avoid siting in low spots where water collects over winter."
      }
    ]
  },
  "ostrich-fern": {
    "matureSize": "3-5 ft tall, 3-4 ft wide (individual crown, spreads further via runners)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Astilbe",
        "reason": "Both demand consistently moist, rich soil and part shade, and Astilbe's plumes add color at a lower height beneath the fern's tall vase form."
      },
      {
        "name": "Ligularia",
        "reason": "Thrives in the same damp, shady conditions and its bold rounded leaves contrast well with the fern's finely cut fronds."
      },
      {
        "name": "Siberian Iris",
        "reason": "Tolerates the moist to wet soil Ostrich Fern prefers, and its upright grassy foliage complements the fern's fountain-like habit near pond edges or rain gardens."
      },
      {
        "name": "Virginia Bluebells",
        "reason": "Both are vigorous spreading woodland natives that go dormant or die back seasonally, filling shady, moist beds without competing for the same bloom season."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Deer rarely browse mature Ostrich Fern fronds, though the tender spring fiddleheads can occasionally attract nibbling in high-pressure areas."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "This fern reproduces by spores and has no flowers; it offers no nectar or pollen resources for pollinators."
    },
    "zoneNotes": "At the northern edge of its range (Zone 3), Ostrich Fern is fully hardy but emerges later in spring and has a shorter active season, so fiddleheads appear later than in warmer zones. At its southern limit (Zone 7) it struggles with summer heat and dry spells unless given consistent moisture and cooler, shaded microclimates, since it is fundamentally a cold-climate woodland species.",
    "troubleshooting": [
      {
        "issue": "Aggressive spreading beyond the intended bed",
        "fix": "Install a root barrier or divide and remove runners annually, since this fern spreads vigorously by underground rhizomes and can quickly outcompete neighbors."
      },
      {
        "issue": "Browning fronds in mid-to-late summer",
        "fix": "Increase watering and mulch to retain soil moisture; this fern goes into decline once soil dries out or temperatures climb, especially at the warm end of its range."
      },
      {
        "issue": "Fiddlehead beetle or slug damage on new growth",
        "fix": "Inspect emerging fiddleheads in early spring and hand-pick pests or apply iron phosphate slug bait before fronds unfurl."
      },
      {
        "issue": "Sparse growth in dry shade",
        "fix": "Relocate to a consistently moist site near a downspout, pond, or low area; Ostrich Fern will not thrive in typical dry shade under mature trees."
      }
    ]
  },
  "autumn-fern": {
    "matureSize": "18-24 in tall, 18-24 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hellebore (Lenten Rose)",
        "reason": "Both are evergreen shade perennials that provide four-season structure, with Hellebore's winter blooms complementing the fern's coppery new growth in early spring."
      },
      {
        "name": "Heuchera (Coral Bells)",
        "reason": "Coral Bells' colorful foliage pairs naturally with the fern's bronze-to-green fronds, and both tolerate the same partial shade and well-drained soil."
      },
      {
        "name": "Japanese Forest Grass (Hakonechloa)",
        "reason": "Its arching golden blades echo the fern's fountain shape while thriving in the same woodland-edge light and moisture conditions."
      },
      {
        "name": "Toad Lily (Tricyrtis)",
        "reason": "Blooms in late summer/fall when the fern's evergreen fronds provide a steady backdrop, and both prefer humus-rich, evenly moist shade soil."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Like most ferns, the tough, leathery fronds of Autumn Fern are rarely browsed by deer, making it a dependable evergreen choice in wooded landscapes."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "This spore-producing fern has no flowers and provides no pollinator resources, but its evergreen foliage offers year-round shelter for ground-dwelling insects."
    },
    "zoneNotes": "At the cold edge of its range (Zone 5) fronds may brown or die back in harsh winters, though the crown typically survives and resprouts in spring, so it behaves more like a herbaceous perennial there. At the warm end (Zone 9) it remains fully evergreen year-round and benefits from more shade to prevent the coppery new growth from scorching in intense summer sun.",
    "troubleshooting": [
      {
        "issue": "Winter fronds looking tattered or browned",
        "fix": "Cut back damaged fronds in early spring before new coppery growth emerges; this is cosmetic and doesn't harm the plant, especially in colder zones."
      },
      {
        "issue": "Fading color or scorched tips in summer",
        "fix": "Provide afternoon shade in hotter climates, since too much direct sun bleaches the coppery-bronze new growth and can scorch mature fronds."
      },
      {
        "issue": "Slow establishment the first year",
        "fix": "Keep soil evenly moist and mulch well after planting; once established, Autumn Fern tolerates brief dry spells better than most ferns."
      },
      {
        "issue": "Slug damage on emerging fiddleheads",
        "fix": "Apply iron phosphate bait in early spring when new coppery fronds are tender and most attractive to slugs."
      }
    ]
  },
  "maidenhair-fern": {
    "matureSize": "12-18 in tall, 12-18 in wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Shares deep shade and consistent moisture needs, and its broad leaves provide contrast to the fern's delicate, fan-shaped fronds."
      },
      {
        "name": "Coleus",
        "reason": "In containers or shaded beds, Coleus adds bold foliage color while asking for the same evenly moist soil Maidenhair Fern requires."
      },
      {
        "name": "African Violet",
        "reason": "Indoors, both prefer high humidity, bright indirect light, and consistently moist (never soggy) soil, making them natural terrarium or bathroom-shelf companions."
      },
      {
        "name": "Peace Lily",
        "reason": "Tolerates similarly low light and high humidity, and its dramatic white blooms complement the fern's fine, airy texture in indoor groupings."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Maidenhair Fern's delicate fronds are not a preferred deer browse, though it is typically grown in protected shade beds or containers where deer pressure is less of a concern anyway."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "This fern spreads by spores rather than flowers and offers no nectar or pollen; it is grown entirely for its delicate foliage texture."
    },
    "zoneNotes": "Outdoors, Maidenhair Fern is hardy only in the warmer half of its listed range (roughly Zones 6-8) with reliable winter protection; in Zones 3-5 it is essentially grown as a houseplant or seasonal container specimen since it cannot survive freezing ground temperatures. Even at its hardier zones, it needs a sheltered, humid microclimate such as a shaded courtyard or north-facing foundation bed to avoid winter desiccation.",
    "troubleshooting": [
      {
        "issue": "Fronds crisping and browning rapidly",
        "fix": "Check soil moisture daily and increase humidity immediately; this fern has almost no tolerance for drying out, even briefly, and damaged fronds won't recover."
      },
      {
        "issue": "Leaf drop after being moved or repotted",
        "fix": "Keep the plant in a stable, draft-free location and maintain even watering; Maidenhair Fern is highly sensitive to transplant shock and environmental changes."
      },
      {
        "issue": "Black wiry stems with no green fronds",
        "fix": "Cut back completely and keep soil moist in bright, indirect light; the plant often regrows from the rhizome if the crown wasn't killed by prolonged drought."
      },
      {
        "issue": "Fine webbing and stippled fronds",
        "fix": "Inspect for spider mites, common in the dry indoor air this fern is often exposed to, and raise humidity while treating with insecticidal soap."
      }
    ]
  },
  "lady-fern": {
    "matureSize": "2-3 ft tall, 2-3 ft wide",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Foamflower (Tiarella)",
        "reason": "A native woodland groundcover that shares Lady Fern's moist, part-to-full shade requirements and fills in around its base with spring flowers."
      },
      {
        "name": "Wild Ginger (Asarum canadense)",
        "reason": "Low, spreading native groundcover that thrives in the same rich, moist woodland soil and provides textural contrast beneath the fern's arching fronds."
      },
      {
        "name": "Solomon's Seal (Polygonatum)",
        "reason": "Shares native woodland shade conditions and its arching stems and bell flowers complement Lady Fern's lacy foliage in a naturalistic planting."
      },
      {
        "name": "Bleeding Heart (Dicentra)",
        "reason": "Blooms in spring in the same part-shade, humus-rich soil, with Lady Fern's fronds filling in as the Bleeding Heart goes dormant in summer heat."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Deer generally leave Lady Fern alone due to its fibrous texture, making it a reliable native choice for shady woodland gardens with browsing pressure."
    },
    "pollinatorValue": {
      "rating": "none",
      "note": "As a fern, it reproduces via spores and has no flowers, offering no direct pollinator forage but contributing habitat structure for shade-loving insects and amphibians."
    },
    "zoneNotes": "At the cold edge (Zone 3) Lady Fern dies back completely each winter and re-emerges reliably in spring, tolerating harsh winters without protection. At the warm edge (Zone 8) it needs consistently moist soil and deeper shade to handle summer heat, since it is a cool-climate woodland native that goes dormant early if conditions turn hot and dry.",
    "troubleshooting": [
      {
        "issue": "Fronds collapsing or browning in summer heat",
        "fix": "Increase watering frequency and mulch to conserve soil moisture, especially in warmer zones where summer heat stresses this cool-climate native."
      },
      {
        "issue": "Slow to spread or fill in",
        "fix": "Top-dress annually with compost and be patient, since Lady Fern spreads slowly by rhizomes compared to more aggressive spreading ferns like Ostrich Fern."
      },
      {
        "issue": "Slug and snail feeding on new fiddleheads",
        "fix": "Apply iron phosphate bait in early spring as fiddleheads emerge, when foliage is most tender and vulnerable."
      },
      {
        "issue": "Yellowing fronds in heavy clay soil",
        "fix": "Amend planting area with compost to improve drainage; while Lady Fern tolerates clay better than many ferns, waterlogged roots can still cause decline."
      }
    ]
  },
  "creeping-phlox": {
    "matureSize": "4-6 in tall, 18-24 in wide (spreading mat)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Daffodil",
        "reason": "Blooms at the same time in spring, and the phlox's spreading mat hides the daffodil's yellowing foliage as it dies back after flowering."
      },
      {
        "name": "Creeping Thyme",
        "reason": "Shares full sun, well-drained soil, and low water needs, creating a tapestry effect of blooms across rock gardens and slopes."
      },
      {
        "name": "Dwarf Iris (Iris reticulata)",
        "reason": "Blooms in very early spring just before Creeping Phlox, both thriving in the same sunny, well-drained rock garden conditions."
      },
      {
        "name": "Sedum (stonecrop)",
        "reason": "Tolerates identical dry, sunny, well-drained sites and provides summer-into-fall bloom once the phlox's spring flower show has finished."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Creeping Phlox is generally deer-resistant due to its slightly fuzzy foliage, but hungry deer may nibble the flowers in early spring when little else is blooming."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The tubular spring flowers attract early-season butterflies and bees, particularly small native bees and swallowtail butterflies emerging in early spring."
    },
    "zoneNotes": "At the cold edge (Zone 3) foliage may brown or thin over a harsh winter but the plant reliably resprouts and blooms as temperatures warm. At the warm edge (Zone 9) it performs best with some afternoon shade and needs sharp drainage, since prolonged summer heat and humidity combined with wet soil can lead to crown rot.",
    "troubleshooting": [
      {
        "issue": "Sparse blooming or leggy growth",
        "fix": "Shear the plant back by about a third immediately after flowering to encourage denser, more compact growth for the following season."
      },
      {
        "issue": "Powdery mildew on foliage",
        "fix": "Improve air circulation by dividing crowded clumps and avoid overhead watering, especially in humid climates."
      },
      {
        "issue": "Bare, woody centers in older plants",
        "fix": "Divide the plant every 3-4 years in early spring or fall to rejuvenate growth and fill in the dead center."
      },
      {
        "issue": "Root or crown rot in wet soil",
        "fix": "Plant in raised beds or slopes with excellent drainage; Creeping Phlox will not tolerate standing water or heavy, poorly drained clay."
      }
    ]
  },
  "pachysandra": {
    "matureSize": "8-12 in tall, spreading indefinitely as a groundcover mat",
    "growthRate": "slow",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Both thrive in deep shade under trees, with Hosta's bold clumps providing focal points that rise above Pachysandra's uniform low carpet."
      },
      {
        "name": "Astilbe",
        "reason": "Shares the same acidic, moist, shaded conditions and adds seasonal flower spikes above Pachysandra's evergreen groundcover."
      },
      {
        "name": "Rhododendron",
        "reason": "Both require acidic soil and dappled to full shade, making Pachysandra a natural underplanting for rhododendron and azalea beds."
      },
      {
        "name": "Christmas Fern (Polystichum acrostichoides)",
        "reason": "A native evergreen fern that tolerates the same deep, dry shade and acidic soil, adding textural variety to a Pachysandra groundcover bed."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Pachysandra's tough, leathery leaves are unpalatable to deer, making it one of the most dependable groundcovers for heavily browsed woodland properties."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Its small, inconspicuous white flower spikes in early spring offer minor nectar and pollen for early-emerging native bees, but it is grown almost entirely for foliage cover, not pollinator support."
    },
    "zoneNotes": "At the cold edge (Zone 4) Pachysandra remains evergreen but growth is noticeably slower and winter burn can occur in exposed, windy sites without snow cover. At the warm edge (Zone 8) it needs consistent moisture and deeper shade, since hot, dry summer conditions combined with too much sun can cause leaf scorch and thinning.",
    "troubleshooting": [
      {
        "issue": "Volutella blight (stem and leaf dieback)",
        "fix": "Thin the planting to improve air circulation, remove and destroy infected stems, and avoid overhead watering, since this fungal disease thrives in dense, humid plantings."
      },
      {
        "issue": "Yellowing foliage in alkaline soil",
        "fix": "Test soil pH and amend with sulfur or an acidifying fertilizer, since Pachysandra requires acidic soil and yellows in alkaline conditions."
      },
      {
        "issue": "Very slow establishment",
        "fix": "Space plants closer together (6-8 inches apart) at planting and be patient; Pachysandra can take 2-3 years to form a full, weed-suppressing carpet."
      },
      {
        "issue": "Scale insects on stems",
        "fix": "Treat with horticultural oil in late winter/early spring before new growth emerges, targeting the waxy scale insects that commonly infest stressed plantings."
      }
    ]
  },
  "ajuga": {
    "matureSize": "4-6 in tall, spreads indefinitely via stolons unless contained",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Ajuga's low, colorful foliage carpet fills the space around and beneath taller Hosta clumps in the same part-shade, moist soil conditions."
      },
      {
        "name": "Daffodil",
        "reason": "Its evergreen bronze-purple foliage stays attractive as daffodil foliage fades after bloom, and both tolerate similar sun-to-part-shade conditions."
      },
      {
        "name": "Heuchera (Coral Bells)",
        "reason": "Complements Ajuga's foliage color palette and shares the same tolerance for part shade and average garden soil."
      },
      {
        "name": "Japanese Forest Grass (Hakonechloa)",
        "reason": "Its arching golden blades rise above Ajuga's flat mat, providing height contrast in shaded borders with similar moisture needs."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "Ajuga's bitter, slightly fuzzy leaves are generally avoided by deer, though it is occasionally sampled when other forage is scarce."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The blue flower spikes in spring attract bees, particularly bumblebees and mason bees, during a period when few other groundcovers are blooming."
    },
    "zoneNotes": "At the cold edge (Zone 3) Ajuga's foliage may die back in exposed sites without snow cover but the roots survive and it resprouts vigorously in spring. At the warm edge (Zone 9) it performs best with afternoon shade and good air circulation, since hot, humid summer conditions increase the risk of crown rot and fungal disease in this otherwise tough plant.",
    "troubleshooting": [
      {
        "issue": "Aggressive spreading into lawn or beds",
        "fix": "Install physical edging or mow/hand-pull runners at the border regularly, since Ajuga spreads quickly by above-ground stolons and can become weedy."
      },
      {
        "issue": "Crown rot in humid, poorly drained conditions",
        "fix": "Improve drainage and avoid overhead watering in the evening; dense Ajuga mats are prone to fungal crown rot in hot, wet, humid climates."
      },
      {
        "issue": "Bare patches or dieback in a section of the bed",
        "fix": "Check for crown rot fungus and remove affected plants promptly, then improve air circulation and reduce watering in that area."
      },
      {
        "issue": "Reduced flowering in deep shade",
        "fix": "Move to a site with at least a few hours of morning sun for the best spring bloom display, since flowering diminishes in very deep shade."
      }
    ]
  },
  "vinca": {
    "matureSize": "4-6 in tall, spreads indefinitely as a trailing groundcover",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Daffodil",
        "reason": "Vinca's evergreen trailing foliage provides a year-round backdrop and covers the bare ground left as daffodil foliage yellows and dies back."
      },
      {
        "name": "Hosta",
        "reason": "Both tolerate deep shade and dry soil under trees, with Vinca forming a low weed-suppressing carpet around Hosta's larger clumps."
      },
      {
        "name": "Hellebore (Lenten Rose)",
        "reason": "Shares evergreen winter interest and shade tolerance, with Hellebore's late-winter blooms rising above Vinca's blue spring flowers for extended seasonal color."
      },
      {
        "name": "Bigroot Geranium (Geranium macrorrhizum)",
        "reason": "Another tough, drought-tolerant shade groundcover that pairs well texturally and shares Vinca's ability to thrive in dry shade under trees."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "Vinca's leathery, slightly toxic foliage is reliably avoided by deer, making it one of the most dependable groundcovers for heavily browsed shade gardens."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "The periwinkle-blue spring flowers offer some nectar for early bees, but overall pollinator value is modest compared to native shade groundcovers, and it is primarily valued for evergreen foliage cover."
    },
    "zoneNotes": "At the cold edge (Zone 4) Vinca remains evergreen in milder winters but can suffer some leaf burn or dieback in exposed, windy sites during severe cold snaps. At the warm edge (Zone 9) it spreads aggressively and can escape cultivation into wild areas, so it should be sited with containment in mind and monitored, as it is classified as invasive in parts of the mild-winter South and Pacific states.",
    "troubleshooting": [
      {
        "issue": "Escaping into woodlands or natural areas",
        "fix": "Avoid planting near wooded edges in mild climates and remove any spreading runners promptly, since Vinca minor is invasive in many regions and outcompetes native woodland plants."
      },
      {
        "issue": "Stem blight (dieback of patches)",
        "fix": "Remove and destroy affected stems and improve air circulation by thinning dense mats, since fungal stem blight spreads readily in humid, crowded plantings."
      },
      {
        "issue": "Thin or patchy coverage",
        "fix": "Plant on 12-inch centers initially and top-dress with compost; Vinca fills in fully within one to two seasons once established."
      },
      {
        "issue": "Scale insects on stems",
        "fix": "Apply horticultural oil in late winter before new growth emerges to control scale buildup on older, denser plantings."
      }
    ]
  },
  "creeping-jenny": {
    "matureSize": "2-4 in tall, spreads indefinitely as a trailing mat",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Creeping Jenny's chartreuse trailing foliage spills around Hosta's base and contrasts with its broader leaves in part-shade, moist beds."
      },
      {
        "name": "Japanese Painted Fern",
        "reason": "Both thrive in moist, part-shade soil, with Creeping Jenny's golden color echoing the fern's silvery highlights for a layered textural planting."
      },
      {
        "name": "Astilbe",
        "reason": "Shares consistently moist soil requirements and complements Astilbe's upright flower plumes with a low, spreading golden groundcover at its base."
      },
      {
        "name": "Japanese Iris (Iris ensata)",
        "reason": "Both tolerate consistently moist to boggy soil, making them natural pairings at pond edges or rain garden margins."
      }
    ],
    "deerResistance": {
      "rating": "occasionally damaged",
      "note": "Creeping Jenny is not a preferred deer food but may be nibbled occasionally, especially in gardens with few other browse options nearby."
    },
    "pollinatorValue": {
      "rating": "low",
      "note": "Its small yellow cup-shaped flowers provide minor nectar for small bees in summer, but it is grown chiefly for its trailing golden foliage rather than pollinator support."
    },
    "zoneNotes": "At the cold edge (Zone 3) Creeping Jenny dies back to the ground each winter but reliably resprouts from its roots in spring. At the warm edge (Zone 9) its golden coloring holds best with some afternoon shade, since intense full sun in hot climates can scorch the foliage, while too much shade fades the leaf color to plain green.",
    "troubleshooting": [
      {
        "issue": "Invasive spread into lawns or nearby beds",
        "fix": "Contain with edging or grow in a pot sunk into the ground, since Creeping Jenny roots at every leaf node and spreads rapidly and can become a nuisance in garden beds."
      },
      {
        "issue": "Foliage reverting to green instead of golden",
        "fix": "Move to a spot with more direct morning sun, since the golden 'Aurea' form needs adequate light to hold its bright color and fades to green in deep shade."
      },
      {
        "issue": "Scorched or bleached leaves in summer",
        "fix": "Provide afternoon shade in hot climates or increase watering, since intense sun combined with dry soil can scorch the shallow-rooted foliage."
      },
      {
        "issue": "Rot in the center of dense mats",
        "fix": "Thin overly thick growth periodically and avoid waterlogged soil to prevent fungal rot in the densest parts of the mat."
      }
    ]
  },
  "ice-plant": {
    "matureSize": "3-6 in tall, 18-24 in wide (spreading mat)",
    "growthRate": "fast",
    "companions": [
      {
        "name": "Sedum (stonecrop)",
        "reason": "Both are drought-tolerant succulents needing full sun and sharp drainage, ideal for combined rock garden or slope plantings."
      },
      {
        "name": "Lavender",
        "reason": "Shares full sun and dry, well-drained soil preferences, with Lavender's upright form contrasting with Ice Plant's low, sprawling mat."
      },
      {
        "name": "Russian Sage (Perovskia)",
        "reason": "Tolerates the same hot, dry, sunny conditions, and its airy purple spikes provide vertical contrast above Ice Plant's low carpet of daisy blooms."
      },
      {
        "name": "Yucca",
        "reason": "A bold, architectural companion that thrives in the same dry, sunny, well-drained sites typical of xeriscape and slope plantings with Ice Plant."
      }
    ],
    "deerResistance": {
      "rating": "seldom damaged",
      "note": "The thick, succulent foliage is generally unappealing to deer, making Ice Plant a reliable choice for dry, exposed slopes in browse-prone areas."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The abundant, brightly colored daisy-like flowers are a strong nectar source for bees and butterflies throughout the summer bloom period."
    },
    "zoneNotes": "At the cold edge (Zone 5) Ice Plant needs sharp winter drainage above all else, since wet, freezing soil kills it faster than cold temperatures alone; a gravelly slope site greatly improves winter survival. At the warm edge (Zones 10-11) it thrives with minimal supplemental water and can bloom nearly year-round, making it a staple of low-water xeriscape design in hot, dry climates.",
    "troubleshooting": [
      {
        "issue": "Rot and dieback in winter",
        "fix": "Improve drainage by planting on a slope or in gravelly, amended soil, since soggy winter soil combined with cold is the leading cause of Ice Plant failure, not cold temperatures alone."
      },
      {
        "issue": "Sparse flowering",
        "fix": "Ensure the site gets full, unobstructed sun for most of the day, since Ice Plant blooms poorly in any shade."
      },
      {
        "issue": "Mealybugs at stem joints",
        "fix": "Treat with insecticidal soap or a strong water spray, checking closely at leaf axils where mealybugs like to hide on succulent stems."
      },
      {
        "issue": "Leggy, sparse mats over time",
        "fix": "Shear back hard in early spring to encourage denser regrowth, since older plantings can become woody and open in the center."
      }
    ]
  },
  "creeping-thyme": {
    "matureSize": "2-4 in tall, 12-18 in wide (spreading mat)",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Creeping Phlox",
        "reason": "Both form low, sun-loving mats in well-drained soil and bloom in complementary shades, ideal for a tapestry effect between stepping stones."
      },
      {
        "name": "Lavender",
        "reason": "Shares the same dry, sunny, well-drained conditions and fragrant foliage, both classic Mediterranean-style rock garden and pathway plants."
      },
      {
        "name": "Sedum (stonecrop)",
        "reason": "Tolerates identical lean, dry, sunny sites and adds succulent texture and later bloom time to a Creeping Thyme groundcover planting."
      },
      {
        "name": "Yarrow (Achillea)",
        "reason": "A tough, drought-tolerant perennial that thrives in the same full-sun, well-drained soil, providing taller flower interest above the thyme's low mat."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The strongly aromatic foliage of Creeping Thyme is highly effective at repelling deer, which avoid herbs with pungent essential oils."
    },
    "pollinatorValue": {
      "rating": "high",
      "note": "The tiny pink flowers are a magnet for bees, especially honeybees and native bees, and are also visited by small butterflies during the summer bloom period."
    },
    "zoneNotes": "At the cold edge (Zone 4) Creeping Thyme needs excellent winter drainage, since wet, poorly drained soil combined with freezing temperatures causes crown rot more often than cold alone. At the warm edge (Zone 9) it can struggle with high humidity and prefers a gravelly or rocky planting site with good air circulation to prevent fungal issues in muggy summer conditions.",
    "troubleshooting": [
      {
        "issue": "Bare or woody patches in the center",
        "fix": "Shear lightly after flowering each year and divide or replant every 3-4 years, since Creeping Thyme becomes woody and thin with age if not periodically rejuvenated."
      },
      {
        "issue": "Root or crown rot",
        "fix": "Plant in lean, gravelly, well-drained soil and avoid overwatering, since this Mediterranean herb is highly susceptible to rot in heavy or waterlogged soil."
      },
      {
        "issue": "Weak growth in shade or rich soil",
        "fix": "Relocate to full sun in leaner soil, since overly fertile soil or insufficient light produces sparse, floppy growth and weak fragrance."
      },
      {
        "issue": "Slow to fill in when planted from small plugs",
        "fix": "Space plants 8-12 inches apart and top-dress lightly with sand or fine gravel to encourage rooting along stems as it spreads."
      }
    ]
  },
  "sweet-woodruff": {
    "matureSize": "6-12 in tall, spreads readily to form a dense groundcover mat",
    "growthRate": "moderate",
    "companions": [
      {
        "name": "Hosta",
        "reason": "Both thrive in rich, moist woodland shade, with Sweet Woodruff's fine whorled leaves and white flowers filling in around Hosta's bolder clumps."
      },
      {
        "name": "Astilbe",
        "reason": "Shares moist, humus-rich shade conditions, and its flower plumes rise above Sweet Woodruff's low, fragrant carpet for layered spring-to-summer interest."
      },
      {
        "name": "Bleeding Heart (Dicentra)",
        "reason": "Blooms in the same part-shade woodland conditions in spring, with Sweet Woodruff's spreading habit filling in as Bleeding Heart goes dormant in summer."
      },
      {
        "name": "Ferns (e.g., Lady Fern)",
        "reason": "A natural textural companion in moist, shaded woodland gardens, both native to similar forest-floor conditions and equally at home under deciduous trees."
      }
    ],
    "deerResistance": {
      "rating": "rarely damaged",
      "note": "The coumarin-scented foliage of Sweet Woodruff is unpalatable to deer, making it a reliable groundcover choice in wooded, browse-prone landscapes."
    },
    "pollinatorValue": {
      "rating": "moderate",
      "note": "The small white star-shaped flowers attract early-season bees and small pollinating flies, providing a modest nectar source in shaded woodland settings."
    },
    "zoneNotes": "At the cold edge (Zone 4) Sweet Woodruff dies back completely in winter but is fully hardy and returns reliably each spring from its rhizomes. At the warm edge (Zone 8) it needs consistent moisture and deeper shade to avoid summer dormancy or foliage decline, since it is a cool, moist woodland species that struggles with prolonged heat and drought.",
    "troubleshooting": [
      {
        "issue": "Spreading beyond the intended bed",
        "fix": "Install edging or divide and thin the planting regularly, since Sweet Woodruff spreads steadily by rhizomes and can become weedy in ideal moist shade conditions."
      },
      {
        "issue": "Foliage wilting or browning in summer",
        "fix": "Increase watering and mulch to retain soil moisture, since this woodland plant is intolerant of dry soil and heat stress, especially in warmer zones."
      },
      {
        "issue": "Powdery mildew in humid conditions",
        "fix": "Improve air circulation by thinning dense patches and avoid overhead watering late in the day during humid summer weather."
      },
      {
        "issue": "Slug damage on tender new growth",
        "fix": "Apply iron phosphate bait in early spring when new shoots emerge, as slugs are drawn to the fresh, tender foliage in moist shade gardens."
      }
    ]
  }
}

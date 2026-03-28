export const rainGardenContent = {
  id: 'rain-garden',
  hero: {
    emoji: '🌧️',
    title: 'Rain Garden',
    subtitle: 'Turn Runoff Into an Asset — A Planted Depression That Filters, Absorbs, and Beautifies',
  },
  intro: 'Every time it rains, water that once soaked into the ground now rushes off rooftops, driveways, and compacted lawns — carrying pollutants into storm drains, streams, and groundwater. A rain garden intercepts that runoff, holds it in a shallow planted depression, and allows it to slowly infiltrate into the soil — cleaning it, recharging groundwater, and transforming a landscape liability into one of the most ecologically productive features a homeowner can build. This guide shows you how to design, build, plant, and connect a rain garden anywhere in America — from concept through long-term care.',
  sections: [
    {
      id: 'what-is-a-rain-garden',
      title: 'Section 1: What Is a Rain Garden?',
      blocks: [
        {
          type: 'p',
          text: 'A rain garden is a shallow, planted depression — typically 4 to 8 inches deep — designed to collect and temporarily hold stormwater runoff from impervious surfaces like rooftops, driveways, patios, and compacted lawns. Unlike a pond, which holds water permanently, a properly designed rain garden drains within 24 to 48 hours after a storm — it is not a standing-water feature and does not create mosquito habitat.',
        },
        {
          type: 'p',
          text: 'The planted depression is filled with specially prepared soil that drains faster than native soil, and planted with deep-rooted native plants whose extensive root systems create channels for water infiltration, take up water through transpiration, and filter contaminants as water percolates through the root zone. The result is a landscaping feature that is simultaneously functional, ecologically valuable, and — when well-planted — genuinely beautiful.',
        },
        {
          type: 'p',
          text: 'Rain gardens have been studied and promoted by watershed scientists, cooperative extension services, and environmental agencies across the United States for decades. The research is consistent: a properly sited and sized rain garden can capture and infiltrate 30 to 40 percent more water than a conventional lawn of the same size. When deployed across a neighborhood or watershed at scale, rain gardens dramatically reduce flooding, stream bank erosion, and nonpoint source pollution.',
        },
        {
          type: 'h3',
          text: 'The Stormwater Problem Rain Gardens Solve',
        },
        {
          type: 'table',
          headers: ['The Problem', 'What Happens', 'U.S. Scale', 'Rain Garden Solution'],
          rows: [
            [
              'Increased runoff volume',
              'Impervious surfaces shed 50–95% of rainfall as surface runoff rather than allowing infiltration; natural landscapes absorb 50–70%',
              'The average home generates 3,000–5,000 gallons of runoff from a single inch of rain on its roof',
              'A properly sized rain garden captures and infiltrates the runoff from 1–1.5 inches of rain from its contributing drainage area',
            ],
            [
              'Water quality degradation',
              'Runoff picks up fertilizers, pesticides, pet waste, oil, heavy metals, and sediment; all flow untreated into storm drains and directly to waterways',
              'Nonpoint source pollution from stormwater is the leading cause of water quality impairment in U.S. rivers, lakes, and coastal waters (EPA)',
              'Rain garden plants and soils filter up to 80% of nitrogen, 70% of phosphorus, and significant percentages of heavy metals and bacteria',
            ],
            [
              'Stream channel damage',
              'Higher runoff volumes cause streams to run higher and faster after each storm, eroding banks, destroying habitat, and destabilizing channels',
              'More than half of U.S. stream miles are assessed as impaired; urban stormwater is a major contributing factor across all regions',
              'Slowing and infiltrating runoff reduces peak flows that cause channel erosion; a neighborhood of rain gardens measurably improves downstream stream health',
            ],
            [
              'Groundwater depletion',
              'Surface runoff channeled away never recharges aquifers; in regions dependent on groundwater, development accelerates overdraft',
              'Aquifer levels are declining across the Great Plains, Southwest, and Southeast',
              'Infiltrating stormwater recharges local groundwater, supporting baseflow in streams and replenishing wells in rural and suburban areas',
            ],
            [
              'Flooding and basement issues',
              'Concentrated surface runoff causes local flooding, overwhelms storm sewer capacity, and increases basement water problems',
              'Billion-dollar flood events have become annual occurrences in many American cities',
              'Capturing and infiltrating runoff close to where it falls reduces downstream accumulation and peak storm sewer loading',
            ],
          ],
        },
        {
          type: 'h3',
          text: 'What Makes a Rain Garden Different from Other Features',
        },
        {
          type: 'table',
          headers: ['Feature', 'How It Works', 'Drains?', 'Planted?', 'Filters Water?', 'Best For'],
          rows: [
            ['Rain Garden', 'Shallow planted depression with amended soil; temporarily holds and infiltrates stormwater', 'Yes — 24–48 hrs', 'Yes — natives preferred', 'Yes — soil and roots', 'Residential and commercial runoff capture; any lot size'],
            ['Retention Pond', 'Permanent pool holds water long-term; some infiltration around edges', 'No — permanent water', 'Optional', 'Some — sedimentation', 'Large-scale stormwater for subdivisions; not typical for individual yards'],
            ['Detention Basin', 'Holds water temporarily then releases slowly through a drain outlet; does not infiltrate', 'Yes — outlet', 'Sometimes', 'Minimal', 'Large-scale volume control; typically public infrastructure'],
            ['Bioswale', 'Linear channel; designed for conveying and infiltrating water along a flow path', 'Yes — infiltration and overflow', 'Yes', 'Yes', 'Linear drainage areas; roadside strips; connecting features to rain gardens'],
            ['French Drain', 'Underground perforated pipe in gravel trench; moves water to another location; does not infiltrate on-site', 'Yes — relocates water', 'No', 'No', 'Moving water away from foundations; not a stormwater quality solution'],
            ['Dry Creek Bed', 'Decorative gravel channel; conveys water aesthetically; can be combined with rain gardens as inlet feature', 'Partially', 'Optional', 'Minimal', 'Aesthetic water conveyance; often used as a feeding element for a rain garden'],
            ['Rain Barrel / Cistern', 'Captures roof runoff for later use; storage-based solution', 'Release controlled', 'No', 'No', 'Water conservation; best combined with rain garden for overflow management'],
          ],
        },
        {
          type: 'tip',
          emoji: '🏛️',
          text: 'Incentives and Rebates Across America: Many cities, counties, water utilities, and state agencies offer financial incentives for installing rain gardens — including rebates ($50–500+), stormwater utility bill credits, free native plants, free soil testing, and design assistance. Search "[your city/county] rain garden rebate" or "[your state] stormwater incentive program." States with particularly robust programs include Maryland, Virginia, Minnesota, Wisconsin, Pennsylvania, and Oregon.',
        },
      ],
    },
    {
      id: 'siting-and-sizing',
      title: 'Section 2: Siting and Sizing',
      blocks: [
        {
          type: 'p',
          text: 'The single most important decision in rain garden design is where you put it. Location determines whether the garden receives runoff effectively, drains properly, avoids potential harm to structures, and integrates gracefully into your landscape. Spend more time on siting than on any other planning step — a poorly located rain garden is at best ineffective and at worst damaging.',
        },
        {
          type: 'h3',
          text: 'The Non-Negotiable Siting Rules',
        },
        {
          type: 'table',
          headers: ['Rule', 'Minimum Distance / Requirement', 'Why It Matters'],
          rows: [
            ['Distance from house foundation', 'Minimum 10 feet; 15–25 feet recommended', 'Water infiltrating near your foundation can migrate into a basement or crawlspace; the most critical safety rule'],
            ['Distance from septic system', 'Minimum 25 feet from septic tank; 50–100 feet from drain field', 'Saturating soil near a septic system can cause system failure; check local codes as requirements vary by state and county'],
            ['Distance from well', 'Minimum 50–100 feet from drinking water well', 'Protects drinking water from potential contaminants in stormwater; check local well setback requirements'],
            ['Distance from buried utilities', 'Minimum 5 feet from any buried utility line; call 811 before excavating', 'Digging into utility lines is dangerous and expensive; 811 is free and legally required in most states before any excavation'],
            ['Distance from property line', 'Minimum 2–5 feet from property line; check local codes', 'Prevents runoff from being directed onto neighboring property'],
            ['Slope of site', 'Best: gentle natural slope of 2–12% leading water to the garden', 'Steeper slopes create faster, more erosive water flow; may require terracing or a bioswale inlet to convey water safely'],
            ['Soil drainage', 'Soil must drain at least 0.5 inches per hour; always test before building', 'Clay soils that drain too slowly create standing water longer than 48 hours, causing plant death and mosquito problems'],
            ['Flood plain / wetland', 'Do not build in FEMA-designated flood plains or regulated wetlands without permits', 'May be prohibited, and can expose rain gardens to overwhelming flood volumes they are not designed to handle'],
            ['Overhead utilities', 'Keep large trees at least 20 feet from overhead power lines', 'Large trees near power lines require frequent trimming or pose safety hazards; choose appropriately sized plants near utilities'],
          ],
        },
        {
          type: 'h3',
          text: 'Finding the Best Location on Your Property',
        },
        {
          type: 'list',
          items: [
            'Observe your yard during or after heavy rain: Watch where water flows, where it pools, and what path it takes. This natural drainage pattern tells you where a rain garden will receive water most easily.',
            'Identify your primary contributing drainage area: What surfaces drain to the location you\'re considering? A roof downspout, a section of driveway, a sloped lawn area, or a combination? Knowing the contributing area is essential for sizing.',
            'Look for natural low spots: Existing depressions, areas where grass stays green longer after rain, or spots where water puddles briefly after a storm are natural candidates — they already receive runoff and may only need modest reshaping.',
            'Consider visibility and aesthetics: A well-planted rain garden is a garden feature worth showcasing. Front yard placement near a downspout is increasingly popular — it demonstrates environmental responsibility visibly and adds curb appeal.',
            'Check sun exposure: Most rain garden plants prefer full sun (6+ hours). Shaded locations under trees limit your plant palette and may slow infiltration due to root competition.',
            'Consider overflow: Every rain garden needs an overflow path for storms that exceed its capacity. Identify where overflow would naturally flow and ensure it will not cause erosion or flood neighboring properties.',
          ],
        },
        {
          type: 'h3',
          text: 'How to Size Your Rain Garden',
        },
        {
          type: 'p',
          text: 'Sizing a rain garden correctly is the most technical part of the design process — but it doesn\'t require an engineering degree. The goal is to size the rain garden so that it can hold and infiltrate the runoff from a 1-inch design storm from its contributing drainage area within 24–48 hours.',
        },
        {
          type: 'h3',
          text: 'Step 1: Calculate Your Drainage Area',
        },
        {
          type: 'list',
          items: [
            'Roof area: Measure the footprint of the roof section draining to the relevant downspout (typically 500–1,500 sq ft per downspout)',
            'Driveway/patio: Measure the full impervious surface area that slopes toward the garden location',
            'Lawn area: Measure any lawn sections that slope into the proposed area; multiply by 0.3 (lawns shed only about 30% of rainfall as runoff)',
            'Add these together for your total contributing drainage area in square feet',
          ],
        },
        {
          type: 'h3',
          text: 'Step 2: Determine Your Soil Infiltration Rate',
        },
        {
          type: 'table',
          headers: ['Soil Type', 'Infiltration Rate', 'Description', 'Sizing Factor', 'Amendment Needed?'],
          rows: [
            ['Sandy / Gravelly', '1.0–3.0+ in/hr', 'Gritty texture; drains within minutes to hours; does not clump; common in coastal plains, river valleys, and arid West', '20–25% of drainage area', 'Add organic matter to improve water retention and filtration capacity'],
            ['Sandy Loam', '0.5–1.0 in/hr', 'Good all-around soil; crumbles easily; ideal for rain gardens', '25–30% of drainage area', 'Minimal — add compost for plant establishment'],
            ['Loam / Silt Loam', '0.3–0.5 in/hr', 'Balanced mineral mix; moderate drainage; common across Midwest and Mid-Atlantic', '30–35% of drainage area', 'Moderate — adding 30–40% coarse sand improves drainage; or use rain garden mix in excavated area'],
            ['Clay Loam', '0.1–0.3 in/hr', 'Significant clay content; the most common home garden soil type', '35–45% of drainage area', 'Yes — excavate 18–24 inches and backfill with rain garden soil mix'],
            ['Clay (heavy)', 'Below 0.1 in/hr', 'Sticky, plastic when wet; cracks when dry; very slow drainage; common in Southeast, Midwest, and coastal areas', '45–60% or engineered underdrain', 'Required — excavate 24–36 inches; backfill with amended mix; may need perforated underdrain pipe'],
          ],
        },
        {
          type: 'tip',
          emoji: '📐',
          text: 'Step 3 — The Sizing Formula: Rain Garden Area (sq ft) = Contributing Drainage Area (sq ft) × Sizing Factor. Example: 1,000 sq ft roof with loam soil (factor 0.30) = 300 sq ft rain garden. Example: 800 sq ft driveway with clay loam soil (factor 0.40) = 320 sq ft rain garden.',
        },
        {
          type: 'h3',
          text: 'The Critical Soil Infiltration Test',
        },
        {
          type: 'list',
          items: [
            'Dig a 12-inch deep hole at your proposed location',
            'Fill the hole completely with water and let it drain fully — this pre-saturates the soil to simulate conditions after a prolonged rain',
            'Fill the hole again to 12 inches; mark the water surface level',
            'After 1 hour, measure how much the water level has dropped. A drop of 0.5 inches or more indicates suitable soil.',
            'If less than 0.5 in/hr: excavate and backfill with amended rain garden soil mix, or install an underdrain system',
            'If more than 6 in/hr (very sandy): add organic matter to slow infiltration and improve filtration capacity',
          ],
        },
        {
          type: 'warning',
          emoji: '📍',
          text: 'Know Before You Dig — Call 811: Before any excavation, call 811 (the national "Call Before You Dig" number) or visit 811.com. This is free and legally required in most states. Utility companies will mark buried electrical, gas, water, sewer, and telecommunications lines within a few business days. Digging into an unmarked utility line is extremely dangerous. Always call first.',
        },
      ],
    },
    {
      id: 'design-and-construction',
      title: 'Section 3: Design and Construction',
      blocks: [
        {
          type: 'p',
          text: 'Rain garden construction follows a logical sequence: design the shape and cross-section, excavate the bowl, build the berm, prepare and install the soil, create an overflow structure, and install plants. Each step is achievable by a homeowner with basic tools over a weekend, though larger gardens or those in challenging soils may benefit from professional assistance.',
        },
        {
          type: 'h3',
          text: 'Anatomy of a Rain Garden',
        },
        {
          type: 'table',
          headers: ['Component', 'Description', 'Key Detail'],
          rows: [
            ['Inlet area', 'The upslope edge or point where water enters the garden — a simple opening in the berm, a splash pad of river rock, or a constructed inlet channel', 'Must slow incoming water to prevent erosion; use rocks, river gravel, or dense vegetation at the point of entry'],
            ['Garden bowl', 'The excavated, flat-bottomed depression that holds water temporarily; should be level from side to side', 'Depth: 4–8 inches below surrounding grade. Deeper bowls take longer to drain and cause root problems — deeper is not better.'],
            ['Amended soil layer', 'The specially prepared growing medium that fills the bowl: fast-draining, organically rich, and appropriate for the plants selected', 'Typically 18–24 inches deep; the most important component of rain garden function'],
            ['Native soil subgrade', 'The undisturbed native soil below the amended layer; does its own infiltration work in well-draining soils', 'In clay soils, a transition gravel layer between amended soil and clay subgrade improves drainage'],
            ['Berm (downslope edge)', 'The raised earthen edge on the low side of the garden, built from the excavated soil; typically 6–12 inches above surrounding grade', 'Plant the berm with sturdy, erosion-resistant natives that handle both dry conditions and periodic wet feet'],
            ['Overflow structure', 'A designed overflow for storms exceeding capacity — a rock-armored spillway in the berm, a pipe outlet, or a bioswale leading overflow to a safe discharge point', 'Every rain garden must have a designed overflow; failure to provide one leads to berm failure in large storms'],
            ['Inlet pipe / downspout connection', 'For roof runoff, extended downspout pipe carries water to the rain garden inlet; buried or protected from damage', 'Ensure pipe is disconnected from the storm sewer — see Section 4 for full connection guidance'],
            ['Mulch layer', '2–3 inch layer of shredded hardwood mulch covers the soil surface in the bowl (not the berm)', 'Use chunky shredded hardwood that knits together — not fine bark that floats away in storm flows'],
          ],
        },
        {
          type: 'h3',
          text: 'Rain Garden Soil Mix: The Critical Component',
        },
        {
          type: 'list',
          items: [
            'Standard Rain Garden Soil Mix (for most sites): 50–60% coarse sand (concrete sand or washed torpedo sand — NOT fine beach sand or play sand, which compact and clog); 20–30% compost (finished, mature compost — not fresh manure or wood chips); 20–25% existing topsoil or native soil (adds biological activity and soil microbes). The mix should be loose, crumbly, and drain quickly when squeezed in your hand.',
            'High-Performance Mix (for heavy clay or high-pollution sites): 50% coarse sand or 3/8-inch washed gravel for maximum drainage; 30% compost; 20% native soil or biochar (biochar improves filtration of heavy metals and hydrocarbons).',
          ],
        },
        {
          type: 'tip',
          emoji: '📄',
          text: 'State-Specific Soil Mix Guidance: Many state cooperative extension services and stormwater programs publish region-specific rain garden soil mix specifications. Search "[your state] rain garden guide PDF" or check your state\'s Department of Environmental Quality, Department of Natural Resources, or land-grant university extension website for downloadable specifications tailored to local conditions.',
        },
        {
          type: 'h3',
          text: 'Step-by-Step Construction',
        },
        {
          type: 'list',
          items: [
            'Mark the rain garden outline: Use marking paint, flour, or a garden hose to mark the shape. Kidney, teardrop, and crescent shapes work well — avoid perfect circles or squares, which look artificial.',
            'Remove existing turf and vegetation: Strip sod within the bowl area; compost or use it to reinforce the berm.',
            'Excavate the bowl: Dig to the design depth. Keep the bottom as level as possible from side to side — use a carpenter\'s level or laser level to check. The bottom should be flat, not sloped or rounded.',
            'Build the berm: Pile excavated soil on the downslope side, compacting in 4–6 inch layers by tamping firmly. Berm top should be 6–8 inches above the surrounding grade. Slope berm sides at 3:1 (horizontal:vertical) to resist erosion.',
            'Install underdrains if needed: In heavy clay soils, lay 4-inch perforated PVC pipe in a 6-inch gravel bed at the bottom of the excavation before adding soil mix. Outlet should discharge to a safe location downslope.',
            'Install transition layer (clay soils): Spread a 4–6 inch layer of pea gravel or 3/8-inch washed stone directly on the excavated bottom before adding soil mix.',
            'Fill with rain garden soil mix: Add prepared soil mix to design depth. The soil surface should be 4–6 inches below the top of the berm. Tamp lightly — do not compact aggressively.',
            'Create the inlet: At the upslope entry point, line the inlet area with river rock or pea gravel 12–18 inches wide to absorb the energy of incoming water.',
            'Create the overflow: At the downslope end of the berm, create an armored spillway lined with large river rock (3–5 inch stone set 6 inches deep) that channels overflow safely away.',
            'Install plants: Plant while soil is moist but not saturated; water in thoroughly. See Section 5 for plant selection guidance.',
            'Apply mulch: Cover all bare soil with 2–3 inches of shredded hardwood mulch; keep mulch away from plant crowns.',
            'Test with a hose: Before the first real rain, run a garden hose into the inlet for 30 minutes. Observe water entry, distribution, and overflow function. Make adjustments before plants are established.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌧️',
          text: 'Timing Your Installation: The best time to build a rain garden is late summer through fall in most U.S. regions — soil is workable, temperatures are moderate for plant establishment, and fall rains help plants root before winter. Spring is the second-best option. In the Southeast and Gulf Coast, late fall through winter is ideal. Avoid building during frozen ground, drought, or during heavy-rain periods when soils are saturated.',
        },
      ],
    },
  ],
}

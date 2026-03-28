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
  ],
}

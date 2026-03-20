export const rainBarrelContent = {
  id: 'rain-barrel',
  hero: {
    emoji: '💧',
    title: 'Starting a Rain Barrel',
    subtitle: 'Collect and Store Rainwater for Free, Sustainable Garden Irrigation',
  },
  intro:
    'Outdoor irrigation accounts for roughly 30 percent of household water use nationwide — and in arid western states it routinely climbs to 60 to 70 percent during summer. A single rain barrel can offset a meaningful portion of that demand using water that would otherwise run off your roof, pick up pollutants on paved surfaces, overwhelm storm drains, and contribute to downstream flooding and erosion. Collected rainwater is often better for plants than tap water: it is unchlorinated, slightly acidic, and at ambient temperature. This guide covers everything from the legal framework through barrel selection, installation, plumbing, overflow management, water quality, seasonal maintenance, and scaling up to cistern systems.',
  sections: [

    // ─── INTRO: AT A GLANCE ──────────────────────────────────────────────────
    {
      id: 'at-a-glance',
      title: 'Why Collect Rainwater? At a Glance',
      blocks: [
        {
          type: 'p',
          text: 'The math is simple but striking: a 1,000-square-foot roof sheds approximately 600 gallons of water per inch of rainfall. A single 1.5-inch rain event — not unusual anywhere in the United States — produces 900 gallons from that roof alone. A standard 55-gallon rain barrel captures what falls on about 90 square feet of that roof; a pair of linked barrels captures twice as much. A modest cistern system captures thousands of gallons from a single storm.',
        },
        {
          type: 'p',
          text: 'Rain barrels represent one of the most accessible sustainable home improvements available — they require no special skills, a modest investment of $30 to $200 for a basic setup, and produce tangible, measurable results immediately. They are also a gateway into a broader understanding of how water moves through residential landscapes and how thoughtful design can keep more of that water on-site and working for the garden.',
        },
        {
          type: 'table',
          headers: ['Component', 'Purpose', 'Typical Cost', 'DIY Difficulty'],
          rows: [
            ['Barrel or tank (55–100 gal)', 'Primary storage vessel; captures downspout flow', '$30–$150 purchased; $15–$30 DIY repurposed', 'Easy'],
            ['Downspout diverter or link', 'Connects the barrel to the existing downspout without permanent modification', '$15–$40', 'Very easy'],
            ['Spigot / faucet', 'Low-drain spigot for hose connection; usually included in commercial barrels', 'Included or $5–$10 additional', 'Easy'],
            ['Overflow fitting and hose', 'Directs excess water away from foundation when barrel is full', '$5–$15', 'Easy'],
            ['First-flush diverter (optional)', 'Discards the first, dirtiest flow from the roof before collecting; improves water quality', '$20–$50 commercial; $10–$20 DIY PVC', 'Moderate'],
            ['Elevated platform or stand', 'Raises barrel 12–24 inches to create gravity pressure at the spigot; enables gravity irrigation', '$20–$60 lumber; $30–$80 commercial stand', 'Easy–Moderate'],
            ['Linking hardware (multiple barrels)', 'Overflow port, connecting hose, and fittings to chain barrels together', '$10–$25 per additional barrel connection', 'Moderate'],
            ['Mosquito screen / sealed lid', 'Prevents mosquito breeding; keeps debris out of stored water', 'Usually included; screen repair $5–$10', 'Easy'],
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Many water utilities, municipalities, and state agencies offer rebates for installing rain barrels — cash payments per barrel, subsidized barrel programs, or discounts through one-day distribution events. Search your water utility\'s website for "water conservation rebates" or "outdoor water rebates" before purchasing anything.',
        },
      ],
    },

  ],
}

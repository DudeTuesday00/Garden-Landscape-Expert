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

    // ─── SECTION 1: THE LEGAL LANDSCAPE ─────────────────────────────────────
    {
      id: 'legal-landscape',
      title: 'Section 1: The Legal Landscape — State Laws, Restrictions & Rebates',
      blocks: [
        {
          type: 'p',
          text: 'Rainwater collection law in the United States is a patchwork of state-by-state regulation that reflects the very different water law traditions of the eastern and western halves of the country. In most of the East, rainwater collection is unregulated and often encouraged. In some western states, it has historically been prohibited or restricted under prior appropriation water law — though this is changing rapidly as drought concerns drive policy reform. Before installing a rain barrel system, it is your responsibility to understand your state\'s current regulations.',
        },
        {
          type: 'h3',
          text: 'The Water Law Divide: East vs. West',
        },
        {
          type: 'p',
          text: 'Eastern water law is generally based on riparian rights — the principle that landowners have the right to use water that flows through their property. In this framework, collecting rainwater that falls on your roof is simply using water already on your property and is unrestricted in most eastern states. Western water law is generally based on prior appropriation — the principle that water rights are established by historical use and belong to specific rights-holders rather than to the landowner. Under strict prior appropriation doctrine, rainwater falling on your property was historically considered part of a stream\'s water supply and "belonged" to downstream water rights holders. This doctrine led several western states to prohibit or severely restrict residential rainwater collection for much of the 20th century. However, the ongoing western drought crisis has driven significant legislative reform since the early 2000s, and most western states now permit residential rainwater collection with varying limits.',
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'Laws Change — Always Verify. The information below reflects the general regulatory status of rainwater collection as of 2024–2025. State laws and regulations change frequently, and local municipalities may have additional rules or incentives beyond state law. Always verify current regulations with your state\'s department of natural resources, environmental quality, or water resources before installing a system. Many state cooperative extension services publish updated rainwater harvesting guides specific to their state.',
        },
        {
          type: 'table',
          headers: ['State / Region', 'Legal Status', 'Volume Limits', 'Permitted Uses', 'Incentives / Notes'],
          rows: [
            ['Alabama', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No specific regulations; encouraged'],
            ['Alaska', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Low precipitation concern; no restrictions'],
            ['Arizona', 'Legal; regulated', 'None for residential rooftop collection', 'Outdoor irrigation; not for drinking without treatment', 'Actively encouraged; rebates available from many municipal water providers (Tucson Water, Phoenix area utilities)'],
            ['Arkansas', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No specific restrictions'],
            ['California', 'Legal', 'None for residential', 'All non-potable uses; may be used for potable with treatment under certain permits', 'Strongly encouraged; many local water agencies offer significant rebates ($50–$200+ per barrel or per gallon of capacity)'],
            ['Colorado', 'Legal since 2016 (HB16-1005)', 'Two 110-gallon barrels per household (220 gallons total)', 'Outdoor irrigation of plants on the property where collected', 'Significant legal change from historical prohibition; Senate Bill 09-080 amended prior appropriation doctrine; strict volume and use limits apply'],
            ['Connecticut', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Several municipalities offer rain barrel sales and rebates'],
            ['Delaware', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Encouraged; no restrictions'],
            ['Florida', 'Legal', 'None', 'Outdoor irrigation; indoor non-potable where permitted by local code', 'Strongly encouraged; many counties offer rebates; state actively promotes rainwater harvesting'],
            ['Georgia', 'Legal', 'None for rooftop collection', 'All outdoor uses', 'Actively encouraged through extension programs; Atlanta-area utilities offer rebates'],
            ['Hawaii', 'Legal, unrestricted', 'None', 'All uses', 'Long tradition of rainwater collection; encouraged'],
            ['Idaho', 'Legal with permit for larger systems', 'Small systems typically exempt; contact Idaho IDWR for specifics', 'Non-potable outdoor irrigation typically permitted', 'Check with Idaho Department of Water Resources for current rules'],
            ['Illinois', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Chicago and other municipalities offer rain barrel programs and rebates'],
            ['Indiana', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Encouraged; no restrictions'],
            ['Iowa', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['Kansas', 'Legal', 'Check Kansas DWR for current limits', 'Outdoor use', 'Prior appropriation state; check current regulations'],
            ['Kentucky', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions; extension programs promote rainwater harvesting'],
            ['Louisiana', 'Legal, unrestricted', 'None', 'All outdoor uses', 'High rainfall state; no restrictions'],
            ['Maine', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['Maryland', 'Legal, encouraged', 'None', 'All outdoor uses; indoor non-potable in some jurisdictions', 'Prince George\'s County and others require stormwater management practices; rain barrels often count toward compliance'],
            ['Massachusetts', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Many municipalities offer rain barrel sale programs'],
            ['Michigan', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions; encouraged'],
            ['Minnesota', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions; extension programs support adoption'],
            ['Mississippi', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['Missouri', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions; utility programs may offer rebates'],
            ['Montana', 'Legal', '2,500 gallons (small system)', 'Outdoor irrigation', 'HB 284 (2017) legalized residential collection with volume limits; check current Montana DNRC rules'],
            ['Nebraska', 'Legal', 'Check Nebraska DNR for current rules', 'Outdoor irrigation', 'Prior appropriation state; evolving regulations; verify current status'],
            ['Nevada', 'Legal', 'No stated maximum for residential', 'Outdoor irrigation', 'Nevada Division of Water Resources encourages residential collection; check local regulations'],
            ['New Hampshire', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['New Jersey', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Municipal programs frequently offer subsidized rain barrels'],
            ['New Mexico', 'Legal, encouraged', 'No volume limit for residential rooftop', 'All outdoor uses; some indoor non-potable permitted', 'Strong state support; tax deduction available for rainwater harvesting systems'],
            ['New York', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Many municipalities offer subsidized rain barrel programs'],
            ['North Carolina', 'Legal, unrestricted', 'None', 'Outdoor uses; some indoor non-potable permitted by code', 'Encouraged; many extension programs'],
            ['North Dakota', 'Legal; verify current rules', 'Check North Dakota Dept. of Environmental Quality', 'Outdoor uses', 'Verify current rules with state agency'],
            ['Ohio', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions; extension support'],
            ['Oklahoma', 'Legal, encouraged', 'None for residential', 'All outdoor uses', 'Actively encouraged; Oklahoma Water Resources Board supports rainwater harvesting'],
            ['Oregon', 'Legal', 'Rooftop collection generally permitted; larger systems may need permit', 'Outdoor irrigation', 'Oregon Water Resources Dept. has specific guidance; check current rules for larger systems'],
            ['Pennsylvania', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Philadelphia and other cities actively promote and subsidize rain barrels'],
            ['Rhode Island', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['South Carolina', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['South Dakota', 'Legal; verify current rules', 'Check South Dakota DANR for current status', 'Outdoor uses', 'Check South Dakota DANR for current status'],
            ['Tennessee', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions; extension programs support adoption'],
            ['Texas', 'Legal, encouraged', 'No volume limit for residential rooftop', 'All outdoor uses; some indoor non-potable permitted', 'One of the strongest state frameworks in the US; tax exemption on equipment; HOAs cannot prohibit rain barrels under state law; many utilities offer rebates'],
            ['Utah', 'Legal since 2010', '2 barrels / 200 gallons per household', 'Outdoor irrigation of garden on same property', 'Utah code 73-3-1.5; prior appropriation state with specific residential exemption; volume limits strictly apply'],
            ['Vermont', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['Virginia', 'Legal, encouraged', 'None', 'All outdoor uses; some indoor non-potable', 'Northern Virginia and others offer rebates; Fairfax Water has active programs'],
            ['Washington', 'Legal', 'Rooftop collection generally permitted; check Ecology Dept. for larger systems', 'Outdoor irrigation; some indoor uses with proper permits', 'Washington Dept. of Ecology has specific guidance; residential rooftop collection encouraged'],
            ['West Virginia', 'Legal, unrestricted', 'None', 'All outdoor uses', 'No restrictions'],
            ['Wisconsin', 'Legal, unrestricted', 'None', 'All outdoor uses', 'Madison and other cities offer subsidized programs'],
            ['Wyoming', 'Legal', 'Check Wyoming State Engineer for current rules', 'Outdoor uses', 'Prior appropriation state; verify current residential provisions'],
          ],
        },
        {
          type: 'h3',
          text: 'Rebates, Incentives & Subsidized Programs',
        },
        {
          type: 'p',
          text: 'In addition to state law, many local water utilities, municipalities, and regional water authorities offer financial incentives to encourage residential rainwater collection. These programs vary enormously by location and change frequently, but can dramatically reduce the cost of installation.',
        },
        {
          type: 'list',
          items: [
            'Cash rebates: Many utilities offer cash rebates per barrel installed (often $50–$100) or per gallon of storage capacity added. Southern California water agencies, Tucson Water, Denver Water, and many Texas water utilities have active rebate programs. Check your water utility\'s conservation program website first.',
            'Subsidized or free barrel programs: Many municipalities partner with local suppliers to offer rain barrels at a steep discount (often $20–$40 for a barrel that retails for $80–$120) through a one-day distribution event or ongoing program. Search "[your city] rain barrel program" to find current offerings.',
            'Tax incentives: New Mexico offers a tax deduction for qualified rainwater harvesting systems. Texas exempts rainwater harvesting equipment from sales tax. Oregon has offered tax credits for larger systems. Check your state revenue department for current programs.',
            'HOA protections: Several states including Texas, California, Colorado, and Florida have passed laws preventing HOAs from prohibiting rainwater collection systems. If you live in an HOA, check your state\'s current law before assuming a prohibition is enforceable.',
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'To find local programs, search your water utility\'s website for "water conservation rebates" or "outdoor water rebates"; your state extension service\'s rainwater harvesting page; your state environmental quality agency\'s website; and the EPA WaterSense program website for links to local utility programs.',
        },
      ],
    },

  ],
}

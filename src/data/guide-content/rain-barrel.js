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

    // ─── SECTION 2: HOW MUCH WATER CAN YOU COLLECT? ──────────────────────────
    {
      id: 'collection-potential',
      title: 'Section 2: How Much Water Can You Collect?',
      blocks: [
        {
          type: 'p',
          text: 'Understanding your potential collection volume is the foundation of system design. It tells you how large your storage needs to be, whether a single barrel is sufficient or whether a cistern is warranted, and how much of your garden irrigation need can realistically be offset by harvested rainwater.',
        },
        {
          type: 'h3',
          text: 'The Collection Formula',
        },
        {
          type: 'p',
          text: 'The amount of water collectible from a roof is determined by three variables: the rainfall amount, the roof area draining to the collection point, and a collection efficiency factor that accounts for evaporation, splash, and first-flush losses.',
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'The Collection Formula: Gallons Collectible = Rainfall (inches) × Roof Area (sq ft) × 0.623 × Efficiency Factor. The constant 0.623 converts rainfall depth and area into gallons (1 inch of rain over 1 square foot = 0.623 gallons). Use an efficiency factor of 0.85 for smooth metal or asphalt roofing; reduce to 0.75–0.80 for rough or older shingle roofing. Example: A downspout draining 500 sq ft in a location receiving 1 inch of rain: 1 × 500 × 0.623 × 0.85 = 265 gallons per rain event. A 55-gallon barrel fills after only 0.21 inches of rain from that roof area.',
        },
        {
          type: 'h3',
          text: 'Roof Area Calculation',
        },
        {
          type: 'p',
          text: 'You don\'t need to measure your roof directly. The "footprint" — the horizontal area it covers, measured from the eaves, not along the slope — is what determines collection. Measure the outside dimensions of your house at ground level and multiply length by width for a rectangular home. For L-shaped or more complex footprints, break it into rectangles and sum them. Then divide the total footprint by the number of downspouts to estimate what each downspout serves.',
        },
        {
          type: 'list',
          items: [
            'In a typical 1,500 sq ft ranch-style home with four downspouts, each downspout drains approximately 375 sq ft.',
            'In a 2,500 sq ft two-story home with six downspouts, each drains about 415 sq ft.',
            'Garage and outbuilding downspouts can be excellent collection points: the roof is often simpler (one or two downspouts draining the full footprint), the drainage area is clean, and the location is convenient for a garden barrel.',
          ],
        },
        {
          type: 'h3',
          text: 'Annual Rainfall by Region: Collection Potential',
        },
        {
          type: 'table',
          headers: ['Region', 'Average Annual Rainfall', 'Primary Rain Season', 'Collection Potential (500 sq ft roof)', 'System Sizing Notes'],
          rows: [
            ['Pacific Northwest (western WA, OR)', '35–60+ inches/year', 'October–May (winter-wet, summer-dry)', 'Up to 14,000 gal/year theoretical; summer supply limited', 'Large storage capacity pays off — large winter events; nearly zero summer rain means collected water is very valuable in summer'],
            ['Northern California coast', '20–40 inches/year', 'October–April', 'Up to 9,000 gal/year; summer near-zero', 'Maximize storage to bridge the dry season'],
            ['Southern California / Southwest desert', '5–15 inches/year', 'Winter and summer monsoon (AZ/NM)', 'Up to 3,500 gal/year; highly variable', 'Storage premium: every drop is precious. First-flush diverter highly recommended. Larger cisterns make more sense than barrels alone.'],
            ['Great Plains (KS, NE, SD, ND)', '15–25 inches/year', 'April–September (spring/summer storms)', 'Up to 6,000 gal/year from summer events', 'High-intensity summer thunderstorms mean large storage catches large events; single barrels may overflow repeatedly'],
            ['Midwest (IL, IN, OH, MI, WI)', '30–40 inches/year', 'Distributed year-round; spring peak', 'Up to 10,000 gal/year theoretical; winter collection limited by freeze', 'Good collection potential in spring and fall; focus on spring/summer/fall collection'],
            ['Southeast (GA, AL, MS, SC, FL)', '45–60+ inches/year', 'Distributed; summer afternoon thunderstorms', 'Up to 15,000 gal/year; summer events frequent and intense', 'Very high collection potential; mosquito management is critical; overflow management essential for summer events'],
            ['Mid-Atlantic / Northeast (VA, MD, NY, PA, NE states)', '35–50 inches/year', 'Distributed year-round', 'Up to 12,000 gal/year; winter freeze limits collection', 'Strong collection potential spring through fall; spring collection especially valuable for gardens'],
            ['Texas / Southern Great Plains', '15–55 inches/year (highly variable by region)', 'Spring and fall primary; summer drought typical', '4,000–14,000 gal/year depending on location', 'Western TX: desert conditions, cisterns warranted. East TX / Gulf Coast: very high rainfall, excellent collection year-round. Central TX: variable; storage capacity determines success.'],
          ],
        },
        {
          type: 'h3',
          text: 'How Much Do You Need? Matching Storage to Use',
        },
        {
          type: 'table',
          headers: ['Garden Size / Type', 'Approximate Weekly Water Need', 'Barrels Needed for 1-Week Supply', 'Realistic System'],
          rows: [
            ['Container garden (10–15 large pots)', '20–30 gallons', '1 barrel', 'Single 55-gal barrel; refills from rain events or hose if needed'],
            ['Small raised bed (4×8 ft)', '15–25 gallons/week in moderate weather', '1 barrel', 'Single barrel; succession filling keeps up with modest demand'],
            ['Medium raised bed garden (100–200 sq ft total)', '50–100 gallons/week in summer', '2–3 linked barrels', 'Two or three linked 55-gal barrels; or a single 150–200 gal tank'],
            ['Large vegetable garden (300–500 sq ft)', '100–200 gallons/week in summer', '4–6 barrels or a small cistern', 'Linked barrel system or 250–500 gal cistern; may need multiple downspout collection points'],
            ['Large landscape / lawn supplement', '500+ gallons/week', 'Cistern system required', '500–1,500+ gallon poly cistern or underground tank; gravity or pump delivery; significant investment but significant return'],
          ],
        },
      ],
    },


    // ─── SECTION 3: CHOOSING YOUR RAIN BARREL ────────────────────────────────
    {
      id: 'choosing-your-barrel',
      title: 'Section 3: Choosing Your Rain Barrel',
      blocks: [
        {
          type: 'p',
          text: 'Rain barrels range from a repurposed 55-gallon food-grade drum to a decorative urn-style barrel to a professional 100-gallon barrel with integrated first-flush diverter. The right choice depends on your collection goals, the aesthetics of your setting, your budget, and whether you are buying a ready-made product or assembling your own from components.',
        },
        {
          type: 'h3',
          text: 'Commercial vs. DIY Rain Barrels',
        },
        {
          type: 'table',
          headers: ['Approach', 'Pros', 'Cons', 'Best For', 'Typical Cost'],
          rows: [
            ['Commercial ready-made barrel', 'Everything included; designed to work together; often aesthetically finished; typically includes screen, overflow port, and spigot; may include diverter kit', 'Higher cost; limited size options; may not match your home\'s style', 'First-time users who want a complete, tested system without assembly; decorative applications where appearance matters', '$60–$200 complete'],
            ['DIY from food-grade drum (55-gal)', 'Very low cost; widely available (food industry surplus); can customize with any fittings; widely documented build process', 'Requires drilling, fitting installation, and sourcing parts; plain industrial appearance unless painted; may be opaque and difficult to gauge water level', 'Budget-conscious DIYers; those who want to customize size, fittings, or appearance', '$15–$40 for barrel + $15–$30 for fittings = $30–$70 total'],
            ['Decorative / urn-style barrel', 'Attractive; available in various styles (terracotta, wood-look, stone-look) suitable for visible front or side yard placement', 'Higher cost for the aesthetic premium; smaller storage volume typical; same functional limitation as standard barrel', 'Front-yard or visible side-yard placement where aesthetics matter', '$100–$300+'],
            ['IBC tote (275–330 gallons)', 'Very large storage volume at relatively low cost; food-grade; widely available as agricultural surplus', 'Large and industrial in appearance; requires significant modification and screening; not suitable for visible placement without enclosure; very heavy when full (2,200+ lbs for a 275-gal tote)', 'Large garden or landscape irrigation supplement where aesthetics are secondary; concealed locations', '$100–$200 for used IBC tote + modification costs'],
            ['Poly rain barrel (store-bought)', 'Widely available at home improvement stores; mid-range cost; solid functionality; flat back models fit against house wall neatly', 'Generic appearance; limited customization; size fixed at 50–65 gallons typically', 'The most common choice for most homeowners; reliable and readily available', '$60–$100'],
          ],
        },
        {
          type: 'h3',
          text: 'Key Features to Look For in a Rain Barrel',
        },
        {
          type: 'list',
          items: [
            'Closed, screened lid: The lid must be fully sealed or screened to prevent mosquito breeding. Aedes albopictus (Asian tiger mosquito) can complete its life cycle in as little as a week in standing water — an unscreened rain barrel becomes a mosquito hatchery within days in warm weather. The screen mesh must be fine enough to exclude mosquitoes (1/16-inch mesh minimum; finer is better). Commercial barrels almost always include appropriate screens; DIY barrels require fitting a screen over any opening.',
            'Overflow port at or near the top: When the barrel is full, water must go somewhere controlled. An overflow port near the barrel\'s top, fitted with a hose or tube that directs overflow away from the foundation, is essential. Without it, overflow will run down the side of the barrel and pool against the foundation — the exact problem a functioning downspout was preventing.',
            'Spigot positioned for gravity drainage: The spigot should be positioned as close to the bottom of the barrel as possible for maximum drainage volume. However, it also needs to be high enough off the ground that a watering can or hose fits underneath it — 3–4 inches of clearance is minimum; 6–8 is better. An elevated barrel platform solves both problems.',
            'UV-resistant material: Barrels placed in outdoor sunlight must be made of UV-resistant polyethylene or similar material. Non-UV-treated plastic becomes brittle within 1–2 years in direct sun. Most commercial rain barrels are UV-stabilized; verify this when purchasing. Alternatively, paint a DIY barrel with exterior latex paint to provide UV protection.',
            'Food-grade material: Even though rainwater collected for garden irrigation does not need to be potable, using food-grade barrels (previously used for food-grade liquids) ensures no leaching of industrial chemicals. Look for the recycling symbol with the number 1 (PETE), 2 (HDPE), or 5 (PP) — all food-safe. Avoid barrels previously used for chemicals, herbicides, or industrial solvents, even if apparently clean.',
          ],
        },
        {
          type: 'h3',
          text: 'Single vs. Linked Barrel Systems',
        },
        {
          type: 'p',
          text: 'A single 55-gallon barrel fills quickly in a significant rain event and then provides no additional collection for the remainder of the storm. Linking two or more barrels in series dramatically increases storage capacity and slows the rate at which you overflow during large events. The math is simple: two linked 55-gallon barrels double the capture volume of a single barrel and more than double the effective capture for any event larger than 0.2–0.3 inches of rain.',
        },
        {
          type: 'list',
          items: [
            'Parallel linking (barrels fill simultaneously): Connect a T-fitting at the overflow port so that as the first barrel fills, overflow goes into a second barrel at the same level. Both barrels receive water simultaneously if the inlet is split; more commonly, barrels are linked at the overflow port so the first fills, then overflow feeds the second. Both methods work; the overflow-linked method is simpler.',
            'Practical limit for linked barrels: Three to four standard barrels linked in series is typically the practical limit before plumbing complexity and the structural challenge of building a level, stable platform for multiple heavy barrels becomes a reason to consider a larger single tank instead.',
          ],
        },
      ],
    },


    // ─── SECTION 4: INSTALLATION — STEP BY STEP ──────────────────────────────
    {
      id: 'installation',
      title: 'Section 4: Installation — Step by Step',
      blocks: [
        {
          type: 'p',
          text: 'A standard rain barrel installation takes 2 to 4 hours for a first-time installer. The most technically demanding part is modifying the downspout; the rest is positioning, plumbing, and testing. The tools required are basic: a drill, a utility knife or hacksaw, a level, and basic plumbing fittings.',
        },
        {
          type: 'h3',
          text: 'Tools and Materials',
        },
        {
          type: 'list',
          items: [
            'Tools needed: Drill with 1-1/8 inch spade bit (for spigot hole in DIY barrel); utility knife or jigsaw for downspout modification; hacksaw for PVC pipe (if building a first-flush diverter); tape measure; pencil; level; adjustable wrench; Teflon tape.',
            'Materials for a complete basic installation: The barrel itself; a downspout diverter or diverter kit; a spigot / brass or PVC hose bib (for DIY barrels); a grommet or silicone sealant for the spigot fitting; an overflow hose or fitting and extension; Teflon thread tape; mosquito screening (if not included); lumber or cinder blocks for a platform (optional).',
          ],
        },
        {
          type: 'h3',
          text: 'Step-by-Step Installation',
        },
        {
          type: 'list',
          items: [
            'Choose your location: Select the downspout that drains the largest roof area and is closest to your primary garden use area. The barrel must be on firm, level ground — a full 55-gallon barrel weighs 458 pounds and will tip over or sink into soft ground if improperly placed. Check that the location allows for the overflow hose to direct water away from the foundation (ideally 6 feet or more from the house).',
            'Build the platform (optional but recommended): A platform of stacked concrete blocks, a commercial rain barrel stand, or a simple frame of 4×4 lumber raises the barrel 12–24 inches, creating gravity pressure at the spigot and making it easier to fill a watering can underneath. Ensure the platform is level in all directions before placing the barrel. A full barrel on an unlevel platform will tip. Use a level on all sides.',
            'Prepare the downspout: Most installation methods involve either (a) a downspout diverter — a T-fitting inserted into the downspout that redirects flow to the barrel when it is below capacity and continues to the original drainage path when the barrel is full; or (b) cutting the downspout and directing the cut end directly into the barrel inlet. Option (a) is reversible and preferred for most installations.',
            'Install the downspout diverter: Measure and mark the diverter location on the downspout. The diverter must be positioned so the outlet that connects to the barrel is at or above the height of the barrel\'s inlet. Use a utility knife, tin snips, or a jigsaw to cut the downspout at the marked line. Insert the diverter following the manufacturer\'s instructions; secure with the provided screws or clips. Connect the diverter\'s barrel outlet to the barrel inlet with the flex hose or tubing provided.',
            'Install the spigot (DIY barrels only): Drill a hole near the base of the barrel using the appropriate spade bit for your spigot\'s thread diameter (usually a 1-1/8 inch bit for a 3/4-inch hose bib). Apply Teflon tape to the spigot threads. Insert the spigot through the hole from the outside and thread the interior nut or backing fitting tight against the barrel wall. Use silicone sealant around the fitting to prevent leaks; allow to cure 24 hours before filling.',
            'Install the overflow fitting: Insert or drill a hole for the overflow port near the top of the barrel (2–4 inches below the rim, or at the rim if the lid is sealed). Attach a 1-inch or larger overflow hose fitting. Extend the overflow hose or pipe to direct overflow at least 4–6 feet away from the foundation, ideally toward a garden bed, rain garden, or lawn area where the water will be absorbed rather than running off.',
            'Ensure the lid is secured and screened: The lid must be in place and secured before the first use. Check that all gaps, inlet openings, and the overflow port outlet are screened with fine-mesh screen (mosquitoes can enter through the overflow hose and lay eggs if the outlet end is not screened or dipped in water). For DIY barrels with an open top, cut a piece of fiberglass window screen to fit and secure with a bungee cord or cut-and-press-fit ring.',
            'Test the system: Run a hose into the gutter above the downspout diverter, or wait for rain. Check: water flows into the barrel correctly; no leaks at the spigot or overflow fittings; the overflow hose directs water away from the foundation; the lid remains in place and screened when the barrel fills and water pressure builds inside. Adjust as needed.',
          ],
        },
        {
          type: 'h3',
          text: 'Downspout Diverter Options',
        },
        {
          type: 'table',
          headers: ['Diverter Type', 'How It Works', 'Reversibility', 'Best For', 'Notes'],
          rows: [
            ['Commercial T-diverter (Fiskars, EarthMinded, etc.)', 'Factory-made fitting that inserts into the downspout; auto-diverts flow to barrel and continues to drain when barrel is full', 'Fully reversible; original downspout re-connects to bypass when barrel is removed', 'Most homeowners; easiest installation; clean appearance; works with standard rectangular or round downspouts', 'Most widely sold option; available at home improvement stores; fits most standard downspout sizes; $15–$30'],
            ['Flex hose from cut downspout', 'Downspout is cut; flexible corrugated hose directs flow into barrel inlet', 'Reversible with reconnection; less clean appearance', 'DIY installations; situations where the commercial diverter doesn\'t fit the downspout profile', 'Very inexpensive; fully adjustable; works for unusual downspout shapes'],
            ['Leaf guard diverter', 'Combines leaf filtering with flow diversion; built-in screen separates leaves from flow before water enters barrel', 'Mostly reversible', 'Areas with heavy leaf fall; reduces debris in stored water significantly', 'Higher cost ($30–$50); reduces cleaning frequency; worth the investment in areas with large deciduous trees'],
            ['Direct downspout cut with barrel inlet positioned below', 'Downspout cut and barrel positioned directly beneath; no overflow management built in', 'Not easily reversible; requires downspout repair if barrel removed', 'Rarely recommended; no overflow management means water overflows from the top of the barrel in large events', 'Not recommended — overflow management is critical'],
          ],
        },
      ],
    },


    // ─── SECTION 5: FIRST FLUSH DIVERTERS & WATER QUALITY ────────────────────
    {
      id: 'water-quality',
      title: 'Section 5: First Flush Diverters & Water Quality',
      blocks: [
        {
          type: 'p',
          text: 'The quality of harvested rainwater depends enormously on what it washes off the roof before reaching the barrel. The first flow of water from a roof after a dry period carries accumulated bird droppings, dust, atmospheric pollutants, pollen, leaf debris, and roof material residue. This "first flush" water is the most contaminated portion of any rainfall event. A first-flush diverter automatically discards this initial volume and only sends cleaner subsequent flow into storage.',
        },
        {
          type: 'h3',
          text: "What's in Roof Runoff?",
        },
        {
          type: 'p',
          text: 'Rainwater arriving at your barrel has passed over the roof surface, through the gutter, and down the downspout. Each stage adds potential contaminants:',
        },
        {
          type: 'list',
          items: [
            'Atmospheric deposition: Dust, pollen, particulates, and atmospheric pollutants settle on the roof between rain events. The first flush washes most of these off. Rainwater in areas near industrial sites, highways, or agricultural operations with pesticide application may carry higher atmospheric contamination.',
            'Roof material: Asphalt shingles can leach polycyclic aromatic hydrocarbons (PAHs) and zinc from metal flashings. Treated wood shakes historically leached preservatives. Copper roofing and gutters can elevate copper levels. Galvanized metal roofing can elevate zinc levels. For ornamental garden irrigation (not vegetables, not edibles, not lawns where children play), these levels are generally not a concern. For vegetable garden irrigation, the scientific evidence is mixed; many studies show levels below EPA thresholds after the first flush.',
            'Biological contamination: Bird and squirrel droppings on roofs are the primary source of biological contamination in roof runoff. Salmonella and other pathogens from droppings can be present, particularly in the first flush. Studies consistently show that first-flush diversion and allowing water to settle dramatically reduces biological contamination in stored water.',
            'Lead: Older homes with lead-soldered gutters or lead-based painted eaves may have elevated lead in roof runoff. Inspect gutters and fascia on older homes; replace lead-soldered gutters before installing a collection system.',
          ],
        },
        {
          type: 'h3',
          text: 'The First-Flush Diverter: How It Works',
        },
        {
          type: 'p',
          text: 'A first-flush diverter is a simple device — most commonly a standpipe of PVC pipe — that fills with the initial dirty flow from the roof before the cleaner water reaches the storage barrel. Once the standpipe is full, overflow into the barrel begins. When rain stops, the standpipe slowly drains through a small orifice or ball valve, clearing it for the next rain event.',
        },
        {
          type: 'list',
          items: [
            'Sizing the first-flush volume: The standard recommendation is to divert the first 10 gallons per 1,000 square feet of roof area (or approximately 0.016 inches of rainfall times the roof area draining to that downspout). For a downspout serving 500 square feet of roof, divert the first 5 gallons — approximately 32 inches of 4-inch PVC pipe.',
            'Commercial first-flush diverters: Available in several designs; typically $20–$50. They integrate with the downspout above the barrel inlet and include a self-cleaning ball or float mechanism. Follow manufacturer instructions for sizing to your roof area.',
            'DIY first-flush diverter (PVC): The simplest DIY design uses 4-inch PVC pipe as the standpipe, a 4-inch Y-fitting at the top to connect to the downspout, a 4-inch end cap at the bottom of the standpipe with a small hole (1/4 inch) drilled through it to allow slow draining, and a T or Y fitting at the standpipe-to-barrel connection point. This is a straightforward PVC plumbing project requiring basic skills and a pipe cutter.',
          ],
        },
        {
          type: 'h3',
          text: 'Water Quality by Intended Use',
        },
        {
          type: 'table',
          headers: ['Use', 'Suitability of Rain Barrel Water', 'Precautions', 'First Flush Diverter?'],
          rows: [
            ['Ornamental garden irrigation (flowers, trees, shrubs, lawn)', 'Excellent — ideal for ornamentals; better than tap water in many respects (unchlorinated, ambient temp, slightly acidic)', 'None required for typical suburban collection; avoid using water collected from treated-wood roofs on edibles', 'Recommended but not required'],
            ['Vegetable garden irrigation (drip or soaker hose at root zone)', 'Good with precautions; extensive research shows collected rainwater is safe for vegetable irrigation at root zones', 'Apply at soil level, not as foliar spray; do not apply to leafy greens or root vegetables in the final days before harvest; first-flush diversion recommended; allow several hours of settling in barrel', 'Strongly recommended'],
            ['Vegetable garden irrigation (overhead or foliar spray)', 'Use with caution; foliar application increases contact with biological contaminants', 'If using collected water overhead on edibles, first-flush diversion is essential; consider adding a 5-micron filter inline; do not spray on salad greens within 1 week of harvest', 'Required'],
            ['Container and houseplant watering', 'Excellent; rain barrel water is often preferred over tap water for plants sensitive to chlorine or pH', 'Avoid water that smells strongly of algae or is visibly cloudy; refresh storage if water has sat more than 2 weeks in summer heat', 'Recommended'],
            ['Lawn irrigation', 'Good; excellent for most lawns; may be slightly acidic but most turf tolerates wide pH range', 'Do not apply within 24 hours of children or pets playing on lawn if biological contamination is a concern; first-flush diversion recommended', 'Recommended'],
            ['Drinking water (human)', 'NOT safe without comprehensive filtration and treatment — beyond the scope of a rain barrel system', 'Do not drink, cook with, or use for food washing from a standard rain barrel system without a proper multi-stage filtration and disinfection system. This guide does not cover potable rainwater systems.', 'N/A'],
          ],
        },
        {
          type: 'warning',
          emoji: '🦟',
          text: 'Mosquito Prevention: Non-Negotiable. An improperly managed rain barrel is an ideal mosquito breeding site. Aedes aegypti and Aedes albopictus (the primary vectors of dengue, Zika, and chikungunya in the US) can complete a full larva-to-adult life cycle in a rain barrel within 7–14 days in warm weather. The three rules: (1) The lid must be completely sealed or covered with fine-mesh screen (≤1/16 inch mesh) at all times — no exceptions. (2) Every opening — inlet, overflow outlet, and any vent — must be screened or sealed. (3) If a screen is damaged or missing, add a Bti (Bacillus thuringiensis israelensis) mosquito dunk to the barrel immediately. Bti dunks are non-toxic to other wildlife and pets and kill mosquito larvae within 24 hours. One dunk treats up to 100 gallons for 30 days. Inspect the screen and lid at every use — a single 1/4-inch gap is enough for a mosquito to enter and lay eggs.',
        },
      ],
    },


    // ─── SECTION 6: USING YOUR STORED WATER ──────────────────────────────────
    {
      id: 'using-stored-water',
      title: 'Section 6: Using Your Stored Water',
      blocks: [
        {
          type: 'p',
          text: 'The most common frustration with rain barrels is low water pressure. A standard rain barrel sitting at ground level produces essentially no usable gravity pressure at the spigot — water will dribble rather than flow with the force needed to fill a watering can quickly or run a soaker hose. Understanding gravity pressure, elevation, and the solutions to low pressure transforms the rain barrel from a curiosity into a genuinely productive irrigation tool.',
        },
        {
          type: 'h3',
          text: 'Gravity Pressure: The Physics',
        },
        {
          type: 'p',
          text: 'Water pressure in a gravity-fed system is determined entirely by the height difference (head) between the water surface in the barrel and the outlet point. The relationship is direct: every foot of elevation above the outlet produces 0.43 PSI (pounds per square inch) of water pressure.',
        },
        {
          type: 'table',
          headers: ['Barrel Elevation', 'Pressure at Spigot', 'Practical Capability', 'Notes'],
          rows: [
            ['0 inches (ground level)', '0–0.1 PSI', 'Gravity drain only; filling a watering can takes several minutes; no soaker hose function', 'Usable only for direct gravity drain into a container placed directly beneath the spigot; not suitable for hose or soaker hose use'],
            ['12 inches (one platform level)', '0.4–0.5 PSI', 'Slow fill of watering can; very slow soaker hose; limited but functional', 'The minimum useful elevation; most basic installations'],
            ['24 inches (two platform levels)', '0.8–1.0 PSI', 'Reasonable watering can fill rate; slow soaker hose function for short runs (≤50 feet)', 'Adequate for most garden use; 2-foot elevation is the sweet spot for most installations'],
            ['36 inches (3 feet)', '1.2–1.5 PSI', 'Good watering can fill; functional soaker hose up to 75–100 feet', 'Better; requires a sturdy elevated platform of 3 concrete blocks or heavy lumber frame'],
            ['48–60 inches (4–5 feet)', '1.7–2.2 PSI', 'Good fill rate; soaker hose up to 100–200 feet; slow drip irrigation function', 'Achieves meaningful drip irrigation capability; elevated platform becomes a structural project'],
          ],
        },
        {
          type: 'tip',
          emoji: '💧',
          text: 'Building an elevated platform: Concrete blocks (standard 8×8×16 inch CMU blocks, each 8 inches tall) are the simplest elevation material. Two courses of two blocks side-by-side provides a 16-inch elevated, stable surface. Lumber framing (2×4 or 4×4 posts with a decking-grade plywood top) can achieve any height. Whatever the material, the platform must support the full weight of a filled barrel: 55 gallons weighs 458 pounds; a 100-gallon barrel weighs 835 pounds. Build accordingly.',
        },
        {
          type: 'h3',
          text: 'Delivery Methods',
        },
        {
          type: 'list',
          items: [
            'Watering can: The simplest and most controlled method. Fill directly from the spigot. Works at any elevation but is slow at ground level. Best for targeted hand-watering of containers and individual plants.',
            'Garden hose (gravity): A standard garden hose connected to the barrel\'s spigot works at low pressure but delivers water much more slowly than from a municipal supply. Use a hose with the nozzle removed or set to open flow; sprinkler nozzles and hose-end sprayers require more pressure than gravity barrels can typically provide. Drip the hose at the base of plants; it works well for slow, deep watering.',
            'Soaker hose: Soaker hoses are specifically designed for low-pressure operation and pair well with rain barrels at 12–36 inches of elevation. Run soaker hoses along plant rows; connect to the barrel spigot with a short length of regular hose. Keep runs short (50–100 feet maximum for gravity-only pressure) for even distribution.',
            'Drip irrigation: Standard drip irrigation emitters typically require 8–15 PSI — far above what a gravity barrel provides. Low-pressure or gravity-fed drip emitters (specifically labeled as such, requiring as little as 2–3 PSI) are available and work with elevated barrels. These are an excellent long-term investment for a garden irrigation system fed from a rain barrel or cistern.',
            'Pump-assisted delivery: A small submersible pump (12V DC solar-powered pumps are ideal for rain barrel applications; small AC pumps also work) placed inside the barrel and connected to a standard hose or drip system provides full irrigation pressure regardless of barrel elevation. A 12V solar pump with a small solar panel costs $30–$80 and provides completely independent, electricity-free operation.',
          ],
        },
        {
          type: 'h3',
          text: 'Keeping Stored Water Healthy',
        },
        {
          type: 'list',
          items: [
            'Use it regularly: The single most effective practice. Water used frequently is replaced by fresh rainfall, preventing long-term stagnation. A barrel that sits full all summer while the garden is watered from the hose provides no benefit and may develop water quality issues. Use the barrel water first, before reaching for the hose.',
            'Keep the barrel shaded: Algae require light. An opaque barrel blocks light and prevents algae growth. For translucent or light-colored barrels, shade with a burlap cover, wooden screen, or plant material. Alternatively, wrap in a dark fabric or paint the exterior.',
            'Refresh stagnant water: If the barrel sits full for more than 2–3 weeks in summer without being used or replenished by rain, drain it partially onto the garden (the water is still excellent for irrigation even if the barrel smells slightly stale) and allow fresh rain to refill it.',
            'Bti dunks for larval control: One Bti mosquito dunk treats 100 gallons for 30 days and kills any mosquito larvae present without harming other organisms. Add a dunk as a precaution during summer even when screens appear intact. Break the dunk in half for a 55-gallon barrel.',
          ],
        },
      ],
    },

  ],
}

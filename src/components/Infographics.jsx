'use client'

import { useState } from 'react'
import Link from 'next/link'

function InfographicSection({ src, alt, heading, description, caption, guideHref, guideName, onOpen }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">{heading}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
      <button
        type="button"
        onClick={() => onOpen(src, alt)}
        className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-garden-600"
        aria-label={`View full-size: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block hover:opacity-90 transition-opacity"
        />
      </button>
      <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 text-right">
        Click the image to enlarge
        {guideHref && guideName && (
          <> · For the full guide, see our{' '}
            <Link href={guideHref} className="underline hover:text-garden-600 dark:hover:text-garden-400">
              {guideName}
            </Link>.
          </>
        )}
        {caption && !guideHref && <> · {caption}</>}
      </p>
    </section>
  )
}

export default function Infographics() {
  const [activeLightbox, setActiveLightbox] = useState(null) // { src, alt }

  const openLightbox = (src, alt) => setActiveLightbox({ src, alt })
  const closeLightbox = () => setActiveLightbox(null)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* Hero */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🖼️</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
          Garden Infographics
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Visual quick-reference guides for every stage of gardening — from seed starting to harvest,
          companion planting to soil care. Save them, print them, use them in the garden.
        </p>
      </div>

      {/* Section 1: Companion Planting */}
      <InfographicSection
        src="/infographics/Companion-Planting-Quick-Reference.png"
        alt="Companion Planting Quick Reference infographic"
        heading="🌿 Companion Planting Quick Reference"
        description="Certain plants thrive together — and some actively repel each other's pests. Use this at-a-glance chart when planning your beds."
        guideHref="/guides/pollinator-garden"
        guideName="Pollinator Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 2: USDA Zone Reference */}
      <InfographicSection
        src="/infographics/USDA-Hardiness-Zones-Frost-Date-Reference.png"
        alt="USDA Hardiness Zones and Frost Date Reference infographic"
        heading="🗺️ USDA Hardiness Zones — Frost Date Reference"
        description="Your USDA zone determines your average minimum winter temperature. Use these average last spring frost and first fall frost dates to time transplants and season-end tasks."
        guideHref="/guides/winter-garden-prep"
        guideName="Winter Garden Prep guide"
        onOpen={openLightbox}
      />
      <div className="mt-3 mb-12 -mt-8 p-3 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-800 rounded-xl text-sm text-garden-800 dark:text-garden-300">
        💡 <strong>Tip:</strong> Use the USDA Plant Hardiness Zone Map at planthardiness.ars.usda.gov to look up your exact zip code.
      </div>

      {/* Ad placeholder 1 */}
      <div id="adsense-infographics-1" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 3: Soil pH */}
      <InfographicSection
        src="/infographics/Soil-pH-Preference-by-Plant-Type.png"
        alt="Soil pH Preference by Plant Type infographic"
        heading="🧪 Soil pH Preference by Plant Type"
        description="Soil pH affects nutrient availability. Most garden plants prefer 6.0–7.0, but blueberries, potatoes, and azaleas need distinctly acidic conditions. Test your soil before amending."
        guideHref="/guides/xeriscape"
        guideName="Xeriscape Design guide"
        onOpen={openLightbox}
      />

      {/* Section 4: Annual Flowers */}
      <InfographicSection
        src="/infographics/Annual_Flowers_Best_Picks_Guide_IG.png"
        alt="Annual Flowers Best Picks infographic"
        heading="🌸 Annual Flowers: Best Picks"
        description="The top annual flowers for color, cut flowers, and pollinators — with sun, water, and spacing requirements at a glance."
        guideHref="/guides/annual-flowers"
        guideName="Annual Flowers guide"
        onOpen={openLightbox}
      />

      {/* Section 5: Long-Blooming Perennials */}
      <InfographicSection
        src="/infographics/Long_Blooming_Perennials_Guide_IG.png"
        alt="Long-Blooming Perennials infographic"
        heading="🌺 Long-Blooming Perennials"
        description="Perennials that deliver weeks or months of color — with bloom times, zones, and care requirements for building a season-long garden."
        guideHref="/guides/long-blooming-perennials"
        guideName="Long-Blooming Perennials guide"
        onOpen={openLightbox}
      />

      {/* Ad placeholder 2 */}
      <div id="adsense-infographics-2" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 6: Cut Flower Garden */}
      <InfographicSection
        src="/infographics/Cut_Flower_Garden_Guide_IG.png"
        alt="Cut Flower Garden infographic"
        heading="✂️ Cut Flower Garden"
        description="Best flowers for cutting, with harvest timing, vase life, and succession-planting tips for continuous blooms from spring through fall."
        guideHref="/guides/cut-flower-garden"
        guideName="Cut Flower Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 7: Cottage Garden Style */}
      <InfographicSection
        src="/infographics/Cottage_Garden_Style_Guide_IG.png"
        alt="Cottage Garden Style infographic"
        heading="🌹 Cottage Garden Style"
        description="The essential plants, design principles, and layering techniques for creating an abundant, romantic cottage garden that blooms from spring to frost."
        guideHref="/guides/cottage-garden"
        guideName="Cottage Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 8: Moon Garden */}
      <InfographicSection
        src="/infographics/Moon_Garden_Guide_IG.png"
        alt="Moon Garden infographic"
        heading="🌙 Moon Garden"
        description="White and pale flowers, silver foliage, and night-fragrant plants that come alive after dark — with placement and bloom-time reference."
        guideHref="/guides/moon-garden"
        guideName="Moon Garden guide"
        onOpen={openLightbox}
      />

      {/* Ad placeholder 3 */}
      <div id="adsense-infographics-3" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 9: Edible Flowers */}
      <InfographicSection
        src="/infographics/Edible_Flowers_Guide_IG.png"
        alt="Edible Flowers infographic"
        heading="🌼 Edible Flowers"
        description="A visual guide to flowers you can eat — flavor profiles, safe varieties, which parts to use, and what to avoid."
        guideHref="/guides/edible-flowers"
        guideName="Edible Flowers guide"
        onOpen={openLightbox}
      />

      {/* Section 10: Children's Vegetable Garden */}
      <InfographicSection
        src="/infographics/Childrens_Vegetable_Garden_Guide_US_IG.png"
        alt="Children's Vegetable Garden infographic"
        heading="🥕 Children's Vegetable Garden"
        description="The best vegetables for kids to grow by age group — with fun activities, easy-win plants, and tips for keeping young gardeners engaged all season."
        guideHref="/guides/childrens-garden"
        guideName="Children's Vegetable Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 11: Culinary Herb Garden */}
      <InfographicSection
        src="/infographics/Culinary_Herb_Garden_Guide_IG.png"
        alt="Culinary Herb Garden infographic"
        heading="🍃 Culinary Herb Garden"
        description="The most useful kitchen herbs — with harvest tips, companion plants, container vs. in-ground notes, and flavor pairing at a glance."
        guideHref="/guides/culinary-herb-garden"
        guideName="Culinary Herb Garden guide"
        onOpen={openLightbox}
      />

      {/* Ad placeholder 4 */}
      <div id="adsense-infographics-4" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 12: Herb Garden Design */}
      <InfographicSection
        src="/infographics/Herb_Garden_Design_Guide_IG.png"
        alt="Herb Garden Design infographic"
        heading="🌿 Herb Garden Design"
        description="Layout patterns, companion planting pairs, and design principles for creating a beautiful and functional herb garden in any space."
        guideHref="/guides/herb-garden-design"
        guideName="Herb Garden Design guide"
        onOpen={openLightbox}
      />

      {/* Section 13: Medicinal Garden */}
      <InfographicSection
        src="/infographics/Medicinal_Garden_Guide_US_IG.png"
        alt="Medicinal Garden infographic"
        heading="💊 Medicinal Garden"
        description="Key medicinal herbs — their primary uses, parts used, preparation methods, and safety notes for a home apothecary garden."
        guideHref="/guides/medicinal-garden"
        guideName="Medicinal Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 14: Common Garden Diseases */}
      <InfographicSection
        src="/infographics/Common_Garden_Diseases_Guide_IG.png"
        alt="Common Garden Diseases infographic"
        heading="🦠 Common Garden Diseases"
        description="A visual symptom key for the most common fungal, bacterial, and viral plant diseases — with diagnosis tips and first-line treatment options."
        guideHref="/guides/common-diseases"
        guideName="Common Garden Diseases guide"
        onOpen={openLightbox}
      />

      {/* Ad placeholder 5 */}
      <div id="adsense-infographics-5" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 15: Fast-Growing Privacy Trees */}
      <InfographicSection
        src="/infographics/Fast_Growing_Privacy_Trees_Guide_IG.png"
        alt="Fast-Growing Privacy Trees infographic"
        heading="🌲 Fast-Growing Privacy Trees"
        description="Top privacy tree options by zone — with mature height, growth rate, spacing, and best-use notes for screening, windbreaks, and property lines."
        guideHref="/guides/privacy-trees"
        guideName="Privacy Trees guide"
        onOpen={openLightbox}
      />

      {/* Section 16: Japanese Garden Elements */}
      <InfographicSection
        src="/infographics/Japanese_Garden_Elements_Guide_IG.png"
        alt="Japanese Garden Elements infographic"
        heading="🎋 Japanese Garden Elements"
        description="The key design elements, plants, and principles of Japanese garden style — from stone placement and karesansui to niwaki pruning and borrowed scenery."
        guideHref="/guides/japanese-garden"
        guideName="Japanese Garden Elements guide"
        onOpen={openLightbox}
      />

      {/* Section 17: Front Yard Curb Appeal */}
      <InfographicSection
        src="/infographics/Front_Yard_Curb_Appeal_Guide_IG.png"
        alt="Front Yard Curb Appeal infographic"
        heading="🏡 Front Yard Curb Appeal"
        description="The five elements of curb appeal, three-zone layout principles, and best plants by season for a front yard that makes a great first impression."
        guideHref="/guides/curb-appeal"
        guideName="Front Yard Curb Appeal guide"
        onOpen={openLightbox}
      />

      {/* Ad placeholder 6 */}
      <div id="adsense-infographics-6" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Vegetable Spacing — HTML table (no infographic image yet) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          📐 Vegetable Spacing Quick Reference
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          Proper plant spacing prevents disease, reduces competition, and maximizes yield. Measurements
          are plant-to-plant spacing. Rows should be spaced 1.5–2× plant spacing for in-ground beds.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm">
            <thead className="bg-garden-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Vegetable</th>
                <th className="px-4 py-2 text-left font-semibold">In-Ground Spacing</th>
                <th className="px-4 py-2 text-left font-semibold">Sq Ft Gardening</th>
                <th className="px-4 py-2 text-left font-semibold">Depth to Plant</th>
                <th className="px-4 py-2 text-left font-semibold">Days to Harvest</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['🍅 Tomato (indeterminate)', '24–36"', '1 per sq ft', 'Transplant deep', '70–85 days'],
                ['🍅 Tomato (determinate)',   '18–24"', '1 per sq ft', 'Transplant deep', '60–70 days'],
                ['🥒 Cucumber',              '12–18"', '2 per sq ft', '½–1" seed depth', '50–65 days'],
                ['🌽 Corn',                  '8–12"',  '1 per sq ft', '1–1.5" seed depth','65–90 days'],
                ['🥬 Lettuce (leaf)',         '6–8"',   '4 per sq ft', 'Surface sow',      '45–55 days'],
                ['🥕 Carrot',                '2–3"',   '16 per sq ft','¼" seed depth',    '65–80 days'],
                ['🫘 Bush Bean',              '4–6"',   '9 per sq ft', '1–1.5" seed depth','50–60 days'],
                ['🧅 Onion',                 '4–6"',   '9 per sq ft', '½" depth (set)',   '90–120 days'],
                ['🥦 Broccoli',              '18–24"', '1 per sq ft', 'Transplant ½" deep','60–80 days'],
                ['🌿 Basil',                 '12"',    '1 per sq ft', 'Surface/thin',     '25–30 days (leaves)'],
                ['🍓 Strawberry',            '12–18"', '4 per sq ft', 'Crown at soil line','60–90 days'],
                ['🎃 Pumpkin (standard)',     '36–48"', '1 per 4 sq ft','1" seed depth',   '90–120 days'],
              ].map(([veg, spacing, sqft, depth, days]) => (
                <tr key={veg} className="border-t border-gray-100 dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-800/50">
                  <td className="px-4 py-2 font-medium text-gray-800 dark:text-gray-200">{veg}</td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{spacing}</td>
                  <td className="px-4 py-2 text-garden-700 dark:text-garden-400">{sqft}</td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{depth}</td>
                  <td className="px-4 py-2 text-earth-600 dark:text-earth-400 text-xs">{days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Watering Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          💧 Watering Frequency Guide by Plant Category
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          Overwatering is the #1 killer of container and new transplants. These are general guidelines
          for established plants — newly transplanted specimens need 2× more frequent watering for the
          first 2–3 weeks.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {emoji:'💦', label:'Daily (Hot Weather)',  color:'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',   plants:['Container annuals in summer','Hanging baskets','Seedlings in heat','Newly transplanted herbs']},
            {emoji:'🚿', label:'Every 2–3 Days',       color:'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800', plants:['Tomatoes (in-ground)','Cucumbers & squash','Most container vegetables','Ferns & shade perennials']},
            {emoji:'🌿', label:'Weekly',               color:'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',plants:['Established shrubs','Lawn (established)','Most in-ground perennials','Fruit trees (summer)']},
            {emoji:'🌵', label:'Every 2–4 Weeks',      color:'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',plants:['Succulents & cacti','Established lavender','Native prairie plants','Drought-tolerant groundcovers']},
          ].map(({emoji, label, color, plants}) => (
            <div key={label} className={`rounded-xl border p-4 ${color}`}>
              <div className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{emoji} {label}</div>
              <ul className="space-y-1">
                {plants.map(p => (
                  <li key={p} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-1">
                    <span className="text-gray-400 mt-0.5">•</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Ad placeholder 7 */}
      <div id="adsense-infographics-7" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Affiliate Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-4">
          📚 Reference Guides We Recommend
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 italic">
          We may earn a small commission from qualifying purchases at no extra cost to you.
        </p>
        <div className="flex flex-col gap-6">

          <div className="bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-garden-50 dark:bg-gray-700 rounded-xl">📖</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-1">
                  Rodale's Ultimate Encyclopedia of Organic Gardening
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  The definitive reference for organic gardeners — covers companion planting, soil
                  science, pest management, and hundreds of plant profiles. The kind of book that
                  lives in the potting shed.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                  {['800+ pages of plant and garden reference','Companion planting charts','Organic pest & disease solutions','Zone-by-zone planting calendars'].map(b => (
                    <li key={b} className="flex items-start gap-1"><span className="text-garden-600 font-bold">✓</span> {b}</li>
                  ))}
                </ul>
                <a
                  href="https://www.amazon.com/s?k=Rodale+Ultimate+Encyclopedia+Organic+Gardening"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-garden-600 hover:bg-garden-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
                >
                  View on Amazon →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-garden-50 dark:bg-gray-700 rounded-xl">🗓️</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-1">
                  The Old Farmer's Almanac Garden Guide
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  An annually updated visual guide with planting calendars, moon gardening schedules,
                  weather predictions, and zone-specific timing. A classic for a reason.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                  {['Annual zone-specific planting calendars','Visual frost date maps','Vegetable growing charts','Pest identification guides'].map(b => (
                    <li key={b} className="flex items-start gap-1"><span className="text-garden-600 font-bold">✓</span> {b}</li>
                  ))}
                </ul>
                <a
                  href="https://www.amazon.com/s?k=Old+Farmers+Almanac+Garden+Guide"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-garden-600 hover:bg-garden-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
                >
                  View on Amazon →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Coming Soon */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-4">
          🚧 More Infographics Coming Soon
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ['🌱','Seed Starting Calendar by Zone','Printable monthly seed-start chart for Zones 3–9'],
            ['🐛','Common Garden Pests ID Chart','Visual pest identification with organic controls'],
            ['🌼','Pollinator Attraction Guide','Which flowers attract which beneficial insects'],
            ['🍂','Fall Garden Prep Checklist','Zone-specific fall tasks from perennial cutback to bulb planting'],
            ['🌿','Herb Drying & Storage Guide','Best methods for each herb type with shelf-life notes'],
            ['💊','Plant Nutrient Deficiency Chart','Visual leaf symptom guide — yellow leaves, purple stems, and more'],
          ].map(([emoji, title, desc]) => (
            <div key={title} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 opacity-80">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <div className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-0.5">{title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{desc}</div>
                  <span className="inline-block mt-1.5 text-xs bg-earth-100 dark:bg-earth-900/30 text-earth-700 dark:text-earth-400 px-2 py-0.5 rounded-full font-medium">Coming Soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <div className="p-4 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-800 rounded-xl text-sm">
        <span className="font-semibold text-garden-800 dark:text-garden-300">Explore more:</span>{' '}
        <Link href="/guides" className="underline hover:text-garden-600 dark:hover:text-garden-400">Browse all gardening guides</Link>
        {' · '}
        <Link href="/wizard" className="underline hover:text-garden-600 dark:hover:text-garden-400">Find your perfect plants</Link>
      </div>

      {/* Shared lightbox */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white text-sm font-semibold hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              ✕ Close
            </button>
            <img
              src={activeLightbox.src}
              alt={`${activeLightbox.alt} — full size`}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  )
}

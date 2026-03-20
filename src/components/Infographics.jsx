'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Infographics() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoneLightboxOpen, setZoneLightboxOpen] = useState(false)
  const [soilPhLightboxOpen, setSoilPhLightboxOpen] = useState(false)

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
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          🌿 Companion Planting Quick Reference
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          Certain plants thrive together — and some actively repel each other's pests. Use this
          at-a-glance chart when planning your beds.
        </p>
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-garden-600"
          aria-label="View full-size companion planting infographic"
        >
          <img
            src="/infographics/Companion-Planting-Quick-Reference.png"
            alt="Companion Planting Quick Reference infographic"
            className="w-full h-auto block hover:opacity-90 transition-opacity"
          />
        </button>
        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-10 right-0 text-white text-sm font-semibold hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                ✕ Close
              </button>
              <img
                src="/infographics/Companion-Planting-Quick-Reference.png"
                alt="Companion Planting Quick Reference infographic — full size"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 text-right">
          Click the image to enlarge · For deeper research, see our{' '}
          <Link href="/guides/pollinator-garden" className="underline hover:text-garden-600 dark:hover:text-garden-400">
            Pollinator Garden guide
          </Link>.
        </p>
      </section>

      {/* Ad placeholder 1 */}
      <div id="adsense-infographics-1" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 2: USDA Zone Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          🗺️ USDA Hardiness Zones — Frost Date Reference
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          Your USDA zone determines your average minimum winter temperature. Use these average last
          spring frost and first fall frost dates to time transplants and season-end tasks.
        </p>
        <button
          type="button"
          onClick={() => setZoneLightboxOpen(true)}
          className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-garden-600"
          aria-label="View full-size USDA Hardiness Zones and Frost Date Reference infographic"
        >
          <img
            src="/infographics/USDA-Hardiness-Zones-Frost-Date-Reference.png"
            alt="USDA Hardiness Zones and Frost Date Reference infographic"
            className="w-full h-auto block hover:opacity-90 transition-opacity"
          />
        </button>
        {/* Zone Lightbox */}
        {zoneLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setZoneLightboxOpen(false)}
          >
            <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setZoneLightboxOpen(false)}
                className="absolute -top-10 right-0 text-white text-sm font-semibold hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                ✕ Close
              </button>
              <img
                src="/infographics/USDA-Hardiness-Zones-Frost-Date-Reference.png"
                alt="USDA Hardiness Zones and Frost Date Reference infographic — full size"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 text-right">
          Click the image to enlarge · For zone-by-zone planting tips, see our{' '}
          <Link href="/guides/winter-garden-prep" className="underline hover:text-garden-600 dark:hover:text-garden-400">
            Winter Garden Prep guide
          </Link>.
        </p>
        <div className="mt-3 p-3 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-800 rounded-xl text-sm text-garden-800 dark:text-garden-300">
          💡 <strong>Tip:</strong> Use the USDA Plant Hardiness Zone Map at planthardiness.ars.usda.gov to look up your exact zip code.
        </div>
      </section>

      {/* Section 3: Vegetable Spacing */}
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

      {/* Ad placeholder 2 */}
      <div id="adsense-infographics-2" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 4: Soil pH */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          🧪 Soil pH Preference by Plant Type
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          Soil pH affects nutrient availability. Most garden plants prefer 6.0–7.0, but blueberries,
          potatoes, and azaleas need distinctly acidic conditions. Test your soil before amending.
        </p>
        <button
          type="button"
          onClick={() => setSoilPhLightboxOpen(true)}
          className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-garden-600"
          aria-label="View full-size Soil pH Preference by Plant Type infographic"
        >
          <img
            src="/infographics/Soil-pH-Preference-by-Plant-Type.png"
            alt="Soil pH Preference by Plant Type infographic"
            className="w-full h-auto block hover:opacity-90 transition-opacity"
          />
        </button>
        {/* Soil pH Lightbox */}
        {soilPhLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSoilPhLightboxOpen(false)}
          >
            <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setSoilPhLightboxOpen(false)}
                className="absolute -top-10 right-0 text-white text-sm font-semibold hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                ✕ Close
              </button>
              <img
                src="/infographics/Soil-pH-Preference-by-Plant-Type.png"
                alt="Soil pH Preference by Plant Type infographic — full size"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
        <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 text-right">
          Click the image to enlarge · For soil prep tips, see our{' '}
          <Link href="/guides/xeriscape" className="underline hover:text-garden-600 dark:hover:text-garden-400">
            Xeriscape Design guide
          </Link>.
        </p>
      </section>

      {/* Section 5: Watering Guide */}
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
            {emoji:'💦', label:'Daily (Hot Weather)',      color:'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800', plants:['Container annuals in summer','Hanging baskets','Seedlings in heat','Newly transplanted herbs']},
            {emoji:'🚿', label:'Every 2–3 Days',           color:'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800', plants:['Tomatoes (in-ground)','Cucumbers & squash','Most container vegetables','Ferns & shade perennials']},
            {emoji:'🌿', label:'Weekly',                   color:'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800', plants:['Established shrubs','Lawn (established)','Most in-ground perennials','Fruit trees (summer)']},
            {emoji:'🌵', label:'Every 2–4 Weeks',          color:'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800', plants:['Succulents & cacti','Established lavender','Native prairie plants','Drought-tolerant groundcovers']},
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

      {/* Ad placeholder 3 */}
      <div id="adsense-infographics-3" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

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
    </div>
  )
}

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
          loading="lazy"
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

      {/* Header image */}
      <img
        src="/infographics/garden-infographics-header.png"
        alt="Garden Infographics"
        className="w-full h-auto rounded-2xl mb-8"
      />

      {/* Hero */}
      <div className="text-center mb-10">
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
        src="/infographics/companion-planting-quick-reference.png"
        alt="Companion Planting Quick Reference infographic"
        heading="🌿 Companion Planting Quick Reference"
        description="Certain plants thrive together — and some actively repel each other's pests. Use this at-a-glance chart when planning your beds."
        guideHref="/guides/pollinator-garden"
        guideName="Pollinator Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 2: USDA Zone Reference */}
      <InfographicSection
        src="/infographics/usda-hardiness-zones-frost-date-reference.png"
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

      {/* Section 3: Soil pH */}
      <InfographicSection
        src="/infographics/soil-ph-preference-by-plant-type.png"
        alt="Soil pH Preference by Plant Type infographic"
        heading="🧪 Soil pH Preference by Plant Type"
        description="Soil pH affects nutrient availability. Most garden plants prefer 6.0–7.0, but blueberries, potatoes, and azaleas need distinctly acidic conditions. Test your soil before amending."
        guideHref="/guides/xeriscape"
        guideName="Xeriscape Design guide"
        onOpen={openLightbox}
      />

      {/* Section 4: Annual Flowers */}
      <InfographicSection
        src="/infographics/annual-flowers-ig.png"
        alt="Annual Flowers Best Picks infographic"
        heading="🌸 Annual Flowers: Best Picks"
        description="The top annual flowers for color, cut flowers, and pollinators — with sun, water, and spacing requirements at a glance."
        guideHref="/guides/annual-flowers"
        guideName="Annual Flowers guide"
        onOpen={openLightbox}
      />

      {/* Section 5: Long-Blooming Perennials */}
      <InfographicSection
        src="/infographics/long-blooming-perennials-ig.png"
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
        src="/infographics/cut-flower-garden-ig.png"
        alt="Cut Flower Garden infographic"
        heading="✂️ Cut Flower Garden"
        description="Best flowers for cutting, with harvest timing, vase life, and succession-planting tips for continuous blooms from spring through fall."
        guideHref="/guides/cut-flower-garden"
        guideName="Cut Flower Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 7: Cottage Garden Style */}
      <InfographicSection
        src="/infographics/cottage-garden-style-ig.png"
        alt="Cottage Garden Style infographic"
        heading="🌹 Cottage Garden Style"
        description="The essential plants, design principles, and layering techniques for creating an abundant, romantic cottage garden that blooms from spring to frost."
        guideHref="/guides/cottage-garden"
        guideName="Cottage Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 8: Moon Garden */}
      <InfographicSection
        src="/infographics/moon-garden-ig.png"
        alt="Moon Garden infographic"
        heading="🌙 Moon Garden"
        description="White and pale flowers, silver foliage, and night-fragrant plants that come alive after dark — with placement and bloom-time reference."
        guideHref="/guides/moon-garden"
        guideName="Moon Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 9: Edible Flowers */}
      <InfographicSection
        src="/infographics/edible-flowers-ig.png"
        alt="Edible Flowers infographic"
        heading="🌼 Edible Flowers"
        description="A visual guide to flowers you can eat — flavor profiles, safe varieties, which parts to use, and what to avoid."
        guideHref="/guides/edible-flowers"
        guideName="Edible Flowers guide"
        onOpen={openLightbox}
      />

      {/* Section 10: Children's Vegetable Garden */}
      <InfographicSection
        src="/infographics/childrens-vegetable-garden-ig.png"
        alt="Children's Vegetable Garden infographic"
        heading="🥕 Children's Vegetable Garden"
        description="The best vegetables for kids to grow by age group — with fun activities, easy-win plants, and tips for keeping young gardeners engaged all season."
        guideHref="/guides/childrens-garden"
        guideName="Children's Vegetable Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 11: Culinary Herb Garden */}
      <InfographicSection
        src="/infographics/culinary-herb-garden-ig.png"
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
        src="/infographics/herb-garden-design-ig.png"
        alt="Herb Garden Design infographic"
        heading="🌿 Herb Garden Design"
        description="Layout patterns, companion planting pairs, and design principles for creating a beautiful and functional herb garden in any space."
        guideHref="/guides/herb-garden-design"
        guideName="Herb Garden Design guide"
        onOpen={openLightbox}
      />

      {/* Section 13: Medicinal Garden */}
      <InfographicSection
        src="/infographics/medicinal-garden-ig.png"
        alt="Medicinal Garden infographic"
        heading="💊 Medicinal Garden"
        description="Key medicinal herbs — their primary uses, parts used, preparation methods, and safety notes for a home apothecary garden."
        guideHref="/guides/medicinal-garden"
        guideName="Medicinal Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 14: Common Garden Diseases */}
      <InfographicSection
        src="/infographics/common-garden-diseases-ig.png"
        alt="Common Garden Diseases infographic"
        heading="🦠 Common Garden Diseases"
        description="A visual symptom key for the most common fungal, bacterial, and viral plant diseases — with diagnosis tips and first-line treatment options."
        guideHref="/guides/common-diseases"
        guideName="Common Garden Diseases guide"
        onOpen={openLightbox}
      />

      {/* Section 15: Garden Pests ID & Control */}
      <InfographicSection
        src="/infographics/garden-pests-ig.png"
        alt="Garden Pests ID & Control infographic"
        heading="🐛 Garden Pests ID & Control"
        description="Visual identification for 50+ common garden pests — with symptom-based diagnosis, organic controls, and natural enemy strategies organized by pest type."
        guideHref="/guides/garden-pests"
        guideName="Garden Pests ID & Control guide"
        onOpen={openLightbox}
      />

      {/* Ad placeholder 5 */}
      <div id="adsense-infographics-5" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 16: Fast-Growing Privacy Trees */}
      <InfographicSection
        src="/infographics/fast-growing-privacy-trees-ig.png"
        alt="Fast-Growing Privacy Trees infographic"
        heading="🌲 Fast-Growing Privacy Trees"
        description="Top privacy tree options by zone — with mature height, growth rate, spacing, and best-use notes for screening, windbreaks, and property lines."
        guideHref="/guides/privacy-trees"
        guideName="Privacy Trees guide"
        onOpen={openLightbox}
      />

      {/* Section 16: Japanese Garden Elements */}
      <InfographicSection
        src="/infographics/japanese-garden-elements-ig.png"
        alt="Japanese Garden Elements infographic"
        heading="🎋 Japanese Garden Elements"
        description="The key design elements, plants, and principles of Japanese garden style — from stone placement and karesansui to niwaki pruning and borrowed scenery."
        guideHref="/guides/japanese-garden"
        guideName="Japanese Garden Elements guide"
        onOpen={openLightbox}
      />

      {/* Section 17: Front Yard Curb Appeal */}
      <InfographicSection
        src="/infographics/front-yard-curb-appeal-ig.png"
        alt="Front Yard Curb Appeal infographic"
        heading="🏡 Front Yard Curb Appeal"
        description="The five elements of curb appeal, three-zone layout principles, and best plants by season for a front yard that makes a great first impression."
        guideHref="/guides/curb-appeal"
        guideName="Front Yard Curb Appeal guide"
        onOpen={openLightbox}
      />

      {/* Section 18: Plants for Color */}
      <InfographicSection
        src="/infographics/plants-for-color-ig.png"
        alt="Plants for Color infographic"
        heading="🎨 Plants for Color"
        description="Bold annuals, perennials, and foliage plants organized by color — with bloom times and design tips for creating vibrant seasonal combinations."
        guideHref="/guides/plants-for-color"
        guideName="Plants for Color guide"
        onOpen={openLightbox}
      />

      {/* Section 19: Pollinator Garden */}
      <InfographicSection
        src="/infographics/pollinator-garden-ig.png"
        alt="Pollinator Garden infographic"
        heading="🐝 Pollinator Garden"
        description="The best plants for attracting bees, butterflies, and hummingbirds — with bloom succession, native plant highlights, and design principles for a wildlife-friendly garden."
        guideHref="/guides/pollinator-garden"
        guideName="Pollinator Garden guide"
        onOpen={openLightbox}
      />

      {/* Ad placeholder 6 */}
      <div id="adsense-infographics-6" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Section 20: Pizza Garden */}
      <InfographicSection
        src="/infographics/pizza-garden-ig.png"
        alt="Pizza Garden infographic"
        heading="🍕 Pizza Garden"
        description="Everything you need to grow your own pizza toppings — tomatoes, peppers, basil, oregano, and more — with spacing, companion planting, and harvest timing."
        guideHref="/guides/pizza-garden"
        guideName="Pizza Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 21: Salad Garden */}
      <InfographicSection
        src="/infographics/salad-garden-ig.png"
        alt="Salad Garden infographic"
        heading="🥗 Salad Garden"
        description="Fast-growing greens, succession planting schedules, and cut-and-come-again techniques for a continuous harvest of fresh salad ingredients."
        guideHref="/guides/salad-garden"
        guideName="Salad Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 22: Salsa Garden */}
      <InfographicSection
        src="/infographics/salsa-garden-ig.png"
        alt="Salsa Garden infographic"
        heading="🌶️ Salsa Garden"
        description="Tomatoes, peppers, onions, cilantro, and tomatillos — with zone-specific timing, companion planting, and harvest tips for a fresh salsa garden."
        guideHref="/guides/salsa-garden"
        guideName="Salsa Garden guide"
        onOpen={openLightbox}
      />

      {/* Section 23: Plants for Fragrance */}
      <InfographicSection
        src="/infographics/plants-for-fragrance-ig.png"
        alt="Plants for Fragrance infographic"
        heading="🌸 Plants for Fragrance"
        description="The most fragrant garden plants by season — shrubs, perennials, annuals, and vines with placement tips for maximizing scent near paths, windows, and seating areas."
        guideHref="/guides/plants-for-smell"
        guideName="Plants for Fragrance guide"
        onOpen={openLightbox}
      />

      {/* Section 24: Porch Plants */}
      <InfographicSection
        src="/infographics/porch-plants-ig.png"
        alt="Porch Plants infographic"
        heading="🪴 Porch Plants"
        description="The best container plants for sunny and shady porches — with care requirements, seasonal swaps, and tips for overwintering tender favorites."
        guideHref="/guides/porch-plants"
        guideName="Porch Plants guide"
        onOpen={openLightbox}
      />

      {/* Section 25: Rain Barrel */}
      <InfographicSection
        src="/infographics/rain-barrel-ig.png"
        alt="Rain Barrel Guide infographic"
        heading="🌧️ Rain Barrel Guide"
        description="How to set up a rain barrel system — collection math, installation steps, legal status by state, and tips for getting the most from your stored rainwater."
        guideHref="/guides/rain-barrel"
        guideName="Rain Barrel guide"
        onOpen={openLightbox}
      />

      {/* Section 26: Vegetable Spacing */}
      <InfographicSection
        src="/infographics/vegetable-spacing-ig.png"
        alt="Vegetable Spacing Quick Reference infographic"
        heading="📐 Vegetable Spacing Quick Reference"
        description="Proper plant spacing prevents disease, reduces competition, and maximizes yield. In-ground spacing, square foot gardening density, seed depth, and days to harvest at a glance."
        guideHref="/guides/square-foot-gardening"
        guideName="Square Foot Gardening guide"
        onOpen={openLightbox}
      />

      {/* Section 27: Watering Frequency */}
      <InfographicSection
        src="/infographics/watering-frequency-ig.png"
        alt="Watering Frequency Guide by Plant Category infographic"
        heading="💧 Watering Frequency Guide by Plant Category"
        description="Overwatering is the #1 killer of container plants and new transplants. Use this guide to dial in the right frequency for every plant type in your garden."
        onOpen={openLightbox}
      />

      {/* Ad placeholder 9 */}
      <div id="adsense-infographics-9" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

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
        <Link href="/guides/" className="underline hover:text-garden-600 dark:hover:text-garden-400">Browse all gardening guides</Link>
        {' · '}
        <Link href="/wizard/" className="underline hover:text-garden-600 dark:hover:text-garden-400">Find your perfect plants</Link>
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

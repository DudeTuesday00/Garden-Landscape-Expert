import Link from 'next/link'

const podcasts = [
  {
    emoji: '🌱',
    name: 'Epic Tomatoes Podcast',
    host: 'Craig LeHoullier',
    topics: 'Heirloom tomatoes, seed saving, tomato variety trials, home breeding',
    platforms: 'Apple Podcasts, Spotify',
    bestFor: 'Tomato enthusiasts & seed savers',
    link: 'https://www.epictomatoes.com',
  },
  {
    emoji: '🌿',
    name: 'Permaculture Podcast',
    host: 'Scott Mann',
    topics: 'Regenerative design, food forests, soil building, sustainable land use',
    platforms: 'Apple Podcasts, Spotify, Stitcher',
    bestFor: 'Homesteaders & permaculture designers',
    link: 'https://www.thepermaculturepodcast.com',
  },
  {
    emoji: '🍅',
    name: 'Joe Gardener Show',
    host: 'Joe Lamp\'l',
    topics: 'Organic gardening, soil health, pest management, composting, garden design',
    platforms: 'Apple Podcasts, Spotify, Google Podcasts',
    bestFor: 'All levels — especially beginners wanting depth',
    link: 'https://joegardener.com/podcast/',
  },
  {
    emoji: '🌻',
    name: 'Vegetable Gardening Podcast',
    host: 'Various Contributors',
    topics: 'Seasonal planting, bed prep, variety reviews, succession planting, harvest',
    platforms: 'Apple Podcasts, Spotify',
    bestFor: 'Vegetable gardeners looking for practical tips',
    link: 'https://podcasts.apple.com/us/podcast/vegetable-gardening-podcast',
  },
  {
    emoji: '🌳',
    name: 'Native Plant Podcast',
    host: 'John Magee',
    topics: 'Native plants, ecological gardening, pollinator habitat, regional plant profiles',
    platforms: 'Apple Podcasts, Spotify',
    bestFor: 'Gardeners focused on sustainability and wildlife',
    link: 'https://www.nativeplantpodcast.com',
  },
  {
    emoji: '🌾',
    name: 'Growing Greener Podcast',
    host: 'Thomas Christopher',
    topics: 'Eco-friendly gardening, sustainable landscaping, water conservation, regional experts',
    platforms: 'Apple Podcasts, Spotify',
    bestFor: 'Landscape designers & eco-conscious gardeners',
    link: 'https://www.thomaschristophergardens.com/podcast',
  },
  {
    emoji: '🫙',
    name: 'The Urban Farm Podcast',
    host: 'Greg Peterson',
    topics: 'Urban homesteading, small-space growing, chickens, beekeeping, food independence',
    platforms: 'Apple Podcasts, Stitcher',
    bestFor: 'Urban and suburban food growers',
    link: 'https://theurbanfarm.com/podcast/',
  },
  {
    emoji: '🌿',
    name: 'Slow Flowers Podcast',
    host: 'Debra Prinzing',
    topics: 'Cut flower farming, floral design, seasonal blooms, flower CSA, farmer-florists',
    platforms: 'Apple Podcasts, Spotify',
    bestFor: 'Cut flower growers & floral designers',
    link: 'https://slowflowers.com/podcast/',
  },
]

const topics = [
  { emoji: '🌱', title: 'Seed Starting & Propagation', desc: 'When to start seeds indoors, hardening off, damping off prevention, and the best propagation methods by plant type.' },
  { emoji: '🪱', title: 'Soil Health & Composting', desc: 'Building living soil, vermicomposting, compost tea, no-till methods, and soil testing interpretation.' },
  { emoji: '🐛', title: 'Organic Pest & Disease Management', desc: 'Identifying common garden pests, beneficial insect habitat, organic sprays, and integrated pest management (IPM).' },
  { emoji: '💧', title: 'Irrigation & Water Conservation', desc: 'Drip irrigation setup, rain barrel systems, mulching for moisture retention, and zone-based watering schedules.' },
  { emoji: '✂️', title: 'Pruning & Plant Training', desc: 'When and how to prune fruit trees, tomato suckers, shrubs, and ornamentals for better shape and yield.' },
  { emoji: '🍂', title: 'Seasonal Garden Prep', desc: 'Fall bed cleanup, winter mulching, spring soil prep, and how to succession-plant for continuous harvests.' },
]

export default function Podcasts() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* Hero */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🎙️</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
          Gardening Podcasts
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Learn while you weed, commute, or cook. The best gardening podcasts bring expert voices
          into your earbuds — covering everything from heirloom seeds to regenerative soil science.
        </p>
      </div>

      {/* Why podcasts */}
      <section className="mb-10 p-5 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-800 rounded-2xl">
        <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          🌿 Why Gardeners Love Podcasts
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          Gardening is inherently a listening activity — you're outside, your hands are in the soil,
          and your mind is free to absorb new ideas. Podcasts fill that space perfectly: an expert
          interview during the morning weed pull, a composting deep-dive on the drive to the garden
          center, or a seed-saving discussion on a rainy afternoon.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Unlike video or written guides, podcasts let experienced gardeners talk through nuance —
          the "why" behind techniques, the mistakes they made in year three, the variety they'll
          never grow again. That conversational depth is hard to capture in a blog post.
        </p>
      </section>

      {/* Featured Podcasts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-4">
          🎧 Top Gardening Podcasts to Explore
        </h2>
        <div className="flex flex-col gap-4">
          {podcasts.map(({ emoji, name, host, topics, platforms, bestFor, link }) => (
            <div key={name} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="font-bold text-base text-garden-800 dark:text-garden-300">{name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">with {host}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{topics}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs bg-garden-100 dark:bg-garden-900/30 text-garden-700 dark:text-garden-400 px-2 py-0.5 rounded-full">
                      🎯 {bestFor}
                    </span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
                      📱 {platforms}
                    </span>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-garden-600 dark:text-garden-400 underline hover:text-garden-800 dark:hover:text-garden-300"
                  >
                    Visit website →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad placeholder 1 */}
      <div id="adsense-podcasts-1" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Podcast Topics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          📚 Key Topics Covered in Gardening Podcasts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
          The best gardening podcast episodes tend to cluster around these perennial themes — core
          skills that every listener returns to as their garden evolves and their knowledge deepens.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {topics.map(({ emoji, title, desc }) => (
            <div key={title} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className="font-semibold text-sm text-garden-800 dark:text-garden-300 mb-1">{emoji} {title}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Listen */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          📱 How to Start Listening
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          Most gardening podcasts are free and available on every major platform. Here's how to
          find what works for your device:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm">
            <thead className="bg-garden-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Platform</th>
                <th className="px-4 py-2 text-left font-semibold">Best For</th>
                <th className="px-4 py-2 text-left font-semibold">Cost</th>
                <th className="px-4 py-2 text-left font-semibold">Features</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Apple Podcasts','iPhone / Mac users','Free','Large catalog, smart playlists, offline'],
                ['Spotify','Android & iPhone','Free / Premium','Music + podcasts, seamless switching'],
                ['Overcast','iPhone power users','Free / $9.99/yr','Smart Speed, Voice Boost, playlists'],
                ['Pocket Casts','Cross-platform','$3.99/mo','Best Android experience, cloud sync'],
                ['Google Podcasts','Android / browser','Free','Simple, integrates with Google account'],
                ['Stitcher','Any device','Free / Premium','Good back-catalog, show recommendations'],
              ].map(([platform, bestFor, cost, features]) => (
                <tr key={platform} className="border-t border-gray-100 dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-800/50">
                  <td className="px-4 py-2 font-medium text-gray-800 dark:text-gray-200">{platform}</td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{bestFor}</td>
                  <td className="px-4 py-2 text-garden-700 dark:text-garden-400">{cost}</td>
                  <td className="px-4 py-2 text-gray-500 dark:text-gray-400 text-xs">{features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ad placeholder 2 */}
      <div id="adsense-podcasts-2" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Affiliate Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-4">
          🎧 Listen Better — Gear We Like
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 italic">
          We may earn a small commission from qualifying purchases at no extra cost to you.
        </p>
        <div className="flex flex-col gap-6">

          <div className="bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-garden-50 dark:bg-gray-700 rounded-xl">🎧</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-1">
                  Wireless Earbuds for Outdoor Use
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Water-resistant earbuds that stay put during active gardening. Look for IPX5 or
                  higher rating, 6+ hour battery life, and a secure fit for bending and reaching.
                  A good pair transforms any garden chore into a learning session.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                  {['IPX5+ water/sweat resistance','Secure fit for active movement','6–8 hour battery life','Clear calls for podcast listening'].map(b => (
                    <li key={b} className="flex items-start gap-1"><span className="text-garden-600 font-bold">✓</span> {b}</li>
                  ))}
                </ul>
                <a
                  href="https://www.amazon.com/s?k=wireless+earbuds+outdoor+waterproof"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-garden-600 hover:bg-garden-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
                >
                  Shop on Amazon →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-garden-50 dark:bg-gray-700 rounded-xl">📘</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-1">
                  The Vegetable Gardener's Bible — Edward C. Smith
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  The companion book to dozens of podcast episodes — a practical, beautifully
                  illustrated guide to W-O-R-D bed growing (Wide, Organic, Raised, Deep). Pairs
                  perfectly with the Joe Gardener Show and similar podcasts.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                  {['Over 300 vegetable profiles','Raised bed and deep soil methods','Organic pest & disease tables','Zone-specific timing guidance'].map(b => (
                    <li key={b} className="flex items-start gap-1"><span className="text-garden-600 font-bold">✓</span> {b}</li>
                  ))}
                </ul>
                <a
                  href="https://www.amazon.com/s?k=Vegetable+Gardener%27s+Bible+Edward+Smith"
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
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-3">
          🎙️ Planting Atlas Audio — Coming Soon
        </h2>
        <div className="p-5 bg-earth-50 dark:bg-earth-900/20 border border-earth-300 dark:border-earth-700 rounded-2xl">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            We're developing a Planting Atlas podcast series covering zone-specific gardening topics,
            deep dives on medicinal plants, interviews with market gardeners, and seasonal planning
            discussions. Planned episode topics include:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mt-3">
            {[
              'Zone-by-Zone Spring Planting Calendar (all 9 zones)',
              'Building a Medicinal Herb Garden from Scratch',
              'Hydroponic Systems Compared — Which One Is Right for You?',
              'The Three Sisters in Modern Gardens',
              'Designing a Moon Garden — Plants, Layout, Lighting',
              'Troubleshooting Common Tomato Problems',
            ].map(ep => (
              <li key={ep} className="flex items-start gap-2">
                <span className="text-earth-500 mt-0.5">🎵</span>
                <span>{ep}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related links */}
      <div className="p-4 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-800 rounded-xl text-sm">
        <span className="font-semibold text-garden-800 dark:text-garden-300">Explore more:</span>{' '}
        <Link href="/guides" className="underline hover:text-garden-600 dark:hover:text-garden-400">Browse all gardening guides</Link>
        {' · '}
        <Link href="/infographics" className="underline hover:text-garden-600 dark:hover:text-garden-400">Visual gardening infographics</Link>
        {' · '}
        <Link href="/videos" className="underline hover:text-garden-600 dark:hover:text-garden-400">Gardening videos</Link>
      </div>
    </div>
  )
}

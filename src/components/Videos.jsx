import Link from 'next/link'

const channels = [
  {
    emoji: '🌻',
    name: 'Epic Gardening',
    host: 'Kevin Espiritu',
    subs: '4M+ subscribers',
    focus: 'Raised beds, soil building, plant variety comparisons, garden design',
    style: 'High-production, beginner-friendly, very consistent output',
    bestFor: 'New to intermediate gardeners wanting practical how-to content',
    url: 'https://www.youtube.com/@epicgardening',
  },
  {
    emoji: '🍅',
    name: 'MIgardener',
    host: 'Luke Marion',
    subs: '1.5M+ subscribers',
    focus: 'Budget vegetable gardening, seed starting, tomato growing, organic methods',
    style: 'Casual, genuine, strong community focus',
    bestFor: 'Frugal vegetable gardeners and seed-saving enthusiasts',
    url: 'https://www.youtube.com/@MIgardener',
  },
  {
    emoji: '🌿',
    name: 'Charles Dowding',
    host: 'Charles Dowding',
    subs: '900K+ subscribers',
    focus: 'No-dig gardening, market gardening, compost systems, salad growing',
    style: 'Calm and methodical, excellent production quality, UK-based with universal value',
    bestFor: 'No-dig advocates and serious food growers',
    url: 'https://www.youtube.com/@CharlesDowding1nodig',
  },
  {
    emoji: '🌳',
    name: 'Holganix',
    host: 'Holganix Team',
    subs: 'Niche but highly informative',
    focus: 'Soil biology, biostimulants, root zone health, sustainable lawn & landscape care',
    style: 'Educational, science-forward, short-form explanations',
    bestFor: 'Soil health obsessives and landscape professionals',
    url: 'https://www.youtube.com/@Holganix',
  },
  {
    emoji: '🪴',
    name: 'Harli G',
    host: 'Harli G',
    subs: '500K+ subscribers',
    focus: 'Houseplants, indoor plant care, propagation, plant collection tours',
    style: 'Cozy, aesthetic, strong on houseplant variety and styling',
    bestFor: 'Indoor plant lovers and new houseplant owners',
    url: 'https://www.youtube.com/@HarliG',
  },
  {
    emoji: '🌾',
    name: 'Homestead and Chill',
    host: 'Deanna & Aaron',
    subs: '600K+ subscribers',
    focus: 'Permaculture, food forest, raised beds, cover crops, homesteading',
    style: 'In-depth tutorials, beautifully filmed, strong on sustainable methods',
    bestFor: 'Homesteaders and those building diverse edible landscapes',
    url: 'https://www.youtube.com/@homesteadandchill',
  },
  {
    emoji: '🌺',
    name: 'Garden Answer',
    host: 'Laura LeBoutillier',
    subs: '2M+ subscribers',
    focus: 'Garden design, container planting, ornamental gardening, plant shopping hauls',
    style: 'Visual, lifestyle-oriented, consistent daily content, inspiring for design',
    bestFor: 'Ornamental gardeners and those focused on landscape aesthetics',
    url: 'https://www.youtube.com/@GardenAnswer',
  },
  {
    emoji: '🫚',
    name: 'Self Sufficient Me',
    host: 'Mark Valencia',
    subs: '700K+ subscribers',
    focus: 'Subtropical food growing, backyard fruit, pest control, soil improvement',
    style: 'Australian perspective, warm climate focus, practical and direct',
    bestFor: 'Zones 8–11 gardeners and subtropical food growers',
    url: 'https://www.youtube.com/@SelfSufficientMe',
  },
]

const categories = [
  { emoji: '🌱', title: 'Seed Starting & Transplanting', topics: ['When to start seeds indoors by zone', 'Hardening off seedlings step by step', 'Damping off prevention', 'Best soil mixes for germination', 'Transplanting shock prevention'] },
  { emoji: '🪱', title: 'Soil Building & Composting', topics: ['Hot composting in 18 days', 'Vermicomposting setup', 'No-dig bed preparation', 'Cover crop selection and timing', 'Reading a soil test'] },
  { emoji: '✂️', title: 'Pruning & Training', topics: ['Pruning tomatoes — suckers and structure', 'Apple tree dormant pruning', 'Training climbing roses', 'Pinching annuals for more blooms', 'Niwaki cloud pruning technique'] },
  { emoji: '🐛', title: 'Pest & Disease ID', topics: ['Common tomato diseases (visual ID)', 'Aphid control without chemicals', 'Squash vine borer prevention', 'Powdery mildew organic treatment', 'Beneficial insects to attract'] },
  { emoji: '💧', title: 'Watering & Irrigation', topics: ['Installing a drip irrigation system', 'Rain barrel setup and connection', 'Overwatering vs underwatering signs', 'Best time of day to water', 'Deep watering for drought tolerance'] },
  { emoji: '🏡', title: 'Garden Design & Layout', topics: ['Planning a raised bed kitchen garden', 'Designing a pollinator garden', 'Small-space vertical gardening', 'Front yard curb appeal planting', 'Four-season interest garden design'] },
]

export default function Videos() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* Hero */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">🎬</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
          Gardening Videos
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Watch experienced gardeners work through real techniques in real time. From seed starting to
          harvest, pruning to soil building — video makes complex skills instantly clear.
        </p>
      </div>

      {/* Planting Atlas Original Video */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-1">
          🎬 Planting Atlas Original
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Our first original video — now live.</p>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Jo47nbbQGBI"
              title="The Annual Garden Equation: Buying Time and Renting Color"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-2">
              The Annual Garden Equation: Buying Time and Renting Color
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Annuals live fast and die young — but that life cycle is exactly what makes them
              so powerful in the garden. This video explores how to use annuals strategically:
              bridging gaps between perennial flushes, anchoring containers through the season,
              and choosing varieties that flower continuously rather than burning out by July.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mb-10 p-5 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-800 rounded-2xl">
        <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          📺 Why Video Is the Best Way to Learn Gardening Skills
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          Reading about pruning a fruit tree is valuable — but watching someone do it with an
          explanation running is transformative. Video captures hand position, tool angle, the
          specific bud to cut above, and the subtle judgment calls that live instructions can't
          fully convey. For tactile skills like grafting, potting, seed saving, and bed prep,
          video learning compresses years of trial and error into an afternoon.
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          The gardening video community on YouTube is unusually generous — experienced growers with
          decades of knowledge share freely, comment communities are engaged, and the "watch list"
          approach (saving videos to watch during the relevant season) is a genuine learning strategy
          serious gardeners use.
        </p>
      </section>

      {/* Featured Channels */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-4">
          📺 Best Gardening YouTube Channels
        </h2>
        <div className="flex flex-col gap-4">
          {channels.map(({ emoji, name, host, subs, focus, style, bestFor, url }) => (
            <div key={name} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="font-bold text-base text-garden-800 dark:text-garden-300">{name}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">by {host}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{subs}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1"><strong>Focus:</strong> {focus}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Style:</strong> {style}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs bg-garden-100 dark:bg-garden-900/30 text-garden-700 dark:text-garden-400 px-2 py-0.5 rounded-full">
                      🎯 {bestFor}
                    </span>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-garden-600 dark:text-garden-400 underline hover:text-garden-800 dark:hover:text-garden-300"
                  >
                    View on YouTube →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad placeholder 1 */}
      <div id="adsense-videos-1" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Tutorial Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          🎓 Video Tutorial Categories
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed">
          These are the most-searched tutorial categories in gardening video — whether you're
          looking for a specific technique or building a broader skill set, bookmark the channels
          above and search within them by topic.
        </p>
        <div className="flex flex-col gap-4">
          {categories.map(({ emoji, title, topics }) => (
            <div key={title} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className="font-semibold text-garden-800 dark:text-garden-300 mb-2">{emoji} {title}</div>
              <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
                {topics.map(t => (
                  <li key={t} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                    <span className="text-garden-500 mt-0.5">▸</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Ad placeholder 2 */}
      <div id="adsense-videos-2" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* How to Build a Learning Playlist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-2">
          📋 How to Build a Gardening Video Watch List
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          Smart gardeners don't binge-watch randomly — they build seasonal playlists and watch the
          right video at the right time of year. Here's a practical approach:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm">
            <thead className="bg-garden-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Season</th>
                <th className="px-4 py-2 text-left font-semibold">Best Videos to Watch Now</th>
                <th className="px-4 py-2 text-left font-semibold">Save for Later</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Winter (Dec–Feb)', 'Seed catalogs, indoor seed starting, soil testing, garden design & planning','Spring planting, pruning fruit trees, pest prevention'],
                ['Early Spring (Mar–Apr)', 'Direct sowing, cold frame setup, transplant timing, hardening off seedlings','Summer harvest, trellising, succession planting'],
                ['Late Spring (Apr–May)', 'Transplanting, bed prep, companion planting, tomato training','Watering schedules, pest ID, summer maintenance'],
                ['Summer (Jun–Aug)', 'Watering & irrigation, pest & disease ID, succession sowing, harvesting','Fall prep, composting, cover crops'],
                ['Fall (Sep–Nov)', 'Fall planting, bed cleanup, bulb planting, composting, perennial cutback','Seed starting, forcing bulbs indoors, winter garden'],
              ].map(([season, now, later]) => (
                <tr key={season} className="border-t border-gray-100 dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-800/50">
                  <td className="px-4 py-2 font-medium text-garden-700 dark:text-garden-400">{season}</td>
                  <td className="px-4 py-2 text-gray-700 dark:text-gray-300 text-xs">{now}</td>
                  <td className="px-4 py-2 text-gray-500 dark:text-gray-400 text-xs">{later}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Affiliate Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-4">
          🛠️ Tools Featured in Top Gardening Videos
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-4 italic">
          We may earn a small commission from qualifying purchases at no extra cost to you.
        </p>
        <div className="flex flex-col gap-6">

          <div className="bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-garden-50 dark:bg-gray-700 rounded-xl">🌡️</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-1">
                  Soil Thermometer — Instant Read
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  The single tool most commonly referenced in planting timing videos. Soil temp
                  determines when seeds germinate — tomatoes need 60°F, beans 55°F, peppers 65°F.
                  A $12 soil thermometer removes all the guesswork.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                  {['Instant read in under 10 seconds','Accurate to ±1°F','Works for compost temperature too','Helps time transplanting to avoid shock'].map(b => (
                    <li key={b} className="flex items-start gap-1"><span className="text-garden-600 font-bold">✓</span> {b}</li>
                  ))}
                </ul>
                <a
                  href="https://www.amazon.com/s?k=soil+thermometer+garden"
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
              <div className="sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-garden-50 dark:bg-gray-700 rounded-xl">✂️</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-1">
                  Felco #2 Pruning Shears
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  The most recommended pruner in professional gardening video. Swiss-made, repairable,
                  and built to last decades. Charles Dowding, Epic Gardening, and dozens of other
                  YouTubers have recommended Felco #2 as the last pruner you'll ever need to buy.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                  {['Swiss-made, repairable for life','Clean cuts reduce disease transmission','Replaceable blades and springs','Ergonomic — reduces hand fatigue'].map(b => (
                    <li key={b} className="flex items-start gap-1"><span className="text-garden-600 font-bold">✓</span> {b}</li>
                  ))}
                </ul>
                <a
                  href="https://www.amazon.com/s?k=Felco+2+pruning+shears"
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
              <div className="sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center text-5xl bg-garden-50 dark:bg-gray-700 rounded-xl">💡</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-garden-800 dark:text-garden-300 mb-1">
                  Full-Spectrum LED Grow Light (Seed Starting)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Every seed-starting video eventually addresses light. Leggy seedlings are almost
                  always a light problem. A quality full-spectrum LED set 2–4 inches above seedlings
                  for 14–16 hours per day produces stocky, transplant-ready starts every time.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1">
                  {['Full spectrum for compact, healthy growth','Adjustable height as seedlings grow','Timer-compatible — set and forget','Energy efficient vs. T5 fluorescents'].map(b => (
                    <li key={b} className="flex items-start gap-1"><span className="text-garden-600 font-bold">✓</span> {b}</li>
                  ))}
                </ul>
                <a
                  href="https://www.amazon.com/s?k=full+spectrum+LED+grow+light+seed+starting"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-garden-600 hover:bg-garden-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors"
                >
                  Shop on Amazon →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Coming Soon */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-garden-800 dark:text-garden-300 mb-3">
          🎬 More Planting Atlas Videos — Coming Soon
        </h2>
        <div className="p-5 bg-earth-50 dark:bg-earth-900/20 border border-earth-300 dark:border-earth-700 rounded-2xl">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            We're building a library of original Planting Atlas video content to complement our
            written guides and infographics. Planned first videos:
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            {[
              'Garden Architect Walkthrough — How the Plant Wizard Works',
              'Building a Raised Bed from Scratch — Materials, Soil, First Season',
              'Top 10 Beginner Mistakes (and How to Avoid Them)',
              'Zone 5–7 Spring Planting Timeline — What to Do Each Week',
              'Companion Planting in a 4×8 Raised Bed — Layout Walkthrough',
              'Starting Tomatoes Indoors — Step-by-Step from Seed to Transplant',
            ].map(ep => (
              <li key={ep} className="flex items-start gap-2">
                <span className="text-earth-500 mt-0.5">🎬</span>
                <span>{ep}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ad placeholder 3 */}
      <div id="adsense-videos-3" className="my-8 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700" style={{ minHeight: '280px' }} />

      {/* Related links */}
      <div className="p-4 bg-garden-50 dark:bg-garden-900/20 border border-garden-200 dark:border-garden-800 rounded-xl text-sm">
        <span className="font-semibold text-garden-800 dark:text-garden-300">Explore more:</span>{' '}
        <Link href="/guides" className="underline hover:text-garden-600 dark:hover:text-garden-400">Browse all gardening guides</Link>
        {' · '}
        <Link href="/infographics" className="underline hover:text-garden-600 dark:hover:text-garden-400">Visual infographics</Link>
        {' · '}
        <Link href="/podcasts" className="underline hover:text-garden-600 dark:hover:text-garden-400">Gardening podcasts</Link>
      </div>
    </div>
  )
}

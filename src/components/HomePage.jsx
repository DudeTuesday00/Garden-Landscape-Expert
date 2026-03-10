import Link from 'next/link'
import gardenArchitectImg from './wizard/Garden Architect.png'
import plantopediaImg from './guides/Plantopedia.png'

export default function HomePage() {
  return (
    <div className="px-4 py-8">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6">

        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-garden-800 dark:text-garden-300 leading-tight">
            Planting Atlas
          </h1>
          <p className="mt-2 text-lg text-garden-600 dark:text-garden-400 font-medium">
            Plan it. Plant it. Grow it.
          </p>
        </div>

        {/* Two path cards */}
        <div className="w-full grid sm:grid-cols-2 gap-6">

          {/* Garden Architect */}
          <Link
            href="/wizard"
            className="group bg-white dark:bg-gray-800 border-2 border-garden-200 dark:border-garden-700 hover:border-garden-500 dark:hover:border-garden-400 rounded-3xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col"
          >
            <img
              src={gardenArchitectImg.src}
              alt="Garden Architect"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300">
                  Garden Architect
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  The Smartest Way to Plan Your Garden
                </p>
              </div>
              <span className="self-start bg-garden-600 group-hover:bg-garden-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors duration-200">
                Start Planning →
              </span>
            </div>
          </Link>

          {/* Plantopedia */}
          <Link
            href="/guides"
            className="group bg-white dark:bg-gray-800 border-2 border-earth-400 dark:border-earth-600 hover:border-earth-500 dark:hover:border-earth-400 rounded-3xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col"
          >
            <img
              src={plantopediaImg.src}
              alt="Plantopedia"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300">
                  Plantopedia
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Your Green Thumb Repository
                </p>
              </div>
              <span className="self-start bg-earth-500 group-hover:bg-earth-600 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors duration-200">
                Explore Guides →
              </span>
            </div>
          </Link>

        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          148 plants · 27 live guides · no account required
        </p>
      </div>

      {/* Long-form homepage content */}
      <div className="w-full max-w-3xl mx-auto mt-16 px-2 space-y-14 text-gray-700 dark:text-gray-300">

        {/* About */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            Your Complete Garden Planning Companion
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Whether you're tucking tomatoes into a backyard raised bed in Vermont, designing a
            pollinator meadow on an Arizona hillside, or setting up your first hydroponic system in
            a city apartment, <strong>Planting Atlas</strong> meets you exactly where you are.
            Every garden starts with a question — <em>what should I grow, and how?</em> — and this
            site exists to answer it with precision, clarity, and a genuine love of the craft.
          </p>
          <p className="text-base leading-relaxed">
            We've combined a smart plant-matching engine with an ever-growing library of in-depth
            growing guides to create the most useful free resource on the web for home gardeners
            and landscape enthusiasts alike. No paywalls, no account required — just expert
            guidance, available the moment you need it.
          </p>
        </section>

        {/* Garden Architect */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            Meet the Garden Architect
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The <strong>Garden Architect</strong> is a step-by-step plant recommendation wizard
            unlike anything else online. Instead of handing you a generic list and wishing you
            luck, it asks the questions that actually matter: your USDA hardiness zone, the type
            of soil in your beds, how much sun your space receives, how often you realistically
            plan to water, how much room you have to work with, and your experience level. From
            there, it filters and scores a database of <strong>148 plants across 12 categories</strong> —
            flowers, vegetables, fruits, herbs, trees, shrubs, vines, bulbs, ornamental grasses,
            succulents, ferns, and groundcovers — to surface the best matches for your exact
            situation.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Growing hydroponically? The wizard has a dedicated hydroponic path that skips
            irrelevant outdoor questions — zone, soil, season — and instead asks about your system
            type (deep water culture, NFT, Kratky, ebb and flow, and more). Every compatible plant
            is flagged with hydroponic-specific care notes so you know exactly how to succeed
            without soil.
          </p>
          <p className="text-base leading-relaxed">
            The result is a personalized plant shortlist with descriptions, care notes, and
            growing tips — all tailored to your answers. Think of it as a conversation with an
            experienced master gardener who happens to know every plant in the database.
          </p>
        </section>

        {/* Plantopedia */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            Explore the Plantopedia
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The <strong>Plantopedia</strong> is our growing library of expert gardening guides —
            75+ topics organized into 10 categories that span the full range of what gardeners
            want to grow and create. From towering shade trees to compact container herb gardens,
            from wildflower meadows to precision square-foot vegetable beds, every guide is
            written with real depth: varieties to consider, planting and spacing details, seasonal
            care calendars, pest and problem notes, harvesting tips, and companion planting
            recommendations.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Current guide categories include <strong>Trees &amp; Large Plants</strong> (shade trees,
            fruit trees, privacy screens, fall color, street trees), <strong>Flowers &amp; Color
            Gardens</strong> (pollinator gardens, cottage gardens, moon gardens, cut flower beds,
            spring bulb gardens, long-blooming perennials), <strong>Edible Gardens</strong> (salad
            gardens, pizza gardens, salsa gardens, three sisters, square-foot gardening, edible
            flowers, children's vegetable gardens), <strong>Herbs &amp; Fragrance</strong>, and
            specialty topics like <strong>Medicinal Gardens</strong> — covering 16 healing herbs
            from echinacea to elderberry with harvesting, remedy-making, and safety information.
          </p>
          <p className="text-base leading-relaxed mb-4">
            All content is written for a national US audience covering <strong>USDA Zones 3
            through 11</strong>, with zone-specific timing guidance baked into every seasonal
            calendar. Whether you're gardening in the cold-hardy North, the humid South, the arid
            Southwest, or the mild Pacific Coast, the guides reference your zone directly so you
            always know when to plant, when to harvest, and when to prepare for the next season.
          </p>
          <p className="text-base leading-relaxed">
            New guides are added regularly. Every topic marked "Coming Soon" is actively in
            development — covering landscape design principles, seasonal care, pest and disease
            identification, container and small-space gardening, and eco-friendly and sustainable
            growing practices.
          </p>
        </section>

        {/* Why Planting Atlas */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            Built for Every Kind of Gardener
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Planting Atlas is designed for <strong>beginners</strong> who want to avoid common
            first-season mistakes, <strong>intermediate gardeners</strong> ready to level up their
            plant selection and garden design, and <strong>experienced growers</strong> who want a
            reliable reference at their fingertips. The wizard adapts its recommendations to your
            experience level, and the guides range from "here's how to get started" basics to
            deep dives on advanced techniques like tincture-making, companion planting systems,
            and hydroponic nutrient management.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Gardening is one of the most rewarding skills a person can develop — it connects you
            to the seasons, puts fresh food on your table, brings pollinators and wildlife into
            your yard, and transforms outdoor spaces into places you actually want to spend time.
            Planting Atlas exists to lower the barrier to all of that, for everyone, regardless of
            experience, climate, or available space.
          </p>
          <p className="text-base leading-relaxed">
            Use the <strong>Garden Architect</strong> to find your perfect plants, and the
            <strong> Plantopedia</strong> to learn how to grow them well. Plan it. Plant it. Grow it.
          </p>
        </section>

      </div>
    </div>
  )
}

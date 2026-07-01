import Wizard from '../../components/wizard/Wizard.jsx'

export const metadata = {
  title: 'Garden Architect — Personalized Plant Recommendations',
  description:
    'Answer a few questions about your garden conditions and get personalized plant recommendations from 148 plants. Supports traditional and hydroponic growing across all USDA zones.',
  keywords:
    'plant recommendations, garden planner, USDA zones, hydroponic plants, garden wizard, personalized gardening',
  alternates: {
    canonical: 'https://plantingatlas.com/wizard/',
  },
  openGraph: {
    url: 'https://plantingatlas.com/wizard/',
    title: 'Garden Architect — Personalized Plant Recommendations | Planting Atlas',
    description:
      'Answer a few questions about your garden conditions and get personalized plant recommendations from 148 plants. Supports traditional and hydroponic growing across all USDA zones.',
  },
  twitter: {
    title: 'Garden Architect — Personalized Plant Recommendations | Planting Atlas',
    description:
      'Answer a few questions about your garden conditions and get personalized plant recommendations from 148 plants. Traditional or hydroponic, all USDA zones.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the Garden Architect plant recommendation wizard work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Garden Architect asks 8 targeted questions about your garden conditions — plant type, growing method, USDA hardiness zone, sunlight, soil type, watering habits, space, and experience level. It then filters and scores a database of 148 plants across 12 categories to produce a personalized plant list matched to your specific situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What USDA hardiness zones does the plant wizard support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Garden Architect supports all USDA hardiness zones from 3 to 11, covering the full range of climates across the United States — from the cold winters of Minnesota (Zone 3) to the year-round warmth of coastal California and Hawaii (Zone 10–11).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the wizard work for hydroponic growers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Garden Architect has a dedicated hydroponic path. When you select hydroponic as your growing method, it skips outdoor-only questions (zone, soil, season) and instead asks about your system type — deep water culture, nutrient film technique, Kratky, or ebb and flow. Results are filtered to hydroponic-compatible plants with system-specific care notes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this plant recommendation tool free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Garden Architect is completely free to use. No account or sign-up is required. You can run it as many times as you like — each run takes about two minutes and produces a fresh set of personalized plant recommendations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of plants are in the recommendation database?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The database includes 148 plants across 12 types: flowers, vegetables, fruits, herbs, trees, shrubs, vines, bulbs, ornamental grasses, succulents, ferns, and groundcovers. Each plant entry includes zone compatibility, sunlight needs, soil preferences, water requirements, space requirements, seasonal timing, and care notes.',
      },
    },
  ],
}

export default function WizardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Wizard />

      {/* Long-form editorial content — always visible, indexed by Google */}
      <div className="w-full max-w-3xl mx-auto mt-6 px-4 pb-20 space-y-14 text-gray-700 dark:text-gray-300 print:hidden">

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            Why a Plant Recommendation Wizard?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Walk into any garden center and you'll find hundreds of plant options, almost none of
            them labeled with the honest truth: <em>this one will struggle in your soil, that one
            needs more sun than your yard gets, and those three won't survive your winters.</em>
            Most gardening advice online is written for a generic audience — a fictional gardener
            with perfect loam soil, full sun, and a Zone 6 climate. If that's not you, the advice
            doesn't fit.
          </p>
          <p className="text-base leading-relaxed">
            The <strong>Garden Architect</strong> was built to fix that. It works the way a good
            master gardener would: by asking about <em>your</em> specific conditions before making
            any recommendations. The result is a personalized plant list matched to your climate,
            your soil, your light, your space, and your schedule — not someone else's.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            How It Works: 8 Questions, Hundreds of Possibilities
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The wizard takes about two minutes to complete. You'll be asked a series of targeted
            questions — your plant type preferences, your growing method, your USDA hardiness
            zone, sunlight availability, soil type, watering habits, available space, and
            experience level. Each answer narrows and scores a database of{' '}
            <strong>148 plants across 12 categories</strong>, including flowers, vegetables,
            fruits, herbs, trees, shrubs, vines, bulbs, ornamental grasses, succulents, ferns,
            and groundcovers.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Behind the scenes, the matching engine runs two types of logic. Hard filters eliminate
            plants that simply won't work for you — a Zone 4 gardener won't see plants that die
            below Zone 7, and a full-shade yard won't surface sun-loving crops. Soft scoring then
            ranks the remaining candidates based on how well they match your soil, water habits,
            space, and skill level, so the plants at the top of your results are genuinely the
            best fit, not just technically possible options.
          </p>
          <p className="text-base leading-relaxed">
            Every recommended plant comes with a description, care notes, and growing tips written
            specifically for your path — traditional outdoor growing or hydroponics. You leave
            with a real shortlist, not a wall of text to wade through.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            Covers Every Climate Across the United States
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The Garden Architect supports all <strong>USDA hardiness zones from 3 to 11</strong>,
            meaning it works whether you're gardening in the frigid winters of Minnesota (Zone 3),
            the humid summers of the Gulf Coast (Zone 9), the dry heat of Phoenix (Zone 10), or
            the mild year-round climate of coastal California (Zone 10–11). Zone compatibility is
            built into the database at the plant level — every entry lists exactly which zones it
            thrives in, and the wizard filters accordingly.
          </p>
          <p className="text-base leading-relaxed">
            Not sure what zone you're in? A general rule: the colder your winters, the lower your
            zone number. Zone 5 sees winters as cold as -20°F; Zone 9 rarely dips below 20°F.
            The USDA Plant Hardiness Zone Map is freely available online and pinpoints your zone
            down to a half-zone by ZIP code. Once you know your zone, the wizard handles the rest.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            A Dedicated Path for Hydroponic Growers
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Hydroponic gardening has exploded in popularity — and for good reason. Growing without
            soil means faster growth rates, year-round production indoors, water savings of up to
            90% compared to traditional irrigation, and the ability to garden in apartments,
            garages, basements, and other spaces where a conventional garden is impossible.
          </p>
          <p className="text-base leading-relaxed mb-4">
            The Garden Architect's hydroponic path is purpose-built for these growers. When you
            select "hydroponic" as your growing method, the wizard automatically skips questions
            that don't apply indoors — climate zone, soil type, and outdoor season — and instead
            asks about your system type: deep water culture (DWC), nutrient film technique (NFT),
            Kratky (passive hydroponics), ebb and flow, or wicking systems. The database is then
            filtered to plants with the <strong>hydroponic: true</strong> flag, and every result
            includes system-specific care notes covering nutrient levels, pH targets, and harvest
            timing.
          </p>
          <p className="text-base leading-relaxed">
            Whether you're running a compact Kratky lettuce setup on a kitchen shelf or a full
            DWC system in a dedicated grow room, the wizard will find plants that fit your
            system and your goals.
          </p>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            From First-Time Gardeners to Seasoned Growers
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Experience level is one of the eight wizard questions for a reason. A beginner
            selecting "just starting out" will receive results weighted toward forgiving,
            low-maintenance plants — zucchini, sunflowers, mint, cherry tomatoes — that deliver
            satisfying results without demanding expert care. An experienced grower selecting
            "advanced" will see a broader range that includes more challenging and rewarding
            options like artichokes, espaliered fruit trees, or specialty herbs with precise
            growing requirements.
          </p>
          <p className="text-base leading-relaxed mb-4">
            The wizard is designed to grow with you. Revisit it each season as your skills
            improve, your garden space changes, or you want to experiment with a new plant
            category. Each run takes only two minutes and produces a fresh set of recommendations
            based on your current answers.
          </p>
          <p className="text-base leading-relaxed">
            Once you have your plant list, head to the{' '}
            <strong>Plantopedia</strong> for in-depth growing guides on many of the same species —
            seasonal care calendars, companion planting tips, pest management, harvesting
            guidance, and more. The wizard tells you what to grow; the Plantopedia teaches you
            how to grow it exceptionally well.
          </p>
        </section>

      </div>
    </>
  )
}

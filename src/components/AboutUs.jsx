import Link from 'next/link'

export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 space-y-8">

        {/* Hero */}
        <div>
          <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300 mb-4">
            About Planting Atlas
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi, I&apos;m <strong>David Rodgers</strong>, the founder of Planting Atlas and the person who
            researches, writes, and maintains the information on this site.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-100 dark:border-gray-700" />

        {/* Why I Built It */}
        <div>
          <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-3">
            Why I Built Planting Atlas
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            After 40 years of trial-and-error gardening in Oklahoma&apos;s unpredictable Zone 7 climate,
            I got tired of generic advice that didn&apos;t account for real backyard conditions. I created
            Planting Atlas in 2024 so every home gardener could get hyper-local, zone-specific
            recommendations without paywalls or fluff.
          </p>
        </div>

        {/* Background & Credentials */}
        <div>
          <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-3">
            My Gardening Background &amp; Credentials
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <span className="text-garden-600 dark:text-garden-400 flex-shrink-0 mt-0.5">✓</span>
              <span>40 years of hands-on experience growing vegetables, flowers, herbs, and fruit trees in Oklahoma — not always successfully.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-garden-600 dark:text-garden-400 flex-shrink-0 mt-0.5">✓</span>
              <span>Self-taught through years of backyard trial and error, soil testing, and learning from local extension offices.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-garden-600 dark:text-garden-400 flex-shrink-0 mt-0.5">✓</span>
              <span>In the hope of minimizing the struggle of others, I decided to assemble all the information I wish I had access to over the years.</span>
            </li>
          </ul>
        </div>

        {/* How Content Is Created */}
        <div>
          <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-3">
            How Our Content Is Created
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Every one of the 50+ Plantopedia guides and the Garden Architect recommendation engine
            follows a strict process:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <span className="text-garden-600 dark:text-garden-400 flex-shrink-0 mt-0.5">✓</span>
              <span>Research is drawn from primary sources: USDA Hardiness Zone data, university extension publications (e.g., Oklahoma State University, Texas A&amp;M), peer-reviewed horticulture journals, and real-world trial data from my own garden and community testers.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-garden-600 dark:text-garden-400 flex-shrink-0 mt-0.5">✓</span>
              <span>All care calendars, companion-planting charts, and pest solutions are cross-checked against at least two university or extension sources.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-garden-600 dark:text-garden-400 flex-shrink-0 mt-0.5">✓</span>
              <span>Content is updated annually or whenever new research emerges.</span>
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-xl font-bold text-garden-800 dark:text-garden-300 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Planting Atlas exists to make expert-level gardening simple, free, and tailored to your
            exact backyard. Whether you&apos;re in Zone 3 or Zone 11, growing in raised beds, containers,
            or hydroponics, you deserve accurate, trustworthy information you can actually use.
          </p>
        </div>

        {/* Closing */}
        <div className="bg-garden-50 dark:bg-gray-700 rounded-xl p-5 border border-garden-100 dark:border-gray-600">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            If you have questions, feedback, or want to share your own garden story, I&apos;d love to
            hear from you on the{' '}
            <Link href="/contact" className="text-garden-700 dark:text-garden-400 underline hover:text-garden-800">
              Contact page
            </Link>.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            — David Rodgers<br />
            <span className="font-medium">Founder &amp; Head Gardener</span><br />
            Planting Atlas<br />
            Norman, Oklahoma
          </p>
        </div>

      </div>
    </div>
  )
}

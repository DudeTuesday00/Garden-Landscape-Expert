export default function AdvertisingDisclosure() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300 mb-2">
            Advertising Disclosure
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            How advertising appears on Planting Atlas.
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Planting Atlas may display advertising, including Google AdSense placements, to support
          the cost of building and publishing free gardening content.
        </p>

        <hr className="border-gray-100 dark:border-gray-700" />

        <div className="space-y-6 text-gray-700 dark:text-gray-300">

          <div>
            <h2 className="text-lg font-semibold text-garden-800 dark:text-garden-300 mb-2">
              Advertising May Appear
            </h2>
            <p className="leading-relaxed">
              Pages on Planting Atlas may display ad units, including Google AdSense placements,
              in order to help fund guide creation, tool development, and site maintenance.
              All content on this site remains free to access and requires no account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-garden-800 dark:text-garden-300 mb-2">
              Ads Are Not Endorsements
            </h2>
            <p className="leading-relaxed">
              An advertisement appearing on the site does not mean Planting Atlas recommends,
              endorses, or has personally reviewed the advertiser or the advertised product.
              Ad placements are served automatically based on page content and visitor context.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-garden-800 dark:text-garden-300 mb-2">
              Editorial Separation
            </h2>
            <p className="leading-relaxed">
              The goal is to keep educational content useful on its own, with advertising
              layered in cleanly rather than used as a substitute for real guidance. Content
              should stay planning-first and plant-first — every guide is written to be
              genuinely helpful independent of any advertising that appears alongside it.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-garden-800 dark:text-garden-300 mb-2">
              Advertising Providers
            </h2>
            <p className="leading-relaxed">
              Third-party ad providers, including Google, may use their own systems, cookies,
              and measurement tools to serve and track ad performance. Readers should review
              the relevant provider policies for more detail about how those systems work.
              You can manage personalized ad preferences at{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-garden-600 dark:text-garden-400 underline"
              >
                Google Ad Settings
              </a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

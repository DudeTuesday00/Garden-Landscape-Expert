import SEO from './SEO.jsx'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SEO
        title="Privacy Policy"
        description="Planting Atlas privacy policy. Learn how we use cookies, analytics, and advertising on our garden planning site."
        path="/#privacy"
      />

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: March 8, 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Overview</h2>
            <p>
              Planting Atlas ("we", "us", or "our") operates the website{' '}
              <a href="https://plantingatlas.com" className="text-garden-600 dark:text-garden-400 underline">plantingatlas.com</a>.
              This page explains what information we collect, how we use it, and your rights regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Information We Collect</h2>
            <p>We do not collect or store any personally identifiable information directly. However, third-party services embedded on this site may collect data as described below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Analytics — Google Analytics 4</h2>
            <p>
              We use Google Analytics 4 (GA4) to understand how visitors interact with the site. GA4 collects anonymized usage data such as pages visited, time on site, and general geographic region.
              Google may use cookies to track this information. You can opt out via the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-garden-600 dark:text-garden-400 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Advertising — Google AdSense</h2>
            <p>
              This site uses Google AdSense to display advertisements. AdSense may use cookies and web beacons to serve ads based on your prior visits to this and other websites.
              You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" className="text-garden-600 dark:text-garden-400 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Affiliate Links — Home Depot / Impact</h2>
            <p>
              Planting Atlas participates in the Home Depot affiliate program through the Impact affiliate network.
              Some links on this site may be affiliate links — if you click one and make a purchase, we may earn a small commission at no extra cost to you.
              Impact may use cookies to track referrals. See the{' '}
              <a href="https://www.homedepot.com/c/Privacy_Security" className="text-garden-600 dark:text-garden-400 underline" target="_blank" rel="noopener noreferrer">Home Depot Privacy Policy</a> for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Cookies</h2>
            <p>
              We use a single first-party cookie (<code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-sm">gle-dark-mode</code>) to remember your light/dark mode preference.
              Third-party services (Google Analytics, AdSense, Impact) may set additional cookies as described in their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Data Sharing & Sale</h2>
            <p>We do not sell, trade, or rent your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Your Rights</h2>
            <p>
              Depending on your location, you may have rights under GDPR, CCPA, or other privacy laws to access, correct, or delete data collected about you.
              For data held by Google, use Google's{' '}
              <a href="https://myaccount.google.com/data-and-privacy" className="text-garden-600 dark:text-garden-400 underline" target="_blank" rel="noopener noreferrer">Data & Privacy settings</a>.
              For other requests, contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Contact</h2>
            <p>
              Questions about this policy? Email us at{' '}
              <a href="mailto:privacy@plantingatlas.com" className="text-garden-600 dark:text-garden-400 underline">privacy@plantingatlas.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2">Changes to This Policy</h2>
            <p>We may update this policy periodically. Changes will be reflected by the "Last updated" date at the top of this page.</p>
          </section>

        </div>
      </div>
    </div>
  )
}

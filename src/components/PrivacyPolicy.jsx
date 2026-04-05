const h2 = 'text-xl font-semibold text-garden-800 dark:text-garden-300 mb-2'
const h3 = 'text-base font-semibold text-garden-700 dark:text-garden-400 mb-1 mt-4'
const link = 'text-garden-600 dark:text-garden-400 underline'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
        <h1 className="text-3xl font-bold text-garden-800 dark:text-garden-300 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: April 5, 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">

          <section>
            <h2 className={h2}>Overview</h2>
            <p>Planting Atlas ("we", "us", or "our") operates <a href="https://plantingatlas.com" className={link}>plantingatlas.com</a>. This policy explains what information is collected when you visit our site, which third-party services process that data, and what rights you have.</p>
            <p className="mt-2">We do not collect or store personally identifiable information directly. All data collection occurs through the third-party services described below.</p>
          </section>

          <section>
            <h2 className={h2}>Third-Party Data Processors</h2>
            <p>The following services are embedded on this site and may collect data independently under their own privacy policies.</p>

            <h3 className={h3}>Google Tag Manager (GTM-TT46476S)</h3>
            <p>We use Google Tag Manager to deploy and manage analytics and advertising tags. GTM itself does not collect personal data, but it loads the scripts described below. GTM is initialized on every page load. <a href="https://policies.google.com/privacy" className={link} target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>

            <h3 className={h3}>Google Analytics 4 (G-7S7248T634)</h3>
            <p>GA4 collects anonymized usage data including pages visited, time on site, scroll depth, clicks, general geographic region (country/city level), device type, browser, and referral source. GA4 uses first-party cookies and may use a unique client ID stored in your browser. No personally identifiable information is sent. You can opt out via the <a href="https://tools.google.com/dlpage/gaoptout" className={link} target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

            <h3 className={h3}>Google AdSense (ca-pub-2083020536499662)</h3>
            <p>This site displays advertisements through Google AdSense. AdSense and its partners use cookies, web beacons, and device identifiers to serve ads based on your prior visits to this and other websites. Data collected may include IP address, browser type, cookie identifiers, and inferred interests. You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" className={link} target="_blank" rel="noopener noreferrer">Google Ad Settings</a> or via the <a href="https://optout.aboutads.info/" className={link} target="_blank" rel="noopener noreferrer">Digital Advertising Alliance opt-out</a>.</p>

            <h3 className={h3}>Formspree (Contact Form)</h3>
            <p>Our contact form is powered by Formspree (formspree.io). When you submit the contact form, Formspree receives and stores your name, email address, subject, and message. Formspree processes this data to deliver your message to us. <a href="https://formspree.io/legal/privacy-policy" className={link} target="_blank" rel="noopener noreferrer">Formspree Privacy Policy</a></p>

            <h3 className={h3}>Amazon Associates & Impact (Affiliate Links)</h3>
            <p>Planting Atlas participates in the Amazon Associates Program and affiliate programs managed through Impact. Some product links on this site are affiliate links — if you click one and make a purchase, we may earn a small commission at no extra cost to you. Clicking an affiliate link may place a tracking cookie in your browser so the retailer can attribute the referral. <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" className={link} target="_blank" rel="noopener noreferrer">Amazon Privacy Notice</a> · <a href="https://impact.com/privacy-policy/" className={link} target="_blank" rel="noopener noreferrer">Impact Privacy Policy</a></p>
          </section>

          <section>
            <h2 className={h2}>Cookies & Local Storage</h2>
            <p>This site uses the following first-party cookies and browser storage:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-sm">pa-dark-mode</code> — remembers your light/dark mode preference</li>
              <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-sm">pa-cookie-consent</code> — records whether you have acknowledged this cookie notice</li>
            </ul>
            <p className="mt-2">Third-party services (Google Analytics, AdSense, Amazon) may set additional cookies in your browser as described in their own privacy policies above.</p>
          </section>

          <section>
            <h2 className={h2}>Data Sharing & Sale</h2>
            <p>We do not sell, trade, or rent your personal data to third parties. Data flows only through the processors named above, each governed by its own privacy policy.</p>
          </section>

          <section>
            <h2 className={h2}>Your Rights</h2>
            <p>Depending on your location, you may have rights under GDPR, CCPA, or other privacy laws, including the right to access, correct, or delete data held about you.</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>For data held by Google: <a href="https://myaccount.google.com/data-and-privacy" className={link} target="_blank" rel="noopener noreferrer">Google Data & Privacy settings</a></li>
              <li>For data submitted via our contact form: email us at the address below to request deletion</li>
              <li>To opt out of interest-based advertising: <a href="https://optout.aboutads.info/" className={link} target="_blank" rel="noopener noreferrer">aboutads.info</a> or <a href="https://optout.networkadvertising.org/" className={link} target="_blank" rel="noopener noreferrer">networkadvertising.org</a></li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:privacy@plantingatlas.com" className={link}>privacy@plantingatlas.com</a>.</p>
          </section>

          <section>
            <h2 className={h2}>Changes to This Policy</h2>
            <p>We may update this policy periodically. Changes will be reflected by the "Last updated" date at the top of this page.</p>
          </section>

        </div>
      </div>
    </div>
  )
}

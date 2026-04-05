import './globals.css'
import { Raleway, Lato } from 'next/font/google'
import Script from 'next/script'
import Link from 'next/link'
import Nav from '../components/Nav.jsx'
import CookieBanner from '../components/CookieBanner.jsx'

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Planting Atlas — Plan it. Plant it. Grow it.',
    template: '%s | Planting Atlas',
  },
  description:
    'Your complete planting atlas for gardens and landscapes. Get personalized plant recommendations from 148 plants across 12 types, or browse 75+ expert growing guides by USDA zone.',
  keywords:
    'planting guide, landscape design, garden planning, USDA zones, plant database, gardening expert, hydroponic gardening, Plantopedia, Garden Architect',
  metadataBase: new URL('https://plantingatlas.com'),
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    siteName: 'Planting Atlas',
    type: 'website',
    locale: 'en_US',
    title: 'Planting Atlas — Plan it. Plant it. Grow it.',
    description:
      'Your complete planting atlas for gardens and landscapes. Get personalized plant recommendations from 148 plants across 12 types, or browse 75+ expert growing guides by USDA zone.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Planting Atlas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planting Atlas — Plan it. Plant it. Grow it.',
    description:
      'Your complete planting atlas for gardens and landscapes. Zone-specific plant recommendations, garden design tools, and expert guides for every climate.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${raleway.variable} ${lato.variable}`}>
      <head>
        {/* Dark mode — synchronous, runs before paint to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('gle-dark-mode'),p=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='true'||(s===null&&p))document.documentElement.classList.add('dark')})();`,
          }}
        />

        {/* Google Tag Manager — must be first script in <head> per Google's guidance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TT46476S');`,
          }}
        />

        {/* Google AdSense account verification */}
        <meta name="google-adsense-account" content="ca-pub-2083020536499662" />
      </head>
      <body>
        {/* GTM noscript fallback — immediately after <body> per Google's guidance */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TT46476S"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Impact Affiliate Verification */}
        <div style={{ display: 'none' }}>
          Impact-Site-Verification: ae2fc8f9-c715-46bc-b4f7-0bce13c50844
        </div>

        <div className="min-h-screen bg-gradient-to-b from-garden-50 to-white dark:from-gray-900 dark:to-gray-900">
          <Nav />
          <main>{children}</main>
          <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-400 dark:text-gray-500">
            <div className="max-w-3xl mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-3">
                <Link href="/infographics" className="hover:text-garden-600 dark:hover:text-garden-400 transition-colors">🖼️ Infographics</Link>
                <Link href="/podcasts"     className="hover:text-garden-600 dark:hover:text-garden-400 transition-colors">🎙️ Podcasts</Link>
                <Link href="/videos"       className="hover:text-garden-600 dark:hover:text-garden-400 transition-colors">🎬 Videos</Link>
                <Link href="/guides"       className="hover:text-garden-600 dark:hover:text-garden-400 transition-colors">📖 Plantopedia</Link>
                <Link href="/wizard"       className="hover:text-garden-600 dark:hover:text-garden-400 transition-colors">🌱 Garden Architect</Link>
              </div>
              <p>
                © {new Date().getFullYear()} Planting Atlas &nbsp;·&nbsp;
                <Link
                  href="/about"
                  className="underline hover:text-garden-600 dark:hover:text-garden-400 transition-colors"
                >
                  About
                </Link>
                &nbsp;·&nbsp;
                <Link
                  href="/privacy"
                  className="underline hover:text-garden-600 dark:hover:text-garden-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                &nbsp;·&nbsp;
                <Link
                  href="/contact"
                  className="underline hover:text-garden-600 dark:hover:text-garden-400 transition-colors"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </footer>
        </div>

        {/* GA4 — load after page becomes interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7S7248T634"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-7S7248T634');
        `}</Script>

        {/* AdSense auto-ads */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2083020536499662"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        <CookieBanner />
      </body>
    </html>
  )
}

import Link from 'next/link'

export default function AuthorBox() {
  return (
    <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="bg-garden-50 dark:bg-gray-800 rounded-xl border border-garden-100 dark:border-gray-700 p-5">
        <div className="flex gap-4 items-start">
          <img
            src="/about-me-image.png"
            alt="David Rodgers"
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h3 className="text-base font-bold text-garden-800 dark:text-garden-300 mb-2">
              About the Author
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              <strong>David Rodgers</strong> is the Founder &amp; Head Gardener of Planting Atlas.
              With over 40 years of hands-on gardening experience in Oklahoma&apos;s Zone 7 climate,
              he researches, writes, and personally tests every guide on the site.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              David draws from real backyard trials, soil testing, and trusted sources like Oklahoma
              State University Extension and USDA data to deliver practical, zone-specific advice
              that actually works.
            </p>
            <Link
              href="/about"
              className="text-sm font-semibold text-garden-700 dark:text-garden-400 hover:text-garden-900 dark:hover:text-garden-300 transition-colors"
            >
              Read more about David and Planting Atlas →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Nav() {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Sync dark state with what the inline script already applied to <html>
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  function toggleDark() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('gle-dark-mode', String(next))
  }

  function isActive(href) {
    const base = href.endsWith('/') ? href.slice(0, -1) : href
    return pathname === base || pathname === base + '/' || pathname.startsWith(base + '/')
  }

  function navCls(href) {
    return `px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
      isActive(href)
        ? 'bg-garden-600 text-white'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`
  }

  function mobileNavCls(href) {
    return `block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
      isActive(href)
        ? 'bg-garden-600 text-white'
        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`
  }

  // About and Contact are intentionally left out of the nav — both are one
  // click away in the footer on every page, and dropping them (plus the
  // search icon, now a full-width bar on the homepage) is what keeps this
  // list short enough to actually center on one line.
  const navLinks = [
    { href: '/wizard/',                 label: '🌱 Garden Architect' },
    { href: '/plants/',                 label: '🌿 Plant Database' },
    { href: '/tools/',                  label: '🧰 Tools' },
    { href: '/guides/',                 label: '📖 Plantopedia' },
    { href: '/infographics/',           label: '🗺️ Infographics' },
    { href: '/videos/',                 label: '🎬 Videos' },
    { href: '/podcasts/',               label: '🎙️ Podcasts' },
    { href: '/newsletters/',            label: '📬 Newsletter' },
    { href: '/my-garden/',              label: '❤️ My Garden' },
    { href: 'https://pixelsandchisels.etsy.com', label: '🖨️ Shop', external: true },
  ]

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-sm sticky top-0 z-10 print:hidden">
      <div className="w-full px-4 sm:px-6 h-14 grid grid-cols-[auto_1fr_auto] items-center gap-3">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-garden-700 dark:text-garden-400 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl">🌿</span>
          <span className="font-bold text-sm tracking-wide uppercase hidden sm:block">Planting Atlas</span>
          <span className="font-bold text-sm tracking-wide uppercase sm:hidden">PA</span>
        </Link>

        {/* Desktop nav — centered in the remaining space regardless of brand width.
            The dark-mode toggle lives inside this same flex-wrap group (not a
            separate grid cell) so if the list ever wraps to a second line on a
            narrower "md" width, the toggle wraps with it instead of floating
            off to the side on its own. */}
        <nav className="hidden md:flex items-center justify-center gap-1 flex-wrap">
          {navLinks.map(({ href, label, external }) =>
            external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={navCls(href)}>
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className={navCls(href)}>
                {label}
              </Link>
            )
          )}
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Spacer to balance the brand on mobile's 3-col grid; desktop nav above
            already accounts for the toggle, so this cell stays empty on md+ */}
        <div className="hidden md:block" />

        {/* Mobile controls — dark toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden col-start-3 justify-self-end">
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label, external }) =>
            external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={mobileNavCls(href)}>
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className={mobileNavCls(href)}>
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  )
}

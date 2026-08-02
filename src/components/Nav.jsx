'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import SiteSearch from './SiteSearch.jsx'

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
    return `px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
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

  const navLinks = [
    { href: '/wizard/',                 label: '🌱 Garden Architect' },
    { href: '/plants/',                 label: '🌿 Plant Database' },
    { href: '/tools/',                  label: '🧰 Tools' },
    { href: '/guides/',                 label: '📖 Plantopedia' },
    { href: '/infographics/',           label: '🗺️ Infographics' },
    { href: '/videos/',                 label: '🎬 Videos' },
    { href: '/podcasts/',               label: '🎙️ Podcasts' },
    { href: '/newsletters/',            label: '📬 Newsletter' },
    { href: 'https://pixelsandchisels.etsy.com', label: '🖨️ Shop', external: true },
    { href: '/about/',                  label: '👤 About' },
    { href: '/contact/',                label: '✉️ Contact' },
  ]

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-sm sticky top-0 z-10 print:hidden">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-garden-700 dark:text-garden-400 hover:opacity-80 transition-opacity"
        >
          <span className="text-xl">🌿</span>
          <span className="font-bold text-sm tracking-wide uppercase hidden sm:block">Planting Atlas</span>
          <span className="font-bold text-sm tracking-wide uppercase sm:hidden">PA</span>
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1">
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
          <SiteSearch />
          <button
            onClick={toggleDark}
            className="ml-1 p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Mobile controls — search + dark toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <SiteSearch />
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

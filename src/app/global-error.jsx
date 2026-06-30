'use client'

// Catches errors thrown by the root layout itself — must render its own
// <html>/<body> since it replaces the layout entirely. Kept dependency-free
// (inline styles, no Tailwind/font assumptions) since the root layout may be
// the thing that failed.
export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            maxWidth: 480,
            margin: '6rem auto',
            padding: '0 1rem',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍂</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2F6B3F', marginBottom: '0.75rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: 1.6 }}>
            A critical error stopped the page from loading. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.625rem 1.5rem',
              borderRadius: '0.75rem',
              backgroundColor: '#6FBF4B',
              color: 'white',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}

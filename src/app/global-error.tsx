'use client'

// Global Error Boundary for App Router
// This handles errors in the root layout itself.
// MUST include <html> and <body> tags (replaces root layout).
// DO NOT import Html from 'next/document' - use native html tags.

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172a',
        color: '#f1f5f9',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: 0, color: '#f43f5e' }}>
          Critical Error
        </h1>
        <p style={{ fontSize: '1.25rem', margin: '1rem 0', color: '#94a3b8' }}>
          Something went seriously wrong.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.75rem 2rem',
              background: '#14b8a6',
              color: '#fff',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            Try again
          </button>
          <a
            href="/"
            style={{
              padding: '0.75rem 2rem',
              background: '#1e293b',
              color: '#94a3b8',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Go Home
          </a>
        </div>
      </body>
    </html>
  )
}

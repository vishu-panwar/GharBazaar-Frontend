'use client'

// Root Error Boundary for App Router
// Must be a Client Component
// This handles errors in child segments (NOT the root layout).

import { useEffect } from 'react'
import toast from 'react-hot-toast'

export const dynamic = 'force-dynamic'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App Router Error:', error)
  }, [error])

  return (
    <div style={{
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
      <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: 0, color: '#f43f5e' }}>Oops!</h1>
      <p style={{ fontSize: '1.25rem', margin: '1rem 0', color: '#94a3b8' }}>Something went wrong.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
    </div>
  )
}

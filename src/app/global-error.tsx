'use client'

// Global Error Boundary for App Router
// Handles errors in the root layout itself.
// Next.js REQUIRES html+body tags here, but to avoid Pages Router
// Html-outside-document errors on /404 and /500, we use suppressHydrationWarning.

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning style={{ margin: 0, background: '#0f172a', color: '#f1f5f9', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '4rem', fontWeight: 700, color: '#f43f5e', margin: 0 }}>Oops!</h1>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', margin: '1rem 0' }}>Something went wrong.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button onClick={reset} style={{ padding: '0.75rem 2rem', background: '#14b8a6', color: '#fff', border: 'none', borderRadius: '9999px', cursor: 'pointer', fontWeight: 600 }}>
              Try again
            </button>
            <a href="/" style={{ padding: '0.75rem 2rem', background: '#1e293b', color: '#94a3b8', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600 }}>
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}

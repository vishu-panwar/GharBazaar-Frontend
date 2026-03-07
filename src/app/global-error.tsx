'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#0f172a', color: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 700, margin: 0, color: '#f43f5e' }}>500</h1>
        <p style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#94a3b8' }}>Something went wrong</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={() => reset()}
            style={{ padding: '0.75rem 2rem', background: '#14b8a6', color: '#fff', border: 'none', borderRadius: '9999px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem' }}
          >
            Try again
          </button>
          <a href="/" style={{ padding: '0.75rem 2rem', background: '#1e293b', color: '#94a3b8', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600 }}>
            Go Home
          </a>
        </div>
      </body>
    </html>
  )
}

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#0f172a', color: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 700, margin: 0, color: '#14b8a6' }}>404</h1>
        <p style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#94a3b8' }}>Page Not Found</p>
        <a href="/" style={{ marginTop: '1rem', padding: '0.75rem 2rem', background: '#14b8a6', color: '#fff', borderRadius: '9999px', textDecoration: 'none', fontWeight: 600 }}>
          Go Home
        </a>
      </body>
    </html>
  )
}

export default function Custom404() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        color: "#f1f5f9",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: 700,
          margin: 0,
          color: "#14b8a6",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "1.5rem", margin: "1rem 0", color: "#94a3b8" }}>
        Page Not Found
      </p>
      <a
        href="/"
        style={{
          padding: "0.75rem 2rem",
          background: "#14b8a6",
          color: "#fff",
          borderRadius: "9999px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Go Home
      </a>
    </div>
  );
}

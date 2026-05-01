export default function AIToolsPage() {
  return (
   <main
  style={{
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#0f172a",
    background: "linear-gradient(180deg, #f4f9f9, #f1f6f5)",
    minHeight: "100vh"
  }}
>

      {/* TITLE */}
      <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "10px" }}>
        Best AI Tools by Category (2026)
      </h1>

      {/* INTRO */}
      <p style={{ color: "#9ca3af", lineHeight: "1.6", marginBottom: "30px" }}>
        Looking for the best AI tools? Instead of wasting time testing random apps,
        explore tools based on what you actually want to do - writing, YouTube, thumbnails, and more.
      </p>

      {/* QUICK PICKS */}
      <div style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "30px"
      }}>
        <h2 style={{ marginBottom: "10px" }}>Quick Picks</h2>
        <ul>
          <li>Best for YouTube - <a href="/ai-tools-for-youtube">See tools</a></li>
          <li>Best for Writing - <a href="/ai-tools-for-writing">See tools</a></li>
          <li>Best for Students - <a href="/ai-tools-for-students">See tools</a></li>
        </ul>
      </div>

      {/* CATEGORY LIST */}
      <h2 style={{ marginBottom: "15px" }}>Browse by Category</h2>

      <div style={{ display: "grid", gap: "20px" }}>

        <a href="/ai-tools-for-youtube" style={{ textDecoration: "none", padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
          <h3>YouTube Tools</h3>
          <p style={{ color: "#9ca3af" }}>Editing, thumbnails, scripting, SEO</p>
        </a>

        <a href="/ai-tools-for-writing" style={{ textDecoration: "none", padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
          <h3>Writing Tools</h3>
          <p style={{ color: "#9ca3af" }}>Blogs, content, copywriting</p>
        </a>

        <a href="/ai-tools-for-students" style={{ textDecoration: "none", padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
          <h3>Student Tools</h3>
          <p style={{ color: "#9ca3af" }}>Assignments, summaries, learning</p>
        </a>

        <a href="/ai-tools-for-instagram" style={{ textDecoration: "none", padding: "20px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
          <h3>Instagram Tools</h3>
          <p style={{ color: "#9ca3af" }}>Content planning and growth</p>
        </a>

      </div>

      {/* DECISION SECTION */}
      <div style={{ marginTop: "40px" }}>
        <h2>How to choose the right AI tool</h2>
        <p style={{ color: "#9ca3af" }}>
          If you&apos;re a beginner - start with simple tools like Canva or ChatGPT.
          If you want growth - use tools for SEO and content strategy.
          Focus on outcomes, not features.
        </p>
      </div>

    </main>
  );
}

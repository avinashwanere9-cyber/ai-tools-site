export default function Page() {
  return (
    <main className="pageShell">
      <h1>AI Tools for Freelance Writing</h1>

      <div className="toolGrid">

        <div className="toolCard">
          <h3>ChatGPT</h3>
          <p>Generate drafts, ideas, and rewrite content quickly.</p>
          <a href="https://chat.openai.com" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Grammarly</h3>
          <p>Improve grammar, clarity, and tone for professional writing.</p>
          <a href="https://www.grammarly.com" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Jasper</h3>
          <p>AI writing assistant focused on marketing and content writing.</p>
          <a href="https://www.jasper.ai" target="_blank">Visit tool</a>
        </div>

      </div>
    </main>
  );
}
export default function Page() {
  return (
    <main className="pageShell">
      <h1>AI Tools for Students</h1>

      <div className="toolGrid">
        <div className="toolCard">
          <h3>ChatGPT</h3>
          <p>Help with assignments, explanations, and notes.</p>
          <a href="https://chat.openai.com" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Notion AI</h3>
          <p>Summarize notes and organize study material.</p>
          <a href="https://www.notion.so" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>QuillBot</h3>
          <p>Paraphrase and rewrite content for assignments.</p>
          <a href="https://quillbot.com" target="_blank">Visit tool</a>
        </div>
      </div>
    </main>
  );
}

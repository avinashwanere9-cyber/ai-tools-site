export default function Page() {
  return (
    <main className="pageShell">
      <h1>AI Tools for Video Editing</h1>

      <div className="toolGrid">

        <div className="toolCard">
          <h3>Pictory</h3>
          <p>Convert scripts into videos automatically.</p>
          <a href="https://pictory.ai" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>CapCut</h3>
          <p>Fast AI video editor for reels and shorts.</p>
          <a href="https://www.capcut.com" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Descript</h3>
          <p>Edit videos by editing text with AI voice tools.</p>
          <a href="https://www.descript.com" target="_blank">Visit tool</a>
        </div>

      </div>
    </main>
  );
}
export default function Page() {
  return (
    <main className="pageShell">
      <h1>AI Tools for Instagram Automation</h1>

      <div className="toolGrid">
        <div className="toolCard">
          <h3>Buffer</h3>
          <p>Schedule and automate Instagram posts easily.</p>
          <a href="https://buffer.com" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Hootsuite</h3>
          <p>Manage and automate multiple social media accounts.</p>
          <a href="https://hootsuite.com" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Predis.ai</h3>
          <p>Generate AI captions and Instagram content.</p>
          <a href="https://predis.ai" target="_blank">Visit tool</a>
        </div>
      </div>
    </main>
  );
}
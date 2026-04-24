export default function Page() {
  return (
    <main className="pageShell">
      <h1>AI Tools for Thumbnails</h1>

      <div className="toolGrid">
        <div className="toolCard">
          <h3>Canva</h3>
          <p>Create thumbnails quickly with templates and AI.</p>
          <a href="https://www.canva.com" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Adobe Express</h3>
          <p>Design high-quality thumbnails easily.</p>
          <a href="https://www.adobe.com/express" target="_blank">Visit tool</a>
        </div>

        <div className="toolCard">
          <h3>Fotor</h3>
          <p>AI-powered image editing and thumbnail creation.</p>
          <a href="https://www.fotor.com" target="_blank">Visit tool</a>
        </div>
      </div>
    </main>
  );
}

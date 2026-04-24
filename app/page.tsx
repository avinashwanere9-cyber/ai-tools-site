const tools = [
  {
    id: "01",
    name: "Pictory",
    description:
      "Turn scripts and blog posts into short videos with voiceover and stock visuals.",
    bestFor: "Script-to-video",
    price: "Paid",
    speed: "Fast setup",
    link: "https://pictory.ai",
  },
  {
    id: "02",
    name: "TubeBuddy",
    description:
      "Optimize titles, tags, keyword targeting, and channel growth for YouTube.",
    bestFor: "YouTube SEO",
    price: "Free + Paid",
    speed: "Fast wins",
    link: "https://www.tubebuddy.com",
  },
  {
    id: "03",
    name: "Canva",
    description:
      "Create thumbnails, shorts assets, and channel graphics quickly with AI help.",
    bestFor: "Thumbnails",
    price: "Free + Paid",
    speed: "Beginner-friendly",
    link: "https://www.canva.com",
  },
];

const outcomes = [
  "Freelance writing faster",
  "Edit videos faster",
  "Generate thumbnails",
  "Automate Instagram",
  "Write assignments",
  "Grow on YouTube",
];

const links: Record<string, string> = {
  "Freelance writing faster": "/ai-tools-for-freelance-writing",
  "Edit videos faster": "/ai-tools-for-youtube",
  "Generate thumbnails": "/ai-tools-for-thumbnails",
  "Automate Instagram": "/ai-tools-for-instagram",
  "Write assignments": "/ai-tools-for-students",
  "Grow on YouTube": "/ai-tools-for-youtube",
};

export default function Home() {
  return (
    <main className="pageShell">

      {/* ✅ THIS LINE FIXES YOUR VERIFICATION */}
      <p>Impact-Site-Verification: 59bfdab6-1dd9-4800-8da2-bc38ab942c4d</p>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Outcome-first AI discovery</p>
          <h1>
            Find the best AI tools for real work,
            <span> not vague categories.</span>
          </h1>
          <p className="heroText">
            Explore AI tools by what you actually want to achieve: faster editing,
            better thumbnails, writing, and more.
          </p>

          <div className="heroActions">
            <a href="#tools" className="primaryButton">
              Explore tools
            </a>
            <a href="#outcomes" className="secondaryButton">
              Browse outcomes
            </a>
          </div>
        </div>

        <div className="heroPanel">
          <div className="chipGrid">
            {outcomes.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="sectionBlock">
        <h2>Pick a goal and find the right tools</h2>

        <div className="outcomeGrid">
          {outcomes.map((item) => (
            <a href={links[item]} key={item} className="outcomeCard">
              <h3>{item}</h3>
              <p>Discover the best tools for this task.</p>
            </a>
          ))}
        </div>
      </section>

      <section id="tools" className="sectionBlock">
        <h2>Featured tools</h2>

        <div className="toolGrid">
          {tools.map((tool) => (
            <article key={tool.name} className="toolCard">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>

              <div className="toolMeta">
                <span>{tool.price}</span>
                <span>{tool.speed}</span>
              </div>

              <a href={tool.link} target="_blank">
                Visit tool
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
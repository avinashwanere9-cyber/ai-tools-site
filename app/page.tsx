import Link from "next/link";
import type { CSSProperties } from "react";
import InteractivePanel from "./interactive-panel";
const outcomes = [
  {
    title: "Freelance writing faster",
    description:
      "Research, outline, draft, and polish client work with the right AI stack.",
    href: "/ai-tools-for-freelance-writing",
    tag: "Writers",
  },
  {
    title: "Edit videos faster",
    description:
      "Speed up cuts, subtitles, scripting, and publishing for short-form videos.",
    href: "/ai-tools-for-youtube",
    tag: "Creators",
  },
  {
    title: "Generate thumbnails",
    description:
      "Find design tools that help you build click-worthy thumbnails in minutes.",
    href: "/ai-tools-for-thumbnails",
    tag: "Design",
  },
  {
    title: "Automate Instagram",
    description:
      "Plan content, captions, hooks, and repeatable workflows without wasting time.",
    href: "/ai-tools-for-instagram",
    tag: "Growth",
  },
  {
    title: "Write assignments",
    description:
      "Use AI for studying, summarizing, and structuring answers with more clarity.",
    href: "/ai-tools-for-students",
    tag: "Students",
  },
  {
    title: "Grow on YouTube",
    description:
      "Compare tools for keywords, packaging, scripting, and channel optimization.",
    href: "/ai-tools-for-youtube",
    tag: "YouTube",
  },
];

const tools = [
  {
    id: "01",
    name: "Pictory",
    description:
      "Turn scripts and blog posts into short videos with voiceover and stock visuals.",
    bestFor: "Script-to-video",
    price: "Paid",
    speed: "Fast setup",
    review:
      "Best when you want fast faceless video production without learning a complex editor.",
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
    review:
      "Strong for creators who want practical SEO data and channel growth suggestions.",
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
    review:
      "Ideal for fast, polished visuals when you need quality without heavy design software.",
    link: "https://www.canva.com",
  },
];

const featuredMetrics = [
  {
    value: "12+",
    label: "real use-case categories",
  },
  {
    value: "120+",
    label: "tool comparisons planned for curation",
  },
  {
    value: "24/7",
    label: "trend-focused review mindset",
  },
];

const dashboardStats = [
  {
    value: "1324",
    label: "Tracked searches",
  },
  {
    value: "2450",
    label: "AI credits mapped",
  },
  {
    value: "98%",
    label: "Intent match score",
  },
  {
    value: "42h",
    label: "Time saved estimate",
  },
];

const workflowSteps = [
  "Compare tools by outcome, not vague categories.",
  "See pricing, speed, and beginner fit instantly.",
  "Open focused pages for writing, YouTube, thumbnails, and more.",
];

const chartBars = [
  { month: "Jan", height: 36 },
  { month: "Feb", height: 52 },
  { month: "Mar", height: 46 },
  { month: "Apr", height: 68 },
  { month: "May", height: 61 },
  { month: "Jun", height: 84 },
];

function getBarStyle(height: number) {
  return {
    "--bar-height": `${height}%`,
  } as CSSProperties;
}

export default function Home() {
  return (
    <main className="pageShell homePage" style={{paddingTop: "80px"}}>
      <p className="siteVerification">
        Impact-Site-Verification: 59bfdab6-1dd9-4800-8da2-bc38ab942c4d
      </p>

      <header className="topBar">
        <Link href="/" className="brand">
          Flow<span>AI</span>
        </Link>

        <nav className="topNav" aria-label="Primary">
          <a href="#outcomes">Outcomes</a>
          <a href="#tools">Tools</a>
          <a href="#reviews">Reviews</a>
          <a href="#about">About</a>
        </nav>

        <div className="topActions">
          <span className="contactPill">Premium AI tools for creators and tech reviews</span>
          <a href="#tools" className="navButton">
            Start exploring
          </a>
        </div>
      </header>

      <section className="hero" id="about">
        <div className="heroCopy">
          <div className="heroIntro">
            <p className="eyebrow">Outcome-first AI discovery</p>
            <h1 className="heroTitle">
              Elevate your workflow with AI tools that{" "}
              <span>actually ship results.</span>
            </h1>
            <p className="heroText">
              Explore AI tools by what you want to achieve: faster editing,
              better thumbnails, cleaner writing, smarter automation, and more.
              Your same website skeleton stays in place, but the visual style
              becomes sharper, richer, and more premium.
            </p>
          </div>

          <div className="heroTicker" aria-label="Popular outcomes">
            {outcomes.map((item) => (
              <span key={item.title} className="heroTickerItem">
                {item.title}
              </span>
            ))}
          </div>

          <div className="heroActions">
            <a href="#tools" className="primaryButton">
              Explore tools
            </a>

            <a href="#outcomes" className="secondaryButton">
              Browse outcomes
            </a>
          </div>

          <div className="proofStrip">
            <div className="avatarStack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div>
              <strong>578M+</strong>
              <p>User intent signals behind modern AI search and creator workflows</p>
            </div>
          </div>

          <div className="heroMetrics">
            {featuredMetrics.map((item) => (
              <article key={item.label} className="metricCard">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <InteractivePanel className="heroVisual">
          <div className="heroVisualBackdrop" aria-hidden="true" />

          <div className="floatingBadge">
            <p>AI momentum</p>
            <strong>13+</strong>
            <span>creator-focused categories growing fast</span>

            <div className="miniBars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="floatingTag">Updated for real-world use cases</div>

          <div className="dashboardWindow">
            <div className="dashboardHeader">
              <div>
                <p className="dashboardLabel">AI command center</p>
                <h2>Review the best stack before you spend time testing every tool yourself.</h2>
              </div>
              <span className="statusPill">Live curation</span>
            </div>

            <div className="dashboardStats">
              {dashboardStats.map((item) => (
                <article key={item.label} className="miniStat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="dashboardLower">
              <section className="graphPanel">
                <div className="panelHeader">
                  <div>
                    <p>Weekly trend graph</p>
                    <span>Which AI outcomes are getting more traction</span>
                  </div>
                  <span className="pillOutline">6 months</span>
                </div>

                <div className="chart" aria-hidden="true">
                  {chartBars.map((item) => (
                    <div key={item.month} className="chartColumn">
                      <span className="chartBar" style={getBarStyle(item.height)} />
                      <small>{item.month}</small>
                    </div>
                  ))}
                </div>
              </section>

              <section className="workflowPanel" id="reviews">
                <div className="panelHeader">
                  <div>
                    <p>Quick review flow</p>
                    <span>How this homepage guides users better</span>
                  </div>
                </div>

                <ul className="workflowList">
                  {workflowSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </InteractivePanel>
      </section>

      <section id="outcomes" className="sectionBlock">
        <div className="homeSectionIntro">
          <p>START HERE</p>

          <div className="homeQuickLinks">
            <a href="/ai-tools-for-thumbnails">Thumbnails</a>
            <a href="/ai-tools-for-youtube">YouTube</a>
            <a href="/ai-tools-for-freelance-writing">Writing</a>
          </div>
        </div>

        <UltraFlipUseCaseLibrary />

        <div className="homeSectionIntro homeSectionIntro--tools" id="tools">
          <p>FEATURED REVIEWS</p>
          <h2>Useful tools with a quick read before you click.</h2>
        </div>

        <div className="toolGrid">
          {tools.map((tool) => (
            <article key={tool.name} className="toolCard">
              <div className="toolCardTop">
                <span className="toolId">{tool.id}</span>
                <span className="toolBadge">{tool.bestFor}</span>
              </div>

              <h3>{tool.name}</h3>
              <p>{tool.description}</p>

              <div className="toolReview">{tool.review}</div>

              <div className="toolMeta">
                <span>{tool.price}</span>
                <span>{tool.speed}</span>
              </div>

              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="toolLink"
              >
                Visit tool
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
const ultraUseCards = [
  {
    number: "01",
    title: "AI Tools",
    href: "/ai-tools-for-coding",
    short: "Explore powerful AI tools for smarter workflows.",
    insideTitle: "AI Tool Stack",
    insideText: "Tools for automation, coding, research, content, productivity, and faster execution.",
  },
  {
    number: "02",
    title: "SEO Tools",
    href: "/ai-tools-for-seo",
    short: "Improve search visibility with smarter tools.",
    insideTitle: "SEO Growth",
    insideText: "Keyword ideas, content audits, metadata, ranking helpers, and optimization workflows.",
  },
  {
    number: "03",
    title: "Websites",
    href: "/ai-tools-for-websites",
    short: "Build better websites with AI support.",
    insideTitle: "Website Builder",
    insideText: "Tools for layouts, landing pages, UI ideas, copy, components, and full website planning.",
  },
  {
    number: "04",
    title: "Languages",
    href: "/ai-tools-for-languages",
    short: "Learn, translate, and write more clearly.",
    insideTitle: "Language Tools",
    insideText: "Grammar, translation, summaries, notes, explanations, and learning support.",
  },
  {
    number: "05",
    title: "Blog",
    href: "/ai-tools-for-blog",
    short: "Create better blog content with less friction.",
    insideTitle: "Blog Writing",
    insideText: "Ideas, outlines, drafts, intros, titles, rewriting, and polished long-form content.",
  },
  {
    number: "06",
    title: "YouTube",
    href: "/ai-tools-for-youtube",
    short: "Upgrade your video creation workflow.",
    insideTitle: "YouTube Stack",
    insideText: "Scripts, thumbnails, captions, SEO, hooks, descriptions, and video idea generation.",
  },
];

function UltraFlipUseCaseLibrary() {
  return (
    <section className="ultra-use-section">
      <div className="ultra-use-heading">
        <p>USE-CASE LIBRARY</p>
        <h2>Pick a goal and jump into the right AI stack.</h2>
      </div>

      <div className="ultra-use-grid">
        {ultraUseCards.map((card) => (
          <a className="ultra-use-card" href={card.href} key={card.number}>
            <span className="ultra-use-glow" />

            <span className="ultra-use-inner">
              <span className="ultra-use-face ultra-use-front">
                <span className="ultra-use-number">{card.number}</span>
                <strong>{card.title}</strong>
                <span className="ultra-use-text">{card.short}</span>
                <span className="ultra-use-link">View inside</span>
              </span>

              <span className="ultra-use-face ultra-use-back">
                <span className="ultra-use-number">{card.number}</span>
                <strong>{card.insideTitle}</strong>
                <span className="ultra-use-text">{card.insideText}</span>
                <span className="ultra-use-link">Coming soon</span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

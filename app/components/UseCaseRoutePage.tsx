import Link from "next/link";
import type { ReactNode } from "react";
import UseCaseNavbar from "./UseCaseNavbar";

export type UseCaseTool = {
  name: string;
  tag: string;
  short: string;
  whatItDoes: string;
  useCase: string;
  pros: string[];
  cons: string[];
};

export type UseCasePageData = {
  eyebrow: string;
  title: string;
  intro: string;
  tools: UseCaseTool[];
  comparison: {
    useCase: string;
    bestTool: string;
    reason: string;
  }[];
  steps: {
    title: string;
    text: string;
  }[];
  seoHeading: string;
  seoParagraphs: string[];
  recommendations: {
    need: string;
    pick: string;
  }[];
};

const sectionNav = [
  { id: "hero", label: "Hero" },
  { id: "tools", label: "Tools" },
  { id: "reviews", label: "Reviews" },
  { id: "comparison", label: "Compare" },
  { id: "workflow", label: "Workflow" },
  { id: "recommendation", label: "Pick" },
];

const preferredSlugs: Record<string, string> = {
  "GitHub Copilot": "copilot",
};

function toolSlug(name: string) {
  return (
    preferredSlugs[name] ??
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

export default function UseCaseRoutePage({ data }: { data: UseCasePageData }) {
  const featuredTool = data.tools[0];
  const quickPicks = data.tools.slice(0, 4);

  return (
    <main className="uc-page page-fade-in">
      <UseCaseNavbar items={sectionNav} />

      <SectionWrapper className="uc-section--hero" id="hero">
        <div className="uc-hero-grid">
          <div className="uc-hero-copy">
            <div className="uc-pill-row">
              <span className="uc-pill uc-pill--accent">{data.eyebrow}</span>
              <span className="uc-pill">Structured guide</span>
            </div>

            <h1 className="uc-hero-title">{data.title}</h1>
            <p className="uc-hero-text">{data.intro}</p>

            <div className="uc-action-row">
              <a className="uc-button uc-button--primary" href="#tools">
                View tools
              </a>
              <a className="uc-button uc-button--ghost" href="#comparison">
                Compare picks
              </a>
            </div>

            <div className="uc-metric-grid">
              <HeroMetric label="Tools reviewed" value={`${data.tools.length}+`} />
              <HeroMetric label="Best starting point" value={featuredTool?.name ?? "Top pick"} />
              <HeroMetric label="Navigation" value="Section based" />
            </div>
          </div>

          {featuredTool ? (
            <aside className="uc-feature-card">
              <div className="uc-feature-card__inner">
                <p className="uc-overline">Featured Pick</p>
                <h2>{featuredTool.name}</h2>
                <span className="uc-tag">{featuredTool.tag}</span>
                <p>{featuredTool.short}</p>

                <Link className="uc-button uc-button--light" href={`/tools/${toolSlug(featuredTool.name)}`}>
                  Open {featuredTool.name}
                </Link>

                <div className="uc-quick-list">
                  {quickPicks.map((tool, index) => (
                    <Link className="uc-quick-link" href={`/tools/${toolSlug(tool.name)}`} key={tool.name}>
                      <span>
                        <small>0{index + 1}</small>
                        <strong>{tool.name}</strong>
                      </span>
                      <em>{tool.tag}</em>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          ) : null}
        </div>
      </SectionWrapper>

      <SectionWrapper id="tools">
        <SectionTitle
          label="Tools Overview"
          text="Click any card to open its dedicated tool page. The overview stays scannable, while the details live in their own route."
          title="The fastest way to pick the right tool."
        />

        <div className="uc-tool-grid">
          {data.tools.map((tool, index) => (
            <ToolCard index={index} key={tool.name} tool={tool} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="reviews" tone="muted">
        <SectionTitle
          label="Detailed Reviews"
          text="Each review avoids the wall-of-text feeling by splitting purpose, workflow, pros, and cons into compact panels."
          title="Real use cases, cleanly separated."
        />

        <div className="uc-review-stack">
          {data.tools.map((tool, index) => (
            <ReviewBlock index={index} key={tool.name} tool={tool} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="comparison">
        <SectionTitle
          label="Comparison"
          text="Use this section like a quick decision board when you already know the problem you need solved."
          title="Choose by job, not by hype."
        />

        <ComparisonTable items={data.comparison} />
      </SectionWrapper>

      <SectionWrapper id="workflow" tone="muted">
        <SectionTitle
          label="Workflow"
          text="A simple process keeps the page useful instead of turning it into a random tool dump."
          title="How to use these tools without wasting time."
        />

        <div className="uc-step-grid">
          {data.steps.map((step, index) => (
            <article className="uc-step-card" key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="guide">
        <div className="uc-guide-panel">
          <div>
            <p className="uc-overline">Practical Guide</p>
            <h2>{data.seoHeading}</h2>
            <p>
              Real workflows matter more than long tool lists. This section turns the recommendations into a usable process.
            </p>
          </div>

          <div className="uc-insight-list">
            {data.seoParagraphs.map((paragraph, index) => (
              <article className="uc-insight-card" key={paragraph}>
                <p>Insight 0{index + 1}</p>
                <span>{paragraph}</span>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="uc-section--final" id="recommendation">
        <div className="uc-final-panel">
          <SectionTitle
            label="Final Recommendation"
            text="No overthinking. Match your goal to the tool that solves it fastest."
            title="Pick based on what you need right now."
          />

          <div className="uc-recommend-grid">
            {data.recommendations.map((item) => (
              <article className="uc-recommend-card" key={item.need}>
                <p>If you want</p>
                <h3>{item.need}</h3>
                <strong>Use {item.pick}</strong>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function SectionWrapper({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id: string;
  tone?: "default" | "muted";
}) {
  return (
    <section className={`uc-section ${tone === "muted" ? "uc-section--muted" : ""} ${className}`} id={id}>
      <div className="uc-container">{children}</div>
    </section>
  );
}

function ToolCard({ index, tool }: { index: number; tool: UseCaseTool }) {
  return (
    <Link className="uc-tool-card" href={`/tools/${toolSlug(tool.name)}`}>
      <span className="uc-tool-card__shine" />
      <span className="uc-tool-card__top">
        <small>0{index + 1}</small>
        <em>{tool.tag}</em>
      </span>
      <strong>{tool.name}</strong>
      <p>{tool.short}</p>
      <span className="uc-card-link">Open dedicated page</span>
    </Link>
  );
}

function ReviewBlock({ index, tool }: { index: number; tool: UseCaseTool }) {
  return (
    <article className="uc-review-card">
      <div className="uc-review-card__summary">
        <p>0{index + 1}</p>
        <h3>{tool.name}</h3>
        <span className="uc-tag">{tool.tag}</span>
        <p>{tool.short}</p>
        <Link className="uc-button uc-button--ghost" href={`/tools/${toolSlug(tool.name)}`}>
          See full page
        </Link>
      </div>

      <div className="uc-review-card__details">
        <InfoPanel title="What it does" text={tool.whatItDoes} />
        <InfoPanel title="Real use case" text={tool.useCase} />
        <ListPanel items={tool.pros} title="Pros" tone="good" />
        <ListPanel items={tool.cons} title="Cons" tone="neutral" />
      </div>
    </article>
  );
}

function ComparisonTable({ items }: { items: UseCasePageData["comparison"] }) {
  return (
    <div className="uc-comparison">
      <div className="uc-comparison__head">
        <p>Use case</p>
        <p>Best tool</p>
        <p>Why</p>
      </div>

      {items.map((item) => (
        <div className="uc-comparison__row" key={item.useCase}>
          <p>{item.useCase}</p>
          <strong>{item.bestTool}</strong>
          <span>{item.reason}</span>
        </div>
      ))}
    </div>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="uc-metric-card">
      <p>{label}</p>
      <strong>{value}</strong>
    </div>
  );
}

function SectionTitle({ label, text, title }: { label: string; text?: string; title: string }) {
  return (
    <div className="uc-section-title">
      <p>{label}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

function InfoPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="uc-info-panel">
      <p>{title}</p>
      <span>{text}</span>
    </div>
  );
}

function ListPanel({
  items,
  title,
  tone,
}: {
  items: string[];
  title: string;
  tone: "good" | "neutral";
}) {
  return (
    <div className="uc-info-panel">
      <p>{title}</p>
      <div className="uc-chip-list">
        {items.map((item) => (
          <span className={`uc-chip ${tone === "good" ? "uc-chip--good" : ""}`} key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

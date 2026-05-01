import Link from "next/link";
import type { Metadata } from "next";

type ToolDetail = {
  name: string;
  tag: string;
  title: string;
  intro: string;
  bestFor: string[];
  workflow: string[];
  pros: string[];
  cons: string[];
  recommendation: string;
};

const toolPages: Record<string, ToolDetail> = {
  cursor: {
    name: "Cursor",
    tag: "Best for full-project coding",
    title: "Cursor AI Tool Review",
    intro:
      "Cursor is a premium AI code editor built for developers who want project-aware coding, refactoring, and debugging inside one focused workspace.",
    bestFor: ["Full app builds", "Refactoring", "Codebase questions", "Debugging across files"],
    workflow: [
      "Open the project in Cursor.",
      "Ask a focused question about the file or feature.",
      "Apply small edits and review the diff.",
      "Run the app or tests before continuing.",
    ],
    pros: ["Excellent project context", "Fast multi-file edits", "Smooth coding workflow"],
    cons: ["Still needs code review", "Large edits can drift without clear prompts"],
    recommendation:
      "Use Cursor when you want one AI-first workspace for building, changing, and understanding a real project.",
  },
  copilot: {
    name: "GitHub Copilot",
    tag: "Best for autocomplete",
    title: "GitHub Copilot AI Tool Review",
    intro:
      "GitHub Copilot is strongest when you already know what you want to build and need faster inline suggestions while coding.",
    bestFor: ["Autocomplete", "Boilerplate", "Tests", "Small implementation details"],
    workflow: [
      "Write a clear function or component name.",
      "Let Copilot suggest the repeated logic.",
      "Accept only the parts that match your intent.",
      "Review edge cases before shipping.",
    ],
    pros: ["Fast suggestions", "Works in common editors", "Good for repetitive code"],
    cons: ["Less useful for planning", "Can suggest code that looks right but fails"],
    recommendation:
      "Use Copilot when speed matters during normal coding and you want fewer pauses for boilerplate.",
  },
  chatgpt: {
    name: "ChatGPT",
    tag: "Best for debugging logic",
    title: "ChatGPT AI Tool Review",
    intro:
      "ChatGPT is best used as a thinking partner for debugging, explaining errors, planning architecture, and improving code snippets.",
    bestFor: ["Bug explanations", "Architecture planning", "Learning concepts", "Reviewing snippets"],
    workflow: [
      "Paste the error, code, and goal.",
      "Ask for the likely cause before asking for code.",
      "Request a small fix with explanation.",
      "Test the result in your project.",
    ],
    pros: ["Clear explanations", "Flexible reasoning", "Great for learning"],
    cons: ["Needs enough context", "Generated code must be verified"],
    recommendation:
      "Use ChatGPT when you need clarity, debugging help, or a second opinion before changing code.",
  },
  tabnine: {
    name: "Tabnine",
    tag: "Best for team privacy",
    title: "Tabnine AI Tool Review",
    intro:
      "Tabnine is a focused AI coding assistant for teams that want autocomplete support with a practical privacy-conscious workflow.",
    bestFor: ["Team autocomplete", "Repeated patterns", "Controlled suggestions", "Everyday coding"],
    workflow: [
      "Install Tabnine in your editor.",
      "Let it learn local coding patterns.",
      "Use suggestions for repeated code.",
      "Keep deeper architecture decisions manual.",
    ],
    pros: ["Simple autocomplete", "Team-friendly positioning", "Useful for repeated work"],
    cons: ["Not a full app builder", "Less useful for deep debugging"],
    recommendation:
      "Use Tabnine when your main need is focused autocomplete support rather than a complete AI coding workspace.",
  },
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getTool(slug: string): ToolDetail {
  const fallbackName = titleFromSlug(slug);

  return (
    toolPages[slug] ?? {
      name: fallbackName,
      tag: "AI tool overview",
      title: `${fallbackName} AI Tool Review`,
      intro:
        "This tool page gives you a clean place to build a full review, workflow, pros, cons, and recommendation without crowding the main guide.",
      bestFor: ["Research", "Workflow testing", "Content planning", "Productivity"],
      workflow: [
        "Define the problem you want solved.",
        "Test the tool on one real task.",
        "Compare the output with your current workflow.",
        "Keep only the parts that save time or improve quality.",
      ],
      pros: ["Dedicated route is ready", "Easy to expand later", "Keeps guide pages clean"],
      cons: ["Needs deeper custom content", "Should be updated after hands-on testing"],
      recommendation:
        "Use this page as a polished placeholder, then add real screenshots, pricing, and examples when you test the tool.",
    }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  return {
    title: `${tool.name} Review | AI Tools Directory`,
    description: tool.intro,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);

  return (
    <main className="tool-detail-page page-fade-in">
      <section className="tool-detail-hero">
        <div className="tool-detail-container">
          <Link className="tool-back-link" href="/ai-tools-for-coding">
            Back to guide
          </Link>

          <div className="tool-detail-hero__grid">
            <div>
              <p className="uc-overline">{tool.tag}</p>
              <h1>{tool.title}</h1>
              <p>{tool.intro}</p>
            </div>

            <aside className="tool-best-card">
              <p className="uc-overline">Best For</p>
              <div className="uc-chip-list">
                {tool.bestFor.map((item) => (
                  <span className="uc-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="tool-detail-section">
        <div className="tool-detail-container tool-detail-grid">
          <article className="tool-panel">
            <p className="uc-overline">Workflow</p>
            <div className="tool-workflow-list">
              {tool.workflow.map((step, index) => (
                <div key={step}>
                  <small>0{index + 1}</small>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="tool-panel-stack">
            <ToolList items={tool.pros} title="Pros" tone="good" />
            <ToolList items={tool.cons} title="Cons" tone="neutral" />

            <article className="tool-recommend-panel">
              <p className="uc-overline">Recommendation</p>
              <p>{tool.recommendation}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function ToolList({
  items,
  title,
  tone,
}: {
  items: string[];
  title: string;
  tone: "good" | "neutral";
}) {
  return (
    <article className="tool-panel">
      <p className="uc-overline">{title}</p>
      <div className="uc-chip-list">
        {items.map((item) => (
          <span className={`uc-chip ${tone === "good" ? "uc-chip--good" : ""}`} key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

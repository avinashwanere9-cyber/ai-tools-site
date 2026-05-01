// HeroSection.jsx
// Drop this file into your components folder (e.g. src/components/HeroSection.jsx)
// Then import and use it in your page: import HeroSection from '@/components/HeroSection'

export default function HeroSection() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f1e]/60 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-white font-bold text-lg tracking-tight">
            FLOW <span className="text-cyan-400">AI</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Outcomes</a>
            <a href="#" className="hover:text-white transition-colors">Tools</a>
            <a href="#" className="hover:text-white transition-colors">Reviews</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-sm text-gray-400">
              Premium AI tools for creators and tech reviews
            </span>
            <button className="px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-colors">
              Start exploring
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen bg-[#080d1a] pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[calc(100vh-6rem)]">

          {/* Left — Headline */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Eyebrow */}
            <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Outcome-First AI Discovery
            </p>

            {/* Headline */}
            <h1
              className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#e5e7eb] max-w-[14ch]"
            >
              Elevate your workflow with AI tools that actually{" "}
              {/* Highlighted "ship results" with glow only on this span */}
              <span className="relative inline-block">
                <span
                  className="relative z-10 bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  ship results.
                </span>
                {/* Subtle glow ONLY behind highlighted text */}
                <span
                  className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 rounded-full -z-0"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-8 text-base text-gray-400 max-w-[42ch] leading-relaxed">
              Review the best AI stack before you spend time testing every tool yourself. Curated for real-world outcomes.
            </p>

            {/* CTA row */}
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-cyan-900/30">
                Explore tools →
              </button>
              <button className="px-6 py-3 rounded-full border border-white/10 text-gray-300 text-sm hover:border-white/20 hover:text-white transition-all">
                See outcomes
              </button>
            </div>
          </div>

          {/* Right — Command Center Card */}
          <div className="flex-shrink-0 w-full max-w-[520px]">
            <div
              className="rounded-2xl p-6 border border-white/[0.10]"
              style={{
                background: "rgba(255,255,255,0.04)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.06) inset",
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-cyan-400 text-[10px] font-semibold tracking-[0.18em] uppercase mb-1">
                    AI Command Center
                  </p>
                  <h2 className="text-[#e5e7eb] text-[1.35rem] font-bold leading-snug max-w-[22ch]">
                    Review the best stack before you spend time testing every tool yourself.
                  </h2>
                </div>
                <span className="ml-4 flex-shrink-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[11px] whitespace-nowrap">
                  Updated for real-world use cases
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { value: "1324", label: "Tracked searches" },
                  { value: "2450", label: "AI credits mapped" },
                  { value: "98%",  label: "Intent match score" },
                  { value: "42h",  label: "Time saved estimate" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-xl p-3 border border-white/[0.07]"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <p className="text-[#e5e7eb] text-xl font-bold leading-none mb-1">{value}</p>
                    <p className="text-gray-500 text-[11px] leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Weekly trend */}
                <div
                  className="rounded-xl p-4 border border-white/[0.07]"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#e5e7eb] text-sm font-semibold">Weekly trend graph</p>
                    <span className="text-gray-500 text-xs">6 months</span>
                  </div>
                  <p className="text-gray-500 text-[12px] leading-snug">
                    Which AI outcomes are getting more traction
                  </p>
                  {/* Minimal sparkline placeholder */}
                  <div className="mt-3 flex items-end gap-[3px] h-8">
                    {[3,5,4,7,6,8,10,9,11,10,13,12].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-cyan-400/30"
                        style={{ height: `${h * 8}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Quick review */}
                <div
                  className="rounded-xl p-4 border border-white/[0.07]"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <p className="text-[#e5e7eb] text-sm font-semibold mb-2">Quick review flow</p>
                  <p className="text-gray-500 text-[12px] leading-snug mb-4">
                    How this homepage guides users better
                  </p>
                  <button className="w-full py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium hover:bg-cyan-500/20 transition-colors">
                    Compare →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

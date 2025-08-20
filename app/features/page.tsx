export default function Features() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
          <path fill="currentColor" d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z"/>
        </svg>
      ),
      title: 'Render Enhancement',
      desc: 'Turn base CG renders into photoreal visuals while preserving geometry and materials. Balanced exposure, realistic contrast, and subtle bloom.',
      bullets: ['Photoreal tone & lighting', 'Preserve geometry', '×2/×4 upscale'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
          <path fill="currentColor" d="M3 5h18v2H3zm2 4h14v10H5zM8 9v10M16 9v10"/>
        </svg>
      ),
      title: 'Virtual Staging',
      desc: 'Stage empty rooms with tasteful furniture and finishes. Keep architecture intact while choosing styles that match your brief.',
      bullets: ['Multiple interior styles', 'Declutter option', 'Client-ready exports'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
          <path fill="currentColor" d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>
        </svg>
      ),
      title: 'Design Options',
      desc: 'Explore materials, palettes and moods using an AI brief. Compare options side-by-side to accelerate decisions.',
      bullets: ['Palette & material swaps', 'Day / dusk / night moods', 'AI prompt box'],
    },
  ];

  return (
    <div className="space-y-16">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          What’s inside Lumely
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Features built for AEC visuals
        </h1>
        <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
          Three focused workflows that respect your geometry and speed up delivery — all under one subscription.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-violet-600 grid place-items-center mb-4">{it.icon}</div>
            <h3 className="text-xl font-bold">{it.title}</h3>
            <p className="text-slate-600 mt-2">{it.desc}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {it.bullets.map(b => <li key={b}>• {b}</li>)}
            </ul>
            {/* intentionally NO deep link to the gated pages */}
          </div>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">Ready to try these features?</h2>
        <p className="text-slate-600 mt-2">Sign in to access the tools. Start free with 5 credits.</p>
        <div className="mt-6">
          <a href="/signin" className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow">
            Sign in to continue
          </a>
        </div>
      </section>
    </div>
  );
}

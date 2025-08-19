export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Dashboard</h1>
        <p className="text-slate-600 mt-2">Choose a service to start a new job.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'Render Enhancement', desc: 'Make CG renders look photoreal while preserving geometry.', href: '/services/render-enhancement' },
          { title: 'Virtual Staging', desc: 'Stage empty interiors with tasteful furniture and finishes.', href: '/services/virtual-staging' },
          { title: 'Design Options', desc: 'Explore materials, palettes, and moods with an AI brief.', href: '/services/design-options' },
        ].map(card => (
          <a key={card.title} href={card.href}
             className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:border-violet-300 hover:shadow-md transition block">
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-slate-600 mt-1">{card.desc}</p>
            <div className="mt-4 inline-block rounded-lg bg-violet-600 text-white px-4 py-2 text-sm">Open</div>
          </a>
        ))}
      </div>
    </div>
  );
}

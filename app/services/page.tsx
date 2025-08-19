export default function Services() {
  const services = [
    {
      slug: 'render-enhancement',
      title: 'Render Enhancement',
      desc: 'Turn base CG renders into photoreal visuals while preserving geometry and materials.',
      bullets: ['Photoreal lighting & tone', 'Noise cleanup', 'Color & contrast balance'],
    },
    {
      slug: 'virtual-staging',
      title: 'Virtual Staging',
      desc: 'Stage empty rooms with tasteful furniture & finishes tailored to your brief.',
      bullets: ['Multiple styles', 'Keep architecture intact', 'Fast client-ready export'],
    },
    {
      slug: 'design-options',
      title: 'Design Options',
      desc: 'Explore alternative materials, palettes and moods to accelerate client decisions.',
      bullets: ['Finish variations', 'Day/night moods', 'Side-by-side comparisons'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Services</h1>
        <p className="mt-2 text-slate-600">Pick a workflow and get client-ready results in minutes.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <a
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-violet-300 transition"
          >
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="text-slate-600 mt-1">{s.desc}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {s.bullets.map((b) => <li key={b}>• {b}</li>)}
            </ul>
            <div className="mt-6 inline-block rounded-xl bg-violet-600 text-white px-4 py-2 font-semibold">
              Open {s.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

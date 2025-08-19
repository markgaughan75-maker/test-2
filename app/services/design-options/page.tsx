export default function DesignOptions() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          Variations
        </div>
        <h1 className="mt-3 text-4xl font-extrabold">Design Options</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Explore finish and palette alternatives quickly—great for client reviews and internal iterations.
        </p>
        <a href="/" className="mt-5 inline-block rounded-xl bg-violet-600 text-white px-6 py-3 font-semibold hover:bg-violet-700">
          Upload a render
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {title:'Material swaps',desc:'Brick vs. stucco, light vs. dark woods, metal accents, etc.'},
          {title:'Mood variations',desc:'Day / dusk / night grading that respects lighting logic.'},
          {title:'Side-by-side',desc:'Generate multiple options for quick comparison.'},
        ].map((c) => (
          <div key={c.title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold">{c.title}</h3>
            <p className="text-slate-600 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VirtualStaging() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          Interiors
        </div>
        <h1 className="mt-3 text-4xl font-extrabold">Virtual Staging</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Stage empty rooms with tasteful furniture and finishes—perfect for proposals and listings.
        </p>
        <a href="/" className="mt-5 inline-block rounded-xl bg-violet-600 text-white px-6 py-3 font-semibold hover:bg-violet-700">
          Upload a room photo
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {title:'Multiple styles',desc:'Scandi, Minimal, Modern, Cozy—match client taste.'},
          {title:'Architecture intact',desc:'Walls, floors, windows preserved—no structural edits.'},
          {title:'Fast exports',desc:'Client-ready JPG/PNG at ×2/×4 upscale.'},
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

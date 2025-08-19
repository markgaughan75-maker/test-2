export default function RenderEnhancement() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          Core Service
        </div>
        <h1 className="mt-3 text-4xl font-extrabold">Render Enhancement</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Make base CG renders look photoreal while keeping structure, geometry and materials intact.
        </p>
        <a href="/" className="mt-5 inline-block rounded-xl bg-violet-600 text-white px-6 py-3 font-semibold hover:bg-violet-700">
          Upload a render
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {title:'Photoreal tone & lighting',desc:'Balanced exposure, realistic contrast and subtle bloom.'},
          {title:'Preserve geometry',desc:'No warping—forms, lines and materials remain true.'},
          {title:'Tiered quality',desc:'Low (1), Medium (2 + ×2), High (4 + ×4) credits.'},
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

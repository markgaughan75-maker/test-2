export default function Home() {
  const StepIcon = ({ n }: { n: number }) => (
    <div className="h-10 w-10 rounded-xl bg-violet-600 text-white grid place-items-center">{n}</div>
  );
  const FeatIcon = ({ path }: { path: string }) => (
    <div className="h-10 w-10 rounded-xl bg-violet-600 grid place-items-center">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white"><path d={path} fill="currentColor"/></svg>
    </div>
  );

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          Built for AEC • Architects • Real Estate
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
          Photoreal results from any render — <span className="text-violet-700">in minutes</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Lumely enhances CG renders, stages interiors, and explores design options while preserving geometry and materials.
          Fast, consistent, client-ready.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/pricing" className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow">
            See pricing
          </a>
          <a href="/features" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-violet-300 shadow-sm">
            View features
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-500">No credit card required for the free trial.</p>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-center">How Lumely works</h2>
        <p className="text-center text-slate-600 mt-2">From rough to refined — without changing your workflow.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {n:1, t:'Sign in & upload', d:'Start a new job from your dashboard. Supported: 1080p–4K.'},
            {n:2, t:'Enhance & upscale', d:'Pick Low / Medium / High. Preserve geometry, add realism, ×2/×4 sharpness.'},
            {n:3, t:'Download & deliver', d:'Client-ready output for decks, listings and approvals.'},
          ].map((s)=>(
            <div key={s.n} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
              <StepIcon n={s.n}/>
              <h3 className="font-bold text-lg mt-4">{s.t}</h3>
              <p className="text-slate-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES / DIFFERENTIATORS WITH ICONS */}
      <section className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {t:'AEC-grade realism', d:'Tone, lighting, reflections, foliage, skies — tuned for archviz.',
             path:'M4 4h16v4H4zM4 10h16v10H4z'},
            {t:'Preserve geometry', d:'No shape warping — lines, edges, and materials remain intact.',
             path:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'},
            {t:'Tiered quality', d:'Low (1), Medium (2), High (4) credits — pick per image.',
             path:'M3 20h18v-2H3v2zm2-4h14V6H5v10zm3-7h8v6H8V9z'},
            {t:'Fast & automated', d:'Upload → queue → download. Email notifications optional.',
             path:'M12 8V4l8 8-8 8v-4H4V8z'},
            {t:'Cost-efficient', d:'Use credits across all features and workflows.',
             path:'M12 1l3 7h7l-5.5 4.5L18 20l-6-4-6 4 1.5-7.5L2 8h7z'},
            {t:'Studio-grade add-ons', d:'Your existing verified views capability remains for legal accuracy.',
             path:'M6 4h12v2H6zM6 8h12v2H6zM6 12h12v2H6z'},
          ].map((f)=>(
            <div key={f.t} className="flex gap-4">
              <FeatIcon path={f.path}/>
              <div>
                <h4 className="font-semibold">{f.t}</h4>
                <p className="text-slate-600 mt-1">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold">Ready to try Lumely?</h3>
        <p className="text-slate-600 mt-2">Start free with 5 credits. No card required.</p>
        <div className="mt-6">
          <a href="/signin" className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow">
            Sign in to start
          </a>
        </div>
      </section>
    </div>
  );
}


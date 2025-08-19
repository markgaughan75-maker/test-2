export default function Home() {
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
          Trusted by studios that also deliver verified views (±2cm). Fast, consistent, client-ready.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/pricing" className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow">
            See pricing
          </a>
          <a href="/services" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-violet-300 shadow-sm">
            Explore services
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-500">No credit card required for the free trial.</p>
      </section>

      {/* TRUST / LOGOS (placeholder) */}
      <section className="text-center">
        <p className="text-xs tracking-widest text-slate-500">TRUSTED BY TEAMS IN AEC & PROPERTY</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
          {['StudioOne','UrbanLab','Habitat Co.','Northside','Blueprint'].map((logo)=>(
            <div key={logo} className="rounded-lg border border-slate-200 bg-white py-3 text-sm">{logo}</div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-center">How Lumely works</h2>
        <p className="text-center text-slate-600 mt-2">From rough to refined — without changing your workflow.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {n:1, t:'Upload', d:'Sign in and upload your CG render or site photo. No special prep required.'},
            {n:2, t:'Enhance & Upscale', d:'Choose Low / Medium / High. Our enhancer preserves geometry; the upscaler delivers ×2/×4 crispness.'},
            {n:3, t:'Deliver', d:'Download full-res images that look client-ready for decks, listings, and approvals.'},
          ].map((s)=>(
            <div key={s.n} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-violet-600 text-white grid place-items-center mb-4">{s.n}</div>
              <h3 className="font-bold text-lg">{s.t}</h3>
              <p className="text-slate-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-center">Three services. One subscription.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              slug:'/services/render-enhancement',
              title:'Render Enhancement',
              desc:'Make base renders look photoreal while preserving structure, geometry, and materials.'
            },
            {
              slug:'/services/virtual-staging',
              title:'Virtual Staging',
              desc:'Stage empty rooms with tasteful furniture & finishes. Styles on demand.'
            },
            {
              slug:'/services/design-options',
              title:'Design Options',
              desc:'Explore palettes, finishes, and moods. Compare side-by-side for quick decisions.'
            },
          ].map((s)=>(
            <a key={s.slug} href={s.slug} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:border-violet-300 hover:shadow-md transition block">
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-1">{s.desc}</p>
              <div className="mt-4 inline-block rounded-lg bg-violet-600 text-white px-4 py-2 text-sm">Learn more</div>
            </a>
          ))}
        </div>
      </section>

      {/* FEATURES / DIFFERENTIATORS */}
      <section className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {t:'AEC-grade realism', d:'Tone, lighting, reflections, foliage, skies — tuned for architectural imagery.'},
            {t:'Preserve geometry', d:'No shape warping. Lines, edges, and materials remain intact.'},
            {t:'Scales with you', d:'Use credits across all services. Team accounts coming soon.'},
            {t:'Fast & automated', d:'Upload → queue → download. Email notifications optional.'},
            {t:'Cost-efficient', d:'Low (1), Medium (2), High (4) credits — pick per image.'},
            {t:'Verified views ready (studio service)', d:'Your studio still delivers legal accuracy when required.'},
          ].map((f)=>(
            <div key={f.t}>
              <h4 className="font-semibold">{f.t}</h4>
              <p className="text-slate-600 mt-1">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS (placeholder) */}
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-center">What teams say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {q:'Cuts our iteration time by 70% on concept decks.', a:'Design Director, UrbanLab'},
            {q:'Consistent look without re-rendering — clients love the speed.', a:'Principal Architect, Northside'},
            {q:'Perfect for staging listings before the photographer.', a:'Agency Owner, Habitat Co.'},
          ].map((t)=>(
            <figure key={t.q} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <blockquote className="text-slate-800">“{t.q}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-3xl font-extrabold tracking-tight text-center">FAQs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {q:'Will my geometry change?', a:'No. Our enhancer is tuned to preserve lines, edges, and materials.'},
            {q:'What sizes do you support?', a:'Typical: 1080p–4K inputs. Medium uses ×2 upscale; High uses ×4.'},
            {q:'Can I use results commercially?', a:'Yes — all paid plans include commercial use.'},
            {q:'What if I run out of credits?', a:'Upgrade anytime or buy add-ons (coming soon).'},
          ].map((f)=>(
            <div key={f.q} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h4 className="font-semibold">{f.q}</h4>
              <p className="text-slate-600 mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold">Ready to try Lumely?</h3>
        <p className="text-slate-600 mt-2">Start free with 5 credits. No card required.</p>
        <div className="mt-6">
          <a href="/pricing" className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow">
            Choose a plan
          </a>
        </div>
      </section>
    </div>
  );
}

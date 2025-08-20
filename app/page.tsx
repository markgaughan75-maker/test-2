'use client';
import { useState } from 'react';

type TabKey = 'render'|'staging'|'design';
const TAB_LABELS: Record<TabKey,string> = {
  render:  'Render Enhancement',
  staging: 'Virtual Staging',
  design:  'Design Options',
};

export default function Home() {
  const [tab, setTab] = useState<TabKey>('render');

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

      {/* DARK FEATURE BLOCK WITH PILL SLIDER */}
      <section className="rounded-3xl p-4 md:p-8 bg-[#262F26] text-white border border-[#1e261e]">
        {/* pills */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {(['render','staging','design'] as TabKey[]).map((k) => {
            const active = tab === k;
            return (
              <button
                key={k}
                onClick={()=>setTab(k)}
                className={`rounded-2xl text-left px-4 py-3 border transition ${
                  active
                    ? 'bg-[#121812] border-[#121812] text-white shadow'
                    : 'bg-[#EBEFE6] text-[#0f120f] border-[#e2e7da] hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-5 w-5 rounded-full grid place-items-center ${active ? 'bg-white text-[#121812]' : 'bg-[#121812] text-white'}`}>✦</span>
                  <span className="font-semibold">{TAB_LABELS[k]}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* content card */}
        <div className="rounded-3xl p-6 md:p-10 bg-[#1d251d] border border-[#131a13]">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Keep control of your outcomes — no surprises.
              </h2>
              <p className="mt-3 text-[#ccd5cc]">
                Precisely define your space and avoid AI-generated errors. Our enhancer respects geometry and materials.
              </p>

              <ul className="mt-6 space-y-2 text-sm">
                <li className="inline-flex items-center gap-2 bg-[#2d382e] rounded-lg px-3 py-2">
                  <span className="text-[#a9f5a9]">✔</span> Maximum design control
                </li>
                <li className="inline-flex items-center gap-2 bg-[#2d382e] rounded-lg px-3 py-2">
                  <span className="text-[#a9f5a9]">✔</span> Define each segment
                </li>
                <li className="inline-flex items-center gap-2 bg-[#2d382e] rounded-lg px-3 py-2">
                  <span className="text-[#a9f5a9]">✔</span> Preserve architectural detail
                </li>
              </ul>
            </div>

            {/* before/after panel */}
            <div className="rounded-2xl overflow-hidden bg-[#0f120f] border border-[#111]">
              <BeforeAfter tab={tab} />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (with icons) */}
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-center">How Lumely works</h2>
        <p className="text-center text-slate-600 mt-2">From rough to refined — without changing your workflow.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {t:'Sign in & upload', d:'Start a new job from your dashboard. 1080p–4K supported.', icon:'M4 4h16v4H4zM4 10h16v10H4z'},
            {t:'Enhance & upscale', d:'Pick Low / Medium / High. Preserve geometry, add realism, ×2/×4 sharpness.', icon:'M12 8V4l8 8-8 8v-4H4V8z'},
            {t:'Download & deliver', d:'Client-ready output for decks, listings and approvals.', icon:'M3 20h18v-2H3zM5 6h14v10H5z'},
          ].map((s)=>(
            <div key={s.t} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-violet-600 grid place-items-center mb-4">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white"><path d={s.icon} fill="currentColor"/></svg>
              </div>
              <h3 className="font-bold text-lg">{s.t}</h3>
              <p className="text-slate-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {t:'AEC-grade realism', d:'Tone, lighting, reflections, foliage, skies — tuned for archviz.'},
            {t:'Preserve geometry', d:'No shape warping. Lines and edges remain true.'},
            {t:'Tiered quality', d:'Low (1), Medium (2), High (4) credits per image.'},
            {t:'Fast & automated', d:'Upload → queue → download. Optional email notifications.'},
            {t:'Cost-efficient', d:'Use credits across all features and workflows.'},
            {t:'Verified-views compatible', d:'Your studio can still deliver legal accuracy when required.'},
          ].map((f)=>(
            <div key={f.t}>
              <h4 className="font-semibold">{f.t}</h4>
              <p className="text-slate-600 mt-1">{f.d}</p>
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

/* BEFORE / AFTER component with tab-specific placeholders */
function BeforeAfter({ tab }: { tab: TabKey }) {
  // You can replace these with real images in /public/placeholder/...
  const sets = {
    render:  { before: '/placeholder/render-before.jpg',  after: '/placeholder/render-after.jpg'  },
    staging: { before: '/placeholder/staging-before.jpg', after: '/placeholder/staging-after.jpg' },
    design:  { before: '/placeholder/design-before.jpg',  after: '/placeholder/design-after.jpg'  },
  } as const;
  const imgs = sets[tab];

  return (
    <div className="grid grid-cols-2 gap-[1px] bg-[#141914]">
      <div className="p-3 bg-[#0f120f]">
        <p className="text-xs text-[#93a393] mb-2">Before</p>
        <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1b221b] grid place-items-center">
          <img
            src={imgs.before}
            alt="before"
            className="h-full w-full object-cover opacity-90"
            onError={(e)=>((e.target as HTMLImageElement).style.display='none')}
          />
          {/* shows label if no image file exists */}
          <span className="text-[#5a6a5a] absolute">Placeholder</span>
        </div>
      </div>
      <div className="p-3 bg-[#0f120f]">
        <p className="text-xs text-[#93a393] mb-2">After</p>
        <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#1b221b] grid place-items-center">
          <img
            src={imgs.after}
            alt="after"
            className="h-full w-full object-cover opacity-90"
            onError={(e)=>((e.target as HTMLImageElement).style.display='none')}
          />
          <span className="text-[#5a6a5a] absolute">Placeholder</span>
        </div>
      </div>
    </div>
  );
}

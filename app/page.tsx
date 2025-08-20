'use client';
import { useState } from 'react';
import { Upload, Wand2, Zap, CheckCircle, Star } from 'lucide-react';
import BeforeAfter from './components/BeforeAfter';

type Tab = 'render' | 'staging' | 'design';
const TABS: Record<Tab, string> = {
  render: 'Render Enhancement',
  staging: 'Virtual Staging',
  design: 'Design Options',
};

export default function Home() {
  const [tab, setTab] = useState<Tab>('render');

  return (
    <div className="space-y-24">
      {/* HERO – toned down indigo/slate, no yellow */}
      <section className="relative text-white">
        <div className="bg-hero-ai">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-indigo-200 text-xs font-semibold">
              Built for AEC • AI-powered visuals
            </div>
            <h1 className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight">
              Photoreal results from any render — <span className="text-cyan-300">in minutes</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              Lumely enhances CG renders, stages interiors, and explores design options while preserving geometry and materials.
              Fast, consistent, client-ready.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="/signin" className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold">
                Start Free
              </a>
              <a href="/pricing" className="px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-200">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-slate-500">TRUSTED BY TEAMS IN AEC & PROPERTY</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70 px-6 max-w-5xl mx-auto">
            {['StudioOne','UrbanLab','Habitat Co.','Northside','Blueprint'].map((logo)=>(
              <div key={logo} className="rounded-lg border border-slate-200 bg-white py-3 text-sm">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK FEATURE BLOCK with pill slider + Before/After */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-950 text-white p-5 md:p-8">
          {/* Pill segmented control */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {(Object.keys(TABS) as Tab[]).map((k) => {
              const active = tab === k;
              return (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`rounded-2xl px-4 py-3 text-left transition border ${
                    active
                      ? 'bg-slate-900 border-slate-700 shadow-inner'
                      : 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-5 w-5 rounded-full grid place-items-center text-[11px] ${
                        active ? 'bg-cyan-300 text-slate-900' : 'bg-slate-900 text-slate-300'
                      }`}
                    >
                      ✦
                    </span>
                    <span className="font-semibold">{TABS[k]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl p-6 md:p-8 card-dark">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Precision controls. <span className="text-cyan-300">No surprises.</span>
                </h2>
                <p className="mt-3 text-slate-300">
                  Keep geometry and materials intact while adding photoreal tone and clarity.
                  Choose Low / Medium / High quality — with ×2 / ×4 upscaling when you need it.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2">
                    <span className="text-cyan-300">✔</span> Preserve structure and materials
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2">
                    <span className="text-cyan-300">✔</span> Balanced tone, contrast & glare control
                  </li>
                  <li className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2">
                    <span className="text-cyan-300">✔</span> Smart upscale to crisp detail
                  </li>
                </ul>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                {/* Uses your existing component and /public/placeholder/* images */}
                <BeforeAfter
                  before={
                    tab === 'render'
                      ? '/placeholder/render-before.jpg'
                      : tab === 'staging'
                      ? '/placeholder/staging-before.jpg'
                      : '/placeholder/design-before.jpg'
                  }
                  after={
                    tab === 'render'
                      ? '/placeholder/render-after.jpg'
                      : tab === 'staging'
                      ? '/placeholder/staging-after.jpg'
                      : '/placeholder/design-after.jpg'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS – cleaner, techy */}
      <section>
        <h2 className="text-3xl font-extrabold tracking-tight text-center">How Lumely works</h2>
        <p className="text-center text-slate-600 mt-2">From rough to refined — without changing your workflow.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3 max-w-7xl mx-auto px-6">
          {[
            {t:'Sign in & upload', d:'Start a new job from your dashboard. 1080p–4K supported.', Icon: Upload},
            {t:'Enhance & upscale', d:'Pick Low / Medium / High. ×2 / ×4 sharpness with material fidelity.', Icon: Wand2},
            {t:'Download & deliver', d:'Client-ready output for decks, listings and approvals.', Icon: Zap},
          ].map((s)=>(
            <div key={s.t} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-600 grid place-items-center mb-4">
                <s.Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{s.t}</h3>
              <p className="text-slate-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE GRID – AI vibe */}
      <section className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm mx-6 md:mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {t:'AEC-grade realism', d:'Tone, lighting, reflections and skies tuned for archviz.'},
            {t:'Geometry preserved', d:'No warping — lines, edges and materials remain true.'},
            {t:'Tiered quality', d:'Low (1), Medium (2), High (4) credits — pick per image.'},
            {t:'Fast & automated', d:'Upload → queue → download. Optional email notifications.'},
            {t:'Cost-efficient', d:'Use credits across enhancement, staging and options.'},
            {t:'Verified views compatible', d:'Your studio can still deliver legal accuracy when required.'},
          ].map((f)=>(
            <div key={f.t} className="flex gap-3">
              <div className="h-9 w-9 rounded-lg bg-cyan-300/20 text-cyan-700 grid place-items-center">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">{f.t}</h4>
                <p className="text-slate-600 mt-1">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS – minimal tech look */}
      <section className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-center">What teams say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((n)=>(
            <figure key={n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex justify-center mb-3 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400" />)}
              </div>
              <blockquote className="text-slate-800 text-sm">
                “Cuts our iteration time by 70% on concept decks. Clients notice the realism.”
              </blockquote>
              <figcaption className="mt-3 text-xs text-slate-500">Design Director, UrbanLab</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA – muted indigo, cyan accent */}
      <section className="text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold">Ready to try Lumely?</h3>
        <p className="text-slate-600 mt-2">Start free with 5 credits. No card required.</p>
        <div className="mt-6">
          <a href="/signin" className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white shadow">
            Sign in to start
          </a>
        </div>
      </section>
    </div>
  );
}

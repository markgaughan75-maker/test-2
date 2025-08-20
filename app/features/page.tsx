'use client';
import { useState } from 'react';
import { CheckCircle2, Sparkles, Layers, Gauge, Wand2, Box, ArrowRight } from 'lucide-react';

function MiniBeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(55);
  return (
    <div
      className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        setPos(x * 100);
      }}
      onTouchMove={(e) => {
        const t = e.touches[0];
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width));
        setPos(x * 100);
      }}
    >
      <img src={after} className="absolute inset-0 h-full w-full object-cover" alt="after" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} className="h-full w-full object-cover" alt="before" />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-cyan-400" style={{ left: `${pos}%` }} />
      <div className="absolute left-3 bottom-3 text-[11px] px-2 py-1 rounded bg-black/50 text-white">Before</div>
      <div className="absolute right-3 bottom-3 text-[11px] px-2 py-1 rounded bg-black/50 text-white">After</div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
      {/* Hero */}
      <header className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-600 text-xs font-semibold">
          <Sparkles size={14} /> What’s inside Lumely
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Features built for <span className="text-indigo-600">AEC visuals</span>
        </h1>
        <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
          Enhance CG renders, virtually stage interiors, and explore design options — quickly, consistently,
          and without breaking your geometry.
        </p>
      </header>

      {/* Benefit grid */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          { icon: Layers,    title: 'Preserve geometry', desc: 'Edges and materials remain true. No warping.' },
          { icon: Gauge,     title: 'Tiered quality',    desc: 'Low (1), Medium (2), High (4) credits per image.' },
          { icon: Wand2,     title: 'Photoreal tone',    desc: 'Lighting, reflections, skies tuned for archviz.' },
          { icon: Box,       title: 'Upscale ×2 / ×4',   desc: 'Sharper details with SWINIR-class upscaling.' },
          { icon: Sparkles,  title: 'Prompt control',    desc: 'Guide mood & materials for design variants.' },
          { icon: CheckCircle2, title: 'Production ready', desc: 'Client-ready files for decks & listings.' },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-600 grid place-items-center mb-4">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-slate-600 mt-1">{desc}</p>
          </div>
        ))}
      </section>

      {/* Feature: Render Enhancement */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Render Enhancement</h2>
          <p className="text-slate-600 mt-3">
            Add photoreal clarity while respecting your original geometry and materials.
            Ideal for concept renders and marketing visuals.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              'Balanced tone, contrast and glare control',
              'Color consistency across a deck',
              'Optional ×2 / ×4 upscaling',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" /> <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>
          <a href="/signin" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500">
            Try it free <ArrowRight size={16} />
          </a>
        </div>
        <MiniBeforeAfter
          before="/placeholder/render-before.jpg"
          after="/placeholder/render-after.jpg"
        />
      </section>

      {/* Feature: Virtual Staging */}
      <section className="grid gap-10 md:grid-cols-2 items-center md:flex-row-reverse">
        <div className="order-2 md:order-none">
          <h2 className="text-3xl font-extrabold">Virtual Staging</h2>
          <p className="text-slate-600 mt-3">
            Stage unfurnished interiors in seconds. Choose styles, keep structure intact, and generate client-ready images.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              'Bedroom, living, kitchen presets',
              'Declutter / remove items option',
              'Lighting variants (day / dusk)',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" /> <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>
          <a href="/signin" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500">
            Stage a room <ArrowRight size={16} />
          </a>
        </div>
        <div className="order-1 md:order-none">
          <MiniBeforeAfter
            before="/placeholder/staging-before.jpg"
            after="/placeholder/staging-after.jpg"
          />
        </div>
      </section>

      {/* Feature: Design Options */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Design Options</h2>
          <p className="text-slate-600 mt-3">
            Explore palettes, materials, and moods via a simple AI prompt — while keeping your layout intact.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              'Material swaps (cabinets, floors, facades)',
              'Mood variants: neutral, warm, contemporary',
              'Prompt box for specific requests',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" /> <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>
          <a href="/signin" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500">
            Explore options <ArrowRight size={16} />
          </a>
        </div>
        <MiniBeforeAfter
          before="/placeholder/design-before.jpg"
          after="/placeholder/design-after.jpg"
        />
      </section>

      {/* Technical detail / reassurance */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8">
        <h3 className="text-2xl font-bold">Designed for production teams</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { t: 'Geometry-safe', d: 'We avoid shape warping to preserve architectural lines and edges.' },
            { t: 'Consistent color', d: 'Calibrated output so decks look cohesive and brand-true.' },
            { t: 'Export friendly', d: 'Outputs sized for decks, listings, and print-ready collateral.' },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-slate-200 p-5">
              <h4 className="font-semibold">{x.t}</h4>
              <p className="text-slate-600 mt-1">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold">Ready to try Lumely?</h3>
        <p className="text-slate-600 mt-2">Start with 5 free credits. No card required.</p>
        <div className="mt-6">
          <a href="/signin" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow">
            Sign in to start
          </a>
        </div>
      </section>
    </div>
  );
}

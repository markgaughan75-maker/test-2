'use client';

import { useMemo, useState } from 'react';
import { Sparkles, Image as ImageIcon, X } from 'lucide-react';

type Service = 'render' | 'staging' | 'design';

type Example = {
  before: string;
  after: string;
  caption?: string;
};

const EXAMPLES: Record<Service, Example[]> = {
  render: [
    { before: '/examples/render/before-1.jpg', after: '/examples/render/after-1.jpg', caption: 'Daylight tone + clarity' },
    { before: '/examples/render/before-2.jpg', after: '/examples/render/after-2.jpg', caption: 'Glare control + sky balance' },
    { before: '/examples/render/before-3.jpg', after: '/examples/render/after-3.jpg', caption: 'Contrast + material pop' },
    { before: '/examples/render/before-4.jpg', after: '/examples/render/after-4.jpg', caption: 'Facade realism' },
  ],
  staging: [
    { before: '/examples/staging/before-1.jpg', after: '/examples/staging/after-1.jpg', caption: 'Scandi bedroom' },
    { before: '/examples/staging/before-2.jpg', after: '/examples/staging/after-2.jpg', caption: 'Contemporary living' },
    { before: '/examples/staging/before-3.jpg', after: '/examples/staging/after-3.jpg', caption: 'Warm dining mood' },
    { before: '/examples/staging/before-4.jpg', after: '/examples/staging/after-4.jpg', caption: 'Loft workspace' },
  ],
  design: [
    { before: '/examples/design/before-1.jpg', after: '/examples/design/after-1.jpg', caption: 'Cabinet + worktop swap' },
    { before: '/examples/design/before-2.jpg', after: '/examples/design/after-2.jpg', caption: 'Floor + wall palette' },
    { before: '/examples/design/before-3.jpg', after: '/examples/design/after-3.jpg', caption: 'Exterior material study' },
    { before: '/examples/design/before-4.jpg', after: '/examples/design/after-4.jpg', caption: 'Lighting temperature' },
  ],
};

function ServiceTabs({
  value,
  onChange,
}: {
  value: Service;
  onChange: (s: Service) => void;
}) {
  const tabs: { key: Service; label: string }[] = [
    { key: 'render', label: 'Render Enhancement' },
    { key: 'staging', label: 'Virtual Staging' },
    { key: 'design', label: 'Design Options' },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {tabs.map((t) => {
        const active = value === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`rounded-2xl px-4 py-3 text-left transition border ${
              active
                ? 'bg-slate-900 text-white border-slate-800'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-5 w-5 rounded-full grid place-items-center text-[11px] ${
                  active ? 'bg-cyan-300 text-slate-900' : 'bg-slate-100 text-slate-500'
                }`}
              >
                ✦
              </span>
              <span className="font-semibold">{t.label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function ExampleCard({
  example,
  onOpen,
}: {
  example: Example;
  onOpen: (src: string) => void;
}) {
  return (
    <figure className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <div className="grid grid-cols-2">
        <button
          onClick={() => onOpen(example.before)}
          className="relative aspect-[4/3] group"
          title="Open before"
        >
          <img
            src={example.before}
            alt="Before"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
          />
          <div className="absolute left-2 top-2 text-[11px] px-2 py-1 rounded bg-black/50 text-white">
            Before
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/20 text-white text-xs">
            <ImageIcon className="h-5 w-5 mr-2" />
            Click to enlarge
          </div>
        </button>
        <button
          onClick={() => onOpen(example.after)}
          className="relative aspect-[4/3] group"
          title="Open after"
        >
          <img
            src={example.after}
            alt="After"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
          />
          <div className="absolute left-2 top-2 text-[11px] px-2 py-1 rounded bg-black/50 text-white">
            After
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/20 text-white text-xs">
            <ImageIcon className="h-5 w-5 mr-2" />
            Click to enlarge
          </div>
        </button>
      </div>
      {example.caption && (
        <figcaption className="px-4 py-3 text-sm text-slate-600 border-t border-slate-100">
          {example.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function ExamplesPage() {
  const [service, setService] = useState<Service>('render');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const data = useMemo(() => EXAMPLES[service], [service]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 space-y-12">
      {/* Header */}
      <header className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-600 text-xs font-semibold">
          <Sparkles size={14} /> Real outputs
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
          Before & after examples
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Explore how Lumely enhances base renders, stages interiors, and explores material options
          while preserving geometry and intent.
        </p>
      </header>

      {/* Tabs */}
      <ServiceTabs value={service} onChange={setService} />

      {/* Grid */}
      <section className="grid gap-6 md:grid-cols-2 mt-4">
        {data.map((ex, i) => (
          <ExampleCard key={i} example={ex} onOpen={(src) => setLightbox(src)} />
        ))}
      </section>

      {/* CTA */}
      <section className="text-center pt-6">
        <p className="text-slate-600">Want to see your own image enhanced?</p>
        <a
          href="/signin"
          className="inline-block mt-3 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500"
        >
          Try Lumely with 5 free credits
        </a>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 text-slate-900 grid place-items-center shadow"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="Preview"
            className="max-h-[85vh] w-auto rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      )}
    </div>
  );
}

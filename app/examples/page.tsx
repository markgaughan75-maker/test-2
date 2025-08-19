'use client';
import { useState } from 'react';

type ServiceKey = 'render' | 'staging' | 'design';

const SERVICE_LABELS: Record<ServiceKey, string> = {
  render:  'Render Enhancement',
  staging: 'Virtual Staging',
  design:  'Design Options',
};

export default function Examples() {
  const [service, setService] = useState<ServiceKey>('render');

  const tabs: { key: ServiceKey; label: string }[] = [
    { key: 'render',  label: 'Render Enhancement' },
    { key: 'staging', label: 'Virtual Staging' },
    { key: 'design',  label: 'Design Options' },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Examples</h1>
        <p className="mt-2 text-slate-600">Browse results by service and compare <em>Before</em> vs <em>After</em>.</p>
      </div>

      {/* Segmented Slider / Tabs */}
      <div className="mx-auto max-w-3xl">
        <div className="relative bg-white border border-slate-200 rounded-2xl p-1 shadow-sm">
          <div className="grid grid-cols-3 gap-1">
            {tabs.map((t) => {
              const active = t.key === service;
              return (
                <button
                  key={t.key}
                  onClick={() => setService(t.key)}
                  className={`relative z-10 w-full rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Sliding highlight */}
          <div
            className={`absolute inset-y-1 w-1/3 rounded-xl bg-violet-600 transition-transform duration-300`}
            style={{
              transform:
                service === 'render'
                  ? 'translateX(0%)'
                  : service === 'staging'
                  ? 'translateX(100%)'
                  : 'translateX(200%)',
            }}
          />
        </div>
      </div>

      {/* Examples grid */}
      <ExamplesGrid service={service} />
    </div>
  );
}

/** Renders placeholder pairs for each service */
function ExamplesGrid({ service }: { service: ServiceKey }) {
  const cards = getCards(service);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map((c, i) => (
        <figure key={i} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4">
          <figcaption className="mb-3">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-slate-500">{c.subtitle}</p>
          </figcaption>
          <div className="grid grid-cols-2 gap-3">
            {/* BEFORE */}
            <div>
              <p className="text-xs text-slate-500 mb-1">Before</p>
              <PlaceholderImage label="Before" />
            </div>
            {/* AFTER */}
            <div>
              <p className="text-xs text-slate-500 mb-1">After</p>
              <PlaceholderImage label="After" />
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 grid place-items-center border border-slate-200">
      <span className="text-slate-400 text-sm">{label} image</span>
    </div>
  );
}

function getCards(service: ServiceKey): { title: string; subtitle: string }[] {
  if (service === 'render') {
    return [
      { title: 'Exterior daylight', subtitle: 'Photoreal tone, preserved geometry, ×2 upscale' },
      { title: 'Interior corridor', subtitle: 'Contrast + glare control, ×4 upscale' },
      { title: 'Aerial context', subtitle: 'Haze cleanup, material fidelity' },
      { title: 'Façade detail', subtitle: 'Edge clarity, neutral white balance' },
    ];
  }
  if (service === 'staging') {
    return [
      { title: 'Living room (Scandi)', subtitle: 'Furniture staging, ×2 upscale' },
      { title: 'Bedroom (Warm modern)', subtitle: 'Soft textiles, neutral grading' },
      { title: 'Kitchen (Minimal)', subtitle: 'Declutter, clean reflections' },
      { title: 'Dining (Industrial)', subtitle: 'Material accents, realistic shadows' },
    ];
  }
  // design options
  return [
    { title: 'Elevation options', subtitle: 'Timber vs brick, day vs dusk' },
    { title: 'Lobby mood study', subtitle: 'Warm vs cool palettes' },
    { title: 'Cladding comparison', subtitle: 'Light oak vs dark metal' },
    { title: 'Landscape concept', subtitle: 'Green density & lighting variants' },
  ];
}

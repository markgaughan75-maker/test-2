'use client';
import { useState } from 'react';

export default function RenderEnhancement() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [tier, setTier] = useState<'low'|'medium'|'high'>('medium');
  const [options, setOptions] = useState({
    daylightBalance: true,
    glareControl: true,
    contrastBoost: true,
    preserveMaterials: true,
    upscale: 'x2' as 'none'|'x2'|'x4',
  });

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult('');
  }

  function toggle<K extends keyof typeof options>(key: K, value?: any) {
    setOptions(prev => ({ ...prev, [key]: value ?? !prev[key] }));
  }

  async function generate() {
    if (!file) return alert('Please upload an image.');
    // Placeholder: later POST to /api/enhance then /api/upscale based on options/tier
    setResult(preview);
  }

  return (
    <div className="space-y-10">
      {/* Intro */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          Core Service
        </div>
        <h1 className="mt-3 text-4xl font-extrabold">Render Enhancement</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Make base CG renders look photoreal while preserving structure, geometry, and materials.
        </p>
      </div>

      {/* Controls + Preview */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Controls */}
        <aside className="md:col-span-1 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold mb-3">Settings</h3>

          <label className="block text-sm font-medium">Quality</label>
          <select value={tier} onChange={e=>setTier(e.target.value as any)}
                  className="w-full mt-1 mb-4 rounded-xl border border-slate-300 px-3 py-2">
            <option value="low">Low (1 credit)</option>
            <option value="medium">Medium (2 credits)</option>
            <option value="high">High (4 credits)</option>
          </select>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={options.preserveMaterials} onChange={()=>toggle('preserveMaterials')} />
              Preserve materials (no recolor drift)
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={options.daylightBalance} onChange={()=>toggle('daylightBalance')} />
              Daylight balance & tone mapping
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={options.glareControl} onChange={()=>toggle('glareControl')} />
              Glare / highlight control
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={options.contrastBoost} onChange={()=>toggle('contrastBoost')} />
              Subtle contrast & clarity boost
            </label>
          </div>

          <label className="block text-sm font-medium mt-4">Upscale</label>
          <select value={options.upscale} onChange={e=>toggle('upscale', e.target.value)}
                  className="w-full mt-1 rounded-xl border border-slate-300 px-3 py-2">
            <option value="none">None</option>
            <option value="x2">×2 (Medium default)</option>
            <option value="x4">×4 (High default)</option>
          </select>

          <button onClick={generate}
                  className="mt-6 w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700">
            Generate
          </button>
        </aside>

        {/* Upload & Before/After */}
        <section className="md:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <label className="block text-sm font-medium">Upload image</label>
            <label className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-4 py-2 shadow-sm hover:border-violet-300 cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={onFile}/>
              Choose file
            </label>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Input</h4>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 grid place-items-center">
                  {preview ? <img src={preview} className="h-full w-full object-cover" /> : <span className="text-slate-400">No image</span>}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Output</h4>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 grid place-items-center">
                  {result ? <img src={result} className="h-full w-full object-cover" /> : <span className="text-slate-400">No output</span>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

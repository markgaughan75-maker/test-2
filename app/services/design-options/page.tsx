'use client';
import { useState } from 'react';

export default function DesignOptions() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [palette, setPalette] = useState('Light');
  const [materials, setMaterials] = useState('Timber');
  const [mood, setMood] = useState('Day');
  const [upscale, setUpscale] = useState<'none'|'x2'|'x4'>('x2');
  const [prompt, setPrompt] = useState('');

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult('');
  }

  async function generate() {
    if (!file) return alert('Please upload an image.');
    if (!prompt.trim()) return alert('Add a short AI prompt/brief for the variation.');
    // Placeholder: later POST to /api/enhance with {palette, materials, mood, prompt}, then /api/upscale
    setResult(preview);
  }

  return (
    <div className="space-y-10">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          Variations
        </div>
        <h1 className="mt-3 text-4xl font-extrabold">Design Options</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Explore finish and palette alternatives quickly—great for client reviews and internal iterations.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Controls */}
        <aside className="md:col-span-1 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold mb-3">Options</h3>

          <label className="block text-sm font-medium">Palette</label>
          <select value={palette} onChange={e=>setPalette(e.target.value)}
                  className="w-full mt-1 mb-4 rounded-xl border border-slate-300 px-3 py-2">
            {['Light','Dark','Natural','Warm','Cool'].map(p=>(
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <label className="block text-sm font-medium">Primary material</label>
          <select value={materials} onChange={e=>setMaterials(e.target.value)}
                  className="w-full mt-1 mb-4 rounded-xl border border-slate-300 px-3 py-2">
            {['Timber','Brick','Stucco','Metal','Stone'].map(m=>(
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <label className="block text-sm font-medium">Mood</label>
          <select value={mood} onChange={e=>setMood(e.target.value)}
                  className="w-full mt-1 mb-4 rounded-xl border border-slate-300 px-3 py-2">
            {['Day','Dusk','Night','Overcast'].map(m=>(
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <label className="block text-sm font-medium">AI prompt / brief</label>
          <textarea
            value={prompt}
            onChange={e=>setPrompt(e.target.value)}
            placeholder="e.g. Light oak cladding with matte black trims, warm interior glow, evening mood."
            className="w-full mt-1 rounded-xl border border-slate-300 px-3 py-2 h-28"
          />

          <label className="block text-sm font-medium mt-4">Upscale</label>
          <select value={upscale} onChange={e=>setUpscale(e.target.value as any)}
                  className="w-full mt-1 rounded-xl border border-slate-300 px-3 py-2">
            <option value="none">None</option>
            <option value="x2">×2</option>
            <option value="x4">×4</option>
          </select>

          <button onClick={generate}
                  className="mt-6 w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700">
            Generate options
          </button>
        </aside>

        {/* Upload & Before/After */}
        <section className="md:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <label className="block text-sm font-medium">Upload base render</label>
            <label className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-4 py-2 shadow-sm hover:border-violet-300 cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={onFile}/>
              Choose file
            </label>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Before</h4>
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 grid place-items-center">
                  {preview ? <img src={preview} className="h-full w-full object-cover" /> : <span className="text-slate-400">No image</span>}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">After</h4>
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

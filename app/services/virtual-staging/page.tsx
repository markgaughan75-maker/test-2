'use client';
import { useState } from 'react';

export default function VirtualStaging() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [style, setStyle] = useState('Scandi');
  const [room, setRoom] = useState('Living room');
  const [removeClutter, setRemoveClutter] = useState(true);
  const [upscale, setUpscale] = useState<'none'|'x2'|'x4'>('x2');

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult('');
  }

  async function stage() {
    if (!file) return alert('Please upload a room photo/render.');
    // Placeholder: later call /api/enhance with staging style, then /api/upscale
    setResult(preview);
  }

  return (
    <div className="space-y-10">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          Interiors
        </div>
        <h1 className="mt-3 text-4xl font-extrabold">Virtual Staging</h1>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
          Stage empty rooms with tasteful furniture and finishes—great for proposals and listings.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Controls */}
        <aside className="md:col-span-1 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold mb-3">Options</h3>

          <label className="block text-sm font-medium">Style</label>
          <select value={style} onChange={e=>setStyle(e.target.value)}
                  className="w-full mt-1 mb-4 rounded-xl border border-slate-300 px-3 py-2">
            {['Scandi','Minimal','Warm Modern','Industrial','Coastal'].map(s=>(
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <label className="block text-sm font-medium">Room type</label>
          <select value={room} onChange={e=>setRoom(e.target.value)}
                  className="w-full mt-1 mb-4 rounded-xl border border-slate-300 px-3 py-2">
            {['Living room','Bedroom','Kitchen','Dining','Study'].map(r=>(
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={removeClutter} onChange={()=>setRemoveClutter(v=>!v)} />
            Remove clutter / small items
          </label>

          <label className="block text-sm font-medium mt-4">Upscale</label>
          <select value={upscale} onChange={e=>setUpscale(e.target.value as any)}
                  className="w-full mt-1 rounded-xl border border-slate-300 px-3 py-2">
            <option value="none">None</option>
            <option value="x2">×2</option>
            <option value="x4">×4</option>
          </select>

          <button onClick={stage}
                  className="mt-6 w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700">
            Stage
          </button>
        </aside>

        {/* Upload & Before/After */}
        <section className="md:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <label className="block text-sm font-medium">Upload room photo / render</label>
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

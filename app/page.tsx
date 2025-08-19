'use client';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [tier, setTier] = useState<'low'|'medium'|'high'>('medium');

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult('');
  }

  function fakeProcess() {
    // placeholder: in production call your /api/enhance + /api/upscale
    setResult(preview);
  }

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-violet-700 text-xs font-semibold">
          New • Render Enhancement & Upscaling
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
          Transform dull renders into <span className="text-violet-700">photoreal visuals</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Upload your CG render or screenshot. Lumely enhances realism and upscales cleanly—built for architects, designers, and real estate.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/pricing" className="px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 shadow">
            See pricing
          </a>
          <label className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-violet-300 cursor-pointer shadow-sm">
            <input type="file" accept="image/*" className="hidden" onChange={onFile}/>
            Upload image
          </label>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {title:'Upload',desc:'Drop a render, sketch, or site photo.'},
          {title:'Enhance',desc:'AI adds realistic lighting & materials while preserving geometry.'},
          {title:'Upscale',desc:'Surgically sharp ×2/×4 upscaling for client-ready exports.'},
        ].map((s,i)=>(
          <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="h-10 w-10 rounded-xl bg-violet-600 text-white grid place-items-center mb-4">{i+1}</div>
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="text-slate-600 mt-1">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* BEFORE / AFTER */}
      <section className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h4 className="font-semibold mb-2">Input</h4>
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 grid place-items-center">
              {preview ? <img src={preview} className="h-full w-full object-cover" /> : <span className="text-slate-400">No image yet</span>}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold mb-2">Output</h4>
              <select
                value={tier}
                onChange={(e)=>setTier(e.target.value as any)}
                className="text-sm border rounded-lg px-2 py-1"
              >
                <option value="low">Low (1 credit)</option>
                <option value="medium">Medium (2 credits)</option>
                <option value="high">High (4 credits)</option>
              </select>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 grid place-items-center">
              {result ? <img src={result} className="h-full w-full object-cover" /> : <span className="text-slate-400">No output yet</span>}
            </div>
            <button
              onClick={fakeProcess}
              disabled={!preview}
              className="mt-4 w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700 disabled:opacity-50"
            >
              Generate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

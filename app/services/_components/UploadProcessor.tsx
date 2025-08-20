'use client';
import { useEffect, useRef, useState } from 'react';
import { Download, Upload, Wand2 } from 'lucide-react';

type Quality = 'low' | 'medium' | 'high';

export default function UploadProcessor({
  feature,
  showPrompt = false,
}: {
  feature: 'render' | 'staging' | 'design';
  showPrompt?: boolean; // only for design options
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [quality, setQuality] = useState<Quality>('medium');
  const [upscale, setUpscale] = useState<1 | 2 | 4>(2);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pick a placeholder "result" by feature
  const sampleAfter =
    feature === 'render'
      ? '/placeholder/render-after.jpg'
      : feature === 'staging'
      ? '/placeholder/staging-after.jpg'
      : '/placeholder/design-after.jpg';

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setSrc(url);
    setResult(null);
  }

  function process() {
    setLoading(true);
    // DEMO: pretend to process; show the sample after a moment
    setTimeout(() => {
      setResult(sampleAfter);
      setLoading(false);
      // DEMO: spend credits — Low=1, Medium=2, High=4
      const cost = quality === 'low' ? 1 : quality === 'medium' ? 2 : 4;
      const v = parseInt(localStorage.getItem('lumely_credits') || '0', 10);
      localStorage.setItem('lumely_credits', String(Math.max(0, v - cost)));
      window.dispatchEvent(new Event('storage')); // nudge any listeners
    }, 900);
  }

  function download() {
    if (!result) return;
    const a = document.createElement('a');
    a.href = result;
    a.download = `lumely-${feature}-${Date.now()}.jpg`;
    a.click();
  }

  useEffect(() => {
    return () => {
      if (src) URL.revokeObjectURL(src);
    };
  }, [src]);

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Left: controls (small uploader) */}
      <div className="lg:col-span-4 space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Upload image</label>
          <div
            className="rounded-lg border border-dashed border-slate-300 p-4 text-center cursor-pointer hover:bg-slate-50"
            onClick={() => inputRef.current?.click()}
          >
            <Upload className="h-5 w-5 mx-auto text-slate-500 mb-1" />
            <div className="text-xs text-slate-500">Drop or click to upload</div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={onFile}
              className="hidden"
            />
          </div>
          {src && <div className="mt-3 text-xs text-slate-500 truncate">Selected: {src.slice(0, 40)}…</div>}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Quality</label>
            <select
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              value={quality}
              onChange={(e) => setQuality(e.target.value as Quality)}
            >
              <option value="low">Low (1 credit)</option>
              <option value="medium">Medium (2 credits)</option>
              <option value="high">High (4 credits)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Upscale</label>
            <select
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              value={upscale}
              onChange={(e) => setUpscale(parseInt(e.target.value, 10) as 1 | 2 | 4)}
            >
              <option value={1}>None</option>
              <option value={2}>×2</option>
              <option value={4}>×4</option>
            </select>
          </div>

          {showPrompt && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">AI prompt (optional)</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., warm walnut floors, matte black fixtures, neutral palette"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                rows={4}
              />
            </div>
          )}

          <button
            onClick={process}
            disabled={!src || loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-semibold hover:bg-indigo-500 disabled:opacity-60"
          >
            <Wand2 className="h-4 w-4" />
            {loading ? 'Processing…' : 'Process'}
          </button>
          <p className="text-[11px] text-slate-500">
            Low=1 credit · Medium=2 credits · High=4 credits. Upscale is included in the credit cost.
          </p>
        </div>
      </div>

      {/* Right: big result preview */}
      <div className="lg:col-span-8 space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-100 grid place-items-center">
            {result ? (
              // show result image
              <img src={result} alt="Result" className="h-full w-full object-contain" />
            ) : src ? (
              // show original image (pre-process)
              <img src={src} alt="Preview" className="h-full w-full object-contain opacity-80" />
            ) : (
              <span className="text-slate-400 text-sm">Result preview appears here</span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setSrc(null);
              setResult(null);
              inputRef.current?.click();
            }}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
          >
            Upload new
          </button>
          <button
            onClick={download}
            disabled={!result}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            <Download className="h-4 w-4" /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

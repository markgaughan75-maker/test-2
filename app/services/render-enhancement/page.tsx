'use client';
import UploadProcessor from '../_components/UploadProcessor';

export default function RenderEnhancementPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Render Enhancement</h1>
      <p className="text-slate-600">Add photoreal clarity while preserving geometry and materials.</p>
      <UploadProcessor feature="render" />
    </div>
  );
}

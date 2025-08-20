'use client';
import UploadProcessor from '../_components/UploadProcessor';

export default function DesignOptionsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Design Options</h1>
      <p className="text-slate-600">Explore materials, palettes, and moods with an AI prompt.</p>
      <UploadProcessor feature="design" showPrompt />
    </div>
  );
}

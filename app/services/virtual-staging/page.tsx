'use client';
import UploadProcessor from '../_components/UploadProcessor';

export default function VirtualStagingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Virtual Staging</h1>
      <p className="text-slate-600">Stage unfurnished rooms with curated styles — structure intact.</p>
      <UploadProcessor feature="staging" />
    </div>
  );
}

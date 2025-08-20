'use client';
import { useState } from 'react';

type Props = {
  before: string; // e.g. '/placeholder/render-before.jpg'
  after: string;  // e.g. '/placeholder/render-after.jpg'
};

/**
 * Minimal before/after slider.
 * Works even if images don’t exist (shows a text fallback).
 */
export default function BeforeAfter({ before, after }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-900"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        setPos(Math.round(x * 100));
      }}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
        setPos(Math.round(x * 100));
      }}
    >
      {/* AFTER (full) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(el) => ((el.target as HTMLImageElement).style.display = 'none')}
      />

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="h-full w-full object-cover"
          onError={(el) => ((el.target as HTMLImageElement).style.display = 'none')}
        />
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 h-full w-0.5 bg-cyan-300"
        style={{ left: `${pos}%` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ left: `calc(${pos}% - 18px)` }}
      >
        <div className="h-9 w-9 rounded-full bg-white/80 text-slate-900 grid place-items-center text-xs">
          ⇆
        </div>
      </div>

      {/* Fallback labels if no images */}
      <div className="absolute left-3 bottom-3 text-[11px] px-2 py-1 rounded bg-black/50 text-white">Before</div>
      <div className="absolute right-3 bottom-3 text-[11px] px-2 py-1 rounded bg-black/50 text-white">After</div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CreditCard, Home, Images, Layers, Palette, Settings, Sparkles, Plus } from 'lucide-react';

function useCredits() {
  const [credits, setCredits] = useState<number>(0);
  useEffect(() => {
    const v = localStorage.getItem('lumely_credits');
    if (v === null) localStorage.setItem('lumely_credits', '55'); // demo: give some credits
    setCredits(parseInt(localStorage.getItem('lumely_credits') || '55', 10));
  }, []);
  const add = (n: number) => {
    const next = credits + n;
    localStorage.setItem('lumely_credits', String(next));
    setCredits(next);
  };
  const spend = (n: number) => {
    const next = Math.max(0, credits - n);
    localStorage.setItem('lumely_credits', String(next));
    setCredits(next);
  };
  return { credits, add, spend, setCredits };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const { credits, add } = useCredits();

  return (
    <div className="min-h-[80vh] grid grid-cols-12 gap-0">
      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 border-r border-slate-200 bg-white">
        <div className="p-5">
          <Link href="/services" className="flex items-center gap-2 font-extrabold text-slate-900">
            <Sparkles className="h-5 w-5 text-indigo-600" /> Lumely
          </Link>
        </div>
        <nav className="px-3 py-2 space-y-1 text-sm">
          <Link href="/services" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
            <Home className="h-4 w-4" /> Overview
          </Link>
          <Link href="/services/render-enhancement" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
            <Layers className="h-4 w-4" /> Render Enhancement
          </Link>
          <Link href="/services/virtual-staging" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
            <Images className="h-4 w-4" /> Virtual Staging
          </Link>
          <Link href="/services/design-options" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
            <Palette className="h-4 w-4" /> Design Options
          </Link>

          <div className="mt-4 pt-4 border-t border-slate-200 text-slate-500">Account</div>
          <Link href="/account/subscription" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
            <CreditCard className="h-4 w-4" /> Subscription
          </Link>
          <Link href="/account/settings" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <div className="col-span-12 md:col-span-9 lg:col-span-10">
        {/* Credits bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
          <div className="text-sm text-slate-600">
            Credits: <span className="font-semibold text-slate-900">{credits}</span>
          </div>
          <button
            onClick={() => add(50)} // demo top-up
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            <Plus className="h-4 w-4" /> Top up 50
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

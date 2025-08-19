'use client';
import { useState } from 'react';

type Plan = { name: string; price: string; credits: string; envKey: 'STARTER_PRICE_ID'|'STUDIO_PRICE_ID'|'PRO_PRICE_ID' };

const plans: Plan[] = [
  { name: 'Starter', price: '€20', credits: '60 credits', envKey: 'STARTER_PRICE_ID' },
  { name: 'Studio',  price: '€35', credits: '180 credits', envKey: 'STUDIO_PRICE_ID'  },
  { name: 'Pro',     price: '€60', credits: '500 credits', envKey: 'PRO_PRICE_ID'     },
];

export default function Subscribe() {
  const [loading, setLoading] = useState<string>('');

  async function checkout(envKey: Plan['envKey']) {
    setLoading(envKey);
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ envKey }),
    });
    const data = await res.json();
    setLoading('');
    if (data.url) window.location.href = data.url;
    else alert(data.message || 'Checkout not configured yet.');
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Choose your plan</h1>
        <p className="text-slate-600 mt-2">One subscription for Enhancement, Staging, and Design Options.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map(p => (
          <div key={p.name} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <div className="text-3xl font-extrabold text-violet-700 mt-2">{p.price}</div>
            <p className="text-slate-600">{p.credits}</p>
            <button
              onClick={() => checkout(p.envKey)}
              disabled={loading === p.envKey}
              className="mt-6 w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700 disabled:opacity-60"
            >
              {loading === p.envKey ? 'Redirecting…' : 'Subscribe'}
            </button>
            <p className="text-xs text-slate-500 mt-3">Monthly billing. Cancel anytime.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

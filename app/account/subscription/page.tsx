'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Check, CreditCard, Download } from 'lucide-react';

type PlanKey = 'free' | 'starter' | 'studio' | 'pro';
type Period = 'monthly' | 'yearly';

const PLANS: Record<
  PlanKey,
  { label: string; monthly: number; yearly: number; credits: number; blurb: string }
> = {
  free:    { label: 'Free',    monthly: 0,  yearly: 0,  credits: 5,   blurb: 'Try Lumely with 5 credits.' },
  starter: { label: 'Starter', monthly: 20, yearly: 17, credits: 50,  blurb: 'For light individual use.' },
  studio:  { label: 'Studio',  monthly: 35, yearly: 30, credits: 200, blurb: 'Most popular for teams.' },
  pro:     { label: 'Pro',     monthly: 60, yearly: 51, credits: 600, blurb: 'High volume and teams.' },
};

function useDemoAccount() {
  const [plan, setPlan] = useState<PlanKey>('free');
  const [period, setPeriod] = useState<Period>('monthly');
  const [credits, setCredits] = useState<number>(5);

  useEffect(() => {
    const p = (localStorage.getItem('lumely_plan') as PlanKey) || 'free';
    const per = (localStorage.getItem('lumely_period') as Period) || 'monthly';
    const c = parseInt(localStorage.getItem('lumely_credits') || '5', 10);
    setPlan(p);
    setPeriod(per);
    setCredits(c);
  }, []);

  function save(nextPlan: PlanKey, nextPeriod: Period, nextCredits?: number) {
    localStorage.setItem('lumely_plan', nextPlan);
    localStorage.setItem('lumely_period', nextPeriod);
    if (typeof nextCredits === 'number') {
      localStorage.setItem('lumely_credits', String(nextCredits));
      setCredits(nextCredits);
    }
    setPlan(nextPlan);
    setPeriod(nextPeriod);
  }

  return { plan, period, credits, save, setCredits };
}

export default function SubscriptionPage() {
  const { plan, period, credits } = useDemoAccount();
  const price = useMemo(
    () => (period === 'yearly' ? PLANS[plan].yearly : PLANS[plan].monthly),
    [plan, period]
  );

  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Subscription</h1>
          <p className="text-slate-600">Manage your plan, billing, and invoices.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
          <div className="text-slate-600">Credits</div>
          <div className="text-2xl font-extrabold">{credits}</div>
        </div>
      </header>

      {/* Current plan card */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm text-slate-600">Current plan</div>
            <div className="text-xl font-bold">
              {PLANS[plan].label} · {period === 'yearly' ? 'Yearly' : 'Monthly'} · €{price}/mo
            </div>
            <p className="text-slate-600 text-sm mt-1">{PLANS[plan].blurb}</p>
          </div>
          <div className="flex gap-3">
            {/* Toggle period via checkout (mock) */}
            <Link
              href={`/checkout?change=period&to=${period === 'yearly' ? 'monthly' : 'yearly'}`}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
            >
              Switch to {period === 'yearly' ? 'Monthly' : 'Yearly'}
            </Link>
            <Link
              href="/checkout?topup=50"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Top up 50 credits
            </Link>
          </div>
        </div>
      </section>

      {/* Plan selector */}
      <section>
        <h2 className="text-lg font-bold mb-4">Change plan</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {(Object.keys(PLANS) as PlanKey[]).map((k) => {
            const p = PLANS[k];
            const isCurrent = k === plan;
            const display = period === 'yearly' ? p.yearly : p.monthly;
            return (
              <div
                key={k}
                className={`rounded-2xl border p-6 bg-white ${
                  isCurrent ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{p.label}</h3>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 text-emerald-600 text-xs">
                      <Check className="h-4 w-4" /> Current
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-2xl font-extrabold">€{display}</span>
                  <span className="text-sm text-slate-500">/mo</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">{p.credits} credits / month</p>
                <p className="text-xs text-slate-500 mt-1">
                  {period === 'yearly' ? 'Billed yearly · ~15% off' : 'Billed monthly'}
                </p>
                <Link
                  href={`/checkout?plan=${k}&period=${period}`}
                  className={`mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    isCurrent
                      ? 'bg-slate-900 text-white hover:bg-slate-800'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500'
                  }`}
                >
                  {isCurrent ? 'Manage billing' : 'Choose plan'}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Payment method + Invoices (mock) */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-semibold">Payment method</h3>
          <p className="text-slate-600 text-sm mt-2">
            <span className="inline-flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Visa ending 4242
            </span>
            <span className="ml-2 text-slate-400">· Expires 08/27</span>
          </p>
          <Link
            href="/checkout?update=card"
            className="mt-4 inline-block rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
          >
            Update card
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-0 overflow-hidden">
          <div className="p-6">
            <h3 className="font-semibold">Invoices</h3>
            <p className="text-slate-600 text-sm">Download past invoices.</p>
          </div>
          <div className="border-t border-slate-200 divide-y">
            {[
              { id: 'INV-00124', date: '2025-07-01', amount: '€35.00' },
              { id: 'INV-00123', date: '2025-06-01', amount: '€35.00' },
              { id: 'INV-00122', date: '2025-05-01', amount: '€35.00' },
            ].map((inv) => (
              <div key={inv.id} className="flex items-center justify-between px-6 py-4">
                <div className="text-sm">
                  <div className="font-medium">{inv.id}</div>
                  <div className="text-slate-500">{inv.date}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-semibold">{inv.amount}</div>
                  <button className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm hover:bg-slate-50">
                    <Download className="h-4 w-4" /> PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Danger zone (mock) */}
      <section className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
        <h3 className="font-semibold text-rose-700">Cancel subscription</h3>
        <p className="text-rose-700/80 text-sm mt-1">
          You’ll keep access until the end of the billing period. This is a demo action.
        </p>
        <Link
          href="/checkout?cancel=true"
          className="mt-3 inline-block rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-500"
        >
          Cancel subscription
        </Link>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

type PlanKey = 'free' | 'starter' | 'studio' | 'pro';

const PLANS: Record<
  PlanKey,
  {
    label: string;
    monthly: number;   // € per month
    yearly: number;    // € per month (billed yearly)
    credits: number;   // monthly credits
    badge?: string;
    features: string[];
  }
> = {
  free: {
    label: 'Free',
    monthly: 0,
    yearly: 0,
    credits: 5,
    features: [
      '5 credits to try',
      'Access to all 3 features',
      'Before/After viewer',
      'Email support',
    ],
  },
  starter: {
    label: 'Starter',
    monthly: 20,
    yearly: 17, // ~15% off billed yearly
    credits: 50,
    features: [
      '50 credits / mo',
      'Low / Medium / High quality',
      '×2 / ×4 upscaling',
      'Standard support',
    ],
  },
  studio: {
    label: 'Studio',
    monthly: 35,
    yearly: 30,
    credits: 200,
    badge: 'Most Popular',
    features: [
      '200 credits / mo',
      'Priority queue speed',
      'Batch uploads (up to 10)',
      'Priority support',
    ],
  },
  pro: {
    label: 'Pro',
    monthly: 60,
    yearly: 51,
    credits: 600,
    features: [
      '600 credits / mo',
      'Fastest queue speed',
      'Team seats (up to 5)',
      'SLA support',
    ],
  },
};

const COMPARISON: { label: string; free: boolean; starter: boolean; studio: boolean; pro: boolean }[] = [
  { label: 'Render Enhancement', free: true, starter: true, studio: true, pro: true },
  { label: 'Virtual Staging', free: true, starter: true, studio: true, pro: true },
  { label: 'Design Options (AI prompt)', free: true, starter: true, studio: true, pro: true },
  { label: '×2 / ×4 Upscaling', free: true, starter: true, studio: true, pro: true },
  { label: 'Priority queue speed', free: false, starter: false, studio: true, pro: true },
  { label: 'Batch uploads', free: false, starter: false, studio: true, pro: true },
  { label: 'Team seats', free: false, starter: false, studio: false, pro: true },
  { label: 'SLA support', free: false, starter: false, studio: false, pro: true },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  const displayPrice = (key: PlanKey) => (yearly ? PLANS[key].yearly : PLANS[key].monthly);
  const billedNote = yearly ? 'Billed yearly • ~15% off' : 'Billed monthly';
  const creditNote = 'Low=1 credit · Medium=2 credits · High=4 credits';

  const order: PlanKey[] = ['free', 'starter', 'studio', 'pro'];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Simple, flexible pricing</h1>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Use credits across all features. Upgrade, downgrade, or cancel any time.
        </p>

        {/* Toggle */}
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              !yearly ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              yearly ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
            onClick={() => setYearly(true)}
          >
            Yearly <span className="ml-1 text-emerald-600">–15%</span>
          </button>
        </div>

        <p className="mt-2 text-xs text-slate-500">{billedNote}</p>
        <p className="mt-1 text-xs text-slate-500">{creditNote}</p>
      </header>

      {/* Cards */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {order.map((key) => {
          const p = PLANS[key];
          const highlight = key === 'studio';
          return (
            <div
              key={key}
              className={`rounded-2xl border p-6 shadow-sm bg-white ${
                highlight ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.label}</h3>
                {p.badge && (
                  <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-extrabold">€{displayPrice(key)}</span>
                <span className="text-sm text-slate-500">/mo</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{p.credits} credits / month</p>

              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" /> <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/signin"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold transition ${
                  highlight
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {key === 'free' ? 'Start Free' : 'Choose Plan'} <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </section>

      {/* Comparison table */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-extrabold">Compare plans</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500">
                <th className="py-3 pr-4">Feature</th>
                <th className="py-3 px-4">Free</th>
                <th className="py-3 px-4">Starter</th>
                <th className="py-3 px-4">Studio</th>
                <th className="py-3 px-4">Pro</th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-slate-50/60">
              {COMPARISON.map((row) => (
                <tr key={row.label}>
                  <td className="py-3 pr-4 text-slate-700">{row.label}</td>
                  {(['free', 'starter', 'studio', 'pro'] as PlanKey[]).map((k) => (
                    <td key={k} className="py-3 px-4">
                      {row[k] ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700">
                          <Check className="h-4 w-4" /> Included
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            q: 'How do credits work?',
            a: 'Each image you process consumes credits depending on quality: Low=1, Medium=2, High=4. Credits reset monthly on your billing date.',
          },
          {
            q: 'Can I switch plans anytime?',
            a: 'Yes. Upgrades are immediate and prorated; downgrades take effect at the next billing cycle.',
          },
          {
            q: 'What outputs do I get?',
            a: 'You’ll receive enhanced images ready for decks, listings, or print. Upscale ×2/×4 available on Medium/High.',
          },
          {
            q: 'Do unused credits roll over?',
            a: 'Not by default. Contact us if you need a custom plan with rollover for your studio.',
          },
        ].map((f) => (
          <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="text-slate-600 mt-2">{f.a}</p>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold">Ready to start?</h3>
        <p className="text-slate-600 mt-2">Create an account and get 5 free credits.</p>
        <div className="mt-6">
          <a href="/signin" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow">
            Sign up free
          </a>
        </div>
        <p className="text-xs text-slate-400 mt-3">Prices exclude VAT where applicable.</p>
      </section>
    </div>
  );
}

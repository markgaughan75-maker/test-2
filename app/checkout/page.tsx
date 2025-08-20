'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

type PlanKey = 'free' | 'starter' | 'studio' | 'pro';
type Period = 'monthly' | 'yearly';

const PLAN_LABEL: Record<PlanKey, string> = {
  free: 'Free',
  starter: 'Starter',
  studio: 'Studio',
  pro: 'Pro',
};

const PLAN_PRICE: Record<PlanKey, { monthly: number; yearly: number; credits: number }> = {
  free:    { monthly: 0,  yearly: 0,  credits: 5   },
  starter: { monthly: 20, yearly: 17, credits: 50  },
  studio:  { monthly: 35, yearly: 30, credits: 200 },
  pro:     { monthly: 60, yearly: 51, credits: 600 },
};

export default function CheckoutPage() {
  const router = useRouter();
  const search = useSearchParams();

  // What action are we performing?
  const plan   = search.get('plan') as PlanKey | null;          // e.g. ?plan=studio
  const period = (search.get('period') as Period | null) || null; // e.g. &period=monthly
  const topup  = search.get('topup');                           // e.g. ?topup=50
  const change = search.get('change');                          // e.g. ?change=period&to=yearly
  const to     = search.get('to') as Period | null;             // e.g. to=yearly
  const update = search.get('update');                          // e.g. ?update=card
  const cancel = search.get('cancel');                          // e.g. ?cancel=true

  // Demo form state
  const [nameOnCard, setNameOnCard] = useState('');
  const [card, setCard] = useState('');
  const [exp, setExp] = useState('');
  const [cvc, setCvc] = useState('');
  const [processing, setProcessing] = useState(false);

  const intent = useMemo(() => {
    if (topup) return `Top up ${topup} credits`;
    if (change === 'period' && to) return `Switch billing to ${to}`;
    if (update === 'card') return 'Update card';
    if (cancel === 'true') return 'Cancel subscription';
    if (plan && period) return `Choose ${PLAN_LABEL[plan]} (${period})`;
    return 'Checkout';
  }, [plan, period, topup, change, to, update, cancel]);

  const pricePreview = useMemo(() => {
    // This is a mock processor — we just show indicative prices.
    if (topup) {
      const qty = parseInt(topup, 10) || 0;
      // Example: €10 per 50 credits as a notional top-up price (adjust later)
      const amount = qty <= 0 ? 0 : Math.max(5, Math.round((qty / 50) * 10));
      return `€${amount}.00 (demo)`;
    }
    if (plan && period) {
      return `€${PLAN_PRICE[plan][period]}/mo (demo)`;
    }
    if (change === 'period' && to) {
      // No charge to switch period in this demo
      return '€0.00 (demo)';
    }
    if (update === 'card') return '€0.00 (demo)';
    if (cancel === 'true') return '€0.00 (demo)';
    return '';
  }, [plan, period, topup, change, to, update, cancel]);

  function getCurrentCredits(): number {
    return parseInt(localStorage.getItem('lumely_credits') || '0', 10);
  }

  function setCredits(n: number) {
    localStorage.setItem('lumely_credits', String(Math.max(0, Math.floor(n))));
    // Trigger any UI listeners (e.g., the top bar)
    window.dispatchEvent(new Event('storage'));
  }

  function setPlan(p: PlanKey, per: Period) {
    localStorage.setItem('lumely_plan', p);
    localStorage.setItem('lumely_period', per);
  }

  async function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    setProcessing(true);

    // Simulate a gateway delay
    setTimeout(() => {
      // Apply changes for each intent
      if (topup) {
        const qty = parseInt(topup, 10) || 0;
        setCredits(getCurrentCredits() + qty);
      } else if (change === 'period' && to) {
        const currentPlan = (localStorage.getItem('lumely_plan') as PlanKey) || 'free';
        setPlan(currentPlan, to);
      } else if (update === 'card') {
        // No-op in demo
      } else if (cancel === 'true') {
        // Switch to free, reset credits to 5 (demo)
        setPlan('free', 'monthly');
        setCredits(Math.min(getCurrentCredits(), 5));
      } else if (plan && period) {
        // Changing plan: set plan/period and reset monthly credits for demo
        setPlan(plan, period);
        setCredits(PLAN_PRICE[plan].credits);
      }

      setProcessing(false);
      router.push('/account/subscription');
    }, 900);
  }

  // Basic guard: if nothing meaningful in query, show a hint
  const hasAction =
    !!topup || !!plan || !!update || !!cancel || (change === 'period' && !!to);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Payment</h1>
      <p className="text-slate-600 mt-1">
        {intent} {pricePreview ? `· ${pricePreview}` : ''}
      </p>

      {!hasAction && (
        <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-800">
          No checkout action specified. Go back to{' '}
          <a href="/account/subscription" className="underline">
            Subscription
          </a>
          .
        </div>
      )}

      {/* Mock card form */}
      <form onSubmit={handleConfirm} className="mt-8 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-700">Name on card</span>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="Jane Doe"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-700">Card number</span>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="4242 4242 4242 4242"
                value={card}
                onChange={(e) => setCard(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-700">Expiry</span>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="08/27"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                required
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-700">CVC</span>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
              />
            </label>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            This is a demo checkout — no real charges are made. Values above are placeholders so you
            can validate the flow end-to-end before wiring Stripe.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/account/subscription')}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!hasAction || processing}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
          >
            {processing ? 'Processing…' : 'Confirm payment'}
          </button>
        </div>
      </form>
    </div>
  );
}

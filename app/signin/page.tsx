'use client';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function sendMagicLink() {
    // TEMP: No real email; just simulate success + redirect to Services.
    setSent(true);
    setTimeout(() => {
      window.location.href = '/services';
    }, 600);
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-extrabold mb-2">Sign in</h1>
      <p className="text-slate-600 mb-6">We’ll email you a magic link to sign in. (Demo mode for now.)</p>

      <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 mb-4 focus:border-violet-400 outline-none"
        />
        <button
          onClick={sendMagicLink}
          className="w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700"
        >
          Send magic link
        </button>

        {sent && <p className="mt-3 text-sm text-green-700">Success — redirecting…</p>}
      </div>

      <p className="text-xs text-slate-500 mt-4">When ready, we’ll swap this for real Supabase auth.</p>
    </div>
  );
}

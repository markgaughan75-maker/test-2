'use client';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'sent'>('idle');

  function fakeSend() {
    // Placeholder: in production call your auth provider (Supabase/Auth0/Clerk)
    setStatus('sent');
  }

  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-extrabold mb-2">Sign in</h1>
      <p className="text-slate-600 mb-6">
        We’ll email you a magic link to sign in. (Demo form for now.)
      </p>

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
          onClick={fakeSend}
          className="w-full rounded-xl bg-violet-600 text-white py-3 font-semibold hover:bg-violet-700"
        >
          Send magic link
        </button>

        {status === 'sent' && (
          <p className="mt-3 text-sm text-green-700">Check your inbox (demo only).</p>
        )}
      </div>

      <p className="text-sm text-slate-500 mt-6">
        Tip: later you can replace this with Supabase/Auth0/Clerk.
      </p>
    </div>
  );
}

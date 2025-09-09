"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Chrome, Apple, Github, ShieldCheck } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password: pw,
    });
    setLoading(false);
    if (res?.error) {
      setErr('Invalid email or password');
    } else {
      router.push('/services');
    }
  }

  function socialClick(provider: 'google') {
    signIn(provider, { callbackUrl: '/services' });
  }

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-600 text-xs font-semibold">
          <ShieldCheck size={14} /> Secure sign in
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Welcome back</h1>
        <p className="mt-2 text-slate-600">Sign in to access your features and credits.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Social sign in */}
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => socialClick('google')}
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 hover:bg-slate-50"
          >
            <Chrome className="h-5 w-5 text-indigo-600" />
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-xs text-slate-500">or continue with email</span>
          </div>
        </div>

        {/* Email/password form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Email</span>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-10 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Password</span>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-300 bg-white px-10 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-indigo-400"
              />
            </div>
          </label>

          {err && <p className="text-sm text-rose-600">{err}</p>}

          <div className="flex items-center justify-between text-sm">
            <a href="/reset" className="text-slate-500 hover:text-slate-800">
              Forgot password?
            </a>
            <div className="text-slate-500">
              New here?{' '}
              <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Register now
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>

          <p className="mt-2 text-center text-xs text-slate-500">
            Want more credits?{' '}
            <a href="/pricing" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Subscribe now
            </a>
          </p>
        </form>
      </div>

      {/* Small reassurance */}
      <p className="mt-6 text-center text-xs text-slate-500">
        Protected with industry-standard encryption. We never share your data.
      </p>
    </div>
  );
}

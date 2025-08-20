'use client';

import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [productUpdates, setProductUpdates] = useState(true);

  useEffect(() => {
    setName(localStorage.getItem('lumely_name') || '');
    setCompany(localStorage.getItem('lumely_company') || '');
    setEmail(localStorage.getItem('lumely_email') || '');
    setNewsletter(localStorage.getItem('lumely_news') !== 'false');
    setProductUpdates(localStorage.getItem('lumely_updates') !== 'false');
  }, []);

  function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem('lumely_name', name);
    localStorage.setItem('lumely_company', company);
    localStorage.setItem('lumely_email', email);
    alert('Profile saved (demo).');
  }

  function savePrefs(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem('lumely_news', String(newsletter));
    localStorage.setItem('lumely_updates', String(productUpdates));
    alert('Preferences saved (demo).');
  }

  function changePassword(e: React.FormEvent) {
    e.preventDefault();
    alert('Password changed (demo).');
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Settings</h1>
        <p className="text-slate-600">Manage your profile, preferences, and security.</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold">Profile</h2>
        <form onSubmit={saveProfile} className="grid gap-4 md:grid-cols-2 mt-4">
          <label className="block">
            <div className="text-sm text-slate-700 mb-1">Name</div>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
            />
          </label>
          <label className="block">
            <div className="text-sm text-slate-700 mb-1">Company</div>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Lumely Studio"
            />
          </label>
          <label className="block md:col-span-2">
            <div className="text-sm text-slate-700 mb-1">Email</div>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
            />
          </label>
          <div className="md:col-span-2">
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-white text-sm hover:bg-slate-800">
              Save profile
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold">Notifications</h2>
        <form onSubmit={savePrefs} className="space-y-3 mt-4">
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
            <span className="text-sm text-slate-700">Email me product news & tutorials</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" checked={productUpdates} onChange={(e) => setProductUpdates(e.target.checked)} />
            <span className="text-sm text-slate-700">Email me important product updates</span>
          </label>
          <button className="mt-2 rounded-lg bg-slate-900 px-4 py-2 text-white text-sm hover:bg-slate-800">
            Save preferences
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold">Security</h2>
        <form onSubmit={changePassword} className="grid gap-4 md:grid-cols-3 mt-4">
          <label className="block">
            <div className="text-sm text-slate-700 mb-1">Current password</div>
            <input type="password" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <label className="block">
            <div className="text-sm text-slate-700 mb-1">New password</div>
            <input type="password" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <label className="block">
            <div className="text-sm text-slate-700 mb-1">Confirm new password</div>
            <input type="password" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          </label>
          <div className="md:col-span-3">
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-white text-sm hover:bg-slate-800">
              Change password
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { Layers, Images, Palette } from 'lucide-react';

export default function ServicesHome() {
  const cards = [
    {
      href: '/services/render-enhancement',
      title: 'Render Enhancement',
      desc: 'Photoreal clarity with geometry/material fidelity. Optional ×2/×4 upscale.',
      Icon: Layers,
    },
    {
      href: '/services/virtual-staging',
      title: 'Virtual Staging',
      desc: 'Stage unfurnished rooms with curated styles — structure intact.',
      Icon: Images,
    },
    {
      href: '/services/design-options',
      title: 'Design Options',
      desc: 'Explore palettes & materials with AI prompts — layout unchanged.',
      Icon: Palette,
    },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Choose a feature</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(({ href, title, desc, Icon }) => (
          <Link
            key={href}
            href={href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-600 grid place-items-center mb-4">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-slate-600 mt-1 text-sm">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

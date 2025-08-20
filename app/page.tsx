"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Star, Upload, Zap, Wand2, CheckCircle } from "lucide-react";

// Simple before/after slider component
function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div
      className="relative w-full max-w-xl h-64 overflow-hidden rounded-2xl shadow-lg cursor-col-resize"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setPos(x);
      }}
    >
      <Image src={before} alt="Before" fill className="object-cover" />
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <Image src={after} alt="After" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 border-l-2 border-violet-500" style={{ left: `${pos}%` }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="font-['Plus_Jakarta_Sans']">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-violet-600 via-violet-700 to-violet-800 text-white text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto">
          Transform Your Renders into <span className="text-yellow-300">Photoreal Perfection</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-violet-100">
          Lumely uses AI to enhance, upscale, and reimagine your architectural visualizations.
          Faster, sharper, and smarter — designed for the AEC industry.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/signin"
            className="px-6 py-3 rounded-xl bg-yellow-300 text-violet-900 font-semibold hover:bg-yellow-400 transition"
          >
            Start Free
          </a>
          <a
            href="/pricing"
            className="px-6 py-3 rounded-xl border border-violet-200 font-semibold hover:bg-white hover:text-violet-700 transition"
          >
            View Pricing
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 bg-white text-center">
        <p className="text-gray-500 text-sm uppercase mb-6">Trusted by forward-thinking teams</p>
        <div className="flex justify-center gap-12 opacity-70">
          <div className="h-8 w-24 bg-gray-200 rounded" />
          <div className="h-8 w-24 bg-gray-200 rounded" />
          <div className="h-8 w-24 bg-gray-200 rounded" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14">How Lumely Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <Upload className="h-12 w-12 mx-auto text-violet-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">1. Upload</h3>
            <p className="text-gray-500">Drag and drop your render — any format, any resolution.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <Wand2 className="h-12 w-12 mx-auto text-violet-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">2. Choose Enhancement</h3>
            <p className="text-gray-500">Select AI options — upscale, photoreal, or design variants.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <Zap className="h-12 w-12 mx-auto text-violet-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">3. Get Results</h3>
            <p className="text-gray-500">Receive ultra-realistic visuals in seconds, ready to use.</p>
          </div>
        </div>
      </section>

      {/* FEATURES / SLIDERS */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-14">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
          <div>
            <h3 className="font-semibold mb-4">Render Enhancement</h3>
            <BeforeAfter before="/placeholder-before.jpg" after="/placeholder-after.jpg" />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Design Variants</h3>
            <BeforeAfter before="/placeholder-before.jpg" after="/placeholder-after.jpg" />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Photoreal Visualisations</h3>
            <BeforeAfter before="/placeholder-before.jpg" after="/placeholder-after.jpg" />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14">Why Choose Lumely?</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
          {[
            { title: "Fast Turnarounds", desc: "Enhancements in seconds, not days." },
            { title: "Photorealistic Quality", desc: "Sharper, clearer, more lifelike renders." },
            { title: "Flexible AI Prompts", desc: "Guide the AI to match your vision." },
            { title: "AEC Industry Focused", desc: "Built for architects & visualization studios." },
          ].map((f) => (
            <div key={f.title} className="bg-white p-8 rounded-2xl shadow">
              <CheckCircle className="h-8 w-8 text-violet-600 mb-4" />
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-14">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-gray-50 p-8 rounded-2xl shadow">
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                “Lumely completely changed how we present projects — our renders now look
                indistinguishable from photography.”
              </p>
              <p className="text-sm font-semibold text-violet-700">John Smith, Architect</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Simple Pricing</h2>
        <p className="text-gray-500 mb-12">Choose the plan that fits your studio.</p>
        <div className="flex justify-center gap-8">
          <div className="bg-white p-8 rounded-2xl shadow max-w-sm">
            <h3 className="font-semibold mb-2">Starter</h3>
            <p className="text-3xl font-bold">€20</p>
            <p className="text-gray-500 mb-6">50 credits</p>
            <a
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              Get Started
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow max-w-sm border-2 border-violet-600">
            <h3 className="font-semibold mb-2">Studio</h3>
            <p className="text-3xl font-bold">€35</p>
            <p className="text-gray-500 mb-6">200 credits</p>
            <a
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              Most Popular
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-b from-violet-700 to-violet-900 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">Ready to Transform Your Renders?</h2>
        <p className="max-w-2xl mx-auto text-violet-200 mb-10">
          Join architects and designers worldwide using Lumely to deliver photoreal results at
          lightning speed.
        </p>
        <a
          href="/signin"
          className="px-8 py-4 rounded-xl bg-yellow-300 text-violet-900 font-bold text-lg hover:bg-yellow-400 transition"
        >
          Start Free
        </a>
      </section>
    </div>
  );
}

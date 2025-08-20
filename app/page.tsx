// app/page.tsx
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-gradient-to-b from-white via-white to-gray-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left side text */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-200">
              <Sparkles size={16} /> Built for AEC • AI-powered visuals
            </span>
            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Photoreal results from any render — 
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"> in minutes</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Lumely enhances CG renders, stages interiors, and explores design options 
              while preserving geometry and materials. Fast, consistent, client-ready.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="/signup" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition">
                Start Free
              </a>
              <a href="/pricing" className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition">
                View Pricing
              </a>
            </div>
          </div>

          {/* Right side image placeholder */}
          <div className="mt-12 lg:mt-0 lg:ml-12 flex-1">
            <div className="rounded-2xl shadow-2xl border bg-white p-6">
              <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">[Hero Image Placeholder]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Placeholder */}
      <section className="py-20 w-full bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Features</h2>
          <p className="text-lg text-gray-600 mb-12">
            Learn how Lumely helps you achieve stunning, client-ready visuals in no time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">Render Enhancement</h3>
              <p className="text-gray-600">Transform base renders into photorealistic visuals with ease.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">Virtual Staging</h3>
              <p className="text-gray-600">Stage interiors instantly with furniture, lighting, and finishes.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">Design Options</h3>
              <p className="text-gray-600">Experiment with materials, layouts, and styles quickly and effectively.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// app/page.tsx
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-gradient-to-b from-white via-white to-gray-50 text-center">
        <div className="container mx-auto px-6">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-200">
            Built for AEC • AI-powered visuals
          </span>
          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Photoreal results from any render —{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              in minutes
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Lumely enhances CG renders, stages interiors, and explores design options
            while preserving geometry and materials. Fast, consistent, client-ready.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/signup"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Start Free
            </a>
            <a
              href="/pricing"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Keep control of your outcomes — no surprises
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Precisely define your space and avoid AI-generated errors.
            Our enhancer respects geometry and materials.
          </p>

          {/* Feature Tabs */}
          <div className="mt-12 bg-gray-900 rounded-3xl p-8">
            <div className="flex justify-center space-x-4 mb-8">
              <button className="px-6 py-2 rounded-full bg-white text-gray-900 font-semibold shadow">
                Render Enhancement
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white">
                Virtual Staging
              </button>
              <button className="px-6 py-2 rounded-full bg-gray-700 text-gray-300 hover:text-white">
                Design Options
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Keep control of your outcomes — no surprises.
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✔ Maximum design control</li>
                  <li>✔ Define each segment</li>
                  <li>✔ Preserve architectural detail</li>
                </ul>
              </div>

              {/* Before / After placeholder */}
              <div className="flex space-x-4">
                <div className="w-1/2 h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                  Before
                </div>
                <div className="w-1/2 h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to transform your renders?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start enhancing your CG renders today and deliver photoreal results
            to your clients in minutes.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/signup"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Get Started Free
            </a>
            <a
              href="/examples"
              className="px-8 py-4 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              View Examples
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

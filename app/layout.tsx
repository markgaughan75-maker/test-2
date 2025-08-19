import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Lumely',
  description: 'AI Render Enhancement & Upscaling for AEC',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white via-[#F7F3FF] to-white text-slate-800">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-violet-600" />
              <span className="text-xl font-extrabold tracking-tight text-violet-700">Lumely</span>
            </a>

            {/* UPDATED NAV */}
            <nav className="flex items-center gap-6 text-sm">
              <a href="/" className="hover:text-violet-700">Home</a>
              <a href="/services" className="hover:text-violet-700">Services</a>
              <a href="/pricing" className="hover:text-violet-700">Pricing</a>
              <a
                href="/signin"
                className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 shadow"
              >
                Sign in
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-200 mt-16">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Lumely</span>
            <div className="flex gap-6">
              <a className="hover:text-violet-700" href="#">Privacy</a>
              <a className="hover:text-violet-700" href="#">Terms</a>
              <a className="hover:text-violet-700" href="#">Support</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

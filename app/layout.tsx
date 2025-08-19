import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Lumely',
  description: 'AI Render Enhancer Platform'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center p-4 shadow bg-white">
          <h1 className="text-2xl font-bold text-brand-purple">Lumely</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/pricing" className="hover:underline">Pricing</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Nova Bot',
  description: 'Dein smarter Discord Bot für alles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js</title> {/* Titel hinzugefügt */}
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500 text-white leading-relaxed">
        {/* Navbar */}
        <nav className="fixed w-full top-0 left-0 z-50 flex justify-between items-center px-8 md:px-16 py-8 bg-black bg-opacity-50 backdrop-blur-xl shadow-lg">
          <div className="text-3xl font-extrabold text-white">Nova Bot</div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-purple-300 transition">Home</a>
            <a href="/features" className="hover:text-purple-300 transition">Funktionen</a>
            <a href="/docs" className="hover:text-purple-300 transition">Docs</a>
            <a href="/support" className="hover:text-purple-300 transition">Support</a>
            <a href="/about" className="hover:text-purple-300 transition">Über</a>
            <a href="/login" className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded transition">Anmelden</a>
          </div>
          <div className="md:hidden">
            {/* Hamburger Menu (Mobile) */}
            <button className="text-white text-2xl">☰</button>
          </div>
        </nav>

        {/* Platzhalter für Navbar Höhe */}
        <div className="h-28"></div>

        {/* Main Content */}
        <main className="flex-grow px-8 md:px-16 py-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-black bg-opacity-50 text-center py-10 text-sm text-gray-400">
          <div className="space-y-6">
            <p>© 2025 Nova Bot. Alle Rechte vorbehalten.</p>
            <div className="flex justify-center space-x-8">
              <a href="/impressum" className="hover:text-purple-300 transition">Impressum</a>
              <a href="/privacy" className="hover:text-purple-300 transition">Datenschutz</a>
              <a href="/terms" className="hover:text-purple-300 transition">AGB</a>
            </div>
          </div>
        </footer>
        <Analytics /> {/* Analytics-Komponente hinzugefügt */}
        <SpeedInsights /> {/* SpeedInsights-Komponente hinzugefügt */}
      </body>
    </html>
  );
}
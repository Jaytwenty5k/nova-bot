import '../styles/globals.css'; // Korrigierter Pfad zu globals.css
import Link from 'next/link'; // Importiere Link von next/link

export const metadata = {
  title: 'Nova Bot',
  description: 'Dein smarter Discord Bot für alles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500 text-white leading-relaxed">
        {/* Navbar */}
        <nav className="fixed w-full top-0 left-0 z-50 flex justify-between items-center px-8 md:px-16 py-8 bg-black bg-opacity-50 backdrop-blur-xl shadow-lg">
          <div className="text-3xl font-extrabold text-white">Nova Bot</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-purple-300 transition">Home</Link>
            <Link href="/features" className="hover:text-purple-300 transition">Funktionen</Link>
            <Link href="/docs" className="hover:text-purple-300 transition">Docs</Link>
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
              <Link href="/impressum" className="hover:text-purple-300 transition">Impressum</Link>
              <Link href="/privacy" className="hover:text-purple-300 transition">Datenschutz</Link>
              <Link href="/terms" className="hover:text-purple-300 transition">AGB</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

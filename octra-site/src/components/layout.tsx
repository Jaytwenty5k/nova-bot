import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nova Bot',
  description: 'Dein smarter Discord Bot für alles.',
  author: 'Nova Bot Team',
  keywords: 'Discord Bot, Moderation, Economy, Casino, Nova Bot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <Head>
        {/* Metadaten */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body className={inter.className}>
        {/* Navbar */}
        <nav className="fixed w-full top-0 left-0 z-50 flex justify-between items-center px-8 md:px-16 py-8 bg-black bg-opacity-50 backdrop-blur-xl shadow-lg">
          <div className="text-3xl font-extrabold text-white">Nova Bot</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-purple-300 transition">Home</Link>
            <Link href="/features" className="hover:text-purple-300 transition">Funktionen</Link>
            <Link href="/docs" className="hover:text-purple-300 transition">Docs</Link>
          </div>
        </nav>

        {/* Platzhalter für Navbar-Höhe */}
        <div className="h-28"></div>

        {/* Hauptinhalt */}
        <main>{children}</main>

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
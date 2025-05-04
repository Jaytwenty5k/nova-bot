import './globals.css';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

export const metadata = {
  title: 'Octra Bot',
  description: 'Dein smarter Discord Bot für alles. (This Bot is not hosted by anything...; Developer -- @Jaytwenty4k)',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['Discord Bot', 'Octra', 'Automatisierung', 'Moderation', 'Economy'],
  openGraph: {
    title: 'Octra Bot',
    description: 'Dein smarter Discord Bot für alles. (This Bot is not hosted by anything...; Developer -- @Jaytwenty4k)',
    url: 'https://bot-octra.vercel.app',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Octra Bot</title>
        {/* Weitere Meta-Tags oder Links hier */}
      </Head>
      <body>{children}</body>
    </html>
  );
}
import './globals.css';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: 'Nova Bot',
  description: 'Dein smarter Discord Bot für alles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nova Bot</title>
        {/* Weitere Meta-Tags oder Links hier */}
      </head>
      <body>{children}</body>
    </html>
  );
}
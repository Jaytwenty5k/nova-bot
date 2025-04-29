import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.discordapp.com'], // Erlaubt das Laden von Bildern von Discord
  },
  experimental: {
    appDir: true, // Aktiviert experimentelle Funktionen für App-Verzeichnisse
  },
  reactStrictMode: true, // Aktiviert den Strict Mode für React
  swcMinify: true, // Aktiviert die SWC-Minifizierung für bessere Performance
};

export default nextConfig;

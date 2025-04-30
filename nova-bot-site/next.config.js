import { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com'], // Erlaubt das Laden von Bildern von Discord
  },
  reactStrictMode: true, // Aktiviert den Strict Mode für React
};

export default nextConfig;

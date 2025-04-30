const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com'], // Erlaubt das Laden von Bildern von Discord
  },
  reactStrictMode: true, // Aktiviert den Strict Mode für React
  experimental: {
    appDir: true, // Aktiviert die Unterstützung für das `app`-Verzeichnis
  },
  webpack: (config) => {
    // Optional: Anpassungen an der Webpack-Konfiguration
    return config;
  },
};

export default nextConfig;
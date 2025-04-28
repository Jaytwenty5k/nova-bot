"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const PlaceholderIcon = '/icons/placeholder.png'; // Generisches Icon

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Zustand für die Anmeldung
  const [showLoginPopup, setShowLoginPopup] = useState(false); // Zustand für das Pop-up
  const [fallbacks, setFallbacks] = useState<Record<string, string>>({});

  const handleLogin = () => {
    // Leitet den Benutzer zu Discord weiter
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1363531532127437003&redirect_uri=https://bot-nova.vercel.app/&response_type=code&scope=identify";
  };

  const handleAccessDashboard = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true); // Zeigt das Pop-up an, wenn der Benutzer nicht angemeldet ist
    } else {
      window.location.href = "/dashboard"; // Leitet zum Dashboard weiter
    }
  };

  const handleImageError = (key: string, fallbackPath: string) => {
    setFallbacks((prev) => ({
      ...prev,
      [key]: fallbackPath,
    }));
  };

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 md:p-8 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800 z-50 shadow-lg">
        <div className="text-2xl font-bold text-purple-400">Nova Bot</div>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="#" className="hover:text-purple-300 transition">Support</Link>
          <button
            onClick={handleLogin}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition shadow-md"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Platzhalter für Navbar-Höhe */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-8 md:px-20 bg-gradient-to-b from-purple-800 to-black">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-12">Willkommen bei Nova Bot</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-16">
          Der ultimative Discord Bot für Automatisierung, Moderation, Economy und mehr.
        </p>
        <button
          onClick={handleAccessDashboard}
          className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-16 rounded-full text-lg md:text-xl transition"
        >
          Starte jetzt
        </button>
      </section>

      {/* Login-Pop-up */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Bitte anmelden</h2>
            <p className="mb-6">Du musst dich anmelden, um auf das Dashboard zuzugreifen.</p>
            <button
              onClick={handleLogin}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded transition"
            >
              Login mit Discord
            </button>
            <button
              onClick={() => setShowLoginPopup(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 transition"
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}

      {/* Features */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-center">
          {/* Feature Cards */}
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box animate-pulse">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Moderation</h2>
            <p className="text-gray-400">Automoderation, manuelle Befehle und Protokollierung.</p>
            <div className="animated-icon mt-6">
              <img
                src={fallbacks['moderation'] || PlaceholderIcon}
                alt="Moderation Icon"
                className="w-16 h-16 mx-auto"
                onError={() => handleImageError('moderation', PlaceholderIcon)}
              />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box animate-pulse">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Automod</h2>
            <p className="text-gray-400">Automatische Moderation für deinen Server.</p>
            <div className="animated-icon mt-6">
              <img
                src={fallbacks['automod'] || PlaceholderIcon}
                alt="Automod Icon"
                className="w-16 h-16 mx-auto"
                onError={() => handleImageError('automod', PlaceholderIcon)}
              />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box animate-pulse">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Economy-System</h2>
            <p className="text-gray-400">Währungen, tägliche Belohnungen und ein Bank-/Wallet-System.</p>
            <div className="animated-icon mt-6">
              <img
                src={fallbacks['economy'] || PlaceholderIcon}
                alt="Economy Icon"
                className="w-16 h-16 mx-auto"
                onError={() => handleImageError('economy', PlaceholderIcon)}
              />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box animate-pulse">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Casino-System</h2>
            <p className="text-gray-400">Erstelle dein eigenes Casino mit einzigartigen Spielautomaten.</p>
            <div className="animated-icon mt-6">
              <img
                src={fallbacks['casino'] || PlaceholderIcon}
                alt="Casino Icon"
                className="w-16 h-16 mx-auto"
                onError={() => handleImageError('casino', PlaceholderIcon)}
              />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box animate-pulse">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Aktienmarkt</h2>
            <p className="text-gray-400">Kaufe Anteile an Kanälen und handle sie basierend auf Aktivität.</p>
            <div className="animated-icon mt-6">
              <img
                src={fallbacks['aktien'] || PlaceholderIcon}
                alt="Aktienmarkt Icon"
                className="w-16 h-16 mx-auto"
                onError={() => handleImageError('aktien', PlaceholderIcon)}
              />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box animate-pulse">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Channel-Shop</h2>
            <p className="text-gray-400">Kaufe und verwalte Kanäle mit In-Game-Währung.</p>
            <div className="animated-icon mt-6">
              <img
                src={fallbacks['shop'] || PlaceholderIcon}
                alt="Channel-Shop Icon"
                className="w-16 h-16 mx-auto"
                onError={() => handleImageError('shop', PlaceholderIcon)}
              />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box animate-pulse">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Website-Integration</h2>
            <p className="text-gray-400">Dashboard, Bot-Einstellungen und Economy-Verwaltung.</p>
            <div className="animated-icon mt-6">
              <img
                src={fallbacks['website'] || PlaceholderIcon}
                alt="Website Integration Icon"
                className="w-16 h-16 mx-auto"
                onError={() => handleImageError('website', PlaceholderIcon)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-32 bg-[#0d0d0d] px-8 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-400">Zukünftige Features</h2>
          <ul className="text-gray-400 space-y-6">
            <li>Automatische Gewinnspiele und Turniere</li>
            <li>Live-Analytics für Server-Admins</li>
            <li>Support-System mit Tickets</li>
            <li>Erweiterbares Plugin-System</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        © 2025 Nova Bot. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
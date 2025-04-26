"use client";

import React from 'react';
import Link from 'next/link';

// Import der Bilder
import ModeratorIcon from '/public/icons/moderator.png';
import AutomodIcon from '/public/icons/automod.png';
import EconomyIcon from '/public/icons/economy.jpg';
import CasinoIcon from '/public/icons/casino.png';
import AktienIcon from '/public/icons/aktien.png';
import ShopIcon from '/public/icons/shop.png';
import WebsiteIntegrationIcon from '/public/icons/website integration.png';

export default function HomePage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 md:p-8 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800 z-50 shadow-lg">
        <div className="text-2xl font-bold text-purple-400">Nova Bot</div>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="/dashboard" className="hover:text-purple-300 transition">Dashboard</Link>
          <Link href="/support" className="hover:text-purple-300 transition">Support</Link>
          <Link href="/login" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition shadow-md">
            Login
          </Link>
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
        <Link href="/dashboard">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-16 rounded-full text-lg md:text-xl transition">
            Starte jetzt
          </button>
        </Link>
      </section>

      {/* Features */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-center">
          {/* Feature Cards */}
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Moderation</h2>
            <p className="text-gray-400">Automoderation, manuelle Befehle und Protokollierung.</p>
            <div className="animated-icon mt-6">
              <img src={ModeratorIcon.src} alt="Moderation Icon" className="w-16 h-16 mx-auto animate-uniform" />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Automod</h2>
            <p className="text-gray-400">Automatische Moderation für deinen Server.</p>
            <div className="animated-icon mt-6">
              <img src={AutomodIcon.src} alt="Automod Icon" className="w-16 h-16 mx-auto animate-uniform" />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Economy-System</h2>
            <p className="text-gray-400">Währungen, tägliche Belohnungen und ein Bank-/Wallet-System.</p>
            <div className="animated-icon mt-6">
              <img src={EconomyIcon.src} alt="Economy Icon" className="w-16 h-16 mx-auto animate-uniform" />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Casino-System</h2>
            <p className="text-gray-400">Erstelle dein eigenes Casino mit einzigartigen Spielautomaten.</p>
            <div className="animated-icon mt-6">
              <img src={CasinoIcon.src} alt="Casino Icon" className="w-16 h-16 mx-auto animate-uniform" />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Aktienmarkt</h2>
            <p className="text-gray-400">Kaufe Anteile an Kanälen und handle sie basierend auf Aktivität.</p>
            <div className="animated-icon mt-6">
              <img src={AktienIcon.src} alt="Aktienmarkt Icon" className="w-16 h-16 mx-auto animate-uniform" />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Channel-Shop</h2>
            <p className="text-gray-400">Kaufe und verwalte Kanäle mit In-Game-Währung.</p>
            <div className="animated-icon mt-6">
              <img src={ShopIcon.src} alt="Channel-Shop Icon" className="w-16 h-16 mx-auto animate-uniform" />
            </div>
          </div>
          <div className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-400">Website-Integration</h2>
            <p className="text-gray-400">Dashboard, Bot-Einstellungen und Economy-Verwaltung.</p>
            <div className="animated-icon mt-6">
              <img src={WebsiteIntegrationIcon.src} alt="Website Integration Icon" className="w-16 h-16 mx-auto animate-uniform" />
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
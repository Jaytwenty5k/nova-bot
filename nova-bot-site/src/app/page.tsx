"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const icons = {
  moderation: '/assets/icons/moderation-icon.png',
  automod: '/assets/icons/automod-icon.png',
  economy: '/assets/icons/economy-icon.png',
  casino: '/assets/icons/casino-icon.png',
  aktien: '/assets/icons/aktien-icon.png',
  shop: '/assets/icons/shop-icon.png',
  website: '/assets/icons/website-icon.png',
};

function loadImage(src: string, fallback: string): string {
  const img = document.createElement('img'); // Verwende document.createElement für die Bildinstanz
  img.src = src;
  img.onerror = () => {
    img.src = fallback;
  };
  return img.src;
}

type UserProfile = {
  avatar: string;
  username: string;
} | null;

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(null);
  const [fallbacks, setFallbacks] = useState<Record<string, string>>({});

  const handleInviteBot = () => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1363531532127437003&permissions=8&scope=bot";
  };

  const handleImageError = (key: string) => {
    setFallbacks((prev) => ({
      ...prev,
      [key]: '/assets/icons/default-icon.png', // Fallback-Icon
    }));
  };

  useEffect(() => {
    // Simulierte API-Abfrage, um Benutzerinformationen zu erhalten
    const fetchUserProfile = async () => {
      // Beispiel: Ersetzen Sie dies durch Ihre tatsächliche API-Abfrage
      const response = await fetch('/api/user'); // API-Endpunkt für Benutzerinformationen
      if (response.ok) {
        const data = await response.json();
        setUserProfile({ avatar: data.avatar, username: data.username });
        setIsLoggedIn(true);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 md:p-8 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800 z-50 shadow-lg">
        <div className="text-2xl font-bold text-purple-400">Nova Bot</div>
        <div className="space-x-6 text-lg flex items-center">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="#" className="hover:text-purple-300 transition">Support</Link>
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
          onClick={handleInviteBot}
          className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-16 rounded-full text-lg md:text-xl transition shadow-lg transform hover:scale-105 snake-animation"
        >
          Starte jetzt
        </button>
        <button
          onClick={() => {
            window.location.href = "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify";
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition shadow-md snake-animation"
        >
          Login mit Discord
        </button>
      </section>

      {/* Features */}
      <section className="py-32 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-center">
          {/* Feature Cards */}
          {(Object.keys(icons) as Array<keyof typeof icons>).map((feature) => (
            <div key={feature} className="relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden animated-box snake-animation">
              <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
              <h2 className="text-2xl font-semibold mb-6 text-purple-400 capitalize">{feature}</h2>
              <p className="text-gray-400">Beschreibung für {feature}.</p>
              <div className="animated-icon mt-6">
                <Image
                  src={fallbacks[feature] || icons[feature] || '/assets/icons/default-icon.png'}
                  alt={`${feature} Icon`}
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        © 2025 Nova Bot. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
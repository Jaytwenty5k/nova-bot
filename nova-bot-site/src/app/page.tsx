"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const icons = {
  moderation: "/assets/icons/moderation-icon.png",
  automod: "/assets/icons/automod-icon.png",
  economy: "/assets/icons/economy-icon.png",
  casino: "/assets/icons/casino-icon.png",
  aktien: "/assets/icons/aktien-icon.png",
  shop: "/assets/icons/shop-icon.png",
  website: "/assets/icons/website-icon.png",
};

type UserProfile = {
  avatar: string;
  username: string;
} | null;

const saveUserToDatabase = async (user: UserProfile) => {
  if (!user) return;
  await fetch("/api/save-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(null);

  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await fetch("/api/user");
      if (response.ok) {
        const data = await response.json();
        const user = { avatar: data.avatar, username: data.username };
        setUserProfile(user);
        setIsLoggedIn(true);
        await saveUserToDatabase(user);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <main className="bg-gradient-to-b from-purple-900 via-black to-purple-900 min-h-screen text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 md:p-8 bg-black bg-opacity-80 backdrop-blur-md border-b border-purple-800 z-50 shadow-lg">
        <div className="text-4xl font-extrabold text-purple-400 tracking-wide animate-pulse">
          Octra Bot
        </div>
        <div className="space-x-6 text-lg flex items-center">
          <Link
            href="/"
            className="hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Support
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-8 md:px-20 bg-gradient-to-b from-purple-800 to-black">
        <h1 className="text-7xl md:text-9xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-text-glow">
          Willkommen bei Octra Bot
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-16">
          Der leistungsstarke Discord Bot für Automatisierung, Moderation,
          Wirtschaft und mehr.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <button
            onClick={() =>
              navigateTo(
                "https://discord.com/oauth2/authorize?client_id=1365320188576403486&permissions=8&scope=bot"
              )
            }
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-16 rounded-full text-lg md:text-xl transition shadow-lg transform hover:scale-105 animate-bounce"
          >
            Bot einladen
          </button>
          {!isLoggedIn ? (
            <button
              onClick={() =>
                navigateTo(
                  "https://discord.com/oauth2/authorize?client_id=1363531532127437003&response_type=code&redirect_uri=https%3A%2F%2Fbot-nova.vercel.app%2F&scope=identify"
                )
              }
              className="relative bg-gray-800 hover:bg-gray-700 text-white py-4 px-16 rounded-full text-lg md:text-xl transition shadow-lg transform hover:scale-105"
            >
              <div className="absolute inset-0 rounded-full border-2 border-transparent animate-gradient-border"></div>
              <span className="relative">Login mit Discord</span>
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <Image
                src={userProfile?.avatar || "/assets/icons/default-avatar.png"}
                alt="User Avatar"
                width={48}
                height={48}
                className="rounded-full animate-fade-in"
              />
              <span className="text-lg md:text-xl text-gray-300">
                {userProfile?.username}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section
        ref={featuresRef}
        className={`py-32 px-8 md:px-20 bg-[#0a0a0a] ${
          featuresInView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-center">
          {(Object.keys(icons) as Array<keyof typeof icons>).map((feature) => (
            <div
              key={feature}
              className={`relative bg-black bg-opacity-50 rounded-lg p-10 shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 ${
                featuresInView ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-gradient-border"></div>
              <h2 className="text-2xl font-semibold mb-6 text-purple-400 capitalize">
                {feature}
              </h2>
              <p className="text-gray-400">
                Erkunde die {feature}-Funktionalität von Octra Bot.
              </p>
              <div className="mt-6">
                <Image
                  src={icons[feature] || "/assets/icons/default-icon.png"}
                  alt={`${feature} Icon`}
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto animate-fade-in"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-purple-800">
        © 2025 Octra Bot. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
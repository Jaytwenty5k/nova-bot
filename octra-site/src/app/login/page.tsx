"use client";

import React from "react";
import Link from "next/link";

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login-Logik hier hinzufügen
    console.log("Login submitted");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-900 flex flex-col items-center justify-center text-white">
      <form
        onSubmit={handleLogin}
        className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md mb-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-Mail-Adresse
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Passwort
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
      </form>
      <div className="flex flex-col items-center space-y-4">
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full text-lg font-medium transition transform hover:scale-105 shadow-lg block text-center"
        >
          Login
        </button>
        <Link
          href="/signin"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-8 rounded-full text-lg font-medium transition transform hover:scale-105 shadow-lg block text-center"
        >
          Registrieren
        </Link>
        <Link
          href="/invite"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-8 rounded-full text-lg font-medium transition transform hover:scale-105 shadow-lg block text-center"
        >
          Bot einladen
        </Link>
      </div>
    </main>
  );
}

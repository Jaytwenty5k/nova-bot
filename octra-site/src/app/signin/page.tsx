"use client";

import React from "react";
import Link from "next/link";

export default function SigninPage() {
  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    // Registrierungs-Logik hier hinzufügen
    console.log("Signin submitted");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-900 flex items-center justify-center text-white">
      <form
        onSubmit={handleSignin}
        className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Registrieren</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Benutzername
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
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
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-medium transition"
        >
          Registrieren
        </button>
        <div className="mt-6 flex justify-between items-center">
          <Link
            href="/login"
            className="text-purple-400 hover:text-purple-300 transition"
          >
            Bereits registriert? Login
          </Link>
        </div>
      </form>
    </main>
  );
}

import React, { useEffect, useState } from "react";

type UserProfile = {
  avatar: string;
  username: string;
} | null;

export default function Features() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setUserProfile(JSON.parse(storedUser));
      setIsLoggedIn(true);
    } else {
      const fetchUserProfile = async () => {
        const response = await fetch("/api/user");
        if (response.ok) {
          const data = await response.json();
          const user = { avatar: data.avatar, username: data.username };
          setUserProfile(user);
          setIsLoggedIn(true);
          localStorage.setItem("userProfile", JSON.stringify(user));
        }
      };
      fetchUserProfile();
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500">
      <h2 className="text-4xl text-center text-white font-bold mb-8">Features</h2>
      <div className="grid2 px-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-purple-700">Automatisierung</h3>
          <p className="mt-4 text-gray-700">Automatisiere deine Discord-Server und spare Zeit!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-purple-700">Moderation</h3>
          <p className="mt-4 text-gray-700">Effektive Moderation für deinen Server mit einem Klick.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-purple-700">Economy</h3>
          <p className="mt-4 text-gray-700">Verwalte eine virtuelle Wirtschaft auf deinem Server.</p>
        </div>
      </div>
      {isLoggedIn && userProfile && (
        <div className="mt-8 text-center text-white">
          <p>Willkommen zurück, {userProfile.username}!</p>
          <img
            src={userProfile.avatar}
            alt="User Avatar"
            className="w-16 h-16 mx-auto rounded-full mt-4"
          />
        </div>
      )}
    </section>
  );
}
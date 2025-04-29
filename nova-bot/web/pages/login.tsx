import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/getUser/me'); // Replace 'me' with actual user ID if needed
        if (response.ok) {
          setIsAuthenticated(true);
          router.push('/dashboard'); // Redirect to dashboard if authenticated
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogin = () => {
    window.location.href = '/api/auth/discord'; // Redirect to Discord authentication
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      {!isAuthenticated ? (
        <button
          onClick={handleLogin}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition shadow-md"
        >
          Login mit Discord
        </button>
      ) : (
        <p>Authentifizierung erfolgreich. Weiterleitung...</p>
      )}
    </div>
  );
};

export default LoginPage;
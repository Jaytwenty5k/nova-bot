// src/app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Nova Bot</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-gray-300">Support</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
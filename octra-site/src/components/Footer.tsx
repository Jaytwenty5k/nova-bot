export default function Footer() {
    return (
      <footer className="bg-purple-700 text-center py-2 text-white">  {/* Reduziere das Padding auf 2 */}
        <div>
          <a href="/impressum" className="mx-4 hover:text-purple-400 transition">Impressum</a>
          <a href="/datenschutz" className="mx-4 hover:text-purple-400 transition">Datenschutz</a>
          <a href="https://twitter.com" className="mx-4 hover:text-purple-400 transition">Twitter</a>
          <a href="https://discord.com" className="mx-4 hover:text-purple-400 transition">Discord</a>
        </div>
        <div className="mt-2 text-sm">  {/* Kleinerer Abstand unter den Links */}
          © 2025 Nova Bot. Alle Rechte vorbehalten.
        </div>
      </footer>
    );
  }
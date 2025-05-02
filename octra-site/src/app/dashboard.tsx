// src/app/dashboard.tsx
export default function Dashboard() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-800 text-white px-8 py-12">
        <h1 className="text-3xl font-extrabold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold">Bot Status</h3>
            <p>Aktiv</p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold">Benutzerdaten</h3>
            <p>105 Benutzer</p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold">Einstellungen</h3>
            <p>Ändere deine Bot-Einstellungen hier.</p>
          </div>
        </div>
      </div>
    );
  }
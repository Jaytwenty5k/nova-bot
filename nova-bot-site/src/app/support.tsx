// src/app/support.tsx
export default function Support() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-700 to-purple-800 text-white px-8 py-12">
        <h1 className="text-3xl font-extrabold mb-6">Support</h1>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Häufige Fragen (FAQ)</h3>
            <ul className="space-y-4 mt-4 text-lg">
              <li>Wie installiere ich den Bot?</li>
              <li>Wie kann ich den Bot konfigurieren?</li>
              <li>Was tun bei Problemen?</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Kontaktformular</h3>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Dein Name"
                className="w-full p-4 bg-purple-600 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              />
              <input
                type="email"
                placeholder="Deine E-Mail"
                className="w-full p-4 bg-purple-600 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              />
              <textarea
                placeholder="Beschreibe dein Anliegen"
                className="w-full p-4 bg-purple-600 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              />
              <button className="w-full py-4 mt-4 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition duration-300">
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
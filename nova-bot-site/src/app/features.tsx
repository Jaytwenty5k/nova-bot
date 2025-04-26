// src/app/features.tsx
export default function Features() {
    return (
      <section className="py-16 bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500">
        <h2 className="text-4xl text-center text-white font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
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
      </section>
    );
  }
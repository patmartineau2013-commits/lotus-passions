export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-purple-700/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-[0.3em]">LOTUS</h1>
            <p className="text-gray-400 tracking-[0.4em]">PASSIONS</p>
          </div>

          <nav className="hidden md:flex gap-8 uppercase text-sm">
            <a>Accueil</a>
            <a>Boutique</a>
            <a>Réalisations</a>
            <a>Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-6xl font-black uppercase leading-tight">
            Impression 3D
            <br />
            <span className="text-purple-500">Premium</span>
          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-8">
            Créations uniques imprimées en 3D au Québec.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-purple-600 px-8 py-4 rounded-2xl font-bold">
              Magasiner
            </button>

            <button className="border border-purple-500 px-8 py-4 rounded-2xl">
              Sur mesure
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-purple-700/30 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e0d0f0d1?q=80&w=1200&auto=format&fit=crop"
            className="relative rounded-3xl border border-purple-700/30"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-4xl font-bold uppercase mb-12">
          Nos catégories
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            "Décorations",
            "Gaming",
            "Cosplay",
            "Accessoires",
            "Personnalisé",
            "Techniques",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-950 border border-purple-700/30 rounded-3xl p-6 hover:-translate-y-2 transition"
            >
              <div className="h-32 rounded-2xl bg-gradient-to-br from-zinc-900 to-purple-900"></div>

              <h3 className="mt-5 font-bold">{item}</h3>

              <p className="text-purple-400 text-sm mt-2">
                Voir les produits
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-purple-700/30 py-10 text-center text-gray-500">
        © 2025 Lotus Passions
      </footer>
    </div>
  )
}
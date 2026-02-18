"use client"; // Search logic pinne varunnathu kondu ithu ippo thanne top-il idunnu

export default function Home() {
  // 🟢 Ithanu nammude Cinema List (Array of Objects)
  const movies = [
    { id: 1, title: "", genre: "Survival Thriller", year: "2024" },
    { id: 2, title: "", genre: "Mass Action", year: "2024" },
    { id: 3, title: "", genre: "Romance", year: "2024" },
    { id: 4, title: "", genre: "Horror", year: "2024" }
  ];

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="text-4xl font-bold text-center text-red-900 mb-30">
        unknown
      </h1>

      {/* 🔵 Mapping thudangunnu */}
      <div className="flex flex-wrap justify-center gap-5">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white-900 p-6 rounded-xl border border-red-500
           w-80 shadow-xl">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="text-white-400 italic">{movie.genre}</p>
            <p className="text-red-500 text-sm mt-2 font-bold">{movie.year}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
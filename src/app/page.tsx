import dynamic from "next/dynamic";
const PokemonList = dynamic(() => import("../components/PokemonList"));
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:px-40 xl:px-48">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pokédex</h1>
        <p className="text-gray-600">Discover all Pokémon</p>
      </div>
      <PokemonList />
    </div>
  );
}

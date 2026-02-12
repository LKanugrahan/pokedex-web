import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-500",
      ice: "bg-blue-200",
      fighting: "bg-red-700",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-500",
      bug: "bg-green-400",
      rock: "bg-yellow-800",
      ghost: "bg-purple-700",
      dragon: "bg-indigo-700",
      dark: "bg-gray-700",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
    };
    return colors[type] || "bg-gray-400";
  };
  return (
    <Link href={`/pokemon/${pokemon.name}`} prefetch={false}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl duration-300 cursor-pointer transform hover:scale-105 transition-transform">
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          {pokemon.sprites.front_default ? (
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          ) : (
            <div className="text-gray-400 text-4xl">?</div>
          )}
          <div className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #{String(pokemon.id).padStart(3, "0")}
          </div>
        </div>

        <div className="p-2 sm:p-4 flex flex-col gap-2">
          <h3 className="text-xl font-bold capitalize text-gray-800">
            {pokemon.name}
          </h3>

          <div className="flex gap-1 sm:gap-2">
            {pokemon.types.map((typeInfo, index) => (
              <span
                key={index}
                className={`${getTypeColor(typeInfo)} text-white text-xs px-3 py-1 rounded-full capitalize`}
              >
                {typeInfo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

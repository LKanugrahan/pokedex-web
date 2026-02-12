import React from "react";
import EvoCard from "./EvoCard";
import SpriteCard from "./SpriteCard";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Pokemon } from "@/types/pokemon";
import { Basic } from "next/font/google";
import BasicInfo from "./BasicInfo";
import Link from "next/link";

const PokemonDetail = ({
  router,
  pokemon,
}: {
  router: AppRouterInstance;
  pokemon: Pokemon;
}) => {
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
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.push("/")}
        className="mb-6 flex items-center gap-2 text-primary hover:text-red-600 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to List
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold capitalize text-gray-800">
              {pokemon.name}
            </h1>
            <span className="text-2xl font-semibold text-gray-600">
              #{String(pokemon.id).padStart(3, "0")}
            </span>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Sprites</h2>
            <div className="grid grid-cols-3 gap-4">
              <SpriteCard
                pokemon={pokemon}
                text="Front"
                className="from-gray-100 to-gray-200"
              />
              <SpriteCard
                pokemon={pokemon}
                text="Back"
                className="from-gray-100 to-gray-200"
              />
              <SpriteCard
                pokemon={pokemon}
                text="Shiny"
                className="from-yellow-100 to-yellow-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <BasicInfo
              value={pokemon.height}
              text="Height"
              className="from-blue-50 to-blue-100 text-blue-600"
            />
            <BasicInfo
              value={pokemon.weight}
              text="Weight"
              className="from-green-50 to-green-100 text-green-600"
            />
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Types</h2>
            <div className="flex gap-3">
              {pokemon.types.map((typeInfo, index) => (
                <span
                  key={index}
                  className={`${getTypeColor(typeInfo)} text-white px-6 py-3 rounded-lg capitalize text-lg font-semibold shadow-md`}
                >
                  {typeInfo}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Moves (Top 10)
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {pokemon.moves.slice(0, 10).map((move, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg px-4 py-2 text-gray-700 capitalize"
                >
                  {move.replace("-", " ")}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Evolution Chain
            </h3>
            <Link prefetch={false} href={`/pokemon/${pokemon.name}`} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 items-center gap-2">
              {pokemon.evolution_chain &&
                pokemon.evolution_chain.map((v, i) => <EvoCard pokemon={v} />)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;

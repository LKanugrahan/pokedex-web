"use client";
import { PokemonDetailSkeleton } from "@/components/SkeletonLoader";
import usePokemonDetail from "@/hooks/usePokemonDetail";
import dynamic from "next/dynamic";
const PokemonDetail = dynamic(
  () => import("../../../components/PokemonDetail"),
);
export default function PokemonDetailPage() {
  const { error, pokemon, router, isLoading } = usePokemonDetail();

  if (isLoading) {
    return <PokemonDetailSkeleton />;
  }

  if (error || !pokemon) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">
            {error || "Pokémon not found"}
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  return <PokemonDetail router={router} pokemon={pokemon} />;
}

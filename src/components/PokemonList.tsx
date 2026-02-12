"use client";

import React, { Suspense } from "react";
import { PokemonCardSkeleton, PokemonListSkeleton } from "./SkeletonLoader";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "./SearchBar";
import useSearch from "@/hooks/useSearch";
import usePokemonList from "@/hooks/usePokemonList";

const PokemonList = () => {
  const { searchQuery, handleSearch } = useSearch();
  const { pokemonList, hasMore, isLoading, loadMoreRef } = usePokemonList({
    searchQuery,
  });

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Suspense fallback={<PokemonListSkeleton />}>
        {pokemonList.length === 0 && !isLoading ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No Pokémon found</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon._id} pokemon={pokemon} />
              ))}
            </div>

            <div ref={loadMoreRef} className="py-8">
              {isLoading && (
                <div className="grid grid-cols-2 gap-4 lg:gap-5">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <PokemonCardSkeleton key={index} />
                  ))}
                </div>
              )}
            </div>

            {!hasMore && pokemonList.length > 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">You&apos;ve reached the end!</p>
              </div>
            )}
          </>
        )}
      </Suspense>
    </>
  );
};

export default PokemonList;

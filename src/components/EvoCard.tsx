import { EvolutionChain } from "@/types/pokemon";
import Image from "next/image";
import React from "react";

export const EvoCard = ({ pokemon }: { pokemon: EvolutionChain }) => {
  return (
    <div
      className={`bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-4 text-center`}
    >
      <p className="text-sm font-semibold text-gray-700 mb-2">{pokemon.name}</p>
      {pokemon.sprite && (
        <Image
          src={pokemon.sprite}
          alt={pokemon.name}
          width={150}
          height={150}
          className="mx-auto"
        />
      )}
    </div>
  );
};

export default EvoCard;

import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import React from "react";

export const SpriteCard = ({
  pokemon,
  text,
  className,
}: {
  text: string;
  className?: string;
  pokemon: Pokemon;
}) => {
  return (
    <div
      className={`bg-gradient-to-br ${className ?? ""} rounded-lg p-4 text-center`}
    >
      <p className="text-sm font-semibold text-gray-700 mb-2">{text}</p>
      {pokemon.sprites.front_default && (
        <Image
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} front`}
          width={150}
          height={150}
          className="mx-auto"
        />
      )}
    </div>
  );
};

export default SpriteCard;

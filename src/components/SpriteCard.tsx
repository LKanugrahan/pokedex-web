import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import React from "react";

export const SpriteCard = ({
  text,
  className,
  image,
  name,
}: {
  text: string;
  className?: string;
  image: string;
  name: string;
}) => {
  return (
    <div
      className={`bg-gradient-to-br ${className ?? ""} rounded-lg p-4 text-center`}
    >
      <p className="text-sm font-semibold text-gray-700 mb-2">{text}</p>
      {image && (
        <Image
          src={image}
          alt={`${name} ${text.toLocaleLowerCase()}`}
          width={150}
          height={150}
          className="mx-auto"
        />
      )}
    </div>
  );
};

export default SpriteCard;

import { pokemonApi } from "@/services/api";
import { Pokemon } from "@/types/pokemon";
import { useParams, useRouter } from "next/navigation";
import  { useEffect, useState } from "react";

const usePokemonDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setIsLoading(true);
        const name = params.name as string;
        const response = await pokemonApi.getPokemonByName(name);
        setPokemon(response.data);
      } catch (err) {
        setError("Failed to load Pokémon data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.name) {
      fetchPokemon();
    }
  }, [params.name]);

  return {
    router,
    pokemon,
    error,
    isLoading,
  };
};

export default usePokemonDetail;

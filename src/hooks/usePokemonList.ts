import { pokemonApi } from "@/services/api";
import {
  currentPageAtom,
  hasMoreAtom,
  isLoadingAtom,
  pokemonListAtom,
} from "@/store/atoms";
import { useAtom } from "jotai";
import React, { useCallback, useEffect } from "react";
import { useInfiniteScroll } from "./useInfiniteScroll";

const usePokemonList = ({ searchQuery }: { searchQuery: string }) => {
  const [pokemonList, setPokemonList] = useAtom(pokemonListAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [hasMore, setHasMore] = useAtom(hasMoreAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const loadPokemons = useCallback(
    async (page: number, search: string, append: boolean = false) => {
      if (isLoading) return;

      setIsLoading(true);
      try {
        const response = await pokemonApi.getPokemons(page, 8, search);

        if (append) {
          setPokemonList((prev) => [...prev, ...response.data]);
        } else {
          setPokemonList(response.data);
        }

        setHasMore(page < response.pagination.totalPages);
      } catch (error) {
        console.error("Error loading pokemons:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, setPokemonList, setHasMore, setIsLoading],
  );

  useEffect(() => {
    setPokemonList([]);
    setCurrentPage(1);
    setHasMore(true);
    loadPokemons(1, searchQuery, false);
  }, [searchQuery]);

  const handleLoadMore = useCallback(() => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    loadPokemons(nextPage, searchQuery, true);
  }, [currentPage, searchQuery, loadPokemons, setCurrentPage]);

  const loadMoreRef = useInfiniteScroll({
    onLoadMore: handleLoadMore,
    hasMore,
    isLoading,
  });
  return {
    pokemonList,
    hasMore,
    isLoading,
    loadMoreRef
  };
};

export default usePokemonList;

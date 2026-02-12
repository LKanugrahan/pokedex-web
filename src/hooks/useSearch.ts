import { searchQueryAtom } from '@/store/atoms';
import { useAtom } from 'jotai';
import React, { useCallback } from 'react'

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
    },
    [setSearchQuery],
  );

  return { searchQuery, handleSearch }
}

export default useSearch
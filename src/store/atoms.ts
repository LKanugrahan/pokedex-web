import { atom } from 'jotai';
import { Pokemon } from '@/types/pokemon';

export const pokemonListAtom = atom<Pokemon[]>([]);
export const searchQueryAtom = atom<string>('');
export const currentPageAtom = atom<number>(1);
export const hasMoreAtom = atom<boolean>(true);
export const isLoadingAtom = atom<boolean>(false);

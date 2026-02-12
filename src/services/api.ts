import axios from 'axios';
import { PokemonListResponse, PokemonDetailResponse } from '@/types/pokemon';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const pokemonApi = {
  getPokemons: async (page: number, limit: number = 8, search: string = ''): Promise<PokemonListResponse> => {
    const params: any = { page, limit };
    if (search) {
      params.search = search;
    }
    const response = await apiClient.get<PokemonListResponse>('/pokemon', { params });
    return response.data;
  },

  getPokemonByName: async (name: string): Promise<PokemonDetailResponse> => {
    const response = await apiClient.get<PokemonDetailResponse>(`/pokemon/${name}`);
    return response.data;
  },
};

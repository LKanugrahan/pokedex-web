export interface Pokemon {
  _id: string;
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
  };
  height: number;
  weight: number;
  types: Array<string>;
  moves: Array<string>;
  species_url: string;
  evolution_chain?: EvolutionChain[];
}

export interface EvolutionChain {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonListResponse {
  success: boolean;
  data: Pokemon[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface PokemonDetailResponse {
  success: boolean;
  data: Pokemon;
}

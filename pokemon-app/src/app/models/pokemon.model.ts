export interface PokemonType {
  name: string;
  url: string;
}

export interface TypeListResponse {
  results: PokemonType[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface TypeDetail {
  name: string;
  pokemon: { pokemon: Pokemon }[];
}
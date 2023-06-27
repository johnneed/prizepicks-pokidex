import { PokemonClient } from 'pokenode-ts';
const api = new PokemonClient();



// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}


export const getPokemonByName =   (name: string) =>  api.getPokemonByName(name)
export const listPokemons = (offset?: number, limit?: number) =>  api.listPokemons(offset, limit)

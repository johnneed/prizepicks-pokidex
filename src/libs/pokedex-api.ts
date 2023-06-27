import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();
export const getPokemonByName =  async (name: string) => await api.getPokemonByName(name)


import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export const getPokemonByName = (name: string) => api.getPokemonByName(name);


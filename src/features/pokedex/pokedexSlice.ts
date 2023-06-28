import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Pokemon } from "pokenode-ts";
import { listPokemons, getPokemonByName } from "./pokedexAPI";


type Pagination = {
    count: number;
    offset: number;
    limit: number;
};

type PokeDex = { [key: string]: Pokemon };

export interface PokedexState {
    pagination: Pagination;
    pokemons: PokeDex;
    status: "idle" | "loading" | "failed";
}

const initialState: PokedexState = {
    pagination: { count: 0, offset: 0, limit: 20 }, // Hard-coding limit to API default for now (JN)
    pokemons: {},
    status: "idle"
};


export const pokedexSlice = createSlice({
    name: "pokedex",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        updatePagination: (state, action: PayloadAction<Pagination>) => {
            state.pagination = action.payload;
        },
        populatePokedex: (state, action: PayloadAction<PokeDex>) => {
            state.pokemons = action.payload;
        }
    }

});

export const { updatePagination, populatePokedex } = pokedexSlice.actions;


export const selectPokemonList = (state: RootState) => state.pokedex.pokemons;

export const selectPagination = (state: RootState) => state.pokedex.pagination;


export const fetchPokemons = (): AppThunk => async (dispatch, getState) => {
    const currentPagination = selectPagination(getState());
    const currentPokemonList = selectPokemonList(getState());
    try {
        const response = await listPokemons(currentPagination.offset, currentPagination.limit);
        const newPagination = {
            offset: currentPagination.offset + currentPagination.limit,
            limit: currentPagination.limit,
            count: response.count
        };

        dispatch(updatePagination(newPagination));

        const newPokemons = await Promise.all(response.results.map(result => getPokemonByName(result.name)));
        const newDex = newPokemons.reduce((arr, i) => ({ [i.name]: i, ...arr }), currentPokemonList);
        dispatch(populatePokedex(newDex));
    } catch (e) {
        //TODO: handle API Error
    }
};

export default pokedexSlice.reducer;

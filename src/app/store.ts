import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import pokedexReducer from "../features/pokedex/pokedexSlice";
import pokeSearchReducer from "../features/pokeSearch/pokeSearchSlice";

export const store = configureStore({
    reducer: {
        pokedex: pokedexReducer,
        pokeSearch: pokeSearchReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

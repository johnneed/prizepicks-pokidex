import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { Pokemon } from "pokenode-ts";

jest.mock('pokenode-ts', ()=> {
    return {
        PokemonClient: class {
            constructor() {
                // @ts-ignore
                this.getPokemonByName = jest.fn().mockImplementation(() => {
                    return {}
                });
                // @ts-ignore
                this.listPokemons = jest.fn().mockImplementation(() => {
                    return {}
                });
            }
        }
    }
});
test("renders", () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(/pokemon/i)).toBeInTheDocument();
});

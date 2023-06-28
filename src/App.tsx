import React from "react";
import logo from "./poke_ball_icon.svg";
import "./App.css";
import { Pokedex } from "./features/pokedex/Pokedex";
import { PokeSearch } from "./features/pokeSearch/PokeSearch";

function App() {

    return (
        <div className="App">
            <PokeSearch>
                <header className="App-header">
                    <span className={'App-hover-target'}><img src={logo} className="App-logo" alt="pokeball" /></span>
                    <div className={"App-scroll-down"}>
                        <div className={"App-caret-down"}></div>
                        <div className={"App-scroll-message"}>Scroll Down To Explore Your PokeDex</div>
                    </div>

                </header>
                <Pokedex />
            </PokeSearch>
        </div>
    );
}

export default App;

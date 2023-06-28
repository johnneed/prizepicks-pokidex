import React from "react";
import styles from "./PokeSpinnerl.module.css";
import logo from "../../poke_ball_icon.svg";


export const PokeSpinner = () => {

    return (
        <div className={styles["poke-spinner"]}>
            <img src={logo} className="App-logo" alt="pokeball" />
            <div>Catching Pokemons</div>
        </div>
    );
};


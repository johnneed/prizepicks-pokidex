import React from "react";
import styles from "./SearchResults.module.css";
import { PokeCard } from "../PokeCard";
import { Pokemon } from "pokenode-ts";
import { PokeSpinner } from "../PokeSpinner";

type statusType = "idle" | "loading" | "failed";
type ToolbarProps = {
    status: statusType;
    pokemon?: Pokemon | null;
}
export const SearchResults = ({ status, pokemon }: ToolbarProps) => {

    const renderSwitch = (status: statusType, pokemon?: Pokemon | null) => {
        switch (true) {
            case Boolean(pokemon) :
                return pokemon ?  <PokeCard pokemon={pokemon} /> : <div className={styles["search-results_error"]}>No Pokemon Selected</div>;
            case status === "failed" :
                return <div className={styles["search-results_error"]}>Sorry, couldn't catch that Pokemon</div>;
            default:
                return <PokeSpinner/>;
        }
    };

    return (
        <div className={styles["search_results"]}>
            {renderSwitch(status, pokemon)}
        </div>
    );
};


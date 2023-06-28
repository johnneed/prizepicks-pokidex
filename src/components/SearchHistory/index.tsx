import React from "react";
import styles from "./SearchHistory.module.css";
import { Pokemon } from "pokenode-ts";
import logo from "../../poke_ball_icon.svg";

type SearchHistoryProps = {
    history: Pokemon[];
    setHistoryIndex: (index: number) => void;
}
export const SearchHistory = ({ history, setHistoryIndex }: SearchHistoryProps) => {
    const hasHistory = history.length > 0;
    return (
        <div className={styles["search-history"]}>
            {!hasHistory && <div className={styles["search-history_no-history"]}>Sorry, no history here.<br/>Try Searching for something.</div> }
            {history.map((pokemon, index) => (
                    <div className={styles["search-history_back-header"]} onClick={() => setHistoryIndex(index)}>
                        <img className={styles["search-history_small-image"]} alt={pokemon.name}
                             src={pokemon.sprites.front_default || logo} />
                        <div className={styles["search-history_name"]}>{pokemon.name}</div>
                    </div>
            ))}
        </div>
    );
};


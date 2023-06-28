import React, { useState, Fragment } from "react";
import styles from "./PokeSearch.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    searchPokemons,
    selectHistoryIndex,
    selectHistory,
    selectSearchStatus,
    setSearchHistoryIndex
} from "./pokeSearchSlice";
import { Toolbar } from "../../components/Toolbar";
import { SearchResults } from "../../components/SearchResults";
import { SearchHistory } from "../../components/SearchHistory";

type PokeSearchProps = {
    children: React.ReactNode
}

export function PokeSearch({ children }: PokeSearchProps) {
    const [isVisible, setIsVisible] = useState(false);
    const historyIndex = useAppSelector(selectHistoryIndex);
    const history = useAppSelector(selectHistory);
    const searchStatus = useAppSelector(selectSearchStatus);
    const dispatch = useAppDispatch();
    const selectedPokemon = searchStatus === "idle" ? history[historyIndex] : null;
    const [content, setContent] = useState("search-results");
    const searchPokemon = (name: string) => {
        if (name && name !== "") {
            dispatch(searchPokemons(name));
            setContent("search-results");
            setIsVisible(true);
        }
    };

    const toggleSearchPanel = () => {
        setIsVisible(!isVisible);
    };

    const openHistory = () => {
        setContent("history");
        setIsVisible(true);
    };

    const setHistoryIndex = (index: number) => {
        if (index >= 0 && index < history.length) { // Sanity Check
            dispatch(setSearchHistoryIndex(index));
            setContent("search-results");
        }
    };

    return (
        <Fragment>
            <Toolbar onSubmit={searchPokemon} isResultsPanelOpen={isVisible}
                     openHistory={openHistory}
                     toggleSearchPanel={toggleSearchPanel} />
            {children}
            <div className={isVisible ? styles["results-panel_visible"] : styles["results-panel_hidden"]}>
                {
                    (content === "history")
                        ? <SearchHistory history={history} setHistoryIndex={setHistoryIndex} />
                        : <SearchResults status={searchStatus} pokemon={selectedPokemon} />
                }
            </div>
        </Fragment>

    );
}

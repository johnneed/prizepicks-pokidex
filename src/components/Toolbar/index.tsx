import React, { FormEvent, useState } from "react";
import styles from "./Toolbar.module.css";

type ToolbarProps = {
    onSubmit: (searchTerm: string) => void;
    openHistory: () => void;
    toggleSearchPanel: () => void;
    isResultsPanelOpen: boolean;
}
export const Toolbar = ({ onSubmit, isResultsPanelOpen, toggleSearchPanel, openHistory,}: ToolbarProps) => {

    const [searchTerm, setSearchTerm] = useState("");
    const search = (e:FormEvent) => {
        e.preventDefault();
        onSubmit(searchTerm);
        setSearchTerm("");
    };

    return (
        <div className={styles["toolbar"]}>
            <form className={styles["toolbar_search"]} onSubmit={search}>
                <input placeholder={"Search Pokemon by Name"} className={styles["toolbar_input"]} type={"text"}
                       value={searchTerm} onChange={evt => setSearchTerm(evt.target.value)} />
                <button title={"search"} className={styles["toolbar_submit"]} onClick={search}>&#x1F50E;</button>
            </form>
            <button disabled={!isResultsPanelOpen} title={"Close Panel"}  className={styles["toolbar_toggle-panel"]} onClick={toggleSearchPanel}>
                <span>&#128942;</span>
            </button>
            <button title={"Search History"}  className={styles["toolbar_show-history"]} onClick={openHistory}>
                <span className={styles["toolbar_open-search-history"]}>&#128214;</span>
            </button>
        </div>
    );
};


import React, { FormEvent, useState } from "react";
import styles from "./Toolbar.module.css";
import historyIcon from "../../icon-history.svg";
import closeIcon from "../../icon-close.svg";
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
            <button
                disabled={!isResultsPanelOpen} title={"Close Panel"}
                className={styles["toolbar_toggle-panel"]}
                onClick={toggleSearchPanel}
                style={{backgroundImage: "url('" +closeIcon+"')"}}
            />

            <button
                title={"Search History"}
                className={styles["toolbar_show-history"]}
                onClick={openHistory}
                style={{backgroundImage: "url('" +historyIcon+"')"}}
            />

        </div>
    );
};


import React from "react";
import "./ToDoSearch.css";
import { TodoContext } from "../ToDoContext";

function ToDoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => { setSearchValue(event.target.value); }

    return (
        <div className="ToDoSearchContainer">
            <input className="ToDoSearch"
                value={searchValue}
                onChange={onSearchValueChange}
                placeholder="Cebolla" />
        </div>
    );
}

export { ToDoSearch };

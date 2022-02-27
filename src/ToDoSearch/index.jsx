import React from "react";
import "./ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => { setSearchValue(event.target.value);}
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

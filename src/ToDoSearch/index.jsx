import React from "react";
import "./ToDoSearch.css";


function ToDoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => { setSearchValue(event.target.value); }

    return (
        <div className="ToDoSearchContainer">
            <input
                className="ToDoSearch"
                value={searchValue}
                onChange={onSearchValueChange}
                placeholder="Onion"
                disabled={loading} />
        </div>
    );
}

export { ToDoSearch };

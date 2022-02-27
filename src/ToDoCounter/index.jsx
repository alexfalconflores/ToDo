import React from "react";
import './ToDoCounter.css';

import { TodoContext } from "../ToDoContext";

function ToDoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="ToDoCounter">Has completed {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { ToDoCounter };
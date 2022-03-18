import React from "react";
import './ToDoCounter.css';

function ToDoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <h2
            className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}>
            Has completed {completedTodos} de {totalTodos} TODOs
        </h2>
    );
}

export { ToDoCounter };
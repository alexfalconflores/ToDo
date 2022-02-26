import React from "react";
import "./ToDoItem.css";

// ✅
// ⏹️

function ToDoItem(props) {

    return (
        <li className="ToDoItem">
            <span
                onClick={props.onComplete}>
                {props.completed ? "✅" : "⏹️"}
            </span>
            <p className={`${props.completed && "IconCheckCompleted"}`}> {props.text} </p>
            <span onClick={props.onDelete}> ❌ </span>
        </li>
    );
}

export { ToDoItem };

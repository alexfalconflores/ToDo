import React from "react";
import { TodoContext } from "../ToDoContext";

import './ToDoForm.css';

function ToDoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}
            className="formTodo">
            <label>Write your TODO</label>
            <textarea value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo" />
            <div className="containerButtonsForm">
                <button type="submit">Add TODO</button>
                <button type="button"
                    onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}


export { ToDoForm };
import React from "react";

import { TodoContext } from '../ToDoContext';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';

function AppUI() {
    const { error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (<React.Fragment>
        <ToDoCounter />
        <ToDoSearch />

        <ToDoList>
            {error && <div>error...</div>}
            {loading && <div>Loading...</div>}
            {(!loading && !searchedTodos.length) && <p>Create your first Todo</p>}
            {searchedTodos.map(todo => (
                <ToDoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} />
            ))}
        </ToDoList>
        {openModal && (
            <Modal>
                <p>{searchedTodos?.length}</p>
            </Modal>
        )}

        <CreateToDoButton 
        setOpenModal={setOpenModal}/>
    </React.Fragment>);
}

export { AppUI };
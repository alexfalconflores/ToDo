import React from "react";

import { TodoContext } from '../ToDoContext';
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoForm } from "../ToDoForm";

function AppUI() {
    const { error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

    return (<React.Fragment>
        <ToDoHeader>
            <ToDoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos} />
            <ToDoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue} />
        </ToDoHeader>

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
                <ToDoForm />
            </Modal>
        )}

        <CreateToDoButton
            setOpenModal={setOpenModal} />
    </React.Fragment>);
}

export { AppUI };
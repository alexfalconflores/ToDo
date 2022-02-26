import React from "react";

import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (<React.Fragment>
        <ToDoCounter
            total={totalTodos}
            completed={completedTodos}
        />

        <ToDoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue} />

        <ToDoList>
            {searchedTodos.map(todo => (
                <ToDoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} />
            ))}
        </ToDoList>

        <CreateToDoButton />
    </React.Fragment>);
}

export { AppUI };
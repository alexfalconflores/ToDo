import React from "react";

import { useToDos } from "./useToDos";
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoForm } from "../ToDoForm";
import { ToDoError } from "../ToDoError";
import { ToDoLoading } from "../ToDoLoading";
import { ToDoEmpty } from "../ToDoEmpty";

function App() {
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
    addTodo,
  } = useToDos();

  return (<React.Fragment>
    <ToDoHeader>
      <ToDoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos} />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} />
    </ToDoHeader>

    <ToDoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      onError={() => <ToDoError />}
      onLoading={() => <ToDoLoading />}
      onEmpty={() => <ToDoEmpty />}
      render={todo => (
        <ToDoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)} />)}
    />
    {openModal && (
      <Modal>
        <ToDoForm addTodo={addTodo} setOpenModal={setOpenModal} />
      </Modal>
    )}

    <CreateToDoButton
      setOpenModal={setOpenModal} />
  </React.Fragment>);
}

export default App;

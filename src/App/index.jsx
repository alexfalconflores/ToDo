import React from "react";

import { TodoProvider } from "../ToDoContext";
import { AppUI } from "./AppUI";


function App() {
  const [state, setState] = React.useState('Estado Compartido');
  return (
    <React.Fragment>
      <ToDoHeader >
        <ToDoCounter />
        <ToDoSearch />
      </ToDoHeader>
      <ToDoList>
        <ToDoItem state={state} />
      </ToDoList>
    </React.Fragment>
  )
}
function ToDoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  )
}
function ToDoList({ children }) {
  return (
    <section className="ToDoList-container">
      {children}
    </section>
  )
}
function ToDoCounter() {
  return <p>ToDoCounter</p>
}
function ToDoSearch() {
  return <p>ToDoSearch</p>
}
function ToDoItem({ state }) {
  return <p>ToDoItem : {state}</p>
}

// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;

import React from "react";

import { TodoProvider } from "../ToDoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Make la compra', completed: false },
//   { text: 'Make Dinner', completed: false },
//   { text: 'Make la limpieza', completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

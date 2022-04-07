import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  return (
    <section className="ToDoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {(!props.loading && !props.error) && props.searchedTodos.map(props.render || props.children)}
      <ul>{props.children}</ul>
    </section>
  );
}

export { ToDoList };

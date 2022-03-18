import React from "react";
import "./ToDoList.css";

function ToDoList(props) {
  return (
    <section className="ToDoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos.length) && props.onEmpty()}
      {props.searchedTodos.map(props.render)}
      <ul>{props.children}</ul>
    </section>
  );
}

export { ToDoList };

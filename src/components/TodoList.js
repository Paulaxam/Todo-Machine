import React from "react";

function TodoList(props) {
  return (
    <section className="todoList">
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };

import React from "react";

function TodoList(props) {
  const renderFun = props.render || props.children;
  return (
    <section className="todoList">
      {props.error && props.onError}
      {props.loading && props.onLoading}
      {!props.loading && !props.searchedTodos.length && props.onEmpty}
      <ul>
        {!props.error && !props.loading && props.searchedTodos.map(renderFun)}
      </ul>
    </section>
  );
}

export { TodoList };

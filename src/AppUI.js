import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoContext } from "./TodoContext/TodoContext";
import { createPortal } from "react-dom";
import { Modal } from "./components/Modal";
import { LoadingView } from "./components/LoadingView";
import { EmptyView } from "./components/EmptyView";
import { ErrorView } from "./components/ErrorView";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <ErrorView />}
        {loading && <LoadingView />}
        {!loading && !searchedTodos.length && <EmptyView />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && document.getElementById("modal").classList.remove("hidden")}

      {!openModal && document.getElementById("modal").classList.add("hidden")}

      {openModal && createPortal(<Modal />, document.getElementById("modal"))}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };

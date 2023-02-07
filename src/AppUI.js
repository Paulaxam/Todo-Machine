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
import { TodoHeader } from "./components/TodoHeader";
import { TodoForm } from "./components/TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodos,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

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

      {openModal &&
        createPortal(
          <Modal>
            <TodoForm setOpenModal={setOpenModal} addTodos={addTodos} />
          </Modal>,
          document.getElementById("modal")
        )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };

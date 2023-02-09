import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { createPortal } from "react-dom";
import { Modal } from "./components/Modal";
import { LoadingView } from "./components/LoadingView";
import { EmptyView } from "./components/EmptyView";
import { ErrorView } from "./components/ErrorView";
import { TodoHeader } from "./components/TodoHeader";
import { TodoForm } from "./components/TodoForm";
import { useTodos } from "./useTodos";
import { ChangedAlert } from "./components/ChangedAlert";

function App() {
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
    sincronizedTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={<ErrorView />}
        onLoading={<LoadingView />}
        onEmpty={
          <EmptyView searchValue={searchValue} searchedTodos={searchedTodos} />
        }
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            createdAt={todo.createdAt}
            completed={todo.completed}
            onCompleted={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      >
        {/* {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )} */}
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

      <ChangedAlert sincronize={sincronizedTodos} />

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;

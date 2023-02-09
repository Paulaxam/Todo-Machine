import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronize: sincronizedTodos,
    sincronizedItem,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoToLowerCase = todo.text.toLowerCase();
      const searchTodoToLowerCase = searchValue.toLowerCase();
      return todoToLowerCase.includes(searchTodoToLowerCase);
    });
  }

  const addTodos = (text) => {
    const newTodos = [...todos];
    const creation = new Date().toLocaleDateString("en-GB");
    newTodos.push({
      text,
      completed: false,
      createdAt: creation,
    });
    saveTodos(newTodos);
  };

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todoIndex].completed) {
      newTodos[todoIndex].completed = true;
    } else {
      newTodos[todoIndex].completed = false;
    }
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    addTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    sincronizedItem,
    sincronizedTodos,
  };
}

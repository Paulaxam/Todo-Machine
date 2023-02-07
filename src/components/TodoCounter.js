import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <h1>¿Qué quieres hacer hoy?</h1>
      <h2 className="todoCounter">
        Has completado {completedTodos} de {totalTodos} tareas
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };

import React from "react";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <React.Fragment>
      <h1>¿Qué quieres hacer hoy?</h1>
      <h2 className={`todoCounter ${!!loading && "todoCounter--loading"}`}>
        Has completado {completedTodos} de {totalTodos} tareas
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };

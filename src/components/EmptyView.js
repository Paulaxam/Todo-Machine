import React from "react";

export function EmptyView(props) {
  const icon = "https://img.icons8.com/doodle/96/000000/why-quest.png";
  return (
    <div className="emptyView">
      <img src={icon} alt="Empty icon"></img>
      {props.searchValue && <p>No tienes tareas con {props.searchValue}</p>}
      {!props.searchValue && !props.searchedTodos.length && (
        <p>Parece que no has creado ninguna tarea aún</p>
      )}
    </div>
  );
}

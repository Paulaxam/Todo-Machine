import React from "react";

export function EmptyView() {
  const icon = "https://img.icons8.com/doodle/96/000000/why-quest.png";
  return (
    <div className="emptyView">
      <img src={icon} alt="Empty icon"></img>
      <p>Parece que no tienes tareas</p>
    </div>
  );
}

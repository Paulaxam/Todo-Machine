import React from "react";

export function ErrorView() {
  const icon = "https://img.icons8.com/doodle/96/000000/edvard-munch.png";
  return (
    <div className="errorView">
      <img src={icon} alt="Error icon"></img>
      <p>Ups! Algo salió muy mal, no pudimos cargar tus tareas!</p>
    </div>
  );
}

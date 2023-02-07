import React from "react";

export function LoadingView() {
  const icon = "https://img.icons8.com/doodle/192/null/search--v1.png";
  return (
    <div className="loadingView">
      <p>Cargando tareas...</p>
      <img src={icon} alt="Search icon"></img>
    </div>
  );
}

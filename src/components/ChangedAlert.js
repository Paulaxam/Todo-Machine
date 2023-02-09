import React from "react";

export function ChangedAlert({ sincronize }) {
  const [storageChange, setStorageChange] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    });
  }, []);

  if (storageChange) {
    return (
      <div className="changedStorage">
        <div className="changedStorage__container">
          <p>
            Parece que modificaste tus tareas en otra pestaña o ventana del
            navegador
          </p>
          <button
            onClick={() => {
              setStorageChange(false);
              sincronize();
            }}
          >
            Sincronizar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

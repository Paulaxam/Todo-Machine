import React from "react";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="todoSearch_container">
      <input
        className="todoSearch"
        placeholder="¿Buscas alguna tarea?"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </div>
  );
}

export { TodoSearch };

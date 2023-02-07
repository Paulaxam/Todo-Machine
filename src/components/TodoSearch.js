import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  return (
    <div className="todoSearch_container">
      <input
        className="todoSearch"
        placeholder="¿Buscas alguna tarea?"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };

import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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

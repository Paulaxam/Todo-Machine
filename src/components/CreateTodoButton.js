import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

function CreateTodoButton(props) {
  const iconCreateBtn = {
    url: "https://img.icons8.com/doodle/96/null/add.png",
    alt: "add task icon",
  };

  const createTodoOnClick = () => {
    props.setOpenModal(true);
  };

  return (
    <button className="createTodoButton" onClick={createTodoOnClick}>
      <img src={iconCreateBtn.url} alt={iconCreateBtn.alt} />
    </button>
  );
}

export { CreateTodoButton };

import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoForm(props) {
  const { setOpenModal, addTodos } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const iconsModal = {
    close: {
      url: "https://img.icons8.com/doodle/96/null/delete-sign.png",
      alt: "close icon",
    },
    check: {
      url: "https://img.icons8.com/doodle/96/null/checkmark.png",
      alt: "check icon",
    },
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const onAdd = () => {
    if (newTodoValue) {
      addTodos(newTodoValue);
    }
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <React.Fragment>
      <textarea
        className="modal__container--input"
        placeholder="Escribe aquí tu tarea"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="modal__container--btns">
        <img
          src={iconsModal.close.url}
          alt={iconsModal.close.alt}
          onClick={closeModal}
        ></img>
        <img
          src={iconsModal.check.url}
          alt={iconsModal.check.alt}
          onClick={onAdd}
        ></img>
      </div>
    </React.Fragment>
  );
}

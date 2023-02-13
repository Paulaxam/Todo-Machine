import React from "react";

const iconsTodoItem = {
  close: {
    url: "https://img.icons8.com/doodle/96/null/delete-sign.png",
    alt: "close icon",
  },
  check: {
    url: "https://img.icons8.com/doodle/96/null/checkmark.png",
    alt: "check icon",
  },
  info: {
    url: "https://img.icons8.com/doodle/96/000000/information.png",
    alt: "info icon",
  },
};

function TodoItem(props) {
  const [showInfo, setShowInfo] = React.useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);

  return (
    <li className={`todoItem ${props.completed && "todoItem--completed"}`}>
      <div className="todoItem--container">
        <div
          className={`todoItem--container__todo ${
            !!showConfirmDelete && "hidden"
          }`}
        >
          <img
            className="checkIcon"
            src={iconsTodoItem.check.url}
            alt={iconsTodoItem.check.alt}
            onClick={props.onCompleted}
          ></img>
          <img
            className="infoIcon"
            src={iconsTodoItem.info.url}
            alt={iconsTodoItem.info.alt}
            onClick={() => setShowInfo(!showInfo)}
          ></img>
          <p className="p-todo">
            <span className={`date ${!showInfo && "hidden"}`}>
              {props.createdAt}{" "}
            </span>
            {props.text}
          </p>
          <img
            className="closeIcon"
            src={iconsTodoItem.close.url}
            alt={iconsTodoItem.close.alt}
            onClick={() => setShowConfirmDelete(true)}
          ></img>
        </div>

        <div
          className={`todoItem--container__deletePopUp ${
            !showConfirmDelete && "hidden"
          }`}
        >
          <p>Seguro que deseas eliminar esta tarea?</p>
          <div className="todoItem--container__deletePopUp--confirm">
            <img
              className="closeIcon"
              src={iconsTodoItem.close.url}
              alt={iconsTodoItem.close.alt}
              onClick={() => setShowConfirmDelete(false)}
            ></img>
            <img
              className="checkIcon"
              src={iconsTodoItem.check.url}
              alt={iconsTodoItem.check.alt}
              onClick={props.onDelete}
            ></img>
          </div>
        </div>
      </div>
    </li>
  );
}

export { TodoItem };

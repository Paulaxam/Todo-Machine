import React from "react";

function TodoItem(props) {
  const iconsTodoItem = {
    close: {
      url: "https://img.icons8.com/doodle/96/null/delete-sign.png",
      alt: "close icon",
    },
    check: {
      url: "https://img.icons8.com/doodle/96/null/checkmark.png",
      alt: "check icon",
    },
  };

  return (
    <li className={`todoItem ${props.completed && "todoItem--completed"}`}>
      <div className="todoItem--container">
        <img
          className="checkIcon"
          src={iconsTodoItem.check.url}
          alt={iconsTodoItem.check.alt}
          onClick={props.onCompleted}
        ></img>
        <p>
          <span className="date">{props.createdAt} </span>
          {props.text}
        </p>
        <img
          className="closeIcon"
          src={iconsTodoItem.close.url}
          alt={iconsTodoItem.close.alt}
          onClick={props.onDelete}
        ></img>
      </div>
    </li>
  );
}

export { TodoItem };
